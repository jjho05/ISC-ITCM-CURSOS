# 📹 Cómo Cambiar los Videos de YouTube

## Método Rápido (Recomendado)

### Paso 1: Obtener el ID del video de YouTube

Cuando tengas un video de YouTube, la URL se ve así:
```
https://www.youtube.com/watch?v=ABC123XYZ
```

El **ID del video** es la parte después de `v=`, en este caso: `ABC123XYZ`

### Paso 2: Abrir el archivo de videos

Abre el archivo: `semestre1/SCD1008.html`

### Paso 3: Buscar la sección de videos

Presiona `Cmd+F` (o `Ctrl+F` en Windows) y busca: `videosReales`

Verás algo así:

```javascript
const videosReales = {
    "1.1": "U706UJjRNIo", // Algoritmos - Fundamentos
    "1.2": "TI4v4Y8yO3o", // Diagramas de flujo
    "1.3": "yoBya3K3GVQ", // Diseño de algoritmos
    // ... más videos
};
```

### Paso 4: Reemplazar el ID

Simplemente cambia el ID del video que quieras. Por ejemplo:

**ANTES:**
```javascript
"1.1": "U706UJjRNIo", // Algoritmos - Fundamentos
```

**DESPUÉS (con tu video):**
```javascript
"1.1": "TU_VIDEO_ID_AQUI", // Algoritmos - Fundamentos
```

### Paso 5: Guardar y listo! 🎉

Guarda el archivo y recarga la página. ¡Tu video ya estará ahí!

---

## 📋 Lista de Temas para Reemplazar

Aquí están todos los temas que puedes personalizar:

### Unidad 1: Diseño Algorítmico
- `"1.1"` - Conceptos básicos
- `"1.2"` - Representación de algoritmos (diagramas de flujo)
- `"1.3"` - Diseño de algoritmos
- `"1.4"` - Diseño de funciones

### Unidad 2: Introducción a la Programación
- `"2.1"` - Conceptos básicos de programación
- `"2.2"` - Características del lenguaje
- `"2.3"` - Estructura básica de un programa
- `"2.4"` - Elementos del lenguaje (variables, tipos de datos)
- `"2.5"` - Traducción de un programa (compilación)

### Unidad 3: Control de Flujo
- `"3.1"` - Estructuras secuenciales
- `"3.2"` - Estructuras selectivas (if, else, switch)
- `"3.3"` - Estructuras iterativas (while, for, do-while)

### Unidad 4: Organización de Datos
- `"4.1"` - Introducción a arreglos
- `"4.2"` - Arreglos unidimensionales
- `"4.3"` - Arreglos multidimensionales (matrices)
- `"4.4"` - Estructuras o registros (struct)

### Unidad 5: Modularidad
- `"5.1"` - Declaración y uso de módulos (funciones)
- `"5.2"` - Paso de parámetros
- `"5.3"` - Implementación de funciones

---

## 💡 Ejemplo Completo

Digamos que tienes un video de YouTube sobre "Algoritmos" en esta URL:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

1. **Copias el ID**: `dQw4w9WgXcQ`
2. **Abres**: `semestre1/SCD1008.html`
3. **Buscas**: `videosReales`
4. **Cambias la línea**:
   ```javascript
   "1.1": "dQw4w9WgXcQ", // Algoritmos - Fundamentos
   ```
5. **Guardas** el archivo
6. **Recargas** la página en el navegador

¡Y listo! Tu video ya está integrado.

---

## 🎯 Tips Importantes

1. **Mantén las comillas**: Siempre deja el ID entre comillas `""`
2. **No cambies las claves**: Las claves como `"1.1"`, `"2.3"` deben quedarse igual
3. **Puedes cambiar los comentarios**: Los textos después de `//` son solo para ti
4. **Un video a la vez**: Puedes cambiar todos o solo algunos videos

---

## ❓ ¿Dónde está el archivo?

**Ruta completa:**
```
/Users/lic.ing.jesusolvera/Documents/PROYECTOS PERSONALES/ISC-ITCM-CURSOS/semestre1/SCD1008.html
```

**Línea aproximada:** Busca alrededor de la línea 703 (o busca `videosReales` con Cmd+F)

---

## 🚀 ¿Quieres agregar más cursos?

Si quieres crear más páginas de cursos (como para otras materias), solo:
1. Copia `semestre1/SCD1008.html`
2. Renómbralo (ejemplo: `SCD1020.html`)
3. Cambia el título y los videos
4. Actualiza el catálogo en `plan-de-estudios.html` para que apunte al nuevo archivo

¡Eso es todo! 🎉
