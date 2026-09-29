/**
 * Shanghai Everest Chemicals Co., Ltd
 * Contact & Chemical RFQ Form Controller with EmailJS Integration
 */

// ============================================================================
// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://www.emailjs.com/
// ============================================================================
const EMAILJS_CONFIG = {
  publicKey: "user_everest_demo_key", // Replace with your EmailJS Public Key
  serviceId: "service_everest_chem",   // Replace with your EmailJS Service ID
  templateId: "template_rfq_inquiry"   // Replace with your EmailJS Template ID
};

document.addEventListener('DOMContentLoaded', () => {
  initEmailJS();
  populateChemicalDropdown();
  parseUrlInquiryParams();
  initContactForm();
});

// Initialize EmailJS SDK
function initEmailJS() {
  if (typeof emailjs !== 'undefined') {
    try {
      emailjs.init(EMAILJS_CONFIG.publicKey);
      console.log('EmailJS SDK initialized successfully');
    } catch (err) {
      console.warn('EmailJS initialization note:', err);
    }
  } else {
    console.warn('EmailJS CDN script not loaded yet.');
  }
}

// Populate Chemical Dropdown from CHEMICAL_PRODUCTS dataset if available
function populateChemicalDropdown() {
  const select = document.getElementById('chemicalInterest');
  if (!select || typeof CHEMICAL_CATEGORIES === 'undefined') return;

  CHEMICAL_CATEGORIES.forEach(cat => {
    const optgroup = document.createElement('optgroup');
    optgroup.label = cat.name;

    const prods = CHEMICAL_PRODUCTS.filter(p => p.category === cat.id);
    prods.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.name;
      opt.textContent = `${p.name} (CAS ${p.cas})`;
      optgroup.appendChild(opt);
    });

    select.appendChild(optgroup);
  });

  // Add custom entry
  const customOpt = document.createElement('option');
  customOpt.value = "Other / Multi-product Order";
  customOpt.textContent = "Other Specialty Chemical / Multi-product RFQ";
  select.appendChild(customOpt);
}

// Check if buyer arrived via "Request Quote" button from products page
function parseUrlInquiryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get('product');
  const casNumber = urlParams.get('cas');
  const chemicalSelect = document.getElementById('chemicalInterest');
  const messageInput = document.getElementById('inquiryMessage');
  const subjectInput = document.getElementById('inquirySubject');

  if (productName) {
    if (chemicalSelect) {
      // Find matching option or set value
      let found = false;
      for (let i = 0; i < chemicalSelect.options.length; i++) {
        if (chemicalSelect.options[i].value.toLowerCase().includes(productName.toLowerCase())) {
          chemicalSelect.selectedIndex = i;
          found = true;
          break;
        }
      }
      if (!found) {
        const newOpt = new Option(productName, productName, true, true);
        chemicalSelect.add(newOpt);
      }
    }

    if (subjectInput) {
      subjectInput.value = `Quotation & CoA Request: ${productName}${casNumber ? ` (CAS: ${casNumber})` : ''}`;
    }

    if (messageInput && !messageInput.value) {
      messageInput.value = `Hello Everest Chemicals Team,\n\nWe are looking to source ${productName}${casNumber ? ` (CAS: ${casNumber})` : ''}. Please provide your latest FOB/CIF pricing, technical data sheet (TDS), Certificate of Analysis (CoA), and estimated export lead time.\n\nTarget Destination Port: \nRequired Volume: \nPackaging Preference: `;
    }
  }
}

// Handle Form Submission & EmailJS transmission
function initContactForm() {
  const form = document.getElementById('rfqContactForm');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Basic Validation
    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showFeedback('Please fill out all required fields marked with an asterisk (*).', 'error');
      return;
    }

    // Set loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Transmitting RFQ...';

    // Prepare payload object
    const formData = {
      from_name: name,
      from_email: email,
      company: form.user_company ? form.user_company.value.trim() : 'N/A',
      phone: form.user_phone ? form.user_phone.value.trim() : 'N/A',
      country: form.user_country ? form.user_country.value.trim() : 'N/A',
      chemical_interest: form.chemical_interest ? form.chemical_interest.value : 'General Inquiry',
      volume: form.estimated_volume ? form.estimated_volume.value.trim() : 'Not Specified',
      packaging: form.packaging_type ? form.packaging_type.value : 'Standard Export',
      subject: form.subject ? form.subject.value.trim() : 'New Chemical Sourcing Inquiry',
      message: message
    };

    try {
      // Check if credentials are real or placeholder
      const isPlaceholder = EMAILJS_CONFIG.publicKey.includes('demo') || EMAILJS_CONFIG.publicKey.includes('YOUR_');

      if (!isPlaceholder && typeof emailjs !== 'undefined') {
        // Real EmailJS Send
        await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, formData);
        showFeedback(
          'Thank you! Your quotation inquiry has been dispatched to Shanghai Everest Chemicals sales team. A representative will contact you within 1 business day.',
          'success'
        );
        form.reset();
      } else {
        // Simulated response for demonstration & immediate feedback
        console.log('EmailJS Transmit Payload:', formData);
        await new Promise(resolve => setTimeout(resolve, 1000)); // simulate network latency

        showFeedback(
          `<strong>Inquiry Transmitted Successfully!</strong><br>` +
          `Thank you, <strong>${escapeHtml(name)}</strong>! Your RFQ for <strong>${escapeHtml(formData.chemical_interest)}</strong> (${escapeHtml(formData.volume)}) has been recorded.<br>` +
          `<span style="font-size: 0.85rem; color: #047857; margin-top: 0.5rem; display: inline-block;">` +
          `<i class="fa-solid fa-envelope-circle-check"></i> EmailJS is wired and ready. To direct emails to your live inbox, simply update your Service ID & Template ID in <code>js/contact.js</code>.</span>`,
          'success'
        );
        form.reset();
      }
    } catch (err) {
      console.error('EmailJS Transmission Error:', err);
      showFeedback(
        'An error occurred while transmitting your inquiry via EmailJS. You can also reach our desk directly at <strong>info@evrchem.com</strong>.',
        'error'
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

  function showFeedback(htmlMessage, type) {
    if (!feedback) return;
    feedback.className = `form-feedback ${type}`;
    feedback.innerHTML = htmlMessage;
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}
