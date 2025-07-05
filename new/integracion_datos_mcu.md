# Documento Técnico: Metamodelo Cartográfico Unificado (MCU)

## 1. El Problema: La Heterogeneidad de los Datos Geoespaciales

Uno de los mayores obstáculos para una gestión de desastres eficaz en Chile es la **fragmentación de la información**. Diferentes instituciones (SHOA, SERNAGEOMIN, INE, municipalidades) producen y gestionan datos geoespaciales cruciales, pero lo hacen utilizando formatos, esquemas y semánticas dispares. Esta heterogeneidad, descrita por Bizid et al. (2014) como sintáctica, esquemática y semántica, impide la integración automática y confiable de la información, forzando a realizar costosos y lentos procesos manuales de unificación.

### 1.1 Dimensiones de la Heterogeneidad

**Tabla 1: Tipos de Heterogeneidad en Datos Geoespaciales**

| **Tipo** | **Descripción** | **Ejemplo Práctico** | **Impacto en Integración** |
|----------|-----------------|----------------------|---------------------------|
| **Sintáctica** | Diferentes formatos de archivo | SHOA: Shapefile, INE: CSV, SERNAGEOMIN: KML | Requiere múltiples parsers y conversores |
| **Esquemática** | Diferentes estructuras de datos | Campo "población" vs "hab_total" vs "num_habitantes" | Mapeo manual de campos requerido |
| **Semántica** | Diferentes significados para conceptos similares | "Zona de riesgo alto" vs "Amenaza nivel 3" | Interpretación ambigua, errores de análisis |
| **Temporal** | Diferentes frecuencias de actualización | Censo cada 10 años vs datos sísmicos en tiempo real | Inconsistencias temporales en análisis |

El resultado es la creación de "islas tecnológicas" que no pueden comunicarse entre sí, una barrera crítica para obtener una visión holística y en tiempo real del riesgo.

## 2. La Solución: Un "Lenguaje Común" para los Datos de Desastres

El **Metamodelo Cartográfico Unificado (MCU)** es la solución arquitectónica de PIGEM a este problema. Su función principal es actuar como un **"lenguaje común" o un estándar de facto** para toda la información geoespacial relacionada con la gestión del riesgo de desastres.

### 2.1 Arquitectura Conceptual del MCU

```
┌─────────────────────────────────────────────────────────────┐
│                    FUENTES DE DATOS                         │
├─────────────┬─────────────┬─────────────┬─────────────────┤
│    SHOA     │ SERNAGEOMIN │     INE     │ MUNICIPALIDADES │
│ (Tsunamis)  │  (Sismos)   │  (Censos)   │   (Locales)     │
└─────────────┴─────────────┴─────────────┴─────────────────┘
              │             │             │             │
              ▼             ▼             ▼             ▼
┌─────────────────────────────────────────────────────────────┐
│                 CAPA DE ARMONIZACIÓN                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │ Validación  │  │ Normalización│  │ Enriquecimiento     │ │
│  │ Semántica   │  │ Sintáctica   │  │ de Metadatos        │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    MCU - NÚCLEO                             │
│  ┌─────────────────┐  ┌─────────────────────────────────┐  │
│  │ Base de Datos   │  │      Servicios Web OGC         │  │
│  │ Geoespacial     │  │  WMS │ WFS │ WCS │ CSW │ WPS    │  │
│  │ (PostGIS)       │  │                                 │  │
│  └─────────────────┘  └─────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   APLICACIONES CLIENTE                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │   PIGEM     │  │    QGIS     │  │  Visores Web        │ │
│  │ Simulador   │  │             │  │  Municipales        │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

*Figura 1: Arquitectura conceptual del Metamodelo Cartográfico Unificado*

*   **Definición**: El MCU no es un formato de archivo, sino un **marco conceptual y un conjunto de reglas formales** que definen cómo deben estructurarse los datos y, más importante aún, sus metadatos (los datos sobre los datos).
*   **Objetivo**: Garantizar que cualquier capa de información, sin importar su fuente, pueda ser integrada, comprendida y utilizada por la plataforma PIGEM de manera automática y sin ambigüedades.

## 3. Fundamentos en Estándares Internacionales

El MCU no se inventa desde cero. Se construye sobre la base de estándares abiertos e internacionales, lo que garantiza su robustez e interoperabilidad.

### 3.1. ISO 19115/19139: El ADN de los Metadatos

**Tabla 2: Elementos Principales del Perfil ISO 19115 para MCU**

| **Categoría** | **Elemento** | **Obligatorio** | **Descripción** | **Ejemplo** |
|---------------|--------------|-----------------|-----------------|-------------|
| **Identificación** | Título | Sí | Nombre descriptivo del dataset | "Zonas de Inundación por Tsunami - Valparaíso 2024" |
| | Resumen | Sí | Descripción del contenido | "Áreas potencialmente inundables por tsunami..." |
| | Palabras clave | Sí | Términos de búsqueda | "tsunami, inundación, riesgo, Valparaíso" |
| **Calidad** | Linaje | Sí | Origen y procesamiento | "Modelado COMCOT basado en batimetría SHOA" |
| | Precisión posicional | Sí | Error espacial estimado | "±5 metros" |
| | Completitud | Sí | Porcentaje de cobertura | "95% del área costera" |
| **Referencia Espacial** | SRS | Sí | Sistema de coordenadas | "EPSG:4326 (WGS84)" |
| | Extensión geográfica | Sí | Límites del área | "Bbox: -71.7,-33.1,-71.5,-33.0" |
| **Temporal** | Fecha creación | Sí | Cuándo se generó | "2024-03-15" |
| | Validez temporal | No | Período de vigencia | "2024-2029" |
| **Distribución** | Formato | Sí | Tipo de archivo | "Shapefile, GeoJSON" |
| | Contacto | Sí | Responsable técnico | "juan.perez@shoa.cl" |

*   **Estándar**: Es la norma de la Organización Internacional de Normalización (ISO) para los **metadatos de información geográfica**.
*   **Función en el MCU**: El MCU adopta un perfil (un subconjunto específico) de ISO 19115 para definir los campos de metadatos **obligatorios** para cualquier capa de datos que ingrese a PIGEM.
*   **Beneficio**: Al forzar el cumplimiento de este perfil de metadatos, el sistema puede **confiar** en la información que procesa y realizar validaciones automáticas. Como lo destaca Voski (2019), la estandarización de metadatos es fundamental para la interoperabilidad.

### 3.2. OGC (Open Geospatial Consortium): El Protocolo de Comunicación

**Tabla 3: Servicios Web OGC Implementados en MCU**

| **Servicio** | **Sigla** | **Función** | **Tipo de Datos** | **Ejemplo de Uso** |
|--------------|-----------|-------------|-------------------|-------------------|
| Web Map Service | WMS | Servir mapas como imágenes | Raster | Visualización de mapas de riesgo |
| Web Feature Service | WFS | Servir datos vectoriales | Vector | Descarga de polígonos de amenaza |
| Web Coverage Service | WCS | Servir datos de cobertura | Raster | Acceso a modelos de elevación |
| Catalogue Service | CSW | Catálogo de metadatos | Metadatos | Búsqueda de datasets disponibles |
| Web Processing Service | WPS | Procesamiento remoto | Procesos | Análisis espacial automatizado |

*   **Estándar**: El OGC define los estándares para los **servicios web geoespaciales**.
*   **Función en el MCU**: Una vez que los datos son ingeridos y validados conforme al perfil ISO, se publican a través de servicios web estándar del OGC.
*   **Beneficio**: Esto desacopla el almacenamiento de los datos de su uso. Cualquier aplicación cliente (un visor web, QGIS, ArcGIS) que "hable" el idioma OGC puede conectarse a PIGEM y consumir sus capas de datos de manera estandarizada.

## 4. Flujo de Trabajo del MCU

### 4.1 Proceso de Ingesta y Armonización

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   INGESTA       │    │   VALIDACIÓN    │    │  NORMALIZACIÓN  │
│                 │    │                 │    │                 │
│ • Detección     │───▶│ • Esquema       │───▶│ • Proyección    │
│   automática    │    │ • Metadatos     │    │ • Formato       │
│ • Extracción    │    │ • Geometría     │    │ • Codificación  │
│   metadatos     │    │ • Completitud   │    │ • Atributos     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  PUBLICACIÓN    │    │  ALMACENAMIENTO │    │ ENRIQUECIMIENTO │
│                 │    │                 │    │                 │
│ • Servicios WMS │◀───│ • PostGIS       │◀───│ • Índices       │
│ • Servicios WFS │    │ • Índices       │    │   espaciales    │
│ • Catálogo CSW  │    │   espaciales    │    │ • Metadatos     │
│ • APIs REST     │    │ • Backup        │    │   adicionales   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

*Figura 2: Flujo de trabajo del proceso de ingesta y armonización de datos*

### 4.2 Pasos Detallados del Proceso

**Tabla 4: Etapas del Proceso de Armonización**

| **Etapa** | **Actividades** | **Herramientas** | **Criterios de Éxito** |
|-----------|-----------------|------------------|------------------------|
| **1. Ingesta** | • Detección automática de archivos<br>• Identificación de formato<br>• Extracción de metadatos | GDAL/OGR, Python scripts | • Formato reconocido<br>• Metadatos extraídos |
| **2. Validación** | • Verificación de esquema<br>• Validación geométrica<br>• Completitud de atributos | PostGIS, Shapely | • Geometrías válidas<br>• Campos obligatorios presentes |
| **3. Normalización** | • Reproyección a WGS84<br>• Estandarización de atributos<br>• Codificación UTF-8 | PROJ, Pandas | • SRS uniforme<br>• Atributos normalizados |
| **4. Enriquecimiento** | • Cálculo de índices espaciales<br>• Generación de metadatos<br>• Asignación de identificadores | PostGIS, UUID | • Índices creados<br>• Metadatos ISO completos |
| **5. Publicación** | • Creación de servicios web<br>• Registro en catálogo<br>• Configuración de acceso | GeoServer, PyCSW | • Servicios disponibles<br>• Metadatos publicados |

1.  **Ingesta**: Un script de ingesta recibe una nueva capa de datos (ej. un Shapefile de zonas de inundación del SHOA).
2.  **Extracción de Metadatos**: El sistema intenta extraer los metadatos existentes.
3.  **Validación Semántica**: Compara los metadatos extraídos con el perfil ISO 19115 del MCU.
    *   **Si cumple**: El dato pasa a la siguiente fase.
    *   **Si no cumple**: El sistema intenta corregir automáticamente las inconsistencias comunes (ej. estandarizar nombres de campos) o, en caso de fallo, lo marca para revisión manual por un experto.
4.  **Almacenamiento**: La capa de datos, junto con sus metadatos estandarizados, se almacena en una base de datos geoespacial central (PostGIS).
5.  **Publicación**: Se crea un nuevo `endpoint` de servicio (WMS/WFS) para que la capa esté disponible para el resto de los módulos de PIGEM y para consumidores externos.

## 5. Capas de Información Gestionadas por el MCU

El MCU está diseñado para armonizar tres categorías principales de capas, siguiendo la metodología de análisis de riesgo establecida por UNDRR (2017):

### 5.1 Taxonomía de Capas de Información

**Tabla 5: Clasificación de Capas de Información en MCU**

| **Categoría** | **Subcategoría** | **Tipo de Datos** | **Fuente Principal** | **Frecuencia Actualización** | **Ejemplos** |
|---------------|------------------|-------------------|---------------------|------------------------------|--------------|
| **AMENAZA** | Sísmica | Vector/Raster | SERNAGEOMIN | Anual | Fallas activas, zonificación sísmica |
| | Tsunami | Vector | SHOA | Quinquenal | Cartas de inundación, tiempos de llegada |
| | Volcánica | Vector/Raster | SERNAGEOMIN | Anual | Peligros volcánicos, lahares |
| | Climática | Raster | DMC | Diaria | Precipitaciones, vientos |
| | Incendios | Raster | CONAF | Semanal | Índice de peligro, combustible |
| **VULNERABILIDAD** | Física | Vector | INE, Municipios | Censal | Tipología constructiva, año construcción |
| | Social | Vector | INE, CASEN | Censal | Educación, dependencia, pobreza |
| | Económica | Vector | SII, INE | Anual | Avalúos, actividad económica |
| | Ambiental | Raster | MMA | Anual | Ecosistemas frágiles, biodiversidad |
| **CAPACIDAD** | Infraestructura | Vector | Municipios | Semestral | Hospitales, escuelas, cuarteles |
| | Transporte | Vector | MOP, Municipios | Anual | Red vial, puentes, puertos |
| | Comunicaciones | Vector | SUBTEL | Anual | Antenas, fibra óptica |
| | Respuesta | Vector | SENAPRED | Semestral | Albergues, equipos de emergencia |

### 5.2 Modelo de Datos Unificado

**Tabla 6: Estructura de Metadatos Extendida para Gestión de Riesgos**

| **Campo** | **Tipo** | **Descripción** | **Vocabulario Controlado** |
|-----------|----------|-----------------|---------------------------|
| `risk_category` | String | Categoría principal | "amenaza", "vulnerabilidad", "capacidad" |
| `risk_subcategory` | String | Subcategoría específica | "sismica", "tsunami", "social", etc. |
| `hazard_type` | String | Tipo de amenaza | Taxonomía UNDRR |
| `severity_scale` | String | Escala de severidad | "mercalli", "richter", "beaufort", etc. |
| `return_period` | Integer | Período de retorno (años) | 10, 25, 50, 100, 200, 500 |
| `confidence_level` | Float | Nivel de confianza (0-1) | 0.95, 0.90, 0.85 |
| `uncertainty_type` | String | Tipo de incertidumbre | "aleatorio", "epistémico", "modelo" |
| `validation_status` | String | Estado de validación | "validado", "preliminar", "experimental" |

La integración coherente de estas tres categorías de datos es lo que permite al motor de simulación realizar análisis de riesgo complejos y realistas.

## 6. Implementación Técnica

### 6.1 Stack Tecnológico

**Tabla 7: Componentes Tecnológicos del MCU**

| **Componente** | **Tecnología** | **Versión** | **Función** | **Licencia** |
|----------------|----------------|-------------|-------------|--------------|
| **Base de Datos** | PostgreSQL + PostGIS | 15.0 + 3.4 | Almacenamiento geoespacial | Open Source |
| **Servidor de Mapas** | GeoServer | 2.24 | Servicios web OGC | Open Source |
| **Catálogo de Metadatos** | PyCSW | 2.6 | Servicio CSW | Open Source |
| **Procesamiento** | GDAL/OGR | 3.7 | Conversión de formatos | Open Source |
| **API REST** | FastAPI | 0.104 | Interfaz de programación | Open Source |
| **Orquestación** | Docker Compose | 2.21 | Despliegue de servicios | Open Source |

### 6.2 Ejemplo de Implementación

```python
# Ejemplo de código para ingesta automática de datos
class MCUDataIngester:
    def __init__(self, db_connection, metadata_validator):
        self.db = db_connection
        self.validator = metadata_validator
        
    def ingest_dataset(self, file_path, source_institution):
        """
        Ingesta un dataset al MCU siguiendo el protocolo estandarizado
        """
        # 1. Detección automática de formato
        dataset_info = self.detect_format(file_path)
        
        # 2. Extracción de metadatos
        metadata = self.extract_metadata(file_path, dataset_info)
        
        # 3. Validación según perfil ISO 19115
        validation_result = self.validator.validate(metadata)
        
        if validation_result.is_valid:
            # 4. Normalización y almacenamiento
            normalized_data = self.normalize_dataset(file_path, metadata)
            dataset_id = self.store_dataset(normalized_data, metadata)
            
            # 5. Publicación de servicios
            self.publish_services(dataset_id, metadata)
            
            return {"status": "success", "dataset_id": dataset_id}
        else:
            return {"status": "error", "errors": validation_result.errors}
```

## 7. Casos de Uso y Beneficios

### 7.1 Escenarios de Aplicación

**Tabla 8: Casos de Uso del MCU**

| **Escenario** | **Actores** | **Beneficio** | **Métricas de Éxito** |
|---------------|-------------|---------------|----------------------|
| **Planificación Municipal** | Municipalidad de Valparaíso | Acceso integrado a datos de riesgo | Reducción 70% tiempo de preparación de informes |
| **Respuesta de Emergencia** | SENAPRED, Bomberos | Información unificada en tiempo real | Mejora 40% tiempo de respuesta |
| **Investigación Académica** | Universidades | Datos estandarizados para análisis | Incremento 200% en publicaciones colaborativas |
| **Desarrollo de Políticas** | MINVU, MOP | Base de evidencia consistente | Reducción 50% tiempo de evaluación de proyectos |

### 7.2 Indicadores de Desempeño

**Tabla 9: KPIs del MCU**

| **Indicador** | **Métrica** | **Valor Objetivo** | **Frecuencia Medición** |
|---------------|-------------|-------------------|------------------------|
| **Interoperabilidad** | % datasets integrados automáticamente | >85% | Mensual |
| **Calidad de Datos** | % metadatos completos según ISO 19115 | >95% | Trimestral |
| **Disponibilidad** | Uptime servicios web | >99.5% | Continua |
| **Adopción** | Número de organizaciones usuarias | >20 | Semestral |
| **Eficiencia** | Tiempo promedio de ingesta | <2 horas | Mensual |

## 8. Bibliografía Actualizada

### 8.1 Referencias Fundamentales

*   Aydinoglu, A. C., & Bilgin, M. S. (2015). Developing an open geographic data model and analysis tools for disaster management: landslide case. *Natural Hazards and Earth System Sciences, 15*(2), 335–347. https://doi.org/10.5194/nhess-15-335-2015

*   Bizid, I., Faiz, S., Boursier, P., & Yusuf, J. C. M. (2014). Integration of Heterogeneous Spatial Databases for Disaster Management. In J. Parsons & D. Chiu (Eds.), *Advances in Conceptual Modeling* (pp. 77–86). Springer International Publishing. https://doi.org/10.1007/978-3-319-14139-8_10

*   Mazimwe, A., Hammouda, I., & Gidudu, A. (2019). An Empirical Evaluation of Data Interoperability—A Case of the Disaster Management Sector in Uganda. *ISPRS International Journal of Geo-Information, 8*(11), 484. https://doi.org/10.3390/ijgi8110484

### 8.2 Referencias Complementarias

*   Albano, R., Sole, A., Adamowski, J., & Perrone, A. (2018). Modelling large scale floods in the Mediterranean basin: the case of the Metaponto coastal plain. *Water, 10*(8), 1011. https://doi.org/10.3390/w10081011

*   Craglia, M., & Annoni, A. (2007). INSPIRE: An innovative approach to the development of spatial data infrastructures in Europe. In *Research and Theory in Advancing Spatial Data Infrastructure Concepts* (pp. 93-105). ESRI Press.

*   International Organization for Standardization. (2014). *ISO 19115-1:2014 Geographic information — Metadata — Part 1: Fundamentals*. ISO.

*   Open Geospatial Consortium. (2023). *OGC Web Map Service (WMS) Implementation Specification, Version 1.3.0*. OGC Document 06-042r7.

*   United Nations Office for Disaster Risk Reduction [UNDRR]. (2017). *Terminology on Disaster Risk Reduction*. UNDRR Publications. https://www.undrr.org/terminology

*   Voski, A. (2019, May 7). *Why geospatial standards matter: Benefits and challenges of EO data standardization*. Space4Water Portal. https://space4water.org/news/why-geospatial-standards-matter-benefits-and-challenges-eo-data-standardization

*   Zlatanova, S., & Holweg, D. (2004). 3D geo-information in emergency response: a framework. In *Proceedings of the 4th International Symposium on Mobile Mapping Technology* (pp. 1-6).

---

**Pablo Antonio Jordán González**  
Estudiante Doctorado Ciencias de la Ingeniería Mención Informática  
Universidad de Santiago de Chile  
Director de I+D HealthPixel Spa. 