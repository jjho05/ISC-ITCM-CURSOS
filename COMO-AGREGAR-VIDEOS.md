# 📹 Cómo Agregar Videos por Materia

## 🎯 Estructura Mejorada

Ahora los videos están organizados por materia en el archivo `js/videos-por-materia.js`

## ✨ Ventajas del Nuevo Sistema

1. **Más organizado**: Cada materia tiene su propia sección
2. **Acepta links completos**: Puedes pegar el link completo de YouTube
3. **También acepta IDs**: Si prefieres, puedes poner solo el ID
4. **Fácil de expandir**: Agregar nuevas materias es muy simple

---

## 📝 Cómo Agregar Videos

### Opción 1: Con Link Completo (MÁS FÁCIL)

```javascript
"SCD1008": {
    nombre: "Fundamentos de Programación",
    videos: {
        "1.1": "https://www.youtube.com/watch?v=f10jKIslSUY",
        "1.2": "https://youtu.be/TI4v4Y8yO3o",
        "1.3": "https://www.youtube.com/watch?v=yoBya3K3GVQ"
    }
}
```

### Opción 2: Solo con el ID

```javascript
"SCD1008": {
    nombre: "Fundamentos de Programación",
    videos: {
        "1.1": "f10jKIslSUY",
        "1.2": "TI4v4Y8yO3o",
        "1.3": "yoBya3K3GVQ"
    }
}
```

### ¡Puedes mezclar ambos!

```javascript
"SCD1008": {
    nombre: "Fundamentos de Programación",
    videos: {
        "1.1": "https://www.youtube.com/watch?v=f10jKIslSUY", // Link completo
        "1.2": "TI4v4Y8yO3o",                                  // Solo ID
        "1.3": "https://youtu.be/yoBya3K3GVQ"                  // Link corto
    }
}
```

---

## 🆕 Cómo Agregar una Nueva Materia

1. **Abre el archivo**: `js/videos-por-materia.js`

2. **Agrega tu materia** después de las existentes:

```javascript
// ============================================
// SCD1027 - Tópicos Avanzados de Programación
// ============================================
"SCD1027": {
    nombre: "Tópicos Avanzados de Programación",
    videos: {
        // Unidad 1
        "1.1": "https://www.youtube.com/watch?v=TU_VIDEO_AQUI",
        "1.2": "TU_VIDEO_ID_AQUI",
        
        // Unidad 2
        "2.1": "https://www.youtube.com/watch?v=OTRO_VIDEO",
        "2.2": "OTRO_ID",
        
        // ... más temas
    }
},
```

3. **No olvides la coma** después del `}` (excepto en la última materia)

---

## 📋 Ejemplo Completo

```javascript
const videosPorMateria = {
    "SCD1008": {
        nombre: "Fundamentos de Programación",
        videos: {
            "1.1": "https://www.youtube.com/watch?v=f10jKIslSUY",
            "1.2": "TI4v4Y8yO3o",
            "2.1": "https://youtu.be/18eR44XET88"
        }
    },
    
    "SCD1020": {
        nombre: "Programación Orientada a Objetos",
        videos: {
            "1.1": "https://www.youtube.com/watch?v=MI_VIDEO",
            "1.2": "OTRO_ID"
        }
    }
};
```

---

## 🔧 Formatos de YouTube Aceptados

El sistema reconoce automáticamente estos formatos:

- ✅ `https://www.youtube.com/watch?v=ABC123`
- ✅ `https://youtu.be/ABC123`
- ✅ `https://www.youtube.com/embed/ABC123`
- ✅ `ABC123` (solo el ID)

---

## 💡 Tips

1. **Copia y pega**: Simplemente copia el link del navegador y pégalo
2. **Comentarios útiles**: Usa `//` para agregar notas sobre cada video
3. **Organización**: Agrupa por unidades para mayor claridad
4. **Nombres descriptivos**: Usa nombres claros para cada tema

---

## ⚠️ Importante

- Siempre usa comillas dobles `"` para los valores
- No olvides las comas `,` entre elementos
- El último elemento de cada sección NO lleva coma
- Mantén la estructura de llaves `{ }` correctamente

---

## 🚀 Próximos Pasos

1. Abre `js/videos-por-materia.js`
2. Encuentra tu materia (ej: `"SCD1008"`)
3. Pega tus links de YouTube
4. Guarda el archivo
5. Recarga la página

¡Eso es todo! 🎉
