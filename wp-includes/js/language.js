// Definir las traducciones
var translations = {
  en: {
    expertise: "My Expertise",
    imk: "I'm Kevin",
    get: "Get in touch",
    services: "Services",
    services2: "Get a powerful website that delivers results with an all-in-one solution",
    webdesign: "Web Design",
    webdesign2: "Transforming ideas into digital reality. One-stop solution for design, development, and content. Together, let’s make the web extraordinary!",
    uidesigner: "UI/UX Diseñor",
    uidesigner2: "Turning complexity into simplicity. UI/UX Designer, crafting intuitive and engaging digital experiences.",
    userresearch: "User research",
    userresearch2: "Uncovering what users need, creating what they’ll love. User research: the heart of an exceptional digital experience.",
    featuredprojects: "Featured Projects",
    myprocess: "MY PROCESS",
    myprocess2: "Transform your website dreams into a reality in just a few simple steps.",
    concept: "Concept",
    concept2: "Conceptualizing digital dreams into tangible realities. Your idea, our canvas. Let’s paint the web together!",
    concept3: "Innovation: Crafting fresh, unique ideas.",
    concept4: "Vision: Visualizing the digital future.",
    concept5: "Strategy: Planning for success.",
    design: "DESIGN",
    design2: "Crafting digital aesthetics that speak volumes. Design: where form meets function and user experience comes to life.",
    design3: "Aesthetics: Creating visually appealing designs.",
    design4: "Functionality: Designing for ease of use.",
    design5: "User Experience: Focusing on how users interact.",
    development: "Development",
    development2: "Building the digital future, one line of code at a time. Development: where ideas come to life and functionality takes center stage.",
    development3: "Coding: Transforming designs into reality.",
    development4: "Optimization: Ensuring fast and efficient performance.",
    development5: "Testing: Ensuring quality and reliability.",
    about: "About - Kevin Mijares",
    about2: "Get a website that will make a lasting impression on your audience!!!",
    project: "Project",
    abouth: "About Me",
    contact: "Contact",
    discuss: "Let's Discuss Your Project",
    discuss2: "Get in touch with us for any kind of help. We are here to give you the best and also here to help you to find your projects.",
    name: "Your name",
    email: "Your email",
    subject: "Subject",
    message: "Your message",
    project1: "Project 1",
    project11: "Innovation in eCommerce: Smartphone sales and support with technologies such as Angular and NodeJS",
    project2: "Project 2",
    project21: "Online Administration: Optimisation of administrative operations with comprehensive web solutions using technologies such as Next.js and Node.js.",
    project3: "Project 3",
    project31: "Efficient Administration: Comprehensive web solutions for the administrative management of Gyms, developed with AngularJS, Node.js and SQLite.",




    // Agrega aquí el resto de tus textos en inglés...
  },
  es: {
    expertise: "Mi Experiencia",
    imk: "Soy Kevin",
    get: "Ponte en contacto",
    services: "Servicios",
    services2: "Consiga un sitio web potente que ofrezca resultados con una solución todo en uno",
    webdesign: "Diseño Web",
    webdesign2: "Transformando ideas en realidad digital. Una solución integral de diseño, desarrollo y contenidos. Juntos, ¡hagamos que la web sea extraordinaria!",
    uidesigner: "Diseñor UI/UX",
    uidesigner2: "Convertir la complejidad en simplicidad. Diseñador de UI/UX que crea experiencias digitales intuitivas y atractivas.",
    userresearch: "Investigación sobre los usuarios",
    userresearch2: "Descubrir lo que necesitan los usuarios, crear lo que les encantará. Investigación de usuarios: el corazón de una experiencia digital excepcional.",
    featuredprojects: "Proyectos destacados",
    myprocess: "MI PROCESO",
    myprocess2: "Convierta sus sueños en realidad en unos pocos  sencillos pasos.",
    concept: "Concepto",
    concept2: "Convertimos sueños digitales en realidades tangibles. Su idea, nuestro lienzo. ¡Pintemos juntos la web!",
    concept3: "Innovación: Crear ideas nuevas y únicas.",
    concept4: "Visión: Visualizar el futuro digital.",
    concept5: "Estrategia: Planificar el éxito.",
    design: "DISEÑO",
    design2: "Crear una estética digital que lo diga todo. Diseño: donde la forma se une a la función y la experiencia del usuario cobra vida",
    design3: "Estética: Crear diseños visualmente atractivos",
    design4: "Funcionalidad: Diseñar para facilitar el uso",
    design5: "Experiencia de usuario: Centrarse en cómo interactúan los usuarios",
    development: "Desarrollo",
    development2: "Construyendo el futuro digital, una línea de código a la vez. Desarrollo: donde las ideas cobran vida y la funcionalidad ocupa el centro del escenario",
    development3: "Codificación: Transformando diseños en realidad",
    development4: "Optimización: Garantizar un rendimiento rápido y eficaz",
    development5: "Pruebas: Garantizar la calidad y la fiabilidad",
    about: "Acerca de - Kevin Mijares",
    about2: "¡Obtenga un sitio web que cause una impresión duradera en su público!",
    project: "Projectos",
    abouth: "Sobre Mi",
    contact: "Contacto",
    discuss: "Hablemos de su proyecto",
    discuss2: "Póngase en contacto con nosotros para cualquier tipo de ayuda. Estamos aquí para darle lo mejor y también para ayudarle a encontrar sus proyectos.",
    name: "Tú nombre",
    email: "Tú email",
    subject: "Tema",
    message: "Tú mensaje",
    project1: "Proyecto 1",
    project11: "Innovación en eCommerce: Ventas y soporte técnico de smartphones con tecnologias como Angular y NodeJS",
    project2: "Proyecto 2",
    project21: "Administración en Línea: Optimización de operaciones administrativas con soluciones web integrales utilizando tecnologías como Next.js y Node.js.",
    project3: "Project 3",
    project31: "Administración Eficiente: Soluciones web integrales para la gestión administrativa de Gimnasios, desarrolladas con AngularJS, Node.js y SQLite.",


    // Agrega aquí el resto de tus textos en español...
  }
};

  // Función para cambiar el idioma
  function changeLanguage(lang) {
    var elements = document.querySelectorAll("[data-translate]");
  
    elements.forEach(function(element) {
      var key = element.getAttribute("data-translate");
      element.textContent = translations[lang][key];
    });
  }
  
  // Evento del botón para cambiar el idioma
  document.querySelectorAll(".dropdown-item").forEach(function(item) {
    item.addEventListener("click", function() {
      var lang = this.getAttribute("data-lang");
      changeLanguage(lang);
    });
  });
  
  // Establecer el idioma por defecto al cargar la página
  changeLanguage('en');
  