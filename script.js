document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // 1. REFERENCIAS AL DOM

  const elementos = {
    titulo: document.getElementById("materia-titulo"),
    meta: document.getElementById("materia-meta"),
    paneles: document.querySelectorAll(".materia-panel"),
    navegacion: document.querySelectorAll(".materia-nav [data-target]"),
    botonDiseno: document.getElementById("diseno-toggle"),
    submenuDiseno: document.getElementById("diseno-submenu"),
  };

  // 2. DATOS DE LOS EJERCICIOS

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

    // PATRÓN SINGLETON

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
        {
          numero: "Singleton / 2-E-2 / 01",
          etiqueta: "creacional",
          titulo: "Configuración general de una biblioteca",
          descripcion:
            "Implementación de un Singleton para centralizar la configuración de una biblioteca, validar sus atributos y compartir una única instancia entre los módulos de préstamos y consultas.",
          url: "https://github.com/Niko07ds/2.E.2-Ejercitacion-Ejercicio01",
        },
        {
          numero: "Singleton / 2-E-2 / 02",
          etiqueta: "creacional",
          titulo: "Registro centralizado de actividades de la biblioteca",
          descripcion:
            "Implementación de un Singleton para registrar, consultar y filtrar las actividades de distintos sectores de una biblioteca mediante un historial compartido.",
          url: "https://github.com/Niko07ds/2.E.2-Ejercitacion-Ejercicio02",
        },
        {
          numero: "Singleton / 2-E-2 / 03",
          etiqueta: "creacional",
          titulo: "Catálogo compartido de libros",
          descripcion:
            "Implementación de un Singleton para administrar un catálogo único de libros, permitiendo incorporar, buscar y actualizar ejemplares desde diferentes pantallas.",
          url: "https://github.com/Niko07ds/2.E.2-Ejercitacion-Ejercicio03",
        },
        {
          numero: "Singleton / 2-E-2 / 04",
          etiqueta: "creacional",
          titulo: "Administrador único de préstamos",
          descripcion:
            "Implementación de un Singleton para centralizar los préstamos y devoluciones de ejemplares, evitando préstamos duplicados y manteniendo el estado compartido entre mostradores.",
          url: "https://github.com/Niko07ds/2.E.2-Ejercitacion-Ejercicio04",
        },
        {
          numero: "Singleton / 2-E-2 / 05",
          etiqueta: "creacional",
          titulo: "Gestor concurrente de reservas de una sala de lectura",
          descripcion:
            "Implementación de un Singleton seguro ante concurrencia para administrar las reservas de una sala de lectura, controlar los cupos disponibles y evitar reservas duplicadas.",
          url: "https://github.com/Niko07ds/2.E.2-Ejercitacion-Ejercicio05",
        },
        {
          numero: "Singleton / 2-E-2 / 06",
          etiqueta: "creacional",
          titulo: "Configuración general de un hospital",
          descripcion:
            "Implementación de un Singleton con inicialización diferida para centralizar los parámetros de configuración de un hospital y compartirlos entre recepción y consultorios.",
          url: "https://github.com/Niko07ds/2.E.2-Ejercitacion-Ejercicio06",
        },
        {
          numero: "Singleton / 2-E-2 / 07",
          etiqueta: "creacional",
          titulo: "Generador central de números de atención",
          descripcion:
            "Implementación de un Singleton para generar números de atención consecutivos y compartir un contador único y un historial entre distintas terminales.",
          url: "https://github.com/Niko07ds/2.E.2-Ejercitacion-Ejercicio07",
        },
        {
          numero: "Singleton / 2-E-2 / 08",
          etiqueta: "creacional",
          titulo: "Registro compartido de movimientos de insumos",
          descripcion:
            "Implementación de un Singleton para centralizar los movimientos de insumos de distintos sectores, mantener un historial protegido y calcular saldos sin permitir salidas superiores a las existencias.",
          url: "https://github.com/Niko07ds/2.E.2-Ejercitacion-Ejercicio08",
        },
        {
          numero: "Singleton / 2-E-2 / 09",
          etiqueta: "creacional",
          titulo: "Cola compartida de impresión administrativa",
          descripcion:
            "Implementación de un Singleton seguro ante concurrencia para gestionar una cola compartida de impresión, procesar documentos en orden y evitar pérdidas o duplicaciones de trabajos.",
          url: "https://github.com/Niko07ds/2.E.2-Ejercitacion-Ejercicio09",
        },
        {
          numero: "Singleton / 2-E-2 / 10",
          etiqueta: "creacional",
          titulo: "Administrador concurrente de turnos de consultorio",
          descripcion:
            "Implementación de un Singleton con operaciones atómicas para administrar agendas médicas, reservar y cancelar turnos y evitar asignaciones duplicadas ante solicitudes concurrentes.",
          url: "https://github.com/Niko07ds/2.E.2-Ejercitacion-Ejercicio10",
        },
      ],
    },

    // PATRÓN FACTORY METHOD

    factory: {
      titulo: "Patrón Factory Method",
      comando: "ls -la factory-method/",
      cantidad: "ejercicios",
      detalles: ["patrón creacional", "cursando 2026"],
      gridId: "grid-factory",
      etiqueta: "creacional",
      descripcionBase: "Ejercicio práctico del patrón Factory Method.",
      ejercicios: [
        {
          numero: "Factory / 3-E-1 / 01",
          etiqueta: "creacional",
          titulo: "Generador básico de documentos de texto",
          descripcion:
            "Implementación del patrón Factory Method para crear diferentes tipos de documentos mediante clases creadoras especializadas, desacoplando la instanciación del código cliente.",
          url: "https://github.com/Niko07ds/3.E.1-Ejercitacion-Ejercicio01",
        },
        {
          numero: "Factory / 3-E-1 / 02",
          etiqueta: "creacional",
          titulo: "Creador de conexiones a motores de base de datos",
          descripcion:
            "Implementación de Factory Method para encapsular la creación de conexiones a diferentes motores de bases de datos, utilizando interfaces comunes y creadores concretos especializados.",
          url: "https://github.com/Niko07ds/3.E.1-Ejercitacion-Ejercicio02",
        },
        {
          numero: "Factory / 3-E-1 / 03",
          etiqueta: "creacional",
          titulo: "Sistema de notificaciones multiplataforma básico",
          descripcion:
            "Implementación de Factory Method para crear notificadores por correo electrónico y SMS, permitiendo enviar mensajes mediante una interfaz común y factorías especializadas.",
          url: "https://github.com/Niko07ds/3.E.1-Ejercitacion-Ejercicio03",
        },
        {
          numero: "Factory / 3-E-1 / 04",
          etiqueta: "creacional",
          titulo: "Fábrica de exportadores de reportes financieros",
          descripcion:
            "Implementación de Factory Method para generar reportes financieros en formatos PDF y CSV, encapsulando la validación de datos y las particularidades de cada exportador.",
          url: "https://github.com/Niko07ds/3.E.1-Ejercitacion-Ejercicio04",
        },
        {
          numero: "Factory / 3-E-1 / 05",
          etiqueta: "creacional",
          titulo: "Generador de personajes para videojuego de rol (Star Wars)",
          descripcion:
            "Implementación de Factory Method para crear personajes de diferentes clases, asignando automáticamente sus atributos iniciales, estadísticas de combate y equipamiento correspondiente.",
          url: "https://github.com/Niko07ds/3.E.1-Ejercitacion-Ejercicio05",
        },
        {
          numero: "Factory / 3-E-1 / 06",
          etiqueta: "creacional",
          titulo: "Factoría de métodos de pago para comercio electrónico",
          descripcion:
            "Implementación de Factory Method para crear diferentes pasarelas de pago, aplicar sus reglas de validación y comisiones y procesar transacciones mediante una interfaz común.",
          url: "https://github.com/Niko07ds/3.E.1-Ejercitacion-Ejercicio06",
        },
        {
          numero: "Factory / 3-E-1 / 07",
          etiqueta: "creacional",
          titulo: "Generador de elementos de interfaz gráfica adaptativa",
          descripcion:
            "Implementación de Factory Method para crear componentes gráficos adaptados a diferentes estilos visuales, garantizando la compatibilidad y coherencia estética de los elementos generados.",
          url: "https://github.com/Niko07ds/3.E.1-Ejercitacion-Ejercicio07",
        },
        {
          numero: "Factory / 3-E-1 / 08",
          etiqueta: "creacional",
          titulo: "Refactorización de código acoplado hacia Factory Method",
          descripcion:
            "Refactorización de un sistema de compresión de archivos para reemplazar estructuras condicionales rígidas por factorías especializadas, aplicando polimorfismo, inversión de control y separación de responsabilidades.",
          url: "https://github.com/Niko07ds/3.E.1-Ejercitacion-Ejercicio08",
        },
        {
          numero: "Factory / 3-E-1 / 09",
          etiqueta: "creacional",
          titulo: "Fábrica avanzada de conectores IoT para telemetría",
          descripcion:
            "Implementación de Factory Method para crear conectores IoT mediante diferentes protocolos de comunicación, gestionar sus inicializaciones, reconexiones, métricas y registro dinámico de factorías.",
          url: "https://github.com/Niko07ds/3.E.1-Ejercitacion-Ejercicio09",
        },
        {
          numero: "Factory / 3-E-1 / 10",
          etiqueta: "creacional",
          titulo: "Sistema empresarial de emisión de comprobantes fiscales",
          descripcion:
            "Implementación de Factory Method para generar comprobantes fiscales electrónicos según las normativas de cada jurisdicción, validando datos tributarios, integridad, autorizaciones y firmas digitales.",
          url: "https://github.com/Niko07ds/3.E.1-Ejercitacion-Ejercicio10",
        },
        {
          numero: "Factory / 3-E-2 / 01",
          etiqueta: "creacional",
          titulo: "Generador básico de perfiles de usuario",
          descripcion:
            "Implementación de Factory Method para crear perfiles de estudiantes y docentes, encapsulando la lógica de creación y asignación de roles y permisos mediante clases creadoras especializadas.",
          url: "https://github.com/Niko07ds/3.E.2-Ejercitacion-Ejercicio01",
        },
        {
          numero: "Factory / 3-E-2 / 02",
          etiqueta: "creacional",
          titulo: "Creador de conexiones a repositorios de archivos",
          descripcion:
            "Implementación de Factory Method para crear conectores de almacenamiento local y en la nube, permitiendo guardar y recuperar archivos mediante una interfaz común.",
          url: "https://github.com/Niko07ds/3.E.2-Ejercitacion-Ejercicio02",
        },
        {
          numero: "Factory / 3-E-2 / 03",
          etiqueta: "creacional",
          titulo: "Sistema de alertas por canal de texto",
          descripcion:
            "Implementación de Factory Method para crear sistemas de alertas por consola y archivo, centralizando la creación de canales de salida mediante factorías especializadas.",
          url: "https://github.com/Niko07ds/3.E.2-Ejercitacion-Ejercicio03",
        },
        {
          numero: "Factory / 3-E-2 / 04",
          etiqueta: "creacional",
          titulo: "Fábrica de generadores de facturas comerciales",
          descripcion:
            "Implementación de Factory Method para generar comprobantes comerciales en formato PDF y ticket, encapsulando las reglas de formato y validación de datos monetarios.",
          url: "https://github.com/Niko07ds/3.E.2-Ejercitacion-Ejercicio04",
        },
        {
          numero: "Factory / 3-E-2 / 05",
          etiqueta: "creacional",
          titulo: "Generador de enemigos para videojuego de acción",
          descripcion:
            "Implementación de Factory Method para crear diferentes tipos de enemigos con atributos de combate y comportamientos tácticos iniciales según la dificultad del videojuego.",
          url: "https://github.com/Niko07ds/3.E.2-Ejercitacion-Ejercicio05",
        },
        {
          numero: "Factory / 3-E-2 / 06",
          etiqueta: "creacional",
          titulo: "Factoría de métodos de envío logístico",
          descripcion:
            "Implementación de Factory Method para crear servicios de transporte con diferentes tarifas y plazos de entrega, validando destinos y calculando costos según las características del pedido.",
          url: "https://github.com/Niko07ds/3.E.2-Ejercitacion-Ejercicio06",
        },
        {
          numero: "Factory / 3-E-2 / 07",
          etiqueta: "creacional",
          titulo: "Generador de componentes de interfaz gráfica minimalista",
          descripcion:
            "Implementación de Factory Method para crear componentes gráficos adaptados a diferentes resoluciones de pantalla, garantizando coherencia visual y compatibilidad entre elementos.",
          url: "https://github.com/Niko07ds/3.E.2-Ejercitacion-Ejercicio07",
        },
        {
          numero: "Factory / 3-E-2 / 08",
          etiqueta: "creacional",
          titulo: "Refactorización de código condicional hacia Factory Method",
          descripcion:
            "Refactorización de un sistema de importación de datos para reemplazar estructuras condicionales rígidas por factorías especializadas, aplicando polimorfismo, inversión de control y separación de responsabilidades.",
          url: "https://github.com/Niko07ds/3.E.2-Ejercitacion-Ejercicio08",
        },
        {
          numero: "Factory / 3-E-2 / 09",
          etiqueta: "creacional",
          titulo: "Fábrica avanzada de sensores ambientales para IoT",
          descripcion:
            "Implementación de Factory Method para crear conectores de sensores mediante diferentes protocolos de hardware, gestionar inicializaciones, lecturas, métricas y registro dinámico de factorías.",
          url: "https://github.com/Niko07ds/3.E.2-Ejercitacion-Ejercicio09",
        },
        {
          numero: "Factory / 3-E-2 / 10",
          etiqueta: "creacional",
          titulo: "Sistema empresarial de emisión de títulos de propiedad",
          descripcion:
            "Implementación de Factory Method para generar títulos de propiedad electrónicos según las normativas de cada jurisdicción, validando datos legales, identidad, sellados y firmas digitales.",
          url: "https://github.com/Niko07ds/3.E.2-Ejercitacion-Ejercicio10",
        },
      ],
    },

    // PATRÓN OBSERVER

    observer: {
      titulo: "Patrón Observer",
      comando: "ls -la observer/",
      cantidad: "ejercicios",
      detalles: ["patrón de comportamiento", "cursando 2026"],
      gridId: "grid-observer",
      etiqueta: "comportamiento",
      descripcionBase: "Ejercicio práctico del patrón Observer.",
      ejercicios: [
        {
          numero: "Observer / 4-E-1 / 01",
          etiqueta: "comportamiento",
          titulo: "Notificador de cambio de temperatura",
          descripcion:
            "Implementación básica del patrón Observer para notificar automáticamente a múltiples pantallas cuando cambia la temperatura, permitiendo registrar y desvincular observadores mediante una interfaz común.",
          url: "https://github.com/Niko07ds/4.E.1-Ejercitacion-Ejercicio01",
        },
        {
          numero: "Observer / 4-E-1 / 02",
          etiqueta: "comportamiento",
          titulo: "Sincronizador de interfaz para reproductor multimedia",
          descripcion:
            "Implementación de Observer para sincronizar distintas vistas de un reproductor multimedia ante cambios de canción o estado de reproducción, evitando consultas periódicas y manteniendo desacoplados los componentes visuales.",
          url: "https://github.com/Niko07ds/4.E.1-Ejercitacion-Ejercicio02",
        },
        {
          numero: "Observer / 4-E-1 / 03",
          etiqueta: "comportamiento",
          titulo: "Registro automático de auditoría por consola",
          descripcion:
            "Implementación de Observer para distribuir eventos de auditoría hacia módulos de consola y archivos, permitiendo gestionar dinámicamente las suscripciones sin acoplar la lógica de negocio a los sistemas de registro.",
          url: "https://github.com/Niko07ds/4.E.1-Ejercitacion-Ejercicio03",
        },
        {
          numero: "Observer / 4-E-1 / 04",
          etiqueta: "comportamiento",
          titulo: "Sistema de alertas de stock bajo para comercio electrónico",
          descripcion:
            "Implementación de Observer para detectar niveles críticos de inventario y notificar selectivamente a los departamentos interesados, encapsulando el estado del producto y sus reglas de negocio.",
          url: "https://github.com/Niko07ds/4.E.1-Ejercitacion-Ejercicio04",
        },
        {
          numero: "Observer / 4-E-1 / 05",
          etiqueta: "comportamiento",
          titulo: "Monitor de sensores de humo en edificio inteligente",
          descripcion:
            "Implementación de Observer para coordinar múltiples sensores de humo con sistemas de alarma, rociadores y conserjería, permitiendo incorporar nuevos dispositivos de respuesta sin modificar los sensores.",
          url: "https://github.com/Niko07ds/4.E.1-Ejercitacion-Ejercicio05",
        },
        {
          numero: "Observer / 4-E-1 / 06",
          etiqueta: "comportamiento",
          titulo: "Panel de cotizaciones bursátiles en tiempo real",
          descripcion:
            "Implementación de Observer para distribuir actualizaciones de cotizaciones y variaciones porcentuales a múltiples paneles financieros, contemplando la gestión segura de suscriptores en entornos concurrentes.",
          url: "https://github.com/Niko07ds/4.E.1-Ejercitacion-Ejercicio06",
        },
        {
          numero: "Observer / 4-E-1 / 07",
          etiqueta: "comportamiento",
          titulo: "Sistema de suscripción a canales de noticias digitales",
          descripcion:
            "Implementación de Observer con suscripciones filtradas por categorías temáticas, notificando únicamente a los usuarios interesados cuando se publica una nueva noticia.",
          url: "https://github.com/Niko07ds/4.E.1-Ejercitacion-Ejercicio07",
        },
        {
          numero: "Observer / 4-E-1 / 08",
          etiqueta: "comportamiento",
          titulo: "Refactorización de código acoplado hacia el patrón Observer",
          descripcion:
            "Refactorización de un sistema de gestión de proyectos para reemplazar dependencias directas por observadores abstractos, aplicando desacoplamiento, interfaces e inversión de control.",
          url: "https://github.com/Niko07ds/4.E.1-Ejercitacion-Ejercicio08",
        },
        {
          numero: "Observer / 4-E-1 / 09",
          etiqueta: "comportamiento",
          titulo:
            "Motor avanzado de eventos para arquitectura de microservicios simulada",
          descripcion:
            "Implementación de un bus centralizado de eventos basado en Observer para distribuir mensajes según su tipo, gestionar suscripciones concurrentes y aislar errores individuales durante las notificaciones.",
          url: "https://github.com/Niko07ds/4.E.1-Ejercitacion-Ejercicio09",
        },
        {
          numero: "Observer / 4-E-1 / 10",
          etiqueta: "comportamiento",
          titulo:
            "Sistema empresarial de notificación de riesgos y cumplimiento legal",
          descripcion:
            "Implementación de Observer para distribuir cambios de perfiles de riesgo hacia subsistemas regulatorios, incorporando ejecución controlada, auditoría inmutable, aislamiento de errores y gestión multihilo segura.",
          url: "https://github.com/Niko07ds/4.E.1-Ejercitacion-Ejercicio10",
        },
        {
          numero: "Observer / 4-E-2 / 01",
          etiqueta: "comportamiento",
          titulo: "Notificador de clic en botón de interfaz",
          descripcion:
            "Implementación básica del patrón Observer para notificar a múltiples manejadores cuando se produce un clic en un botón, manteniendo desacoplado el componente gráfico de sus receptores.",
          url: null,
        },
        {
          numero: "Observer / 4-E-2 / 02",
          etiqueta: "comportamiento",
          titulo: "Indicador de estado de conexión de red",
          descripcion:
            "Implementación de Observer para sincronizar automáticamente los indicadores visuales del estado de conexión, permitiendo que distintos componentes reaccionen a los cambios sin realizar consultas periódicas.",
          url: null,
        },
        {
          numero: "Observer / 4-E-2 / 03",
          etiqueta: "comportamiento",
          titulo: "Marcador de puntuación para videojuego sencillo",
          descripcion:
            "Implementación de Observer para distribuir las actualizaciones de puntuación hacia la interfaz del juego y el sistema de récords, evitando dependencias directas y permitiendo gestionar suscripciones dinámicamente.",
          url: null,
        },
        {
          numero: "Observer / 4-E-2 / 04",
          etiqueta: "comportamiento",
          titulo: "Sistema de alertas de precio en lista de deseos",
          descripcion:
            "Implementación de Observer para detectar reducciones en el precio de productos y notificar selectivamente a los canales suscritos, utilizando los porcentajes de descuento para procesar las alertas.",
          url: null,
        },
        {
          numero: "Observer / 4-E-2 / 05",
          etiqueta: "comportamiento",
          titulo: "Automatización de persianas según sensor de luz solar",
          descripcion:
            "Implementación de Observer para coordinar persianas motorizadas y luces interiores según las variaciones de luminosidad detectadas por un sensor, permitiendo incorporar nuevos dispositivos sin modificar el sujeto observable.",
          url: null,
        },
        {
          numero: "Observer / 4-E-2 / 06",
          etiqueta: "comportamiento",
          titulo: "Panel financiero de variación de divisas",
          descripcion:
            "Implementación de Observer para distribuir cotizaciones y variaciones porcentuales de divisas hacia múltiples herramientas financieras, contemplando una gestión segura de suscriptores ante modificaciones concurrentes.",
          url: null,
        },
        {
          numero: "Observer / 4-E-2 / 07",
          etiqueta: "comportamiento",
          titulo: "Sistema de suscripción a canales de video streaming",
          descripcion:
            "Implementación de Observer con suscripciones filtradas por canal, notificando únicamente a los seguidores correspondientes cuando un creador publica un nuevo video.",
          url: null,
        },
        {
          numero: "Observer / 4-E-2 / 08",
          etiqueta: "comportamiento",
          titulo: "Refactorización de código acoplado hacia bus de eventos",
          descripcion:
            "Refactorización de un sistema de inventario para reemplazar dependencias directas con módulos de facturación y estadísticas por observadores abstractos, aplicando desacoplamiento e inversión de control.",
          url: null,
        },
        {
          numero: "Observer / 4-E-2 / 09",
          etiqueta: "comportamiento",
          titulo: "Motor asíncrono de eventos para monitoreo de servidores",
          descripcion:
            "Implementación de un bus centralizado basado en Observer para distribuir alertas de infraestructura según su categoría, con suscripciones concurrentes, enrutamiento eficiente y aislamiento de errores.",
          url: null,
        },
        {
          numero: "Observer / 4-E-2 / 10",
          etiqueta: "comportamiento",
          titulo:
            "Sistema empresarial de cumplimiento normativo y auditoría de riesgos",
          descripcion:
            "Implementación de Observer para distribuir cambios en perfiles de riesgo hacia sistemas regulatorios, incorporando notificaciones controladas, auditoría inmutable, aislamiento de fallos y gestión multihilo segura.",
          url: null,
        },
      ],
    },

    // COMPUTACIÓN EN LA NUBE

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

  // 3. UTILIDADES

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

  // 4. OBTENER Y PREPARAR EJERCICIOS

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

  // 5. CREAR TARJETAS

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

  // 6. RENDERIZAR LAS MATERIAS

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

  // 7. ACTUALIZAR EL ENCABEZADO

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

  // 8. NAVEGACIÓN ENTRE SECCIONES

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

  // 9. SUBMENÚ DE DISEÑO DE SOFTWARE

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

  // 10. EVENTOS DE NAVEGACIÓN

  elementos.navegacion.forEach((boton) => {
    boton.addEventListener("click", () => {
      mostrarPanel(boton.dataset.target);
    });
  });

  // 11. INICIALIZACIÓN

  renderizarTodo();
  mostrarPanel("poo");
});
