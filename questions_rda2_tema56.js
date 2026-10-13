// ============================================================
// BANCO DE PREGUNTAS — RDA2 TEMA 5-6
// UI Declarativa: Jetpack Compose y SwiftUI
// ============================================================
const questionsRDA2Tema56 = [
  {
    question: "¿Cuál es la premisa filosófica fundamental que diferencia el paradigma declarativo (Compose) del imperativo (XML+Java)?",
    options: ["El declarativo describe paso a paso cómo construir cada elemento visual; el imperativo solo dice qué resultado se quiere.", "El imperativo describe la secuencia exacta de pasos y es frágil ante cambios del entorno; el declarativo describe el resultado final y deja al framework gestionar la ejecución.", "El declarativo utiliza archivos XML para separar la UI de la lógica; el imperativo integra ambas en el mismo archivo.", "El imperativo es el estándar de la industria en API 36; el declarativo es una alternativa experimental solo para proyectos pequeños."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La metáfora del ingeniero: el imperativo dice 'Camina 5 pasos, gira a la derecha, siéntate' (frágil si el entorno cambia). El declarativo dice 'Quiero estar sentado' y deja a Compose gestionar cómo lograrlo. En UI: el imperativo llama a setText(), el declarativo describe que este texto es el estado actual."
  },
  {
    question: "¿Qué problema crítico de sincronización genera el paradigma imperativo XML cuando el estado de la aplicación cambia en múltiples puntos?",
    options: ["El compilador K2 no puede verificar la exhaustividad de las actualizaciones manuales de la UI en tiempo de compilación.", "El Efecto Cascada: cada punto que modifica el estado debe actualizar manualmente la UI; si uno omite setText() o setVisibility(), la interfaz queda desactualizada, generando bugs difíciles de rastrear.", "ART no puede optimizar las llamadas consecutivas a findViewById() en listas largas, degradando el rendimiento.", "El Garbage Collector elimina las referencias a las vistas XML antes de que el setter manual complete la actualización."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El Efecto Cascada: múltiples controladores → Actualizaciones Manuales → Inconsistencia Visual. En apps grandes, la fuente de verdad se dispersa y cuando un punto olvida actualizar la UI, la interfaz queda desfasada respecto a la lógica. Compose resuelve esto con una única fuente de verdad."
  },
  {
    question: "¿Cuál es la función de mutableStateOf() en Jetpack Compose y cuál es su rol en el ciclo de recomposición?",
    options: ["Crea una variable inmutable (val) que el compilador K2 optimiza para reducir el overhead de la Recomposición Inteligente.", "Crea un estado observable: cuando su valor cambia, Compose detecta el cambio y marca para recomposición todos los nodos del árbol que leen ese estado.", "Serializa el estado al Bundle del sistema para sobrevivir al Process Death, eliminando la necesidad de SavedStateHandle.", "Define el tipo de retorno de una función @Composable, indicando que la función es un componente visual dinámico."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. mutableStateOf() crea un estado observable. Cuando su valor cambia, Compose activa el Observador de Cambios que marca para recomposición todos los Composables que leyeron ese valor. Esto es la base del modelo reactivo: cambio de estado → recomposición automática → UI siempre sincronizada."
  },
  {
    question: "¿Por qué la anotación @Composable es el contrato fundamental de Jetpack Compose?",
    options: ["Porque le indica al compilador que la función puede recibir lambdas como parámetros, habilitando el sistema de Funciones de Orden Superior.", "Porque le indica al runtime de Compose que la función genera elementos visuales dinámicos que deben ser incluidos en el Árbol de Composición y gestionados por el sistema de Recomposición.", "Porque le indica al compilador K2 que aplique optimizaciones AOT específicas para reducir el tiempo de renderizado.", "Porque le indica al sistema de navegación que la función es un destino válido en el NavGraph de la aplicación."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. @Composable es el contrato: le dice a Compose que esta función participa en el árbol de composición, puede tener estado, puede ser recompuesta, y genera elementos visuales. Sin esta anotación, la función es Kotlin puro sin capacidad de participar en el sistema reactivo de Compose."
  },
  {
    question: "¿Cuál es la afirmación que resume el concepto de UI como función del estado en Jetpack Compose?",
    options: ["La UI se construye una vez en onCreate() y el framework se encarga de mantenerla sincronizada con los cambios de configuración automáticamente.", "La UI siempre reflejará el valor actual del estado: cuando el estado cambia, Compose recompone automáticamente los nodos dependientes, eliminando la necesidad de setters manuales.", "La UI se define en archivos XML que Compose convierte dinámicamente a Composables durante la ejecución para garantizar retrocompatibilidad.", "La UI es una función del ciclo de vida: cada callback (onCreate, onResume) define qué elementos visuales son visibles en ese estado."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Esta es la frase clave del ingeniero: 'La UI siempre reflejará el valor actual del estado'. El mecanismo: mutableStateOf() → observable → cuando cambia → Recomposición de nodos dependientes → UI sincronizada. Sin setters manuales, sin desincronización posible."
  },
  {
    question: "¿Qué información almacena cada nodo del Árbol de Composición que permite a Compose ejecutar la Recomposición Inteligente?",
    options: ["Las rutas de navegación y los argumentos tipados del NavGraph para validar la exhaustividad del grafo.", "Los parámetros recibidos y el estado que observa; con esta metadata, Compose puede identificar exactamente qué nodos deben recomponerse cuando un valor cambia.", "El hash del bytecode .dex de la función para verificar que no ha sido modificada desde la última compilación AOT.", "Las dimensiones y coordenadas de la vista en pantalla para aplicar la optimización de clipping de Material Design 3."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Cada nodo del árbol almacena: (1) parámetros recibidos de su padre, y (2) estado que observa. Cuando un mutableStateOf() cambia, Compose busca en el árbol todos los nodos que tienen ese estado en sus observaciones y los recompone, ignorando los demás. Esta es la Recomposición Inteligente."
  },
  {
    question: "¿Cuál es la analogía con Excel que usa el Tema 5 para explicar la Recomposición Inteligente?",
    options: ["Así como Excel recalcula todas las celdas cuando abres un archivo, Compose recalcula todo el árbol de composición cuando se inicia la app.", "Así como Excel solo recalcula las fórmulas que dependen de una celda modificada, Compose solo recompone los nodos del árbol que dependen del estado que cambió.", "Así como Excel guarda automáticamente el trabajo en la nube, Compose persiste automáticamente el estado al Bundle del sistema.", "Así como Excel permite múltiples hojas en un libro, Compose permite múltiples NavHosts en el mismo árbol de composición."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La analogía exacta del ingeniero: 'Si cambias el valor de una celda, solo se recalculan las fórmulas que dependen de ella'. En Compose: si cambia un mutableStateOf(), solo se recomponen los Composables que leen ese valor, no toda la pantalla. Esto es la optimización de rendimiento central."
  },
  {
    question: "En el ejemplo WeatherDashboard del Tema 5, ¿por qué Text(\"Ciudad: Quito\") no se recompone cuando cambia el parámetro temp?",
    options: ["Porque Text(\"Ciudad: Quito\") es un Composable de solo texto y el sistema de Recomposición Inteligente excluye automáticamente los Composables de texto estático.", "Porque el valor de la cadena 'Ciudad: Quito' no depende del parámetro temp: es un nodo estático en el árbol cuyo contenido no cambia cuando temp cambia.", "Porque el compilador K2 detecta en tiempo de compilación que el String literal no contiene referencias al parámetro y lo marca como invariante.", "Porque está dentro de un bloque remember que conserva su valor entre recomposiciones independientemente del estado externo."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La Recomposición Inteligente evalúa dependencias: Text(\"Ciudad: Quito\") no lee el parámetro temp, por lo tanto no está en la lista de dependencias de temp. Cuando temp cambia, Compose solo recompone Text(\"Temperatura actual: $temp\") que sí depende de temp."
  },
  {
    question: "¿Cuál es la diferencia entre remember y rememberSaveable en el contexto del manejo de estado en Compose?",
    options: ["remember es para valores primitivos (Int, String, Boolean) y rememberSaveable es para objetos complejos como Data Classes.", "remember conserva el valor entre recomposiciones pero lo pierde en cambios de configuración (rotación); rememberSaveable serializa el valor al Bundle del sistema para sobrevivir a la rotación y al Process Death.", "remember es la API estable para API 36+ y rememberSaveable es la API legacy mantenida por retrocompatibilidad con versiones anteriores de Compose.", "remember es para estados de UI locales (inputs de texto) y rememberSaveable es para datos de negocio que deben estar en el ViewModel."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. remember vive solo en la instancia actual del árbol de composición: si la Activity es recreada (rotación), el valor se pierde. rememberSaveable persiste al Bundle del sistema: sobrevive a rotación y Process Death. Use rememberSaveable para inputs de texto, scroll position, selección de pestañas."
  },
  {
    question: "¿Por qué LazyColumn es la solución arquitectónicamente correcta para listas largas en Compose, en lugar de Column con forEach?",
    options: ["Porque LazyColumn aplica automáticamente el sistema de tipos seguros de navegación a cada elemento de la lista.", "Porque LazyColumn solo compone los elementos visibles en pantalla, cargando y descargando nodos dinámicamente al hacer scroll, mientras Column con forEach mantiene todos los elementos en memoria simultáneamente.", "Porque LazyColumn integra directamente el sistema de temas de Material Design 3 con animaciones de entrada y salida para cada elemento.", "Porque LazyColumn es el único componente de lista compatible con el sistema de Recomposición Inteligente de Compose."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. LazyColumn es el equivalente declarativo del RecyclerView: aplaza la composición de los elementos hasta que son visibles en pantalla, los descarga de memoria cuando salen del viewport. Column con forEach compone todos los elementos inmediatamente, lo que con 1000 elementos degrada significativamente el rendimiento."
  },
  {
    question: "¿Qué afirmación describe correctamente la relación entre Jetpack Compose y SwiftUI como DSLs modernos?",
    options: ["Compose y SwiftUI son competidores directos que implementan filosofías opuestas: Compose usa programación imperativa funcional y SwiftUI usa programación declarativa reactiva.", "Ambos frameworks son DSLs que describen pantallas de forma declarativa, comparten estructuras equivalentes (Column/VStack, Row/HStack) y representan la convergencia de la industria móvil hacia el paradigma declarativo.", "Compose está diseñado exclusivamente para Android y SwiftUI para iOS; la única similitud es el lenguaje base (Kotlin y Swift respectivamente).", "SwiftUI es una versión simplificada de Jetpack Compose que Apple adaptó para iOS eliminando el soporte para estado mutable y Recomposición Inteligente."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El Tema 5 establece la convergencia: ambos son DSLs que comparten Column/VStack, Row/HStack, Modifier/.padding(), remember/@State. El ingeniero afirma: 'Ambos frameworks comparten la filosofía declarativa moderna, unificando el desarrollo móvil'. Entender uno facilita enormemente aprender el otro."
  },
  {
    question: "¿Cuál es la función del estado en Jetpack Compose y por qué es llamado 'la única fuente de verdad'?",
    options: ["El estado es la única forma de persistir datos al Bundle del sistema; sin él, los datos se pierden en cada rotación de pantalla.", "El estado es el único origen desde el cual la UI se genera; no existen setters manuales ni actualizaciones parciales, garantizando que la pantalla siempre refleje fielmente el valor actual del estado.", "El estado es la única forma de compartir datos entre Composables en diferentes pantallas del NavGraph.", "El estado es la representación serializable del ViewModel que Room Database puede persistir directamente en disco."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. En Compose, el estado es la única fuente de verdad: la UI es una función pura del estado. No hay setters manuales dispersos por el código. Cuando el estado cambia, la UI se recalcula automáticamente. Esto garantiza consistencia total: es imposible que la UI y el estado estén desincronizados."
  },
  {
    question: "¿Qué significa que el código de Jetpack Compose 'se convierte en la documentación visual de la interfaz'?",
    options: ["Que el compilador K2 genera automáticamente screenshots de cada Composable y los incluye en el KDoc del proyecto.", "Que el código declarativo de Compose describe directamente qué se verá en pantalla, de forma que leer el código es equivalente a entender la estructura visual de la UI sin necesidad de ejecutar la app.", "Que Compose genera automáticamente archivos XML compatibles con las herramientas de diseño de Material Design 3.", "Que Android Studio puede renderizar el código de Compose como un diagrama de flujo que representa la arquitectura visual de la app."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Esta es una de las ventajas pedagógicas del paradigma declarativo: `Column { Text('Hola') Button('Enviar') }` describe exactamente la estructura visual. Un desarrollador puede leer el código y entender la pantalla sin ejecutarla. El código imperativo (setContentView, findViewById, setText) no tiene esta propiedad."
  },
  {
    question: "¿Cuál es el riesgo de declarar múltiples NavHost sin una estrategia clara en una app Jetpack Compose?",
    options: ["Que el compilador K2 no pueda verificar la exhaustividad de las rutas en los múltiples grafos de navegación simultáneos.", "Que el comportamiento del botón Atrás sea errático, ya que cada NavHost administra su propio Back Stack independiente y el sistema no sabe cuál debe procesar el evento de retroceso.", "Que el sistema de temas de Material You aplique colores inconsistentes entre los diferentes contenedores de navegación.", "Que Room Database no pueda acceder a los argumentos de navegación al tener múltiples fuentes de estado del NavController."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Cada NavHost administra su propio Back Stack. Con múltiples NavHosts sin coordinación, al presionar Atrás, el sistema no sabe cuál debe procesar el evento: puede ignorar uno, ejecutar retrocesos dobles, o causar crashes de navegación. La solución es un único NavHost en la raíz de la jerarquía."
  },
  {
    question: "¿Cuál es la ventaja de la Navegación Tipada con contratos @Serializable sobre las rutas basadas en Strings?",
    options: ["Que las rutas @Serializable son más cortas y memorizables, reduciendo el riesgo de typos en el equipo.", "Que los errores de navegación (argumentos incorrectos, rutas inexistentes) son detectados en tiempo de compilación en lugar de causar crashes en tiempo de ejecución en manos del usuario.", "Que aumenta el rendimiento de las transiciones entre pantallas al eliminar la serialización de cadenas de texto.", "Que reemplaza el NavHost por completo, simplificando la arquitectura de navegación a un único componente."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Con Strings, un typo ('pérfil' vs 'perfil') compila sin errores y falla en runtime cuando el usuario navega. Con contratos @Serializable, el compilador verifica que la ruta exista y que los argumentos sean del tipo correcto ANTES de que la app llegue al usuario. Es el 'Escudo del Compilador' aplicado a la navegación."
  },
  {
    question: "¿Qué función cumple el NavController en la arquitectura de navegación de Jetpack Compose?",
    options: ["Es el contenedor visual que intercambia los Composables en pantalla según la ruta activa, equivalente a un FrameLayout en XML.", "Es el cerebro estratégico de la navegación: gestiona el estado del Back Stack, coordina las transiciones entre destinos y facilita el paso de argumentos entre pantallas.", "Es el mapa declarativo de todos los destinos y sus conexiones lógicas, permitiendo la implementación nativa de Deep Linking.", "Es el componente que serializa los argumentos de navegación usando @Serializable para garantizar la seguridad de tipos."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El NavController es el 'cerebro estratégico': gestiona destinos (coordina el movimiento entre nodos del grafo), administra el Back Stack (mantiene la pila de pantallas para retroceso coherente) y facilita la transferencia de datos entre pantallas de forma segura."
  },
  {
    question: "¿Por qué el NavController debe declararse en niveles altos de la jerarquía de composición y no dentro de un Composable individual?",
    options: ["Porque el compilador K2 solo puede resolver las rutas de navegación declaradas en el nivel raíz del árbol.", "Para que pueda ser compartido por múltiples Composables que necesiten navegar, siguiendo el principio de State Hoisting.", "Porque Room Database y el Back Stack comparten el mismo CoroutineScope solo disponible en el nivel de la Activity.", "Porque Material Design 3 requiere que el NavController esté en el mismo nivel que MaterialTheme para las animaciones de transición."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. State Hoisting: el estado debe elevarse al nivel más bajo de la jerarquía que necesita compartirlo. El NavController es estado de navegación que múltiples Composables (botones, menús, ícono de retroceso) necesitan acceder. Declararlo alto en la jerarquía garantiza que todos puedan navegar sin prop-drilling."
  },
  {
    question: "¿Cuál es la diferencia entre el NavGraph de Compose y el grafo de navegación en XML del sistema legacy?",
    options: ["No hay diferencia funcional; el NavGraph de Compose convierte el XML automáticamente a código Kotlin durante la compilación.", "En Compose, el NavGraph es código Kotlin fluido y programático (no XML rígido), lo que facilita Deep Linking nativo, definición tipada de argumentos y reconstrucción dinámica del flujo.", "El NavGraph de XML soporta más tipos de argumentos que el de Compose, siendo preferido para apps con navegación compleja.", "El NavGraph de Compose solo funciona con destinos simples; para grafos complejos con anidamiento es necesario usar XML."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. En el sistema legacy, el grafo de navegación era un archivo XML estático. En Compose, el NavGraph es código Kotlin fluido: las rutas son objetos tipados, los argumentos tienen tipos seguros, el Deep Linking se implementa nativamente, y el grafo puede construirse de forma dinámica o condicional."
  },
  {
    question: "¿Cuál es la 'crisis de las rutas basadas en texto' que la Navegación Tipada de API 36 viene a resolver?",
    options: ["Los Strings de rutas tienen un límite máximo de 255 caracteres que puede causar truncamiento en rutas con múltiples parámetros anidados.", "Los Strings de rutas son errores silenciosos: un typo no detectado por el compilador causa crashes en tiempo de ejecución; pasar un tipo incorrecto genera excepciones tardías; el refactorizado es inseguro y costoso.", "Las rutas en String son incompatibles con el sistema de Kotlin Multiplatform, bloqueando el desarrollo de apps que comparten código con iOS.", "Los Strings de rutas consumen excesiva memoria en el Back Stack cuando la app tiene más de 10 destinos de navegación activos."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Tres problemas críticos de las rutas en String: (1) errores silenciosos (typos que compilan pero fallan en runtime), (2) tipos incorrectos (String donde se espera un Int causa crash tardío), (3) deuda técnica (renombrar una ruta requiere buscar todos los Strings manualmente, arriesgando omisiones)."
  },
  {
    question: "¿Qué hace el método toRoute<T>() en el sistema de Navegación Tipada de API 36?",
    options: ["Registra automáticamente un Composable como destino de navegación en el NavGraph, eliminando la necesidad de declararlo explícitamente.", "Deserializa automáticamente los argumentos del NavBackStackEntry al tipo de datos definido en la clase @Serializable, eliminando el boilerplate de extracción manual.", "Genera el NavController correspondiente al destino tipado para evitar instanciar múltiples NavHosts.", "Valida en compilación que todos los campos de la clase @Serializable tienen valores por defecto para evitar NullPointerExceptions."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. toRoute<ProductDetail>() deserializa automáticamente los argumentos del NavBackStackEntry al objeto ProductDetail. En el sistema de Strings, esto requería boilerplate de extracción manual (getInt, getString, argumentsMap). Con Type-Safety, el sistema lo hace de forma segura y automática."
  },
  {
    question: "¿Cuál es la característica que diferencia radicalmente a Jetpack Compose de SwiftUI respecto al manejo de estado local?",
    options: ["En Compose el estado se maneja con by remember { mutableStateOf() } y la referencia al objeto usa delegación de propiedades de Kotlin; en SwiftUI se usa @State y la sintaxis es directa sin delegación.", "En Compose el estado debe declararse siempre en el ViewModel; en SwiftUI el estado puede vivir directamente en la vista con @State.", "En Compose el estado local es inmutable (val); en SwiftUI el estado local es siempre mutable (var) por diseño del lenguaje Swift.", "En Compose el estado es compartido entre todos los Composables del árbol; en SwiftUI el estado es privado a la vista que lo declara."],
    correctIndex: 0,
    feedback: "La respuesta correcta es a. La distinción es sintáctica pero importante: Compose usa delegación de propiedades de Kotlin (`by remember { mutableStateOf(0) }`), que permite usar el valor directamente con `count` en lugar de `count.value`. SwiftUI usa la property wrapper `@State` con una sintaxis más directa. Funcionalmente son equivalentes: ambos crean estado local observable."
  },
  {
    question: "¿Cuál es el problema que resuelve el patrón UiState con sealed class al modelar estados de pantalla en Compose?",
    options: ["Serializa automáticamente el estado de la UI al Bundle del sistema para sobrevivir al Process Death sin usar SavedStateHandle.", "Modela de forma exhaustiva y segura todos los estados posibles de la pantalla (Loading, Success, Error), forzando al desarrollador a manejar cada estado y previniendo estados inconsistentes en la UI.", "Reemplaza al ViewModel como fuente de verdad del estado, permitiendo que los Composables gestionen directamente las llamadas de red.", "Convierte el estado en un tipo serializable compatible con Room Database para persistencia automática en disco."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El patrón UiState con sealed class es el 'Escudo del Compilador' aplicado a estados de pantalla: Loading, Success y Error definen el universo completo de estados. Con when(uiState), el compilador exige manejar todos los casos: si se agrega un estado nuevo (ej. Timeout), el when existente deja de compilar, obligando al manejo explícito."
  },
  {
    question: "¿Por qué el Tema 5 establece que Jetpack Compose y SwiftUI representan una convergencia de la industria móvil?",
    options: ["Porque Google y Apple firmaron un acuerdo para unificar sus frameworks de UI en una única especificación compartida.", "Porque ambos frameworks adoptaron independientemente la misma filosofía: UI declarativa, estado como fuente de verdad, Recomposición/Invalidación automática, y estructuras equivalentes (Column/VStack, Row/HStack, Modifier/.padding()), demostrando que el paradigma declarativo es el futuro del desarrollo móvil.", "Porque Kotlin Multiplatform permite usar Jetpack Compose tanto en Android como en iOS, eliminando la necesidad de SwiftUI.", "Porque tanto Compose como SwiftUI compilan a binarios nativos ARM64, compartiendo el mismo runtime de ejecución en dispositivos Apple Silicon."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La convergencia es independiente y orgánica: ambos frameworks llegaron a las mismas soluciones para los mismos problemas. Column/VStack, Row/HStack, Modifier/.padding(), remember/@State. El ingeniero afirma que entender uno de los dos frameworks facilita enormemente aprender el otro, lo que demuestra la solidez del paradigma declarativo."
  },
  {
    question: "¿Qué ocurre cuando una función @Composable no marcada como @Stable recibe el mismo valor de parámetro que en la recomposición anterior?",
    options: ["Compose siempre la recompone para garantizar que la UI esté actualizada, independientemente de si los parámetros cambiaron.", "Compose puede saltarse (skip) la recomposición de esa función si sus parámetros son iguales a los de la invocación anterior, optimizando el rendimiento.", "Compose lanza una excepción de compilación advirtiendo que la función debe ser marcada explícitamente como @NonRestartable.", "Compose fuerza una recomposición completa del árbol padre para garantizar la consistencia del estado."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La Recomposición Inteligente incluye la capacidad de 'skip': si los parámetros de un Composable no han cambiado desde la última composición, Compose puede omitir su recomposición completamente. Esto requiere que los parámetros sean tipos 'stable' (inmutables o que notifican cambios), lo que Compose verifica en compilación."
  },
  {
    question: "¿Cuál es la 'Regla de Oro' del State Hoisting en Jetpack Compose?",
    options: ["Todo el estado debe elevarse siempre al ViewModel para garantizar la separación de responsabilidades entre la UI y la lógica de negocio.", "El estado debe elevarse al nivel más bajo de la jerarquía de composición desde el que necesita ser compartido o controlado; ni más arriba ni más abajo de lo necesario.", "El estado debe declararse siempre en la función @Composable más cercana a la raíz del árbol para maximizar la visibilidad y facilitar las pruebas.", "El estado debe duplicarse en cada Composable que lo necesite para evitar el prop-drilling y simplificar la arquitectura."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. State Hoisting: elevar el estado al nivel correcto es el arte de la arquitectura en Compose. Demasiado alto (siempre en el ViewModel) es excesivo para estado de UI puramente local. Demasiado bajo (dentro del Composable que lo usa) impide compartirlo. El nivel correcto es el ancestro común más bajo entre todos los consumidores del estado."
  },
  {
    question: "¿Cuál es la diferencia entre un Stateful y un Stateless Composable en Jetpack Compose?",
    options: ["Un Composable Stateful requiere la anotación @Stateful; un Composable Stateless requiere @Stateless para que el compilador aplique las optimizaciones correspondientes.", "Un Composable Stateful mantiene su propio estado internamente con remember; un Stateless Composable recibe todos sus datos como parámetros y es más fácil de probar, reutilizar y previsualizar.", "Un Stateful Composable puede comunicarse directamente con Room Database; un Stateless Composable solo puede leer datos del ViewModel.", "Un Stateful Composable es recomponible; un Stateless Composable es estático y el sistema de Recomposición Inteligente lo excluye permanentemente del árbol."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La distinción es arquitectónica: un Composable Stateful gestiona su propio estado internamente (ej. un contador con su propio remember). Un Stateless Composable es una función pura de sus parámetros: no tiene estado propio y recibe todo desde afuera. Los Stateless son más fáciles de probar (se inyectan los datos), reutilizar y previsualizar."
  },
  {
    question: "¿Por qué el paradigma declarativo de Compose elimina la 'desincronización entre el estado lógico y lo que el usuario visualiza'?",
    options: ["Porque Compose usa un sistema de locks (semáforos) que impide que la UI se actualice mientras el estado está siendo modificado.", "Porque en Compose la UI es una función matemática pura del estado: UI = f(Estado). No pueden existir dos valores de estado para la misma UI porque la UI siempre se recalcula desde el estado, no desde operaciones manuales de actualización.", "Porque el compilador K2 verifica en compilación que todas las actualizaciones de estado sean aplicadas a la UI antes de que el frame sea renderizado.", "Porque Compose usa el sistema de ARC (Automatic Reference Counting) de iOS para garantizar que las referencias a la UI siempre apunten al estado más reciente."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La fórmula del ingeniero: UI = f(Estado). En el modelo imperativo, la UI y el estado son entidades separadas que pueden desincronizarse. En Compose, la UI se deriva matemáticamente del estado cada vez que cambia. Es imposible la desincronización porque la UI no tiene existencia independiente del estado."
  },
  {
    question: "¿Cuál es el mandato del Tema 5 respecto al dominio de Jetpack Compose en API 36?",
    options: ["Compose es una herramienta complementaria al sistema XML; ambos deben dominarse para garantizar retrocompatibilidad con Android 5.0.", "Dominar Compose es un requisito mandatorio para desarrollar aplicaciones resilientes y alineadas con los estándares de la industria en API 36.", "Compose solo es recomendado para nuevos proyectos (Greenfield); los proyectos legacy deben mantenerse en XML por razones de estabilidad.", "Compose es el estándar solo para proyectos de apps de consumo; para apps empresariales el sistema XML sigue siendo la opción recomendada por Google."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La afirmación exacta del material: 'En la API 36, dominar Compose es un requisito mandatorio para desarrollar aplicaciones resilientes y alineadas con los estándares de la industria'. No es opcional ni complementario: es el estándar actual y futuro del desarrollo Android, respaldado por Google como el reemplazo definitivo del sistema XML."
  },
  {
    question: "¿Cuál es el equivalente de Modifier en SwiftUI para aplicar estilos visuales como padding y color de fondo?",
    options: ["Los Wrappers de estilo en SwiftUI no tienen equivalente directo con Modifier; se usan clases CSS especiales del DSL.", "Los modificadores encadenados con punto de SwiftUI (ej. .padding(), .background()), que funcionan como adjetivos visuales equivalentes a los Modifier encadenados de Compose.", "El sistema de temas @Environment de SwiftUI que distribuye los estilos globalmente a todos los componentes de la jerarquía.", "El protocolo ViewModifier de SwiftUI que requiere implementación explícita de la función body para cada estilo."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La tabla comparativa: Estilo en Compose (Modifier) ↔ Estilo en SwiftUI (.padding(), .background()). Ambos usan el mismo patrón de encadenamiento: en Compose `Modifier.padding(16.dp).background(Color.Blue)`, en SwiftUI `.padding(16).background(Color.blue)`. El ingeniero los llama 'adjetivos que definen la apariencia'."
  },
  {
    question: "¿Qué distingue al paradigma imperativo (XML) de generar bugs difíciles de rastrear en aplicaciones de gran escala?",
    options: ["La ausencia de un sistema de tipos en XML que permita detectar errores de layout en tiempo de compilación.", "La dispersión de la fuente de verdad del estado: cuando múltiples controladores actualizan la misma vista manualmente, cualquier omisión genera inconsistencia visual sin que el sistema la detecte automáticamente.", "La incapacidad del compilador K2 de analizar la estructura XML para verificar que todas las vistas tengan IDs únicos.", "La ausencia de soporte para animaciones complejas en el sistema XML, que obliga a usar código Java imperativo para efectos visuales avanzados."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La dispersión de la fuente de verdad es el problema raíz: en el modelo XML+Java, el estado puede estar en variables de la Activity, en Singletons, en SharedPreferences, y la UI se actualiza desde múltiples puntos. Cuando alguno de esos puntos falla en actualizar la vista, el bug visual es silencioso y difícil de reproducir y rastrear."
  },
  {
    question: "¿Cuál es la conclusión del Tema 5 sobre cómo la recomposición inteligente mejora la claridad del código además del rendimiento?",
    options: ["Que la recomposición inteligente permite al desarrollador eliminar todos los comentarios del código al ser el propio código autoexplicativo.", "Que al eliminar los setters manuales y centralizar la lógica de actualización en el estado, el código es más declarativo y la intención del desarrollador es más fácil de entender, reduciendo la carga cognitiva.", "Que la recomposición inteligente genera automáticamente documentación técnica en formato KDoc para cada Composable del proyecto.", "Que al reducir el número de líneas de código, la recomposición inteligente disminuye el tiempo de revisión de código en un 60%."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La conclusión del Tema 5: 'La recomposición inteligente optimiza el rendimiento y mejora la claridad del código'. Al no haber setters manuales dispersos, el flujo de datos es unidireccional y predecible: Estado → UI. Cualquier desarrollador que lee el código puede entender inmediatamente qué estado controla qué parte de la pantalla."
  },
  {
    question: "¿Cuál es la premisa fundamental que justifica que el Tema 5 califique a Compose como un 'cambio estructural' en la forma de construir interfaces móviles?",
    options: ["Que Compose genera binarios más pequeños que XML, reduciendo el tamaño del APK y mejorando la velocidad de descarga.", "Que Compose no solo cambia la sintaxis de escritura de UI, sino el modelo mental completo: la UI deja de ser un objeto que se manipula imperativamente para convertirse en una función declarativa del estado, eliminando una clase entera de bugs de sincronización.", "Que Compose reemplaza completamente el sistema de recursos (res/) de Android, permitiendo definir colores, estilos y strings directamente en el código.", "Que Compose es compatible con iOS a través de Kotlin Multiplatform, eliminando la necesidad de SwiftUI para el desarrollo de apps iOS."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Es un cambio estructural, no solo sintáctico: el modelo mental cambia de 'manipular vistas con setters' a 'describir la UI como función del estado'. Este cambio elimina estructuralmente la clase de bugs de desincronización (la UI y el estado que difieren) porque en Compose esa desincronización es arquitectónicamente imposible."
  },
  {
    question: "Al procesar datos de una API que pueden ser nulos, ¿qué combinación de herramientas de Compose y Kotlin garantiza el Embudo de Saneamiento de Datos antes de llegar a la UI?",
    options: ["Usar var mutable directamente en el Composable para actualizar la UI en tiempo real sin capas intermedias.", "Pasar los datos crudos a través del ViewModel (filtrando con Data Class + Null Safety), exponerlos como StateFlow, y observarlos en el Composable con collectAsState(), garantizando que solo datos válidos lleguen a la UI.", "Usar @Serializable directamente en el Composable para deserializar la respuesta de la API sin pasar por el ViewModel.", "Almacenar los datos crudos directamente en rememberSaveable para persistirlos entre recomposiciones y evitar llamadas repetidas a la API."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El Embudo de Saneamiento de Datos del ingeniero: API (datos crudos) → ViewModel (Data Class + Null Safety filtra y valida) → StateFlow (observable) → collectAsState() en Composable (lee estado validado) → UI (solo recibe datos limpios y seguros). Nunca datos crudos directamente a la UI."
  },
  {
    question: "¿Cuál es la razón por la que Compose redibuja solo los nodos 'dinámicos' y omite los 'estáticos' del árbol de composición?",
    options: ["Porque los nodos estáticos están marcados con la anotación @Immutable y el runtime de Compose los excluye permanentemente del sistema de seguimiento de cambios.", "Porque en el Árbol de Composición, Compose registra las dependencias de cada nodo: un nodo que no lee ningún estado mutable es estático y sus parámetros no cambian, por lo que no necesita ser recompuesto cuando un estado ajeno cambia.", "Porque el compilador K2 identifica y precompila los nodos estáticos como constantes AOT, eliminándolos del ciclo de Recomposición.", "Porque los nodos estáticos están almacenados en el cache del GPU y Material Design 3 los preserva entre frames para optimizar el rendimiento gráfico."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La Recomposición Inteligente se basa en el seguimiento de dependencias: Compose registra qué estados lee cada nodo durante su composición. Si un nodo no lee ningún mutableStateOf(), no tiene dependencias de estado y es 'estático': Compose sabe que no necesita recomponerlo cuando cualquier estado cambia."
  },
  {
    question: "¿Cuál es el 'Fenómeno DSL' que describe el Tema 5 respecto a Jetpack Compose y SwiftUI?",
    options: ["El hecho de que Compose y SwiftUI sean los únicos frameworks de UI que pueden compilar a WebAssembly, permitiendo ejecutar apps móviles en navegadores.", "El hecho de que Compose y SwiftUI son lenguajes especializados (DSL) construidos sobre Kotlin y Swift respectivamente, que transforman el lenguaje de propósito general en una herramienta específica para describir interfaces declarativas sin escribir algoritmos complejos.", "El hecho de que el código Compose puede ser procesado por herramientas de diseño como Figma para generar prototipos automáticamente.", "El hecho de que tanto Compose como SwiftUI eliminan la necesidad de conocer el lenguaje base (Kotlin y Swift) para construir interfaces de usuario completas."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El Fenómeno DSL: Compose es 'un lenguaje dentro de Kotlin' diseñado específicamente para describir UIs. SwiftUI es 'un lenguaje dentro de Swift' con el mismo propósito. No se escriben algoritmos: se describe qué se quiere ver. Este fenómeno explica por qué el código de Compose/SwiftUI es tan legible y expresivo comparado con el imperativo."
  }
];
