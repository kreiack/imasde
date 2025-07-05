# PIGEM - Plataforma Integral de Gestión de Evacuaciones Multiamenaza

## 🎯 ¿Qué es este proyecto?

Este es el repositorio del proyecto PIGEM, una plataforma que estamos desarrollando para simular evacuaciones masivas en Chile. La idea es crear un sistema que combine simulación de comportamiento humano (ABM) con simulación de recursos limitados (DES) para ayudar a planificar evacuaciones reales.

### 🚨 Problema que resolvemos

Los sistemas actuales de gestión de evacuaciones tienen problemas serios:
- **Cada institución tiene su propio sistema** → No se comunican entre sí
- **Los planes son estáticos** → No se adaptan a condiciones cambiantes
- **Las simulaciones son muy básicas** → No manejan más de 10,000 personas
- **Las herramientas comerciales son carísimas** → Los municipios no pueden pagarlas

### 💡 Nuestra solución

Estamos creando una plataforma que:
- **Simula hasta 1 millón de personas** evacuando al mismo tiempo
- **Combina comportamiento humano + recursos limitados** (híbrido ABM-DES)
- **Se conecta con sistemas existentes** (SENAPRED, SHOA, etc.)
- **Es código abierto** → Gratis para todos los municipios
- **Funciona en tiempo real** → Resultados en menos de 30 minutos

## 🔧 Qué estamos construyendo

### Componentes principales:

1. **Motor de simulación híbrido ABM-DES**
   - Modela personas como agentes con comportamiento real
   - Simula recursos limitados (buses, rutas, albergues)
   - Optimizado para GPU/CPU paralelo

2. **Sistema de integración de datos**
   - Unifica datos de múltiples fuentes
   - Formato estándar ISO 19115/19139
   - APIs para conectar con sistemas existentes

3. **Interfaces adaptativas**
   - Diferentes vistas para cada tipo de usuario
   - Mapas interactivos en tiempo real
   - Dashboards personalizados

4. **Marco de validación**
   - Protocolo para validar que las simulaciones son correctas
   - Comparación con datos reales
   - Métricas de confiabilidad

## 📁 Estructura del proyecto

```
investigacionydesarrollo/
├── README.md                           # Este archivo
├── new/                               # Documentos actualizados
│   ├── formulario2.md                 # Documento principal del proyecto
│   ├── formulario2_descripcion.md     # Resumen ejecutivo
│   ├── arquitectura_sistema_pigem.md  # Diseño técnico del sistema
│   ├── modelo_simulacion_hibrida.md   # Cómo funciona el motor ABM-DES
│   ├── integracion_datos_mcu.md       # Sistema de datos unificado
│   ├── interfaces_visualizacion_adaptativas.md  # Diseño de interfaces
│   ├── estrategia_paralelismo_hpc.md  # Optimización computacional
│   ├── marco_validacion_fmvse.md      # Protocolo de validación
│   ├── simulacion_capacidad_hospitalaria.md # Simulación de red sanitaria
│   └── docx/                          # Versiones en Word
└── Formulacion-ID25_v3.docx.md       # Versión original (legacy)
```

## 🛠️ Stack tecnológico

### Backend (simulación y datos)
- **C++ + CUDA** → Simulación masiva en GPU
- **Python + FastAPI** → APIs y servicios web
- **PostgreSQL + PostGIS** → Base de datos geoespacial
- **Redis** → Cache y datos en tiempo real

### Frontend (interfaces)
- **React 18 + TypeScript** → Interfaz web moderna
- **Mapbox GL JS** → Mapas interactivos
- **D3.js** → Visualizaciones de datos
- **Material-UI** → Componentes de interfaz

### Infraestructura
- **Docker + Kubernetes** → Contenedores y orquestación
- **AWS/Azure** → Cloud híbrido
- **GitHub Actions** → CI/CD automatizado

## 📊 Objetivos técnicos

| **Métrica** | **Objetivo** | **Estado actual** |
|-------------|--------------|-------------------|
| Agentes simulados | 1,000,000 | En desarrollo |
| Tiempo de simulación | < 30 minutos | En desarrollo |
| Precisión vs datos reales | > 85% | En validación |
| Municipios usando | 50+ | Piloto planificado |
| Puntaje de usabilidad | > 80/100 | En testing |

## 🏗️ Estado actual del proyecto

### ✅ Completado
- [x] Documentación técnica completa
- [x] Diseño de arquitectura del sistema
- [x] Metodología de validación (FMVSE)
- [x] Casos de estudio identificados
- [x] Equipo multidisciplinario formado

### 🔄 En desarrollo
- [ ] Prototipo del motor ABM-DES
- [ ] Sistema de integración de datos
- [ ] Interfaces de usuario básicas
- [ ] Pruebas de rendimiento

### 📋 Por hacer
- [ ] Implementación completa del motor
- [ ] Validación con datos reales
- [ ] Pruebas con usuarios finales
- [ ] Despliegue en municipalidades piloto

## 🧪 Casos de estudio

Estamos validando con estos casos reales:
- **Tsunami Iquique 2014** → Validación de modelos de tsunami
- **Sismo Illapel 2015** → Comportamiento en sismos grandes
- **Incendio Valparaíso 2014** → Evacuación por incendios
- **Simulacros SENAPRED** → Datos de evacuaciones controladas

## 👥 Equipo

### Investigadores principales
- **Pablo Jordán** → Director, especialista en simulación
- **María Silva** → Interfaces y experiencia de usuario
- **Carlos Martínez** → Algoritmos paralelos y HPC
- **Elena Rodríguez** → Sistemas de información geográfica

### Colaboradores
- **SENAPRED** → Validación operacional
- **Municipalidades** → Casos de uso reales
- **SHOA** → Datos de tsunami
- **SERNAGEOMIN** → Datos geológicos

## 📈 Próximos pasos

### Corto plazo (3 meses)
1. Terminar el prototipo del motor ABM-DES
2. Implementar la integración básica de datos
3. Crear interfaces de usuario mínimas
4. Hacer pruebas de rendimiento iniciales

### Mediano plazo (6 meses)
1. Validar con datos reales de Valparaíso
2. Optimizar para procesamiento paralelo
3. Integrar con sistemas de SENAPRED
4. Hacer pruebas con usuarios finales

### Largo plazo (12 meses)
1. Desplegar en municipalidades piloto
2. Capacitar usuarios finales
3. Expandir a más ciudades
4. Preparar para transferencia tecnológica

## 🔗 Documentos importantes

### Para entender el proyecto
- **[Formulario2](new/formulario2.md)** → Documento completo del proyecto
- **[Descripción](new/formulario2_descripcion.md)** → Resumen ejecutivo

### Para desarrollo técnico
- **[Arquitectura](new/arquitectura_sistema_pigem.md)** → Diseño del sistema
- **[Simulación](new/modelo_simulacion_hibrida.md)** → Cómo funciona el motor
- **[Paralelismo](new/estrategia_paralelismo_hpc.md)** → Optimización computacional
- **[Simulación Hospitalaria](new/simulacion_capacidad_hospitalaria.md)** → Gestión de red sanitaria

### Para validación
- **[Marco FMVSE](new/marco_validacion_fmvse.md)** → Protocolo de validación
- **[Integración datos](new/integracion_datos_mcu.md)** → Sistema de datos

## 🤝 Cómo colaborar

### Si eres programador
1. Revisa la [arquitectura del sistema](new/arquitectura_sistema_pigem.md)
2. Checa el [modelo de simulación](new/modelo_simulacion_hibrida.md)
3. Mira los issues en GitHub
4. Haz fork y contribuye

### Si eres investigador
1. Lee el [marco de validación](new/marco_validacion_fmvse.md)
2. Revisa los casos de estudio
3. Propón mejoras metodológicas
4. Ayuda con la validación empírica

### Si eres usuario final
1. Participa en las pruebas de usabilidad
2. Da feedback sobre las interfaces
3. Comparte casos de uso reales
4. Ayuda con la capacitación

## 📞 Contacto

**Pablo Antonio Jordán González**  
📧 pablo.jordan@usach.cl  
🏢 Universidad de Santiago de Chile - CITIAPS  
💼 Director de I+D HealthPixel Spa

---

## 💡 Resumen para nuevos colaboradores

**En una frase:** Estamos creando un simulador de evacuaciones masivas que puede manejar un millón de personas y ayudar a los municipios a planificar mejor sus emergencias.

**¿Por qué importa?** Chile tiene muchos desastres naturales y los sistemas actuales no sirven para planificar evacuaciones masivas reales.

**¿Qué necesitamos?** Desarrolladores, investigadores, y usuarios finales que nos ayuden a construir, validar y mejorar el sistema.

**¿Dónde empezar?** Lee el [documento principal](new/formulario2.md) y luego los documentos técnicos según tu área de expertise.
