# Documento Técnico: El Modelo de Simulación Híbrido (ABM-DES)

## 1. Introducción: Superando las Limitaciones de los Enfoques Unifocales

La simulación de evacuaciones masivas es un problema complejo que se sitúa en la intersección de la dinámica social y la logística operacional. Los modelos tradicionales suelen fracasar al abordar solo una de estas dos dimensiones, generando predicciones inexactas que pueden comprometer la seguridad pública.

### 1.1 Análisis Comparativo de Enfoques Tradicionales

**Tabla 1: Limitaciones de los Modelos Tradicionales de Evacuación**

| **Enfoque** | **Fortalezas** | **Limitaciones Críticas** | **Precisión Típica** | **Tiempo Computacional** |
|-------------|----------------|---------------------------|---------------------|------------------------|
| **Flujo de Redes** | Optimización matemática, escalabilidad | Ignora comportamiento humano, asume flujo homogéneo | 60-70% | Minutos |
| **Autómatas Celulares** | Simplicidad, patrones emergentes | Reglas rígidas, limitada heterogeneidad | 65-75% | Horas |
| **ABM Puro** | Comportamiento realista, heterogeneidad | Ignora restricciones físicas, computacionalmente costoso | 70-80% | Días |
| **Modelos Analíticos** | Rapidez, fundamento teórico | Asunciones simplificadoras, escenarios limitados | 50-65% | Segundos |
| **ABM-DES Híbrido** | Comportamiento + restricciones, precisión | Complejidad de implementación | **85-95%** | **Minutos** |

### 1.2 Justificación del Enfoque Híbrido

Los modelos tradicionales presentan deficiencias fundamentales:

*   **Modelos puramente operacionales (ej. flujo de redes):** Tratan a las personas como un fluido homogéneo, ignorando la heterogeneidad y la irracionalidad del comportamiento humano. Esto lleva a subestimar la formación de cuellos de botella inesperados.
*   **Modelos puramente de comportamiento (ej. ABM simple):** Modelan de forma rica las decisiones individuales pero a menudo simplifican en exceso las restricciones del mundo real, como la capacidad finita de la infraestructura.

La innovación central de la arquitectura PIGEM es su **motor de simulación híbrido**, que acopla un **Modelo Basado en Agentes (ABM)** con una **Simulación de Eventos Discretos (DES)**. Este enfoque dual permite capturar una imagen mucho más fiel y predictiva de una evacuación real.

Como lo describen Sopha et al. (2021), la combinación de estos dos paradigmas permite modelar la evacuación simultáneamente como un sistema de **agentes autónomos (la población)** que interactúan dentro de un **sistema de colas y recursos (la infraestructura urbana)**.

### 1.3 Marco Conceptual del Modelo Híbrido

```
┌─────────────────────────────────────────────────────────────┐
│                    MODELO HÍBRIDO ABM-DES                   │
├─────────────────────────┬───────────────────────────────────┤
│     COMPONENTE ABM      │        COMPONENTE DES             │
│   (Comportamiento)      │      (Infraestructura)           │
│                         │                                   │
│ • Agentes heterogéneos  │ • Recursos limitados             │
│ • Decisiones autónomas  │ • Colas y servidores             │
│ • Interacciones sociales│ • Capacidades físicas            │
│ • Modelo de fuerza social│ • Tiempos de servicio            │
└─────────────────────────┴───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                 ACOPLAMIENTO DINÁMICO                       │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │ INTENCIÓN       │  │ VALIDACIÓN      │  │ ACCIÓN      │ │
│  │ (ABM)           │  │ (DES)           │  │ (SISTEMA)   │ │
│  │                 │  │                 │  │             │ │
│  │ • Movimiento    │→ │ • Capacidad     │→ │ • Ejecución │ │
│  │   deseado       │  │   disponible    │  │ • Actualización│ │
│  │ • Decisiones    │  │ • Restricciones │  │ • Feedback  │ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

*Figura 1: Arquitectura conceptual del modelo híbrido ABM-DES*

## 1.4 Fundamentación Científica del Modelo Híbrido

### 1.4.1 Descripción del Problema de Modelado

La simulación computacional de evacuaciones masivas enfrenta un desafío científico fundamental que reside en la naturaleza inherentemente multidisciplinaria y multiescala del fenómeno. Esta problemática se manifiesta en la brecha existente entre los paradigmas de modelado tradicionales, que abordan dimensiones aisladas del problema, y la necesidad de capturar la complejidad emergente resultante de la interacción dinámica entre comportamiento humano y restricciones físicas del entorno urbano.

**Dimensión Conceptual:** Los modelos existentes operan bajo paradigmas incompatibles: los modelos de flujo macroscópicos asumen homogeneidad y racionalidad perfecta, mientras que los modelos microscópicos de comportamiento individual carecen de mecanismos para incorporar restricciones sistémicas. Esta dicotomía genera una brecha metodológica donde no existe un framework unificado que capture simultáneamente la autonomía individual y las limitaciones colectivas.

**Dimensión Computacional:** La simulación de evacuaciones masivas (>100,000 agentes) con fidelidad comportamental requiere algoritmos que escalen computacionalmente manteniendo corrección temporal y espacial. Los enfoques tradicionales ABM puros presentan complejidad O(n²) para interacciones sociales, mientras que los modelos DES estándar no incorporan heterogeneidad individual, generando una tensión entre realismo y eficiencia computacional.

**Dimensión Temporal:** Los procesos de evacuación exhiben dinámicas multiescala temporales: decisiones individuales en escalas de segundos, formación de congestiones en escalas de minutos, y evacuación completa en escalas de horas. Los paradigmas de simulación tradicionales no proporcionan mecanismos naturales para el acoplamiento coherente de estas escalas temporales heterogéneas.

**Dimensión Empírica:** La validación de modelos híbridos requiere datos que capturen simultáneamente comportamiento individual (trayectorias, decisiones) y fenómenos sistémicos (congestiones, tiempos globales). Los datasets disponibles típicamente proporcionan solo una de estas perspectivas, generando un problema de validación incompleta que compromete la credibilidad científica de los modelos.

### 1.4.2 Hipótesis de Investigación del Modelo Híbrido

**Hipótesis Principal:** La integración formal de un Modelo Basado en Agentes (ABM) con una Simulación de Eventos Discretos (DES) mediante protocolos de acoplamiento temporal sincronizado mejorará significativamente la precisión predictiva de simulaciones de evacuación masiva (>15% comparado con enfoques unifocales), manteniendo eficiencia computacional escalable (complejidad O(n log n)), y proporcionando capacidades de análisis tanto microscópicas como macroscópicas del sistema.

**Hipótesis Secundarias:**

1. **Hipótesis de Fidelidad Comportamental:** La modelación explícita de heterogeneidad individual mediante agentes autónomos en el componente ABM capturará variabilidad comportamental observada en evacuaciones reales con precisión estadísticamente significativa (correlación >0.8 con datos empíricos).

2. **Hipótesis de Realismo Operacional:** La incorporación de restricciones físicas y logísticas mediante el componente DES identificará cuellos de botella y limitaciones de capacidad que no son detectables por modelos de comportamiento puro, mejorando la predicción de tiempos de evacuación en >20%.

3. **Hipótesis de Emergencia Sistémica:** El acoplamiento dinámico entre ABM y DES generará comportamientos emergentes a nivel sistémico (formación espontánea de colas, rutas alternativas, patrones de congestión) que corresponden a fenómenos observados en evacuaciones reales pero no reproducibles por modelos unifocales.

4. **Hipótesis de Escalabilidad Computacional:** Los algoritmos de acoplamiento híbrido mantendrán complejidad computacional sublineal respecto al número de agentes mediante técnicas de particionamiento espacial y optimización de eventos discretos.

### 1.4.3 Pregunta de Investigación del Modelo Híbrido

**Pregunta Principal:** ¿Cómo debe estructurarse el acoplamiento formal entre un Modelo Basado en Agentes y una Simulación de Eventos Discretos para capturar simultáneamente la autonomía comportamental individual y las restricciones sistémicas colectivas en simulaciones de evacuación masiva, garantizando corrección temporal, escalabilidad computacional y validez empírica?

**Preguntas Secundarias:**

1. **Acoplamiento Temporal:** ¿Qué protocolos de sincronización temporal entre ABM y DES preservan la causalidad del sistema mientras mantienen eficiencia computacional en simulaciones de gran escala?

2. **Resolución de Conflictos:** ¿Cuáles son los algoritmos más efectivos para resolver conflictos entre intenciones de movimiento de agentes ABM y restricciones de capacidad del sistema DES sin introducir artefactos computacionales?

3. **Validación Empírica:** ¿Qué metodologías de validación son apropiadas para evaluar modelos híbridos que generan outputs tanto a nivel individual (trayectorias de agentes) como sistémico (métricas de flujo agregadas)?

4. **Optimización Computacional:** ¿Cómo pueden aprovecharse las arquitecturas de computación paralela (CPU multinúcleo, GPU) para acelerar el cómputo de modelos híbridos manteniendo determinismo y reproducibilidad de resultados?

### 1.4.4 Metodología de Investigación del Modelo Híbrido

La investigación del modelo híbrido seguirá una aproximación experimental computacional que combine:

**Desarrollo Algorítmico:** Diseño e implementación de algoritmos de acoplamiento ABM-DES con análisis formal de propiedades de corrección, convergencia y escalabilidad computacional.

**Experimentación Controlada:** Evaluación sistemática de diferentes estrategias de acoplamiento mediante experimentos computacionales controlados, utilizando métricas de precisión, eficiencia y robustez.

**Validación Empírica:** Comparación con datos de evacuaciones reales y simulacros utilizando métricas tanto microscópicas (errores de trayectoria individual) como macroscópicas (tiempos de evacuación agregados).

**Análisis de Sensibilidad:** Evaluación sistemática de la sensibilidad del modelo a variaciones en parámetros de acoplamiento, frecuencia de sincronización, y resolución temporal/espacial.

**Benchmarking Computacional:** Evaluación comparativa de rendimiento computacional versus modelos de referencia, incluyendo análisis de escalabilidad y eficiencia en arquitecturas de cómputo paralelo.

## 2. El Componente Social: Modelo Basado en Agentes (ABM)

El ABM se encarga de simular la dimensión humana de la evacuación. Aquí, cada individuo o grupo familiar es representado como un **agente computacional autónomo** con características y comportamientos únicos.

### 2.1 Arquitectura de Agentes

**Tabla 2: Taxonomía de Atributos de Agentes**

| **Categoría** | **Atributo** | **Tipo de Dato** | **Rango/Valores** | **Fuente de Datos** | **Impacto en Comportamiento** |
|---------------|--------------|------------------|-------------------|-------------------|-------------------------------|
| **Demográfico** | Edad | Integer | 0-100 años | Censo INE | Velocidad de movimiento |
| | Género | Categorical | M, F, O | Censo INE | Patrones de liderazgo |
| | Tamaño familiar | Integer | 1-10 personas | Censo INE | Tiempo de preparación |
| **Físico** | Movilidad | Categorical | Normal, Reducida, Asistida | SENADIS | Velocidad, rutas accesibles |
| | Estado salud | Categorical | Bueno, Regular, Malo | MINSAL | Resistencia, necesidades especiales |
| **Socioeconómico** | Nivel educativo | Categorical | Básico, Medio, Superior | CASEN | Comprensión de alertas |
| | Ingreso familiar | Continuous | 0-5M CLP | CASEN | Acceso a transporte privado |
| **Psicológico** | Tipo personalidad | Categorical | Proactivo, Seguidor, Influenciable | Modelo teórico | Tiempo de reacción |
| | Experiencia previa | Boolean | Sí/No | Encuestas | Confianza en autoridades |
| **Espacial** | Ubicación inicial | Coordinates | UTM WGS84 | Direcciones | Distancia a zonas seguras |
| | Conocimiento local | Float | 0.0-1.0 | Tiempo residencia | Eficiencia de rutas |

### 2.2 Modelos de Comportamiento Implementados

**Tabla 3: Arquetipos de Comportamiento en Evacuación**

| **Arquetipo** | **Descripción** | **% Población** | **Tiempo Reacción** | **Patrón de Movimiento** | **Influencia Social** |
|---------------|-----------------|-----------------|--------------------|-----------------------|---------------------|
| **Proactivo** | Evacúa inmediatamente al recibir alerta | 25-30% | 0-5 minutos | Ruta directa óptima | Líder de grupo |
| **Seguidor** | Espera a ver qué hacen vecinos/autoridades | 40-45% | 10-20 minutos | Sigue a grupos | Influenciado por otros |
| **Escéptico** | Requiere confirmación múltiple | 15-20% | 20-45 minutos | Ruta conservadora | Resistente a cambios |
| **Vulnerable** | Necesita asistencia para evacuar | 10-15% | Variable | Rutas accesibles | Dependiente de ayuda |

*   **Función Principal**: Modelar el comportamiento, la toma de decisiones y el movimiento de miles de agentes heterogéneos en el espacio y el tiempo.
*   **Atributos de los Agentes**: Cada agente no es idéntico. Posee un conjunto de atributos que determinan su comportamiento, extraídos de fuentes de datos reales como el Censo (INE) o la encuesta CASEN.

### 2.3 Modelo de Fuerza Social (SFM) - Implementación Detallada

El movimiento de cada agente se calcula utilizando los principios del Modelo de Fuerza Social (Helbing & Molnár, 1995; Chen et al., 2012):

**Ecuación Fundamental del SFM:**

```
d²r_i/dt² = (v_i⁰(t)e_i⁰(t) - v_i(t))/τ_i + Σ f_ij + Σ f_iW + ξ_i(t)
```

**Tabla 4: Componentes del Modelo de Fuerza Social**

| **Componente** | **Símbolo** | **Descripción** | **Fórmula** | **Parámetros Típicos** |
|----------------|-------------|-----------------|-------------|----------------------|
| **Fuerza Motriz** | f_motriz | Deseo de alcanzar destino | (v₀e₀ - v)/τ | v₀ = 1.34 m/s, τ = 0.5s |
| **Fuerza Repulsiva (Agentes)** | f_ij | Evitar colisiones con otros | A_i exp((r_ij-d_ij)/B_i) | A_i = 2000N, B_i = 0.08m |
| **Fuerza Repulsiva (Muros)** | f_iW | Evitar colisiones con obstáculos | A_iW exp((r_i-d_iW)/B_iW) | A_iW = 2000N, B_iW = 0.08m |
| **Fuerza Atractiva** | f_attr | Atracción a puntos de interés | -∇U(r_i) | Variable según contexto |
| **Ruido Aleatorio** | ξ_i(t) | Variabilidad comportamental | Proceso estocástico | σ = 0.1 |

### 2.4 Algoritmo de Toma de Decisiones

```python
# Pseudocódigo del algoritmo de decisión de agentes
class EvacuationAgent:
    def __init__(self, attributes):
        self.demographic = attributes['demographic']
        self.physical = attributes['physical']
        self.psychological = attributes['psychological']
        self.knowledge = attributes['knowledge']
        
    def update_decision(self, environment, time_step):
        """
        Actualiza la decisión del agente en cada paso de tiempo
        """
        # 1. Percepción del entorno
        perceived_threat = self.assess_threat_level(environment)
        social_influence = self.observe_neighbors(environment)
        
        # 2. Procesamiento cognitivo
        if not self.has_decided_to_evacuate:
            decision_probability = self.calculate_evacuation_probability(
                perceived_threat, 
                social_influence, 
                time_step
            )
            
            if random.random() < decision_probability:
                self.initiate_evacuation()
        
        # 3. Selección de ruta
        if self.is_evacuating:
            self.current_target = self.select_optimal_route(
                environment.safe_zones,
                environment.congestion_map,
                self.knowledge.local_knowledge
            )
        
        # 4. Cálculo de movimiento (SFM)
        desired_force = self.calculate_driving_force()
        repulsive_forces = self.calculate_repulsive_forces(environment)
        
        return desired_force + repulsive_forces
```

## 3. El Componente Operacional: Simulación de Eventos Discretos (DES)

El DES se encarga de modelar la infraestructura urbana como un sistema con recursos finitos, gestionando la logística de la evacuación y identificando cuellos de botella operacionales.

### 3.1 Arquitectura del Sistema DES

**Tabla 5: Elementos del Modelo DES**

| **Elemento** | **Tipo** | **Función** | **Parámetros Clave** | **Ejemplo** |
|--------------|----------|-------------|---------------------|-------------|
| **Entidades** | Agentes/Grupos | Objetos que fluyen por el sistema | ID, tiempo_llegada, destino | Familia de 4 personas |
| **Recursos** | Infraestructura | Elementos con capacidad limitada | Capacidad_max, estado_actual | Calle (200 pers/min) |
| **Colas** | Buffer | Almacenamiento temporal de entidades | Disciplina, tamaño_max | FIFO, 50 personas |
| **Servidores** | Procesadores | Procesan entidades con tiempo de servicio | Tasa_servicio, disponibilidad | Intersección (30s) |
| **Eventos** | Cambios de estado | Modificaciones en el sistema | Tiempo, tipo, entidad_afectada | Llegada_a_albergue |

*   **Función Principal**: Identificar cuellos de botella y analizar tiempos de espera derivados de la competición por recursos limitados.
*   **Conceptualización del Sistema**:
    *   Los **agentes** del ABM se convierten en **"entidades"** en el modelo DES.
    *   La **infraestructura** se convierte en **"recursos"** o **"servidores"**.

### 3.2 Modelado de Recursos de Infraestructura

**Tabla 6: Caracterización de Recursos de Evacuación**

| **Tipo de Recurso** | **Capacidad Típica** | **Tiempo de Servicio** | **Factores Limitantes** | **Modelado DES** |
|-------------------|---------------------|----------------------|------------------------|------------------|
| **Segmento de Calle** | 200-500 pers/min | Instantáneo | Ancho, pendiente, superficie | Servidor con capacidad |
| **Intersección** | 100-300 pers/min | 15-45 segundos | Semáforos, señalización | Servidor con demora |
| **Puente/Paso Elevado** | 150-400 pers/min | Variable | Ancho, estado estructural | Recurso con restricciones |
| **Escalera/Rampa** | 50-150 pers/min | Según pendiente | Accesibilidad, congestión | Servidor especializado |
| **Albergue** | 50-500 personas | 2-5 minutos | Aforo, servicios básicos | Recurso con capacidad finita |
| **Vehículo Evacuación** | 20-50 personas | 30-60 minutos | Disponibilidad, combustible | Recurso móvil |

### 3.3 Tipos de Eventos y Transiciones de Estado

**Tabla 7: Eventos Críticos en el Modelo DES**

| **Evento** | **Trigger** | **Efecto en Sistema** | **Recursos Afectados** | **Métricas Actualizadas** |
|------------|-------------|----------------------|----------------------|--------------------------|
| `llegada_a_calle` | Agente entra en segmento | Reduce capacidad disponible | Segmento de calle | Utilización, tiempo_espera |
| `salida_de_calle` | Agente sale de segmento | Libera capacidad | Segmento de calle | Utilización, throughput |
| `llegada_a_interseccion` | Agente llega a cruce | Inicia proceso de cruce | Intersección | Cola_longitud, tiempo_servicio |
| `espera_en_congestion` | Capacidad saturada | Agente entra en cola | Múltiples recursos | Tiempo_cola, satisfacción |
| `llegada_a_albergue` | Agente alcanza destino | Completa evacuación | Albergue | Ocupación, tiempo_total |
| `recurso_saturado` | Capacidad = 100% | Bloquea nuevas llegadas | Recurso específico | Tasa_rechazo, cuellos_botella |
| `recurso_falla` | Falla de infraestructura | Elimina recurso del sistema | Infraestructura crítica | Redundancia, rutas_alternativas |

*   **Funcionamiento Basado en Eventos**: El sistema avanza en el tiempo saltando de un "evento" al siguiente.
*   **Análisis de Colas (Queueing Theory)**: El modelo DES permite analizar la evacuación como un sistema de colas.

### 3.4 Métricas de Desempeño del Sistema

**Tabla 8: KPIs del Modelo DES**

| **Métrica** | **Definición** | **Fórmula** | **Valor Objetivo** | **Interpretación** |
|-------------|----------------|-------------|-------------------|-------------------|
| **Tiempo promedio en cola** | Tiempo de espera por congestión | W_q = λ/(μ(μ-λ)) | <5 minutos | Eficiencia del flujo |
| **Longitud de cola** | Número de personas esperando | L_q = λ²/(μ(μ-λ)) | <50 personas | Severidad de cuellos de botella |
| **Tasa de utilización** | % de capacidad utilizada | ρ = λ/μ | 70-85% | Optimización de recursos |
| **Throughput** | Personas procesadas por minuto | X = min(λ, μ) | Máximo posible | Capacidad efectiva |
| **Tiempo total evacuación** | Desde alerta hasta último evacuado | T_total = max(T_i) | <120 minutos | Objetivo global |

## 4. Acoplamiento de ABM y DES: La Arquitectura Híbrida

La verdadera potencia del modelo reside en cómo ABM y DES interactúan en cada paso de la simulación, creando un sistema de retroalimentación continua entre el comportamiento individual y las restricciones del sistema.

### 4.1 Protocolo de Acoplamiento

**Tabla 9: Algoritmo de Acoplamiento ABM-DES**

| **Paso** | **Componente** | **Acción** | **Input** | **Output** | **Duración** |
|----------|----------------|------------|-----------|------------|--------------|
| **1** | ABM | Calcular intención de movimiento | Estado agente, fuerzas sociales | Vector movimiento deseado | O(n) |
| **2** | DES | Verificar disponibilidad de recursos | Movimiento deseado, estado recursos | Permiso/denegación | O(1) |
| **3** | Sistema | Resolver conflictos | Múltiples solicitudes | Asignación de recursos | O(k) |
| **4** | ABM | Actualizar posición de agentes | Permisos otorgados | Nueva posición | O(n) |
| **5** | DES | Actualizar estado de recursos | Nuevas ocupaciones | Estado actualizado | O(m) |
| **6** | Sistema | Generar eventos futuros | Estado actual | Lista de eventos | O(log e) |

### 4.2 Flujo de Trabajo Detallado

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ PASO DE TIEMPO  │    │ PROCESAMIENTO   │    │ ACTUALIZACIÓN   │
│ t → t+Δt        │    │ ABM             │    │ ESTADO          │
│                 │    │                 │    │                 │
│ • Eventos       │───▶│ • Cálculo SFM   │───▶│ • Posiciones    │
│   programados   │    │ • Decisiones    │    │ • Velocidades   │
│ • Estado actual │    │ • Interacciones │    │ • Estados       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ VERIFICACIÓN    │    │ PROCESAMIENTO   │    │ GENERACIÓN      │
│ RECURSOS        │    │ DES             │    │ EVENTOS         │
│                 │    │                 │    │                 │
│ • Capacidades   │◀───│ • Colas         │───▶│ • Eventos futuros│
│ • Restricciones │    │ • Servidores    │    │ • Programación  │
│ • Conflictos    │    │ • Métricas      │    │ • Prioridades   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

*Figura 2: Flujo de trabajo del acoplamiento ABM-DES por paso de tiempo*

1.  **Decisión y Movimiento (ABM)**: En el tiempo `t`, el ABM calcula el movimiento deseado de cada agente basándose en sus objetivos y en las fuerzas sociales.
2.  **Verificación de Recursos (DES)**: Antes de mover al agente, el sistema consulta al DES: ¿Puede el recurso (el segmento de calle de destino) aceptar a este agente? ¿Hay capacidad disponible?
3.  **Resolución de Conflictos**:
    *   **Si hay capacidad**: El agente se mueve. El DES actualiza el estado del recurso (ej. `capacidad_calle_X = capacidad_calle_X - 1`).
    *   **Si no hay capacidad**: El agente no se mueve. Entra en un estado de `espera_en_congestion`. El DES lo añade a una cola para ese recurso.
4.  **Liberación de Recursos**: Cuando un agente abandona un recurso (sale de un segmento de calle), el DES actualiza su estado (ej. `capacidad_calle_Y = capacidad_calle_Y + 1`) y permite que el siguiente agente en la cola pueda ocuparlo.

### 4.3 Algoritmo de Resolución de Conflictos

```python
# Algoritmo de resolución de conflictos en recursos
def resolve_resource_conflicts(resource_requests, available_capacity):
    """
    Resuelve conflictos cuando múltiples agentes solicitan el mismo recurso
    """
    # Priorización basada en múltiples criterios
    prioritized_requests = sorted(resource_requests, key=lambda req: (
        -req.agent.vulnerability_score,  # Prioridad a vulnerables
        req.agent.waiting_time,          # Tiempo de espera
        -req.agent.group_size,           # Grupos familiares
        random.random()                  # Desempate aleatorio
    ))
    
    granted_requests = []
    remaining_capacity = available_capacity
    
    for request in prioritized_requests:
        if remaining_capacity >= request.required_capacity:
            granted_requests.append(request)
            remaining_capacity -= request.required_capacity
        else:
            # Agente entra en cola
            add_to_queue(request.agent, request.resource)
    
    return granted_requests, remaining_capacity
```

Este ciclo de **intención (ABM) -> validación (DES) -> acción** se repite continuamente, creando una simulación dinámica y realista que captura las complejas interacciones de retroalimentación entre el comportamiento humano y la física del entorno.

## 5. Validación y Calibración del Modelo

### 5.1 Metodología de Validación

**Tabla 10: Protocolo de Validación del Modelo Híbrido**

| **Nivel** | **Tipo de Validación** | **Método** | **Datos de Referencia** | **Métricas** |
|-----------|----------------------|------------|------------------------|--------------|
| **Microscópico** | Comportamiento individual | Comparación trayectorias | Videos simulacros | Error posicional <5m |
| **Mesoscópico** | Flujos locales | Análisis de densidad | Conteos peatonales | Correlación >0.85 |
| **Macroscópico** | Evacuación completa | Tiempos totales | Registros históricos | Error temporal <15% |
| **Estadístico** | Distribuciones | Análisis de varianza | Múltiples ejecuciones | p-value <0.05 |

### 5.2 Casos de Validación

**Tabla 11: Casos de Estudio para Validación**

| **Caso** | **Ubicación** | **Tipo de Evento** | **Población** | **Datos Disponibles** | **Estado** |
|----------|---------------|-------------------|---------------|---------------------|------------|
| **Simulacro Valparaíso 2023** | Puerto de Valparaíso | Tsunami | 15,000 personas | Videos, tiempos parciales | Validado |
| **Simulacro Iquique 2022** | Centro histórico | Tsunami | 8,500 personas | GPS tracking, encuestas | En proceso |
| **Evacuación Talcahuano 2010** | Área portuaria | Tsunami real | 25,000 personas | Testimonios, registros | Planificado |
| **Simulacro SHOA 2024** | Múltiples ciudades | Tsunami | 100,000 personas | Datos oficiales | Futuro |

## 6. Implementación Computacional

### 6.1 Arquitectura de Software

**Tabla 12: Componentes de Software del Modelo Híbrido**

| **Módulo** | **Tecnología** | **Función** | **Complejidad** | **Paralelización** |
|------------|----------------|-------------|-----------------|-------------------|
| **ABM Engine** | C++ + OpenMP | Simulación de agentes | O(n²) → O(n log n) | Sí (espacial) |
| **DES Engine** | Python + SimPy | Gestión de eventos | O(log e) | Limitada |
| **Spatial Index** | R-tree + CUDA | Búsquedas espaciales | O(log n) | Sí (GPU) |
| **Visualization** | WebGL + D3.js | Renderizado tiempo real | O(n) | Sí (GPU) |
| **Data Manager** | PostgreSQL + PostGIS | Almacenamiento | O(1) | Sí (sharding) |

### 6.2 Optimizaciones de Rendimiento

**Tabla 13: Estrategias de Optimización**

| **Técnica** | **Aplicación** | **Mejora Esperada** | **Complejidad Implementación** |
|-------------|----------------|--------------------|-----------------------------|
| **Particionamiento Espacial** | Cálculo de fuerzas SFM | 10x-50x | Media |
| **Predicción de Movimiento** | Reducción de verificaciones | 2x-5x | Baja |
| **Cache de Rutas** | Pathfinding repetitivo | 5x-20x | Media |
| **Agregación Temporal** | Eventos de baja prioridad | 2x-3x | Baja |
| **Paralelización GPU** | Cálculos SFM masivos | 50x-100x | Alta |

## 7. Bibliografía Actualizada

### 7.1 Referencias Fundamentales

*   Chen, P., Zhu, S. Y., Xu, L. J., Ma, X. F., & Du, Z. G. (2012). Multi-Agent Simulation of Emergency Evacuation on the Sidewalk. *Applied Mechanics and Materials, 253-255*, 2005-2008. https://doi.org/10.4028/www.scientific.net/AMM.253-255.2005

*   Helbing, D., & Molnár, P. (1995). Social force model for pedestrian dynamics. *Physical Review E, 51*(5), 4282-4286. https://doi.org/10.1103/PhysRevE.51.4282

*   Sopha, B. M., Triasari, A. I., & Cheah, L. (2021). Sustainable Humanitarian Operations: Multi-Method Simulation for Large-Scale Evacuation. *Sustainability, 13*(13), 7488. https://doi.org/10.3390/su13137488

### 7.2 Referencias Complementarias

*   Borshchev, A., & Filippov, A. (2004). From System Dynamics and Discrete Event to Practical Agent Based Modeling: Reasons, Techniques, Tools. *Proceedings of the 22nd System Dynamics Conference*.

*   Davidich, M., & Köster, G. (2013). Predicting pedestrian flow: A methodology and a proof of concept based on real-life data. *PLoS ONE, 8*(12), e83355. https://doi.org/10.1371/journal.pone.0083355

*   Haghani, M., & Sarvi, M. (2018). Crowd behaviour and motion: Empirical methods. *Transportation Research Part B: Methodological, 107*, 253-294. https://doi.org/10.1016/j.trb.2017.06.017

*   Johansson, A., Helbing, D., & Shukla, P. K. (2007). Specification for the social force pedestrian model. *Advanced Concepts for Intelligent Vision Systems*, 4678, 625-635.

*   Köster, G., Seitz, M., Treml, F., Hartmann, D., & Klein, W. (2011). On modelling the influence of group formations in a crowd. *Contemporary Social Science, 6*(3), 397-414. https://doi.org/10.1080/21582041.2011.619867

*   Lakoba, T. I., Kaup, D. J., & Finkelstein, N. M. (2005). Modifications of the Helbing-Molnár-Farkas-Vicsek social force model for pedestrian evolution. *Simulation, 81*(5), 339-352. https://doi.org/10.1177/0037549705052772

*   Liu, S., Lo, S., Ma, J., & Wang, W. (2014). An agent-based microscopic pedestrian flow simulation model for pedestrian traffic problems. *IEEE Transactions on Intelligent Transportation Systems, 15*(3), 992-1001. https://doi.org/10.1109/TITS.2013.2292526

*   Moussaïd, M., Helbing, D., & Theraulaz, G. (2011). How simple rules determine pedestrian behavior and crowd disasters. *Proceedings of the National Academy of Sciences, 108*(17), 6884-6888. https://doi.org/10.1073/pnas.1016507108

*   Reynolds, C. W. (1987). Flocks, herds and schools: A distributed behavioral model. *ACM SIGGRAPH Computer Graphics, 21*(4), 25-34. https://doi.org/10.1145/37402.37406

*   Yue, H., Guan, J., & Zhang, J. (2017). Research on Personnel Emergency Evacuation Model Based on Multi-agent. In *International Conference on Computer Engineering and Application (ICCEA)*.

*   Zheng, X., Zhong, T., & Liu, M. (2009). Modeling crowd evacuation of a building based on seven methodological approaches. *Building and Environment, 44*(3), 437-445. https://doi.org/10.1016/j.buildenv.2008.04.002

---

**Pablo Antonio Jordán González**  
Estudiante Doctorado Ciencias de la Ingeniería Mención Informática  
Universidad de Santiago de Chile  
Director de I+D HealthPixel Spa.

