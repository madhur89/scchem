/**
 * Shanghai Everest Chemicals Co., Ltd
 * Product Catalog Dynamic Renderer & Filtering Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof CHEMICAL_PRODUCTS === 'undefined') return;

  initProductCatalog();
  initProductModal();
});

let currentCategory = 'all';
let currentSearch = '';

function initProductCatalog() {
  const container = document.getElementById('productsContainer');
  const pillsContainer = document.getElementById('categoryPills');
  const searchInput = document.getElementById('catalogSearchInput');
  const resultsCounter = document.getElementById('resultsCounter');

  if (!container) return;

  // Read URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  const searchParam = urlParams.get('search');

  if (catParam) currentCategory = catParam;
  if (searchParam) {
    currentSearch = searchParam;
    if (searchInput) searchInput.value = searchParam;
  }

  // Render category pill filters
  renderCategoryPills(pillsContainer);

  // Initial render
  filterAndRender();

  // Search input event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      filterAndRender();
    });
  }
}

function renderCategoryPills(container) {
  if (!container) return;

  const totalCount = CHEMICAL_PRODUCTS.length;
  let html = `
    <button class="category-pill ${currentCategory === 'all' ? 'active' : ''}" data-cat="all">
      <i class="fa-solid fa-layer-group"></i> All Chemicals
      <span class="badge">${totalCount}</span>
    </button>
  `;

  CHEMICAL_CATEGORIES.forEach(cat => {
    const isActive = currentCategory === cat.id ? 'active' : '';
    html += `
      <button class="category-pill ${isActive}" data-cat="${cat.id}">
        <i class="fa-solid ${cat.icon}"></i> ${cat.name}
        <span class="badge">${cat.count}</span>
      </button>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll('.category-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-cat');
      filterAndRender();
    });
  });
}

function filterAndRender() {
  const container = document.getElementById('productsContainer');
  const resultsCounter = document.getElementById('resultsCounter');
  if (!container) return;

  let filtered = CHEMICAL_PRODUCTS;

  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.cas.toLowerCase().includes(q) ||
      p.formula.toLowerCase().includes(q) ||
      p.applications.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  if (resultsCounter) {
    resultsCounter.textContent = `Showing ${filtered.length} chemical${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <i class="fa-solid fa-flask" style="font-size: 3rem; color: var(--slate-300); margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.5rem; color: var(--slate-800); margin-bottom: 0.5rem;">No chemicals found</h3>
        <p style="color: var(--slate-500); max-width: 480px; margin-inline: auto; margin-bottom: 1.5rem;">
          We couldn't find any products matching "${escapeHtml(currentSearch)}". Please check the spelling or explore our 16 main categories.
        </p>
        <button class="btn btn-outline" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prod => `
    <div class="product-card" data-id="${prod.id}">
      <div class="product-card-header">
        <span class="product-category-tag">${getCategoryName(prod.category)}</span>
        <span class="product-cas">CAS ${prod.cas}</span>
      </div>

      <h3 class="product-title">${escapeHtml(prod.name)}</h3>
      <div class="product-formula"><i class="fa-solid fa-atom"></i> ${escapeHtml(prod.formula)}</div>

      <div class="product-specs-list">
        <div class="product-spec-row">
          <span class="label">Purity:</span>
          <span class="val">${escapeHtml(prod.purity)}</span>
        </div>
        <div class="product-spec-row">
          <span class="label">Packaging:</span>
          <span class="val">${escapeHtml(prod.packaging[0])}</span>
        </div>
        <div class="product-spec-row">
          <span class="label">Compliance:</span>
          <span class="val" style="color: var(--accent-emerald);"><i class="fa-solid fa-circle-check"></i> ${escapeHtml(prod.reachStatus)}</span>
        </div>
      </div>

      <p class="product-apps">
        <strong>Applications:</strong> ${escapeHtml(prod.applications)}
      </p>

      <div class="product-card-footer">
        <button class="btn btn-outline btn-sm" onclick="openProductModal('${prod.id}')">
          <i class="fa-solid fa-circle-info"></i> View Specs
        </button>
        <a href="contact.html?product=${encodeURIComponent(prod.name)}&cas=${encodeURIComponent(prod.cas)}" class="btn btn-primary btn-sm">
          <i class="fa-solid fa-paper-plane"></i> Request Quote
        </a>
      </div>
    </div>
  `).join('');
}

function getCategoryName(catId) {
  const c = CHEMICAL_CATEGORIES.find(item => item.id === catId);
  return c ? c.name : catId;
}

function resetFilters() {
  currentCategory = 'all';
  currentSearch = '';
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) searchInput.value = '';
  const pills = document.querySelectorAll('.category-pill');
  pills.forEach(p => p.classList.remove('active'));
  if (pills[0]) pills[0].classList.add('active');
  filterAndRender();
}

// Product Details Modal
function initProductModal() {
  const modal = document.getElementById('productModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
      }
    });
  }
}

window.openProductModal = function(productId) {
  const prod = CHEMICAL_PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById('productModal');
  const title = document.getElementById('modalProductTitle');
  const body = document.getElementById('modalProductBody');

  if (!modal || !title || !body) return;

  title.textContent = prod.name;
  body.innerHTML = `
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
      <span class="product-category-tag">${getCategoryName(prod.category)}</span>
      <span class="product-cas">CAS: ${prod.cas}</span>
      <span class="product-cas">Formula: ${prod.formula}</span>
    </div>

    <div style="background: var(--slate-50); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.95rem; margin-bottom: 0.75rem; color: var(--slate-800);"><i class="fa-solid fa-microscope" style="color: var(--primary-500);"></i> Technical Specifications</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.9rem;">
        <div><strong>Purity:</strong> ${prod.purity}</div>
        <div><strong>Standard:</strong> ${prod.reachStatus}</div>
        <div style="grid-column: 1 / -1;"><strong>Appearance:</strong> ${prod.appearance}</div>
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--slate-800);"><i class="fa-solid fa-boxes-stacked" style="color: var(--primary-500);"></i> Available Export Packaging</h4>
      <ul style="list-style: disc; margin-left: 1.25rem; font-size: 0.9rem; color: var(--slate-600); line-height: 1.6;">
        ${prod.packaging.map(pkg => `<li>${pkg}</li>`).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--slate-800);"><i class="fa-solid fa-industry" style="color: var(--primary-500);"></i> Industrial Applications</h4>
      <p style="font-size: 0.9rem; color: var(--slate-600); line-height: 1.6;">${prod.applications}</p>
    </div>

    <div style="display: flex; gap: 1rem; align-items: center; justify-content: flex-end; padding-top: 1rem; border-top: 1px solid var(--slate-200);">
      <button class="btn btn-outline" onclick="document.getElementById('productModal').classList.remove('active')">Close</button>
      <a href="contact.html?product=${encodeURIComponent(prod.name)}&cas=${encodeURIComponent(prod.cas)}" class="btn btn-primary">
        <i class="fa-solid fa-file-invoice-dollar"></i> Request Instant Quote
      </a>
    </div>
  `;

  modal.classList.add('active');
};

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}
