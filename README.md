# IMASDE - Investigación y Desarrollo en Sistemas de Evacuación

## Plataforma Integral de Gestión de Evacuaciones Multiamenaza (PIGEM)

### 📋 Descripción del Proyecto

PIGEM es una plataforma tecnológica avanzada diseñada para la simulación, planificación y gestión de evacuaciones masivas en Chile. Utiliza técnicas de **modelado híbrido (ABM-DES)**, **computación de alto rendimiento (HPC)** y **visualización adaptativa** para proporcionar herramientas de apoyo a la toma de decisiones en situaciones de emergencia.

### 🎯 Objetivos Principales

- **Simulación Realista**: Modelado híbrido que combina Agentes (ABM) y Eventos Discretos (DES)
- **Tiempo Real**: Reducir tiempos de simulación de horas a minutos mediante HPC
- **Interoperabilidad**: Integración con sistemas nacionales (SENAPRED, SHOA, INE)
- **Validación Científica**: Marco metodológico robusto (FMVSE) para certificación

### 📁 Estructura del Repositorio

```
investigacionydesarrollo/
├── README.md                           # Este archivo
├── Formulacion-ID25_v3.docx.md        # Formulación original del proyecto
├── new/                               # Documentos técnicos mejorados
│   ├── *.md                          # Versiones Markdown
│   ├── *.docx                        # Versiones Word (generadas con pandoc)
│   └── docx/                         # Documentos adicionales
└── .git/                             # Control de versiones
```

### 📚 Documentos Técnicos

| **Documento** | **Descripción** | **Contenido Clave** |
|---------------|-----------------|---------------------|
| **[MCU - Integración de Datos](new/integracion_datos_mcu.md)** | Metamodelo Cartográfico Unificado | Armonización datos geoespaciales, servicios OGC |
| **[Interfaces Visualización](new/interfaces_visualizacion_adaptativas.md)** | Interfaces Adaptativas | UX/UI para emergencias, dashboards contextuales |
| **[Simulación Híbrida](new/modelo_simulacion_hibrida.md)** | Modelo ABM-DES | Social Force Model, eventos discretos |
| **[Arquitectura Sistema](new/arquitectura_sistema_pigem.md)** | Arquitectura PIGEM | Microservicios, patrones, seguridad |
| **[Paralelismo HPC](new/estrategia_paralelismo_hpc.md)** | Computación Alto Rendimiento | GPU/CPU, CUDA, escalabilidad |
| **[Marco Validación](new/marco_validacion_fmvse.md)** | Framework FMVSE | Validación científica, certificación |

### 🛠️ Tecnologías Principales

#### **Backend**
- **Simulación**: C++ + CUDA (GPU), Python + SimPy (DES)
- **Datos**: PostgreSQL + PostGIS, Redis, MongoDB
- **APIs**: Python FastAPI, Node.js Express
- **HPC**: OpenMP, MPI, SLURM

#### **Frontend**
- **Framework**: React 18+ + TypeScript
- **Mapas**: Mapbox GL JS, Deck.gl
- **Visualización**: D3.js, Recharts
- **Estado**: Redux Toolkit

#### **Infraestructura**
- **Contenedores**: Docker + Kubernetes
- **Cloud**: AWS/Azure/GCP (híbrido)
- **Monitoreo**: Prometheus + Grafana
- **CI/CD**: GitHub Actions

### 🔬 Metodología Científica

#### **Validación FMVSE**
- **Validación Conceptual**: Panel de expertos multidisciplinario
- **Validación de Datos**: Métricas de calidad ISO 19115
- **Validación Computacional**: Testing automatizado (>95% cobertura)
- **Validación Operacional**: Casos de estudio chilenos reales
- **Validación Predictiva**: Análisis de sensibilidad, incertidumbre

#### **Casos de Estudio**
- Tsunami Iquique 2014
- Sismo Illapel 2015
- Incendio Valparaíso 2014
- Erupción Calbuco 2015
- Simulacros nacionales SENAPRED

### 📊 Métricas y KPIs

| **Categoría** | **Métrica** | **Objetivo** |
|---------------|-------------|--------------|
| **Rendimiento** | Agentes simulados | >1M agentes |
| **Velocidad** | Tiempo simulación | <30 min (ciudad 200K hab) |
| **Precisión** | Error predicción | <15% vs datos reales |
| **Escalabilidad** | Eficiencia paralela | >75% en cluster GPU |
| **Usabilidad** | Score SUS | >80 puntos |

### 🏛️ Instituciones Colaboradoras

- **Universidad de Santiago de Chile (USACH)** - Investigación principal
- **SENAPRED** - Validación operacional
- **SHOA** - Datos marítimos y tsunami
- **INE** - Datos demográficos
- **HealthPixel Spa** - Desarrollo tecnológico

### 👨‍🔬 Equipo de Investigación

**Director de Proyecto:**  
Pablo Antonio Jordán González  
*Estudiante Doctorado Ciencias de la Ingeniería Mención Informática*  
*Universidad de Santiago de Chile*  
*Director de I+D HealthPixel Spa*

### 📄 Licencia

Este proyecto está bajo desarrollo académico en el marco del Doctorado en Ciencias de la Ingeniería de la Universidad de Santiago de Chile.

### 🚀 Estado del Proyecto

- [x] **Fase 1**: Formulación y diseño conceptual
- [x] **Fase 2**: Documentación técnica detallada
- [ ] **Fase 3**: Implementación del prototipo
- [ ] **Fase 4**: Validación experimental
- [ ] **Fase 5**: Despliegue piloto
