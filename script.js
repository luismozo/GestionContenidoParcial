/**
 * ============================================
 * CREATIVE STUDIO - JAVASCRIPT INTERACTIVO
 * ============================================
 * Archivo: script.js
 * Autor: Creative Studio Team
 * Descripción: JavaScript puro con librerías externas
 */

// ============================================
// VARIABLES GLOBALES
// ============================================
let currentTestimonial = 0;

// Datos del portafolio
const portfolioData = [
    {
        id: 1,
        title: "E-commerce Moderno",
        category: "web",
        description: "Tienda online con carrito de compras integrado",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        tags: ["React", "Node.js", "MongoDB"]
    },
    {
        id: 2,
        title: "App Dashboard",
        category: "design",
        description: "Dashboard administrativo con métricas en tiempo real",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        tags: ["UI/UX", "Analytics", "Mobile"]
    },
    {
        id: 3,
        title: "Marca Corporativa",
        category: "branding",
        description: "Identidad visual completa para startup tech",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        tags: ["Logo", "Branding", "Print"]
    },
    {
        id: 4,
        title: "Landing Page",
        category: "web",
        description: "Página de aterrizaje para campaña de marketing",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        tags: ["HTML5", "CSS3", "JavaScript"]
    },
    {
        id: 5,
        title: "App Móvil",
        category: "design",
        description: "Aplicación de productividad para iOS y Android",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        tags: ["Mobile", "UX", "Prototyping"]
    },
    {
        id: 6,
        title: "Rebrand Completo",
        category: "branding",
        description: "Renovación de marca para empresa establecida",
        image: "https://blog.estructurando.com/hubfs/Imported_Blog_Media/Rebranding---Actualizar-o-refrescar-su-imagen-corporativa.jpg",
        tags: ["Rebrand", "Strategy", "Digital"]
    }
];

// Testimonios de clientes
const testimonials = [
    {
        name: "María González",
        company: "Tech Startup",
        text: "Creative Studio transformó completamente nuestra presencia online. El equipo es profesional y los resultados superaron nuestras expectativas.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/11.jpg"
    },
    {
        name: "Carlos Rodríguez",
        company: "E-commerce Local",
        text: "Gracias a su trabajo, nuestras ventas online aumentaron un 300%. La inversión valió totalmente la pena.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        name: "Ana Martínez",
        company: "Agencia Marketing",
        text: "El diseño que crearon para nosotros es simplemente espectacular. Nuestros clientes constantemente elogian nuestro sitio web.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
        name: "Luis Fernández",
        company: "Restaurante",
        text: "El sistema de reservas online que desarrollaron nos ayudó a organizarnos mejor y aumentar nuestros clientes.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/44.jpg"
    }
];

// ============================================
// 1. INICIALIZACIÓN PRINCIPAL
// ============================================
document.addEventListener('DOMContentLoaded', async function () {
    console.log('🚀 Iniciando Creative Studio...');
    
    // Inicializar todas las funcionalidades
    try {
        initializeLoadingScreen();
        initializeCore();
        await initializeLibraries();
        initializeInteractions();
        initializeAnimations();

        console.log('✅ Creative Studio cargado exitosamente!');
    } catch (error) {
        console.error('❌ Error al cargar Creative Studio:', error);
    }
});

// ============================================
// 2. INICIALIZACIÓN CORE
// ============================================
function initializeLoadingScreen() {
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            loader.classList.add('hide');
        });
    }
}

function initializeCore() {
    // Funcionalidades básicas
    initializeMobileMenu();
    initializeScrollEffects();
    initializeContactForm();
    initializeThemeToggle();

    // Generar contenido dinámico
    generatePortfolioItems();
    generateTestimonials();
    updateTestimonialSlider();
}

// ============================================
// 3. INICIALIZACIÓN DE LIBRERÍAS EXTERNAS
// ============================================
async function initializeLibraries() {
    // AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
        console.log('✅ AOS inicializado');
    }

    // Vanilla Tilt
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 0.5
        });
        console.log('✅ Vanilla Tilt inicializado');
    }
    
    // Typed.js para efectos de escritura
    if (typeof Typed !== 'undefined') {
        const typedTextSpan = document.querySelector('.typed-text');
        if (typedTextSpan) {
            new Typed(typedTextSpan, {
                strings: ["Diseño Web Profesional.", "Soluciones Digitales.", "Desarrollo a Medida."],
                typeSpeed: 50,
                backSpeed: 25,
                backDelay: 2000,
                startDelay: 500,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
            console.log('✅ Typed.js inicializado');
        }
    }
}

// ============================================
// 4. INTERACCIONES DEL USUARIO
// ============================================
function initializeInteractions() {
    initializePortfolioFilter();
    initializeTestimonialControls();
    initializeStatsCounter();
    initializeSmoothScroll();
}

// ============================================
// 5. ANIMACIONES PERSONALIZADAS CON GSAP
// ============================================
function initializeAnimations() {
    // Animación del Hero
    if (typeof gsap !== 'undefined') {
        gsap.set('.hero-content', { opacity: 0, y: 50 });
        gsap.set('.hero-image', { opacity: 0, scale: 0.8 });

        gsap.to('.hero-content', { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" });
        gsap.to('.hero-image', { opacity: 1, scale: 1, duration: 1, delay: 0.8, ease: "power2.out" });
    }
}

// ============================================
// 6. MENÚ MÓVIL INTERACTIVO
// ============================================
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const body = document.body;
    
    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            mobileNav.classList.toggle('show');
            body.classList.toggle('no-scroll');
        });

        const navLinks = mobileNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileToggle.classList.remove('active');
                mobileNav.classList.remove('show');
                body.classList.remove('no-scroll');
            });
        });
    }
}

// ============================================
// 7. EFECTOS DE SCROLL AVANZADOS
// ============================================
function initializeScrollEffects() {
    const header = document.querySelector('header');
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            scrollTopBtn.classList.add('show');
        } else {
            header.classList.remove('scrolled');
            scrollTopBtn.classList.remove('show');
        }
    });
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const offset = targetSection.offsetTop - headerHeight;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// 8. GENERADOR DE CONTENIDO DINÁMICO
// ============================================
function generatePortfolioItems() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;
    
    portfolioData.forEach(item => {
        const itemHTML = `
            <div class="portfolio-item" data-category="${item.category}" data-aos="fade-up">
                <div class="portfolio-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="portfolio-content">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
        portfolioGrid.innerHTML += itemHTML;
    });
}

function generateTestimonials() {
    const testimonialsSlider = document.getElementById('testimonials-slider');
    if (!testimonialsSlider) return;
    
    testimonials.forEach(testimonial => {
        const testimonialHTML = `
            <div class="testimonial-card">
                <div class="testimonial-quote">
                    <p>${testimonial.text}</p>
                </div>
                <div class="testimonial-author">
                    <img src="${testimonial.image}" alt="${testimonial.name}">
                    <div class="author-info">
                        <h5>${testimonial.name}</h5>
                        <p>${testimonial.company}</p>
                    </div>
                </div>
            </div>
        `;
        testimonialsSlider.innerHTML += testimonialHTML;
    });
}

// ============================================
// 9. FILTRO DE PORTAFOLIO
// ============================================
function initializePortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// 10. CARRUSEL DE TESTIMONIOS
// ============================================
function initializeTestimonialControls() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', showPreviousTestimonial);
        nextBtn.addEventListener('click', showNextTestimonial);
    }
}

function showNextTestimonial() {
    const totalTestimonials = testimonials.length;
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    updateTestimonialSlider();
}

function showPreviousTestimonial() {
    const totalTestimonials = testimonials.length;
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    updateTestimonialSlider();
}

function updateTestimonialSlider() {
    const slider = document.getElementById('testimonials-slider');
    if (slider) {
        const offset = -currentTestimonial * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }
}

// ============================================
// 11. CONTADOR DE ESTADÍSTICAS
// ============================================
function initializeStatsCounter() {
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = document.querySelectorAll('.stat-number');
                statNumbers.forEach(number => {
                    const target = parseInt(number.getAttribute('data-target'), 10);
                    let count = 0;
                    const increment = target / 100;
                    
                    const updateCount = () => {
                        if (count < target) {
                            count += increment;
                            number.textContent = Math.ceil(count);
                            requestAnimationFrame(updateCount);
                        } else {
                            number.textContent = target;
                        }
                    };
                    updateCount();
                });
                observer.unobserve(statsSection);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
}

// ============================================
// 12. FORMULARIO CONTACTO AVANZADO
// ============================================
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => validateField(input));
    });

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = getFormData();
        if (validateForm(formData)) {
            submitForm(formData);
        }
    });
}

function getFormData() {
    return {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
    };
}

function validateForm(data) {
    let isValid = true;
    for (const key in data) {
        const input = document.getElementById(key);
        if (!validateField(input)) {
            isValid = false;
        }
    }
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const group = field.parentElement;
    const errorMessage = group.querySelector('.error-message');

    let isValid = true;
    let message = '';

    if (field.hasAttribute('required') && value === '') {
        isValid = false;
        message = 'Este campo es obligatorio.';
    } else if (field.type === 'email' && !isValidEmail(value)) {
        isValid = false;
        message = 'Por favor, ingresa un email válido.';
    }

    if (isValid) {
        group.classList.remove('error');
        errorMessage.textContent = '';
    } else {
        group.classList.add('error');
        errorMessage.textContent = message;
    }
    return isValid;
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function submitForm(formData) {
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    
    btnText.style.display = 'none';
    btnLoader.style.display = 'block';
    submitBtn.disabled = true;

    // Simular envío
    setTimeout(() => {
        // Restaurar botón
        btnText.style.display = 'block';
        btnLoader.style.display = 'none';
        submitBtn.disabled = false;

        // Limpiar formulario y mostrar mensaje de éxito
        document.getElementById('contact-form').reset();
        Swal.fire({
            title: '¡Mensaje Enviado!',
            text: 'Gracias por contactarnos. Te responderemos pronto.',
            icon: 'success',
            confirmButtonColor: '#6366f1'
        });
    }, 2000);
}

// ============================================
// 13. SISTEMA DE TEMA OSCURO/CLARO
// ============================================
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', theme);
    };

    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    // Aplicar el tema guardado en localStorage o la preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    }

    themeToggle.addEventListener('click', toggleTheme);

    class ResponsiveManager {
    constructor() {
        this.init();
        this.bindEvents();
    }

    init() {
        this.preventZoom();
        this.handleViewportChanges();
        this.fixMobileVH();
        this.optimizePerformance();
    }

    bindEvents() {
        // Eventos para cambios de orientación y redimensionamiento
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.fixMobileVH();
                this.checkOverflow();
            }, 100);
        });

        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
            this.checkOverflow();
        }, 250));

        // Prevenir zoom en inputs (iOS Safari)
        this.preventInputZoom();
        
        // Manejo de scroll y navegación móvil
        this.handleMobileNavigation();
    }

    // Prevenir zoom en dispositivos móviles
    preventZoom() {
        // Gestos táctiles
        ['gesturestart', 'gesturechange', 'gestureend'].forEach(event => {
            document.addEventListener(event, (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, { passive: false });
        });

        // Rueda del mouse + Ctrl
        document.addEventListener('wheel', (e) => {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
            }
        }, { passive: false });

        // Atajos de teclado
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && 
                ['+', '-', '=', '0'].includes(e.key)) {
                e.preventDefault();
            }
        });

        // Doble tap en móviles
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (event) => {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, { passive: false });
    }

    // Prevenir zoom al hacer focus en inputs
    preventInputZoom() {
        const inputs = document.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                const viewport = document.querySelector('meta[name="viewport"]');
                if (viewport) {
                    const original = viewport.content;
                    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
                    
                    input.addEventListener('blur', () => {
                        setTimeout(() => {
                            viewport.content = original;
                        }, 300);
                    }, { once: true });
                }
            });
        });
    }

    // Fix para 100vh en móviles
    fixMobileVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        
        // Aplicar a elementos que usen 100vh
        const fullHeightElements = document.querySelectorAll('.hero, .full-height');
        fullHeightElements.forEach(el => {
            el.style.minHeight = `calc(var(--vh, 1vh) * 100)`;
        });
    }

    // Manejar cambios de viewport
    handleViewportChanges() {
        let resizeTimer;
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        
        const handleMediaQuery = (e) => {
            if (e.matches) {
                // Modo móvil
                this.enableMobileOptimizations();
            } else {
                // Modo desktop
                this.enableDesktopOptimizations();
            }
        };

        mediaQuery.addEventListener('change', handleMediaQuery);
        handleMediaQuery(mediaQuery);
    }

    enableMobileOptimizations() {
        // Reducir animaciones en móviles para mejor rendimiento
        document.body.classList.add('mobile-optimized');
        
        // Ajustar scroll behavior
        document.documentElement.style.scrollBehavior = 'auto';
        
        // Optimizar imágenes lazy loading
        this.optimizeImages();
    }

    enableDesktopOptimizations() {
        document.body.classList.remove('mobile-optimized');
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Optimizar rendimiento
    optimizePerformance() {
        // Lazy loading para imágenes
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    optimizeImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
        });
    }

    // Manejo de navegación móvil
    handleMobileNavigation() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileNav = document.querySelector('.mobile-nav');
        
        if (mobileMenuBtn && mobileNav) {
            mobileMenuBtn.addEventListener('click', () => {
                const isActive = mobileMenuBtn.classList.contains('active');
                
                if (isActive) {
                    this.closeMobileNav();
                } else {
                    this.openMobileNav();
                }
            });

            // Cerrar al hacer click en un enlace
            const navLinks = mobileNav.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileNav();
                });
            });

            // Cerrar al hacer click fuera
            document.addEventListener('click', (e) => {
                if (!mobileNav.contains(e.target) && 
                    !mobileMenuBtn.contains(e.target) && 
                    mobileNav.classList.contains('show')) {
                    this.closeMobileNav();
                }
            });
        }
    }

    openMobileNav() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileNav = document.querySelector('.mobile-nav');
        
        mobileMenuBtn.classList.add('active');
        mobileNav.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeMobileNav() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileNav = document.querySelector('.mobile-nav');
        
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Verificar elementos que se desbordan
    checkOverflow() {
        const elements = document.querySelectorAll('*');
        const viewportWidth = window.innerWidth;
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            
            if (rect.width > viewportWidth || rect.right > viewportWidth) {
                console.warn('Elemento con desbordamiento:', element);
                element.classList.add('overflow-detected');
                
                // Auto-fix común
                if (!element.style.maxWidth) {
                    element.style.maxWidth = '100%';
                    element.style.overflowX = 'hidden';
                }
            }
        });
    }

    // Manejar redimensionamiento
    handleResize() {
        this.fixMobileVH();
        this.updateContainerSizes();
    }

    updateContainerSizes() {
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            // Asegurar que los contenedores no excedan el viewport
            if (container.scrollWidth > window.innerWidth) {
                container.style.maxWidth = '100vw';
                container.style.overflowX = 'hidden';
            }
        });
    }

    // Utilidad debounce
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Detectar tipo de dispositivo
    getDeviceType() {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return "mobile";
        }
        return "desktop";
    }

    // Método público para debug
    debugMode() {
        console.log('=== RESPONSIVE DEBUG INFO ===');
        console.log('Device type:', this.getDeviceType());
        console.log('Viewport size:', window.innerWidth + 'x' + window.innerHeight);
        console.log('Device pixel ratio:', window.devicePixelRatio);
        console.log('Orientation:', screen.orientation?.type || 'unknown');
        
        this.checkOverflow();
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.responsiveManager = new ResponsiveManager();
    
    // Agregar método debug global
    window.debugResponsive = () => window.responsiveManager.debugMode();
});

// CSS adicional para JavaScript
const additionalCSS = `
.mobile-optimized * {
    animation-duration: 0.1s !important;
    transition-duration: 0.1s !important;
}

.overflow-detected {
    outline: 2px dashed red !important;
    position: relative;
}

.overflow-detected::after {
    content: "OVERFLOW";
    position: absolute;
    top: 0;
    right: 0;
    background: red;
    color: white;
    font-size: 10px;
    padding: 2px 4px;
    z-index: 999999;
}

/* Fix para 100vh en móviles */
.hero,
.full-height {
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
}
`;

// Inyectar CSS adicional
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);
}
