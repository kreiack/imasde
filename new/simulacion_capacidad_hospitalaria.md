# Simulación de Capacidad Hospitalaria y Respuesta Médica en Emergencias (SCH-RME)

## 1. Fundamentación Científica y Componente de Investigación

### 1.1 Descripción del Problema

La gestión de desastres naturales revela una vulnerabilidad crítica y recurrente: la **saturación y potencial colapso de la red de atención médica**. Durante eventos de víctimas masivas (EVM), los hospitales y servicios de urgencia enfrentan un aumento abrupto y desproporcionado de la demanda que excede su capacidad nominal. Este problema, conocido como **"surge capacity"**, no es meramente logístico, sino un desafío multidimensional con componentes:

- **Dimensión de Flujo**: La llegada no lineal de pacientes, con picos de demanda que superan la capacidad de triaje, admisión y tratamiento.
- **Dimensión de Recursos**: La escasez de recursos críticos y finitos, como camas de Unidad de Cuidados Intensivos (UCI), ventiladores mecánicos, personal especializado (cirujanos, intensivistas), y suministros médicos (sangre, fármacos).
- **Dimensión Espacial**: La distribución geográfica de la demanda puede no coincidir con la oferta de servicios, generando saturación en hospitales cercanos al epicentro del desastre mientras otros permanecen subutilizados.
- **Dimensión Temporal**: Las decisiones de asignación de recursos deben tomarse en tiempo real, bajo alta incertidumbre y con consecuencias directas sobre la morbimortalidad de los pacientes.

Los modelos de planificación actuales se basan en protocolos estáticos y estimaciones promedio, que son insuficientes para gestionar la dinámica caótica de un EVM. Se carece de herramientas que permitan simular, predecir y optimizar la respuesta de la red sanitaria en tiempo real.

### 1.2 Hipótesis

**Hipótesis Principal (H1):** La implementación de un módulo de **Simulación de Eventos Discretos (DES)**, integrado con los datos de flujo de evacuados generados por la plataforma PIGEM, permitirá modelar y optimizar la asignación de recursos críticos en la red hospitalaria regional, logrando una **reducción de al menos un 25% en la mortalidad evitable** y un **30% en los tiempos de espera para atención crítica** en comparación con los protocolos de gestión estáticos.

**Hipótesis Secundarias:**
- **H2 (Optimización de Traslados):** Un algoritmo de optimización basado en la simulación permitirá balancear la carga de pacientes entre hospitales, reduciendo la saturación de los centros de alta complejidad en más de un 40%.
- **H3 (Gestión de Recursos Críticos):** La simulación predictiva de la demanda de recursos (ventiladores, camas UCI) permitirá una asignación proactiva, disminuyendo los quiebres de stock en más de un 60%.
- **H4 (Integración con Evacuación):** La sincronización del modelo hospitalario con el modelo de evacuación (ABM) identificará cuellos de botella en la ruta `zona de desastre → hospital`, optimizando el flujo completo del paciente.

### 1.3 Pregunta de Investigación

**Pregunta Principal:** ¿Cómo puede un sistema de simulación híbrido (DES-ABM) modelar la interacción compleja entre la evacuación de una población y la respuesta de la red hospitalaria para optimizar la asignación de recursos médicos críticos y minimizar la mortalidad durante un evento de víctimas masivas?

**Preguntas Secundarias:**
1. ¿Cuáles son las variables y parámetros clave que determinan la capacidad de respuesta de un hospital ante un flujo masivo de pacientes y cómo pueden ser modelados dinámicamente?
2. ¿Qué algoritmos de optimización son más efectivos para el balanceo de carga de pacientes en tiempo real entre múltiples nodos de una red sanitaria heterogénea?
3. ¿Cómo puede validarse un modelo de simulación de respuesta hospitalaria ante la escasez de datos detallados de eventos de desastre pasados?
4. ¿De qué manera las decisiones tomadas durante la fase de evacuación (ej. rutas, puntos de encuentro) impactan la eficiencia de la respuesta sanitaria posterior?

### 1.4 Metodología de Investigación

Se empleará una metodología de **modelado y simulación computacional**, validada mediante un enfoque mixto:
1.  **Desarrollo del Modelo DES**: Creación de un modelo de eventos discretos para simular los procesos internos de un hospital (triaje, espera, tratamiento, alta/traslado).
2.  **Calibración del Modelo**: Utilización de datos operacionales de hospitales chilenos en condiciones normales y datos de simulacros de emergencia para ajustar los parámetros del modelo.
3.  **Validación con Juicio de Expertos**: Paneles con médicos de urgencia, jefes de UCI y gestores de redes asistenciales para validar la lógica y los supuestos del modelo.
4.  **Integración con PIGEM**: Acoplamiento del módulo SCH-RME con el motor ABM de PIGEM para recibir como input el flujo de pacientes simulado.
5.  **Experimentación Computacional**: Ejecución de miles de simulaciones bajo diferentes escenarios de desastre para probar las hipótesis y evaluar estrategias de mitigación.

## 2. Arquitectura y Componentes del Módulo SCH-RME

### 2.1 Modelo Conceptual

El módulo SCH-RME funcionará como un componente especializado dentro de PIGEM. Su lógica se basa en un **sistema de colas y servidores** que representa la red hospitalaria.

- **Entidades**: Pacientes, clasificados por nivel de triaje (ej. START).
- **Servidores**: Recursos hospitalarios (camas, pabellones, personal).
- **Colas**: Tiempos de espera para cada recurso.
- **Eventos**: Llegada, inicio de tratamiento, fin de tratamiento, traslado, fallecimiento.

### 2.2 Variables Clave de Simulación

#### Inputs del Modelo (desde PIGEM y configuración)
- **Tasa de llegada de pacientes**: Distribución temporal y geográfica de heridos.
- **Distribución de severidad**: Porcentaje de pacientes en cada categoría de triaje.
- **Capacidad base de la red**: Número de camas (UCI, UTI, básicas), pabellones, personal por hospital.
- **Tiempos de servicio**: Duración promedio de cada procedimiento médico.

#### Outputs del Modelo (Métricas de Desempeño)
- **Tasa de mortalidad evitable**: % de pacientes fallecidos por falta de recursos.
- **Tiempo de espera promedio**: Por categoría de triaje y por recurso.
- **Tasa de ocupación de recursos**: Utilización de camas UCI, ventiladores, etc.
- **Número de traslados inter-hospitalarios**: Indicador de balanceo de carga.
- **KPIs de resiliencia**: Tiempo hasta la saturación y tiempo de recuperación del sistema.

### 2.3 Integración con PIGEM

1.  **Input de PIGEM**: El motor de simulación de evacuación (ABM) genera un flujo de agentes heridos. Este flujo, con coordenadas y tiempo, es el input principal del módulo SCH-RME.
2.  **Procesamiento en SCH-RME**: El módulo DES procesa la llegada de estos "pacientes virtuales", los asigna a los hospitales más cercanos y simula su tratamiento.
3.  **Feedback a PIGEM**: El estado de la red hospitalaria (hospitales saturados) puede ser enviado de vuelta a PIGEM para influir en las decisiones de los vehículos de emergencia en tiempo real (ej. desviar ambulancias).

## 3. Desafíos y Contribuciones

### 3.1 Desafíos Científicos
- **Modelado de comportamiento humano en crisis**: Tanto de pacientes como del personal médico bajo estrés.
- **Validación con datos escasos**: Los datos de desastres reales son fragmentarios. Se requiere triangulación metodológica.
- **Optimización en tiempo real**: Desarrollar algoritmos de asignación que sean computacionalmente eficientes para la toma de decisiones urgentes.

### 3.2 Contribución del Proyecto
- **Herramienta pionera en Chile**: Primera plataforma de simulación integrada de evacuación y respuesta médica.
- **Metodología de validación**: Un nuevo marco para validar simulaciones de sistemas de salud en emergencias.
- **Soporte a la decisión**: Una herramienta tangible para que los Servicios de Salud y SENAPRED planifiquen, capaciten y gestionen mejor los recursos ante un desastre.
- **Publicaciones científicas**: Contribuciones en las áreas de investigación de operaciones en salud, simulación de desastres y sistemas de información de emergencia.

## 4. Referencias Bibliográficas

- Araz, O. M., et al. (2012). Simulation modeling for pandemic influenza preparedness: a case study for a state in the US. *Journal of the Operational Research Society*.
- Taaffe, K., et al. (2006). Improving hospital evacuation planning using simulation. *Operations Research*.
- Channouf, N., et al. (2007). A multi-agent model for hospital reception and emergency department management. *International Conference on Industrial Engineering and Systems Management*.
- Gul, M., & Guneri, A. F. (2015). A comprehensive review of simulation models for emergency department and hospital capacity. *Proceedings of the 2015 Winter Simulation Conference*. 