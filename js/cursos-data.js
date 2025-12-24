// Base de datos de cursos ISC-ITCM
// Estructura de datos para todos los cursos de la carrera

const cursosData = {
    "SCD1008": {
        clave: "SCD1008",
        nombre: "Fundamentos de Programación",
        creditos: [2, 3, 5],
        semestre: 1,
        area: "Programación",
        descripcionCorta: "Aprende los conceptos básicos de programación y diseño de algoritmos.",
        descripcionLarga: "Esta asignatura aporta al perfil del egresado, la capacidad para desarrollar un pensamiento lógico a través del diseño de algoritmos utilizando herramientas de programación para el desarrollo de aplicaciones computacionales que resuelvan problemas reales.",
        competenciaGeneral: "Aplica algoritmos y lenguajes de programación para diseñar e implementar soluciones a problemáticas del entorno.",
        duracionTotal: "240min",
        numeroUnidades: 5,
        unidades: [
            {
                numero: 1,
                nombre: "Diseño Algorítmico",
                competencia: "Comprende y aplica los conceptos básicos, nomenclatura y herramientas para el diseño de algoritmos orientado a la resolución de problemas.",
                temas: [
                    {
                        id: "1.1",
                        nombre: "Conceptos básicos",
                        duracion: "15min",
                        videoId: "dQw4w9WgXcQ", // Placeholder - usuario lo reemplazará
                        descripcion: "Introducción a los conceptos fundamentales de algoritmos y programación."
                    },
                    {
                        id: "1.2",
                        nombre: "Representación de algoritmos: gráfica y pseudocódigo",
                        duracion: "20min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Aprende a representar algoritmos mediante diagramas de flujo y pseudocódigo."
                    },
                    {
                        id: "1.3",
                        nombre: "Diseño de algoritmos",
                        duracion: "25min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Técnicas y metodologías para diseñar algoritmos eficientes."
                    },
                    {
                        id: "1.4",
                        nombre: "Diseño de funciones",
                        duracion: "18min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Cómo diseñar y estructurar funciones reutilizables."
                    }
                ]
            },
            {
                numero: 2,
                nombre: "Introducción a la Programación",
                competencia: "Conoce y aplica un lenguaje de programación para la resolución de problemas.",
                temas: [
                    {
                        id: "2.1",
                        nombre: "Conceptos básicos",
                        duracion: "12min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Fundamentos de la programación y lenguajes de programación."
                    },
                    {
                        id: "2.2",
                        nombre: "Características del lenguaje de programación",
                        duracion: "15min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Características principales de los lenguajes de programación modernos."
                    },
                    {
                        id: "2.3",
                        nombre: "Estructura básica de un programa",
                        duracion: "18min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Componentes esenciales de un programa de computadora."
                    },
                    {
                        id: "2.4",
                        nombre: "Elementos del lenguaje: tipos de datos, literales, constantes, variables",
                        duracion: "22min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Tipos de datos, variables, constantes y operadores."
                    },
                    {
                        id: "2.5",
                        nombre: "Traducción de un programa: compilación, enlace, ejecución",
                        duracion: "16min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Proceso de compilación y ejecución de programas."
                    }
                ]
            },
            {
                numero: 3,
                nombre: "Control de Flujo",
                competencia: "Conoce y aplica las estructuras condicionales y repetitivas de un lenguaje de programación para resolver problemas reales.",
                temas: [
                    {
                        id: "3.1",
                        nombre: "Estructuras secuenciales",
                        duracion: "14min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Programación secuencial y flujo de ejecución lineal."
                    },
                    {
                        id: "3.2",
                        nombre: "Estructuras selectivas: simple, doble y múltiple",
                        duracion: "20min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Condicionales if, if-else, switch y toma de decisiones."
                    },
                    {
                        id: "3.3",
                        nombre: "Estructuras iterativas: repetir mientras, hasta, desde",
                        duracion: "25min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Ciclos while, do-while, for y estructuras repetitivas."
                    }
                ]
            },
            {
                numero: 4,
                nombre: "Organización de datos",
                competencia: "Conoce y aplica estructuras de datos en un lenguaje de programación que permitan la organización de datos en la resolución de problemas reales.",
                temas: [
                    {
                        id: "4.1",
                        nombre: "Arreglos",
                        duracion: "16min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Introducción a los arreglos y su uso en programación."
                    },
                    {
                        id: "4.2",
                        nombre: "Unidimensionales: conceptos básicos, operaciones y aplicaciones",
                        duracion: "22min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Arreglos de una dimensión, operaciones y aplicaciones prácticas."
                    },
                    {
                        id: "4.3",
                        nombre: "Multidimensionales: conceptos básicos, operaciones y aplicaciones",
                        duracion: "24min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Matrices y arreglos multidimensionales."
                    },
                    {
                        id: "4.4",
                        nombre: "Estructuras o registros",
                        duracion: "18min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Estructuras de datos compuestas y registros."
                    }
                ]
            },
            {
                numero: 5,
                nombre: "Modularidad",
                competencia: "Conoce y aplica la modularidad en el desarrollo de programas para la optimización de los mismos y reutilización de código.",
                temas: [
                    {
                        id: "5.1",
                        nombre: "Declaración y uso de módulos",
                        duracion: "15min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Creación y uso de módulos en programación."
                    },
                    {
                        id: "5.2",
                        nombre: "Paso de parámetros o argumentos",
                        duracion: "20min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Paso de parámetros por valor y por referencia."
                    },
                    {
                        id: "5.3",
                        nombre: "Implementación",
                        duracion: "22min",
                        videoId: "dQw4w9WgXcQ", // Placeholder
                        descripcion: "Implementación práctica de programas modulares."
                    }
                ]
            }
        ],
        recursos: [
            {
                tipo: "libro",
                titulo: "Deitel, P. & Deitel, H. (2008). Como Programar en C++",
                editorial: "Pearson Prentice Hall"
            },
            {
                tipo: "libro",
                titulo: "Joyanes, L. (2008). Fundamentos de programación: algoritmos, estructura de datos y objetos",
                editorial: "McGraw-Hill"
            },
            {
                tipo: "libro",
                titulo: "Cairo, O. (2005). Metodología de la Programación, Algoritmos Diagrama de Flujo y Programas",
                editorial: "Alfaomega"
            },
            {
                tipo: "software",
                titulo: "Code::Blocks",
                descripcion: "Entorno de Desarrollo Integrado (IDE)"
            },
            {
                tipo: "software",
                titulo: "Dev-C++",
                descripcion: "IDE para C/C++"
            }
        ]
    }
    // Más cursos se pueden agregar aquí siguiendo la misma estructura
};

// Función para obtener todos los cursos
function obtenerTodosCursos() {
    return Object.values(cursosData);
}

// Función para obtener un curso por clave
function obtenerCursoPorClave(clave) {
    return cursosData[clave] || null;
}

// Función para filtrar cursos por semestre
function filtrarPorSemestre(semestre) {
    return Object.values(cursosData).filter(curso => curso.semestre === semestre);
}

// Función para filtrar cursos por área
function filtrarPorArea(area) {
    return Object.values(cursosData).filter(curso => curso.area === area);
}

// Función para buscar cursos por nombre
function buscarCursos(termino) {
    const terminoLower = termino.toLowerCase();
    return Object.values(cursosData).filter(curso =>
        curso.nombre.toLowerCase().includes(terminoLower) ||
        curso.clave.toLowerCase().includes(terminoLower)
    );
}
