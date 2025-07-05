# Documento Técnico: Interfaces de Visualización Adaptativas

## 1. El Desafío: De Datos Complejos a Decisiones Claras

El resultado de una simulación de evacuación masiva es un conjunto de datos multidimensional y complejo: miles de trayectorias, mapas de calor de congestión que cambian en el tiempo, métricas de rendimiento, etc. Presentar esta información de manera que sea rápidamente comprensible y accionable para distintos tipos de usuarios es un desafío de diseño e ingeniería tan importante como la propia simulación.

### 1.1 Dimensiones de la Complejidad de Datos

**Tabla 1: Tipos de Datos Generados por Simulaciones de Evacuación**

| **Tipo de Dato** | **Volumen** | **Dimensionalidad** | **Frecuencia** | **Audiencia Principal** |
|------------------|-------------|-------------------|----------------|-------------------------|
| **Trayectorias de Agentes** | 100K-1M registros | Espacial + Temporal | Cada segundo | Analistas técnicos |
| **Mapas de Congestión** | 10K-50K celdas | Espacial + Temporal | Cada minuto | Planificadores urbanos |
| **Métricas de Rendimiento** | 50-100 indicadores | Temporal | Cada 5 minutos | Autoridades ejecutivas |
| **Estados de Recursos** | 500-2K recursos | Espacial + Estado | Tiempo real | Coordinadores operacionales |
| **Alertas y Eventos** | 10-100 eventos | Temporal + Prioridad | Irregular | Equipos de respuesta |

### 1.2 Perfiles de Usuario y Necesidades

**Tabla 2: Matriz de Perfiles de Usuario y Requerimientos**

| **Perfil** | **Nivel Técnico** | **Tiempo Disponible** | **Información Crítica** | **Formato Preferido** |
|------------|-------------------|----------------------|-------------------------|----------------------|
| **Analista Técnico** | Alto | 30-60 minutos | Datos detallados, parámetros | Tablas, gráficos técnicos |
| **Planificador Urbano** | Medio | 10-15 minutos | Patrones espaciales, cuellos de botella | Mapas temáticos, dashboards |
| **Autoridad Municipal** | Bajo | 2-5 minutos | Decisiones clave, estado general | Semáforos, indicadores KPI |
| **Coordinador Emergencia** | Medio | 1-2 minutos | Alertas, recursos disponibles | Notificaciones, mapas simples |
| **Ciudadano** | Bajo | 30 segundos | Rutas personales, albergues | Mapas móviles, instrucciones |

Las visualizaciones estáticas o de "talla única" son insuficientes. Un analista técnico necesita explorar los datos en profundidad, mientras que una autoridad municipal necesita una conclusión clara e inmediata. Las Interfaces de Visualización Adaptativas de PIGEM están diseñadas para cerrar esta brecha.

## 1.3 Fundamentación Científica de las Interfaces Adaptativas

### 1.3.1 Descripción del Problema de Visualización

El diseño de interfaces de usuario para sistemas de gestión de emergencias enfrenta un desafío científico multidisciplinario que radica en la tensión fundamental entre la complejidad informacional inherente a los sistemas de evacuación masiva y las limitaciones cognitivas de los usuarios humanos operando bajo condiciones de estrés temporal y emocional extremo. Esta problemática se manifiesta en múltiples dimensiones que requieren aproximaciones teóricas y metodológicas específicas.

**Dimensión Cognitiva:** Los procesos de toma de decisiones durante emergencias operan bajo restricciones cognitivas severas descritas por la teoría de carga cognitiva (Sweller, 1988). La capacidad de procesamiento de información humana se ve reducida significativamente bajo estrés, limitando la memoria de trabajo a 3-4 elementos simultáneos en lugar de los 7±2 típicos. Esta reducción compromete la capacidad de interpretar visualizaciones complejas cuando más se necesita claridad informacional.

**Dimensión Temporal:** Las decisiones en gestión de emergencias operan bajo presión temporal extrema, donde la latencia entre presentación de información y comprensión puede determinar la efectividad de la respuesta. Los modelos clásicos de interacción humano-computadora (Card et al., 1983) no consideran adecuadamente estos contextos de alta urgencia temporal, donde la usabilidad tradicional resulta insuficiente.

**Dimensión Heterogeneidad de Usuarios:** Los sistemas de gestión de emergencias deben servir simultáneamente a usuarios con niveles de expertise, objetivos operacionales y contextos de uso radicalmente diferentes. La teoría clásica de diseño centrado en el usuario asume homogeneidad relativa de perfiles, una suposición que se invalida en contextos multiactor como la gestión de desastres.

**Dimensión Multimodalidad Informacional:** Los datos de evacuación masiva exhiben características multidimensionales (espaciales, temporales, categoriales, cuantitativas) que requieren representaciones visuales heterogéneas coordinadas. Las teorías tradicionales de visualización de información (Bertin, 1983; Tufte, 2001) no proporcionan frameworks sistemáticos para la integración coherente de múltiples modalidades bajo restricciones cognitivas y temporales extremas.

### 1.3.2 Hipótesis de Investigación en Interfaces Adaptativas

**Hipótesis Principal:** La implementación de interfaces de visualización adaptativas que se ajusten dinámicamente al perfil de usuario, contexto operacional y nivel de urgencia de la emergencia, basándose en principios de teoría de carga cognitiva y diseño centrado en tareas críticas, mejorará significativamente la eficiencia de toma de decisiones (reducción >40% en tiempo de interpretación), precisión de decisiones (incremento >25% en decisiones correctas) y satisfacción de usuarios (SUS >80) comparado con interfaces estáticas tradicionales.

**Hipótesis Secundarias:**

1. **Hipótesis de Adaptación Contextual:** La personalización automática de la interfaz basada en perfil de usuario y contexto operacional reducirá la carga cognitiva intrínseca (medida por tiempo de búsqueda visual y errores de interpretación) en >50% comparado con interfaces genéricas.

2. **Hipótesis de Urgencia Temporal:** La adaptación de la interfaz al nivel de urgencia de la emergencia (modo planificación vs. modo crisis) optimizará el balance entre cantidad de información presentada y velocidad de procesamiento, mejorando el tiempo de respuesta en >30% en contextos de alta urgencia.

3. **Hipótesis de Estándares Cognitivos:** La aplicación sistemática de estándares de simbología internacional (ISO 22324, ISO 3864) y principios de consistencia visual reducirá el tiempo de aprendizaje de la interfaz en >60% y mejorará la transferencia de conocimiento entre contextos operacionales.

4. **Hipótesis de Retroalimentación Adaptativa:** Los mecanismos de retroalimentación inteligente que se ajusten al nivel de expertise del usuario proporcionarán orientación contextual que mejore la efectividad de tareas complejas en >35% sin incrementar la carga cognitiva.

### 1.3.3 Pregunta de Investigación en Interfaces Adaptativas

**Pregunta Principal:** ¿Cómo deben diseñarse las interfaces de visualización adaptativas que optimicen la presentación de información compleja de evacuaciones masivas para diferentes perfiles de usuario operando bajo restricciones temporales y cognitivas variables, garantizando máxima eficiencia de toma de decisiones mientras mantienen la integridad informacional?

**Preguntas Secundarias:**

1. **Adaptación de Complejidad:** ¿Qué algoritmos de simplificación y agregación de información son más efectivos para adaptar la complejidad visual a las capacidades cognitivas disponibles bajo diferentes niveles de estrés operacional?

2. **Personalización Dinámica:** ¿Cuáles son los parámetros óptimos de personalización (nivel de detalle, modalidades de presentación, densidad informacional) que maximizan la efectividad para cada perfil de usuario sin comprometer la comprensión global del sistema?

3. **Consistencia vs. Adaptabilidad:** ¿Cómo puede balancearse la necesidad de consistencia visual (para reducir carga cognitiva de aprendizaje) con la adaptabilidad requerida para contextos operacionales heterogéneos?

4. **Validación Empírica:** ¿Qué metodologías de evaluación son más apropiadas para validar la efectividad de interfaces adaptativas en contextos que simulen fielmente las condiciones cognitivas y temporales de emergencias reales?

### 1.3.4 Metodología de Investigación en Interfaces Adaptativas

La investigación en interfaces adaptativas seguirá una metodología mixta que integre:

**Investigación Experimental Controlada:** Experimentos de laboratorio utilizando paradigmas de psicología cognitiva para evaluar efectos de diferentes estrategias de adaptación sobre carga cognitiva, tiempo de procesamiento y precisión de decisiones bajo condiciones controladas de estrés temporal.

**Investigación Cuasi-experimental:** Estudios de campo con usuarios reales en contextos de simulacros y ejercicios de emergencia para evaluar efectividad ecológica de las interfaces adaptativas en condiciones operacionales auténticas.

**Investigación de Métodos Mixtos:** Combinación de métricas cuantitativas (tiempo de tarea, precisión, satisfacción) con análisis cualitativos (entrevistas cognitivas, análisis de protocolo verbal) para comprender mecanismos subyacentes de efectividad.

**Investigación Iterativa:** Desarrollo de prototipos evolutivos evaluados mediante metodologías de diseño centrado en el usuario, con ciclos iterativos de prototipado-evaluación-refinamiento basados en feedback empírico continuo.

**Validación Ecológica:** Evaluación de implementaciones piloto en contextos operacionales reales con organismos de gestión de emergencias para validar transferencia de hallazgos de laboratorio a contextos de aplicación auténticos.

## 2. Principios de Diseño

La construcción de las interfaces se rige por principios fundamentales del diseño centrado en el usuario y la psicología cognitiva aplicada a situaciones de emergencia:

### 2.1 Marco Conceptual de Diseño

```
┌─────────────────────────────────────────────────────────────┐
│                 PRINCIPIOS DE DISEÑO                        │
├─────────────────┬─────────────────┬─────────────────────────┤
│ DISEÑO CENTRADO │ ESTANDARIZACIÓN │ VISUALIZACIÓN           │
│ EN EL USUARIO   │ COGNITIVA       │ INTERACTIVA             │
│                 │                 │                         │
│ • Perfiles      │ • ISO 22324     │ • Exploración           │
│ • Contexto      │ • Colores       │ • Filtros               │
│ • Tareas        │ • Símbolos      │ • Tiempo real           │
│ • Limitaciones  │ • Consistencia  │ • Escenarios what-if    │
└─────────────────┴─────────────────┴─────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                 IMPLEMENTACIÓN TÉCNICA                      │
├─────────────────┬─────────────────┬─────────────────────────┤
│ ARQUITECTURA    │ TECNOLOGÍAS     │ ESTÁNDARES              │
│ MODULAR         │ MODERNAS        │ ABIERTOS                │
│                 │                 │                         │
│ • Componentes   │ • React/Vue     │ • OGC SLD               │
│ • Microservicios│ • WebGL         │ • W3C WCAG              │
│ • APIs REST     │ • D3.js         │ • ISO 9241              │
│ • Escalabilidad │ • WebSockets    │ • RFC 7946              │
└─────────────────┴─────────────────┴─────────────────────────┘
```

*Figura 1: Marco conceptual de diseño de interfaces adaptativas*

1.  **Diseño Centrado en el Usuario (UCD)**: La funcionalidad y la presentación se definen a partir de las necesidades de los perfiles de usuario finales (planificadores, equipos de emergencia, autoridades), no a partir de las capacidades de la tecnología.
2.  **Estandarización Cognitiva**: Se utilizan estándares de simbología y color para reducir la carga cognitiva del usuario. El objetivo es que la interpretación de un mapa de riesgo sea inmediata e inequívoca, sin necesidad de consultar una leyenda compleja.
3.  **Visualización Interactiva y Exploratoria**: Se debe permitir al usuario "dialogar" con los datos, aplicando filtros, cambiando la perspectiva temporal y explorando escenarios "what-if" directamente en la interfaz.

### 2.2 Principios de Usabilidad para Emergencias

**Tabla 3: Principios de Usabilidad Específicos para Gestión de Emergencias**

| **Principio** | **Definición** | **Implementación** | **Métrica de Validación** |
|---------------|----------------|-------------------|---------------------------|
| **Visibilidad** | Información crítica siempre visible | Paneles fijos, alertas persistentes | Tiempo de localización <3 segundos |
| **Simplicidad** | Interfaz mínima, sin distracciones | Máximo 7±2 elementos por pantalla | Tasa de error <2% |
| **Consistencia** | Patrones uniformes en toda la aplicación | Guía de estilos, componentes reutilizables | Tiempo de aprendizaje <10 minutos |
| **Retroalimentación** | Respuesta inmediata a acciones del usuario | Indicadores de carga, confirmaciones | Tiempo de respuesta <200ms |
| **Tolerancia a Errores** | Prevención y recuperación de errores | Validación en tiempo real, deshacer | Tasa de recuperación >95% |

## 3. Arquitectura y Tecnologías

La interfaz es una **Single-Page Application (SPA)** moderna, construida con un stack tecnológico diseñado para el manejo eficiente de datos geoespaciales y en tiempo real.

### 3.1 Stack Tecnológico Completo

**Tabla 4: Componentes del Stack Tecnológico**

| **Capa** | **Tecnología** | **Versión** | **Función** | **Justificación** |
|----------|----------------|-------------|-------------|-------------------|
| **Frontend Framework** | React | 18.2+ | Interfaz de usuario reactiva | Ecosistema maduro, performance |
| **Gestión de Estado** | Redux Toolkit | 1.9+ | Estado global de aplicación | Predictibilidad, debugging |
| **Mapas Interactivos** | Mapbox GL JS | 2.15+ | Renderizado de mapas WebGL | Rendimiento, 3D, personalización |
| **Visualización de Datos** | D3.js | 7.8+ | Gráficos y visualizaciones | Flexibilidad, estándares web |
| **Renderizado 3D** | Deck.gl | 8.9+ | Visualizaciones geoespaciales 3D | Integración Mapbox, rendimiento |
| **Comunicación** | Socket.io | 4.7+ | Tiempo real, WebSockets | Confiabilidad, fallbacks |
| **Estilos** | Tailwind CSS | 3.3+ | Framework CSS utilitario | Consistencia, mantenibilidad |
| **Testing** | Jest + RTL | 29.5+ | Pruebas unitarias/integración | Estándar industria |

### 3.2 Arquitectura de Componentes

```
┌─────────────────────────────────────────────────────────────┐
│                    CAPA DE PRESENTACIÓN                     │
├─────────────────┬─────────────────┬─────────────────────────┤
│ COMPONENTES     │ COMPONENTES     │ COMPONENTES             │
│ EJECUTIVOS      │ TÉCNICOS        │ OPERACIONALES           │
│                 │                 │                         │
│ • Dashboard KPI │ • Gráficos      │ • Mapas en tiempo real  │
│ • Alertas       │ • Tablas        │ • Notificaciones        │
│ • Semáforos     │ • Filtros       │ • Controles             │
└─────────────────┴─────────────────┴─────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    CAPA DE LÓGICA                           │
├─────────────────┬─────────────────┬─────────────────────────┤
│ ADAPTACIÓN      │ PROCESAMIENTO   │ COMUNICACIÓN            │
│ CONTEXTUAL      │ DE DATOS        │ TIEMPO REAL             │
│                 │                 │                         │
│ • Perfiles      │ • Agregación    │ • WebSockets            │
│ • Contexto      │ • Filtrado      │ • API REST              │
│ • Preferencias  │ • Transformación│ • Notificaciones push   │
└─────────────────┴─────────────────┴─────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    CAPA DE DATOS                            │
├─────────────────┬─────────────────┬─────────────────────────┤
│ SIMULACIÓN      │ CONFIGURACIÓN   │ SERVICIOS               │
│ RESULTADOS      │ USUARIO         │ EXTERNOS                │
│                 │                 │                         │
│ • Trayectorias  │ • Perfiles      │ • Servicios OGC         │
│ • Métricas      │ • Preferencias  │ • APIs municipales      │
│ • Estados       │ • Histórico     │ • Datos en tiempo real  │
└─────────────────┴─────────────────┴─────────────────────────┘
```

*Figura 2: Arquitectura de componentes de la interfaz adaptativa*

*   **Framework de UI**: **React**. Permite construir una interfaz de usuario modular y reactiva, donde los cambios en los datos de la simulación se reflejan automáticamente en los componentes visuales.
*   **Renderizado de Mapas**: **Mapbox GL JS** o **Deck.gl**. Estas librerías utilizan **WebGL** para aprovechar la aceleración por hardware de la GPU, permitiendo renderizar cientos de miles de puntos o polígonos de manera fluida en el navegador, algo imposible con tecnologías basadas en SVG o Canvas 2D.
*   **Gráficos y Dashboards**: **D3.js**. Es la librería estándar para la creación de visualizaciones de datos dinámicas e interactivas (gráficos de barras, líneas de tiempo, etc.) que complementan la vista de mapa.
*   **Comunicación**: La interfaz se comunica con el backend de PIGEM a través de una **API RESTful** para la gestión de escenarios y a través de **WebSockets** para recibir actualizaciones en tiempo real durante la ejecución de una simulación.

## 4. Características de la Adaptabilidad

La "adaptabilidad" de la interfaz se manifiesta en múltiples niveles, cada uno diseñado para optimizar la experiencia del usuario según su contexto específico:

### 4.1 Adaptabilidad por Perfil de Usuario

**Tabla 5: Configuraciones por Perfil de Usuario**

| **Perfil** | **Vista Principal** | **Componentes Visibles** | **Nivel de Detalle** | **Interactividad** |
|------------|-------------------|-------------------------|---------------------|-------------------|
| **Analista Técnico** | Workspace completo | Todos los paneles, herramientas avanzadas | Máximo (datos brutos) | Total (parámetros, filtros) |
| **Planificador Urbano** | Dashboard espacial | Mapas, métricas clave, análisis | Alto (agregaciones) | Media (filtros básicos) |
| **Autoridad Municipal** | Vista ejecutiva | KPIs, alertas, resumen | Bajo (indicadores) | Mínima (navegación) |
| **Coordinador Emergencia** | Centro de control | Alertas, recursos, comunicaciones | Medio (operacional) | Media (acciones directas) |
| **Ciudadano** | Vista pública | Rutas, albergues, instrucciones | Básico (personal) | Mínima (consulta) |

Al iniciar sesión, el sistema identifica el perfil del usuario y ajusta la interfaz por defecto:

*   **Perfil Técnico/Analista**: Se muestra una vista compleja con acceso a todas las capas de datos, parámetros de simulación avanzados, y herramientas de análisis espacial.
*   **Perfil de Autoridad/Decisor**: Se presenta un dashboard ejecutivo con métricas clave (KPIs) como el Tiempo Total de Evacuación Estimado (ETET), porcentaje de población evacuada, y un mapa simplificado que resalta solo los 3-5 cuellos de botella más críticos.
*   **Perfil Comunitario/Ciudadano**: Una vista pública y simplificada que muestra únicamente las rutas de evacuación recomendadas, la ubicación de los albergues y su estado (abierto/cerrado/lleno).

### 4.2 Adaptabilidad por Contexto de Emergencia

**Tabla 6: Modos de Operación según Contexto**

| **Modo** | **Trigger** | **Cambios Visuales** | **Funcionalidades** | **Prioridad Información** |
|----------|-------------|---------------------|-------------------|---------------------------|
| **Planificación** | Uso normal | Colores estándar, información completa | Todas disponibles | Análisis detallado |
| **Alerta Temprana** | Amenaza detectada | Colores de advertencia, notificaciones | Enfoque en preparación | Acciones preventivas |
| **Emergencia Activa** | Evacuación iniciada | Modo alto contraste, información crítica | Solo acciones esenciales | Coordinación operacional |
| **Post-Emergencia** | Evacuación completada | Colores neutros, análisis | Evaluación y reportes | Lecciones aprendidas |

La interfaz puede cambiar su apariencia según la urgencia del escenario:

*   **Modo Planificación**: Paleta de colores estándar, información detallada.
*   **Modo Alerta/Emergencia**: La interfaz cambia a un "modo oscuro" con una paleta de colores de alto contraste. Se eliminan los elementos no esenciales y se destacan las alertas y las acciones recomendadas, minimizando las distracciones.

### 4.3 Adaptabilidad de la Simbología

**Tabla 7: Estándares de Simbología Implementados**

| **Estándar** | **Aplicación** | **Elementos** | **Beneficio** |
|--------------|----------------|---------------|---------------|
| **ISO 22324** | Niveles de alerta | Verde, Amarillo, Naranja, Rojo | Comprensión universal |
| **ISO 3864** | Señales de seguridad | Formas, colores, pictogramas | Reconocimiento inmediato |
| **W3C WCAG 2.1** | Accesibilidad | Contraste, tamaño, navegación | Inclusión universal |
| **OGC SLD** | Estilos cartográficos | Simbolización de capas | Interoperabilidad |

*   **Estándar Base (ISO 22324)**: Los colores para niveles de alerta (verde, amarillo, naranja, rojo) se basan en la norma ISO 22324, garantizando una comprensión universal.
*   **Saliencia Dinámica**: La simbología se ajusta para resaltar la información más relevante. Por ejemplo, en un mapa de congestión, las rutas con un nivel de saturación del 90-100% pueden empezar a parpadear o aumentar de grosor para atraer la atención del operador.
*   **Styled Layer Descriptor (SLD)**: El sistema utiliza el estándar OGC SLD para definir los estilos de las capas. Esto permite que los estilos sean portables y puedan ser consumidos por otras herramientas SIG.

### 4.4 Adaptabilidad Responsiva y Multiplataforma

**Tabla 8: Adaptación por Dispositivo**

| **Dispositivo** | **Resolución** | **Interacción** | **Adaptaciones** | **Funcionalidades** |
|-----------------|----------------|-----------------|------------------|-------------------|
| **Desktop** | 1920x1080+ | Mouse, teclado | Interfaz completa | Todas las funciones |
| **Tablet** | 1024x768+ | Touch | Controles táctiles, menús colapsables | 90% de funciones |
| **Smartphone** | 375x667+ | Touch | Navegación simplificada, gestos | Funciones esenciales |
| **Pantalla Grande** | 2560x1440+ | Mouse, teclado | Múltiples vistas, información extendida | Funciones avanzadas |

## 5. Casos de Uso y Flujos de Trabajo

### 5.1 Escenarios de Uso Típicos

**Tabla 9: Casos de Uso Detallados**

| **Escenario** | **Actor** | **Objetivo** | **Flujo de Trabajo** | **Tiempo Estimado** |
|---------------|-----------|--------------|---------------------|-------------------|
| **Análisis de Vulnerabilidad** | Planificador Urbano | Identificar áreas críticas | 1. Cargar datos → 2. Ejecutar simulación → 3. Analizar resultados → 4. Generar reporte | 45 minutos |
| **Toma de Decisión Ejecutiva** | Alcalde | Aprobar plan de evacuación | 1. Revisar dashboard → 2. Verificar KPIs → 3. Consultar recomendaciones → 4. Tomar decisión | 10 minutos |
| **Coordinación Operacional** | Jefe de Emergencia | Gestionar evacuación activa | 1. Monitorear estado → 2. Identificar problemas → 3. Reasignar recursos → 4. Comunicar cambios | 5 minutos |
| **Consulta Ciudadana** | Residente | Conocer ruta de evacuación | 1. Ingresar ubicación → 2. Consultar ruta → 3. Verificar albergues → 4. Guardar información | 2 minutos |

### 5.2 Flujo de Trabajo para Análisis de Escenarios

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ CONFIGURACIÓN   │    │ EJECUCIÓN       │    │ ANÁLISIS        │
│ ESCENARIO       │    │ SIMULACIÓN      │    │ RESULTADOS      │
│                 │    │                 │    │                 │
│ • Parámetros    │───▶│ • Tiempo real   │───▶│ • Visualización │
│ • Amenazas      │    │ • Indicadores   │    │ • Métricas      │
│ • Población     │    │ • Progreso      │    │ • Cuellos botella│
│ • Recursos      │    │ • Alertas       │    │ • Recomendaciones│
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ VALIDACIÓN      │    │ MONITOREO       │    │ REPORTES        │
│ PARÁMETROS      │    │ PROGRESO        │    │ EJECUTIVOS      │
│                 │    │                 │    │                 │
│ • Consistencia  │    │ • Estado actual │    │ • Resumen       │
│ • Completitud   │    │ • Tiempo restante│    │ • Gráficos      │
│ • Rangos válidos│    │ • Recursos      │    │ • Conclusiones  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

*Figura 3: Flujo de trabajo para análisis de escenarios*

## 6. Metodología de Validación

La efectividad de las interfaces no es una suposición, sino que se valida empíricamente mediante un protocolo riguroso de evaluación de usabilidad.

### 6.1 Framework de Evaluación

**Tabla 10: Metodología de Validación de Usabilidad**

| **Método** | **Participantes** | **Duración** | **Métricas** | **Criterios de Éxito** |
|------------|------------------|--------------|--------------|----------------------|
| **Pruebas de Usabilidad** | 5-8 por perfil | 60 minutos | Tiempo de tarea, errores, satisfacción | Tiempo <objetivo, errores <2%, satisfacción >4/5 |
| **System Usability Scale** | 20+ por perfil | 10 minutos | Puntaje SUS (0-100) | Puntaje >80 (excelente) |
| **Entrevistas Cognitivas** | 3-5 expertos | 45 minutos | Carga cognitiva, comprensión | Comprensión >90% |
| **Análisis Heurístico** | 3 expertos UX | 120 minutos | Violaciones principios | <5 problemas críticos |
| **A/B Testing** | 50+ usuarios | Variable | Conversión, engagement | Mejora significativa (p<0.05) |

### 6.2 Métricas de Desempeño

**Tabla 11: KPIs de Usabilidad e Interfaz**

| **Categoría** | **Métrica** | **Valor Objetivo** | **Método de Medición** |
|---------------|-------------|-------------------|----------------------|
| **Eficiencia** | Tiempo de interpretación de escenarios | <5 minutos | Pruebas cronometradas |
| **Eficacia** | Tasa de completitud de tareas | >95% | Observación directa |
| **Satisfacción** | Puntaje System Usability Scale | >80 puntos | Cuestionario SUS |
| **Aprendizaje** | Tiempo de capacitación | <30 minutos | Sesiones de entrenamiento |
| **Errores** | Tasa de errores de usuario | <2% | Registro de interacciones |
| **Accesibilidad** | Cumplimiento WCAG 2.1 | Nivel AA | Auditoría automática |

*   **Pruebas de Usabilidad**: Se realizan sesiones con usuarios reales de los diferentes perfiles, donde se les pide que completen tareas específicas.
*   **Métricas Cuantitativas**: Se mide el **Tiempo de Interpretación de Escenarios** y se calcula el puntaje del **System Usability Scale (SUS)**, con el objetivo de superar los 80 puntos (indicativo de una excelente usabilidad).
*   **Métricas Cualitativas**: A través de entrevistas semiestructuradas con usuarios finales, utilizando técnicas de codificación cualitativa.

### 6.3 Protocolo de Testing Continuo

**Tabla 12: Cronograma de Evaluación**

| **Fase** | **Actividad** | **Frecuencia** | **Participantes** | **Entregables** |
|----------|---------------|----------------|------------------|-----------------|
| **Desarrollo** | Pruebas de prototipo | Semanal | Equipo interno | Reportes de bugs |
| **Alpha** | Evaluación heurística | Única | Expertos UX | Lista de mejoras |
| **Beta** | Pruebas con usuarios | Mensual | Usuarios finales | Métricas de usabilidad |
| **Producción** | Monitoreo continuo | Continua | Usuarios reales | Analytics de uso |
| **Post-despliegue** | Evaluación de impacto | Trimestral | Stakeholders | Reportes de adopción |

## 7. Implementación Técnica Avanzada

### 7.1 Arquitectura de Microservicios

**Tabla 13: Microservicios de la Interfaz**

| **Servicio** | **Responsabilidad** | **Tecnología** | **API** | **Escalabilidad** |
|--------------|-------------------|----------------|---------|------------------|
| **Authentication** | Gestión de usuarios y perfiles | Node.js + JWT | REST | Horizontal |
| **Personalization** | Configuración de interfaces | Python + Redis | REST | Vertical |
| **Visualization** | Renderizado de mapas y gráficos | React + WebGL | WebSocket | Horizontal |
| **Notification** | Alertas y notificaciones | Node.js + Socket.io | WebSocket | Horizontal |
| **Analytics** | Métricas de uso | Python + InfluxDB | REST | Horizontal |

### 7.2 Ejemplo de Implementación

```typescript
// Ejemplo de componente adaptativo en React
interface AdaptiveMapProps {
  userProfile: UserProfile;
  emergencyLevel: EmergencyLevel;
  simulationData: SimulationData;
}

const AdaptiveMap: React.FC<AdaptiveMapProps> = ({
  userProfile,
  emergencyLevel,
  simulationData
}) => {
  // Configuración adaptativa basada en perfil
  const mapConfig = useMemo(() => {
    switch (userProfile.role) {
      case 'technical_analyst':
        return {
          layers: ['all_layers'],
          controls: ['advanced_controls'],
          detail: 'maximum'
        };
      case 'municipal_authority':
        return {
          layers: ['critical_layers'],
          controls: ['basic_controls'],
          detail: 'summary'
        };
      case 'citizen':
        return {
          layers: ['public_layers'],
          controls: ['minimal_controls'],
          detail: 'basic'
        };
      default:
        return defaultConfig;
    }
  }, [userProfile]);

  // Adaptación por contexto de emergencia
  const styleConfig = useMemo(() => {
    return emergencyLevel === 'high' 
      ? highContrastStyle 
      : standardStyle;
  }, [emergencyLevel]);

  return (
    <MapContainer
      config={mapConfig}
      style={styleConfig}
      data={simulationData}
      onInteraction={handleUserInteraction}
    >
      <LayerManager layers={mapConfig.layers} />
      <ControlPanel controls={mapConfig.controls} />
      <AlertSystem level={emergencyLevel} />
    </MapContainer>
  );
};
```

## 8. Bibliografía Actualizada

### 8.1 Referencias Fundamentales

*   Guerrero, N., Contreras, M., Chamorro, A., Martínez, C., & Echaveguren, T. (2022). Social vulnerability in Chile: challenges for multi-scale analysis and disaster risk reduction. *Natural Hazards, 117*(2), 1827-1859. https://doi.org/10.1007/s11069-023-05978-z

*   Nielsen, J., & Landauer, T. K. (1993). A mathematical model of the finding of usability problems. *Proceedings of the INTERACT'93 and CHI'93 Conference on Human Factors in Computing Systems*, 206-213. https://doi.org/10.1145/169059.169166

### 8.2 Referencias Complementarias

*   Bangor, A., Kortum, P., & Miller, J. (2009). Determining what individual SUS scores mean: Adding an adjective rating scale. *Journal of Usability Studies, 4*(3), 114-123.

*   Brooke, J. (1996). SUS: A "quick and dirty" usability scale. In P. W. Jordan, B. Thomas, B. A. Weerdmeester, & I. L. McClelland (Eds.), *Usability evaluation in industry* (pp. 189-194). Taylor & Francis.

*   Card, S. K., Mackinlay, J. D., & Shneiderman, B. (1999). *Readings in information visualization: Using vision to think*. Morgan Kaufmann Publishers.

*   International Organization for Standardization. (2018). *ISO 9241-11:2018 Ergonomics of human-system interaction — Part 11: Usability: Definitions and concepts*. ISO.

*   International Organization for Standardization. (2016). *ISO 22324:2015 Societal security — Emergency management — Guidelines for colour-coded alert systems*. ISO.

*   Krug, S. (2014). *Don't make me think, revisited: A common sense approach to web usability* (3rd ed.). New Riders.

*   Munzner, T. (2014). *Visualization analysis and design*. CRC Press.

*   Norman, D. A. (2013). *The design of everyday things: Revised and expanded edition*. Basic Books.

*   Shneiderman, B., Plaisant, C., Cohen, M., Jacobs, S., Elmqvist, N., & Diakopoulos, N. (2016). *Designing the user interface: Strategies for effective human-computer interaction* (6th ed.). Pearson.

*   Tufte, E. R. (2001). *The visual display of quantitative information* (2nd ed.). Graphics Press.

*   W3C Web Accessibility Initiative. (2018). *Web Content Accessibility Guidelines (WCAG) 2.1*. W3C Recommendation. https://www.w3.org/TR/WCAG21/

*   Ware, C. (2020). *Information visualization: Perception for design* (4th ed.). Morgan Kaufmann.

---

**Pablo Antonio Jordán González**  
Estudiante Doctorado Ciencias de la Ingeniería Mención Informática  
Universidad de Santiago de Chile  
Director de I+D HealthPixel Spa. 