/* =====================================================
   MENÚ MOBILE
===================================================== */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        if (mobileMenu.classList.contains("active")) {
            menuButton.textContent = "×";
        } else {
            menuButton.textContent = "☰";
        }

    });

}


/* =====================================================
   CERRAR MENÚ AL HACER CLICK
===================================================== */

document.querySelectorAll(".mobile-menu a").forEach((link) => {

    link.addEventListener("click", () => {

        if (mobileMenu) {
            mobileMenu.classList.remove("active");
        }

        if (menuButton) {
            menuButton.textContent = "☰";
        }

    });

});


/* =====================================================
   ANIMACIONES AL HACER SCROLL
===================================================== */

const animatedElements = document.querySelectorAll(
    ".problem-card, .service, .method-grid div, .methodology-item, .founder-card, .contact-information, .contact-form, .process-flow"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    animatedElements.forEach((element) => {

        element.classList.add("scroll-hidden");

        observer.observe(element);

    });

}


/* =====================================================
   FORMULARIO DE CONTACTO
===================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const nombre =
            document.getElementById("nombre").value.trim();

        const empresa =
            document.getElementById("empresa").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const servicio =
            document.getElementById("servicio").value;

        const mensaje =
            document.getElementById("mensaje").value.trim();


        /*
         * REEMPLAZAR ESTE NÚMERO
         * POR EL WHATSAPP REAL DE LA EMPRESA.
         *
         * Formato:
         * 519XXXXXXXX
         */

        const whatsappNumber = "519XXXXXXXX";


        const text =

            `Hola, quiero realizar una consulta.%0A%0A` +

            `Nombre: ${nombre}%0A` +

            `Empresa: ${empresa || "No especificada"}%0A` +

            `Correo: ${email}%0A` +

            `Servicio: ${servicio}%0A%0A` +

            `Mensaje:%0A${mensaje}`;


        if (whatsappNumber.includes("X")) {

            alert(
                "El formulario está listo. Falta configurar el número de WhatsApp de la empresa en script.js."
            );

            return;

        }


        window.open(
            `https://wa.me/${whatsappNumber}?text=${text}`,
            "_blank"
        );

    });

}


/* =====================================================
   BOTÓN WHATSAPP DIRECTO
===================================================== */

const whatsappDirect =
    document.getElementById("whatsappDirect");

if (whatsappDirect) {

    const whatsappNumber = "519XXXXXXXX";

    if (!whatsappNumber.includes("X")) {

        whatsappDirect.href =
            `https://wa.me/${whatsappNumber}`;

        whatsappDirect.target = "_blank";

    } else {

        whatsappDirect.addEventListener("click", (event) => {

            event.preventDefault();

            alert(
                "Configura primero el número de WhatsApp de la empresa en script.js."
            );

        });

    }

}


/* =====================================================
   SCROLL SUAVE
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});