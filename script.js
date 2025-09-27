// Navegación móvil
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle del menú móvil
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Efecto de scroll en la navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
        navLinks.forEach(link => link.classList.add('scrolled'));
    } else {
        navbar.classList.remove('scrolled');
        navLinks.forEach(link => link.classList.remove('scrolled'));
    }
});

// Bajar la velocidad de video de fondo
const background = document.getElementById("background-video");
    background.playbackRate = 1;

// Filtros de proyectos
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Animación de barras de habilidades
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

// Intersection Observer para animaciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animar barras de habilidades si están en el viewport
            if (entry.target.classList.contains('skills-detailed')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .interest-item, .timeline-item, .skills-detailed');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

const contactForm = document.getElementById('contactForm');
console.log("Form encontrado:", contactForm);

// // Formulario de contacto
// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById('contactForm');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', async function(e) { // 👈 aquí añadí async
//             e.preventDefault();
            
//             // Obtener datos del formulario
//             const formData = new FormData(contactForm);
//             const name = formData.get('name');
//             const email = formData.get('email');
//             const subject = formData.get('subject');
//             const message = formData.get('message');
            
//             // Validación básica
//             if (!name || !email || !subject || !message) {
//                 showMessage('Por favor, completa todos los campos.', 'error');
//                 return;
//             }
            
//             if (!isValidEmail(email)) {
//                 showMessage('Por favor, ingresa un email válido.', 'error');
//                 return;
//             }
            
//             try {
//                  const res = await fetch(contactForm.action, {
//                     method: 'POST',
//                     body: formData, // 👈 directamente formData
//                     headers: {
//                         'Accept': 'application/json'
//                     }
//                 });

//                 if (res.ok) {
//                     showMessage('¡Mensaje enviado correctamente! Te contactaré pronto.', 'success');
//                     contactForm.reset();
//                 } else {
//                     showMessage('Hubo un error al enviar el mensaje. Revisa la consola Network/Response.', 'error');
//                 }
//             } catch (err) {
//                 console.error('Error en fetch:', err);
//                 showMessage('Error de red: ' + (err.message || err), 'error');
//             }
//         });
//     }
// });


// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para mostrar mensajes
function showMessage(text, type) {
    // Remover mensajes existentes
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Crear nuevo mensaje
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    message.style.display = 'block';
    
    // Insertar mensaje antes del formulario
    const form = document.getElementById('contactForm');
    if (form) {
        form.parentNode.insertBefore(message, form);
        
        // Remover mensaje después de 5 segundos
        setTimeout(() => {
            message.remove();
        }, 5000);
    }
}

// Smooth scroll para enlaces internos
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Ajustar por la navbar fija
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Efecto parallax suave en el hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Contador animado para estadísticas (si las agregas)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start < target) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Lazy loading para imágenes (si las agregas)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Efecto de escritura para el título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efecto de escritura al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Preloader (opcional)
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Detectar dispositivo móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar animaciones según el dispositivo
if (isMobile()) {
    // Reducir animaciones en móviles para mejor rendimiento
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
}

// Manejo de errores globales
window.addEventListener('error', function(e) {
    console.error('Error:', e.error);
});

// Service Worker para PWA (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registrado correctamente');
            })
            .catch(function(registrationError) {
                console.log('Error al registrar SW');
            });
    });
}

// Función para copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        showMessage('¡Copiado al portapapeles!', 'success');
    }, function(err) {
        console.error('Error al copiar: ', err);
    });
}

// Agregar funcionalidad de copia a elementos de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach(method => {
        method.addEventListener('click', function() {
            const text = this.querySelector('p').textContent;
            copyToClipboard(text);
        });
    });
});

// Efecto de hover mejorado para tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card, .skill-item, .interest-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Validación en tiempo real del formulario
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
});

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name');
    
    clearFieldError(field);
    
    if (!value) {
        showFieldError(field, 'Este campo es obligatorio');
        return false;
    }
    
    if (fieldName === 'email' && !isValidEmail(value)) {
        showFieldError(field, 'Ingresa un email válido');
        return false;
    }
    
    return true;
}

function showFieldError(field, message) {
    field.style.borderColor = '#e74c3c';
    
    let errorElement = field.parentNode.querySelector('.field-error');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.style.color = '#e74c3c';
        errorElement.style.fontSize = '0.9rem';
        errorElement.style.marginTop = '0.25rem';
        field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
}

function clearFieldError(field) {
    field.style.borderColor = '#ecf0f1';
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}
