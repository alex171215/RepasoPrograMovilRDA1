// ============================================================
// BANCO DE PREGUNTAS — RDA2 TEMA 7-8
// Material Design 3, Material You y Navegación Declarativa
// ============================================================
const questionsRDA2Tema78 = [
  {
    question: "¿Cuál es la innovación central de Material You (Material Design 3) que lo diferencia fundamentalmente de versiones anteriores del sistema de diseño de Google?",
    options: ["La adopción de un sistema de rejilla fija de 12 columnas que garantiza layouts uniformes en todos los dispositivos Android.", "La personalización dinámica del esquema de colores de la app basada en el fondo de pantalla del usuario a través del Motor Monet, adaptando la UI a la identidad visual de cada persona.", "La eliminación del sistema de temas (dark/light) en favor de un único tema neutro que garantiza accesibilidad universal.", "La introducción de animaciones de transición predefinidas que el sistema aplica automáticamente entre pantallas sin configuración del desarrollador."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Material You democratiza el diseño: el Motor Monet extrae los colores dominantes del fondo de pantalla del usuario y genera una paleta armoniosa personalizada que se aplica a toda la UI de la app. La interfaz se adapta dinámicamente a la identidad visual de cada usuario."
  },
  {
    question: "¿Qué es el Motor Monet y cuál es su función en el ecosistema de Material You?",
    options: ["Es el compilador de estilos de Material Design 3 que convierte las definiciones de colores en XML a tokens de diseño de Compose.", "Es el motor de extracción de colores del fondo de pantalla del dispositivo: analiza la imagen de fondo y genera paletas de colores personalizadas coherentes para toda la UI del sistema y las apps.", "Es el sistema de animaciones de Material Design 3 que calcula las transiciones físicas entre componentes de UI basándose en los principios de la mecánica de fluidos.", "Es el procesador de accesibilidad que ajusta automáticamente el contraste y el tamaño de fuente según las preferencias de accesibilidad del usuario."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El Motor Monet es el corazón técnico de Material You: analiza el fondo de pantalla del usuario, extrae los colores dominantes y genera automáticamente paletas harmoniosas de Primary, Secondary, Tertiary y Surface que se aplican tanto al sistema operativo como a las apps que soportan Material You."
  },
  {
    question: "¿Cuál es la función de dynamicDarkColorScheme() y dynamicLightColorScheme() en la implementación de Material You en API 31+?",
    options: ["Son funciones que generan esquemas de colores aleatorios para pruebas de diseño en el entorno de desarrollo de Android Studio.", "Son las funciones que acceden a la paleta generada por el Motor Monet del dispositivo y retornan un esquema de colores dinámico (oscuro o claro) basado en el fondo de pantalla actual del usuario.", "Son las funciones que convierten los colores definidos en el archivo colors.xml al sistema de tokens de Material Design 3.", "Son las funciones del compilador K2 que pre-generan los esquemas de colores para reducir el tiempo de carga de la UI en el primer lanzamiento."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. dynamicDarkColorScheme(context) y dynamicLightColorScheme(context) son las funciones que Material You expone para acceder a los colores generados por el Motor Monet. Si el dispositivo soporta colores dinámicos (Build.VERSION.SDK_INT >= 31), se usan; en caso contrario, se aplica el esquema estático definido por el desarrollador."
  },
  {
    question: "¿Cuál es la diferencia crítica entre la naturaleza del tema en el sistema Java/XML vs Jetpack Compose según la tabla comparativa del Tema 7?",
    options: ["En XML el tema se define en resources y en Compose se define en el ViewModel; la diferencia es solo de ubicación del código.", "En Java/XML el tema es estático, definido en archivos XML rígidos; en Compose el tema es una función reactiva basada en el estado que se actualiza sin reiniciar la Activity, mediante Recomposición Inteligente.", "En XML el tema solo puede ser claro u oscuro; en Compose el tema puede tener un número ilimitado de variantes.", "En Java/XML el tema es aplicado por el compilador K2 en tiempo de compilación; en Compose el tema se aplica en tiempo de ejecución con overhead adicional."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La diferencia es filosófica: en XML, el tema es estático. Cambiar el tema requiere recrear la Activity (con parpadeos visuales). En Compose, el tema es una función reactiva: cuando cambia (dark/light, Material You), Compose detecta el cambio de estado y recompone solo los componentes afectados, sin reiniciar la pantalla, con transición fluida y continua."
  },
  {
    question: "¿Cuál es el impacto en la experiencia de usuario cuando Material You cambia el fondo de pantalla, según la tabla comparativa del Tema 7?",
    options: ["En ambos sistemas (XML y Compose) el cambio de fondo de pantalla requiere que el usuario reinicie la app para que el nuevo tema sea aplicado.", "En XML: requiere recreación de la Activity y produce parpadeos visuales; en Compose: la actualización del tema es automática e inmediata, con transición fluida y sin interrumpir el flujo del usuario.", "En XML: la actualización es automática a través de callbacks del sistema; en Compose: requiere que el desarrollador llame manualmente a invalidate() para forzar la recomposición.", "En ambos sistemas el Motor Monet aplica el nuevo tema sin interacción del desarrollador, siendo la única diferencia el tiempo de respuesta (150ms vs 250ms)."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Esta es la ventaja de la reactividad de Compose: cuando el usuario cambia el fondo de pantalla, el Motor Monet genera nuevos colores, dynamicColorScheme() retorna los nuevos valores, Compose detecta el cambio de estado del tema y recompone la UI con los nuevos colores de forma inmediata y sin parpadeos, a diferencia del sistema XML que requiere recrear la Activity."
  },
  {
    question: "¿Cuál es la función del rol de color Primary en Material Design 3 y qué tipo de componentes lo utilizan?",
    options: ["Primary define el color de fondo de todas las pantallas de la app; los Composables usan este color para garantizar que la UI sea coherente con el tema del sistema.", "Primary es el color de máximo acento y acción: componentes de alta prioridad como FABs (Floating Action Buttons), botones de acción principal y elementos de navegación activa lo usan para indicar la acción más importante de la pantalla.", "Primary es el color del texto principal en toda la app; no se aplica a componentes interactivos sino exclusivamente a elementos tipográficos.", "Primary es el color de los bordes y divisores de la UI; Material Design 3 lo usa para separar secciones de contenido de forma jerárquica."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Primary es el color de máxima jerarquía visual: representa la acción o estado más importante de la pantalla. FABs, botones primarios, elementos de navegación activa lo usan. Es el color que el Motor Monet extrae del fondo de pantalla como tono dominante y que define toda la paleta."
  },
  {
    question: "¿Qué establece el estándar de contraste mínimo de Material Design 3 para texto y elementos interactivos?",
    options: ["Un contraste mínimo de 3:1 entre el texto y el fondo, garantizando legibilidad para usuarios con visión normal.", "Un contraste mínimo de 4.5:1 entre el texto/elementos interactivos y su fondo, garantizando legibilidad para usuarios con dificultades visuales, alineado con las pautas de accesibilidad WCAG.", "Un contraste mínimo de 7:1 solo para texto de tamaño pequeño (<12sp), aplicando niveles más permisivos para texto grande.", "Un contraste mínimo calculado dinámicamente por el Motor Monet sin un valor fijo, priorizando la armonía estética sobre la accesibilidad."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Material Design 3 establece un contraste mínimo de 4.5:1 para texto y elementos interactivos, alineado con las pautas de accesibilidad WCAG 2.1 nivel AA. El sistema usa Legibilidad Algorítmica: los colores se ajustan automáticamente para mantener este contraste incluso cuando el Motor Monet genera paletas oscuras o muy saturadas."
  },
  {
    question: "¿Qué es el Semantic Color en Material Design 3 y por qué es preferido sobre valores de color fijos (ej. #FF0000)?",
    options: ["El Semantic Color es el nombre técnico del Motor Monet; los colores se llaman semánticos porque se derivan del significado visual del fondo de pantalla del usuario.", "El Semantic Color usa nombres lógicos basados en el rol (ej. primary, onSurface, error) en lugar de valores fijos hexadecimales, permitiendo que el mismo componente tenga el color correcto automáticamente en temas claro, oscuro y Material You.", "El Semantic Color es un sistema de 256 colores predefinidos por Google que garantiza la coherencia visual entre todas las apps del ecosistema Android.", "El Semantic Color es el nombre que Material Design 3 da al alpha (transparencia) de los componentes de UI, diferenciándolo del color base del componente."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El Semantic Color es 'usar nombres lógicos para colores en lugar de valores fijos'. En lugar de `Color(0xFF6200EE)` en el código, se usa `MaterialTheme.colorScheme.primary`. Cuando el tema cambia (oscuro, claro, Material You personalizado), el token primary automáticamente tiene el color correcto para ese contexto."
  },
  {
    question: "¿Por qué el material del Tema 7 califica de 'pecado capital del desarrollo móvil' el hardcodeo de texto en el código?",
    options: ["Porque el compilador K2 no puede realizar optimizaciones AOT en Strings literales hardcodeados, degradando el rendimiento de la app.", "Porque los Strings hardcodeados son imposibles de traducir a otros idiomas, inaccesibles para TalkBack, y no pueden adaptarse culturalmente, bloqueando la internacionalización y la accesibilidad de la app.", "Porque Material Design 3 no puede aplicar la tipografía de Material You a Strings definidos directamente en el código sin pasar por strings.xml.", "Porque Room Database no puede indexar Strings hardcodeados, bloqueando las búsquedas textuales en la base de datos."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Tres razones críticas: (1) Accesibilidad: TalkBack no puede interpretar correctamente texto hardcodeado para lectores de pantalla. (2) Escalabilidad: traducir la app a otro idioma requiere buscar y reemplazar manualmente todos los Strings en el código. (3) Localización: formatos culturales (fechas, monedas) no pueden adaptarse por región."
  },
  {
    question: "¿Cuál es la función de strings.xml en el sistema de recursos de Android y por qué el Tema 7 lo llama 'la arquitectura que permite que tu App hable al mundo'?",
    options: ["strings.xml almacena las claves de encriptación de la app para que no sean hardcodeadas en el código Kotlin, mejorando la seguridad.", "strings.xml es el repositorio centralizado de todos los textos de la app: centralizar los textos aquí permite traducción a múltiples idiomas sin tocar el código fuente, soporte correcto de TalkBack para accesibilidad, y adaptación cultural de formatos.", "strings.xml define los tokens de tipografía de Material Design 3 (nombre de fuente, pesos, tamaños) que el sistema usa para aplicar el tema de texto.", "strings.xml es el sistema de caché de textos de la app: Android lo usa para evitar recrear objetos String en cada recomposición de Jetpack Compose."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. strings.xml es la base de la internacionalización (i18n): un archivo strings.xml por idioma y el sistema selecciona automáticamente el correcto según la configuración del dispositivo. Esto habilita: traducción (strings-es, strings-en, strings-fr), accesibilidad (TalkBack lee el recurso), y localización (monedas, fechas adaptadas por región)."
  },
  {
    question: "¿Cómo diferencia Material Design 3 la jerarquía visual de los componentes sin depender del matiz (hue) del color?",
    options: ["Usando el tamaño y el grosor del borde de los componentes: componentes más importantes tienen bordes más gruesos.", "Basándose en la luminancia (luminosidad) del color en lugar del matiz: la jerarquía se establece por qué tan claro u oscuro es el color, garantizando que la estructura visual sea comprensible incluso en condiciones de daltonismo.", "Usando el tamaño de fuente como indicador de jerarquía: los textos más grandes corresponden a los elementos de mayor prioridad.", "Aplicando animaciones de entrada más lentas a los componentes de mayor jerarquía para atraer la atención del usuario."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Material Design 3 establece que 'la jerarquía se basa en la luminancia'. Esto garantiza que la UI sea accesible para usuarios con daltonismo: la distinción entre primary y secondary no requiere percibir la diferencia de matiz (rojo vs verde), sino la diferencia de luminosidad (oscuro vs claro)."
  },
  {
    question: "¿Cuál es el rol del componente NavHost en la arquitectura de navegación de Jetpack Compose?",
    options: ["Es el cerebro estratégico que gestiona el estado del Back Stack y coordina las transiciones entre pantallas.", "Es el escenario dinámico: un contenedor que intercambia los Composables visibles según la ruta activa del NavController, manteniendo la coherencia visual durante la navegación.", "Es el mapa declarativo de todos los destinos y conexiones lógicas del grafo de navegación.", "Es el componente que serializa los argumentos de navegación con @Serializable para garantizar la seguridad de tipos en API 36."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El NavHost es el 'escenario teatral' de la navegación: recibe instrucciones del NavController y muestra el Composable correspondiente a la ruta activa. Cuando el NavController navega a una nueva ruta, el NavHost intercambia el Composable visible. Es el contenedor dinámico donde la 'escena' cambia mientras el 'director' (NavController) lo orquesta."
  },
  {
    question: "¿Cuál es la trilogía de componentes de la arquitectura de navegación de Jetpack Compose y el rol de cada uno?",
    options: ["NavController (Back Stack), NavHost (contenedor visual), NavGraph (mapa de destinos): trabajan juntos para gestionar el estado de navegación, la presentación visual y la estructura lógica de la app respectivamente.", "NavController (animaciones), NavHost (estado), NavGraph (componentes): forman el sistema de transiciones visuales entre pantallas en API 36.", "NavController (rutas), NavHost (argumentos), NavGraph (serialización): implementan el sistema de Navegación Tipada con contratos @Serializable.", "NavController (compilación), NavHost (ejecución), NavGraph (renderizado): representan las tres fases del ciclo de vida de la navegación en Compose."],
    correctIndex: 0,
    feedback: "La respuesta correcta es a. Los tres roles: NavController = 'cerebro estratégico' (gestiona el Back Stack, coordina movimiento entre destinos, transfiere argumentos). NavHost = 'escenario dinámico' (contenedor que intercambia Composables según la ruta activa). NavGraph = 'mapa declarativo' (define los destinos, sus conexiones y los argumentos de cada uno)."
  },
  {
    question: "¿Cuál es la ventaja del NavGraph de Compose sobre el grafo XML legacy en términos de refactorización?",
    options: ["El NavGraph de Compose es procesado por el compilador K2 que puede refactorizar automáticamente las rutas sin intervención del desarrollador.", "Al ser código Kotlin programático, el NavGraph permite renombrar una ruta o cambiar sus parámetros con soporte completo del compilador: si un destino es renombrado, todas las referencias son detectadas automáticamente.", "El NavGraph de Compose genera automáticamente un archivo XML compatible para retrocompatibilidad con proyectos legacy.", "El NavGraph de Compose no requiere refactorización porque las rutas son generadas dinámicamente por el sistema en tiempo de ejecución."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El beneficio de ser código Kotlin: con Navegación Tipada (@Serializable), si renombras la clase ProductDetail a ProductScreen, el IDE detecta todas las referencias y el compilador valida que el grafo sea coherente. Con rutas en String, renombrar requería buscar manualmente todas las cadenas de texto en el proyecto, arriesgando omisiones."
  },
  {
    question: "¿Cuál es el Back Stack en la navegación de Android y cómo lo gestiona el NavController?",
    options: ["Es la pila de datos serializados por SavedStateHandle que el sistema usa para restaurar el estado de la app tras el Process Death.", "Es la pila (stack) que almacena el historial de destinos visitados: al navegar a una nueva pantalla, el destino se apila; al presionar Atrás, el destino es desapilado y el NavController muestra el anterior.", "Es el registro de rutas en String que el sistema XML de navegación usa para validar las transiciones entre Activities.", "Es el grafo de dependencias de Compose que registra qué Composables deben recomponerse cuando el NavController cambia de ruta."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El Back Stack es la estructura de datos central de la navegación: funciona como una pila LIFO (Last In, First Out). Cada navController.navigate() apila un nuevo destino; cada retroceso (botón Atrás o swipe) desapila el destino actual y muestra el anterior. El NavController administra esta pila, garantizando un retroceso coherente."
  },
  {
    question: "¿Cuál es el error de diseño que comete un desarrollador al declarar múltiples NavHost sin estrategia en una app Compose?",
    options: ["Que el compilador K2 no puede resolver los tipos de los argumentos en grafos de navegación anidados, generando errores de tipo en tiempo de compilación.", "Que el botón Atrás tiene comportamiento errático: cada NavHost administra su propio Back Stack independiente, y el sistema no sabe cuál debe procesar el evento de retroceso.", "Que Material Design 3 no puede aplicar los colores dinámicos de Material You a Composables dentro de NavHosts anidados.", "Que Room Database no puede acceder a los argumentos de navegación al haber múltiples fuentes de estado del NavController."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Este es el error documentado en el Tema 7: múltiples NavHosts sin coordinación generan múltiples Back Stacks independientes. Al presionar Atrás, el sistema operativo debe decidir a cuál NavHost dirigir el evento y en ausencia de coordinación, puede ignorar uno, ejecutar retrocesos dobles, o generar crashes. La solución: un único NavHost raíz."
  },
  {
    question: "¿Por qué las rutas basadas en Strings generan 'deuda técnica' según el Tema 7?",
    options: ["Porque los Strings de rutas no pueden ser internacionalizados, generando problemas de accesibilidad en apps multiidioma.", "Porque al crecer la app, renombrar o modificar una ruta en String requiere buscar manualmente todas las referencias en el proyecto; cualquier omisión genera un bug silencioso que solo falla en runtime.", "Porque los Strings de rutas son incompatibles con el sistema de tipos de Kotlin, requiriendo conversiones manuales costosas en cada navegación.", "Porque el compilador AOT de ART no puede optimizar el código de navegación basado en Strings, reduciendo el rendimiento de las transiciones."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La deuda técnica de las rutas en String: si la app crece a 30 pantallas y necesitas renombrar una ruta, debes buscar el String 'perfil' en todo el proyecto. Una omisión genera un crash en runtime (no en compilación). Con Navegación Tipada, renombrar la clase es una operación segura verificada por el compilador."
  },
  {
    question: "¿Qué garantiza la propiedad de 'Refactorización Segura' de la Navegación Tipada con contratos @Serializable?",
    options: ["Que el sistema genera automáticamente versiones anteriores de las rutas para garantizar retrocompatibilidad con usuarios que no han actualizado la app.", "Que renombrar una ruta o cambiar sus parámetros es verificado por el compilador: si un destino cambia, todos los lugares que lo referencian fallan en compilación, forzando al desarrollador a actualizar todas las referencias antes de que el código funcione.", "Que la app puede migrar de rutas en String a rutas @Serializable de forma automática sin necesidad de cambios manuales.", "Que el NavController aplica automáticamente las validaciones de tipo en tiempo de ejecución sin necesidad de decorar las clases con @Serializable."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La Refactorización Segura es el beneficio principal: si cambias `data class ProductDetail(val id: Int)` a `data class ProductDetail(val id: String)`, el compilador detecta inmediatamente todos los lugares donde se creaba `ProductDetail(productId = 42)` con un Int, forzando la corrección. El error se manifiesta en compilación, no en manos del usuario."
  },
  {
    question: "¿Cuál es la conclusión sobre la Gestión del Back Stack según el Tema 7-8?",
    options: ["La gestión del Back Stack es opcional en apps pequeñas; solo se vuelve crítica cuando la app supera las 10 pantallas de navegación.", "El manejo experto del historial de navegación (Back Stack) garantiza un mejor rendimiento y experiencia UX; un Back Stack mal gestionado genera bugs de navegación que degradan la percepción de calidad de la app.", "El Back Stack debe ser gestionado exclusivamente por el sistema operativo; el desarrollador no debe interferir con la pila de navegación.", "La gestión del Back Stack es una preocupación exclusiva de la arquitectura de navegación XML; en Compose el NavController la gestiona automáticamente sin intervención del desarrollador."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La conclusión del Tema 7: 'La gestión experta del historial garantiza un mejor rendimiento y experiencia UX'. Un Back Stack mal gestionado genera: pantallas duplicadas (el usuario navega a ProductDetail que ya está en la pila), ciclos infinitos de navegación, o pérdida del estado al retroceder. El desarrollador debe diseñar conscientemente el flujo del Back Stack."
  },
  {
    question: "¿Cuál es la diferencia entre el rol de color Secondary y Tertiary en Material Design 3?",
    options: ["Secondary y Tertiary son sinónimos en M3; la distinción es solo visual y no tiene implicaciones de uso en el código.", "Secondary es el color de acento complementario usado en componentes de menor prioridad que Primary (chips, toggles, badges); Tertiary es el color de contraste equilibrante para elementos que necesitan distinción visual sin competir con Primary o Secondary.", "Secondary es el color de error y Tertiary es el color de advertencia; Material Design 3 reserva estos roles exclusivamente para estados de validación.", "Secondary es generado por el Motor Monet del fondo de pantalla y Tertiary es definido estáticamente por el desarrollador en el archivo de tema de la app."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Los roles de color tienen jerarquía: Primary (acción principal, máxima atención), Secondary (componentes secundarios, menor prioridad que Primary), Tertiary (color equilibrante, crea contraste visual sin competir con Primary/Secondary), Surface/Background (capas neutras y planos de fondo). Cada componente de Material Design 3 usa el rol correcto por diseño."
  },
  {
    question: "¿Cuál es el propósito de la 'Legibilidad Algorítmica' en el sistema de colores de Material Design 3?",
    options: ["Es el algoritmo que calcula automáticamente el tamaño de fuente óptimo para cada componente de UI basándose en las dimensiones de la pantalla del dispositivo.", "Es el mecanismo por el que los colores del esquema se ajustan automáticamente para mantener el contraste mínimo de 4.5:1, incluso cuando el Motor Monet genera paletas oscuras o muy saturadas que podrían comprometer la legibilidad.", "Es la capacidad del compilador K2 de verificar que el código de Compose no genere texto con contraste insuficiente según las guías de Material Design 3.", "Es el sistema de reducción de ruido visual que Material Design 3 aplica a las imágenes del fondo de pantalla antes de que el Motor Monet extraiga los colores."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La Legibilidad Algorítmica garantiza la accesibilidad: cuando el Motor Monet genera una paleta basada en un fondo de pantalla muy oscuro o muy saturado, el sistema verifica automáticamente que cada par texto/fondo mantenga el contraste mínimo de 4.5:1. Si no lo cumple, ajusta la luminancia del color sin cambiar el matiz, preservando la armonía de la paleta."
  },
  {
    question: "¿Cuál es la función del rol Surface/Background en el sistema de colores de Material Design 3?",
    options: ["Surface es el color de los textos principales de la app; Background es el color de las imágenes y medios visuales.", "Son los colores neutros para planos de fondo: usan elevación por tono en lugar de sombras para crear profundidad visual, diferenciando las capas de la interfaz de forma sutil sin sobrecargar visualmente al usuario.", "Surface es el color de los botones de navegación inferior y Background es el color de la barra de estado superior del sistema.", "Son los roles reservados para estados de error y éxito respectivamente, reemplazando los colores rojo/verde del sistema anterior de Material Design."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Surface y Background son los tonos neutros de la paleta de Material Design 3. En lugar de usar sombras agresivas para indicar profundidad (como en Material Design 1), M3 usa tonalidades ligeramente diferentes del mismo color base para crear jerarquía visual sutil. Surface es para componentes elevados (cards, sheets); Background para el plano más bajo."
  },
  {
    question: "¿Por qué Material Design 3 establece que su sistema 'democratiza el diseño' para las aplicaciones Android?",
    options: ["Porque elimina la necesidad de contratar diseñadores profesionales al proveer un sistema completo de componentes predefinidos que cualquier desarrollador puede usar.", "Porque el Motor Monet adapta automáticamente la UI al fondo de pantalla de cada usuario, haciendo que la app sea visualmente única para cada persona y se perciba como personalizada específicamente para esa persona.", "Porque Google pone a disposición todos los componentes de Material Design 3 de forma gratuita y con código abierto para cualquier desarrollador en el mundo.", "Porque el sistema de temas de Material Design 3 elimina las barreras de accesibilidad al garantizar contraste mínimo automáticamente para todos los usuarios."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La conclusión del Tema 7: 'M3 democratiza el diseño: La interfaz se adapta dinámicamente al usuario mediante Material You'. Antes, todas las apps con el mismo tema se veían idénticas. Con Material You, la app adopta la paleta personal del usuario. Cada usuario percibe la app como 'suya', con colores que reflejan su identidad visual."
  },
  {
    question: "Al implementar Material You en una app Compose, ¿cuál es el comportamiento correcto cuando el dispositivo no soporta colores dinámicos (API < 31)?",
    options: ["La app lanza una excepción y solicita al usuario actualizar su dispositivo a Android 12 para continuar.", "El código debe verificar Build.VERSION.SDK_INT y, si es menor a 31, aplicar el esquema de colores estático definido por el desarrollador (DarkColorScheme o LightColorScheme) como fallback.", "La app usa automáticamente los colores del sistema operativo sin necesidad de código adicional del desarrollador.", "El Motor Monet genera una paleta de colores genérica basada en el color promedio de todas las imágenes del usuario."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El patrón del código SafePassTheme del Tema 7: `when { dynamicColor && SDK_INT >= 31 -> dynamicDarkColorScheme(context) / dynamicLightColorScheme(context); darkTheme -> DarkColorScheme; else -> LightColorScheme }`. La verificación de versión es mandatoria: los colores dinámicos son exclusivos de Android 12 (API 31)+."
  },
  {
    question: "¿Cuál es la ventaja de la navegación declarativa de Compose sobre la navegación basada en Intents entre Activities en el sistema Android legacy?",
    options: ["La navegación declarativa de Compose usa menos memoria RAM al no crear nuevas instancias de Activity por cada pantalla visitada.", "En Compose, toda la navegación ocurre dentro de un único contexto (una sola Activity con NavHost), eliminando la sobrecarga de creación/destrucción de Activities, con transiciones más fluidas y gestión tipada de argumentos.", "La navegación declarativa de Compose es compatible con dispositivos desde API 19, mientras que los Intents entre Activities requieren API 26+.", "En Compose, el sistema de navegación gestiona automáticamente los permisos de la app, solicitándolos en el momento apropiado de la navegación."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La arquitectura de Activity única (Single Activity) con NavHost: toda la navegación ocurre dentro del mismo proceso y contexto. No hay overhead de creación de nuevas Activities (que incluye el ciclo de vida onCreate, setContentView, etc.). Las transiciones son Composables controlados por Compose, con animaciones más fluidas y tipadas."
  },
  {
    question: "¿Qué significa que el NavGraph de Compose sea 'código fluido' en lugar de XML rígido?",
    options: ["Que el NavGraph puede ser modificado en tiempo de ejecución sin necesidad de recompilar la app, permitiendo actualizaciones dinámicas del flujo de navegación.", "Que las rutas, argumentos y conexiones entre destinos se definen como código Kotlin programático, permitiendo lógica condicional (ej. mostrar diferentes pantallas según el rol del usuario), Deep Linking nativo y validación de tipos por el compilador.", "Que el NavGraph no tiene una estructura fija y puede reorganizarse aleatoriamente en cada sesión del usuario para mejorar el descubrimiento de funcionalidades.", "Que el NavGraph de Compose no necesita ser declarado explícitamente: el sistema infiere automáticamente las conexiones entre Composables marcados con @Composable."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. 'Código fluido' significa programático y dinámico: el grafo puede incluir lógica condicional (`if (isLoggedIn) { homeGraph() } else { authGraph() }`), los argumentos son tipos Kotlin verificados por el compilador, el Deep Linking se configura declarativamente con URIs en el mismo código. Nada de esto es posible con XML estático."
  },
  {
    question: "¿Cuál es la conclusión del Tema 7-8 sobre la Navegación Tipada como pilar de una arquitectura robusta?",
    options: ["La Navegación Tipada es una optimización prematura para apps pequeñas; solo es recomendada para proyectos con más de 15 pantallas de navegación.", "La Navegación Tipada elimina errores silenciosos en tiempo de ejecución y fortalece la arquitectura al convertir cada destino en un contrato explícito verificado por el compilador, reduciendo drásticamente los bugs de navegación en producción.", "La Navegación Tipada debe complementarse siempre con rutas en String para garantizar retrocompatibilidad con versiones antiguas de Android.", "La Navegación Tipada es exclusiva de proyectos Kotlin Multiplatform; para proyectos solo Android las rutas en String son suficientes."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La conclusión del Tema 7: 'Navegación Tipada: Elimina errores silenciosos en tiempo de ejecución y fortalece la arquitectura'. Cada destino como clase @Serializable es un contrato: el compilador verifica que sea navegable, que sus argumentos tengan los tipos correctos, y que cualquier refactorización sea segura. Es la diferencia entre descubrir bugs en compilación vs. en producción."
  },
  {
    question: "¿Cuál es la razón arquitectónica por la que strings.xml debe ser el único repositorio de textos de una app Android?",
    options: ["Porque Room Database indexa automáticamente el contenido de strings.xml para búsquedas de texto completo dentro de la app.", "Porque centralizar todos los textos en strings.xml habilita la internacionalización (i18n) sin tocar el código fuente, garantiza que TalkBack interprete correctamente el contenido, y permite la adaptación cultural de formatos por región, siendo la base de la resiliencia visual de la app.", "Porque el Motor Monet de Material You aplica la tipografía dinámica de Material Design 3 exclusivamente a textos definidos en strings.xml.", "Porque el compilador K2 optimiza las operaciones de creación de String en tiempo de compilación solo para los textos definidos en strings.xml, reduciendo el overhead del garbage collector."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La frase del ingeniero: 'Un recurso centralizado no es solo una lista de palabras, es la arquitectura que permite que tu App hable al mundo.' strings.xml habilita: (1) i18n (archivos strings-es.xml, strings-en.xml por idioma), (2) accesibilidad (TalkBack lee recursos correctamente), (3) localización (formatos culturales por región)."
  },
  {
    question: "¿Cuál es el impacto de Material You en el ecosistema Android desde la perspectiva del desarrollador de apps?",
    options: ["Obliga a los desarrolladores a diseñar manualmente 5 esquemas de colores diferentes para cubrir todos los posibles fondos de pantalla de los usuarios.", "Requiere que el desarrollador integre dynamicColorScheme() y verifique la versión del API, pero a cambio provee personalización automática sin esfuerzo adicional: la paleta, el contraste y la armonía son calculados por el Motor Monet.", "Elimina la necesidad de definir cualquier esquema de colores en la app, ya que el Motor Monet provee automáticamente todos los colores necesarios.", "Requiere que el desarrollador registre cada app en el portal de Material Design de Google para recibir las paletas personalizadas de cada usuario."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El costo y beneficio para el desarrollador: implementar dynamicColorScheme() con la verificación de API (SDK_INT >= 31) y el fallback a esquemas estáticos. El beneficio: la personalización, el contraste accesible y la armonía de la paleta son calculados automáticamente por el Motor Monet del dispositivo, sin que el desarrollador diseñe paletas manualmente."
  },
  {
    question: "¿Qué es la deserialización automática en el contexto de la Navegación Tipada con toRoute<T>() y cuál es su ventaja?",
    options: ["Es la capacidad de Compose de convertir automáticamente los Composables al formato @Serializable para ser almacenados en el Back Stack.", "Es el proceso por el que toRoute<ProductDetail>() extrae los argumentos del NavBackStackEntry y los convierte al objeto tipado ProductDetail sin boilerplate manual, garantizando que los datos tengan el tipo correcto y eliminando el riesgo de ClassCastException.", "Es la función del Motor Monet que deserializa automáticamente la paleta de colores del fondo de pantalla al esquema de Material You.", "Es la capacidad de Room Database de deserializar automáticamente las rutas de navegación almacenadas en el Back Stack como entidades de base de datos."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La deserialización automática es uno de los cuatro beneficios clave de la Navegación Tipada: en el sistema de Strings, el desarrollador debía extraer manualmente `backStackEntry.arguments?.getInt('productId')` y castear el tipo. Con toRoute<ProductDetail>(), el sistema deserializa automáticamente todos los campos del objeto con sus tipos correctos."
  },
  {
    question: "¿Por qué el Tema 7 establece que 'la jerarquía se basa en la luminancia' en Material Design 3?",
    options: ["Porque la luminancia es más fácil de calcular para el Motor Monet que el matiz, reduciendo el tiempo de generación de la paleta.", "Porque basar la jerarquía en la luminancia (oscuridad/claridad) en lugar del matiz (rojo/verde/azul) garantiza que la estructura visual sea accesible para usuarios con daltonismo: pueden percibir la diferencia de brillo aunque no distingan colores.", "Porque la luminancia es el único parámetro de color que Material You puede extraer del fondo de pantalla con precisión matemática garantizada.", "Porque los usuarios perciben inconsistencias de luminancia más rápidamente que inconsistencias de matiz, haciendo que la UI parezca más pulida y profesional."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Esta es la razón de accesibilidad: el daltonismo afecta la percepción de matices (rojo vs verde) pero no la percepción de luminancia (claro vs oscuro). Al basar la jerarquía en luminancia, Material Design 3 garantiza que la estructura visual sea comprensible para el 8% de la población masculina con algún tipo de daltonismo."
  },
  {
    question: "¿Cuál es la relación entre el Árbol de Composición y la eficiencia de la Recomposición Inteligente al cambiar el tema de Material You?",
    options: ["El Árbol de Composición es destruido completamente cuando cambia el tema de Material You; Compose lo reconstruye desde cero como lo haría con un cambio de Activity.", "El Árbol de Composición permite que Compose identifique exactamente qué nodos dependen del estado del tema; al cambiar los colores de Material You, solo los Composables que leen del MaterialTheme.colorScheme son recompuestos, optimizando el cambio de tema.", "El Árbol de Composición no está relacionado con el sistema de temas; Material You usa un mecanismo independiente de invalidación visual para aplicar los nuevos colores.", "El Árbol de Composición es pausado durante el cambio de tema de Material You para evitar estados inconsistentes; el Motor Monet aplica la nueva paleta y luego el árbol se reanuda."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La integración elegante: MaterialTheme.colorScheme es un objeto observable. Cuando Material You cambia la paleta, el colorScheme cambia como estado. Compose detecta qué nodos del árbol leen colorScheme.primary, colorScheme.surface, etc. y solo recompone esos nodos, no toda la pantalla. La Recomposición Inteligente garantiza que el cambio de tema sea eficiente."
  },
{
  "question": "¿Cómo maneja Material Design 3 la elevación de superficies en comparación con el esquema anterior de Material 2?",
  "options": [
    "M3 aumentó el tamaño y desenfoque de las sombras proyectadas (Shadow Elevation) para lograr un efecto tridimensional más pronunciado.",
    "M3 sustituyó predominantemente las sombras pesadas por la Elevación Tonal (Tonal Elevation), superponiendo un tinte del color primario sobre la superficie según el nivel de elevación para una jerarquía más sutil y adaptable a temas oscuros.",
    "M3 eliminó todas las superficies elevadas y obliga a que todos los componentes sean completamente planos sin distinción visual.",
    "M3 delega el cálculo de sombras al sensor de luz ambiental del dispositivo para variar la sombra según la iluminación del entorno."
  ],
  "correctIndex": 1,
  "feedback": "La respuesta correcta es b. En Material You (M3), la elevación se comunica a través de Tonal Elevation: a mayor nivel de elevación (Surface 1 a 5), mayor es el tinte del color primario mezclado con la superficie. Esto mejora notablemente el contraste y la estética, especialmente en temas oscuros donde las sombras negras son invisibles."
},
{
  "question": "¿Cuál es la función del componente Scaffold en Jetpack Compose dentro de una interfaz construida bajo lineamientos de Material Design 3?",
  "options": [
    "Es una herramienta de depuración que dibuja líneas de guía y márgenes en pantalla durante el desarrollo.",
    "Proporciona una estructura de diseño estándar de alto nivel que reserva y coordina las ranuras (slots) para TopAppBar, BottomBar/NavigationBar, FloatingActionButton y SnackbarHost, gestionando los insets de ventana (window insets).",
    "Es el contenedor que compila las funciones Composable en archivos de recursos para el sistema operativo.",
    "Es el manejador de corrutinas encargado de cancelar las tareas de red cuando la pantalla pasa a segundo plano."
  ],
  "correctIndex": 1,
  "feedback": "La respuesta correcta es b. Scaffold implementa la estructura visual básica de Material Design 3 proveyendo slots preconfigurados para barras de navegación, botones flotantes y contenido principal con paddingValues automáticos para evitar solapamientos con la barra de estado y gestos del sistema."
},
{
  "question": "En la navegación tipada de Jetpack Compose (Type-Safe Navigation), ¿cómo se define una ruta de destino para garantizar seguridad de tipos en tiempo de compilación?",
  "options": [
    "Mediante una cadena de texto URL con parámetros en query string como 'pantalla_detalle?id={id}'.",
    "Mediante una clase de datos (data class) o un objeto (data object) anotado con @Serializable de la librería Kotlinx Serialization.",
    "Creando un archivo navigation.xml en la carpeta res/navigation con etiquetas <fragment> y <action>.",
    "Definiendo un enum que contenga el identificador entero del recurso R.id de cada pantalla."
  ],
  "correctIndex": 1,
  "feedback": "La respuesta correcta es b. En la navegación moderna Type-Safe de Compose (Navigation 2.8+), las rutas se definen como tipos Kotlin puros anotados con @Serializable (@Serializable data object Home; @Serializable data class Perfil(val userId: String)). Esto elimina cadenas mágicas propensas a errores y valida tipos al compilar."
},
{
  "question": "Al navegar a una ruta tipada que requiere argumentos, ¿cómo se invoca la navegación en el NavController y cómo se extraen en la pantalla de destino?",
  "options": [
    "Se pasan mediante un Bundle en un Intent implícito y se leen llamando a getIntent().getExtras().",
    "Se llama a navController.navigate(RutaConArgumentos(id = 123)) y en el destino se obtiene la instancia mediante backStackEntry.toRoute<RutaConArgumentos>().",
    "Se guardan en SharedPreferences antes de llamar a navigate() y se recuperan del almacenamiento en la nueva pantalla.",
    "Se envían como cabeceras HTTP ficticias en el despachador de navegación de Jetpack."
  ],
  "correctIndex": 1,
  "feedback": "La respuesta correcta es b. Con la API Type-Safe se pasa directamente la instancia tipada a navController.navigate(Detalle(123)) y en la declaración del destino composable<Detalle> { backStackEntry -> val detalle = backStackEntry.toRoute<Detalle>() }, obteniendo las propiedades fuertemente tipadas sin parseos manuales."
},
{
  "question": "¿Qué rol juegan los pares de roles 'Container' y 'On-Container' (ej. secondaryContainer y onSecondaryContainer) en el sistema de color de Material 3?",
  "options": [
    "Container define el color del borde del componente y On-Container define la animación de transición al hacer foco.",
    "Container define el color de fondo de un elemento contenedor o tarjeta, mientras que On-Container garantiza un color de texto/ícono que cumple los estándares de contraste y legibilidad al situarse sobre ese contenedor específico.",
    "Container se utiliza exclusivamente para dispositivos de escritorio y On-Container para pantallas de teléfonos pequeños.",
    "Son etiquetas reservadas que el compilador de Compose utiliza para comprimir las imágenes vectoriales de la aplicación."
  ],
  "correctIndex": 1,
  "feedback": "La respuesta correcta es b. La convención de diseño 'On-[Color]' en M3 asegura accesibilidad garantizada: todo elemento que se coloque 'sobre' (on) una superficie container debe usar su contraparte 'onContainer' para mantener el ratio de contraste WCAG exigido."
},
{
  "question": "¿Cuál es la función del parámetro 'popUpTo' con 'inclusive = true' en las opciones de navegación (NavOptionsBuilder) de Jetpack Compose?",
  "options": [
    "Mostrar una ventana emergente tipo diálogo antes de cambiar de pantalla para solicitar confirmación al usuario.",
    "Remover de la pila de retroceso (Back Stack) las pantallas intermedias hasta la ruta especificada, incluyendo esa misma ruta de destino, evitando acumulaciones de pantallas tras flujos como login o cierre de sesión.",
    "Reiniciar el ciclo de vida de la Activity anfitriona forzando una llamada a onDestroy() y onCreate().",
    "Limpiar la memoria caché de imágenes en disco antes de cargar el nuevo destino visual."
  ],
  "correctIndex": 1,
  "feedback": "La respuesta correcta es b. popUpTo permite podar el Back Stack. Si al iniciar sesión se navega al Home, se usa popUpTo<LoginRoute> { inclusive = true } para eliminar la pantalla de Login de la pila y evitar que el usuario vuelva a ella al presionar el botón Atrás."
},
{
  "question": "¿Qué representa la paleta tonal 'Neutral Variant' producida por el Motor Monet en Material Design 3?",
  "options": [
    "Los tonos más saturados reservados exclusivamente para los botones de acción principal (Call to Action).",
    "Una gama de tonos neutros con un sutil matiz cromático extraído del fondo de pantalla, utilizada para bordes de componentes (outline), fondos de cajas de texto y superficies con contraste sutil.",
    "Un conjunto de colores fijos de alto contraste diseñados específicamente para usuarios con daltonismo.",
    "El perfil de color utilizado para exportar capturas de pantalla de la aplicación hacia la tienda Google Play."
  ],
  "correctIndex": 1,
  "feedback": "La respuesta correcta es b. Monet genera 5 paletas tonales de 0 a 100 de luminosidad: Primary, Secondary, Tertiary, Neutral y Neutral Variant. Neutral Variant se reserva para elementos estructurales sutiles (superficies de variantes, bordes, divisores y contornos de campos de texto)."
},
{
  "question": "¿Cuál es la principal diferencia entre NavigationBar (M3) y el anterior BottomNavigationView (M2)?",
  "options": [
    "NavigationBar de M3 utiliza indicadores de selección en forma de píldora activa con colores de contenedor y elimina las líneas de división fijas, adaptando su altura y tonalidad a las guías de Material You.",
    "NavigationBar no permite más de dos botones, mientras que BottomNavigationView soportaba hasta diez botones simultáneos.",
    "NavigationBar requiere permisos de red porque descarga los iconos vectoriales dinámicamente de los servidores de Google.",
    "NavigationBar solo funciona en orientación horizontal (Landscape) y no es compatible con teléfonos en vertical."
  ],
  "correctIndex": 1,
  "feedback": "La respuesta correcta es a. En M3, la NavigationBar adopta la píldora de selección flotante (active indicator), mayor altura para ergonomía táctil en pantallas modernas, integración de color dinámico y prescinde de sombras duras sustituyéndolas por elevación tonal de superficie."
}
];

if (typeof window !== 'undefined') {
    window.questionsRDA2Tema78 = questionsRDA2Tema78;
}
