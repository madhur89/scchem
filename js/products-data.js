/**
 * Shanghai Everest Chemicals Co., Ltd
 * Complete Product Catalog Data
 * Extracted & curated from official company brochure
 */

const CHEMICAL_CATEGORIES = [
  { id: "acetates", name: "Acetates", count: 3, icon: "fa-flask-vial", description: "High-grade ester solvents utilized extensively in coatings, inks, adhesives, and pharmaceutical extraction." },
  { id: "acrylates", name: "Acrylates", count: 8, icon: "fa-atom", description: "Essential monomer building blocks for polymer emulsions, superabsorbents, paints, and textile auxiliaries." },
  { id: "alcohols", name: "Alcohols", count: 14, icon: "fa-vial", description: "Broad-spectrum industrial, specialty, and solvent alcohols for chemical synthesis, cosmetics, and resins." },
  { id: "amines-amides", name: "Amines & Amides", count: 14, icon: "fa-dna", description: "Nitrogen-based specialty chemicals, intermediate precursors for agrochemicals, pharmaceuticals, and dyes." },
  { id: "anhydrides", name: "Anhydrides", count: 3, icon: "fa-cubes-stacked", description: "Reactive carboxylic acid anhydrides for polyester resins, plasticizers, and curing agents." },
  { id: "aromatics", name: "Aromatics", count: 9, icon: "fa-shapes", description: "Core benzene derivatives, styrene polymers, and aromatic ingredients for high-performance chemical manufacturing." },
  { id: "chlorinated", name: "Chlorinated Solvents", count: 5, icon: "fa-shield-halved", description: "High-solvency chlorinated hydrocarbons engineered for vapor degreasing, extraction, and synthesis." },
  { id: "ketones", name: "Ketones", count: 4, icon: "fa-droplet", description: "Fast and medium evaporating solvents delivering superior solvency in paints, lacquers, and resins." },
  { id: "hydrocarbons", name: "Hydrocarbons & Alkanes", count: 7, icon: "fa-fire-flame-simple", description: "Aliphatic and cycloalkane hydrocarbons for extraction, rubber dissolution, and polymer processing." },
  { id: "ethers", name: "Ether Solvents", count: 4, icon: "fa-wind", description: "Versatile ether solvents featuring excellent chemical stability for organometallic reactions and pharmaceuticals." },
  { id: "organic-acids", name: "Organic Acids", count: 5, icon: "fa-seedling", description: "Carboxylic acids used across food additives, textile dyeing, leather tanning, and synthetic fibers." },
  { id: "inorganics", name: "Inorganic Chemicals", count: 11, icon: "fa-gem", description: "Heavy industrial alkalis, inorganic pigments, mineral acids, and surfactants for detergents & metallurgy." },
  { id: "monomers", name: "Monomers", count: 4, icon: "fa-puzzle-piece", description: "Polymerization monomers vital for polystyrene, polyvinyl acetate emulsions, and synthetic rubbers." },
  { id: "polyurethane", name: "Polyurethane Materials", count: 3, icon: "fa-layer-group", description: "Diisocyanates and polyols engineered for flexible & rigid PU foams, elastomers, and sealants." },
  { id: "resins-coatings", name: "Resins & Coatings", count: 7, icon: "fa-paint-roller", description: "Thermoset resins, UPR, vinyl esters, and eco-friendly protective coatings for composite structures." },
  { id: "aldehydes", name: "Aldehydes", count: 1, icon: "fa-temperature-arrow-up", description: "Reactive carbonyl intermediates critical for plasticizer alcohols, scents, and agrochemical synthesis." }
];

const CHEMICAL_PRODUCTS = [
  // 1. Acetates
  {
    id: "etac",
    name: "Ethyl Acetate (ETAC)",
    category: "acetates",
    cas: "141-78-6",
    formula: "C4H8O2",
    purity: "≥ 99.8%",
    appearance: "Clear, colorless liquid with fruity aroma",
    packaging: ["ISO Tank (20-22 MT)", "200L Steel Drum (180 kg)", "IBC Tote (1000L)"],
    applications: "Paints & lacquers, printing inks, adhesive formulations, pharmaceutical synthesis, food flavoring decaffeination.",
    reachStatus: "Full REACH Registered / ISO 9001"
  },
  {
    id: "butac",
    name: "N-Butyl Acetate (BUTAC)",
    category: "acetates",
    cas: "123-86-4",
    formula: "C6H12O2",
    purity: "≥ 99.5%",
    appearance: "Colorless transparent liquid",
    packaging: ["ISO Tank (20-21 MT)", "200L Steel Drum (180 kg)", "IBC Tote (900 kg)"],
    applications: "Automotive OEM coatings, wood finishes, nitrocellulose lacquers, artificial leather manufacturing, perfumes.",
    reachStatus: "REACH Compliant"
  },
  {
    id: "npac",
    name: "n-Propyl Acetate",
    category: "acetates",
    cas: "109-60-4",
    formula: "C5H10O2",
    purity: "≥ 99.0%",
    appearance: "Colorless clear liquid",
    packaging: ["ISO Tank", "200L Steel Drum (180 kg)", "IBC Tote"],
    applications: "Flexographic and gravure printing inks, industrial coatings, fragrance diluent.",
    reachStatus: "Certified Export Grade"
  },

  // 2. Acrylates
  {
    id: "acrylic-acid",
    name: "Acrylic Acid",
    category: "acrylates",
    cas: "79-10-7",
    formula: "C3H4O2",
    purity: "≥ 99.5%",
    appearance: "Colorless liquid with pungent odor",
    packaging: ["ISO Tank", "200L Polyethylene Drum (200 kg)", "IBC (1000 kg)"],
    applications: "Superabsorbent polymers (SAP), acrylic esters, water treatment flocculants, textile sizing.",
    reachStatus: "Export Certified"
  },
  {
    id: "acrylamide",
    name: "Acrylamide",
    category: "acrylates",
    cas: "79-06-1",
    formula: "C3H5NO",
    purity: "≥ 98.0% (Crystal) / 40%-50% Solution",
    appearance: "White crystalline flake or clear aqueous solution",
    packaging: ["25kg Kraft Paper Bags", "1000kg Bulk Bag", "IBC Totes"],
    applications: "Polyacrylamide (PAM) production, oilfield recovery polymers, municipal effluent treatment, papermaking.",
    reachStatus: "ISO 9001 / REACH Verified"
  },
  {
    id: "acrylonitrile",
    name: "Acrylonitrile",
    category: "acrylates",
    cas: "107-13-1",
    formula: "C3H3N",
    purity: "≥ 99.5%",
    appearance: "Colorless, volatile liquid",
    packaging: ["ISO Tank Container", "Bulk Marine Chemical Tanker"],
    applications: "Acrylic fiber production (PAN), ABS/SAN engineering plastics, nitrile rubber (NBR), carbon fiber precursor.",
    reachStatus: "Full Origin Testing & CoA"
  },
  {
    id: "butyl-acrylate",
    name: "Butyl Acrylate",
    category: "acrylates",
    cas: "141-32-2",
    formula: "C7H12O2",
    purity: "≥ 99.5%",
    appearance: "Clear colorless mobile liquid",
    packaging: ["ISO Tank (20-22 MT)", "Steel Drum (180 kg)", "IBC (950 kg)"],
    applications: "Architectural coatings, pressure-sensitive adhesives (PSA), leather finishing binders, paper coatings.",
    reachStatus: "REACH Registered"
  },
  {
    id: "ethyl-acrylate",
    name: "Ethyl Acrylate",
    category: "acrylates",
    cas: "140-88-5",
    formula: "C5H8O2",
    purity: "≥ 99.5%",
    appearance: "Colorless liquid with sharp odor",
    packaging: ["ISO Tank", "200L Drum (180 kg)"],
    applications: "Paint emulsions, floor polishes, textiles, sealant formulations.",
    reachStatus: "Certified Export Grade"
  },
  {
    id: "methyl-acrylate",
    name: "Methyl Acrylate",
    category: "acrylates",
    cas: "96-33-3",
    formula: "C4H6O2",
    purity: "≥ 99.5%",
    appearance: "Colorless liquid",
    packaging: ["ISO Tank", "200L Drum (180 kg)"],
    applications: "Acrylic fiber comonomer, organic synthesis, adhesives, synthetic leather.",
    reachStatus: "REACH Compliant"
  },
  {
    id: "2-ethylhexyl-acrylate",
    name: "2-Ethylhexyl Acrylate (2-EHA)",
    category: "acrylates",
    cas: "103-11-7",
    formula: "C11H20O2",
    purity: "≥ 99.0%",
    appearance: "Clear colorless liquid",
    packaging: ["ISO Tank", "200L Drum (180 kg)", "IBC (950 kg)"],
    applications: "High-tack adhesives, automotive coatings, UV-cured polymers, acrylic sealants.",
    reachStatus: "Certified"
  },
  {
    id: "acrylic-esters",
    name: "Acrylic Esters / Acrylates Blend",
    category: "acrylates",
    cas: "Proprietary Blends",
    formula: "Blended Oligomers",
    purity: "Industrial Grade Custom Formulations",
    appearance: "Clear liquid",
    packaging: ["ISO Tank", "Steel Drum (200 kg)"],
    applications: "UV/EB curing coatings, specialty polymer matrices, performance elastomers.",
    reachStatus: "Technical Grade"
  },

  // 3. Alcohols
  {
    id: "methanol",
    name: "Methanol",
    category: "alcohols",
    cas: "67-56-1",
    formula: "CH3OH",
    purity: "≥ 99.85% (IMPCA Spec)",
    appearance: "Colorless clear liquid",
    packaging: ["Bulk Vessel", "ISO Tank", "200L Drum (160 kg)"],
    applications: "Formaldehyde, acetic acid, biodiesel synthesis, MTBE, fuel blending, solvent.",
    reachStatus: "IMPCA / Global Export Spec"
  },
  {
    id: "ethanol",
    name: "Ethanol (Industrial & Technical Grade)",
    category: "alcohols",
    cas: "64-17-5",
    formula: "C2H5OH",
    purity: "95% / 99.9% Anhydrous",
    appearance: "Clear colorless volatile liquid",
    packaging: ["ISO Tank", "200L HDPE / Steel Drum (160 kg)"],
    applications: "Industrial solvent, hand sanitizer disinfectant formulations, pharmaceutical extraction, chemical synthesis.",
    reachStatus: "Certified"
  },
  {
    id: "ipa",
    name: "Isopropyl Alcohol / 2-Propanol (IPA)",
    category: "alcohols",
    cas: "67-63-0",
    formula: "C3H8O",
    purity: "≥ 99.8%",
    appearance: "Colorless transparent liquid",
    packaging: ["ISO Tank (16-17 MT)", "200L Steel Drum (160 kg)", "IBC Tote (800 kg)"],
    applications: "Electronics precision cleaning, pharmaceutical synthesis solvent, disinfectant wipes, coatings & inks.",
    reachStatus: "USP / Electronic / Industrial Grade"
  },
  {
    id: "n-propanol",
    name: "n-Propyl Alcohol / 1-Propanol",
    category: "alcohols",
    cas: "71-23-8",
    formula: "C3H8O",
    purity: "≥ 99.5%",
    appearance: "Clear colorless liquid",
    packaging: ["ISO Tank", "200L Drum (165 kg)"],
    applications: "Flexographic printing inks, pharmaceutical intermediates, cellulose esters, insecticides.",
    reachStatus: "Certified"
  },
  {
    id: "n-butanol",
    name: "n-Butanol (NBA)",
    category: "alcohols",
    cas: "71-36-3",
    formula: "C4H10O",
    purity: "≥ 99.5%",
    appearance: "Clear colorless liquid",
    packaging: ["ISO Tank", "200L Steel Drum (170 kg)"],
    applications: "Butyl acetate manufacture, plasticizers (DBP), amino resins, extractant in pharmaceuticals.",
    reachStatus: "REACH Registered"
  },
  {
    id: "isobutanol",
    name: "Isobutanol (IBA)",
    category: "alcohols",
    cas: "78-83-1",
    formula: "C4H10O",
    purity: "≥ 99.5%",
    appearance: "Clear liquid",
    packaging: ["ISO Tank", "200L Drum (165 kg)"],
    applications: "Isobutyl acetate synthesis, lube oil additives, varnishes, specialty plasticizers.",
    reachStatus: "Certified"
  },
  {
    id: "benzyl-alcohol",
    name: "Benzyl Alcohol",
    category: "alcohols",
    cas: "100-51-6",
    formula: "C7H8O",
    purity: "≥ 99.5% (Pharma & Tech)",
    appearance: "Colorless liquid with mild aromatic scent",
    packaging: ["200L Polyethylene Drum (210 kg)", "IBC Tote (1050 kg)"],
    applications: "Epoxy resin curing agent, paint stripper solvent, pharmaceutical preservative, perfumery.",
    reachStatus: "EP / BP / Tech Available"
  },
  {
    id: "phenethyl-alcohol",
    name: "Phenethyl Alcohol",
    category: "alcohols",
    cas: "60-12-8",
    formula: "C8H10O",
    purity: "≥ 99.0%",
    appearance: "Colorless liquid with floral rose odor",
    packaging: ["200L Drum (200 kg)", "25kg Carboy"],
    applications: "Fragrance and aroma formulations, cosmetic preservative, hygiene personal care.",
    reachStatus: "IFRA Compliant"
  },
  {
    id: "2-ethylhexanol",
    name: "2-Ethylhexanol (2-EH)",
    category: "alcohols",
    cas: "104-76-7",
    formula: "C8H18O",
    purity: "≥ 99.5%",
    appearance: "Clear colorless liquid",
    packaging: ["ISO Tank", "200L Steel Drum (170 kg)"],
    applications: "Plasticizers (DOP, DOTP), 2-ethylhexyl acrylate, diesel fuel cetane improver, coatings solvent.",
    reachStatus: "Full REACH Registered"
  },
  {
    id: "diacetone-alcohol",
    name: "Diacetone Alcohol (DAA)",
    category: "alcohols",
    cas: "123-42-2",
    formula: "C6H12O2",
    purity: "≥ 99.0%",
    appearance: "Clear liquid",
    packaging: ["ISO Tank", "200L Drum (190 kg)"],
    applications: "High-temperature stoving finishes, nitrocellulose lacquers, wood stains, hydraulic fluids.",
    reachStatus: "Export Certified"
  },
  {
    id: "1-4-butanediol",
    name: "1,4-Butanediol (BDO)",
    category: "alcohols",
    cas: "110-63-4",
    formula: "C4H10O2",
    purity: "≥ 99.5%",
    appearance: "Viscous colorless liquid",
    packaging: ["ISO Tank (Heated)", "200L Drum (200 kg)"],
    applications: "Polyurethane chain extender, THF & PBT resin synthesis, engineering plastics, spandex.",
    reachStatus: "Certified"
  },
  {
    id: "neopentyl-glycol",
    name: "Neopentyl Glycol (NPG)",
    category: "alcohols",
    cas: "126-30-7",
    formula: "C5H12O2",
    purity: "≥ 99.0%",
    appearance: "White crystalline flakes or molten",
    packaging: ["25kg Bags", "500kg Jumbo Bags", "ISO Tank (Molten)"],
    applications: "Polyester powder coatings, unsaturated polyester resins (UPR), synthetic lubricants, coil coatings.",
    reachStatus: "Certified"
  },
  {
    id: "egme",
    name: "Ethylene Glycol Monomethyl Ether (EGME)",
    category: "alcohols",
    cas: "109-86-4",
    formula: "C3H8O2",
    purity: "≥ 99.0%",
    appearance: "Clear colorless liquid",
    packaging: ["ISO Tank", "200L Drum (200 kg)"],
    applications: "Aviation fuel anti-icing additive, leather dyes, solvent for varnishes and dyes.",
    reachStatus: "Industrial Standard"
  },
  {
    id: "egee",
    name: "Ethylene Glycol Monoethyl Ether (EGEE)",
    category: "alcohols",
    cas: "110-80-5",
    formula: "C4H10O2",
    purity: "≥ 99.0%",
    appearance: "Clear liquid",
    packaging: ["ISO Tank", "200L Drum (190 kg)"],
    applications: "Dyeing process solvent, textile printing, chemical intermediate.",
    reachStatus: "Certified"
  },
  {
    id: "egde",
    name: "Ethylene Glycol Dimethyl Ether (Monoglyme)",
    category: "alcohols",
    cas: "110-71-4",
    formula: "C4H10O2",
    purity: "≥ 99.5%",
    appearance: "Colorless liquid",
    packaging: ["ISO Tank", "200L Drum (170 kg)"],
    applications: "Lithium battery electrolytes, organometallic reactions, pharmaceutical synthesis solvent.",
    reachStatus: "High Purity Grade"
  },

  // 4. Amines, Amides and Nitrogen-Based Chemicals
  {
    id: "ammonia",
    name: "Ammonia (Anhydrous & Aqueous)",
    category: "amines-amides",
    cas: "7664-41-7",
    formula: "NH3",
    purity: "≥ 99.8% (Anhydrous) / 25-28% Sol.",
    appearance: "Gas or clear colorless pungent solution",
    packaging: ["Pressurized Gas Cylinders", "ISO Tank", "IBC Containers"],
    applications: "Fertilizer production (urea, ammonium nitrate), nitric acid, refrigeration, flue-gas desulfurization.",
    reachStatus: "ISO Certified"
  },
  {
    id: "aniline",
    name: "Aniline",
    category: "amines-amides",
    cas: "62-53-3",
    formula: "C6H7N",
    purity: "≥ 99.9%",
    appearance: "Colorless to pale yellow oily liquid",
    packaging: ["ISO Tank (20-22 MT)", "200L Steel Drum (200 kg)"],
    applications: "MDI polyurethane precursor, rubber vulcanization accelerators, azo dyestuffs, agrochemicals.",
    reachStatus: "Full REACH Registered"
  },
  {
    id: "ethanolamine",
    name: "2-Aminoethanol / Ethanolamine (MEA)",
    category: "amines-amides",
    cas: "141-43-5",
    formula: "C2H7NO",
    purity: "≥ 99.0%",
    appearance: "Clear viscous liquid",
    packaging: ["ISO Tank", "200L Drum (210 kg)", "IBC Tote"],
    applications: "Natural gas sweetening (CO2 & H2S scrubber), detergents, personal care emulsifiers, corrosion inhibitors.",
    reachStatus: "Certified"
  },
  {
    id: "2-aminophenol",
    name: "2-Aminophenol (o-Aminophenol)",
    category: "amines-amides",
    cas: "95-55-6",
    formula: "C6H7NO",
    purity: "≥ 99.0%",
    appearance: "White to beige crystalline powder",
    packaging: ["25kg Fiber Drum", "Custom Palletized Bags"],
    applications: "Azo and sulfur dyes, photographic developers, pharmaceutical intermediates.",
    reachStatus: "Export Certified"
  },
  {
    id: "4-aminophenol",
    name: "4-Aminophenol (p-Aminophenol / PAP)",
    category: "amines-amides",
    cas: "123-30-8",
    formula: "C6H7NO",
    purity: "≥ 99.5%",
    appearance: "White to off-white crystals",
    packaging: ["25kg Fiber Drum", "500kg Big Bags"],
    applications: "Paracetamol (Acetaminophen) synthesis, photographic developers, rubber antiozonants.",
    reachStatus: "Pharma / Industrial Intermediates"
  },
  {
    id: "4-aminobenzoic-acid",
    name: "4-Aminobenzoic Acid (PABA)",
    category: "amines-amides",
    cas: "150-13-0",
    formula: "C7H7NO2",
    purity: "≥ 99.0%",
    appearance: "White crystalline powder",
    packaging: ["25kg Fiber Drums"],
    applications: "Local anesthetics (procaine), folic acid synthesis, UV sunscreens, dye intermediate.",
    reachStatus: "USP / Tech Grade"
  },
  {
    id: "2-aminopyridine",
    name: "2-Aminopyridine",
    category: "amines-amides",
    cas: "504-29-0",
    formula: "C5H6N2",
    purity: "≥ 99.0%",
    appearance: "Colorless to pale yellow crystals",
    packaging: ["25kg Fiber Drums"],
    applications: "Pharmaceutical synthesis (sulfapyridine, piroxicam, tripelennamine), bird repellent compounds.",
    reachStatus: "Certified"
  },
  {
    id: "4-aminopyridine",
    name: "4-Aminopyridine",
    category: "amines-amides",
    cas: "504-24-5",
    formula: "C5H6N2",
    purity: "≥ 99.0%",
    appearance: "White crystalline solid",
    packaging: ["25kg Drums"],
    applications: "Neurological therapeutics (dalfampridine intermediate), analytical reagent.",
    reachStatus: "Certified"
  },
  {
    id: "4-amino-dimethylaniline",
    name: "4-Amino-N,N-Dimethylaniline",
    category: "amines-amides",
    cas: "99-98-9",
    formula: "C8H12N2",
    purity: "≥ 98.5%",
    appearance: "Reddish brown crystalline solid / liquid",
    packaging: ["200L Drum", "25kg Fiber Drum"],
    applications: "Methylene blue dye production, color photography developer, redox indicator in biochemistry.",
    reachStatus: "Industrial Grade"
  },
  {
    id: "dmf",
    name: "N,N-Dimethylformamide / DMF",
    category: "amines-amides",
    cas: "68-12-2",
    formula: "C3H7NO",
    purity: "≥ 99.9%",
    appearance: "Clear colorless liquid",
    packaging: ["ISO Tank (20-21 MT)", "200L Steel Drum (190 kg)", "IBC Tote (950 kg)"],
    applications: "PU synthetic leather casting, acrylic fiber spinning, API pharmaceutical synthesis, electronics stripping.",
    reachStatus: "REACH Registered"
  },
  {
    id: "dmac",
    name: "N,N-Dimethylacetamide / DMAC",
    category: "amines-amides",
    cas: "127-19-5",
    formula: "C4H9NO",
    purity: "≥ 99.9%",
    appearance: "Colorless clear liquid",
    packaging: ["ISO Tank", "200L Drum (190 kg)", "IBC (950 kg)"],
    applications: "Spandex elastane fiber production, polyimide film casting, pharmaceutical extraction solvent.",
    reachStatus: "Certified"
  },
  {
    id: "nmp",
    name: "N-Methyl Pyrrolidone / NMP",
    category: "amines-amides",
    cas: "872-50-4",
    formula: "C5H9NO",
    purity: "≥ 99.9% (Electronic Grade / Tech)",
    appearance: "Clear colorless liquid",
    packaging: ["ISO Tank", "200L Galvanized Drum (200 kg)", "IBC Tote (1000 kg)"],
    applications: "Lithium-ion battery cathode slurry (PVDF solvent), semiconductor photoresist stripping, engineering plastics.",
    reachStatus: "Battery / High Purity Spec"
  },
  {
    id: "melamine",
    name: "Melamine",
    category: "amines-amides",
    cas: "108-78-1",
    formula: "C3H6N6",
    purity: "≥ 99.8%",
    appearance: "White crystalline powder",
    packaging: ["25kg Bags", "500kg / 1000kg Big Bags"],
    applications: "Melamine-formaldehyde resins, decorative laminate panels, dinnerware molding, flame retardant additives.",
    reachStatus: "ISO 9001 Certified"
  },
  {
    id: "urea",
    name: "Urea (Technical & Prilled)",
    category: "amines-amides",
    cas: "57-13-6",
    formula: "CH4N2O",
    purity: "≥ 46% Nitrogen content",
    appearance: "White prills or granules",
    packaging: ["50kg Woven Bags", "1000kg Jumbo Bags", "Bulk Vessel"],
    applications: "Urea-formaldehyde resins for plywood, diesel exhaust fluid (DEF/AdBlue), animal feed supplements, fertilizers.",
    reachStatus: "Global Spec / REACH"
  },

  // 5. Anhydrides
  {
    id: "maleic-anhydride",
    name: "Maleic Anhydride (MA)",
    category: "anhydrides",
    cas: "108-31-6",
    formula: "C4H2O3",
    purity: "≥ 99.5%",
    appearance: "White briquettes / flakes or molten liquid",
    packaging: ["25kg Polypropylene Bags", "ISO Tank (Molten 130°C)", "1000kg Big Bags"],
    applications: "Unsaturated polyester resins (UPR), BDO synthesis, alkyd resins, lubricating oil dispersants.",
    reachStatus: "REACH Registered"
  },
  {
    id: "phthalic-anhydride",
    name: "Phthalic Anhydride (PA)",
    category: "anhydrides",
    cas: "85-44-9",
    formula: "C8H4O3",
    purity: "≥ 99.5%",
    appearance: "White needle-like flakes or molten",
    packaging: ["25kg Bags", "1000kg Jumbo Bags", "ISO Tank (Molten)"],
    applications: "Phthalate plasticizers (DOP, DINP), alkyd paints, unsaturated polyesters, polyester polyols.",
    reachStatus: "Full REACH Registered"
  },
  {
    id: "acetic-anhydride",
    name: "Acetic Anhydride",
    category: "anhydrides",
    cas: "108-24-7",
    formula: "C4H6O3",
    purity: "≥ 99.0%",
    appearance: "Colorless transparent liquid with strong pungent odor",
    packaging: ["ISO Tank", "200L Polyethylene Drum (200 kg)"],
    applications: "Cellulose acetate cigarette tow & plastics, aspirin / paracetamol synthesis, textile acetylation.",
    reachStatus: "Regulated Chemical / Controlled Export"
  },

  // 6. Aromatics & Aromatic Ingredients
  {
    id: "benzene",
    name: "Benzene",
    category: "aromatics",
    cas: "71-43-2",
    formula: "C6H6",
    purity: "≥ 99.9%",
    appearance: "Colorless transparent liquid",
    packaging: ["ISO Tank", "Bulk Marine Chemical Tanker"],
    applications: "Ethylbenzene, cumene, cyclohexane, nitrobenzene, alkylbenzene detergents.",
    reachStatus: "Petrochemical Standard"
  },
  {
    id: "toluene",
    name: "Toluene",
    category: "aromatics",
    cas: "108-88-3",
    formula: "C7H8",
    purity: "≥ 99.7%",
    appearance: "Clear colorless liquid",
    packaging: ["ISO Tank (18-19 MT)", "200L Steel Drum (170 kg)", "Bulk Tanker"],
    applications: "TDI polyurethane synthesis, benzene precursor, paints & thinner solvent, adhesives, chemical synthesis.",
    reachStatus: "REACH Compliant"
  },
  {
    id: "xylene",
    name: "Xylene (Mixed Isomers)",
    category: "aromatics",
    cas: "1330-20-7",
    formula: "C8H10",
    purity: "≥ 99.5%",
    appearance: "Colorless clear liquid",
    packaging: ["ISO Tank (18-19 MT)", "200L Drum (175 kg)", "Bulk Shipments"],
    applications: "Industrial coatings, alkyd resins, agrochemical emulsifiable concentrates, cleaning solvents.",
    reachStatus: "Full Origin Quality Assurance"
  },
  {
    id: "phenol",
    name: "Phenol",
    category: "aromatics",
    cas: "108-95-2",
    formula: "C6H6O",
    purity: "≥ 99.9%",
    appearance: "White crystalline solid or molten liquid",
    packaging: ["ISO Tank (Molten heated)", "200L Galvanized Drum (200 kg)"],
    applications: "Bisphenol-A (BPA), phenolic resins, caprolactam (nylon 6), alkylphenols, salicylic acid.",
    reachStatus: "REACH Registered"
  },
  {
    id: "anisole",
    name: "Anisole (Methoxybenzene)",
    category: "aromatics",
    cas: "100-66-3",
    formula: "C7H8O",
    purity: "≥ 99.0%",
    appearance: "Clear liquid with pleasant anise scent",
    packaging: ["200L Drum (190 kg)", "ISO Tank"],
    applications: "Perfumes and flavorings, pheromone syntheses, pharmaceutical intermediates.",
    reachStatus: "Certified"
  },
  {
    id: "styrene",
    name: "Styrene (SM)",
    category: "aromatics",
    cas: "100-42-5",
    formula: "C8H8",
    purity: "≥ 99.8%",
    appearance: "Colorless oily liquid with sweet aroma",
    packaging: ["ISO Tank", "Bulk Marine Tanker"],
    applications: "Polystyrene (PS/EPS), ABS, SBR synthetic rubber, unsaturated polyester resins.",
    reachStatus: "REACH Certified"
  },
  {
    id: "alpha-methyl-styrene",
    name: "Alpha-Methyl Styrene (AMS)",
    category: "aromatics",
    cas: "98-83-9",
    formula: "C9H10",
    purity: "≥ 99.2%",
    appearance: "Clear colorless liquid",
    packaging: ["ISO Tank", "200L Drum (180 kg)"],
    applications: "Heat-resistant ABS plastic modifiers, tackifying resins, alpha-methylstyrene polymers.",
    reachStatus: "Certified"
  },
  {
    id: "phenylacetylene",
    name: "Phenylacetylene",
    category: "aromatics",
    cas: "536-74-3",
    formula: "C8H6",
    purity: "≥ 98.0%",
    appearance: "Colorless to pale straw liquid",
    packaging: ["25kg / 200L Steel Drum"],
    applications: "Conducting polymers, Sonogashira coupling reactions, specialty fine chemicals.",
    reachStatus: "Specialty Fine Chemical"
  },
  {
    id: "benzenesulfonyl-chloride",
    name: "Benzenesulfonyl Chloride",
    category: "aromatics",
    cas: "98-09-9",
    formula: "C6H5ClO2S",
    purity: "≥ 99.0%",
    appearance: "Colorless oily liquid",
    packaging: ["200L Drum (250 kg)"],
    applications: "Hinsberg reagent, sulfonamide drugs, agrochemicals, organic esterification.",
    reachStatus: "Technical Grade"
  },

  // 7. Chlorinated Solvents & Chlorinated Chemicals
  {
    id: "dichloromethane",
    name: "Methylene Chloride / Dichloromethane (MC / DCM)",
    category: "chlorinated",
    cas: "75-09-2",
    formula: "CH2Cl2",
    purity: "≥ 99.9%",
    appearance: "Colorless volatile liquid with sweet scent",
    packaging: ["ISO Tank (24-25 MT)", "200L Steel Drum (250 kg)", "IBC (1200 kg)"],
    applications: "Paint stripping, PU foam blowing agent, pharmaceutical extraction, metal cleaning, polycarbonate processing.",
    reachStatus: "Full REACH Registered"
  },
  {
    id: "dichloroethane",
    name: "Dichloroethane (1,2-EDC)",
    category: "chlorinated",
    cas: "107-06-2",
    formula: "C2H4Cl2",
    purity: "≥ 99.5%",
    appearance: "Colorless heavy liquid",
    packaging: ["ISO Tank", "Bulk Marine Chemical Tanker"],
    applications: "Vinyl Chloride Monomer (VCM) for PVC production, solvent extraction, lead scavenger.",
    reachStatus: "Export Spec"
  },
  {
    id: "chloroform",
    name: "Chloroform / Trichloromethane",
    category: "chlorinated",
    cas: "67-66-3",
    formula: "CHCl3",
    purity: "≥ 99.9%",
    appearance: "Clear colorless dense liquid",
    packaging: ["ISO Tank", "200L Steel Drum (250 kg)"],
    applications: "Precursor to HCFC-22 refrigerant / PTFE polymers, pharmaceutical solvent, laboratory extraction.",
    reachStatus: "REACH Compliant"
  },
  {
    id: "carbon-tetrachloride",
    name: "Carbon Tetrachloride (CTC)",
    category: "chlorinated",
    cas: "56-23-5",
    formula: "CCl4",
    purity: "≥ 99.9%",
    appearance: "Clear colorless heavy liquid",
    packaging: ["ISO Tank / Sealed Drum"],
    applications: "Feedstock for HFC/HFO next-generation refrigerants, chlorinated intermediate synthesis (controlled).",
    reachStatus: "Protocol Compliant"
  },
  {
    id: "trichloroethylene",
    name: "Trichloroethylene (TCE)",
    category: "chlorinated",
    cas: "79-01-6",
    formula: "C2HCl3",
    purity: "≥ 99.5%",
    appearance: "Colorless nonflammable liquid",
    packaging: ["ISO Tank", "200L Steel Drum (280 kg)"],
    applications: "Precision vapor degreasing of aerospace & metal components, fluorocarbon refrigerant feedstock.",
    reachStatus: "Industrial Quality"
  },

  // 8. Ketones
  {
    id: "acetone",
    name: "Acetone",
    category: "ketones",
    cas: "67-64-1",
    formula: "C3H6O",
    purity: "≥ 99.5%",
    appearance: "Clear, volatile, colorless liquid",
    packaging: ["ISO Tank (16-17 MT)", "200L Steel Drum (160 kg)", "Bulk Tanker"],
    applications: "Bisphenol-A (BPA) synthesis, methyl methacrylate (MMA), pharmaceutical solvent, paint thinners, nail polish remover.",
    reachStatus: "Full REACH Registered"
  },
  {
    id: "mek",
    name: "Methyl Ethyl Ketone / MEK / Butanone",
    category: "ketones",
    cas: "78-93-3",
    formula: "C4H8O",
    purity: "≥ 99.5%",
    appearance: "Clear colorless volatile liquid",
    packaging: ["ISO Tank (16-17 MT)", "200L Steel Drum (165 kg)"],
    applications: "Vinyl and nitrocellulose coatings, printing inks, solvent-based adhesives, magnetic tapes, lube dewaxing.",
    reachStatus: "REACH Certified"
  },
  {
    id: "mibk",
    name: "Methyl Isobutyl Ketone / MIBK",
    category: "ketones",
    cas: "108-10-1",
    formula: "C6H12O",
    purity: "≥ 99.5%",
    appearance: "Clear liquid",
    packaging: ["ISO Tank", "200L Steel Drum (165 kg)"],
    applications: "Automotive high-solids coatings, rubber antiozonants (6PPD), metal rare-earth extraction, pesticides.",
    reachStatus: "Certified"
  },
  {
    id: "cyclohexanone",
    name: "Cyclohexanone (CYC)",
    category: "ketones",
    cas: "108-94-1",
    formula: "C6H10O",
    purity: "≥ 99.8%",
    appearance: "Colorless oily liquid with mint-like odor",
    packaging: ["ISO Tank (19-20 MT)", "200L Drum (190 kg)"],
    applications: "Caprolactam & adipic acid (Nylon 6 & Nylon 6,6), pesticide emulsions, PCB photoresist stripper.",
    reachStatus: "REACH Registered"
  },

  // 9. Hydrocarbons, Alkanes & Cycloalkanes
  {
    id: "n-hexane",
    name: "n-Hexane (60% / 85% / 99% Extraction Grade)",
    category: "hydrocarbons",
    cas: "110-54-3",
    formula: "C6H14",
    purity: "≥ 60% / 85% / 99% Chromatography",
    appearance: "Clear colorless liquid",
    packaging: ["ISO Tank", "200L Drum (135 kg)"],
    applications: "Edible oil solvent extraction (soybean, rapeseed), rubber cement, leather adhesives, chromatography.",
    reachStatus: "Food Grade Extraction / Tech"
  },
  {
    id: "n-heptane",
    name: "n-Heptane",
    category: "hydrocarbons",
    cas: "142-82-5",
    formula: "C7H16",
    purity: "≥ 99.0%",
    appearance: "Clear colorless liquid",
    packaging: ["ISO Tank", "200L Drum (140 kg)"],
    applications: "Octane rating standard (Zero point), pharmaceutical crystallization, industrial fast-evaporating cements.",
    reachStatus: "Certified"
  },
  {
    id: "n-octane",
    name: "n-Octane",
    category: "hydrocarbons",
    cas: "111-65-9",
    formula: "C8H18",
    purity: "≥ 98.5%",
    appearance: "Clear colorless liquid",
    packaging: ["200L Drum", "ISO Tank"],
    applications: "Organic synthesis intermediate, solvent, fuel additive research.",
    reachStatus: "Certified"
  },
  {
    id: "n-pentane",
    name: "n-Pentane",
    category: "hydrocarbons",
    cas: "109-66-0",
    formula: "C5H12",
    purity: "≥ 98.0%",
    appearance: "Colorless highly volatile liquid",
    packaging: ["Pressurized ISO Tank", "High-pressure Drums"],
    applications: "Expandable polystyrene (EPS) blowing agent, polyisocyanurate (PIR) insulation foam agent, geothermal working fluid.",
    reachStatus: "Certified"
  },
  {
    id: "cyclohexane",
    name: "Cyclohexane",
    category: "hydrocarbons",
    cas: "110-82-7",
    formula: "C6H12",
    purity: "≥ 99.8%",
    appearance: "Clear colorless liquid",
    packaging: ["ISO Tank", "200L Drum (155 kg)"],
    applications: "Nylon 6 and Nylon 6,6 precursor (adipic acid / cyclohexanone), solvent for cellulose ethers.",
    reachStatus: "REACH Registered"
  },
  {
    id: "petroleum-ether",
    name: "Petroleum Ether (30-60°C / 60-90°C)",
    category: "hydrocarbons",
    cas: "8032-32-4",
    formula: "Mixed Hydrocarbons",
    purity: "Boiling Range 30-60°C / 60-90°C",
    appearance: "Clear transparent mobile liquid",
    packaging: ["200L Drum (140 kg)", "ISO Tank"],
    applications: "Analytical lab extraction, botanical oil extraction, rapid evaporating solvent.",
    reachStatus: "Certified"
  },
  {
    id: "propylene",
    name: "Propylene (Polymer / Chemical Grade)",
    category: "hydrocarbons",
    cas: "115-07-1",
    formula: "C3H6",
    purity: "≥ 99.5% (Polymer Grade)",
    appearance: "Colorless liquified gas under pressure",
    packaging: ["Pressurized Gas ISO Tank Container", "Bulk Gas Carrier"],
    applications: "Polypropylene (PP) plastics, acrylonitrile, propylene oxide, acrylic acid, cumene.",
    reachStatus: "Petrochemical Grade"
  },

  // 10. Ether Solvents
  {
    id: "thf",
    name: "Tetrahydrofuran / THF",
    category: "ethers",
    cas: "109-99-9",
    formula: "C4H8O",
    purity: "≥ 99.9%",
    appearance: "Colorless clear liquid with ethereal odor",
    packaging: ["ISO Tank (18-19 MT)", "200L Steel Drum (180 kg)"],
    applications: "PTMEG (spandex fiber precursor), PVC pipe cements, organolithium / Grignard reagent synthesis, coating solvents.",
    reachStatus: "Full REACH Registered"
  },
  {
    id: "diethyl-ether",
    name: "Diethyl Ether",
    category: "ethers",
    cas: "60-29-7",
    formula: "C4H10O",
    purity: "≥ 99.5%",
    appearance: "Colorless volatile liquid",
    packaging: ["200L Steel Drum (140 kg)", "Sealed ISO Tank"],
    applications: "Laboratory extraction solvent, smokeless gun powder production, starting fluid.",
    reachStatus: "Controlled Chemical Compliant"
  },
  {
    id: "isopropyl-ether",
    name: "Isopropyl Ether (DIPE)",
    category: "ethers",
    cas: "108-20-3",
    formula: "C6H14O",
    purity: "≥ 99.0%",
    appearance: "Colorless liquid",
    packaging: ["200L Drum (145 kg)", "ISO Tank"],
    applications: "Extraction solvent for organic compounds, fuel oxygenate additive, paint solvent.",
    reachStatus: "Certified"
  },
  {
    id: "dimethyl-ether",
    name: "Dimethyl Ether (DME)",
    category: "ethers",
    cas: "115-10-6",
    formula: "C2H6O",
    purity: "≥ 99.9% (Aerosol Grade)",
    appearance: "Liquified gas under ambient pressure",
    packaging: ["Pressurized ISO Tank", "Cylinder Containers"],
    applications: "Eco-friendly aerosol propellant for cosmetics & spray paints, clean alternative diesel fuel, chemical feedstock.",
    reachStatus: "Aerosol / Fuel Grade"
  },

  // 11. Organic Acids
  {
    id: "acetic-acid-glacial",
    name: "Acetic Acid Glacial (GAA)",
    category: "organic-acids",
    cas: "64-19-7",
    formula: "CH3COOH",
    purity: "≥ 99.85%",
    appearance: "Colorless liquid or icy crystals under 16.6°C",
    packaging: ["ISO Tank (20-22 MT)", "200L HDPE Drum (220 kg)", "IBC Tote (1050 kg)"],
    applications: "Vinyl Acetate Monomer (VAM), Purified Terephthalic Acid (PTA), acetic anhydride, acetate esters, textile dyeing.",
    reachStatus: "Full REACH Registered / Food Grade Available"
  },
  {
    id: "adipic-acid",
    name: "Adipic Acid",
    category: "organic-acids",
    cas: "124-04-9",
    formula: "C6H10O4",
    purity: "≥ 99.8%",
    appearance: "White crystalline powder",
    packaging: ["25kg Bags", "500kg / 1000kg Big Bags"],
    applications: "Nylon 6,6 polyamide synthesis, polyester polyols for polyurethanes, plasticizers (DOA), food acidulant.",
    reachStatus: "REACH Registered"
  },
  {
    id: "pia",
    name: "Purified Isophthalic Acid (PIA)",
    category: "organic-acids",
    cas: "121-91-5",
    formula: "C8H6O4",
    purity: "≥ 99.8%",
    appearance: "White crystalline powder",
    packaging: ["1000kg Jumbo Bags", "500kg Bags"],
    applications: "PET bottle resin modifier, unsaturated polyester resins (gelcoats), powder coatings, alkyd resins.",
    reachStatus: "High Purity Grade"
  },
  {
    id: "formic-acid",
    name: "Formic Acid (85% / 90% / 94%)",
    category: "organic-acids",
    cas: "64-18-6",
    formula: "HCOOH",
    purity: "85%, 90%, 94% Industrial Grade",
    appearance: "Colorless liquid with sharp pungent odor",
    packaging: ["25kg Jerrycan", "250kg HDPE Drum", "IBC Tote (1200 kg)", "ISO Tank"],
    applications: "Leather tanning & dehairing, rubber coagulation, textile finishing, animal silage preservative, de-icing.",
    reachStatus: "Certified"
  },
  {
    id: "citric-acid",
    name: "Citric Acid Monohydrate / Anhydrous",
    category: "organic-acids",
    cas: "5949-29-1 (Mono) / 77-92-9 (Anhydrous)",
    formula: "C6H8O7·H2O",
    purity: "≥ 99.5% (BP/USP/FCC)",
    appearance: "White crystalline granules or powder",
    packaging: ["25kg Kraft Paper Bags", "1000kg Jumbo Bags"],
    applications: "Food & beverage acidification, pharmaceuticals, detergent chelating agent, water descaling.",
    reachStatus: "Halal / Kosher / ISO / Food Grade"
  },

  // 12. Inorganic Chemicals
  {
    id: "caustic-soda-flakes",
    name: "Caustic Soda Flakes (Sodium Hydroxide)",
    category: "inorganics",
    cas: "1310-73-2",
    formula: "NaOH",
    purity: "≥ 99.0%",
    appearance: "White translucent flakes",
    packaging: ["25kg PP Woven Bags with PE liner", "1000kg Jumbo Bags"],
    applications: "Alumina refining, pulp & papermaking, soaps & detergents, chemical synthesis, water treatment.",
    reachStatus: "Full REACH Registered / ISO 9001"
  },
  {
    id: "caustic-soda-pearls",
    name: "Caustic Soda Pearls",
    category: "inorganics",
    cas: "1310-73-2",
    formula: "NaOH",
    purity: "≥ 99.0%",
    appearance: "Uniform spherical white pearls / beads",
    packaging: ["25kg Bags on pallets", "1000kg Jumbo Bags"],
    applications: "High-precision chemical metering, battery manufacturing, petrochemical refining, textile mercerization.",
    reachStatus: "Premium Grade Export"
  },
  {
    id: "potassium-hydroxide",
    name: "Potassium Hydroxide Flakes (KOH)",
    category: "inorganics",
    cas: "1310-58-3",
    formula: "KOH",
    purity: "≥ 90.0%",
    appearance: "White deliquescent flakes",
    packaging: ["25kg PP Bags with PE liner"],
    applications: "Potassium carbonate, alkaline batteries, liquid fertilizers, soft soaps, agricultural chemicals.",
    reachStatus: "Certified"
  },
  {
    id: "sodium-bicarbonate",
    name: "Sodium Bicarbonate",
    category: "inorganics",
    cas: "144-55-8",
    formula: "NaHCO3",
    purity: "≥ 99.0%",
    appearance: "White crystalline powder",
    packaging: ["25kg Bags", "1000kg Bulk Bags"],
    applications: "Flue gas desulfurization, animal feed buffering, food baking powder, firefighting dry chemicals.",
    reachStatus: "Feed / Food / Tech Grade"
  },
  {
    id: "sles",
    name: "Sodium Lauryl Ether Sulphate / SLES (70%)",
    category: "inorganics",
    cas: "68585-34-2",
    formula: "C12H25O(CH2CH2O)2SO3Na",
    purity: "70% Active Paste",
    appearance: "White to yellowish translucent paste",
    packaging: ["170kg HDPE Drum", "220kg Drum", "1000kg IBC Tote"],
    applications: "Shampoos, bubble baths, liquid hand soaps, dishwashing liquids, textile wetting agents.",
    reachStatus: "Cosmetic & Detergent Grade"
  },
  {
    id: "sulfamic-acid",
    name: "Sulfamic Acid",
    category: "inorganics",
    cas: "5329-14-6",
    formula: "H3NO3S",
    purity: "≥ 99.5%",
    appearance: "White crystalline solid",
    packaging: ["25kg Polypropylene Bags", "1000kg Jumbo Bags"],
    applications: "Descaling industrial heat exchangers & boilers, chlorine stabilizer in swimming pools, dye manufacturing.",
    reachStatus: "Certified"
  },
  {
    id: "phosphoric-acid",
    name: "Phosphoric Acid (85% Food / Tech Grade)",
    category: "inorganics",
    cas: "7664-38-2",
    formula: "H3PO4",
    purity: "≥ 85.0%",
    appearance: "Colorless transparent viscous liquid",
    packaging: ["35kg Jerrycan", "330kg HDPE Drum", "1650kg IBC Tote", "ISO Tank"],
    applications: "Rust removal & phosphating coatings, beverage acidulation (colas), fertilizer production, dental etching.",
    reachStatus: "Food & Technical Grade"
  },
  {
    id: "tio2",
    name: "Titanium Dioxide (Rutile / Anatase Grade)",
    category: "inorganics",
    cas: "13463-67-7",
    formula: "TiO2",
    purity: "≥ 94% - 98%",
    appearance: "Ultrafine brilliant white powder",
    packaging: ["25kg Valve Bags", "500kg / 1000kg Big Bags"],
    applications: "Architectural & automotive paints, plastics compounding, printing inks, paper opacifier, masterbatches.",
    reachStatus: "High Whiteness / Excellent Opacity"
  },
  {
    id: "zinc-oxide",
    name: "Zinc Oxide",
    category: "inorganics",
    cas: "1314-13-2",
    formula: "ZnO",
    purity: "≥ 99.5% - 99.7%",
    appearance: "White to yellowish fine powder",
    packaging: ["25kg Bags", "1000kg Jumbo Bags"],
    applications: "Rubber vulcanization activator, ceramics glazes, cosmetic sunscreens, animal feed nutrients.",
    reachStatus: "French Process / Direct Process"
  },
  {
    id: "aluminium-triphosphate",
    name: "Aluminium Triphosphate Salt",
    category: "inorganics",
    cas: "13939-25-8",
    formula: "AlH2P3O10·2H2O",
    purity: "≥ 98.0%",
    appearance: "White powder",
    packaging: ["25kg Bags"],
    applications: "Non-toxic anti-rust pigment, replacement for toxic lead and chrome pigments in protective primers.",
    reachStatus: "Eco-Friendly Anti-Corrosion"
  },
  {
    id: "mica",
    name: "Mica (Wet & Dry Ground)",
    category: "inorganics",
    cas: "12001-26-2",
    formula: "Silicate Mineral",
    purity: "Industrial Grade",
    appearance: "Shimmering flaky powder",
    packaging: ["25kg Bags", "1000kg Bags"],
    applications: "Electrical insulation, pearlescent pigments, thermal barriers, joint compound filler, plastics reinforcement.",
    reachStatus: "High Aspect Ratio"
  },

  // 13. Monomers
  {
    id: "styrene-monomer",
    name: "Styrene Monomer (SM)",
    category: "monomers",
    cas: "100-42-5",
    formula: "C8H8",
    purity: "≥ 99.8%",
    appearance: "Colorless oily liquid",
    packaging: ["Bulk Chemical Tanker", "ISO Tank Container (20-22 MT)"],
    applications: "Polystyrene (GPPS, HIPS, EPS), ABS/SAN engineering plastics, SBR synthetic rubber, UPR resins.",
    reachStatus: "Full REACH Registered"
  },
  {
    id: "vam",
    name: "Vinyl Acetate Monomer / VAM",
    category: "monomers",
    cas: "108-05-4",
    formula: "C4H6O2",
    purity: "≥ 99.5%",
    appearance: "Clear colorless mobile liquid",
    packaging: ["ISO Tank", "200L Drum (190 kg)"],
    applications: "Polyvinyl acetate (PVA) emulsion adhesives, polyvinyl alcohol (PVOH), ethylene-vinyl acetate (EVA) copolymers.",
    reachStatus: "Full REACH Registered"
  },
  {
    id: "alpha-methyl-styrene-monomer",
    name: "Alpha-Methyl Styrene",
    category: "monomers",
    cas: "98-83-9",
    formula: "C9H10",
    purity: "≥ 99.2%",
    appearance: "Clear colorless liquid",
    packaging: ["ISO Tank", "200L Steel Drum (180 kg)"],
    applications: "Heat-distortion modifier in ABS and SAN, specialized thermoplastic elastomers.",
    reachStatus: "Certified"
  },
  {
    id: "butyl-acrylate-monomer",
    name: "Butyl Acrylate Monomer / BAM",
    category: "monomers",
    cas: "141-32-2",
    formula: "C7H12O2",
    purity: "≥ 99.5%",
    appearance: "Colorless liquid with characteristic fruity odor",
    packaging: ["ISO Tank (20 MT)", "200L Steel Drum (180 kg)"],
    applications: "Acrylic emulsions, adhesives, architectural paints, automotive topcoats, textile finishes.",
    reachStatus: "REACH Registered"
  },

  // 14. Polyurethane Raw Materials
  {
    id: "mdi",
    name: "Methylene Diphenyl Diisocyanate / MDI",
    category: "polyurethane",
    cas: "101-68-8 / 9016-87-9 (Polymeric MDI)",
    formula: "C15H10N2O2",
    purity: "Pure MDI (≥ 99.5%) / Polymeric PMDI",
    appearance: "White to pale yellow solid / Dark brown liquid (PMDI)",
    packaging: ["200L Steel Drum (250 kg)", "ISO Tank (Heated 40-45°C)"],
    applications: "Rigid polyurethane insulation foam (appliances, construction panels), CASE (coatings, adhesives, sealants, elastomers).",
    reachStatus: "Full REACH Registered"
  },
  {
    id: "tdi",
    name: "Toluene Diisocyanate / TDI (80/20)",
    category: "polyurethane",
    cas: "584-84-9 / 26471-62-5",
    formula: "C9H6N2O2",
    purity: "≥ 99.5% (80/20 isomer blend)",
    appearance: "Colorless to pale yellow liquid",
    packaging: ["200L Steel Drum (250 kg)", "ISO Tank"],
    applications: "Flexible slabstock polyurethane foam (furniture, mattresses, automotive seating), polyurethane varnishes.",
    reachStatus: "REACH Compliant"
  },
  {
    id: "polyether-polyol",
    name: "Polyether Polyol (Rigid / Flexible / CASE)",
    category: "polyurethane",
    cas: "9003-11-6 / 25322-69-4",
    formula: "Polymer Ether Polyol",
    purity: "Hydroxyl Value tailored (28 - 480 mg KOH/g)",
    appearance: "Clear viscous liquid",
    packaging: ["200L Steel Drum (200-210 kg)", "IBC Tote (1000 kg)", "ISO Tank"],
    applications: "Co-reactant with MDI/TDI for flexible foam, spray insulation, adhesive formulations, PU prepolymers.",
    reachStatus: "Certified"
  },

  // 15. Resins & Coating Materials
  {
    id: "vinyl-ester-resin",
    name: "Vinyl Ester Resin",
    category: "resins-coatings",
    cas: "Proprietary Polymer",
    formula: "Epoxy-Vinyl Polymer Matrix",
    purity: "Pre-promoted / Thixotropic Industrial Grade",
    appearance: "Amber to pinkish translucent liquid",
    packaging: ["200L Steel Drum (220 kg)", "IBC Tote (1100 kg)"],
    applications: "Corrosion-resistant chemical storage tanks, flue gas scrubbers, marine structural hulls, FRP pipelines.",
    reachStatus: "Certified High Durability"
  },
  {
    id: "upr",
    name: "Unsaturated Polyester Resin / UPR (Ortho & Iso)",
    category: "resins-coatings",
    cas: "Proprietary",
    formula: "Polyester Alkyd in Styrene",
    purity: "High Performance Composites Grade",
    appearance: "Pale amber transparent liquid",
    packaging: ["200L Steel Drum (220 kg)", "ISO Tank"],
    applications: "Fiberglass reinforced plastics (FRP), bathtubs, automotive body parts, artificial marble, buttons.",
    reachStatus: "ISO 9001 / Lloyd's Register Grade"
  },
  {
    id: "gelcoat-resin",
    name: "Gelcoat Resin (Tooling / Marine / Sanitary)",
    category: "resins-coatings",
    cas: "Formulated Resin",
    formula: "Isophthalic / Neopentyl Glycol Base",
    purity: "UV & Hydrolysis Resistant Formulations",
    appearance: "Pigmented or clear viscous liquid",
    packaging: ["20kg Pail", "200kg Drum"],
    applications: "Protective cosmetic exterior layer on boats, yachts, sanitaryware, wind turbine blades.",
    reachStatus: "Marine Grade Certified"
  },
  {
    id: "flame-retardant-resin",
    name: "Flame-Retardant Resin / FR Resin",
    category: "resins-coatings",
    cas: "Halogenated / Phosphorus Blend",
    formula: "FR Polyester/Vinyl Ester",
    purity: "UL94 V-0 / Class 1 Flame Spread Rated",
    appearance: "Translucent liquid",
    packaging: ["200L Steel Drum (220 kg)"],
    applications: "Railway interior composites, building cladding panels, offshore drilling rigs, electrical enclosures.",
    reachStatus: "UL94 / ASTM E84 Rated"
  },
  {
    id: "eco-coatings",
    name: "High-Performance Environmentally Friendly Coating",
    category: "resins-coatings",
    cas: "Waterborne / Low VOC Polymer",
    formula: "Advanced Water-based Polymer Hybrid",
    purity: "Ultra-low VOC formulation",
    appearance: "Milky liquid / custom colored",
    packaging: ["20L Pail", "200L Drum", "1000L IBC"],
    applications: "Heavy-duty anti-corrosion for bridges, petrochemical tanks, marine equipment, steel construction.",
    reachStatus: "Eco-Friendly Green Standard"
  },
  {
    id: "bpa-epichlorohydrin",
    name: "Bisphenol-A / Epichlorohydrin Polymer (Liquid Epoxy Resin)",
    category: "resins-coatings",
    cas: "25068-38-6",
    formula: "(C15H16O2·C3H5ClO)x",
    purity: "Epoxy Equivalent Weight 182-192 g/eq",
    appearance: "Clear, viscous pale yellow liquid",
    packaging: ["200L Steel Drum (220 kg)", "IBC Tote (1100 kg)", "ISO Tank"],
    applications: "Heavy-duty protective coatings, structural composites, electrical potting, adhesive potting.",
    reachStatus: "Full REACH Registered"
  },
  {
    id: "glycidyl-bpa",
    name: "Glycidyl-Terminated Bisphenol-A / Epichlorohydrin Copolymer",
    category: "resins-coatings",
    cas: "25036-25-3 / 25068-38-6",
    formula: "Solid / Semi-solid Epoxy Resin",
    purity: "EEW 450-500 g/eq (Solid Type 1)",
    appearance: "Clear solid flakes or viscous resin",
    packaging: ["25kg Kraft Paper Bags", "200L Drum"],
    applications: "Epoxy powder coatings, can and coil coatings, civil engineering mortars, high-voltage insulation.",
    reachStatus: "Certified"
  },

  // 16. Aldehydes
  {
    id: "propionaldehyde",
    name: "Propionaldehyde (Propanal)",
    category: "aldehydes",
    cas: "123-38-6",
    formula: "C3H6O",
    purity: "≥ 99.0%",
    appearance: "Colorless liquid with sharp suffocating odor",
    packaging: ["ISO Tank", "200L Steel Drum (160 kg)"],
    applications: "Propionic acid synthesis, trimethylolethane (TME), pharmaceuticals, plasticizers, fragrance intermediates.",
    reachStatus: "Export Quality Standard"
  }
];

// Helper functions for catalog queries
function getAllCategories() {
  return CHEMICAL_CATEGORIES;
}

function getAllProducts() {
  return CHEMICAL_PRODUCTS;
}

function getProductById(id) {
  return CHEMICAL_PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(category) {
  if (!category || category === "all") return CHEMICAL_PRODUCTS;
  return CHEMICAL_PRODUCTS.filter(p => p.category === category);
}

function searchProducts(query) {
  if (!query) return CHEMICAL_PRODUCTS;
  const q = query.toLowerCase().trim();
  return CHEMICAL_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.cas.toLowerCase().includes(q) ||
    p.formula.toLowerCase().includes(q) ||
    p.applications.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}
