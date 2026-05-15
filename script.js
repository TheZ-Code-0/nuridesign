/* ============================================= */
/* NURI GLOBAL — Main JavaScript                 */
/* ============================================= */

// ---- STATE ----
let currentLang = 'en';
let currentScreen = 'landing';
let isTransitioning = false;

// ---- TRANSLATIONS ----
const translations = {
    en: {
        // Landing
        'landing.coffee.eyebrow': 'PREMIUM INDONESIAN COFFEE',
        'landing.coffee.tagline': 'The Essence of Indonesian Coffee Heritage',
        'landing.coconut.eyebrow': 'PURE INDONESIAN COCONUT',
        'landing.coconut.tagline': 'The Purity of Indonesian Coconut Nature',
        'landing.cta': 'Explore',
        'landing.bottom': 'Choose your experience',

        // Navigation
        'nav.brand': 'Brand',
        'nav.about': 'About Us',
        'nav.activity': 'Activity',
        'nav.shop': 'Shop',
        'nav.back': 'Home',

        // Hero
        'hero.scroll': 'Discover Our Story',

        // Coffee Hero
        'coffee.hero.eyebrow': 'INDONESIAN COFFEE HERITAGE',
        'coffee.hero.subtitle': 'From the volcanic highlands of Indonesia to your cup',

        // Coffee About
        'coffee.about.label': 'OUR STORY',
        'coffee.about.title': 'A Legacy of Flavor',
        'coffee.about.p1': 'Founded in the heart of Indonesia\'s coffee belt, Nuri Coffenesia represents the pinnacle of Indonesian coffee craftsmanship. Our journey began with a simple vision — to bring the world the finest beans from the archipelago\'s volcanic highlands.',
        'coffee.about.p2': 'Each bean tells a story of generations of farmers who have perfected the art of cultivation on the fertile slopes. From Sumatra\'s Mandheling to Java\'s Preanger, we source only the most exceptional lots, ensuring every cup delivers an unforgettable experience.',
        'coffee.about.p3': 'Our commitment extends beyond quality — we believe in sustainable farming, fair partnerships, and preserving the cultural heritage that makes Indonesian coffee truly extraordinary.',

        // Coffee Timeline
        'coffee.timeline.1': 'First plantation established in Sumatra highlands',
        'coffee.timeline.2': 'Expanded sourcing to Java & Sulawesi regions',
        'coffee.timeline.3': 'Launched Nuri Coffenesia brand globally',
        'coffee.timeline.4': 'Received international specialty coffee recognition',
        'coffee.timeline.5': 'Premium product line launched worldwide',

        // Coffee Activity
        'coffee.activity.label': 'WHAT WE DO',
        'coffee.activity.title': 'Our Activities',
        'coffee.act.1.title': 'Cultivation',
        'coffee.act.1.text': 'Sustainable coffee farming across Indonesia\'s volcanic highland regions with traditional methods',
        'coffee.act.2.title': 'Roasting',
        'coffee.act.2.text': 'Artisanal roasting techniques that unlock each bean\'s complex flavor potential perfectly',
        'coffee.act.3.title': 'Tasting',
        'coffee.act.3.text': 'Curated cupping sessions to discover and appreciate extraordinary flavor profiles',
        'coffee.act.4.title': 'Partnership',
        'coffee.act.4.text': 'Fair trade relationships empowering local farming communities across the archipelago',

        // Coffee Shop
        'coffee.shop.label': 'OUR PRODUCTS',
        'coffee.shop.title': 'The Collection',
        'coffee.prod.1.name': 'Sumatra Arabica',
        'coffee.prod.1.desc': 'Single origin from Mandheling highlands, rich & full-bodied',
        'coffee.prod.2.name': 'Java Robusta',
        'coffee.prod.2.desc': 'Bold & intense, perfect for espresso lovers everywhere',
        'coffee.prod.3.name': 'Espresso Reserve',
        'coffee.prod.3.desc': 'Signature blend crafted for the perfect espresso experience',
        'coffee.prod.4.name': 'Cold Brew Concentrate',
        'coffee.prod.4.desc': 'Ready-to-drink cold brew, smooth and refreshingly bold',
        'coffee.prod.5.name': 'Kopi Luwak Special',
        'coffee.prod.5.desc': 'The world\'s rarest coffee, ethically sourced & premium grade',
        'coffee.prod.6.name': 'Heritage Gift Set',
        'coffee.prod.6.desc': 'Curated collection of our finest beans in luxury packaging',

        // Coffee Footer
        'coffee.footer.desc': 'Indonesia\'s finest coffee, from our highlands to your cup.',

        // Coconut Hero
        'coconut.hero.eyebrow': 'INDONESIAN COCONUT PURITY',
        'coconut.hero.subtitle': 'The natural goodness of Indonesia\'s tropical paradise',

        // Coconut About
        'coconut.about.label': 'OUR STORY',
        'coconut.about.title': "Nature's Finest Gift",
        'coconut.about.p1': 'Nuri Coconutnesia was born from the lush tropical landscapes of Indonesia, where coconut trees have been a symbol of life and prosperity for centuries. We honor this heritage by delivering the purest coconut products to the world.',
        'coconut.about.p2': 'Our coconuts are hand-harvested from organic plantations across Java, Bali, and Sulawesi. Each product undergoes meticulous cold-press processing to preserve the natural nutrients and authentic flavor that nature intended.',
        'coconut.about.p3': 'We are committed to sustainable agriculture, zero-waste production, and empowering the coastal communities that make our mission possible. Every purchase supports a healthier planet and a thriving community.',

        // Coconut Timeline
        'coconut.timeline.1': 'Organic coconut plantation established in Java',
        'coconut.timeline.2': 'Cold-press facility launched with zero-waste system',
        'coconut.timeline.3': 'Nuri Coconutnesia brand launched internationally',
        'coconut.timeline.4': 'Organic certification & global distribution achieved',
        'coconut.timeline.5': 'Full product line expansion across 30+ countries',

        // Coconut Activity
        'coconut.activity.label': 'WHAT WE DO',
        'coconut.activity.title': 'Our Activities',
        'coconut.act.1.title': 'Organic Farming',
        'coconut.act.1.text': 'Sustainable coconut cultivation on pristine tropical plantations across Indonesia',
        'coconut.act.2.title': 'Cold Processing',
        'coconut.act.2.text': 'State-of-the-art cold-press technology preserving maximum natural nutrients',
        'coconut.act.3.title': 'Export',
        'coconut.act.3.text': 'Premium coconut products distributed to over 30 countries worldwide',
        'coconut.act.4.title': 'Sustainability',
        'coconut.act.4.text': 'Zero-waste production & community empowerment across coastal regions',

        // Coconut Shop
        'coconut.shop.label': 'OUR PRODUCTS',
        'coconut.shop.title': 'The Collection',
        'coconut.prod.1.name': 'Virgin Coconut Oil',
        'coconut.prod.1.desc': 'Pure cold-pressed VCO, organic & unrefined for maximum benefits',
        'coconut.prod.2.name': 'Organic Coconut Sugar',
        'coconut.prod.2.desc': 'Natural low-glycemic sweetener, perfect healthy alternative',
        'coconut.prod.3.name': 'Coconut Water Premium',
        'coconut.prod.3.desc': 'Hydrating natural electrolyte drink from young green coconuts',
        'coconut.prod.4.name': 'Coconut Milk Fresh',
        'coconut.prod.4.desc': 'Rich & creamy coconut milk for cooking, baking & beverages',
        'coconut.prod.5.name': 'Coconut Flour Organic',
        'coconut.prod.5.desc': 'Gluten-free, high-fiber flour for healthy baking & cooking',
        'coconut.prod.6.name': 'Coconut Craft Collection',
        'coconut.prod.6.desc': 'Handcrafted artisan goods from upcycled coconut shell materials',

        // Coconut Footer
        'coconut.footer.desc': 'Indonesia\'s purest coconut, from our tropics to your home.',

        // Common
        'shop.order': 'Order via Email',
        'footer.contact': 'Contact',
        'footer.follow': 'Follow Us',
        'wa.chat': 'Chat with us'
    },

    id: {
        // Landing
        'landing.coffee.eyebrow': 'KOPI PREMIUM INDONESIA',
        'landing.coffee.tagline': 'Essensi Warisan Kopi Indonesia',
        'landing.coconut.eyebrow': 'KELAPA MURNI INDONESIA',
        'landing.coconut.tagline': 'Kemurnian Alam Kelapa Indonesia',
        'landing.cta': 'Jelajahi',
        'landing.bottom': 'Pilih pengalaman Anda',

        // Navigation
        'nav.brand': 'Merek',
        'nav.about': 'Tentang Kami',
        'nav.activity': 'Aktivitas',
        'nav.shop': 'Toko',
        'nav.back': 'Beranda',

        // Hero
        'hero.scroll': 'Temukan Kisah Kami',

        // Coffee Hero
        'coffee.hero.eyebrow': 'WARISAN KOPI INDONESIA',
        'coffee.hero.subtitle': 'Dari dataran tinggi vulkanik Indonesia ke cangkir Anda',

        // Coffee About
        'coffee.about.label': 'KISAH KAMI',
        'coffee.about.title': 'Warisan Rasa',
        'coffee.about.p1': 'Berdiri di jantung sabuk kopi Indonesia, Nuri Coffenesia mewakili puncak keahlian kopi Indonesia. Perjalanan kami dimulai dengan visi sederhana — membawa dunia biji kopi terbaik dari dataran tinggi vulkanik kepulauan.',
        'coffee.about.p2': 'Setiap biji menceritakan kisah petani yang telah menyempurnakan seni budidaya di lereng subur selama ber generasi. Dari Mandheling Sumatra hingga Preanger Jawa, kami hanya mengambil lot terluar biasa.',
        'coffee.about.p3': 'Komitmen kami melampaui kualitas — kami percaya pada pertanian berkelanjutan, kemitraan yang adil, dan menjaga warisan budaya yang menjadikan kopi Indonesia benar-benar luar biasa.',

        // Coffee Timeline
        'coffee.timeline.1': 'Perkebunan pertama didirikan di dataran tinggi Sumatra',
        'coffee.timeline.2': 'Ekspansi pengadaan ke wilayah Jawa & Sulawesi',
        'coffee.timeline.3': 'Merek Nuri Coffenesia diluncurkan secara global',
        'coffee.timeline.4': 'Menerima pengakuan kopi spesialti internasional',
        'coffee.timeline.5': 'Lini produk premium diluncurkan ke seluruh dunia',

        // Coffee Activity
        'coffee.activity.label': 'APA YANG KAMI LAKUKAN',
        'coffee.activity.title': 'Aktivitas Kami',
        'coffee.act.1.title': 'Budidaya',
        'coffee.act.1.text': 'Pertanian kopi berkelanjutan di dataran tinggi vulkanik Indonesia dengan metode tradisional',
        'coffee.act.2.title': 'Panggang',
        'coffee.act.2.text': 'Teknik sangrai artisanal yang membuka potensi rasa kompleks setiap biji kopi',
        'coffee.act.3.title': 'Penicipan',
        'coffee.act.3.text': 'Sesi cupping terkurasi untuk menemukan dan mengapresiasi profil rasa luar biasa',
        'coffee.act.4.title': 'Kemitraan',
        'coffee.act.4.text': 'Hubungan perdagangan adil yang memberdayakan komunitas petani lokal di kepulauan',

        // Coffee Shop
        'coffee.shop.label': 'PRODUK KAMI',
        'coffee.shop.title': 'Koleksi',
        'coffee.prod.1.name': 'Arabika Sumatra',
        'coffee.prod.1.desc': 'Single origin dari dataran Mandheling, kaya & penuh tubuh',
        'coffee.prod.2.name': 'Robusta Jawa',
        'coffee.prod.2.desc': 'Berani & intens, sempurna untuk pecinta espresso',
        'coffee.prod.3.name': 'Espresso Cadangan',
        'coffee.prod.3.desc': 'Blend khas yang dirancang untuk pengalaman espresso sempurna',
        'coffee.prod.4.name': 'Konsentrat Cold Brew',
        'coffee.prod.4.desc': 'Cold brew siap minum, halus dan menyegarkan',
        'coffee.prod.5.name': 'Kopi Luwak Spesial',
        'coffee.prod.5.desc': 'Kopi terlangka di dunia, bersumber secara etis & kelas premium',
        'coffee.prod.6.name': 'Set Hadiah Warisan',
        'coffee.prod.6.desc': 'Koleksi biji kopi terbaik dalam kemasan mewah',

        // Coffee Footer
        'coffee.footer.desc': 'Kopi terbaik Indonesia, dari dataran tinggi ke cangkir Anda.',

        // Coconut Hero
        'coconut.hero.eyebrow': 'KEMURNIAN KELAPA INDONESIA',
        'coconut.hero.subtitle': 'Kebaikan alam dari surga tropis Indonesia',

        // Coconut About
        'coconut.about.label': 'KISAH KAMI',
        'coconut.about.title': 'Hadiah Terbaik Alam',
        'coconut.about.p1': 'Nuri Coconutnesia lahir dari lanskap tropis Indonesia yang subur, di mana pohon kelapa telah menjadi simbol kehidupan dan kemakmuran selama berabad-abad. Kami menghormati warisan ini dengan menghadirkan produk kelapa termurni ke dunia.',
        'coconut.about.p2': 'Kelapa kami dipetik tangan dari perkebunan organik di Jawa, Bali, dan Sulawesi. Setiap produk melalui proses cold-press yang teliti untuk menjaga nutrisi alami dan rasa otentik yang dimaksudkan alam.',
        'coconut.about.p3': 'Kami berkomitmen pada pertanian berkelanjutan, produksi zero-waste, dan memberdayakan komunitas pesisir yang membuat misi kami menjadi mungkin. Setiap pembelian mendukung planet yang lebih sehat dan komunitas yang berkembang.',

        // Coconut Timeline
        'coconut.timeline.1': 'Perkebunan kelapa organik didirikan di Jawa',
        'coconut.timeline.2': 'Fasilitas cold-press diluncurkan dengan sistem zero-waste',
        'coconut.timeline.3': 'Merek Nuri Coconutnesia diluncurkan secara internasional',
        'coconut.timeline.4': 'Sertifikasi organik & distribusi global tercapai',
        'coconut.timeline.5': 'Ekspansi lini produk lengkap ke 30+ negara',

        // Coconut Activity
        'coconut.activity.label': 'APA YANG KAMI LAKUKAN',
        'coconut.activity.title': 'Aktivitas Kami',
        'coconut.act.1.title': 'Pertanian Organik',
        'coconut.act.1.text': 'Budidaya kelapa berkelanjutan di perkebunan tropis Indonesia yang murni',
        'coconut.act.2.title': 'Proses Dingin',
        'coconut.act.2.text': 'Teknologi cold-press mutakhir yang menjaga nutrisi alami secara maksimal',
        'coconut.act.3.title': 'Ekspor',
        'coconut.act.3.text': 'Produk kelapa premium didistribusikan ke lebih dari 30 negara',
        'coconut.act.4.title': 'Keberlanjutan',
        'coconut.act.4.text': 'Produksi zero-waste & pemberdayaan komunitas di wilayah pesisir',

        // Coconut Shop
        'coconut.shop.label': 'PRODUK KAMI',
        'coconut.shop.title': 'Koleksi',
        'coconut.prod.1.name': 'Minyak Kelapa Virgin',
        'coconut.prod.1.desc': 'VCO murni cold-pressed, organik & tidak dimurnikan untuk manfaat maksimal',
        'coconut.prod.2.name': 'Gula Kelapa Organik',
        'coconut.prod.2.desc': 'Pemanis alami rendah glikemik, alternatif sehat yang sempurna',
        'coconut.prod.3.name': 'Air Kelapa Premium',
        'coconut.prod.3.desc': 'Minuman elektrolit alami menyegarkan dari kelapa hijau muda',
        'coconut.prod.4.name': 'Santan Kelapa Segar',
        'coconut.prod.4.desc': 'Santan kaya & krim untuk memasak, memanggang & minuman',
        'coconut.prod.5.name': 'Tepung Kelapa Organik',
        'coconut.prod.5.desc': 'Tepung bebas gluten & tinggi serat untuk memanggang & memasak sehat',
        'coconut.prod.6.name': 'Koleksi Kerajinan Kelapa',
        'coconut.prod.6.desc': 'Barang artisan buatan tangan dari bahan cangkang kelapa daur ulang',

        // Coconut Footer
        'coconut.footer.desc': 'Kelapa termurni Indonesia, dari tropis ke rumah Anda.',

        // Common
        'shop.order': 'Pesan via Email',
        'footer.contact': 'Kontak',
        'footer.follow': 'Ikuti Kami',
        'wa.chat': 'Chat dengan kami'
    }
};

// ---- LANGUAGE TOGGLE ----
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    applyTranslations();
    updateLangButtons();
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

function updateLangButtons() {
    // Landing lang button
    const landingBtn = document.getElementById('langBtnLanding');
    if (landingBtn) {
        landingBtn.querySelector('.lang-active').textContent = currentLang.toUpperCase();
        landingBtn.querySelector('.lang-opt').textContent = currentLang === 'en' ? 'ID' : 'EN';
    }

    // All small lang buttons
    document.querySelectorAll('.lang-btn-sm').forEach(btn => {
        btn.textContent = currentLang === 'en' ? 'EN / ID' : 'ID / EN';
    });
}

// ---- PAGE NAVIGATION ----
function navigateTo(target) {
    if (isTransitioning || target === currentScreen) return;
    isTransitioning = true;

    const overlay = document.getElementById('transitionOverlay');

    // Determine transition color
    if (target === 'coffenesia') {
        overlay.style.background = '#2C1810';
    } else if (target === 'coconutnesia') {
        overlay.style.background = '#1B5E20';
    } else {
        overlay.style.background = '#0a0a0a';
    }

    // Phase 1: Overlay in
    overlay.className = 'transition-overlay active';

    setTimeout(() => {
        // Switch screens
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
            s.style.opacity = '0';
        });

        const targetEl = document.getElementById(target);
        targetEl.classList.add('active');

        // Scroll to top of new page
        if (target === 'landing') {
            window.scrollTo(0, 0);
        } else {
            targetEl.scrollTop = 0;
            window.scrollTo(0, 0);
        }

        currentScreen = target;

        // Phase 2: Overlay out
        setTimeout(() => {
            overlay.className = 'transition-overlay exit';
            targetEl.style.opacity = '1';

            setTimeout(() => {
                overlay.className = 'transition-overlay';
                isTransitioning = false;

                // Re-trigger reveal animations
                setupRevealAnimations();
            }, 700);
        }, 200);

    }, 700);
}

// ---- MOBILE MENU ----
function openMobileMenu(brand) {
    const menu = document.getElementById(brand + 'MobileMenu');
    if (menu) menu.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu(brand) {
    const menu = document.getElementById(brand + 'MobileMenu');
    if (menu) menu.classList.remove('open');
    document.body.style.overflow = '';
}

// ---- SCROLL: NAV STYLE ----
function setupNavScroll() {
    const navs = document.querySelectorAll('.brand-nav');

    window.addEventListener('scroll', () => {
        navs.forEach(nav => {
            if (window.scrollY > 80) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    });
}

// ---- SCROLL: REVEAL ANIMATIONS ----
function setupRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        observer.observe(el);
    });
}

// ---- CUSTOM CURSOR ----
function setupCursor() {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');

    if (!dot || !ring) return;

    // Only on non-touch devices
    if ('ontouchstart' in window) {
        dot.style.display = 'none';
        ring.style.display = 'none';
        return;
    }

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effects on interactive elements
    const interactives = document.querySelectorAll('a, button, .split-side, .product-card, .activity-card');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => {
            ring.style.width = '50px';
            ring.style.height = '50px';
            ring.style.opacity = '0.3';
            dot.style.transform += ' scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            ring.style.width = '36px';
            ring.style.height = '36px';
            ring.style.opacity = '0.5';
        });
    });
}

// ---- SMOOTH SCROLL FOR ANCHOR LINKS ----
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);

            if (targetEl) {
                const offset = 80; // account for fixed nav
                const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ---- PARALLAX ON HERO ----
function setupParallax() {
    const heroBgs = document.querySelectorAll('.hero-bg');

    window.addEventListener('scroll', () => {
        heroBgs.forEach(bg => {
            const parent = bg.closest('.brand-hero');
            if (!parent) return;

            const rect = parent.getBoundingClientRect();
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
                const scrolled = window.pageYOffset;
                const rate = scrolled * 0.3;
                bg.style.transform = `translateY(${rate}px)`;
            }
        });
    });
}

// ---- ACTIVE NAV LINK HIGHLIGHTING ----
function setupActiveNavHighlight() {
    const sections = document.querySelectorAll('.brand-hero, .about-section, .activity-section, .shop-section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px'
    });

    sections.forEach(section => observer.observe(section));
}

// ---- LOADING SCREEN ----
function setupLoader() {
    const loader = document.getElementById('loader');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = '';
        }, 2200);
    });

    // Fallback: hide loader after 4 seconds
    setTimeout(() => {
        if (!loader.classList.contains('hidden')) {
            loader.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }, 4000);
}

// ---- PRODUCT CARD TILT EFFECT ----
function setupTiltEffect() {
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ---- STAGGERED REVEAL ----
function addStaggeredDelays() {
    const grids = document.querySelectorAll('.activity-grid, .products-grid, .timeline');
    grids.forEach(grid => {
        const items = grid.querySelectorAll('.reveal');
        items.forEach((item, i) => {
            item.style.transitionDelay = `${i * 0.1}s`;
        });
    });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
    // Prevent scroll during loading
    document.body.style.overflow = 'hidden';

    setupLoader();
    setupCursor();
    setupNavScroll();
    setupRevealAnimations();
    setupSmoothScroll();
    setupParallax();
    setupActiveNavHighlight();
    setupTiltEffect();
    addStaggeredDelays();

    // Apply initial language
    applyTranslations();
    updateLangButtons();
});