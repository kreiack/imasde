# 🏛️ PIGEM Website

**Plataforma Integrada para la Gestión de Evacuaciones Masivas**

Un sitio web moderno y accesible que presenta el proyecto de investigación PIGEM, dirigido por Pablo Antonio Jordán González como parte de su programa doctoral en Ciencias de la Ingeniería Mención Informática en la Universidad de Santiago de Chile.

---

## 📋 Tabla de Contenidos

- [🎯 Descripción del Proyecto](#-descripción-del-proyecto)
- [✨ Características Principales](#-características-principales)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [📱 Responsividad y Accesibilidad](#-responsividad-y-accesibilidad)
- [🚀 Cómo Ejecutar](#-cómo-ejecutar)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎨 Guía de Estilo](#-guía-de-estilo)
- [♿ Características de Accesibilidad](#-características-de-accesibilidad)
- [🔧 Mejoras Realizadas](#-mejoras-realizadas)
- [🐛 Solución de Problemas](#-solución-de-problemas)
- [📄 Licencia](#-licencia)

---

## 🎯 Descripción del Proyecto

PIGEM es una iniciativa de investigación que busca desarrollar un motor computacional de alto rendimiento para la simulación de evacuaciones masivas en escenarios de riesgo complejos y multiamenaza. Este sitio web presenta:

- **El Problema**: Los desafíos actuales en la gestión del riesgo de desastres en Chile
- **Análisis de Soluciones**: Comparativa con herramientas existentes en el mercado
- **Nuestra Solución**: El enfoque innovador híbrido ABM-DES propuesto
- **Metodología**: Las fases de investigación y desarrollo del proyecto
- **Equipo**: Los investigadores y colaboradores involucrados

---

## ✨ Características Principales

### 🎨 **Diseño y Experiencia de Usuario**
- ✅ Diseño moderno y profesional con tipografía cuidada
- ✅ Paleta de colores coherente con identidad académica
- ✅ Animaciones suaves y micro-interacciones
- ✅ Navegación intuitiva con breadcrumbs visuales

### 📱 **Responsividad Completa**
- ✅ Diseño adaptativo para móviles, tablets y desktop
- ✅ Menú hamburguesa funcional para dispositivos móviles
- ✅ Grids flexibles que se adaptan a cualquier pantalla
- ✅ Tipografía escalable y legible en todos los dispositivos

### 🔧 **Funcionalidades Avanzadas**
- ✅ Sistema de tabs interactivo en la página de soluciones
- ✅ Diagramas Mermaid integrados con fallbacks
- ✅ Animaciones de scroll con Intersection Observer
- ✅ Navegación por teclado completa

### ♿ **Accesibilidad (WCAG 2.1)**
- ✅ Estructura semántica HTML5 completa
- ✅ Atributos ARIA implementados
- ✅ Enlaces de salto para lectores de pantalla
- ✅ Contraste de colores optimizado
- ✅ Navegación por teclado en todos los elementos

---

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Grid y Flexbox
- **JavaScript (ES6+)** - Interactividad y funcionalidades
- **Mermaid.js** - Diagramas y visualizaciones

### **Tipografías**
- **Source Serif 4** - Títulos y elementos destacados
- **Lato** - Texto body y elementos UI

### **Herramientas de Desarrollo**
- Variables CSS personalizadas para tema coherente
- Intersection Observer API para animaciones de performance
- CSS Grid y Flexbox para layouts modernos
- Media queries para responsividad completa

---

## 📱 Responsividad y Accesibilidad

### **Breakpoints Responsivos**
```css
/* Desktop: 1024px+ */
/* Tablet: 768px - 1023px */
/* Mobile: 480px - 767px */
/* Small Mobile: < 480px */
```

### **Características de Accesibilidad**
- 🎯 **ARIA Labels**: Todos los elementos interactivos etiquetados
- ⌨️ **Navegación por Teclado**: Tab order lógico y focus visible
- 📱 **Screen Reader Support**: Enlaces de salto y contenido alternativo
- 🎨 **Alto Contraste**: Cumple con WCAG AA (4.5:1 ratio)
- 🔊 **Audio Cues**: Feedback sonoro para acciones importantes

---

## 🚀 Cómo Ejecutar

### **Opción 1: Servidor Local Simple**
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

### **Opción 2: Live Server (Recomendado para desarrollo)**
```bash
# Instalar Live Server globalmente
npm install -g live-server

# Ejecutar en el directorio del proyecto
live-server
```

### **Opción 3: Extensión de VS Code**
Instalar la extensión "Live Server" y hacer clic derecho en `index.html` → "Open with Live Server"

---

## 📁 Estructura del Proyecto

```
pigem-website/
├── 📄 index.html                    # Página principal
├── 📄 problema.html                 # Identificación del problema
├── 📄 soluciones-existentes.html    # Análisis comparativo
├── 📄 nuestra-solucion.html         # Propuesta PIGEM
├── 📄 metodologia.html              # Metodología de investigación
├── 📄 equipo.html                   # Equipo de investigación
├── 📄 README.md                     # Documentación del proyecto
├── 📁 css/
│   └── 📄 style.css                 # Estilos principales optimizados
├── 📁 js/
│   └── 📄 main.js                   # Funcionalidades interactivas
└── 📁 assets/                       # Recursos (vacío - futuras imágenes)
```

---

## 🎨 Guía de Estilo

### **Paleta de Colores**
```css
--primary-color: #0D2A47      /* Azul institucional profundo */
--secondary-color: #4A7A8C    /* Teal suave */
--accent-color: #F5A623       /* Amarillo dorado */
--background-light: #F7F9FC   /* Gris muy claro */
--text-primary: #2D3748       /* Gris oscuro para texto */
--text-secondary: #718096     /* Gris medio para texto secundario */
```

### **Tipografías**
```css
--font-heading: 'Source Serif 4', serif    /* Títulos */
--font-body: 'Lato', sans-serif            /* Texto general */
```

### **Espaciado y Medidas**
```css
--border-radius: 8px          /* Radio de borde estándar */
--shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05)  /* Sombra sutil */
--shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.08) /* Sombra media */
--transition-base: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) /* Transición estándar */
```

---

## ♿ Características de Accesibilidad

### **Implementaciones WCAG 2.1**

- ✅ **Estructura Semántica**: Uso correcto de elementos HTML5
- ✅ **Atributos ARIA**: Labels, roles y states implementados
- ✅ **Navegación por Teclado**: Tab order lógico y focus management
- ✅ **Enlaces de Salto**: Skip links para navegación rápida
- ✅ **Contraste**: Todos los elementos cumplen ratio 4.5:1 (AA)
- ✅ **Texto Alternativo**: Descripciones para elementos no textuales
- ✅ **Estados de Focus**: Indicadores visuales claros
- ✅ **Responsive Design**: Funcional en todos los dispositivos

### **Navegación por Teclado**
```
Tab          → Navegación hacia adelante
Shift + Tab  → Navegación hacia atrás
Enter/Space  → Activar elemento seleccionado
Escape       → Cerrar menú móvil o modales
Arrow Keys   → Navegación en tabs (página soluciones)
```

---

## 🔧 Mejoras Realizadas

### **✅ Problemas Solucionados**

1. **🚨 Archivos Faltantes**
   - ✅ Creada página `metodologia.html` completa
   - ✅ Creada página `equipo.html` con información del equipo
   - ✅ Enlaces de navegación ahora funcionan correctamente

2. **📱 Menú Móvil**
   - ✅ Implementado menú hamburguesa funcional
   - ✅ Animaciones suaves de apertura/cierre
   - ✅ Cierre automático al hacer clic en enlaces
   - ✅ Prevención de scroll cuando está abierto

3. **🎨 Mejoras Estéticas**
   - ✅ Paleta de colores refinada y coherente
   - ✅ Tipografía mejorada con jerarquía clara
   - ✅ Animaciones de hover y micro-interacciones
   - ✅ Gradientes y efectos visuales modernos

4. **📊 Diagramas Mermaid**
   - ✅ Manejo de errores robusto
   - ✅ Fallbacks cuando no hay conexión
   - ✅ Re-inicialización en cambio de tabs
   - ✅ Temas personalizados coherentes

5. **⚡ Optimizaciones de Rendimiento**
   - ✅ Lazy loading para imágenes
   - ✅ Debounced resize handlers
   - ✅ Intersection Observer optimizado
   - ✅ CSS optimizado con variables

6. **♿ Accesibilidad Completa**
   - ✅ ARIA labels en todos los elementos
   - ✅ Navegación por teclado completa
   - ✅ Enlaces de salto para screen readers
   - ✅ Estados de focus visibles

### **🆕 Funcionalidades Añadidas**

- 🎯 **Sistema de Tabs Avanzado**: Navegación por teclado incluida
- 📱 **Menú Responsivo**: Funcional en todos los dispositivos
- 🎨 **Animaciones de Scroll**: Con staggered effects
- 📊 **Tablas Interactivas**: Con navegación por teclado
- 🖨️ **Optimización para Impresión**: Layout adaptado
- ⚡ **Service Worker Ready**: Preparado para offline

---

## 🐛 Solución de Problemas

### **📊 Problema: Diagramas Mermaid no se cargan**
```javascript
// El sitio incluye fallbacks automáticos
// Si hay problemas de conexión, se muestra:
"📊 Diagrama no disponible - Los diagramas se cargarán cuando la conexión esté disponible"
```

### **📱 Problema: Menú móvil no funciona**
```javascript
// Verificar que el JavaScript esté cargando:
console.log('🚀 PIGEM Website Initialized'); // Debe aparecer en consola
```

### **🎨 Problema: Estilos no se aplican**
```html
<!-- Verificar que el CSS esté linkeado correctamente -->
<link rel="stylesheet" href="css/style.css">
```

### **⚡ Problema: Animaciones lentas**
```css
/* Las animaciones respetan prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

---

## 📄 Licencia

Este proyecto es parte de la investigación doctoral de Pablo Antonio Jordán González en la Universidad de Santiago de Chile.

**Financiado por ANID** | **Director I+D HealthPixel Spa**

### **Uso Académico**
- ✅ Permitido citar y referenciar con atribución
- ✅ Permitido usar como base para proyectos académicos
- ✅ Permitido adaptar para contextos educativos

### **Uso Comercial**
- ❌ Requiere autorización expresa del autor
- ❌ No permitido sin consentimiento escrito

---

## 📞 Contacto

**Pablo Antonio Jordán González**
- 🎓 Estudiante Doctorado Ciencias de la Ingeniería Mención Informática
- 🏛️ Universidad Santiago de Chile
- 🏢 Director de I+D HealthPixel Spa

---

## 🙏 Agradecimientos

- **ANID** - Financiamiento del proyecto de investigación
- **Universidad de Santiago de Chile** - Apoyo institucional
- **CITIAPS** - Centro de investigación y desarrollo
- **Municipalidades colaboradoras** - Valparaíso y Talcahuano
- **SENAPRED** - Validación técnica y transferencia

---

*Desarrollado con ❤️ para hacer la gestión de riesgos más accesible y efectiva en Chile* 