const T = {
  tr: {
    nav_lands: "Arsalar", nav_contact: "İletişim",
    trust_deed: "Tapu Hazır", trust_fast: "Hızlı Devir", trust_direct: "Sahibinden",
    hero_h1: "Satılık İki Özel Arsa",
    hero_sub: "Kırkpınarsam — doğrudan sahibinden, tapu hazır, hızlı devir.",
    hero_cta_wa: "WhatsApp'tan Bilgi Al",
    hero_cta_view: "İlanları İncele",
    lands_title: "Satılık Arsalar",
    land_btn: "Arsayı İncele",
    contact_title: "Bilgi Alın",
    contact_sub: "Soru sormak veya fiyat bilgisi almak için formu doldurun. En kısa sürede dönüş yapıyoruz.",
    form_name: "Ad Soyad", form_email: "E-posta",
    form_phone: "Telefon (isteğe bağlı)", form_message: "Mesajınız",
    form_send: "Gönder", form_sending: "Gönderiliyor…",
    form_sent: "✓ Mesajınız alındı — en kısa sürede dönüş yapacağız.",
    form_err_all: "Lütfen zorunlu alanları doldurun.",
    form_err_email: "Geçerli bir e-posta adresi girin.",
    form_err_send: "Gönderilemedi. Lütfen tekrar deneyin.",
    footer_copy: "Tüm hakları saklıdır.",
    wa_msg: "Merhaba, arsa hakkında bilgi almak istiyorum.",
    back: "Ana Sayfaya Dön",
    cta_title: "Bu Arsa Hakkında Bilgi Alın",
    cta_sub: "Fiyat ve detay için WhatsApp'tan ulaşın ya da iletişim formunu doldurun.",
    cta_wa: "WhatsApp ile Ulaş", cta_form: "İletişim Formu",
    video_title: "Tanıtım Videosu", about_title: "Arsa Hakkında",
    specs_title: "Arsa Bilgileri",
  },
  en: {
    nav_lands: "Lands", nav_contact: "Contact",
    trust_deed: "Title Ready", trust_fast: "Fast Transfer", trust_direct: "Owner Direct",
    hero_h1: "Two Exclusive Lands for Sale",
    hero_sub: "Kırkpınarsam — direct from owner, title ready, fast transfer.",
    hero_cta_wa: "Contact via WhatsApp",
    hero_cta_view: "View Listings",
    lands_title: "Lands for Sale",
    land_btn: "View Land",
    contact_title: "Get in Touch",
    contact_sub: "Fill in the form for questions or pricing details. We'll get back to you shortly.",
    form_name: "Full Name", form_email: "Email",
    form_phone: "Phone (optional)", form_message: "Your Message",
    form_send: "Send", form_sending: "Sending…",
    form_sent: "✓ Your message has been received — we'll be in touch shortly.",
    form_err_all: "Please fill in all required fields.",
    form_err_email: "Please enter a valid email address.",
    form_err_send: "Failed to send. Please try again.",
    footer_copy: "All rights reserved.",
    wa_msg: "Hi, I want information about the land.",
    back: "Back to Home",
    cta_title: "Get Information About This Land",
    cta_sub: "Reach out via WhatsApp for pricing and details, or fill in the contact form.",
    cta_wa: "Contact via WhatsApp", cta_form: "Contact Form",
    video_title: "Promotional Video", about_title: "About the Land",
    specs_title: "Land Details",
  },
  ar: {
    nav_lands: "الأراضي", nav_contact: "تواصل",
    trust_deed: "الصك جاهز", trust_fast: "نقل سريع", trust_direct: "من المالك",
    hero_h1: "أرضان حصريتان للبيع",
    hero_sub: "Kırkpınarsam — مباشرة من المالك، الصك جاهز، نقل سريع.",
    hero_cta_wa: "تواصل عبر واتساب",
    hero_cta_view: "استعرض الأراضي",
    lands_title: "أراضٍ للبيع",
    land_btn: "عرض الأرض",
    contact_title: "تواصل معنا",
    contact_sub: "أكمل النموذج للحصول على معلومات أو أسعار. سنتواصل معك قريباً.",
    form_name: "الاسم الكامل", form_email: "البريد الإلكتروني",
    form_phone: "الهاتف (اختياري)", form_message: "رسالتك",
    form_send: "إرسال", form_sending: "جارٍ الإرسال…",
    form_sent: "✓ تم استلام رسالتك — سنتواصل معك قريباً.",
    form_err_all: "يرجى ملء جميع الحقول المطلوبة.",
    form_err_email: "يرجى إدخال بريد إلكتروني صحيح.",
    form_err_send: "فشل الإرسال. يرجى المحاولة مرة أخرى.",
    footer_copy: "جميع الحقوق محفوظة.",
    wa_msg: "مرحباً، أود الحصول على معلومات حول الأرض.",
    back: "العودة إلى الرئيسية",
    cta_title: "احصل على معلومات عن هذه الأرض",
    cta_sub: "تواصل عبر واتساب للأسعار والتفاصيل، أو أكمل نموذج التواصل.",
    cta_wa: "تواصل عبر واتساب", cta_form: "نموذج التواصل",
    video_title: "الفيديو التعريفي", about_title: "حول الأرض",
    specs_title: "تفاصيل الأرض",
  }
};

const WA = "905063852311";
let lang = localStorage.getItem("kpm_lang") || "tr";

function setLang(l) {
  lang = l;
  localStorage.setItem("kpm_lang", l);
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = T[l][el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  document.querySelectorAll("[data-lang-show]").forEach(el => {
    el.hidden = el.dataset.langShow !== l;
  });

  const msg = encodeURIComponent(T[l].wa_msg);
  document.querySelectorAll("[data-wa]").forEach(el => {
    el.href = `https://wa.me/${WA}?text=${msg}`;
  });

  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === l);
    b.setAttribute("aria-pressed", b.dataset.lang === l);
  });
}

function initHamburger() {
  const btn = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("open");
    btn.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }));
}

function initForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const t = T[lang];
    const msgEl = document.getElementById("formMsg");
    const btn = document.getElementById("formSubmit");
    const spanEl = btn.querySelector("[data-i18n]");
    const name = form.elements.name?.value.trim();
    const email = form.elements.email?.value.trim();
    const message = form.elements.message?.value.trim();
    if (!name || !email || !message) return showMsg(msgEl, "error", t.form_err_all);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showMsg(msgEl, "error", t.form_err_email);
    btn.disabled = true;
    if (spanEl) spanEl.textContent = t.form_sending;
    msgEl.style.display = "none";
    try {
      const res = await fetch("https://formspree.io/f/mgonqabl", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: form.elements.phone?.value || "", message, _subject: "Kırkpınarsam — Yeni Talep" })
      });
      if (!res.ok) throw new Error();
      showMsg(msgEl, "success", t.form_sent);
      form.reset();
    } catch {
      showMsg(msgEl, "error", t.form_err_send);
    } finally {
      btn.disabled = false;
      if (spanEl) spanEl.textContent = t.form_send;
    }
  });
}

function showMsg(el, type, text) {
  el.className = `form-msg ${type}`;
  el.textContent = text;
  el.style.display = "block";
  el.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function initGallery() {
  const mainImg = document.getElementById("mainImg");
  const lb = document.getElementById("lightbox");
  if (!mainImg) return;
  const items = document.querySelectorAll(".gallery-item");
  items[0]?.classList.add("active");
  items.forEach(item => {
    item.addEventListener("click", () => {
      mainImg.src = item.querySelector("img").src;
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.addEventListener("keydown", e => { if (e.key === "Enter") item.click(); });
  });
  if (!lb) return;
  const lbImg = lb.querySelector("img");
  mainImg.addEventListener("click", () => { lbImg.src = mainImg.src; lb.classList.add("open"); });
  lb.addEventListener("click", () => lb.classList.remove("open"));
  document.addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });
}

document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  document.querySelectorAll(".lang-btn").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
  setLang(lang);
  initHamburger();
  initForm();
  initGallery();
  document.body.style.opacity = 1;
});
