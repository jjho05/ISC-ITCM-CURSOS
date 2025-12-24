// Videos de YouTube organizados por materia
// Puedes usar el link completo o solo el ID del video

const videosPorMateria = {
    // ============================================
    // SCD1008 - Fundamentos de Programación
    // ============================================
    "SCD1008": {
        nombre: "Fundamentos de Programación",
        videos: {
            // Unidad 1: Diseño Algorítmico
            "1.1": "https://www.youtube.com/watch?v=f10jKIslSUY", // Algoritmos - Fundamentos (DesarrolloWeb.com)
            "1.2": "TI4v4Y8yO3o", // Diagramas de flujo
            "1.3": "yoBya3K3GVQ", // Diseño de algoritmos
            "1.4": "oFCAHWxLW0s", // Funciones

            // Unidad 2: Introducción a la Programación
            "2.1": "18eR44XET88", // Conceptos básicos programación
            "2.2": "yoBya3K3GVQ", // Lenguajes de programación
            "2.3": "zSfzXY7S5vg", // Estructura programa C++
            "2.4": "mGPmRXGbxms", // Variables y tipos de datos
            "2.5": "Pu7sKNfmn8k", // Compilación

            // Unidad 3: Control de Flujo
            "3.1": "cWH0HVrVPug", // Estructuras secuenciales
            "3.2": "CPE_lYGCGpk", // If, else, switch
            "3.3": "Pu7sKNfmn8k", // Ciclos while, for

            // Unidad 4: Organización de datos
            "4.1": "7LreTHQou1k", // Arreglos
            "4.2": "lRKPsg84KbQ", // Arreglos unidimensionales
            "4.3": "2YnFdKVqw1Q", // Matrices
            "4.4": "1-FP-9gKH5k", // Estructuras

            // Unidad 5: Modularidad
            "5.1": "oFCAHWxLW0s", // Funciones
            "5.2": "manfQPeqwTo", // Paso de parámetros
            "5.3": "Z7_nMTHQGo8"  // Implementación
        }
    },

    // ============================================
    // SCD1020 - Programación Orientada a Objetos
    // ============================================
    "SCD1020": {
        nombre: "Programación Orientada a Objetos",
        videos: {
            // Aquí pondrías los videos de POO cuando los tengas
            "1.1": "VIDEO_ID_AQUI",
            "1.2": "VIDEO_ID_AQUI",
            // ... etc
        }
    },

    // ============================================
    // AED1026 - Estructura de Datos
    // ============================================
    "AED1026": {
        nombre: "Estructura de Datos",
        videos: {
            // Aquí pondrías los videos de Estructura de Datos
            "1.1": "VIDEO_ID_AQUI",
            "1.2": "VIDEO_ID_AQUI",
            // ... etc
        }
    }

    // Puedes agregar más materias aquí siguiendo el mismo formato
};

// Función para extraer el ID del video (acepta link completo o solo ID)
function extraerVideoID(urlOId) {
    if (!urlOId) return null;

    // Si ya es solo el ID (no tiene http), regresarlo directamente
    if (!urlOId.includes('http')) {
        return urlOId;
    }

    // Extraer ID de diferentes formatos de YouTube
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/,
        /^([a-zA-Z0-9_-]{11})$/
    ];

    for (const pattern of patterns) {
        const match = urlOId.match(pattern);
        if (match) return match[1];
    }

    return urlOId; // Si no coincide con ningún patrón, regresar tal cual
}

// Función para obtener videos de una materia específica
function obtenerVideosMateria(codigoMateria) {
    const materia = videosPorMateria[codigoMateria];
    if (!materia) return null;

    // Convertir todos los videos a IDs puros
    const videosConIDs = {};
    for (const [tema, urlOId] of Object.entries(materia.videos)) {
        videosConIDs[tema] = extraerVideoID(urlOId);
    }

    return {
        nombre: materia.nombre,
        videos: videosConIDs
    };
}

// Exportar para uso en la página
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { videosPorMateria, extraerVideoID, obtenerVideosMateria };
}
