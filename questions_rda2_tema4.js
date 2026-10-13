// ============================================================
// BANCO DE PREGUNTAS — RDA2 TEMA 4
// Ciclo de Vida y Componentes Fundamentales
// ============================================================
const questionsRDA2Tema4 = [
  {
    question: "¿Por qué el sistema operativo Android puede destruir y recrear componentes de una aplicación sin intervención del desarrollador?",
    options: ["Porque el compilador K2 reordena los hilos de ejecución para equilibrar la carga del CPU.", "Porque el SO gestiona activamente los recursos ante situaciones como falta de memoria RAM o cambios de configuración (ej. rotación de pantalla).", "Porque el Garbage Collector de ART limpia el heap de objetos Activity que llevan más de 5 minutos inactivos.", "Porque el Binder IPC interrumpe el ciclo de vida para sincronizar el Back Stack entre aplicaciones."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El SO es un gestor de recursos activo: puede matar y recrear componentes cuando necesita memoria o cuando ocurren cambios de configuración (rotación, idioma, tema). Esto tiene impacto directo en la UX, el rendimiento y la persistencia de datos."
  },
  {
    question: "¿Cuál es la responsabilidad principal del callback onCreate() en el ciclo de vida de una Activity?",
    options: ["Liberar recursos pesados como GPS y conexiones de red para evitar fugas de memoria.", "Reanudar sensores, animaciones y listeners de interacción luego de que la app vuelve al frente.", "Inicializar el ViewModel y configurar la UI (setContentView o setContent en Compose), siendo llamado una única vez en toda la vida del componente.", "Escuchar eventos del sistema operativo para persistir el estado antes de que el proceso sea terminado."],
    correctIndex: 2,
    feedback: "La respuesta correcta es c. onCreate() es el punto de entrada del ciclo de vida: aquí se inicializa el ViewModel y se carga el layout de la UI. Es llamado solo una vez por instancia de Activity."
  },
  {
    question: "¿Qué callback del ciclo de vida señala el momento en que el usuario puede interactuar plenamente con la pantalla?",
    options: ["onStart()", "onResume()", "onCreate()", "onRestart()"],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. onResume() marca el estado de interactividad plena: la Activity está en el frente, visible y recibiendo eventos del usuario."
  },
  {
    question: "¿Por qué las operaciones en onPause() deben ser ligeras y no bloquear la UI?",
    options: ["Porque onPause() solo se ejecuta cuando la batería está por debajo del 20%.", "Porque durante onPause() el Garbage Collector asume el control total del heap.", "Porque al sistema le urge mostrar la siguiente pantalla con rapidez; si onPause() tarda demasiado, la transición visual se percibe lenta.", "Porque onPause() no puede ser sobreescrito con super.onPause() en API 36+."],
    correctIndex: 2,
    feedback: "La respuesta correcta es c. onPause() es la antesala de que otra Activity tome el foco. El sistema quiere que esta transición sea fluida. Tareas pesadas deben moverse a onStop()."
  },
  {
    question: "¿Cuál es la diferencia de responsabilidad entre onStop() y onPause()?",
    options: ["No existe diferencia funcional; ambos son redundantes y se llaman secuencialmente por razones históricas.", "onPause() se usa para operaciones ligeras mientras la pantalla es aún parcialmente visible; onStop() se invoca cuando la Activity ya no es visible y libera recursos pesados.", "onStop() libera el ViewModel de memoria mientras que onPause() desregistra únicamente los BroadcastReceivers.", "onPause() destruye el árbol de composición de Jetpack Compose y onStop() lo destruye a nivel del kernel."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La distinción es de visibilidad: onPause() ocurre cuando la Activity pierde el foco pero puede seguir parcialmente visible. onStop() ocurre cuando está completamente oculta al usuario, siendo el momento de liberar recursos pesados."
  },
  {
    question: "Al registrar listeners pesados de sensores en onStart(), ¿en cuál callback es obligatorio desregistrarlos?",
    options: ["onPause()", "onDestroy()", "onStop()", "onRestart()"],
    correctIndex: 2,
    feedback: "La respuesta correcta es c. El patrón correcto es registrar en onStart() y desregistrar simétricamente en onStop(). Si solo se desregistran en onDestroy(), el sensor seguirá activo mientras la Activity está oculta, consumiendo batería y causando fugas."
  },
  {
    question: "¿Qué herramienta de persistencia de estado sobrevive tanto a la rotación como a la Muerte del Proceso (Process Death)?",
    options: ["remember de Jetpack Compose, ya que conserva el estado durante toda la sesión.", "ViewModel solo, ya que mantiene el estado en memoria mientras el proceso esté activo.", "ViewModel combinado con SavedStateHandle, ya que el ViewModel sobrevive a la rotación y el SavedStateHandle persiste datos serializables incluso cuando el SO termina el proceso.", "rememberSaveable, ya que serializa automáticamente todos los tipos de datos al Bundle del sistema."],
    correctIndex: 2,
    feedback: "La respuesta correcta es c. La rotación destruye y recrea la Activity pero el ViewModel sobrevive en memoria. La Muerte del Proceso termina el proceso completo y el ViewModel desaparece. SavedStateHandle integrado en el ViewModel persiste datos a través de ambos eventos."
  },
  {
    question: "¿Cuál es la limitación fundamental de remember que obliga a usar rememberSaveable para inputs de UI?",
    options: ["remember no es compatible con mutableStateOf y debe combinarse con StateFlow.", "remember pierde el estado cuando la configuración del dispositivo cambia (ej. rotación), ya que solo conserva el valor durante la recomposición dentro de la misma instancia.", "remember no puede almacenar tipos primitivos como Int o String.", "remember está obsoleto desde API 36 y reemplazado por retain."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. remember conserva el estado solo durante recomposiciones de la misma instancia. Si el dispositivo rota, la Activity es destruida y recreada, perdiendo el estado. rememberSaveable soluciona esto serializando el estado al Bundle del sistema."
  },
  {
    question: "En Android 16 (API 36), ¿cuál es el caso de uso recomendado para la nueva API retain?",
    options: ["Conservar objetos pesados no serializables en memoria durante la rotación, como instancias de ExoPlayer, Bitmaps o grafos complejos, sin necesidad de serialización.", "Persistir tokens de autenticación en el almacenamiento seguro del Keystore del sistema.", "Serializar al Bundle todos los datos del ViewModel para sobrevivir a la Muerte del Proceso sin SavedStateHandle.", "Reemplazar el uso de Room Database para datos temporales."],
    correctIndex: 0,
    feedback: "La respuesta correcta es a. retain (novedad de API 36) resuelve el problema de objetos pesados no serializables: ExoPlayer, Bitmaps, grafos complejos. rememberSaveable requiere datos serializables (Bundle); retain mantiene el objeto directamente en memoria durante la rotación."
  },
  {
    question: "¿Cuál es la función de la capa Domain Layer en la arquitectura multicapa recomendada por Google?",
    options: ["Definir los endpoints de las APIs REST y gestionar el caché de respuestas del servidor.", "Transformar los datos en representaciones visuales interactivas usando Composables.", "Encapsular la lógica de negocio pura en Casos de Uso (Use Cases), siendo el intermediario entre la UI y la Data Layer.", "Gestionar el ciclo de vida de los componentes y coordinar las transacciones de Room."],
    correctIndex: 2,
    feedback: "La respuesta correcta es c. La Domain Layer contiene los Casos de Uso que encapsulan tareas de lógica de negocio. Desacopla la UI de la Data Layer: la UI no necesita saber cómo se obtienen los datos, y la Data Layer no necesita saber cómo se presentan."
  },
  {
    question: "Según la arquitectura de capas de Google, ¿cuál es la responsabilidad de la Data Layer?",
    options: ["Renderizar los Composables y gestionar el árbol de composición.", "Ser el cimiento de la app: obtención, persistencia y sincronización de datos a través de Repositorios, Room y APIs.", "Encapsular la lógica de negocio en funciones puras e inmutables aisladas del framework.", "Gestionar el ciclo de vida de los Activities y coordinar las transacciones del NavController."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La Data Layer es el cimiento: incluye los Repositorios (fuente única de verdad), Room (base de datos local) y la integración con APIs remotas. Expone los datos a las capas superiores sin que estas conozcan la implementación."
  },
  {
    question: "¿Cuál es el propósito de la componente Service dentro de los cuatro pilares del sistema Android?",
    options: ["Proveer una pantalla con la que el usuario puede interactuar directamente.", "Ejecutar operaciones de larga duración en segundo plano sin interfaz de usuario (ej. descargas, reproducción de música).", "Escuchar eventos globales del sistema operativo y notificar a las aplicaciones suscritas.", "Facilitar la compartición segura de datos entre aplicaciones a través de consultas tipadas."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Un Service ejecuta operaciones de larga duración en segundo plano. En API 36, Google impuso restricciones severas para inicios de Services desde el segundo plano para mejorar la eficiencia energética."
  },
  {
    question: "¿Cuál de los cuatro pilares de Android facilita la compartición segura de datos entre aplicaciones?",
    options: ["Service", "BroadcastReceiver", "Activity", "ContentProvider"],
    correctIndex: 3,
    feedback: "La respuesta correcta es d. El ContentProvider expone datos de una app a otras de forma estructurada y segura, proveyendo una interfaz estándar basada en URIs. Es la base de funcionalidades como el selector de contactos o el acceso a la galería."
  },
  {
    question: "En la comparativa del ciclo de vida entre Android y iOS, ¿cuál es el análogo directo de onResume() en un UIViewController?",
    options: ["viewDidLoad()", "viewWillAppear()", "viewDidAppear()", "deinit"],
    correctIndex: 2,
    feedback: "La respuesta correcta es c. El mapeo es: onCreate() ↔ viewDidLoad(), onStart() ↔ viewWillAppear(), onResume() ↔ viewDidAppear() (visible e interactiva), onStop() ↔ viewDidDisappear(), onDestroy() ↔ deinit."
  },
  {
    question: "¿Qué innovación de Android 16 (API 36) obliga a migrar de onBackPressed() a OnBackInvokedDispatcher?",
    options: ["La integración del compilador K2 que depreca las APIs basadas en interfaces funcionales.", "El sistema de Predictive Back que permite animar la transición de regreso antes de que el usuario complete el gesto.", "La restricción de memoria de ART que impide que el Back Stack almacene más de 5 Activities.", "La adopción de Material You que redefine el gesto de retroceso como una animación de color."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Predictive Back permite al sistema pre-visualizar el destino al que el usuario regresará antes de que complete el gesto. Para soportarlo, el nuevo OnBackInvokedDispatcher reemplaza al viejo onBackPressed()."
  },
  {
    question: "¿Cuál es la Regla de Oro de persistencia de estado en la arquitectura Android moderna?",
    options: ["Almacenar siempre el estado de la UI en variables globales estáticas para que sobrevivan a cualquier evento.", "La UI debe derivarse siempre de modelos de datos persistentes; nunca guardar estado directamente en los Composables o Activities.", "Usar exclusivamente Room Database para todo tipo de estado, incluyendo el efímero de la UI.", "Duplicar el estado entre rememberSaveable y SavedStateHandle para garantizar redundancia."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La filosofía arquitectónica fundamental es que la UI es una proyección del estado de los datos. Si la Activity es destruida y recreada, la UI simplemente se reconstruye desde el estado persistente, sin pérdida de información."
  },
  {
    question: "¿Cuál de las herramientas de persistencia es la indicada para datos críticos que deben sobrevivir entre sesiones completas del usuario?",
    options: ["ViewModel con SavedStateHandle", "remember en Jetpack Compose", "Room Database o DataStore", "rememberSaveable con Bundle serializable"],
    correctIndex: 2,
    feedback: "La respuesta correcta es c. Room Database y DataStore persisten en el sistema de archivos, sobreviviendo a rotaciones, Process Death y reinicios. Son la capa de persistencia física definitiva para datos críticos o volúmenes grandes."
  },
  {
    question: "¿Por qué el Tema 4 afirma que las apps modernas son ecosistemas de componentes efímeros?",
    options: ["Porque las apps se construyen con microservicios que se despliegan y destruyen dinámicamente en la nube.", "Porque el SO puede destruir y recrear cualquier componente en cualquier momento por razones de memoria o configuración, sin vida garantizada.", "Porque Kotlin Multiplatform permite que los componentes migren entre Android e iOS en tiempo de ejecución.", "Porque Material Design 3 reemplaza los componentes de UI en cada cambio de tema."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El término efímero describe la naturaleza fundamental de los componentes Android: el SO puede terminarlos por falta de memoria o recrearlos por un cambio de configuración. Un ingeniero profesional diseña sus apps asumiendo que cualquier componente puede morir en cualquier momento."
  },
  {
    question: "En la comparativa Android-iOS, ¿cuál es el callback de iOS análogo a onDestroy() de una Activity?",
    options: ["viewDidDisappear()", "viewWillDisappear()", "dealloc()", "deinit"],
    correctIndex: 3,
    feedback: "La respuesta correcta es d. En Swift/iOS, deinit es el destructor: se llama cuando el UIViewController es desasignado de memoria. viewDidDisappear() corresponde a onStop() (la pantalla dejó de ser visible), deinit corresponde a onDestroy() (la instancia es eliminada definitivamente)."
  },
  {
    question: "¿Cuál es el impacto directo en la UX si el ciclo de vida no se gestiona correctamente?",
    options: ["El compilador K2 aumenta el tiempo de construcción del APK al detectar referencias no manejadas.", "El Binder IPC emite excepciones no recuperables al intentar comunicar componentes destruidos.", "El usuario puede perder información (formularios, posición de scroll, datos de sesión) al rotar la pantalla o regresar a la app.", "La Data Layer deja de sincronizar los Repositorios con Room cuando el proceso es terminado."],
    correctIndex: 2,
    feedback: "La respuesta correcta es c. El impacto es directo: al rotar el dispositivo se pierden datos de un formulario, al regresar de otra app se pierde la posición del scroll. Esto genera la percepción de una app de baja calidad."
  },
  {
    question: "¿Qué representa el BroadcastReceiver y cuál fue la restricción más relevante impuesta en API 36?",
    options: ["Gestiona el Back Stack; en API 36 fue reemplazado por el NavController.", "Escucha eventos globales del SO (batería, conectividad, alarmas); en API 36 se limitaron las prioridades en anuncios globales para mejorar la estabilidad.", "Ejecuta operaciones en segundo plano; en API 36 sus permisos fueron absorbidos por WorkManager.", "Facilita el intercambio de datos entre apps; en API 36 quedó obsoleto en favor de ContentProvider tipado."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El BroadcastReceiver es el oído de la app ante el sistema: batería baja, cambio de conectividad, alarmas. En API 36, Google limitó las prioridades de broadcasts globales para prevenir que apps en segundo plano consuman recursos excesivos."
  },
  {
    question: "¿Por qué la separación en capas UI/Domain/Data produce apps más mantenibles, escalables y robustas?",
    options: ["Porque el compilador AOT puede optimizar cada capa independientemente, reduciendo el APK hasta en un 40%.", "Porque cada capa tiene una responsabilidad única y bien definida, permitiendo cambiar una implementación sin afectar las otras capas.", "Porque Material Design 3 requiere mandatoriamente esta estructura para que el Monet Engine aplique los temas.", "Porque ART compila cada capa en un proceso separado, mejorando el paralelismo."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El principio de Separación de Responsabilidades (SoC): puedes reemplazar Room por Realm en la Data Layer sin tocar la UI. Puedes cambiar la lógica de negocio sin modificar cómo se presentan los datos. Esto reduce deuda técnica y facilita pruebas unitarias."
  },
  {
    question: "¿Cuál es la diferencia práctica entre onStart() y onResume() desde la perspectiva de visibilidad e interactividad?",
    options: ["No hay diferencia práctica; ambos callbacks son redundantes.", "onStart() señala que la Activity es visible pero no necesariamente interactiva; onResume() señala que está en primer plano y el usuario puede interactuar.", "onStart() inicializa los Composables y onResume() aplica el tema de Material Design 3.", "onStart() registra el NavController y onResume() aplica las transiciones del Predictive Back."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. onStart() marca que la Activity es visible pero puede estar detrás de un diálogo o en modo multiventana. onResume() marca el estado interactivo pleno con el foco del usuario. Esta distinción es importante para decidir dónde registrar sensores."
  },
  {
    question: "¿Cuál es el análogo directo de onStart() en el ciclo de vida del UIViewController de iOS?",
    options: ["viewDidLoad()", "viewWillAppear()", "viewDidAppear()", "viewWillDisappear()"],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La tabla de mapeo: onCreate() ↔ viewDidLoad() (inicialización), onStart() ↔ viewWillAppear() (pantalla a punto de ser visible), onResume() ↔ viewDidAppear() (visible e interactiva). Fundamental para proyectos Kotlin Multiplatform."
  },
  {
    question: "¿Cuál es el riesgo arquitectónico de gestionar el estado de la UI directamente en variables locales de una Activity sin usar ViewModel?",
    options: ["El compilador K2 no puede inferir los tipos de variables locales, generando errores de Platform Type.", "El Binder IPC no puede acceder a variables locales para sincronizar el estado entre procesos.", "Las variables locales de una Activity son destruidas cuando el sistema rota la pantalla o mata el proceso, causando pérdida de estado y regresión de UX.", "Room Database no puede leer variables locales de Activity, rompiendo la sincronización."],
    correctIndex: 2,
    feedback: "La respuesta correcta es c. Antes de ViewModel, los datos guardados en variables de la Activity se perdían al rotar la pantalla porque la Activity era destruida y recreada. ViewModel sobrevive a este ciclo porque no está ligado al ciclo de vida de la Activity sino al de su ViewModelStore."
  },
  {
    question: "¿Cuál es la función de onRestart() en el ciclo de vida de una Activity?",
    options: ["Se invoca después de onDestroy() para reinstanciar la Activity desde cero, equivalente a un segundo onCreate().", "Se invoca cuando una Activity que estaba completamente oculta (había pasado por onStop()) vuelve a ser visible, justo antes de onStart().", "Se invoca exclusivamente durante cambios de configuración como la rotación, siendo el punto donde el estado del Bundle es restaurado.", "Se invoca cuando el sistema necesita liberar memoria, permitiendo al desarrollador decidir si guarda el estado."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. onRestart() es la reentrada al ciclo visible: cuando una Activity que pasó por onStop() vuelve a ser visible, el sistema llama onRestart() → onStart() → onResume() en lugar del camino inicial onCreate() → onStart() → onResume()."
  },
  {
    question: "¿Qué afirmación resume la filosofía del Tema 4 sobre por qué estudiar el ciclo de vida es fundamental?",
    options: ["Para poder aprobar los exámenes de certificación de Google que evalúan el orden exacto de los callbacks.", "Porque el ciclo de vida es el contrato entre el SO y la app: entenderlo es la diferencia entre una app que pierde datos y una que se comporta de forma predecible y robusta.", "Para optimizar el tiempo de arranque (cold start) de la app reduciendo operaciones en onCreate().", "Porque sin entender el ciclo de vida es imposible integrar librerías de terceros como Retrofit o Coil."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El ciclo de vida es el contrato fundamental entre el SO y la app. Un ingeniero que no lo domina produce apps que pierden el estado del usuario, consumen recursos en segundo plano o se comportan de forma errática. Dominarlo es la diferencia entre código amateur y código de producción profesional."
  },
  {
    question: "¿Por qué el Tema 4 advierte que en onPause() no se deben realizar operaciones de guardado que tomen tiempo significativo?",
    options: ["Porque onPause() se ejecuta en un hilo de baja prioridad y las operaciones de I/O no están permitidas en ese contexto.", "Porque si onPause() tarda mucho, bloquea la transición visual a la siguiente pantalla, haciendo que el usuario perciba que la app congela antes de navegar.", "Porque Room Database y DataStore solo pueden escribir datos durante onStop() o onDestroy().", "Porque el ViewModel es destruido antes de que onPause() comience, haciendo que las referencias a datos sean inválidas."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Cuando onPause() es llamado, el sistema espera mostrar la siguiente pantalla. Operaciones lentas congela la transición visual. La solución es hacer operaciones ligeras en onPause() y mover las pesadas a onStop() o usar coroutines con lifecycleScope."
  },
  {
    question: "¿Cuál es la premisa de diseño que transforma una Activity en un componente robusto ante cambios de configuración?",
    options: ["Asumir que la Activity nunca será destruida y codificar toda la lógica en sus variables de instancia.", "Diseñar la Activity como una proyección sin estado propio: toda la información reside en el ViewModel y capas de persistencia, de forma que recrearla sea equivalente a redibujarse desde los datos existentes.", "Bloquear los cambios de configuración en el AndroidManifest con android:configChanges.", "Usar exclusivamente onSaveInstanceState() para serializar manualmente toda la UI al Bundle."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La premisa correcta es tratar la Activity como una vista sin estado: no es el repositorio de datos, es solo la pantalla que los muestra. Si el ViewModel contiene el estado de negocio y Room/DataStore la persistencia, recrear la Activity solo significa redibujar desde el estado existente."
  },
  {
    question: "¿Cuál es el riesgo de usar android:configChanges en el Manifest para evitar la recreación de la Activity?",
    options: ["Que el compilador K2 deshabilita las optimizaciones AOT para esa Activity.", "Que el desarrollador debe gestionar manualmente todos los cambios de configuración (layouts, resources), asumiendo responsabilidades que el framework normalmente manejaría automáticamente, aumentando la deuda técnica.", "Que el BroadcastReceiver de esa Activity pierde la capacidad de escuchar eventos del sistema.", "Que Material You no puede aplicar temas dinámicos a Activities que bloquean los cambios."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Bloquear configChanges es mala práctica: el desarrollador asume la responsabilidad de manejar manualmente todos los cambios (layouts para diferente orientación, resources localizados, tamaños de fuente). El framework está diseñado para manejar esto automáticamente mediante la recreación."
  },
  {
    question: "¿Cuál es el impacto en rendimiento cuando la Activity es destruida y recreada si no se implementó correctamente la persistencia con ViewModel?",
    options: ["Ninguno, ya que ART mantiene el bytecode .dex compilado en caché y recrea la Activity en microsegundos.", "El desarrollador debe re-ejecutar operaciones costosas (llamadas de red, consultas a DB) si no implementó correctamente la persistencia de estado con ViewModel.", "El Garbage Collector se activa para limpiar la instancia anterior, causando una pausa de GC visible.", "El compilador JIT pierde todas las optimizaciones acumuladas y debe recompilar el código desde el bytecode base."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Si al rotar la pantalla el ViewModel no persiste el resultado de una llamada de red, la Activity recreada deberá volver a llamar a la API. Esto consume datos del usuario, introduce latencia y puede mostrar una pantalla de carga innecesaria."
  },
  {
    question: "Al combinar ViewModel + SavedStateHandle para persistencia, ¿qué tipo de datos puede sobrevivir al Process Death a través de SavedStateHandle?",
    options: ["Cualquier objeto de Kotlin, incluyendo instancias de clases personalizadas no serializables.", "Solo datos primitivos serializables: Strings, números, Booleans y tipos Parcelable/Serializable compatibles con el Bundle del sistema.", "Objetos grandes como Bitmaps, listas de miles de elementos y streams de audio.", "Únicamente datos de tipo Flow y StateFlow provenientes de Room Database."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. SavedStateHandle persiste datos a través del Bundle del sistema operativo, que tiene limitaciones: solo acepta tipos primitivos, Strings, y objetos Parcelable o Serializable. Para objetos complejos o grandes, la solución correcta es Room Database o DataStore."
  },
  {
    question: "¿Cuál es la \"crisis de sincronización\" que el Tema 5 atribuye al paradigma imperativo XML+Java y que Compose resuelve estructuralmente?",
    options: ["La incapacidad de XML para describir animaciones complejas sin código Java adicional.", "La necesidad de actualizar manualmente la UI en cada lugar donde el estado cambia, generando el Efecto Cascada: múltiples fuentes de verdad que pueden quedar desincronizadas y producir bugs visuales difíciles de rastrear.", "La incompatibilidad de las vistas XML con el sistema de tipos de Kotlin, que genera errores de Platform Type.", "La imposibilidad de reutilizar layouts XML entre diferentes Activities sin copiar el código de sincronización."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El Efecto Cascada es el problema central: cuando el estado se dispersa por múltiples controladores, cada uno debe actualizar la UI manualmente. Si uno olvida llamar a setText() o setVisibility(), la interfaz queda desactualizada. Compose lo resuelve con una única fuente de verdad."
  },
  {
    question: "¿Qué es la Recomposición Inteligente en Jetpack Compose y cuál es su ventaja de rendimiento?",
    options: ["Es el proceso por el que Compose destruye y recrea todo el árbol de composición cada vez que cualquier estado cambia.", "Es el mecanismo por el que Compose solo vuelve a ejecutar los Composables cuyos parámetros o estado han cambiado, dejando intactos los nodos no afectados.", "Es la capacidad del compilador K2 de precompilar los Composables más usados usando Profile Guided Optimization.", "Es el sistema por el que rememberSaveable detecta cambios de configuración y actualiza el árbol sin recrear la Activity."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La Recomposición Inteligente es la optimización central de Compose: cuando un estado cambia, solo recompone los nodos del árbol que dependen del estado modificado. La analogía del ingeniero: 'Si cambias una celda de Excel, solo se recalculan las fórmulas que dependen de ella'."
  },
  {
    question: "¿Cuál es el Árbol de Composición en Jetpack Compose y qué información almacena cada nodo?",
    options: ["Es el grafo de navegación declarativo que conecta las pantallas; cada nodo almacena la ruta y los argumentos del destino.", "Es la estructura jerárquica interna que Compose construye para representar los Composables; cada nodo almacena los parámetros que recibe y el estado que observa.", "Es el árbol del DOM de la UI en XML que el sistema convierte a Composables durante la migración de proyectos legacy.", "Es el grafo de dependencias de Gradle que relaciona los módulos del proyecto."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El Árbol de Composición es la estructura interna de Compose: cada Composable es un nodo que almacena sus parámetros de entrada y el estado que observa. Esta información permite la Recomposición Inteligente: cuando un estado cambia, Compose navega el árbol y recompone solo los nodos dependientes."
  },
  {
    question: "¿Qué problema de rendimiento ocurre al usar Column con forEach para mostrar una lista de 1000 elementos?",
    options: ["Column con forEach consume demasiada memoria del GPU al renderizar los gradientes de Material Design 3.", "Column con forEach obliga al sistema a componer y mantener en memoria la totalidad de los 1000 elementos simultáneamente, aunque la mayoría no sean visibles.", "Column con forEach no es compatible con el sistema de tipos seguros de navegación de API 36.", "Column con forEach deshabilita la Recomposición Inteligente, forzando a recalcular el árbol completo en cada scroll."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Column con forEach compone TODOS los elementos en memoria, incluso los fuera de pantalla. La solución es LazyColumn, el equivalente declarativo del RecyclerView: solo compone los elementos visibles actualmente en pantalla."
  },
  {
    question: "¿Cuál es la equivalencia de Column y Row de Jetpack Compose en SwiftUI?",
    options: ["Column ↔ ScrollView, Row ↔ NavigationStack", "Column ↔ VStack, Row ↔ HStack", "Column ↔ List, Row ↔ ForEach", "Column ↔ ZStack, Row ↔ LazyGrid"],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La tabla de convergencia establece: Column (vertical) ↔ VStack, Row (horizontal) ↔ HStack. Ambos frameworks comparten la filosofía declarativa moderna con contenedores que organizan hijos verticalmente u horizontalmente."
  },
  {
    question: "¿Qué es un DSL en el contexto de Jetpack Compose y SwiftUI?",
    options: ["Un lenguaje de programación completamente nuevo creado por Google y Apple para reemplazar Kotlin y Swift.", "Un lenguaje diseñado para una tarea específica (describir UIs) que vive dentro del lenguaje de propósito general, permitiendo describir interfaces de forma declarativa sin algoritmos complejos.", "Una herramienta de serialización que convierte los Composables al formato JSON para enviar a un servidor de renderizado.", "Un sistema de plantillas XML avanzado que el compilador K2 transforma en código Kotlin durante la compilación."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Un DSL es 'un lenguaje dentro de un lenguaje': Compose es un DSL de Kotlin para UIs, SwiftUI es un DSL de Swift para el mismo propósito. No se escriben algoritmos: se describe qué se quiere ver. 'El código se convierte en la documentación visual de la interfaz'."
  },
  {
    question: "¿Cuál es el equivalente de @State de SwiftUI en Jetpack Compose para manejar estado local?",
    options: ["SavedStateHandle", "mutableStateOf() dentro de by remember { }", "@Composable con retorno de StateFlow", "LiveData observada con observeAsState()"],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. La tabla comparativa establece: Estado en SwiftUI @State ↔ remember en Compose. El patrón idiomático: `var count by remember { mutableStateOf(0) }`. mutableStateOf crea el estado observable y remember lo conserva entre recomposiciones."
  },
  {
    question: "¿Cuál es la ventaja del patrón UiState con sealed class (Loading, Success, Error) combinado con when en Jetpack Compose?",
    options: ["Permite serializar el estado al Bundle del sistema para sobrevivir al Process Death sin SavedStateHandle.", "Define un conjunto cerrado y exhaustivo de estados posibles de la pantalla; con when, el compilador exige manejar todos los casos, eliminando estados inconsistentes en la UI.", "Reemplaza el ViewModel como fuente de verdad, permitiendo que los Composables gestionen directamente las llamadas de red.", "Convierte el estado de la UI en un tipo serializable compatible con Room Database para persistencia automática."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. Este es el Escudo del Compilador aplicado al estado de pantalla: sealed class UiState con Loading, Success y Error define todos los estados posibles. when(uiState) obliga a manejar cada caso, eliminando estados inconsistentes: la pantalla nunca puede mostrar datos obsoletos mientras está cargando."
  },
  {
    question: "¿Qué rol cumple el Modifier en Jetpack Compose y cuál es su equivalente en SwiftUI?",
    options: ["El Modifier aplica animaciones de transición entre Composables; en SwiftUI equivale a Animation.", "El Modifier funciona como adjetivo que define apariencia y comportamiento de un Composable (padding, tamaño, color); en SwiftUI son los modificadores encadenados con punto (ej. .padding()).", "El Modifier gestiona el estado interno de un Composable; en SwiftUI equivale a @StateObject.", "El Modifier conecta los Composables con el NavController para navegación tipada; en SwiftUI equivale a NavigationLink."],
    correctIndex: 1,
    feedback: "La respuesta correcta es b. El Modifier en Compose es el sistema de decoración: se encadenan para aplicar padding, tamaño, colores, bordes, comportamientos de click. El ingeniero lo describe como 'adjetivos que definen la apariencia'. En SwiftUI el equivalente son los modificadores encadenados: .padding(), .background(), .font()."
  }
];

if (typeof window !== 'undefined') {
    window.questionsRDA2Tema4 = questionsRDA2Tema4;
}
