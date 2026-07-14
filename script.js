const WA = "6281234567890";
const BASE = "https://wegomedika.com/wp-content/uploads/2020/04/";
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
  {name:"Rubber Stopper in Bag Packaging (2)",cat:"wego",img:BASE+"Rubber-stopper-in-bag-packaging-2-300x150.jpg"}
];

const CAT_LABEL = {all:"Semua Produk",abbott:"Abbott",cordis:"Cordis",wego:"WEGO",wemed:"WEMED","rapid-test":"Rapid Test"};
const BADGE = {abbott:"ABBOTT",cordis:"CORDIS",wego:"WEGO",wemed:"WEMED","rapid-test":"RAPID"};
const CAT_DESC = {
  abbott:"Sistem dan instrumen diagnostik laboratorium dari Abbott untuk pemeriksaan klinis di rumah sakit dan laboratorium. Dirancang untuk hasil akurat, throughput tinggi, dan operasional yang efisien.",
  cordis:"Perangkat kardiovaskular Cordis untuk prosedur diagnostik dan intervensi pada jantung serta pembuluh darah, didukung rekam jejak global di bidang teknologi endovaskular.",
  wego:"Produk medical disposable WEGO yang diproduksi dengan standar kualitas tinggi untuk kebutuhan klinis harian — steril, presisi, dan andal.",
  wemed:"Perlengkapan medis disposable WEMED untuk mendukung operasional fasilitas kesehatan sehari-hari."
};
const CATS = [{id:"all",lbl:"Semua Produk"},{id:"abbott",lbl:"Abbott"},{id:"cordis",lbl:"Cordis"},{id:"wego",lbl:"WEGO"},{id:"wemed",lbl:"WEMED"},{id:"rapid-test",lbl:"Rapid Test"}];
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

function toggleMob() { document.getElementById('mobMenu').classList.toggle('open'); }
function closeMob() { document.getElementById('mobMenu').classList.remove('open'); }

// ── PRODUCTS ──
function countFor(id) { return id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === id).length; }

function renderFilters() {
  document.getElementById('catList').innerHTML = CATS.map(c =>
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

function waLink(name, cat) { return "https://wa.me/"+WA+"?text="+encodeURIComponent("Halo, saya tertarik dengan produk: "+name+" ("+CAT_LABEL[cat]+"). Mohon info ketersediaan dan harga."); }
function emailLink(name) { return "mailto:info@wegomedika.com?subject="+encodeURIComponent("Inquiry: "+name)+"&body="+encodeURIComponent("Halo Wego Medika,\n\nSaya tertarik dengan produk "+name+". Mohon informasi spesifikasi, ketersediaan, dan penawaran harga.\n\nTerima kasih."); }

function card(p, idx) {
  return `<div class="prod-card" onclick="openModal(${idx})">
    <div class="pc-img">
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="imgFallback(this)">
      <div class="pc-badge">${BADGE[p.cat]}</div>
    </div>
    <div class="pc-body">
      <h3>${p.name}</h3>
      <div class="pc-cat">${CAT_LABEL[p.cat]}</div>
      <div class="pc-acts">
        <a class="bwa" href="${waLink(p.name,p.cat)}" target="_blank" onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>WA
        </a>
        <a class="bmail" href="${emailLink(p.name)}" aria-label="Email" onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
      </div>
    </div>
  </div>`;
}

function renderProducts() {
  const q = (document.getElementById('searchInput')||{value:''}).value.trim().toLowerCase();
  let list = PRODUCTS.map((p,i)=>({p,i})).filter(({p}) => activeCat==='all' || p.cat===activeCat);
  if (q) list = list.filter(({p}) => p.name.toLowerCase().includes(q));
  document.getElementById('catHeading').textContent = CAT_LABEL[activeCat];
  document.getElementById('resultCount').innerHTML = `Menampilkan <strong>${list.length}</strong> produk${q?` untuk "${q}"`:''}`
  const container = document.getElementById('productContainer');
  if (!list.length) {
    container.innerHTML = `<div class="empty-st">
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="12"/><line x1="11" y1="15" x2="11.01" y2="15"/></svg>
      <h3>Produk sedang dalam proses pelengkapan</h3>
      <p>Katalog untuk kategori ini sedang kami perbarui. Hubungi tim kami untuk menanyakan ketersediaan.</p>
      <a class="empty-wa" href="https://wa.me/${WA}" target="_blank">Tanya via WhatsApp</a></div>`;
  } else {
    container.innerHTML = `<div class="prod-grid">${list.map(({p,i})=>card(p,i)).join('')}</div>`;
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
      <div class="m-cat">Kategori: ${CAT_LABEL[p.cat]}</div>
      <div class="m-sec"><h4>Deskripsi</h4><p>${CAT_DESC[p.cat]||'Produk alat kesehatan dari Wego Medika Indonesia.'}</p></div>
      <div class="m-sec"><h4>Spesifikasi</h4>
        <div class="specs-soon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Spesifikasi lengkap akan segera tersedia — coming soon. Hubungi tim kami untuk detail dan ketersediaan.</div>
      </div>
      <div class="m-acts">
        <a class="m-wa" href="${waLink(p.name,p.cat)}" target="_blank"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>Hubungi via WhatsApp</a>
        <a class="m-email" href="${emailLink(p.name)}"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>Email</a>
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
  let b = "Halo Wego Medika,\n\n";
  if(n) b += "Nama: "+n+"\n";
  if(o) b += "Institusi: "+o+"\n";
  if(c) b += "Kontak: "+c+"\n";
  b += "\n"+(m||"Saya ingin bertanya mengenai produk dan layanan Anda.");
  return b;
}
function sendWA() { window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(buildMsg()),"_blank"); }
function sendEmail() { window.location.href = "mailto:info@wegomedika.com?subject="+encodeURIComponent("Pesan dari Website")+"&body="+encodeURIComponent(buildMsg()); }

// ── PROCESS ANIMATION ──
new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) document.querySelectorAll('.proc-step').forEach((s,i)=>setTimeout(()=>s.classList.add('active'),i*200)); });
}, {threshold:.3}).observe(document.getElementById('procSteps'));

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

// ── CLOSE MENU ON OUTSIDE CLICK ──
document.addEventListener('click', e => {
  const m = document.getElementById('mobMenu');
  if (!document.querySelector('nav').contains(e.target) && !m.contains(e.target)) m.classList.remove('open');
  if (e.key === 'Escape') closeModal();
});
document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });

// init
renderFilters();
renderProducts();
