// Contact is email + phone only — there is no WhatsApp channel on this site.
const EMAIL = "info@wegomedika.com";
const TEL = "+62213503011";        // href form
const TEL_DISPLAY = "(021) 350 3011";
const BASE = "assets/products/";
const CI = BASE + "WhatsApp-Image-2020-04-07-at-14.01.06-300x150.jpeg";

const PRODUCTS = [
  {name:"Alinity c Instrument",cat:"abbott",img:BASE+"alinity-c-instrument-image-450x240-300x150.png"},
  {name:"Alinity c Processing Module & Accessories",cat:"abbott",img:BASE+"ALINITY-C-PROCESSING-MODULE-AND-ACCESSORIES-300x150.jpg"},
  {name:"Alinity hq Analyzer & Accessories",cat:"abbott",img:BASE+"ALINITY-HQ-ANALYZER-AND-ACCESSORIES-300x150.jpg"},
  {name:"Alinity hq Instrument",cat:"abbott",img:BASE+"alinity-hq-instrument-image-450x240-300x150.png"},
  {name:"Alinity i Instrument",cat:"abbott",img:BASE+"alinity-i-instrument-image-450x240-300x150.png"},
  {name:"Alinity i Processing Module & Accessories",cat:"abbott",img:BASE+"ALINITY-I-PROCESSING-MODULE-AND-ACCESSORIES-300x150.jpg"},
  {name:"ARCHITECT c4000 Processing Module & Accessories",cat:"abbott",img:BASE+"ARCHITECT-C4000-Processing-Module-integrated-and-Accessories-300x150.jpg"},
  {name:"ARCHITECT c8000 Instrument",cat:"abbott",img:BASE+"ARCHITECT_c8000_Instrument_Image_straight_500x500-300x150.png"},
  {name:"ARCHITECT c8000 Processing Module & Accessories",cat:"abbott",img:BASE+"ARCHITECT-C8000-Processing-Module-and-Accessories-300x150.jpg"},
  {name:"ARCHITECT i1000SR System & Accessories",cat:"abbott",img:BASE+"ARCHITECT-i1000SR-System-and-Accessoriess-300x150.jpg"},
  {name:"ARCHITECT i2000SR System & Accessories",cat:"abbott",img:BASE+"ARCHITECT-i2000SR-System-and-Accessoriess-300x150.jpg"},
  {name:"c4000 500",cat:"abbott",img:BASE+"c4000-500-300x150.png"},
  {name:"Cell-Dyn Emerald 18 Analyzer & Accessories",cat:"abbott",img:BASE+"CELL-DYN-Emerald-18-Analyzer-and-Accessories-300x150.jpg"},
  {name:"Cell-Dyn Emerald 18 3-Part Differential Hematology Analyzer",cat:"abbott",img:BASE+"cell-dyn-emerald-18-3-part-differential-hematology-analyzer-500x500-300x150.jpg"},
  {name:"Cell-Dyn Emerald 18 Compact Hematology Analyzer",cat:"abbott",img:BASE+"cell-dyn-emerald-18-compact-hematology-analyzer-600x350-300x150.jpg"},
  {name:"Cell-Dyn Emerald 18 Hematology Analyzer with Reagent Storage",cat:"abbott",img:BASE+"cell-dyn-emerald-18-hematology-analyzer-with-reagent-storage-600x350-300x150.jpg"},
  {name:"Cell-Dyn Emerald 18 Small-Sized Hematology Analyzer",cat:"abbott",img:BASE+"CELL-DYN-Emerald-18-Small-Sized-Hematology-Analyzer-500x500-300x150.png"},
  {name:"Cell-Dyn Emerald 22 Analyzer & Accessories",cat:"abbott",img:BASE+"CELL-DYN-Emerald-22-and-Accessories-300x150.jpg"},
  {name:"Cell-Dyn Emerald 22 Compact Hematology Analyzer",cat:"abbott",img:BASE+"cell-dyn-emerald-22-compact-hematology-analyzer-500x500-300x150.jpg"},
  {name:"Cell-Dyn Emerald 22 Hematology Analyzer Reagents",cat:"abbott",img:BASE+"cell-dyn-emerald-22-hematology-analyzer-reagents-600x350-2-300x150.jpg"},
  {name:"Cell-Dyn Emerald 22 Intuitive Hematology Analyzer",cat:"abbott",img:BASE+"cell-dyn-emerald-22-intuitive-hematology-analyzer-600x350-300x150.jpg"},
  {name:"Cell-Dyn Emerald 22 Small & Lightweight Hematology Analyzer",cat:"abbott",img:BASE+"cell-dyn-emerald-22-small-and-lightweight-hematology-analyzer-600x350-300x150.jpg"},
  {name:"Cell-Dyn Emerald 22 Small Hematology Analyzer",cat:"abbott",img:BASE+"cell-dyn-emerald-22-small-hematology-analyzer-500x500-300x150.jpg"},
  {name:"Cell-Dyn Ruby Analyzer & Accessories",cat:"abbott",img:BASE+"CELL-DYN-Ruby-and-Accessories-300x150.jpg"},
  {name:"Cell-Dyn Ruby Hematology Analyzer 1",cat:"abbott",img:BASE+"cell-dyn-ruby-haematology-analyser-1-500x500-300x150.jpg"},
  {name:"Cell-Dyn Ruby Hematology Analyzer 2",cat:"abbott",img:BASE+"cell-dyn-ruby-haematology-analyser-2-500x500-300x150.jpg"},
  {name:"Cell-Dyn Ruby Hematology Analyzer 3",cat:"abbott",img:BASE+"cell-dyn-ruby-haematology-analyser-3-500x500-300x150.jpg"},
  // Abbott reagents, controls and consumables — from "ABBOT WEGO.pdf" (Wego team).
  // These sit alongside the 27 instrument listings above, which came from wegomedika.com.
  {name:"Reagen Skrining Darah ALINITY i HBsAg Next Qualitative Reagent Kit 2 x 600 Test",cat:"abbott",img:BASE+"abbott-alinity-hbsag-next-kit.jpg",desc:"prod.desc.abHbsagNext"},
  {name:"CELL-DYN Reticulocyte Reagent 3H40-01",cat:"abbott",img:BASE+"abbott-celldyn-reticulocyte-reagent.jpg",desc:"prod.desc.abCellDynRetic"},
  {name:"ALINITY i Processing Module and Accessories WASH ZONE PROBE 8C94.36",cat:"abbott",img:BASE+"abbott-alinity-wash-zone-probe.jpg",desc:"prod.desc.abWashZoneProbe"},
  {name:"ALINITY h-series Hemcal 4U73.02",cat:"abbott",img:BASE+"abbott-alinity-hemcal.jpg",desc:"prod.desc.abHemcal"},
  {name:"TUBING/SENSOR, TEMPERATURE, WZ 8C94.91",cat:"abbott",img:BASE+"abbott-tubing-sensor-wz.jpg",desc:"prod.desc.abTubingWz"},
  {name:"ALINITY i 2nd Generation Testosterone Controls 7P68.10",cat:"abbott",img:BASE+"abbott-alinity-testosterone-controls.jpg",desc:"prod.desc.abTestoCtrl"},
  {name:"Technopath Multichem LPS 6V83.10",cat:"abbott",img:BASE+"abbott-technopath-multichem-lps.jpg",desc:"prod.desc.abMultichemLps"},
  {name:"ABBOTT Prealbumin 240 T 1E02.24",cat:"abbott",img:BASE+"abbott-prealbumin-240t.jpg",desc:"prod.desc.abPrealbumin"},
  {name:"Perialistic Pump Tubing 91485-01",cat:"abbott",img:BASE+"abbott-perialistic-pump-tubing.jpg",desc:"prod.desc.abPumpTubing"},
  {name:"ALINITY i HBsAg Qualitative II Confirmatory Manual Diluent 8P11.40",cat:"abbott",img:BASE+"abbott-alinity-hbsag-conf-diluent.jpg",desc:"prod.desc.abHbsagDiluent"},
  {name:"ADROIT Guiding Catheter",cat:"cordis",img:CI},
  {name:"AVANTI+ Catheter Sheath Introducer",cat:"cordis",img:CI},
  {name:"BRITE TIP Sheath Introducer",cat:"cordis",img:CI},
  {name:"CORDIS EXOSEAL Vascular Closure Device",cat:"cordis",img:CI},
  {name:"CORDIS EXOSEAL Vascular Closure Device / CORDIS PRECISE & PRECISE RX Nitinol Stent System",cat:"cordis",img:CI},
  {name:"EMERALD Guide Wire",cat:"cordis",img:CI},
  {name:"HIGH FLOW Angiographic Catheter",cat:"cordis",img:CI},
  {name:"INFINITI Diagnostic Catheter",cat:"cordis",img:CI},
  {name:"PRECISER PRO Rx Nitinol Stent System",cat:"cordis",img:CI},
  {name:"SUPER TORQUE MB Angiographic Catheter",cat:"cordis",img:CI},
  {name:"SUPER TORQUE Plus Angiographic Catheter",cat:"cordis",img:CI},
  {name:"SUPER TORQUE Angiographic Catheter",cat:"cordis",img:CI},
  {name:"TEMPO Angiographic Catheter",cat:"cordis",img:CI},
  {name:"VISTA BRITE TIP Guiding Catheter",cat:"cordis",img:CI},
  {name:"1 ml Long with Graduation",cat:"wego",img:BASE+"1-ml-long-with-graduation-300x150.jpg"},
  {name:"1 ml Long Rigid Luer Lock",cat:"wego",img:BASE+"1ml-long-rigid-luer-lock-300x150.jpg"},
  {name:"1 ml Standard with Needle",cat:"wego",img:BASE+"1ml-standard-with-needle-300x150.jpg"},
  {name:"2.25ml-3ml-5ml Flexible Luer Lock with PS Rod",cat:"wego",img:BASE+"2.25ml-3ml-5ml-flexible-luer-lock-with-PS-rod-300x150.jpg"},
  {name:"2.25ml-3ml-5ml Luer Cone PFS",cat:"wego",img:BASE+"2.25ml-3ml-5ml-luer-cone-PFS-300x150.jpg"},
  {name:"2.25ml-3ml-5ml Rigid & Flexible Luer Lock",cat:"wego",img:BASE+"2.25ml-3ml-5ml-rigid-luer-lock-flexible-luer-lock-300x150.jpg"},
  {name:"Packaging of Syringe Barrel",cat:"wego",img:BASE+"packaging-of-syringe-barrel-300x150.jpg"},
  {name:"Rubber Stopper in Bag Packaging (1)",cat:"wego",img:BASE+"Rubber-stopper-in-bag-packaging-1-300x150.jpg"},
  {name:"Rubber Stopper in Bag Packaging (2)",cat:"wego",img:BASE+"Rubber-stopper-in-bag-packaging-2-300x150.jpg"},
  // Afinion — Abbott's point-of-care line, distributed on INAPROC under the ALERE
  // HEALTH seller. Product names stay as the principal writes them; `desc` points at
  // an i18n key so the write-up translates (EN/ZH/ID) while the name does not.
  // Photos extracted from "AFNION WEGO.pdf" supplied by the Wego team.
  {name:"AFINION 2 and Accessories",cat:"afinion",img:BASE+"afinion-2-analyzer.jpg",desc:"prod.desc.afinion2"},
  {name:"AFINION Lipid Panel",cat:"afinion",img:BASE+"afinion-lipid-panel.jpg",desc:"prod.desc.afinionLipid"},
  {name:"AFINION HbA1c",cat:"afinion",img:BASE+"afinion-hba1c.jpg",desc:"prod.desc.afinionHba1c"},
  {name:"AFINION CRP",cat:"afinion",img:BASE+"afinion-crp.jpg",desc:"prod.desc.afinionCrp"},
  {name:"AFINION Albumin Creatinin Ratio (ACR)",cat:"afinion",img:BASE+"afinion-acr.jpg",desc:"prod.desc.afinionAcr"},
  // Becton Dickinson — from "BECTON DICKINSON WEGO.pdf" (Wego team). Peripheral vascular
  // catheters, IV access, anaesthesia needles, specimen collection and microbiology media.
  {name:"Ultraverse 035 PTA Balloon Dilatation Catheter",cat:"bd",img:BASE+"bd-ultraverse-035-pta-balloon.jpg",desc:"prod.desc.bdUltraverse"},
  {name:"Conquest 40 PTA Balloon Dilatation Catheter",cat:"bd",img:BASE+"bd-conquest-40-pta-balloon.jpg",desc:"prod.desc.bdConquest"},
  {name:"Rotarex S Rotational Catheter",cat:"bd",img:BASE+"bd-rotarex-s-rotational-catheter.jpg",desc:"prod.desc.bdRotarex"},
  // Both spinal needle gauges share one photo — the source PDF uses the same image twice.
  {name:"BD Spinal Needle 25 G",cat:"bd",img:BASE+"bd-spinal-needle.jpg",desc:"prod.desc.bdSpinalNeedle",descVars:{gauge:"25GA"}},
  {name:"BD Spinal Needle 27 G",cat:"bd",img:BASE+"bd-spinal-needle.jpg",desc:"prod.desc.bdSpinalNeedle",descVars:{gauge:"27GA"}},
  {name:"BD Posiflush SP Syringe 0.9% NaCl 10ML",cat:"bd",img:BASE+"bd-posiflush-sp-syringe.jpg",desc:"prod.desc.bdPosiflush"},
  {name:"BD BBL TAXO P",cat:"bd",img:BASE+"bd-bbl-taxo-p.jpg",desc:"prod.desc.bdTaxoP"},
  {name:"BD BBL Mannitol Salt Agar",cat:"bd",img:BASE+"bd-bbl-mannitol-salt-agar.jpg",desc:"prod.desc.bdMannitolAgar"},
  {name:"BD Vacutainer One Use Holder",cat:"bd",img:BASE+"bd-vacutainer-one-use-holder.jpg",desc:"prod.desc.bdVacutainerHolder"},
  {name:"BD Kit FC Beads 7 Color CE/IVD",cat:"bd",img:BASE+"bd-fc-beads-7-color.jpg",desc:"prod.desc.bdFcBeads"},
  // The two Nexiva listings differ only by gauge — one shared write-up, `descVars` fills it in.
  {name:"BD Nexiva™ Closed IV Catheter System – Dual Port 18 GA 1.25 IN",cat:"bd",img:BASE+"bd-nexiva-dual-port-18ga.jpg",desc:"prod.desc.bdNexiva",descVars:{gauge:"18G"}},
  {name:"BD Nexiva™ Closed IV Catheter System – Dual Port 20 GA 1.25 IN",cat:"bd",img:BASE+"bd-nexiva-dual-port-20ga.jpg",desc:"prod.desc.bdNexiva",descVars:{gauge:"20G"}},
  // Lorne Laboratories (UK) — from "LORNE WEGO.pdf" (Wego team). Listed on INAPROC under
  // the seller Rafa Topaz Utama, not under Lorne's own name.
  // Several listings genuinely share a write-up and a photo in the source; the repeats
  // below are deliberate, not copy-paste slips:
  //   · the three ABO reagents (Anti-A, Anti-A,B, Anti-B) all carry the same ABO text
  //   · the two Salmonella reagents share both text and photo
  //   · the two RPR Carbon Kit sizes share a photo (their text differs)
  {name:"LORNE RPR Carbon Kit 500 Test/Kit",cat:"lorne",img:BASE+"lorne-rpr-carbon-kit.jpg",desc:"prod.desc.lorneRpr500"},
  {name:"LORNE Anti-A Monoclonal Blood Grouping Reagents",cat:"lorne",img:BASE+"lorne-anti-a.jpg",desc:"prod.desc.lorneAbo"},
  {name:"LORNE Anti-A,B Monoclonal Blood Reagents",cat:"lorne",img:BASE+"lorne-anti-ab.jpg",desc:"prod.desc.lorneAbo"},
  {name:"LORNE Salmonella Paratyphi BH",cat:"lorne",img:BASE+"lorne-salmonella-reagents.jpg",desc:"prod.desc.lorneSalmonella"},
  {name:"LORNE CRP Latex Test Kit",cat:"lorne",img:BASE+"lorne-crp-latex-test-kit.jpg",desc:"prod.desc.lorneCrpLatex"},
  {name:"LORNE Anti-D Duoclone Monoclonal",cat:"lorne",img:BASE+"lorne-anti-d.jpg",desc:"prod.desc.lorneAntiD"},
  {name:"LORNE Anti-B Monoclonal Blood Grouping Reagent",cat:"lorne",img:BASE+"lorne-anti-b.jpg",desc:"prod.desc.lorneAbo"},
  {name:"LORNE RPR Carbon Kit 150 Test/Kit",cat:"lorne",img:BASE+"lorne-rpr-carbon-kit.jpg",desc:"prod.desc.lorneRpr150"},
  {name:"LORNE Salmonella Typhi H",cat:"lorne",img:BASE+"lorne-salmonella-reagents.jpg",desc:"prod.desc.lorneSalmonella"},
  // Proline — from "Proline Wego.pdf" (Wego team). PT Prodia Diagnostic Line's own INAPROC
  // storefront. Note the listings carry three different manufacturer marks (PROLINE, DYMIND,
  // SNIBE, DIMI) but all sit under the one Proline/Prodia seller, hence one category.
  // The last three are onsite CALIBRATION SERVICES, not goods — see CLAUDE.md.
  {name:"PROLINE Hemoglobin Test Strip",cat:"proline",img:BASE+"proline-hemoglobin-test-strip.jpg",desc:"prod.desc.proHemoglobin"},
  {name:"DYMIND DH33 Auto Hematology Analyzer 3 diff",cat:"proline",img:BASE+"proline-dymind-dh33.jpg",desc:"prod.desc.proDymind"},
  {name:"SNIBE Maglumi X3i",cat:"proline",img:BASE+"proline-snibe-maglumi-x3i.jpg",desc:"prod.desc.proSnibe"},
  {name:"DIMI Probe Cleanser 1",cat:"proline",img:BASE+"proline-dimi-probe-cleanser-1.jpg",desc:"prod.desc.proProbeCleanser"},
  {name:"DIMI Diluent",cat:"proline",img:BASE+"proline-dimi-diluent.jpg",desc:"prod.desc.proDiluent"},
  {name:"DIMI Lyse",cat:"proline",img:BASE+"proline-dimi-lyse.jpg",desc:"prod.desc.proLyse"},
  {name:"Kalibrasi Timbangan Bayi Mekanik dan Digital",cat:"proline",img:BASE+"proline-kalibrasi-timbangan-bayi.jpg",desc:"prod.desc.proKalTimbangan"},
  {name:"Kalibrasi Instrumen Photometer",cat:"proline",img:BASE+"proline-kalibrasi-photometer.jpg",desc:"prod.desc.proKalPhotometer"},
  {name:"Kalibrasi Instrumen Hematologi 5 diff",cat:"proline",img:BASE+"proline-kalibrasi-hematologi-5diff.jpg",desc:"prod.desc.proKalHema5diff"},
  // Sansico — from "SANSICO.pdf" (Wego team). Seller Sansico Natura Resources; the kits
  // themselves carry two marks, dETEKS1 and Everlife. All six are rapid tests, which
  // overlaps the still-empty `rapid-test` category — see CLAUDE.md, unresolved.
  // The source spells the brand "d3TEKS1" on some captions and "dETEKS1" on others.
  // Left exactly as the client wrote each one — names are never normalised. See CLAUDE.md.
  {name:"d3TEKS1 HBsAg Rapid Test",cat:"sansico",img:BASE+"sansico-deteks1-hbsag.jpg",desc:"prod.desc.sanHbsag"},
  {name:"d3TEKS1 HBsAb Rapid Test",cat:"sansico",img:BASE+"sansico-deteks1-hbsab.jpg",desc:"prod.desc.sanHbsab"},
  {name:"EVERLIFE Malaria Pf/Pan Antigen Rapid Test",cat:"sansico",img:BASE+"sansico-everlife-malaria.jpg",desc:"prod.desc.sanMalariaEverlife"},
  {name:"dETEKS1 Malaria Pf/Pan Antigen Rapid Test",cat:"sansico",img:BASE+"sansico-deteks1-malaria.jpg",desc:"prod.desc.sanMalariaDeteks1"},
  // The client's caption for this one carries no product name, so the title is read off
  // the box art verbatim. Confirm against the real INAPROC listing title.
  {name:"Multidrug Rapid Test 5 Parameter (OPI, MET, COC, AMP, THC)",cat:"sansico",img:BASE+"sansico-deteks1-multidrug-5.jpg",desc:"prod.desc.sanMultidrug"},
  {name:"Everlife HIV 1/2 Antibody Rapid Test (3 Lines)",cat:"sansico",img:BASE+"sansico-everlife-hiv.jpg",desc:"prod.desc.sanHiv"},
  // Biosensors International — from "BIOSENSORS.pdf" (Wego team). Interventional cardiology:
  // BA9 stents, drug-coated balloon, intravascular lithotripsy, IVUS and FFR physiology.
  // Source is in English, so EN here is verbatim and ID/ZH are the translations.
  {name:"SoniCracker Single-Use Coronary Intravascular Lithotripsy Catheter (IVL Catheter)",cat:"biosensors",img:BASE+"biosensors-sonicracker-ivl.jpg",desc:"prod.desc.bioSonicracker"},
  {name:"TruePhysio Rapid Exchange Pressure Microcatheter",cat:"biosensors",img:BASE+"biosensors-truephysio.jpg",desc:"prod.desc.bioTruephysio"},
  // Caption carries no product name; title read off the poster art, same as Sansico's Multidrug.
  {name:"BioAscend Biolimus A9 Drug-Coated PTCA Balloon Catheter",cat:"biosensors",img:BASE+"biosensors-bioascend.jpg",desc:"prod.desc.bioBioascend"},
  // Likewise unnamed in the caption — title taken from the description's own opening phrase.
  {name:"IVUS Console",cat:"biosensors",img:BASE+"biosensors-ivus-console.jpg",desc:"prod.desc.bioIvusConsole"},
  {name:"TRUEVISION Intravascular Ultrasound Imaging Catheter",cat:"biosensors",img:BASE+"biosensors-truevision.jpg",desc:"prod.desc.bioTruevision"},
  {name:"BioFreedom Ultra Drug Coated Coronary Stent System (BioFreedom Ultra DCS)",cat:"biosensors",img:BASE+"biosensors-biofreedom-ultra.jpg",desc:"prod.desc.bioBiofreedom"},
  {name:"VivoCardio Cardiovascular Pressure Measurement (CPM) System",cat:"biosensors",img:BASE+"biosensors-vivocardio.jpg",desc:"prod.desc.bioVivocardio"},
  // Client mismatch, left alone: the caption says "BioMatrix VI" but the poster reads
  // "BioMatrix alpha". Same policy as the Abbott HBsAg case — the client's source wins.
  {name:"BioMatrix VI Drug Eluting Coronary Stent System (BMX6 DES)",cat:"biosensors",img:BASE+"biosensors-biomatrix.jpg",desc:"prod.desc.bioBiomatrix"},
  // WEGO — from "Untitled document.pdf" (Wego team).
  // The client asked for these to sit under WEGO even though several are Cordis- or
  // Proline-branded and overlap those categories: "kalo ada yang sama dengan category
  // lain gapapa, itu permintaan client." Do not dedupe or re-file them.
  // Three names arrived with literal "[register]" / "[tradermark]" tokens — broken (R)/(TM)
  // glyphs in the client's document. The user asked for those to be dropped entirely
  // ("untuk simbol ilangin aja gapapa"); the rest of each name is untouched.
  {name:"PROLINE UA120 Urine Analyzer 52200A",cat:"wego",img:BASE+"wego-proline-ua120.jpg",desc:"prod.desc.wegoUa120"},
  {name:"CORDIS Biopsy Forceps ( Type 504300 )",cat:"wego",img:BASE+"wego-cordis-biopsy-forceps.jpg",desc:"prod.desc.wegoBiopsy"},
  {name:"S.M.A.R.T CONTROL Nitinol Stent System ( Type C10060MV )",cat:"wego",img:BASE+"wego-smart-control-stent.jpg",desc:"prod.desc.wegoSmartControl"},
  {name:"SELUTION SLR 018 PTA Balloon Catheter ( Type SE18040120 )",cat:"wego",img:BASE+"wego-selution-slr-018.jpg",desc:"prod.desc.wegoSelution"},
  {name:"SABER 0.35 Percutaneous Transluminal Angioplasty (PTA) Dilatation Catheter ( 48003012R )",cat:"wego",img:BASE+"wego-saber-035.jpg",desc:"prod.desc.wegoSaber"},
  {name:"AVIATOR Plus RX Balloon Catheter, PTA Dilatation Catheter ( 4247030W )",cat:"wego",img:BASE+"wego-aviator-plus-rx.jpg",desc:"prod.desc.wegoAviator"}
];


function CAT_LABEL_FOR(id) { return t(id === 'all' ? 'cat.all' : 'cat.' + id); }
const BADGE = {abbott:"ABBOTT",cordis:"CORDIS",wego:"WEGO",wemed:"WEMED","rapid-test":"RAPID",afinion:"AFINION",bd:"BD",lorne:"LORNE",proline:"PROLINE",sansico:"SANSICO",biosensors:"BIOSENSORS"};

// ── OFFICIAL CATALOGUE LINKS ──
// Every product can carry its own `url:` in PRODUCTS — that always wins. Until a
// product has one, it falls back to its brand's catalogue page below. Add
// per-product URLs by dropping `url:"https://..."` into the item; no other change
// is needed. A brand with no entry here simply renders no link.
const CATALOG_URL = {
  abbott: "https://katalog.inaproc.id/abbott-products-indonesia",
  // Afinion is Abbott's point-of-care line but sits under a different INAPROC
  // seller (ALERE HEALTH), hence its own entry rather than reusing abbott's.
  afinion: "https://katalog.inaproc.id/alere-health?catalogueSearch=afinion",
  bd: "https://katalog.inaproc.id/becton-dickinson-indonesia",
  // Lorne, like Afinion, is listed under a third-party seller (Rafa Topaz Utama).
  lorne: "https://katalog.inaproc.id/rafa-topaz-utama?catalogueSearch=lorne",
  proline: "https://katalog.inaproc.id/prodia-diagnostic-line",
  sansico: "https://katalog.inaproc.id/sansico-natura-resources?catalogueSearch=rapid",
  biosensors: "https://katalog.inaproc.id/biosensors-intervensional-teknologi",
};
function catalogLink(p) { return p.url || CATALOG_URL[p.cat] || ""; }
// Blurb shown in the "see more" bar under the grid. Read straight out of I18N
// (not via t()) so each brand can carry its own caveat — Abbott's link goes to a
// government e-catalogue and needs the pricing disclaimer, a brand linking to its
// own product site would not. Falls back to a generic line. `{brand}` is filled in.
function CATALOG_NOTE_FOR(id) {
  const lang = currentLang();
  const key = 'cat.catalogNote.' + id;
  return (I18N[lang] && I18N[lang][key]) || (I18N.en && I18N.en[key]) || t('products.more.descFallback');
}
function CAT_DESC_FOR(id) {
  const lang = currentLang();
  const key = 'cat.desc.' + id;
  return (I18N[lang] && I18N[lang][key]) || (I18N.en && I18N.en[key]) || t('modal.fallbackDesc');
}
function CATS_LIST() { return ["all","abbott","afinion","bd","biosensors","cordis","lorne","proline","sansico","wego","wemed","rapid-test"].map(id => ({id, lbl: CAT_LABEL_FOR(id)})); }
// A product's own write-up wins; brands without one fall back to the category blurb.
// `descVars` fills `{placeholders}` in the string — lets near-identical variants (the
// two Nexiva gauges) share one translated write-up instead of duplicating it per language.
function PROD_DESC(p) {
  const s = p.desc ? t(p.desc) : CAT_DESC_FOR(p.cat);
  return p.descVars ? s.replace(/\{(\w+)\}/g, (m, k) => p.descVars[k] ?? m) : s;
}
const fbk = `<svg class="fbk" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 15l4-4 5 5M14 10l3-3 4 4"/><circle cx="9" cy="9" r="1.5"/></svg>`;

function imgFallback(img) {
  img.style.display = 'none';
  img.insertAdjacentHTML('afterend', fbk);
}

let activeCat = "all";

// ── PAGE SWITCHING ──
function showPage(page, anchor) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => a.classList.toggle('active', a.dataset.page === page));
  window.scrollTo({top:0, behavior:'smooth'});
  closeMob();
  if (page === 'products') {
    if (anchor) { activeCat = anchor; }
    renderFilters();
    renderProducts();
  }
  if (anchor && page === 'home') {
    setTimeout(() => { const el = document.getElementById(anchor); if(el) el.scrollIntoView({behavior:'smooth'}); }, 100);
  }
}

function toggleMob() {
  const open = document.getElementById('mobMenu').classList.toggle('open');
  const burger = document.getElementById('hamburger');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
}
function closeMob() {
  document.getElementById('mobMenu').classList.remove('open');
  const burger = document.getElementById('hamburger');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}
// Not named scrollTop(): inline onclick handlers resolve names against the
// element first, and Element.scrollTop is a number — it would shadow this.
function goTop() { window.scrollTo({top:0, behavior:'smooth'}); }

// ── PRODUCTS ──
function countFor(id) { return id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === id).length; }

function renderFilters() {
  const container = document.getElementById('catList');
  if (!container) return;
  container.innerHTML = CATS_LIST().map(c =>
    `<li class="cat-item ${c.id===activeCat?'active':''}" onclick="setFilter('${c.id}')">
      <span>${c.lbl}</span><span class="cat-cnt">${countFor(c.id)}</span>
    </li>`).join('');
}

function setFilter(id) {
  activeCat = id;
  document.getElementById('searchInput').value = '';
  renderFilters();
  renderProducts();
}

function emailLink(name) {
  const subject = t('email.subject.inquiry').replace('{name}', name);
  const body = t('email.body.inquiry').replace('{name}', name);
  return "mailto:"+EMAIL+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
}

function card(p, idx) {
  return `<div class="prod-card" onclick="openModal(${idx})">
    <div class="pc-img">
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="imgFallback(this)">
      <div class="pc-badge">${BADGE[p.cat]}</div>
    </div>
    <div class="pc-body">
      <h3>${p.name}</h3>
      <div class="pc-cat">${CAT_LABEL_FOR(p.cat)}</div>
      <div class="pc-acts">
        <a class="bmail" href="${emailLink(p.name)}" onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>${t('products.card.email')}
        </a>
        <a class="btel" href="tel:${TEL}" aria-label="${t('products.card.call')}" title="${TEL_DISPLAY}" onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        </a>
      </div>
    </div>
  </div>`;
}

// "Click here to see more" bar, appended under the grid when the selected brand
// has a CATALOG_URL. Category-scoped on purpose: it only shows while that brand
// is filtered, never on "All". To wire up another brand, add its CATALOG_URL
// entry (and optionally a `cat.catalogNote.<id>` string) — nothing else changes.
function catalogBar() {
  const url = CATALOG_URL[activeCat];
  if (!url) return '';
  const brand = CAT_LABEL_FOR(activeCat);
  const fill = s => s.replace(/\{brand\}/g, brand);
  return `<div class="cat-note">
    <div class="cat-note-ic"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg></div>
    <div class="cat-note-body">
      <h4>${fill(t('products.more.title'))}</h4>
      <p>${fill(CATALOG_NOTE_FOR(activeCat))}</p>
    </div>
    <div class="cat-note-acts">
      <a class="cat-note-link" href="${url}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        <span>${t('products.more.link')}</span>
      </a>
      <a class="cat-note-alt" href="mailto:${EMAIL}?subject=${encodeURIComponent(fill(t('products.more.emailSubject')))}">${t('products.more.contact')}</a>
    </div>
  </div>`;
}

function renderProducts() {
  const searchEl = document.getElementById('searchInput');
  if (!searchEl) return;
  const q = searchEl.value.trim().toLowerCase();
  let list = PRODUCTS.map((p,i)=>({p,i})).filter(({p}) => activeCat==='all' || p.cat===activeCat);
  if (q) list = list.filter(({p}) => p.name.toLowerCase().includes(q));
  document.getElementById('catHeading').textContent = CAT_LABEL_FOR(activeCat);
  document.getElementById('resultCount').innerHTML = `${t('products.resultsShowing')} <strong>${list.length}</strong> ${t('products.resultsFor')}${q?` ${t('products.resultsForQuery')} "${q}"`:''}`
  const container = document.getElementById('productContainer');
  if (!list.length) {
    container.innerHTML = `<div class="empty-st">
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="12"/><line x1="11" y1="15" x2="11.01" y2="15"/></svg>
      <h3>${t('products.empty.title')}</h3>
      <p>${t('products.empty.desc')}</p>
      <a class="empty-email" href="mailto:${EMAIL}?subject=${encodeURIComponent(t('products.empty.emailSubject'))}">${t('products.empty.askEmail')}</a></div>` + catalogBar();
  } else {
    container.innerHTML = `<div class="prod-grid">${list.map(({p,i})=>card(p,i)).join('')}</div>` + catalogBar();
  }
}

// ── MODAL ──
function openModal(idx) {
  const p = PRODUCTS[idx];
  if (!p) return;
  document.getElementById('modalInner').innerHTML = `
    <button class="modal-x" onclick="closeModal()"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    <div class="modal-img"><img src="${p.img}" alt="${p.name}" onerror="imgFallback(this)"></div>
    <div class="modal-body">
      <span class="m-badge">${BADGE[p.cat]}</span>
      <h2>${p.name}</h2>
      <div class="m-cat">${t('modal.category')} ${CAT_LABEL_FOR(p.cat)}</div>
      <div class="m-sec"><h4>${t('modal.description')}</h4><p>${PROD_DESC(p)}</p></div>
      <div class="m-sec"><h4>${t('modal.specs')}</h4>
        <div class="specs-soon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>${t('modal.specsSoon')}</div>
      </div>
      ${catalogLink(p) ? `<div class="m-sec"><h4>${t('modal.catalog')}</h4>
        <a class="m-catalog" href="${catalogLink(p)}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          <span>${t('modal.catalogLink')}</span>
        </a>
        <p class="m-catalog-note">${t('modal.catalogNote')}</p>
      </div>` : ''}
      <div class="m-acts">
        <a class="m-email" href="${emailLink(p.name)}"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>${t('modal.email')}</a>
        <a class="m-tel" href="tel:${TEL}"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>${t('modal.tel')}</a>
      </div>
    </div>`;
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() { document.getElementById('productModal').classList.remove('open'); document.body.style.overflow = ''; }

// ── CONTACT FORM ──
function buildMsg() {
  const n = (document.getElementById('cf-name')||{value:''}).value.trim();
  const o = (document.getElementById('cf-org')||{value:''}).value.trim();
  const c = (document.getElementById('cf-contact')||{value:''}).value.trim();
  const m = (document.getElementById('cf-msg')||{value:''}).value.trim();
  let b = t('form.greeting');
  if(n) b += t('form.name')+n+"\n";
  if(o) b += t('form.institution')+o+"\n";
  if(c) b += t('form.contact')+c+"\n";
  b += "\n"+(m||t('form.defaultMsg'));
  return b;
}
function sendEmail() { window.location.href = "mailto:"+EMAIL+"?subject="+encodeURIComponent(t('form.emailSubject'))+"&body="+encodeURIComponent(buildMsg()); }

// ── STAGGERED SCROLL REVEAL ──
function revealOnScroll(gridId, cardSelector) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        grid.querySelectorAll(cardSelector).forEach((c,i)=>setTimeout(()=>c.classList.add('in-view'), i*90));
        obs.disconnect();
      }
    });
  }, {threshold:.15});
  obs.observe(grid);
}
revealOnScroll('valuesGrid', '.value-card');
revealOnScroll('partnersGrid', '.partner-card');
revealOnScroll('customersGrid', '.logo-wall-item');
revealOnScroll('opPartnersGrid', '.logo-wall-item');
revealOnScroll('locGridHQ', '.loc-card');
revealOnScroll('locGridBranch', '.loc-card');
revealOnScroll('locGridRep', '.loc-card');
revealOnScroll('locGridWarehouse', '.loc-card');

// ── UNIVERSAL REVEAL ──
// .reveal fades a single element in; .reveal-group staggers its direct children.
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    if (e.target.classList.contains('reveal-group')) {
      [...e.target.children].forEach((c,i) => { c.style.animationDelay = (i * 80) + 'ms'; });
    }
    e.target.classList.add('in');
    revealObs.unobserve(e.target);
  });
}, {threshold:.12, rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.reveal, .reveal-group').forEach(el => revealObs.observe(el));

// ── INTRO SPLASH ──
// Shown once per browser session. The <head> script already stamped splash-seen /
// splash-active on <html> before first paint. Anything that must not play while the
// overlay covers the page parks in introQueue; runAfterIntro drains it on dismiss.
let introDone = false;
const introQueue = [];
function runAfterIntro() {
  if (introDone) return;
  introDone = true;
  document.documentElement.classList.remove('splash-active');
  introQueue.splice(0).forEach(fn => fn());
}
(function initSplash() {
  const el = document.getElementById('splash');
  // Repeat visit this session: the head script hid it, so nothing to wait for.
  if (!el || document.documentElement.classList.contains('splash-seen')) { runAfterIntro(); return; }
  const dismiss = () => {
    clearTimeout(timer);
    try { sessionStorage.setItem('splashSeen', '1'); } catch (e) {}
    el.classList.add('gone');
    runAfterIntro();
  };
  const timer = setTimeout(dismiss, 2200);   // matches the .splash-bar fill
  el.addEventListener('click', dismiss);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' || e.key === 'Enter') dismiss();
  });
})();

// ── COUNT-UP STATS ──
function countUp(el) {
  const target = parseInt(el.dataset.count, 10);
  if (!target) return;
  const dur = 1500, start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));  // ease-out cubic
    if (p < 1) requestAnimationFrame(tick);
  }
  el.textContent = '0';
  requestAnimationFrame(tick);
}
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const run = () => e.target.querySelectorAll('.cnt').forEach(countUp);
    introDone ? run() : introQueue.push(run);
    countObs.unobserve(e.target);
  });
}, {threshold:.4});
['heroStats','abtStats'].forEach(id => {
  const el = document.getElementById(id);
  if (el) countObs.observe(el);
});

// ── SCROLL-DRIVEN CHROME: nav state, progress bar, back-to-top ──
const nav = document.querySelector('nav');
const prog = document.getElementById('scrollProg');
const fabTop = document.getElementById('fabTop');
let ticking = false;
function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  nav.classList.toggle('scrolled', y > 20);
  prog.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
  fabTop.classList.toggle('show', y > 600);
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
}, {passive:true});
onScroll();

// ── CLOSE MENU ON OUTSIDE CLICK ──
document.addEventListener('click', e => {
  const m = document.getElementById('mobMenu');
  if (!document.querySelector('nav').contains(e.target) && !m.contains(e.target)) closeMob();
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  closeModal();
  closeMob();
});

// init
renderFilters();
renderProducts();
