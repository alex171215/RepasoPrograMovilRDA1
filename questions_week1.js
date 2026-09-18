// ============================================================
// BANCO DE PREGUNTAS - SEMANA 1
// Ecosistema Móvil y Arquitectura de Sistemas Operativos
// ============================================================
const questionsWeek1 = [
  {
    "week": 1,
    "question": "¿Cuál es la principal diferencia arquitectónica entre el kernel de Android y el kernel de iOS en su capa más fundamental?",
    "options": [
      "Android usa un kernel híbrido basado en Darwin, mientras que iOS usa un kernel monolítico Linux.",
      "Android usa un kernel monolítico basado en Linux, mientras que iOS usa un kernel híbrido basado en XNU/Darwin.",
      "Ambos sistemas operativos comparten el mismo kernel de Linux, diferenciándose solo en la capa de aplicaciones.",
      "Android usa un microkernel modular, mientras que iOS usa un kernel monolítico basado en Linux."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Android se construye sobre un kernel monolítico Linux donde todos los servicios del sistema corren en el mismo espacio de memoria. iOS, en cambio, usa XNU/Darwin, un kernel híbrido que combina elementos de microkernel (Mach) con partes monolíticas (BSD)."
  },
  {
    "week": 1,
    "question": "¿Qué mecanismo de Comunicación entre Procesos (IPC) usa Android internamente y es considerado el 'corazón' de su sistema nervioso?",
    "options": [
      "AIDL (Android Interface Definition Language)",
      "Mach Ports",
      "Binder",
      "UNIX Domain Sockets"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. Binder es el mecanismo IPC de alto rendimiento y bajo overhead de Android. Permite que los procesos se comuniquen de forma segura y eficiente. Es tan fundamental que servicios críticos como el WindowManager o el ActivityManager lo usan constantemente."
  },
  {
    "week": 1,
    "question": "En el contexto del 'Sandboxing' en Android, ¿qué estrategia usa el sistema operativo para aislar cada aplicación de las demás?",
    "options": [
      "Asigna a cada aplicación un Identificador de Usuario (UID) único, haciéndola creer que es el único usuario del sistema.",
      "Ejecuta cada aplicación en su propia máquina virtual completamente separada del kernel.",
      "Usa un firewall interno que bloquea la comunicación entre procesos de distintas apps.",
      "Encripta los datos de cada aplicación con una clave AES-256 única generada en la instalación."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es a. Android hereda el modelo de seguridad de Linux: cada app instalada recibe un UID (User ID) único. Desde la perspectiva del kernel, cada app es un 'usuario' diferente, y Linux aplica sus reglas de permisos de archivos normales para que una app no pueda leer los datos de otra."
  },
  {
    "week": 1,
    "question": "¿Cuál es el formato de entrega del bytecode de las aplicaciones Android, que permite que sean independientes de la arquitectura del CPU?",
    "options": [
      "Binario nativo ARM64",
      "Bytecode .dex (Dalvik Executable)",
      "Bytecode .class de la JVM",
      "Código LLVM IR"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Las aplicaciones Android se compilan a archivos .dex (Dalvik Executable). Este bytecode es independiente del CPU, lo que permite que la misma app funcione en dispositivos con arquitecturas ARM, x86, etc. Es ART (Android Runtime) quien luego lo compila a código nativo."
  },
  {
    "week": 1,
    "question": "¿Cuál es el modelo de compilación que utiliza ART (Android Runtime) en 2026 para equilibrar el tiempo de instalación, el espacio en disco y el rendimiento de ejecución?",
    "options": [
      "Compilación puramente interpretada en tiempo real para máxima flexibilidad.",
      "Compilación exclusivamente AOT (Ahead-Of-Time) antes de la primera ejecución.",
      "Un modelo híbrido que combina JIT (Just-In-Time) y AOT (Ahead-Of-Time).",
      "Generación de código nativo LLVM directamente desde el código fuente Kotlin."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. ART usa un enfoque híbrido: JIT compila el código que se usa frecuentemente durante la ejecución, mientras que AOT precompila partes del código durante periodos de inactividad del dispositivo (Profile-Guided Optimization). Esto equilibra la velocidad de instalación con el rendimiento a largo plazo."
  },
  {
    "week": 1,
    "question": "A diferencia de Android con su 'Garbage Collection', iOS usa un sistema de gestión de memoria llamado ARC. ¿Cuál es la principal ventaja de ARC sobre la recolección de basura?",
    "options": [
      "ARC usa menos memoria RAM porque elimina referencias circulares automáticamente.",
      "ARC es determinista: libera la memoria en el instante exacto en que un objeto deja de tener referencias, sin pausas impredecibles.",
      "ARC es más sencillo de implementar para el programador porque no requiere declarar referencias débiles.",
      "ARC permite que iOS reutilice bloques de memoria sin necesidad de liberarlos primero."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La ventaja clave de ARC (Automatic Reference Counting) es su naturaleza determinista. El objeto se destruye exactamente cuando su contador de referencias llega a cero. El Garbage Collector de Android, en cambio, puede causar pausas ('GC pauses') en momentos impredecibles, afectando potencialmente la fluidez de la UI."
  },
  {
    "week": 1,
    "question": "En el ecosistema móvil de 2026, ¿qué tendencia describe el fenómeno por el cual los usuarios renuevan sus dispositivos hacia modelos premium con mejor hardware para procesar IA y Realidad Aumentada localmente?",
    "options": [
      "Convergencia multiplataforma",
      "Commoditización del hardware",
      "Premiumización",
      "On-device AI shift"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. La 'Premiumización' describe la tendencia del mercado donde los usuarios, motivados por capacidades de IA generativa y RA local, migran hacia dispositivos de gama alta con NPUs (Neural Processing Units) más potentes, chips dedicados y más RAM."
  },
  {
    "week": 1,
    "question": "¿Cuál es el Principio de Seguridad Central que gobierna el modelo de 'Sandboxing' en ambas plataformas (Android e iOS)?",
    "options": [
      "Principio de Seguridad por Oscuridad",
      "Principio del Menor Privilegio",
      "Principio de Defensa en Profundidad",
      "Principio de Confianza Cero"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. El Principio del Menor Privilegio (Principle of Least Privilege) establece que cada aplicación solo debe tener acceso a los recursos estrictamente necesarios para su función. Es la base del sandboxing: una app de calculadora no necesita acceso a tus contactos o cámara."
  },
  {
    "week": 1,
    "question": "En la 'Anatomía Lógica de un Proyecto Android', ¿cuáles son los 4 pilares fundamentales que el instructor denomina como la 'arquitectura sagrada'?",
    "options": [
      "Activities, Fragments, ViewModels y LiveData",
      "Manifest, Kotlin, Resources y Gradle",
      "src, res, assets y libs",
      "build.gradle, settings.gradle, proguard.pro y local.properties"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La 'arquitectura sagrada' de un proyecto Android son: el Manifest (AndroidManifest.xml, que declara los componentes y permisos), el código Kotlin (la lógica de la app), Resources (layouts, strings, drawables) y Gradle (el sistema de construcción que gestiona dependencias y la compilación)."
  },
  {
    "week": 1,
    "question": "¿Qué afirma el instructor sobre el uso del Control de Versiones (Git) en proyectos de software?",
    "options": [
      "Es recomendable para proyectos con más de 3 desarrolladores, pero opcional para proyectos individuales.",
      "Es útil principalmente para compartir código, pero no es crítico para el desarrollo individual.",
      "Sin control de versiones, no es Ingeniería.",
      "Es una herramienta opcional que se debe usar solo en proyectos de producción, no en prácticas académicas."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. El instructor lo establece como una máxima: 'Sin control de versiones, no es Ingeniería.' Git no es opcional; es una herramienta fundamental de la ingeniería de software profesional que permite rastrear cambios, colaborar y revertir errores, independientemente del tamaño del proyecto."
  },
  {
    "week": 1,
    "question": "En la comparativa de rendimiento entre Android Runtime (ART) e iOS Native, ¿cuál es la ventaja clave que tiene iOS en cuanto a rendimiento inicial de una aplicación?",
    "options": [
      "iOS usa JIT para optimizar el código en tiempo real durante la primera ejecución.",
      "iOS genera binarios nativos específicos para ARM que permiten máxima velocidad desde el primer lanzamiento.",
      "iOS usa .dex bytecode que el procesador puede ejecutar directamente sin compilación.",
      "iOS carga las aplicaciones desde la caché del procesador, eliminando el tiempo de acceso a disco."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Las apps de iOS se compilan a binario nativo (específico para la arquitectura ARM de Apple Silicon) antes de ser distribuidas. Esto significa que el procesador puede ejecutarlas directamente a máxima velocidad sin ninguna fase de compilación o interpretación en tiempo de ejecución."
  },
  {
    "week": 1,
    "question": "Según la tabla comparativa entre ART y iOS Native, ¿cuál es la característica que le da mayor FLEXIBILIDAD a Android Runtime (ART)?",
    "options": [
      "La capacidad de compilar código en paralelo usando múltiples núcleos del CPU.",
      "La alta interoperabilidad con el ecosistema Java/Kotlin y sus millones de librerías.",
      "La posibilidad de ejecutar bytecode sin necesidad de instalación previa.",
      "El uso de Garbage Collection automático que libera al desarrollador de gestionar memoria."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Según la tabla del material, la flexibilidad de ART radica en su 'Alta interoperabilidad con Java/Kotlin'. Esto significa que cualquier librería Java existente puede ser usada en proyectos Android, dando acceso a un ecosistema enorme de código y herramientas consolidadas."
  },
  {
    "week": 1,
    "question": "¿Cuál fue la versión del estándar de permisos que se estableció en 2026 como el estándar para AMBAS plataformas (Android e iOS) en materia de seguridad?",
    "options": [
      "Permisos declarados exclusivamente en el Manifest/Info.plist en tiempo de compilación.",
      "Permisos solicitados por el sistema operativo de forma automática sin intervención del usuario.",
      "Permisos en Tiempo de Ejecución (Runtime Permissions), donde el usuario decide en el momento en que la app los necesita.",
      "Permisos aprobados previamente por las tiendas de aplicaciones (App Store / Play Store)."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. El estándar 2026 para ambas plataformas son los Permisos en Tiempo de Ejecuci\u00f3n. Esto significa que la aplicación ya no puede declarar permisos en el Manifest y tenerlos automáticamente; debe solicitarlos al usuario en el momento exacto en que los necesita, dando al usuario control granular."
  },
  {
    "week": 1,
    "question": "El material de la Semana 1 menciona que 'No estudiamos historia: Estudiamos la Evolución para predecir el futuro'. ¿Qué objetivo pedagógico refleja esta afirmación?",
    "options": [
      "Entender el pasado para memorizar los hitos tecnológicos del mercado móvil.",
      "Conocer la evolución del mercado para identificar tendencias y anticipar hacia dónde se moverá la industria.",
      "Aprender a usar herramientas antiguas para garantizar retrocompatibilidad con dispositivos legacy.",
      "Documentar la historia de Android e iOS para proyectos de investigación académica."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La frase refleja un enfoque de ingeniería estratégica. Al entender cómo evolucionó el mercado móvil (de PCs de escritorio → laptops → smartphones → wearables → dispositivos de IA), podemos identificar patrones y anticipar qué habilidades y tecnologías serán relevantes en los próximos años."
  },
  {
    "week": 1,
    "question": "En la arquitectura de Android, ¿qué función cumple el archivo 'AndroidManifest.xml'?",
    "options": [
      "Define la interfaz gráfica de usuario de la aplicación usando XML.",
      "Contiene el código de configuración de las dependencias de terceros (librerías).",
      "Declara los componentes de la app (Activities, Services, etc.) y los permisos que requiere al sistema operativo.",
      "Es el punto de entrada del compilador Gradle para iniciar el proceso de construcción."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. El AndroidManifest.xml es la 'tarjeta de presentación' de la app ante el sistema operativo Android. Declara todos los componentes (qué Activities existen, qué Services corren en segundo plano, qué BroadcastReceivers escuchan), así como los permisos que necesita (cámara, internet, etc.)."
  },
  {
    "week": 1,
    "question": "¿Qué significan las versiones 'Meerkat' y 'Ladybug' mencionadas en el material de Semana 1?",
    "options": [
      "Son las versiones del sistema operativo Android compatibles con el curso.",
      "Son los nombres en código de las versiones de Android Studio utilizadas en el curso durante 2026.",
      "Son los apodos de los emuladores de dispositivos Android disponibles para pruebas.",
      "Son los frameworks de pruebas unitarias recomendados para proyectos Android."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Meerkat y Ladybug son los nombres en código de versiones de Android Studio (el IDE oficial de Google para desarrollo Android). Android Studio sigue una nomenclatura zoológica para sus versiones, y el curso usa esas versiones específicas del entorno de desarrollo profesional."
  },
  {
    "week": 1,
    "question": "En el modelo de gestión de memoria de Android, el 'Garbage Collector' tiene una característica que puede afectar la fluidez de la UI. ¿Cuál es?",
    "options": [
      "Consume demasiada batería al ejecutarse constantemente en segundo plano.",
      "Requiere que el desarrollador marque manualmente los objetos listos para eliminar.",
      "Las pausas de GC son no deterministas: el GC puede interrumpir la ejecución en momentos impredecibles, causando 'jank' en la UI.",
      "Solo puede liberar objetos que estén en el mismo hilo de ejecución donde fueron creados."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. La naturaleza 'no determinista' del Garbage Collector significa que puede activarse en cualquier momento para liberar memoria. Si esto ocurre durante una animación o renderizado de UI, puede causar 'jank' (fotogramas perdidos). Por eso iOS, con su ARC determinista, tiene reputación de mayor fluidez de interfaz."
  },
  {
    "week": 1,
    "question": "¿Cuál es la metáfora visual que usa el material de Semana 1 para explicar el ciclo de vida de Android Runtime (ART)?",
    "options": [
      "El director de orquesta y sus músicos",
      "El aprendiz de Chef",
      "El arquitecto y su plano",
      "La cadena de ensamblaje automotriz"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. El material usa la metáfora del 'Aprendiz de Chef' para ilustrar cómo ART aprende y optimiza con el tiempo: al principio (instalación) el aprendiz es lento pero va mejorando, y con el perfil de uso (Profile-Guided Optimization) se vuelve cada vez más eficiente, compilando AOT las partes más usadas."
  },
  {
    "week": 1,
    "question": "En el contexto de la evolución del mercado móvil, ¿qué describe el fenómeno de 'Convergencia hacia la Movilidad'?",
    "options": [
      "El proceso por el que los smartphones adoptaron características antes exclusivas de laptops.",
      "La tendencia por la que la computación dejó de centrarse en PCs de escritorio para migrar hacia dispositivos móviles como el punto principal de acceso digital.",
      "La unificación de los sistemas operativos Android e iOS en una única plataforma.",
      "La consolidación de múltiples apps de comunicación en una sola superapp."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La Convergencia hacia la Movilidad describe el cambio paradigmático en la industria tecnológica: el smartphone se convirtió en el dispositivo computacional primario para la mayoría de la población mundial, desplazando al PC de escritorio como punto central de acceso a internet, trabajo y entretenimiento."
  },
  {
    "week": 1,
    "question": "¿Por qué el archivo Gradle (`build.gradle`) es considerado uno de los 4 pilares fundamentales de un proyecto Android?",
    "options": [
      "Porque contiene la lógica de negocio de la aplicación en formato declarativo.",
      "Porque define la interfaz visual de la aplicación de forma independiente del código.",
      "Porque gestiona las dependencias del proyecto (librerías externas) y configura todo el proceso de compilación, pruebas y generación del APK.",
      "Porque establece las reglas de seguridad y permisos que la app solicitará al sistema."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. Gradle es el sistema de construcción (build system) de Android. A través de los archivos build.gradle defines qué versión de Kotlin usas, qué librerías externas (Retrofit, Compose, etc.) se incluyen en el proyecto, las versiones mínima y objetivo del SDK de Android, y cómo se empaqueta el APK final."
  },
  {
    "week": 1,
    "question": "¿Qué representa el concepto de 'Dinámicas del Mercado Global vs. Local en 2025-2026' que se menciona como objetivo de la Semana 1?",
    "options": [
      "La diferencia en los precios de los planes de datos entre distintos países.",
      "Las variaciones en las regulaciones de privacidad entre la Unión Europea y Latinoamérica.",
      "El análisis de cómo las tendencias mundiales (IA, RA) se adoptan de forma diferente según el contexto regional, como las dinámicas de mercado en Latinoamérica.",
      "La comparación de cuotas de mercado entre Samsung, Apple y otras marcas en distintos continentes."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. El análisis global vs. local examina cómo las grandes tendencias tecnológicas mundiales (premiumización, IA, RA) se manifiestan de manera distinta según el contexto regional. En Latinoamérica, por ejemplo, factores como precio, conectividad y hábitos de uso influyen en la adopción de tecnología de forma diferente a mercados como EE.UU. o Europa."
  },
  {
    "week": 1,
    "question": "En la arquitectura de seguridad de Android, si la App A y la App B intentan acceder al mismo archivo del sistema de archivos, ¿qué mecanismo del kernel previene el acceso no autorizado?",
    "options": [
      "Un firewall de red interno que inspecciona las solicitudes entre aplicaciones.",
      "Las reglas de permisos de archivos de Linux aplicadas a los UIDs únicos de cada aplicación.",
      "Un proceso intermediario llamado 'Binder' que valida cada operación de lectura/escritura.",
      "La encriptación de los archivos con claves derivadas del certificado de firma de cada app."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Dado que cada app tiene un UID único (como si fuera un usuario diferente de Linux), el sistema de permisos de archivos del kernel Linux aplica automáticamente las reglas de acceso. Los archivos privados de App A pertenecen a su UID, y Linux simplemente no le permite a App B (con otro UID) leerlos, a menos que se hayan otorgado permisos explícitos."
  },
  {
    "week": 1,
    "question": "¿Cuál de las siguientes afirmaciones describe MEJOR la diferencia entre un kernel MONOLÍTICO y un kernel HÍBRIDO?",
    "options": [
      "El kernel monolítico solo soporta una arquitectura de CPU, mientras que el híbrido soporta múltiples arquitecturas.",
      "En el kernel monolítico, todos los servicios del sistema (drivers, sistema de archivos, redes) corren en el mismo espacio de memoria con acceso privilegiado; el híbrido separa algunos servicios en espacios de usuario para mayor modularidad.",
      "El kernel monolítico usa C++, mientras que el kernel híbrido usa C y ensamblador.",
      "El kernel híbrido es más rápido porque procesa interrupciones en paralelo, mientras que el monolítico las procesa de forma secuencial."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Un kernel monolítico (como Linux en Android) ejecuta todos los servicios del SO en un espacio de kernel unificado, lo que es rápido pero menos modular. Un kernel híbrido (como XNU de iOS, que combina Mach + BSD) separa algunos servicios, buscando un equilibrio entre rendimiento y modularidad."
  },
  {
    "week": 1,
    "question": "¿Para qué sirve el sistema IPC 'Mach Ports' mencionado en el material de Semana 1?",
    "options": [
      "Es el mecanismo de comunicación entre procesos de iOS, análogo al Binder de Android, basado en la arquitectura Mach del kernel XNU.",
      "Es un protocolo de red de Apple para comunicación entre dispositivos iOS y macOS.",
      "Es el sistema de comunicación entre la GPU y la CPU en chips Apple Silicon.",
      "Es el protocolo usado por el App Store para descargar e instalar aplicaciones en iOS."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es a. Mach Ports es el mecanismo IPC (Inter-Process Communication) del kernel Mach, que es la base del kernel XNU de iOS/macOS. Es el equivalente en iOS al Binder de Android: permite que los procesos se comuniquen entre sí de forma segura a través del kernel."
  },
  {
    "week": 1,
    "question": "¿Qué significa que Android Studio tenga dos versiones de distribución: 'Stable' y 'Canary'?",
    "options": [
      "Stable es la versión gratuita y Canary es la versión de pago con características adicionales.",
      "Stable es la versión para dispositivos físicos y Canary es para emuladores.",
      "Stable es la versión probada y confiable para producción, mientras que Canary contiene las últimas características en desarrollo, pudiendo tener bugs.",
      "Stable soporta proyectos Java y Canary soporta proyectos Kotlin."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. En el ciclo de lanzamiento de Android Studio, 'Stable' es la versión que ha pasado todas las fases de prueba y es recomendada para el trabajo diario. 'Canary' (en referencia al 'canario en la mina de carbón') es la versión más experimental donde Google prueba nuevas características; es útil para explorar, pero puede contener errores."
  },
  {
    "week": 1,
    "question": "Según el material de la Semana 1, ¿qué aspecto diferencia la 'Optimización extrema para hardware de Apple' (iOS) de la flexibilidad de Android?",
    "options": [
      "Apple optimiza sus apps usando compiladores de terceros más avanzados que los de Google.",
      "iOS puede acceder directamente al hardware gráfico sin capas de abstracción, algo imposible en Android.",
      "Como Apple controla tanto el hardware (chips A/M series) como el software (iOS), puede realizar optimizaciones profundas imposibles en el ecosistema Android fragmentado.",
      "iOS usa lenguaje ensamblador en las capas críticas, mientras que Android usa solo Kotlin/Java."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. La ventaja de iOS es la integración vertical: Apple diseña sus propios chips (A18, M4, etc.) y su propio sistema operativo. Esto le permite optimizar profundamente el software para el hardware específico, una ventaja que Android no puede replicar dado que debe funcionar en miles de dispositivos de diferentes fabricantes."
  },
  {
    "week": 1,
    "question": "¿Qué es el 'Profile Guided Optimization (PGO)' en el contexto del Android Runtime (ART)?",
    "options": [
      "Una herramienta de Android Studio que analiza el perfil de calidad del código antes de la compilación.",
      "Un proceso donde ART recolecta datos de uso real de la app (qué funciones se llaman más) para optimizar su compilación AOT durante periodos de inactividad del dispositivo.",
      "Un sistema de perfiles de usuario que personaliza el rendimiento de la app según el comportamiento del usuario final.",
      "Una técnica de compresión de código que reduce el tamaño del APK usando patrones de uso históricos."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. El PGO (Profile-Guided Optimization) es una técnica donde ART observa cómo se usa la app en el mundo real (qué 'métodos calientes' se ejecutan frecuentemente) y, durante la carga del dispositivo o el modo idle, compila AOT esas partes críticas para que en futuros lanzamientos se ejecuten a máxima velocidad."
  },
  {
    "week": 1,
    "question": "En el ecosistema Android, ¿por qué es técnicamente más desafiante para los desarrolladores garantizar que su app funcione perfectamente en todos los dispositivos Android comparado con iOS?",
    "options": [
      "Porque Kotlin no es compatible con todas las versiones de Android antiguas.",
      "Porque Android permite instalar apps fuera de la Play Store (sideloading), introduciendo riesgos de seguridad.",
      "Por la fragmentación: Android corre en miles de dispositivos con diferentes fabricantes, tamaños de pantalla, versiones del SO y hardware, mientras iOS lo hace en un set controlado de dispositivos Apple.",
      "Porque Android no tiene un emulador oficial, obligando a pruebas en dispositivos físicos."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. La 'fragmentación' es el gran desafío del ecosistema Android. Con cientos de fabricantes (Samsung, Xiaomi, OnePlus, etc.) y años de versiones de Android activas simultáneamente, garantizar que una app se vea y funcione correctamente en todos los casos requiere pruebas extensivas. iOS, al tener un hardware controlado, simplifica este problema."
  },
  {
    "week": 1,
    "question": "¿Cuál es el objetivo principal de la capa 'Resources' (res/) dentro de la estructura de un proyecto Android?",
    "options": [
      "Almacenar el código fuente Kotlin de los componentes de la aplicación.",
      "Guardar las dependencias de terceros descargadas por Gradle.",
      "Separar los activos no-código de la lógica: layouts XML, strings traducibles, imágenes, colores, etc., para facilitar la internacionalización y personalización.",
      "Contener los archivos de configuración de Git y los scripts de CI/CD."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. La carpeta 'res/' separa los recursos de la app del código de programación. Esto permite: internacionalización (diferentes archivos strings.xml para diferentes idiomas), temas (colores y estilos adaptables), y layouts alternativos para diferentes tamaños de pantalla, todo sin modificar el código Kotlin."
  },
  {
    "week": 1,
    "question": "Cuando decimos que el kernel monolítico de Android ejecuta todo en el 'kernel space', ¿qué implicación de seguridad tiene esto?",
    "options": [
      "Que todas las apps de usuario tienen acceso directo al hardware sin restricciones.",
      "Que un error (bug) en un driver o servicio del kernel puede comprometer todo el sistema, ya que todos comparten el mismo espacio de memoria privilegiado.",
      "Que el sistema es más seguro porque todas las operaciones pasan por un único punto de control centralizado.",
      "Que Android puede ejecutar código nativo más rápido que iOS porque no tiene que cambiar entre contextos de ejecución."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. En un kernel monolítico, todos los servicios (drivers de red, sistema de archivos, etc.) corren en el mismo espacio de memoria privilegiado (kernel space). La ventaja es el rendimiento; la desventaja es que un error en cualquier componente puede afectar la estabilidad de todo el sistema operativo."
  },
  {
    "week": 1,
    "question": "¿Qué herramienta de Android Studio se usa para simular un dispositivo Android en la computadora sin necesitar hardware físico?",
    "options": [
      "ADB (Android Debug Bridge)",
      "Android Virtual Device (AVD) / Emulador",
      "Gradle Wrapper",
      "Logcat"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Android Studio incluye el AVD Manager (Android Virtual Device Manager) que permite crear y gestionar emuladores de dispositivos Android. Los emuladores simulan diferentes modelos de teléfonos, tablets y versiones de Android, siendo esenciales para el desarrollo cuando no se tiene un dispositivo físico disponible."
  },
  {
    "week": 1,
    "question": "¿Por qué el material de Semana 1 establece que la evolución de la computación móvil es relevante para los ingenieros de software?",
    "options": [
      "Para poder responder preguntas históricas en entrevistas técnicas de empresas tecnológicas.",
      "Para entender las tendencias actuales y anticipar las tecnologías que dominarán el mercado futuro, orientando así las decisiones de aprendizaje y especialización profesional.",
      "Para conocer qué tecnologías obsoletas deben evitarse en nuevos proyectos.",
      "Para poder migrar código de plataformas antiguas (Symbian, BlackBerry) a Android/iOS."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Estudiar la evolución no es nostalgia histórica; es inteligencia estratégica. Al ver cómo evolucionó la industria (de SMS → apps → IA on-device → RA → XR), un ingeniero puede anticipar las competencias que necesitará en 3-5 años y tomar decisiones informadas sobre qué tecnologías aprender hoy."
  },
  {
    "week": 1,
    "question": "En el contexto de la Semana 1, ¿qué diferencia radical establece el material entre iOS y Android respecto a cómo obtienen el máximo rendimiento de su hardware?",
    "options": [
      "Android usa más núcleos de CPU para compensar la ineficiencia de la JVM, mientras iOS usa un solo núcleo muy potente.",
      "iOS optimiza el software para un hardware conocido y controlado (integración vertical), mientras Android debe ser flexible para miles de configuraciones de hardware distintas (fragmentación).",
      "Android usa memoria RAM más rápida (LPDDR5) mientras iOS usa memoria unificada más lenta pero más eficiente.",
      "iOS reserva el 30% de la RAM exclusivamente para el sistema, mientras Android usa toda la RAM disponible para las apps."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Esta es la diferencia fundamental del enfoque de rendimiento: iOS tiene integración vertical (Apple controla chip + SO + apps), permitiendo optimizaciones profundas para hardware específico. Android tiene que ser un SO generalista para hardware muy diverso, lo que dificulta ese nivel de optimización específica."
  },
  {
    "week": 1,
    "question": "¿Qué comando de la herramienta ADB (Android Debug Bridge) se usa para instalar un APK directamente en un dispositivo Android conectado por USB?",
    "options": [
      "adb push <archivo.apk>",
      "adb deploy <archivo.apk>",
      "adb install <archivo.apk>",
      "adb run <archivo.apk>"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. El comando `adb install <archivo.apk>` es el estándar para instalar un APK directamente en un dispositivo Android o emulador a través de la línea de comandos. ADB (Android Debug Bridge) es la herramienta de comunicación entre la computadora de desarrollo y el dispositivo Android."
  },
  {
    "week": 1,
    "question": "En resumen, ¿cuáles son los 4 grandes temas que cubre la Semana 1 del curso de Programación Móvil?",
    "options": [
      "Kotlin, Jetpack Compose, Room Database y Retrofit.",
      "Evolución del mercado móvil, Arquitectura del Kernel, Entornos de Ejecución y Modelos de Seguridad.",
      "Android Studio, Git, Emuladores y Primeras Apps.",
      "Java vs. Kotlin, OOP, Funciones Lambda y Coroutinas."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La Semana 1 establece los fundamentos del ecosistema: la Evolución del mercado (por qué importa la movilidad), la Arquitectura del Kernel (Linux vs XNU), los Entornos de Ejecución (ART vs iOS Native) y los Modelos de Seguridad (Sandboxing y permisos). Además incluye la configuración del entorno de desarrollo."
  },
  {
    "week": 1,
    "question": "¿Qué implicación arquitectónica tiene que un kernel sea 'monolítico' para el rendimiento general del sistema operativo Android?",
    "options": [
      "El rendimiento es menor porque todas las operaciones se procesan en un único hilo.",
      "El rendimiento es mayor porque al ejecutarse todo en el mismo espacio de memoria (kernel space), no hay sobrecarga por cambios de contexto entre el espacio de usuario y el kernel.",
      "El rendimiento es variable porque depende del número de aplicaciones instaladas.",
      "El rendimiento no se ve afectado; la diferencia está solo en la seguridad."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Una de las ventajas del kernel monolítico es el rendimiento: como todos los servicios del sistema (drivers, sistema de archivos, red) se ejecutan en el espacio del kernel, la comunicación entre ellos es rápida (llamadas directas a funciones) sin la sobrecarga de los cambios de contexto que requeriría un microkernel."
  },
  {
    "week": 1,
    "question": "¿Por qué la tendencia de 'Premiumización' en el mercado móvil es especialmente relevante para los desarrolladores de aplicaciones en 2026?",
    "options": [
      "Porque los dispositivos premium requieren apps de pago, generando mayores ingresos.",
      "Porque los dispositivos premium tienen mejores GPUs, permitiendo gráficos más avanzados en apps de juegos.",
      "Porque el hardware más potente (NPUs, más RAM, mejor GPU) abre la posibilidad de desarrollar apps con capacidades de IA on-device, RA y experiencias más ricas que antes requerían servidores.",
      "Porque Apple cobra menos comisión en la App Store a apps diseñadas para hardware premium."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. La premiumización es relevante para los desarrolladores porque hardware más potente = nuevas posibilidades de desarrollo. Con NPUs dedicadas en dispositivos premium, los desarrolladores pueden implementar funciones de IA (reconocimiento de imagen, procesamiento de lenguaje natural) directamente en el dispositivo, sin necesidad de servidores en la nube."
  },
  {
    "week": 1,
    "question": "Si una aplicación Android intenta acceder a un recurso del sistema (como la cámara) sin haber declarado el permiso correspondiente, ¿qué sucede?",
    "options": [
      "El sistema operativo permite el acceso pero registra un warning en el Logcat.",
      "La app se congela temporalmente hasta que el usuario otorga el permiso.",
      "El sistema operativo lanza una SecurityException y la app puede cerrarse abruptamente.",
      "El acceso se redirige a una cámara simulada del emulador para evitar el crash."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. Si una app intenta acceder a un recurso protegido (cámara, micrófono, ubicación, etc.) sin el permiso declarado en el Manifest y otorgado por el usuario, Android lanza una `SecurityException`. Esto es parte del modelo de seguridad del Menor Privilegio: el acceso no autorizado se bloquea activamente."
  },
  {
    "week": 1,
    "question": "¿Cuál es el propósito pedagógico central del 'Primer Laboratorio' mencionado en la sección del Entorno de Desarrollo Profesional de la Semana 1?",
    "options": [
      "Crear una aplicación funcional completa para el portafolio personal del estudiante.",
      "Aprender a publicar una app en la Google Play Store.",
      "Familiarizarse con el entorno de Android Studio y la estructura de un proyecto Android, configurando el ambiente de desarrollo para las semanas siguientes.",
      "Implementar los primeros conceptos de Kotlin avanzado en un contexto práctico."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. El Primer Laboratorio tiene como objetivo práctico familiarizarse con Android Studio como IDE, entender la estructura de carpetas de un proyecto Android (Manifest, src, res, Gradle) y configurar el entorno de desarrollo (emulador, ADB, control de versiones) para que el estudiante esté listo para las semanas de código."
  },
  {
    "week": 1,
    "question": "¿Qué es el 'Low Memory Killer (LMK)' en Android y cuándo entra en acción?",
    "options": [
      "Es un proceso que elimina apps en segundo plano cuando el dispositivo se está quedando sin memoria RAM disponible, priorizando las apps activas.",
      "Es un mecanismo de seguridad que detiene apps que están usando demasiados datos de red.",
      "Es un compilador JIT que elimina código no usado para reducir el uso de memoria en tiempo de ejecución.",
      "Es una función del Garbage Collector que libera objetos pequeños antes que los objetos grandes para optimizar la memoria."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es a. El Low Memory Killer (LMK) es un componente del kernel de Android que, cuando el sistema tiene poca memoria RAM disponible, comienza a matar procesos en segundo plano según su prioridad (primero los menos prioritarios). Esto garantiza que la app que el usuario está usando activamente siga funcionando fluidamente."
  },
  {
    "week": 1,
    "question": "¿Cuál de las siguientes opciones es una ventaja DIRECTA de usar control de versiones (Git) en el desarrollo de software móvil?",
    "options": [
      "Permite que el código Kotlin se compile más rápido al tener un historial de cambios optimizado.",
      "Garantiza que la aplicación pase automáticamente las revisiones de la Play Store.",
      "Permite revertir a versiones anteriores del código si una nueva funcionalidad introduce errores críticos en producción.",
      "Mejora el rendimiento de la app al organizar el código en ramas (branches) separadas."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. Una de las ventajas más prácticas del control de versiones es la capacidad de `git revert` o `git checkout`: si un cambio introduce un bug crítico que afecta a usuarios en producción, el desarrollador puede volver rápidamente a la última versión estable, minimizando el impacto del error."
  }
];
