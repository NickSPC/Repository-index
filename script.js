document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // ========================================
  // 1. REFERENCIAS AL DOM
  // ========================================

  const elementos = {
    titulo: document.getElementById("materia-titulo"),
    meta: document.getElementById("materia-meta"),
    paneles: document.querySelectorAll(".materia-panel"),
    navegacion: document.querySelectorAll(".materia-nav [data-target]"),
    botonDiseno: document.getElementById("diseno-toggle"),
    submenuDiseno: document.getElementById("diseno-submenu"),
  };

  // ========================================
  // 2. DATOS DE LOS EJERCICIOS
  // ========================================

  const materias = {
    poo: {
      titulo: "Programación Orientada a Objetos",
      comando: "ls -la poo/",
      cantidad: "repositorios",
      detalles: ["4 unidades", "cursando 2026"],
      gridId: "grid-poo",
      ejercicios: [
        {
          numero: "2-E-1 / 01",
          etiqueta: "fundamentos",
          titulo: "Modelado básico e instanciación (Persona)",
          descripcion:
            "Creación de clases, atributos, objetos e instanciación mediante new.",
          url: "https://github.com/Niko07ds/Ejercicios-2-E-1-Ejercicio01",
        },
        {
          numero: "2-E-1 / 02",
          etiqueta: "fundamentos",
          titulo: "Mascota: constructores",
          descripcion:
            "Inicialización de objetos mediante constructores parametrizados y uso de this.",
          url: "https://github.com/Niko07ds/Ejercicios-2-E-1-Ejercicio02",
        },
        {
          numero: "2-E-1 / 03",
          etiqueta: "fundamentos",
          titulo: "Auto: transición de estados",
          descripcion:
            "Métodos de instancia para modificar y consultar el estado de un objeto.",
          url: "https://github.com/Niko07ds/Ejercicios-2-E-1-Ejercicio03",
        },
        {
          numero: "2-E-1 / 04",
          etiqueta: "fundamentos",
          titulo: "Calculadora: métodos y retornos",
          descripcion:
            "Métodos con parámetros, valores de retorno y validación de división por cero.",
          url: "https://github.com/Niko07ds/Ejercicios-2-E-1-Ejercicio04",
        },
        {
          numero: "2-E-1 / 05",
          etiqueta: "fundamentos",
          titulo: "Contador: control de límites",
          descripcion:
            "Uso de constructores y métodos para controlar el valor de un objeto.",
          url: "https://github.com/Niko07ds/Ejercicios-2-E-1-Ejercicio05",
        },
        {
          numero: "2-E-1 / 06",
          etiqueta: "fundamentos",
          titulo: "Libro: progreso y porcentajes",
          descripcion:
            "Cálculo del progreso de lectura y control de páginas mediante atributos numéricos.",
          url: "https://github.com/Niko07ds/Ejercicios-2-E-1-Ejercicio06",
        },
        {
          numero: "2-E-1 / 07",
          etiqueta: "encapsulamiento",
          titulo: "Cuenta bancaria: encapsulamiento",
          descripcion:
            "Uso de atributos privados, getters y operaciones controladas sobre el saldo.",
          url: "https://github.com/Niko07ds/Ejercicios-2-E-1-Ejercicio07",
        },
        {
          numero: "2-E-1 / 08",
          etiqueta: "colecciones",
          titulo: "Estudiante: notas y promedio",
          descripcion:
            "Uso de ArrayList para almacenar calificaciones y calcular el promedio.",
          url: "https://github.com/Niko07ds/Ejercicios-2-E-1-Ejercicio08",
        },
        {
          numero: "2-E-1 / 09",
          etiqueta: "asociación",
          titulo: "Carrito de compras: asociación entre clases",
          descripcion:
            "Asociación entre Producto y CarritoDeCompras mediante una lista de objetos.",
          url: "https://github.com/Niko07ds/Ejercicios-2-E-1-Ejercicio09",
        },
        {
          numero: "2-E-1 / 10",
          etiqueta: "interacción",
          titulo: "Personaje: combate entre objetos",
          descripcion:
            "Interacción entre objetos mediante referencias, combate por turnos y daño variable.",
          url: "https://github.com/Niko07ds/Ejercicios-2-E-1-Ejercicio10",
        },
      ],
    },

    // ========================================
    // PATRÓN SINGLETON
    // ========================================

    singleton: {
      titulo: "Patrón Singleton",
      comando: "ls -la singleton/",
      cantidad: "ejercicios",
      detalles: ["patrón creacional", "cursando 2026"],
      gridId: "grid-singleton",
      etiqueta: "creacional",
      descripcionBase: "Ejercicio práctico del patrón Singleton.",
      ejercicios: [
        {
          numero: "Singleton / 2-E-1 / 01",
          etiqueta: "creacional",
          titulo: "Configuración inicial de la aplicación",
          descripcion:
            "Implementación del patrón Singleton mediante un constructor privado y un método estático de acceso global para garantizar una única instancia del lector de configuración.",
          url: "https://github.com/Niko07ds/2.E.1-Ejercitacion-Ejercicio01",
        },
        {
          numero: "Singleton / 2-E-1 / 02",
          etiqueta: "creacional",
          titulo: "Gestor de conexiones a base de datos simple",
          descripcion:
            "Implementación de un Singleton para centralizar y reutilizar una única conexión a la base de datos, permitiendo ejecutar consultas y actualizaciones.",
          url: "https://github.com/Niko07ds/2.E.1-Ejercitacion-Ejercicio02",
        },
        {
          numero: "Singleton / 2-E-1 / 03",
          etiqueta: "creacional",
          titulo: "Registro de eventos (Logger) básico",
          descripcion:
            "Implementación de un Singleton para centralizar el registro de eventos con niveles de severidad y marcas de tiempo automáticas.",
          url: "https://github.com/Niko07ds/2.E.1-Ejercitacion-Ejercicio03",
        },
        {
          numero: "Singleton / 2-E-1 / 04",
          etiqueta: "creacional",
          titulo: "Servicio de caché en memoria",
          descripcion:
            "Implementación de un Singleton con inicialización diferida para almacenar, recuperar, validar y eliminar elementos de una caché compartida.",
          url: "https://github.com/Niko07ds/2.E.1-Ejercitacion-Ejercicio04",
        },
        {
          numero: "Singleton / 2-E-1 / 05",
          etiqueta: "creacional",
          titulo: "Administrador de dispositivos de hardware únicos",
          descripcion:
            "Implementación de un Singleton para controlar el acceso exclusivo a un dispositivo de hardware, validar su disponibilidad y gestionar comandos y estados.",
          url: "https://github.com/Niko07ds/2.E.1-Ejercitacion-Ejercicio05",
        },
        {
          numero: "Singleton / 2-E-1 / 06",
          etiqueta: "creacional",
          titulo: "Gestor de temas y apariencia visual",
          descripcion:
            "Implementación de un Singleton para centralizar el tema visual de la aplicación y permitir consultar y modificar la apariencia desde cualquier componente.",
          url: "https://github.com/Niko07ds/2.E.1-Ejercitacion-Ejercicio06",
        },
        {
          numero: "Singleton / 2-E-1 / 07",
          etiqueta: "creacional",
          titulo: "Cola de impresión centralizada",
          descripcion:
            "Implementación de un Singleton para administrar una cola compartida de trabajos de impresión, procesarlos en orden y controlar el acceso concurrente.",
          url: "https://github.com/Niko07ds/2.E.1-Ejercitacion-Ejercicio07",
        },
        {
          numero: "Singleton / 2-E-1 / 08",
          etiqueta: "creacional",
          titulo: "Refactorización hacia inyección de dependencias",
          descripcion:
            "Refactorización de un Singleton de pasarela de pago para conservar una única instancia e inyectarla mediante constructores, reduciendo el acoplamiento y facilitando las pruebas unitarias.",
          url: "https://github.com/Niko07ds/2.E.1-Ejercitacion-Ejercicio08",
        },
        {
          numero: "Singleton / 2-E-1 / 09",
          etiqueta: "creacional",
          titulo: "Sistema de monitoreo de métricas de rendimiento",
          descripcion:
            "Implementación de un Singleton para recopilar y consolidar métricas de rendimiento, sincronizar el acceso concurrente y controlar la capacidad de almacenamiento.",
          url: "https://github.com/Niko07ds/2.E.1-Ejercitacion-Ejercicio09",
        },
        {
          numero: "Singleton / 2-E-1 / 10",
          etiqueta: "creacional",
          titulo: "Contenedor de estado global y auditoría de seguridad",
          descripcion:
            "Implementación de un Singleton para centralizar una traza de auditoría inmutable, registrar eventos cronológicamente y garantizar la consistencia del estado en entornos multihilo.",
          url: "https://github.com/Niko07ds/2.E.1-Ejercitacion-Ejercicio10",
        },
        "Singleton con propiedades",
        "Gestor de recursos",
        "Singleton y encapsulamiento",
        "Pruebas de instancia única",
        "Singleton con dependencias",
        "Comparación de implementaciones",
        "Singleton en una aplicación",
        "Ventajas y desventajas",
        "Integración final del patrón",
      ],
    },

    // ========================================
    // PATRÓN FACTORY METHOD
    // ========================================

    factory: {
      titulo: "Patrón Factory Method",
      comando: "ls -la factory-method/",
      cantidad: "ejercicios",
      detalles: ["patrón creacional", "cursando 2026"],
      gridId: "grid-factory",
      etiqueta: "creacional",
      descripcionBase: "Ejercicio práctico del patrón Factory Method.",
      ejercicios: [
        "Factory Method básico",
        "Creación de productos",
        "Interfaz de producto",
        "Creador abstracto",
        "Creadores concretos",
        "Notificaciones por distintos canales",
        "Fábrica de documentos",
        "Fábrica de vehículos",
        "Creación de reportes",
        "Productos intercambiables",
        "Separación entre creación y uso",
        "Factory Method con parámetros",
        "Validación de productos",
        "Múltiples fábricas concretas",
        "Integración con interfaces",
        "Pruebas de creación",
        "Extensión sin modificar el cliente",
        "Comparación con Simple Factory",
        "Aplicación práctica del patrón",
        "Integración final del patrón",
      ],
    },

    // ========================================
    // PATRÓN OBSERVER
    // ========================================

    observer: {
      titulo: "Patrón Observer",
      comando: "ls -la observer/",
      cantidad: "ejercicios",
      detalles: ["patrón de comportamiento", "cursando 2026"],
      gridId: "grid-observer",
      etiqueta: "comportamiento",
      descripcionBase: "Ejercicio práctico del patrón Observer.",
      ejercicios: [
        "Observer básico",
        "Sujeto y observador",
        "Suscripción a eventos",
        "Notificación de cambios",
        "Múltiples observadores",
        "Alta de observadores",
        "Baja de observadores",
        "Notificaciones con datos",
        "Sistema de alertas",
        "Notificaciones meteorológicas",
        "Actualización de interfaz",
        "Eventos de usuario",
        "Observer con interfaces",
        "Manejo de varios eventos",
        "Orden de notificaciones",
        "Control de suscripciones",
        "Pruebas de observadores",
        "Observer en una aplicación",
        "Ventajas y limitaciones",
        "Integración final del patrón",
      ],
    },

    // ========================================
    // COMPUTACIÓN EN LA NUBE
    // ========================================

    nube: {
      titulo: "Computación en la Nube",
      comando: "ls -la computacion-en-la-nube/",
      cantidad: "proyecto",
      detalles: ["4 unidades", "cursando 2026"],
      gridId: "grid-nube",
      ejercicios: [
        {
          numero: "CLOUD / 01",
          etiqueta: "introducción",
          titulo: "Introducción a la nube",
          descripcion: "Proyecto introductorio de Computación en la Nube.",
          // Reemplazá null por la URL real cuando tengas el repositorio.
          url: null,
        },
      ],
    },
  };

  const patrones = ["singleton", "factory", "observer"];

  // ========================================
  // 3. UTILIDADES
  // ========================================

  function obtenerPanel(clave) {
    return document.getElementById(`panel-${clave}`);
  }

  function obtenerContenedor(clave) {
    const materia = materias[clave];

    return materia ? document.getElementById(materia.gridId) : null;
  }

  function crearElemento(etiqueta, clase, texto) {
    const elemento = document.createElement(etiqueta);

    if (clase) {
      elemento.className = clase;
    }

    if (texto !== undefined) {
      elemento.textContent = texto;
    }

    return elemento;
  }

  // ========================================
  // 4. OBTENER Y PREPARAR EJERCICIOS
  // ========================================

  function obtenerEjercicios(materia, clave) {
    // POO y Nube ya tienen sus datos completos.
    if (clave === "poo" || clave === "nube") {
      return materia.ejercicios;
    }

    return materia.ejercicios.map((ejercicio, indice) => {
      const numero = `DISEÑO / ${String(indice + 1).padStart(2, "0")}`;

      // Si el ejercicio es un objeto, conservamos su URL,
      // título, descripción y cualquier otro dato definido.
      if (typeof ejercicio === "object" && ejercicio !== null) {
        return {
          numero,
          etiqueta: materia.etiqueta,
          ...ejercicio,
        };
      }

      // Si solamente tenemos el título, generamos
      // una tarjeta pendiente de completar.
      return {
        numero,
        etiqueta: materia.etiqueta,
        titulo: ejercicio,
        descripcion: `${materia.descripcionBase} Ejercicio ${indice + 1} de ${materia.ejercicios.length}.`,
        url: null,
      };
    });
  }

  // ========================================
  // 5. CREAR TARJETAS
  // ========================================

  function crearTarjeta(ejercicio) {
    const tieneUrl =
      typeof ejercicio.url === "string" &&
      /^https:\/\/github\.com\//i.test(ejercicio.url);

    const tarjeta = crearElemento(
      tieneUrl ? "a" : "article",
      tieneUrl ? "card" : "card card-pending",
    );

    if (tieneUrl) {
      tarjeta.href = ejercicio.url;
      tarjeta.target = "_blank";
      tarjeta.rel = "noopener noreferrer";
    }

    const parteSuperior = crearElemento("div", "card-top");

    const numero = crearElemento(
      "span",
      "card-num",
      ejercicio.numero || `EJERCICIO / --`,
    );

    const etiqueta = crearElemento(
      "span",
      "card-tag",
      ejercicio.etiqueta || "general",
    );

    parteSuperior.append(numero, etiqueta);

    const titulo = crearElemento(
      "div",
      "card-title",
      ejercicio.titulo || "Ejercicio sin título",
    );

    const descripcion = crearElemento(
      "p",
      "card-desc",
      ejercicio.descripcion || "Sin descripción disponible.",
    );

    const enlace = crearElemento(
      "span",
      "card-go",
      tieneUrl ? "ver repo →" : "enlace pendiente",
    );

    tarjeta.append(parteSuperior, titulo, descripcion, enlace);

    return tarjeta;
  }

  // ========================================
  // 6. RENDERIZAR LAS MATERIAS
  // ========================================

  function renderizarMateria(clave) {
    const materia = materias[clave];
    const contenedor = obtenerContenedor(clave);

    if (!materia || !contenedor) {
      console.warn(`No se pudo renderizar la sección "${clave}".`);
      return;
    }

    const fragmento = document.createDocumentFragment();
    const ejercicios = obtenerEjercicios(materia, clave);

    ejercicios.forEach((ejercicio) => {
      fragmento.appendChild(crearTarjeta(ejercicio));
    });

    contenedor.replaceChildren(fragmento);
  }

  function renderizarTodo() {
    Object.keys(materias).forEach(renderizarMateria);
  }

  // ========================================
  // 7. ACTUALIZAR EL ENCABEZADO
  // ========================================

  function actualizarEncabezado(clave) {
    const materia = materias[clave];

    if (!materia) {
      return;
    }

    elementos.titulo.textContent = materia.titulo;
    elementos.meta.replaceChildren();

    const fragmento = document.createDocumentFragment();

    fragmento.appendChild(crearElemento("span", "prompt", "$"));

    fragmento.appendChild(document.createTextNode(` ${materia.comando}`));

    let cantidad = materia.cantidad;

    if (materia.ejercicios.length === 1) {
      const singulares = {
        repositorios: "repositorio",
        ejercicios: "ejercicio",
        proyectos: "proyecto",
        proyecto: "proyecto",
      };

      cantidad = singulares[cantidad] || cantidad;
    }

    const detalles = [
      `${materia.ejercicios.length} ${cantidad}`,
      ...materia.detalles,
    ];

    detalles.forEach((detalle) => {
      fragmento.appendChild(crearElemento("span", "meta-sep", "·"));

      fragmento.appendChild(document.createTextNode(` ${detalle} `));
    });

    elementos.meta.appendChild(fragmento);
  }

  // ========================================
  // 8. NAVEGACIÓN ENTRE SECCIONES
  // ========================================

  function mostrarPanel(clave) {
    const panelSeleccionado = obtenerPanel(clave);

    if (!materias[clave] || !panelSeleccionado) {
      console.warn(`No se encontró la sección "${clave}".`);
      return;
    }

    elementos.paneles.forEach((panel) => {
      const activo = panel === panelSeleccionado;

      panel.classList.toggle("active", activo);
      panel.hidden = !activo;
    });

    elementos.navegacion.forEach((boton) => {
      const activo = boton.dataset.target === clave;

      boton.classList.toggle("active", activo);

      if (activo) {
        boton.setAttribute("aria-current", "page");
      } else {
        boton.removeAttribute("aria-current");
      }
    });

    const esPatron = patrones.includes(clave);

    elementos.botonDiseno.classList.toggle("active", esPatron);

    if (esPatron) {
      abrirSubmenu();
    } else {
      cerrarSubmenu();
    }

    actualizarEncabezado(clave);
  }

  // ========================================
  // 9. SUBMENÚ DE DISEÑO DE SOFTWARE
  // ========================================

  function abrirSubmenu() {
    elementos.botonDiseno.setAttribute("aria-expanded", "true");
    elementos.submenuDiseno.hidden = false;
  }

  function cerrarSubmenu() {
    elementos.botonDiseno.setAttribute("aria-expanded", "false");
    elementos.submenuDiseno.hidden = true;
  }

  elementos.botonDiseno.addEventListener("click", () => {
    const estaAbierto =
      elementos.botonDiseno.getAttribute("aria-expanded") === "true";

    if (estaAbierto) {
      cerrarSubmenu();
    } else {
      abrirSubmenu();
    }
  });

  // ========================================
  // 10. EVENTOS DE NAVEGACIÓN
  // ========================================

  elementos.navegacion.forEach((boton) => {
    boton.addEventListener("click", () => {
      mostrarPanel(boton.dataset.target);
    });
  });

  // ========================================
  // 11. INICIALIZACIÓN
  // ========================================

  renderizarTodo();
  mostrarPanel("poo");
});
