import React, { useMemo, useState } from "react";

function LogoMark({ size = "h-12 w-12", showText = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`${size} logo-glow relative grid shrink-0 place-items-center overflow-hidden rounded-2xl border border-amber-200/35 bg-gradient-to-br from-[#17110b] via-[#2b160f] to-[#050507] shadow-lg shadow-amber-900/30`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,220,130,.55),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,.35),transparent_40%)]" />
        <div className="absolute inset-[5px] rounded-xl border border-white/10" />
        <div className="relative text-center leading-none">
          <p className="font-serif text-[1.45rem] font-black tracking-[-0.08em] text-amber-100">LS</p>
          <p className="mt-0.5 text-[0.42rem] font-black tracking-[0.18em] text-amber-200/80">1898</p>
        </div>
      </div>
      {showText && (
        <div>
          <p className="text-lg font-black tracking-tight">Lakra Photo Studio</p>
          <p className="text-xs text-white/60">Since 1898 · Main Bazaar, Moga</p>
        </div>
      )}
    </div>
  );
}

function Icon({ name, className = "h-6 w-6" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    camera: <svg {...common}><path d="M14.5 4l1.5 2H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l1.5-2h5z" /><circle cx="12" cy="13" r="4" /></svg>,
    upload: <svg {...common}><path d="M12 16V4" /><path d="M7 9l5-5 5 5" /><path d="M20 16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3" /></svg>,
    sparkles: <svg {...common}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" /></svg>,
    clock: <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v6l4 2" /></svg>,
    map: <svg {...common}><path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>,
    phone: <svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z" /></svg>,
    mail: <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>,
    rupee: <svg {...common}><path d="M7 5h10" /><path d="M7 9h10" /><path d="M9 5c4.5 0 6 1.5 6 4s-1.8 4-6 4h-2l7 6" /></svg>,
    image: <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="10" r="1.5" /><path d="M21 16l-5-5L5 19" /></svg>,
    card: <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /><path d="M7 15h3" /></svg>,
    check: <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M8 12l2.5 2.5L16 9" /></svg>,
    star: <svg {...common}><path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2 7.5 14 3 9.6l6.2-.9L12 3z" /></svg>,
    wand: <svg {...common}><path d="M15 4l5 5" /><path d="M14 10l-8 8a2 2 0 0 1-3-3l8-8" /><path d="M18 2l.7 2.3L21 5l-2.3.7L18 8l-.7-2.3L15 5l2.3-.7L18 2z" /></svg>,
    menu: <svg {...common}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></svg>,
    x: <svg {...common}><path d="M6 6l12 12" /><path d="M18 6L6 18" /></svg>,
  };

  return icons[name] || icons.camera;
}

const studio = {
  name: "Lakra Photo Studio",
  tagline: "Since 1898",
  location: "Main Bazaar, Moga, Punjab",
  phone: "+91 98765 43210",
  email: "lakraslens@gmail.com",
  upiId: "9877080211@ptyes",
  instagram: "https://www.instagram.com/lakra_studio_/",
  instagramHandle: "@lakra_studio_",
  logoUrl: "",
};

const services = [
  {
    title: "Passport & Visa Photos",
    desc: "Instant print-ready photos for passport, visa, Aadhaar, PAN, school forms and official documents.",
    icon: "image",
  },
  {
    title: "Wedding Photography",
    desc: "Cinematic wedding coverage, candid moments, albums, reels and full-event storytelling.",
    icon: "camera",
  },
  {
    title: "Photo Editing & Restoration",
    desc: "Old photo repair, background change, colour correction, retouching and premium finishing.",
    icon: "wand",
  },
  {
    title: "Studio Portraits",
    desc: "Family portraits, professional headshots, birthday shoots and portfolio photos.",
    icon: "sparkles",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop",
];

const marqueeImages = [...gallery, ...gallery];

const reels = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
];

const reelsLoop = [...reels, ...reels];

const proofPoints = [
  ["126+", "years of local trust"],
  ["10 min", "passport pickup"],
  ["₹50", "32 photos"],
  ["UPI", "Paytm · GPay · PhonePe"],
];

const orderSteps = [
  ["upload", "Upload your picture", "Send a clear photo from your phone."],
  ["card", "Pay ₹50 on UPI", "Use the payment button or scan QR at shop."],
  ["clock", "Pick up in 10 minutes", "We crop, prepare and print."],
];

function validatePageData({ servicesList, galleryList, stepsList, studioData }) {
  return {
    hasStudioName: Boolean(studioData.name),
    hasPhone: /^\+?\d[\d\s-]{8,}$/.test(studioData.phone),
    hasUpi: studioData.upiId.includes("@"),
    hasInstagram: studioData.instagram.includes("instagram.com") && studioData.instagramHandle.startsWith("@"),
    hasFourServices: servicesList.length === 4,
    hasGalleryImages: galleryList.length >= 4,
    hasMarqueeImages: galleryList.length >= 6,
    hasThreeOrderSteps: stepsList.length === 3,
    hasRequiredServiceKeys: servicesList.every((item) => item.title && item.desc && item.icon),
    hasPassportOffer: servicesList.some((item) => /passport/i.test(item.title)),
  };
}

function SectionReveal({ children, className = "" }) {
  return <div className={`animate-[fadeUp_.8s_ease_both] ${className}`}>{children}</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const checks = useMemo(
    () => validatePageData({ servicesList: services, galleryList: gallery, stepsList: orderSteps, studioData: studio }),
    []
  );

  const allChecksPass = Object.values(checks).every(Boolean);

  const generateUPILink = () => {
    const amount = 50;
    const note = "Passport Photos Order";
    return `upi://pay?pa=${studio.upiId}&pn=${encodeURIComponent(studio.name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
  };

  const handleSubmit = (event) => {
    if (!paymentConfirmed) {
      event.preventDefault();
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#0b0b10] text-white">
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); filter: blur(8px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        @keyframes floatSlow { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-16px) rotate(1.25deg); } }
        @keyframes floatReverse { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(18px) rotate(-1.5deg); } }
        @keyframes pulseGlow { 0%, 100% { opacity: .45; transform: scale(1); } 50% { opacity: .9; transform: scale(1.08); } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes spinSoft { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes borderDance { 0%,100% { border-radius: 42% 58% 56% 44% / 42% 42% 58% 58%; } 50% { border-radius: 58% 42% 44% 56% / 58% 52% 48% 42%; } }
        .float-slow { animation: floatSlow 6s ease-in-out infinite; }
        .float-reverse { animation: floatReverse 7s ease-in-out infinite; }
        .pulse-glow { animation: pulseGlow 4s ease-in-out infinite; }
        .marquee-track { animation: marquee 28s linear infinite; }
        .reels-marquee { animation: marquee 20s linear infinite; }
        .spin-soft { animation: spinSoft 18s linear infinite; }
        .shimmer-text { background-size: 200% auto; animation: shimmer 4s linear infinite; }
        .organic-frame { animation: borderDance 8s ease-in-out infinite; }
        .tilt-card { transform-style: preserve-3d; transition: transform .35s ease, background .35s ease; }
        .tilt-card:hover { transform: perspective(900px) rotateX(4deg) rotateY(-5deg) translateY(-8px); }
        .stagger-1 { animation-delay: .08s; }
        .stagger-2 { animation-delay: .16s; }
        .stagger-3 { animation-delay: .24s; }
        .stagger-4 { animation-delay: .32s; }
        .anchor-section { scroll-margin-top: 112px; }
        .logo-glow::after { content: ""; position: absolute; inset: -35%; background: conic-gradient(from 90deg, transparent, rgba(251,191,36,.35), transparent, rgba(236,72,153,.25), transparent); animation: spinSoft 10s linear infinite; }
        .logo-glow > * { z-index: 1; }
        html { scroll-padding-top: 112px; }
      `}</style>
      <div className="pointer-events-none fixed inset-0">
        <div className="pulse-glow absolute -left-40 -top-40 h-96 w-96 rounded-full bg-pink-600/30 blur-3xl" />
        <div className="pulse-glow absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/45">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <LogoMark size="h-12 w-12" />
            <div>
              <p className="text-lg font-black tracking-tight">{studio.name}</p>
              <p className="text-xs text-white/60">{studio.tagline} · Main Bazaar, Moga</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
            <a href="#passport" className="hover:text-white">Passport Offer</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#instagram" className="hover:text-white">Instagram</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href={`tel:${studio.phone}`} className="rounded-full bg-white px-5 py-2 font-bold text-black hover:bg-amber-200">Call Now</a>
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <Icon name={menuOpen ? "x" : "menu"} className="h-6 w-6" />
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-black/85 px-5 py-4 md:hidden">
            <div className="grid gap-4 text-white/80">
              <a href="#passport" onClick={() => setMenuOpen(false)}>Passport Offer</a>
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#instagram" onClick={() => setMenuOpen(false)}>Instagram</a>
              <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <main id="home" className="anchor-section relative">
        <section className="relative mx-auto max-w-7xl px-5 pb-12 pt-10 md:pb-20 md:pt-16">
          <div className="absolute left-1/2 top-10 hidden h-48 w-48 -translate-x-1/2 rounded-full border border-white/10 md:block spin-soft" />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <SectionReveal className="relative z-10">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/75 backdrop-blur">
                  <Icon name="sparkles" className="h-4 w-4 text-amber-300" />
                  A Moga photography legacy, now online.
                </div>
                <a href={studio.instagram} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-pink-300/30 bg-pink-300/10 px-4 py-2 text-sm font-bold text-pink-100 hover:bg-pink-300/20">
                  {studio.instagramHandle}
                </a>
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
                <span className="inline-flex items-center gap-3">
                  <LogoMark size="h-16 w-16" />
                  Lakra Photo Studio
                </span> <span className="shimmer-text bg-gradient-to-r from-amber-200 via-pink-300 to-violet-300 bg-clip-text text-transparent">turns photos into instant memories</span>.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                Since 1898 in Main Bazaar, Moga. Passport photos, portraits, wedding stories, restorations, edits, and a new 10-minute online pickup flow.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#passport" className="group rounded-full bg-gradient-to-r from-amber-300 to-pink-500 px-7 py-4 text-center font-black text-black shadow-xl shadow-pink-900/25 transition hover:scale-[1.03]">
                  Get 32 Photos for ₹50 <span className="inline-block transition group-hover:translate-x-1">→</span>
                </a>
                <a href={studio.instagram} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/8 px-7 py-4 text-center font-bold text-white backdrop-blur transition hover:bg-white/12 hover:scale-[1.03]">
                  View Instagram
                </a>
              </div>

              <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                {proofPoints.map(([big, small], index) => (
                  <div key={big} className={`animate-[fadeUp_.8s_ease_both] stagger-${index + 1} rounded-3xl border border-white/10 bg-white/7 p-4 text-center backdrop-blur transition hover:-translate-y-1 hover:bg-white/10`}>
                    <p className="text-2xl font-black text-amber-200">{big}</p>
                    <p className="mt-1 text-xs text-white/55">{small}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal className="relative min-h-[610px]">
              <div className="absolute left-4 top-2 h-72 w-56 overflow-hidden border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur organic-frame float-slow md:left-10 md:h-80 md:w-64">
                <img src={gallery[0]} alt="Wedding photography preview" className="h-full w-full rounded-[2rem] object-cover" />
              </div>
              <div className="absolute right-0 top-20 h-80 w-64 overflow-hidden rounded-[2.2rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur float-reverse md:right-8 md:h-96 md:w-72">
                <img src={gallery[3]} alt="Studio portrait preview" className="h-full w-full rounded-[1.8rem] object-cover" />
              </div>
              <div className="absolute bottom-20 left-0 h-64 w-52 rotate-[-6deg] overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur transition hover:rotate-0 md:left-16 md:w-60">
                <img src={gallery[1]} alt="Camera preview" className="h-full w-full rounded-[1.5rem] object-cover" />
              </div>
              <div className="absolute bottom-2 right-2 w-[19rem] rounded-[2rem] border border-amber-200/25 bg-black/70 p-5 shadow-2xl backdrop-blur-xl md:right-16">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-200">Instant counter</p>
                    <p className="mt-2 text-3xl font-black">32 photos</p>
                    <p className="text-sm text-white/60">Upload · Pay UPI · Pick up</p>
                  </div>
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-amber-300 text-black"><Icon name="clock" /></div>
                </div>
                <a href="#passport" className="mt-5 block rounded-full bg-white px-5 py-3 text-center font-black text-black hover:bg-amber-200">Start ₹50 order</a>
              </div>
            </SectionReveal>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] py-3">
            <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0b0b10] to-transparent" />
            <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0b0b10] to-transparent" />
            <div className="marquee-track flex w-max gap-3 px-3">
              {marqueeImages.map((src, index) => (
                <img key={`${src}-${index}`} src={src} alt="Moving photography strip" className="h-28 w-44 rounded-3xl object-cover opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-36 md:w-60" />
              ))}
            </div>
          </div>
        </section>

        <section id="passport" className="anchor-section mx-auto max-w-4xl px-5 py-12 md:py-20">
          <SectionReveal>
            <form
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/12 to-white/5 p-5 shadow-2xl backdrop-blur-xl md:p-8"
              action="https://formsubmit.co/lakraslens@gmail.com"
              method="POST"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_subject" value="New Lakra Studio ₹50 Passport Photo Order" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="order_note" value="Customer confirmed UPI payment and requested 10-minute pickup." />

              <div className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-pink-400/20 blur-2xl pulse-glow" />
              <div className="absolute -right-20 bottom-10 h-40 w-40 rounded-full bg-violet-400/20 blur-2xl pulse-glow" />

              <div className="relative z-10 text-center">
                <div className="mx-auto mb-5 inline-flex rounded-full bg-amber-300 px-4 py-2 text-sm font-black text-black">₹50 Passport Photo Order</div>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">Upload. Pay. Pick up in 10 minutes.</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/70">
                  Send your photo to Lakra Photo Studio, pay ₹50 by UPI, then submit the order. The photo and customer details will be emailed to {studio.email}.
                </p>
              </div>

              <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
                <input required name="customer_name" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/35 focus:border-amber-200" placeholder="Your name" />
                <input required name="mobile_number" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/35 focus:border-amber-200" placeholder="Mobile number" />
              </div>

              <label className="relative z-10 mt-5 grid cursor-pointer place-items-center rounded-[1.5rem] border border-dashed border-white/25 bg-black/25 p-8 text-center hover:border-amber-200">
                <Icon name="upload" className="mb-3 h-10 w-10 text-amber-200" />
                <p className="text-lg font-black">Upload passport photo</p>
                <p className="mt-1 text-sm text-white/55">JPG, PNG or HEIC from phone camera</p>
                <input required name="attachment" type="file" accept="image/*" className="hidden" onChange={(event) => setFileName(event.target.files?.[0]?.name || "")} />
                {fileName && <p className="mt-3 rounded-full bg-white/10 px-4 py-2 text-sm text-emerald-200">Selected: {fileName}</p>}
              </label>

              <div className="relative z-10 mt-5 rounded-[1.5rem] border border-amber-300/25 bg-amber-300/10 p-5">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-black text-amber-100">Step 1: Pay ₹50 by UPI</p>
                    <p className="text-sm text-white/60">UPI ID: {studio.upiId}</p>
                  </div>
                  <a
                    href={generateUPILink()}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-green-400 px-6 py-3 text-center font-black text-black hover:bg-green-300"
                  >
                    Pay ₹50 Now
                  </a>
                </div>
                <p className="mt-3 text-xs leading-5 text-white/50">
                  If your phone opens WhatsApp instead of GPay/PhonePe/Paytm, your phone has WhatsApp set as the default UPI handler. Long-press/copy the UPI ID above or change the default UPI app in phone settings.
                </p>
              </div>

              <label className="relative z-10 mt-5 flex cursor-pointer gap-3 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-white/75">
                <input
                  type="checkbox"
                  required
                  checked={paymentConfirmed}
                  onChange={(event) => setPaymentConfirmed(event.target.checked)}
                  className="mt-1 h-5 w-5 accent-amber-300"
                />
                <span>I confirm that I completed the ₹50 UPI payment to {studio.upiId}. Send my photo order to Lakra Studio for 10-minute pickup.</span>
              </label>

              <button className="relative z-10 mt-5 w-full rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-4 text-lg font-black shadow-xl shadow-violet-900/30 disabled:opacity-50">
                Confirm Payment & Email Order
              </button>
              {submitted && (
                <p className="relative z-10 mt-4 rounded-2xl bg-emerald-400/15 p-3 text-center text-sm text-emerald-200">
                  Order sent. Your 32 passport-size photos will be ready to pick up in about 10 minutes.
                </p>
              )}
              <p className="relative z-10 mt-4 text-center text-xs leading-5 text-white/45">
                First submission may ask Lakra Studio to verify the FormSubmit email once. After that, orders go directly to {studio.email}.
              </p>
            </form>
          </SectionReveal>
        </section>

        <section id="services" className="anchor-section mx-auto max-w-7xl px-5 py-12 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-amber-200">Studio Services</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Not a boring menu. A photo counter with personality.</h2>
              <p className="mt-4 text-white/65">Each service card moves differently, so the page feels alive instead of brochure-flat.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {services.map((item, index) => (
                <div key={item.title} className={`tilt-card group rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur animate-[fadeUp_.8s_ease_both] stagger-${index + 1} ${index % 2 ? "sm:translate-y-8" : ""}`}>
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white text-black transition group-hover:rotate-6 group-hover:scale-110"><Icon name={item.icon} className="h-6 w-6" /></div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{item.desc}</p>
                  <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-amber-300 to-pink-400 transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="instagram" className="anchor-section mx-auto max-w-7xl px-5 py-12 md:py-20">
          <div className="mb-8 text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-pink-200">Instagram Reels</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Watch Lakra Studio in action</h2>
            <p className="mt-3 text-white/60">Real shoots, edits, before-after, and customer moments</p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 py-6">
            <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0b0b10] to-transparent" />
            <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0b0b10] to-transparent" />

            <div className="flex gap-5 w-max reels-marquee">
              {reelsLoop.map((src, index) => (
                <video
                  key={index}
                  src={src}
                  className="h-72 w-48 rounded-3xl object-cover shadow-xl border border-white/10"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="anchor-section mx-auto max-w-7xl px-5 py-12 md:py-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-pink-200">Preview Gallery</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">A gallery built for your Instagram style.</h2>
            </div>
            <p className="max-w-md text-white/60">Upload screenshots or original photos from your Instagram and this section becomes a branded portfolio instead of generic stock images.</p>
          </div>
          <div className="mt-8 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((src, index) => (
              <div key={src} className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 ${index === 0 ? "sm:row-span-2" : ""} ${index === 3 ? "lg:col-span-2" : ""}`}>
                <img src={src} alt="Photography gallery" className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 md:py-20">
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-amber-300 via-pink-500 to-violet-600 p-1 shadow-2xl shadow-pink-900/30">
            <div className="rounded-[2.35rem] bg-black/75 p-7 backdrop-blur md:p-12">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="flex items-center gap-2 text-amber-100"><Icon name="star" className="h-5 w-5" /> Lakra Photo Studio · {studio.tagline}</p>
                  <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Order online. Pick up while your tea is still hot.</h2>
                  <p className="mt-4 max-w-2xl text-white/65">Perfect for students, job applicants, visa forms, government work and urgent document photos. A century-old local studio with a modern 10-minute pickup flow.</p>
                </div>
                <a href="#passport" className="rounded-full bg-white px-8 py-4 text-center text-lg font-black text-black hover:bg-amber-200">Start ₹50 Order</a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-14">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-sm text-white/55">
            <p className="font-bold text-white">Preview self-checks</p>
            <p className="mt-2">Status: {allChecksPass ? "Passed" : "Needs review"}</p>
            <p className="mt-1">Studio: {checks.hasStudioName ? "name loaded" : "missing"} · Phone: {checks.hasPhone ? "valid" : "missing"} · UPI: {checks.hasUpi ? "valid" : "missing"} · Instagram: {checks.hasInstagram ? "linked" : "missing"}</p>
            <p className="mt-1">Services: {checks.hasFourServices ? "4 loaded" : "missing"} · Passport offer: {checks.hasPassportOffer ? "loaded" : "missing"} · Gallery: {checks.hasGalleryImages ? "4+ images loaded" : "missing"} · Marquee: {checks.hasMarqueeImages ? "ready" : "needs 6 images"} · Order steps: {checks.hasThreeOrderSteps ? "3 loaded" : "missing"}</p>
          </div>
        </section>
      </main>

      <footer id="contact" className="anchor-section relative border-t border-white/10 px-5 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark size="h-12 w-12" />
              <div>
                <p className="text-lg font-black">{studio.name}</p>
                <p className="text-xs text-white/55">{studio.tagline} · {studio.location}</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">A modern website test for Lakra Photo Studio with instant passport photo ordering and Instagram-led discovery.</p>
          </div>
          <div className="grid gap-3 text-sm text-white/70">
            <p className="flex items-center gap-3"><Icon name="map" className="h-4 w-4 text-amber-200" /> {studio.location}</p>
            <p className="flex items-center gap-3"><Icon name="phone" className="h-4 w-4 text-amber-200" /> {studio.phone}</p>
            <p className="flex items-center gap-3"><Icon name="mail" className="h-4 w-4 text-amber-200" /> {studio.email}</p>
            <p className="flex items-center gap-3"><Icon name="sparkles" className="h-4 w-4 text-amber-200" /> <a href={studio.instagram} target="_blank" rel="noreferrer" className="hover:text-white">{studio.instagramHandle}</a></p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5">
            <p className="font-black">Business Hours</p>
            <p className="mt-2 text-sm text-white/60">Monday to Sunday: 9:00 AM - 8:30 PM</p>
            <p className="mt-4 text-xs text-white/40">Replace name, phone, email, UPI ID and photos before launch.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
