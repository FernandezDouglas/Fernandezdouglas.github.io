function expandSection(sectionId) {
    var section = document.getElementById(sectionId);
    var expandedSections = document.querySelectorAll('.expanded-section');

    // Cerrar cualquier sección expandida
    expandedSections.forEach(function(expandedSection) {
      if (expandedSection.id !== sectionId) {
        expandedSection.classList.remove('expanded-section');
      }
    });

    // Abrir o cerrar la sección según su estado actual
    section.classList.toggle('expanded-section');
  }
  function scrollToContact() {
    // Selecciona la sección de contacto por su identificador
    var contactSection = document.getElementById("contacto");
    // Usa el método scrollIntoView para desplazarte hasta la sección
    contactSection.scrollIntoView({ behavior: "smooth" });
  }