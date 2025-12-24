# ISC-ITCM Cursos

Plataforma de cursos en línea de Ingeniería en Sistemas Computacionales del ITCM. Videos, tutoriales y recursos organizados por materia.

## 🚀 Características

- **Cursos por Semestre**: 9 semestres completos con videos organizados por unidad
- **Tutoriales Técnicos**: Git, Docker, React, Python, Monday.com y más
- **Banco de Ideas**: Sistema completo para proponer y desarrollar proyectos
- **Sistema Q&A**: Preguntas y respuestas por curso
- **Estadísticas**: Métricas de uso y videos más vistos
- **Diseño Responsive**: Optimizado para todos los dispositivos

## 📁 Estructura del Proyecto

```
ISC-ITCM-CURSOS/
├── index.html              # Landing page
├── plan-de-estudios.html   # Catálogo de cursos
├── tutoriales.html         # Catálogo de tutoriales
├── semestre1/              # Cursos del semestre 1
├── semestre2/              # Cursos del semestre 2
├── ...                     # Semestres 3-9
├── tutoriales/             # Tutoriales técnicos
│   ├── monday.html         # Tutorial Monday.com
│   ├── git.html            # Tutorial Git (placeholder)
│   └── ...                 # Más tutoriales
├── banco-ideas/            # Sistema de banco de ideas
├── components/             # Componentes reutilizables
├── css/                    # Estilos
├── js/                     # JavaScript
└── assets/                 # Recursos estáticos
```

## 🎓 Cursos Disponibles

### Por Semestre
- **Semestre 1**: Fundamentos de Programación, Cálculo Diferencial, Matemáticas Discretas, etc.
- **Semestre 2**: POO, Cálculo Integral, Álgebra Lineal, Probabilidad y Estadística
- **Semestre 3**: Estructura de Datos, Cálculo Vectorial, Física General
- **Semestre 4**: Tópicos Avanzados de Programación, Bases de Datos, Ecuaciones Diferenciales
- **Semestre 5**: Graficación, Telecomunicaciones, Sistemas Operativos
- **Semestre 6**: Lenguajes y Autómatas I, Redes, Ingeniería de Software
- **Semestre 7**: Lenguajes y Autómatas II, Gestión de Proyectos de Software
- **Semestre 8**: Programación Lógica y Funcional, Programación Web
- **Semestre 9**: Inteligencia Artificial

## 💻 Tutoriales Técnicos

- 📊 **Monday.com**: Gestión de proyectos
- 🔀 **Git y GitHub**: Control de versiones
- 🐳 **Docker**: Contenedores
- ⚛️ **React**: Desarrollo web
- 🐍 **Python**: Programación
- 🟢 **Node.js**: Backend
- 🗄️ **SQL**: Bases de datos
- 🐧 **Linux**: Sistema operativo
- 📜 **JavaScript**: Programación web

## 🛠️ Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Estilos**: Tailwind CSS (CDN)
- **Videos**: YouTube embebido
- **Backend**: FormSubmit.co para notificaciones
- **Hosting**: GitHub Pages compatible

## 🚀 Instalación y Uso

1. **Clonar el repositorio**:
```bash
git clone https://github.com/jjho05/ISC-ITCM-CURSOS.git
cd ISC-ITCM-CURSOS
```

2. **Abrir con Live Server**:
   - Usa la extensión Live Server de VS Code
   - O ejecuta: `python server.py` (servidor incluido)

3. **Navegar**:
   - Abre `index.html` en tu navegador
   - Explora cursos, tutoriales y banco de ideas

## 📚 Agregar Contenido

### Agregar Videos a un Curso
Edita `js/videos-por-materia.js`:
```javascript
const videosMateria = {
    "SCD1008": {
        nombre: "Fundamentos de Programación",
        videos: {
            "1.1": "ID_VIDEO_YOUTUBE",
            "1.2": "ID_VIDEO_YOUTUBE",
            // ...
        }
    }
};
```

### Agregar un Tutorial
1. Crea `tutoriales/nombre-tutorial.html`
2. Agrega a la lista en `tutoriales.html`:
```javascript
{ nombre: "Tutorial", categoria: "Categoría", nivel: "Básico", temas: 1, link: "tutoriales/nombre.html", icono: "🎯" }
```

Ver documentación completa en:
- `COMO-AGREGAR-VIDEOS.md`
- `COMO-CAMBIAR-VIDEOS.md`
- `ESCALABILIDAD.md`

## 💡 Banco de Ideas

Sistema completo para:
- Proponer ideas de proyectos
- Revisar y aprobar ideas (admin)
- Adoptar ideas para desarrollar
- Gestionar equipos y seguimiento

## 📊 Características de los Cursos

Cada curso incluye:
- ✅ Videos organizados por unidad y tema
- ✅ Descripción y competencias
- ✅ Sistema de Q&A
- ✅ Recursos y bibliografía
- ✅ Estadísticas de uso

## 🌐 Demo

Visita: [https://jjho05.github.io/ISC-ITCM-CURSOS](https://jjho05.github.io/ISC-ITCM-CURSOS)

## 👨‍💻 Autor

**Jesús Olvera**
- GitHub: [@jjho05](https://github.com/jjho05)
- Email: jjho.reivaj05@gmail.com

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**Instituto Tecnológico de Ciudad Madero**  
Ingeniería en Sistemas Computacionales  
© 2025
