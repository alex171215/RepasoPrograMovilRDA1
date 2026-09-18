const questions = [
  {
    "question": "¿Qué afirmación resume el concepto fundamental del \"Embudo de Saneamiento de Datos\" explicado en la arquitectura Kotlin para Jetpack Compose?",
    "options": [
      "Los objetos crudos evaden al compilador K2 a través de un puente asíncrono para aumentar su rendimiento a costa del NullPointerException.",
      "Los datos de la red entran como Singletons (`object`) y terminan renderizados en XML tradicional.",
      "Toda la información de la base de datos se almacena dinámicamente usando sentencias `var` mutables para un repintado en vivo más fluido.",
      "Los datos en bruto pasan estrictamente a través de filtros de Inmutabilidad (Data Classes) y Seguridad frente a Nulos (Null Safety) antes de llegar como \"UI State\" puro a la vista."
    ],
    "correctIndex": 3,
    "feedback": "La opción correcta es d. El \"Embudo de Saneamiento de Datos\" consiste en que los datos crudos atraviesan filtros de inmutabilidad y null safety antes de convertirse en UI State puro para la vista."
  },
  {
    "question": "¿Cuál es la premisa fundamental que diferencia el enfoque de Programación Funcional en Kotlin frente a la programación imperativa en Java puro?",
    "options": [
      "La Programación Funcional en Kotlin compila forzosamente hacia lenguaje interpretado.",
      "En Kotlin, las funciones son \"Ciudadanos de Primera Clase\", lo que significa que pueden almacenarse, pasarse por parámetro o devolverse como resultados de la misma manera que una variable ordinaria.",
      "En Java las funciones existen fuera de cualquier clase u objeto principal (Top-Level).",
      "En Kotlin las funciones operan siempre con estados directamente variables (`var`)."
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. En Kotlin las funciones son ciudadanos de primera clase: pueden tratarse como valores, pasarse como argumentos y devolverse como resultados."
  },
  {
    "question": "En Kotlin, ¿qué capacidad del compilador elimina la redundancia visual al no requerir que se declare el tipo de forma explícita si el contexto es evidente (ej. `val age = 25`)?",
    "options": [
      "Manejo Seguro de Nulos",
      "Smart Casting",
      "Inferencia de Tipos",
      "Platform Typing"
    ],
    "correctIndex": 2,
    "feedback": "La opción correcta es c. La inferencia de tipos permite que el compilador deduzca el tipo a partir del valor asignado, evitando declaraciones redundantes."
  },
  {
    "question": "3. ¿Qué representa una lambda en Kotlin?",
    "options": [
      "Una función anónima que puede ser tratada como un valor.",
      "Una clase que implementa una interfaz funcional.",
      "Un tipo especial de variable inmutable.",
      "Un método estático dentro de un objeto."
    ],
    "correctIndex": 0,
    "feedback": "La opción correcta es a. Una lambda es una función anónima que puede almacenarse, pasarse o devolverse como cualquier otro valor."
  },
  {
    "question": "¿Cuál es el mecanismo de comunicación entre procesos (IPC) de alto rendimiento en Android que sirve como el \"corazón\" de su sistema nervioso?",
    "options": [
      "Mach Ports",
      "Binder",
      "URL Schemes",
      "XNU Data Pipes"
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. Binder es el mecanismo IPC de alto rendimiento que permite la comunicación entre procesos en Android."
  },
  {
    "question": "¿Cuál es la arquitectura subyacente del sistema operativo Android en su capa más profunda?",
    "options": [
      "Un entorno de ejecución puramente nativo.",
      "Un microkernel modular gestionado por Mach.",
      "Un kernel híbrido basado en Darwin.",
      "Un kernel monolítico basado en Linux."
    ],
    "correctIndex": 3,
    "feedback": "La opción correcta es d. Android se basa en un kernel monolítico Linux en su capa más profunda."
  },
  {
    "question": "Para permitir código declarativo limpio (como en Jetpack Compose con `Button(onClick = { /* lógica */ })`), Kotlin implementa una sintaxis idiomática cuando la lambda es el último parámetro de una función. ¿Cómo se denomina esto?",
    "options": [
      "Destructuring Declaration",
      "Trailing Lambda (Lambda fuera de los paréntesis)",
      "Inlining Funcional",
      "Smart Casting Condicional"
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. La sintaxis de trailing lambda permite escribir la lambda fuera de los paréntesis cuando es el último parámetro."
  },
  {
    "question": "En 2026, ¿qué modelo de compilación utiliza el Android Runtime (ART) para equilibrar el tiempo de instalación, espacio en disco y rendimiento de ejecución?",
    "options": [
      "Un sistema puramente interpretado en tiempo real sin almacenamiento en disco.",
      "Ejecución 100% nativa antes de la distribución.",
      "Un modelo de compilación híbrido que combina Just-In-Time (JIT) y Ahead-Of-Time (AOT).",
      "Generación exclusiva de código máquina nativo a través de compilación LLVM."
    ],
    "correctIndex": 2,
    "feedback": "La opción correcta es c. ART utiliza un modelo híbrido JIT + AOT para equilibrar instalación, espacio y rendimiento."
  },
  {
    "question": "2. ¿Cuál de las siguientes características distingue a un data class en Kotlin?",
    "options": [
      "No puede tener propiedades en el constructor.",
      "Solo puede contener funciones abstractas.",
      "Permite heredar de múltiples clases.",
      "Genera automáticamente equals(), hashCode() y toString()."
    ],
    "correctIndex": 3,
    "feedback": "La opción correcta es d. Una data class genera automáticamente `equals()`, `hashCode()` y `toString()`, entre otros métodos."
  },
  {
    "question": "En las buenas prácticas de arquitectura en Kotlin, es considerado perjudicial y un \"Code Smell\" el anidar múltiples bloques `let` o `run` consecutivos, ¿por qué?",
    "options": [
      "Porque provocan bloqueos permanentes de subprocesos impidiendo que el recolector de basura vacíe memoria.",
      "Porque detienen inmediatamente la propagación de corrutinas dentro de las sealed classes.",
      "Porque esto genera confusión cognitiva al mezclarse internamente referencias anónimas múltiples (ya no se sabe a qué se refiere `it` o `this`).",
      "Porque el Android Runtime (ART) los ignorará si se interrumpe la conexión a internet."
    ],
    "correctIndex": 2,
    "feedback": "La opción correcta es c. Anidar múltiples `let`/`run` genera confusión sobre a qué objeto se refieren `it` o `this`, afectando la legibilidad."
  },
  {
    "question": "Si necesitamos acceder al objeto mediante el identificador `it` para ejecutar un efecto secundario (como loggear su estado o almacenar un registro), pero deseamos continuar la cadena de ejecución sin alterar el retorno del objeto original, ¿qué Scope Function corresponde?",
    "options": [
      "`apply`",
      "`run`",
      "`also`",
      "`let`"
    ],
    "correctIndex": 2,
    "feedback": "La opción correcta es c. `also` recibe el objeto como `it`, permite efectos secundarios y devuelve el objeto original."
  },
  {
    "question": "En Kotlin 2.0, si validas `if (obj is String)`, ¿qué mecanismo del compilador permite utilizar los métodos de `String` directamente dentro del bloque sin hacer conversiones forzadas manuales?",
    "options": [
      "Inline Functions",
      "Type Erasure",
      "Smart Casts (Moldeado Inteligente)",
      "Null Safety"
    ],
    "correctIndex": 2,
    "feedback": "La opción correcta es c. El Smart Casting permite que el compilador trate a `obj` como `String` dentro del bloque luego de la verificación."
  },
  {
    "question": "Al procesar un dato proveniente de una fuente insegura (como una API web), si se desea transformar el valor en un modelo UI únicamente en caso de que sea no nulo (encadenando `?.`) y devolver el nuevo resultado renderizado accediendo mediante el alias `it`, ¿qué Scope Function idiomática es obligatoria?",
    "options": [
      "`also`",
      "`with`",
      "`apply`",
      "`let`"
    ],
    "correctIndex": 3,
    "feedback": "La opción correcta es d. `?.let { ... }` es el patrón idiomático para transformar un valor no nulo y devolver el resultado de la transformación."
  },
  {
    "question": "¿Cuál de las siguientes características distingue a un data class en Kotlin?",
    "options": [
      "Genera automáticamente equals(), hashCode() y toString().",
      "Solo puede contener funciones abstractas.",
      "Permite heredar de múltiples clases.",
      "No puede tener propiedades en el constructor."
    ],
    "correctIndex": 0,
    "feedback": "La opción correcta es a. Una data class genera automáticamente `equals()`, `hashCode()` y `toString()`."
  },
  {
    "question": "En el mecanismo de seguridad \"Sandboxing\", ¿cómo engaña el sistema operativo Android a cada aplicación para garantizar el aislamiento?",
    "options": [
      "Verifica los permisos de acceso en tiempo de compilación.",
      "Le asigna una URL especial de comunicación que no requiere autenticación.",
      "Le exige pasar por un puente intermedio de serialización llamado Seatbelt.",
      "Le asigna un Identificador de Usuario (UID) único haciéndole creer que es el único usuario en el sistema."
    ],
    "correctIndex": 3,
    "feedback": "La opción correcta es d. Android asigna un UID único a cada app y la aísla como si fuera el único usuario del sistema."
  },
  {
    "question": "¿Qué es técnicamente una Función de Orden Superior (Higher-Order Function) según los documentos teóricos de Kotlin?",
    "options": [
      "Una función que acepta expresiones lambdas como parámetros o que devuelve una función como resultado.",
      "Una función que, al procesarse en K2, corre con mayor prioridad en el CPU sobre funciones comunes.",
      "Toda expresión que devuelva siempre un tipo inmutable para ser renderizado con Compose.",
      "Una función que solo puede invocarse internamente usando recursión compleja."
    ],
    "correctIndex": 0,
    "feedback": "La opción correcta es a. Una función de orden superior recibe funciones como parámetros o devuelve una función como resultado."
  },
  {
    "question": "Desde Kotlin 1.5, además de `sealed classes`, el lenguaje introdujo `sealed interfaces`. ¿Cuál es su caso de uso ideal frente a las clases selladas tradicionales?",
    "options": [
      "Modelar entidades de diseño de pantalla que requieren valores mutables constantes.",
      "Actuar únicamente como clases de almacenamiento sin comportamiento en Kotlin Multiplatform.",
      "Modelar comportamientos de tipo transversal (ej. un `TimeoutError` que también implementa la interfaz `RetryableError`).",
      "Declarar métodos `static` de acceso global para compartir memoria caché."
    ],
    "correctIndex": 2,
    "feedback": "La opción correcta es c. Las sealed interfaces permiten modelar jerarquías que también implementan otras interfaces, útil para comportamientos transversales."
  },
  {
    "question": "En arquitecturas reactivas (como Jetpack Compose), es vital modificar estados creando nuevas instancias en vez de alterar las existentes (estabilidad de estado). ¿Qué método autogenerado en una `data class` hace esto posible de manera simple?",
    "options": [
      "`componentN()`",
      "`equals()`",
      "`hashCode()`",
      "`copy()`"
    ],
    "correctIndex": 3,
    "feedback": "La opción correcta es d. `copy()` permite crear una nueva instancia modificando solo las propiedades deseadas, manteniendo inmutabilidad."
  },
  {
    "question": "Cuando se utiliza `when` como EXPRESIÓN (devolviendo un valor), ¿qué regla exige implacablemente el compilador de Kotlin para evitar comportamientos impredecibles?",
    "options": [
      "Que el resultado se evalúe de manera paralela en múltiples hilos concurrentes.",
      "Que cada caso solo evalúe valores de variables inmutables creadas por `let`.",
      "Que la expresión no use la palabra reservada `else`.",
      "Que la exhaustividad sea completa (es obligatorio cubrir todos los casos posibles o colocar un bloque `else`)."
    ],
    "correctIndex": 3,
    "feedback": "La opción correcta es d. Cuando `when` se usa como expresión, el compilador exige exhaustividad: todos los casos deben cubrirse o debe existir un `else`."
  },
  {
    "question": "¿Cuál es la principal diferencia entre el paradigma imperativo y el declarativo?",
    "options": [
      "El imperativo describe qué se quiere lograr sin indicar cómo hacerlo.",
      "El declarativo obliga a usar programación orientada a objetos.",
      "El declarativo se enfoca en describir paso a paso cómo resolver un problema.",
      "El imperativo indica cómo lograr un resultado mediante instrucciones explícitas."
    ],
    "correctIndex": 3,
    "feedback": "La opción correcta es d. El paradigma imperativo indica explícitamente cómo lograr un resultado mediante instrucciones paso a paso."
  },
  {
    "question": "¿Qué diferencia radical existe entre un clásico `enum` en Java/Kotlin y una `sealed class` moderna en Kotlin?",
    "options": [
      "La `sealed class` es más difícil de evaluar en una expresión `when` que un `enum` simple.",
      "El `enum` solo maneja valores cerrados sin datos adicionales; la `sealed class` es una jerarquía que permite que cada estado contenga un modelo de datos complejo y distinto.",
      "El `enum` consume memoria excesiva; la `sealed class` se aloja en el procesador.",
      "El `enum` es compatible con Compose y la `sealed class` solo funciona en capas de backend."
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. La sealed class permite que cada subtipo tenga su propio modelo de datos, a diferencia del enum simple."
  },
  {
    "question": "¿Qué ventaja aporta el uso de `Extension Functions` (Funciones de Extensión) en una arquitectura de software limpia en Kotlin?",
    "options": [
      "Evitan que se utilice el Operador Elvis obligando al programador a reescribir utilitarios estáticos complejos.",
      "Generan herencia forzada en las bibliotecas de Jetpack Compose haciendo que cada botón deba derivar de un componente raíz.",
      "Permiten \"pegar\" nuevo comportamiento, validaciones o utilidades directamente a tipos estándar y clases cerradas (como `String` o `Int`) sin usar herencia tradicional ni \"contaminar\" las clases de dominio.",
      "Requieren que se acceda directamente al núcleo del sistema operativo Android y modifiquen las directrices de Binder IPC."
    ],
    "correctIndex": 2,
    "feedback": "La opción correcta es c. Las extension functions añaden comportamiento a tipos existentes sin herencia ni modificar la clase original."
  },
  {
    "question": "Según el análisis del ecosistema móvil en 2026, ¿qué tendencia describe el fenómeno de la \"Premiumización\"?",
    "options": [
      "La renovación de dispositivos hacia modelos con mejor hardware capaz de procesar IA y Realidad Aumentada localmente.",
      "La migración de todos los usuarios de la gama media hacia plataformas basadas en la nube.",
      "La eliminación total del entorno de ejecución mixto en dispositivos móviles básicos.",
      "El abandono definitivo de Android en favor del sistema operativo iOS a nivel mundial."
    ],
    "correctIndex": 0,
    "feedback": "La opción correcta es a. La premiumización se refiere a la renovación hacia dispositivos con mejor hardware para IA y RA local."
  },
  {
    "question": "¿Qué representa una lambda en Kotlin?",
    "options": [
      "Una función anónima que puede ser tratada como un valor.",
      "Una clase que implementa una interfaz funcional.",
      "Un tipo especial de variable inmutable.",
      "Un método estático dentro de un objeto."
    ],
    "correctIndex": 0,
    "feedback": "La opción correcta es a. Una lambda es una función anónima que puede tratarse como un valor."
  },
  {
    "question": "1. ¿Cuál es la principal diferencia entre el paradigma imperativo y el declarativo?",
    "options": [
      "El declarativo se enfoca en describir paso a paso cómo resolver un problema.",
      "El imperativo describe qué se quiere lograr sin indicar cómo hacerlo.",
      "El imperativo indica cómo lograr un resultado mediante instrucciones explícitas.",
      "El declarativo obliga a usar programación orientada a objetos."
    ],
    "correctIndex": 2,
    "feedback": "La opción correcta es c. El paradigma imperativo indica explícitamente cómo lograr un resultado mediante instrucciones paso a paso."
  },
  {
    "question": "Para solucionar el histórico problema del `NullPointerException` en entornos de producción, ¿cómo aborda Kotlin el problema desde su raíz?",
    "options": [
      "Agregando múltiples sentencias obligatorias `try/catch` de forma automática e invisible.",
      "Delegando al desarrollador la comprobación manual a través de estructuras `if (variable != null)`.",
      "Creando clases anónimas por cada propiedad potencialmente inestable.",
      "Integrando la nulidad en el Sistema de Tipos (por defecto, las variables NO aceptan nulos)."
    ],
    "correctIndex": 3,
    "feedback": "La opción correcta es d. Kotlin integra la nulidad en el sistema de tipos: por defecto las variables no aceptan nulos."
  },
  {
    "question": "Analizando los lenguajes Kotlin y Swift en la plataforma móvil (KMP), ¿qué mecanismo en Swift es análogo directo a declarar una variable nula `String?` en Kotlin?",
    "options": [
      "Variables estáticas compartidas",
      "El tipo Optional (`Optional<String>`)",
      "Forced Unwrapping",
      "Nil-Coalescing"
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. En Swift, `Optional<String>` es el análogo directo a `String?` en Kotlin."
  },
  {
    "question": "A diferencia de todas las otras Scope Functions de Kotlin, ¿cuál de ellas es invocada como una función independiente normal que recibe el objeto explícitamente como argumento, en vez de llamarse como una función de extensión con el punto (`.`)?",
    "options": [
      "`run`",
      "`with`",
      "`also`",
      "`apply`"
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. `with` es una función independiente que recibe el objeto como primer argumento."
  },
  {
    "question": "Deseamos tomar un nuevo objeto instanciado, configurarlo aplicándole múltiples propiedades inmediatamente y devolver esa misma entidad modificada. El contexto ideal de esta función requerirá llamar directamente las propiedades del objeto (sin `it.`). ¿Qué Scope Function aplica aquí?",
    "options": [
      "`let`",
      "`apply`",
      "`run`",
      "`with`"
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. `apply` usa `this` como receptor, permite configurar propiedades y devuelve el objeto original."
  },
  {
    "question": "Cuando declaras `object HttpClientProvider` en Kotlin, ¿qué garantías te brinda automáticamente el compilador en un entorno de concurrencia y subprocesos múltiples?",
    "options": [
      "Una inicialización perezosa (lazy) totalmente segura (thread-safe) y que garantiza una única instancia en toda la aplicación.",
      "La obligación de declarar explícitamente el uso de bloques `synchronized` para evitar bloqueos del sistema.",
      "Un objeto transitorio que se clona (con `.copy()`) cada vez que un hilo distinto lo invoca.",
      "Que el objeto solo existirá en memoria RAM hasta que la pantalla (Actividad) se cierre en Android."
    ],
    "correctIndex": 0,
    "feedback": "La opción correcta es a. La declaración `object` garantiza una única instancia thread-safe en toda la aplicación."
  },
  {
    "question": "Al combinar una clase sellada (`sealed class`) para modelar estados de red (ej. NetworkResult) y la expresión `when` para evaluarla en la UI, ¿qué representa el \"Escudo del Compilador\"?",
    "options": [
      "Un entorno (sandbox) en Android Runtime que absorbe fallos lógicos durante el uso del usuario final.",
      "El proceso de verificación matemática que asegura la exhaustividad total, prohibiendo la compilación si un caso nuevo (ej. `Timeout`) no ha sido manejado explícitamente.",
      "La obligación algorítmica del compilador de impedir la ejecución si un nuevo estado no ha sido declarado en la clase sellada base.",
      "La capacidad del compilador de inyectar variables de tipo nulo automáticamente al detectar lentitud."
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. El compilador verifica exhaustividad y no permite compilar si un caso de la sealed class no está cubierto en el `when`."
  },
  {
    "question": "¿Qué patrón es el estándar idiomático más recomendado en Android moderno para lograr ejecutar código protegido, combinando \"null-safety\", \"smart casting\", transformación y ejecución opcional segura?",
    "options": [
      "`!!run { ... }`",
      "`var as? Class` seguido de `apply`",
      "`?.let { ... }`",
      "`if(var != null) { ... }`"
    ],
    "correctIndex": 2,
    "feedback": "La opción correcta es c. `?.let { ... }` combina llamada segura, smart cast, transformación y ejecución opcional."
  },
  {
    "question": "Al integrar el paradigma Funcional con la Programación Orientada a Objetos en Kotlin para el desarrollo en Android, ¿cómo se posicionan frente a frente?",
    "options": [
      "La Programación Funcional solo se utiliza para construir vistas, delegando el manejo real del estado y seguridad de datos a métodos abstractos polimórficos tradicionales de Java.",
      "Ambos paradigmas se complementan: la OOP modela entidades y arquitecturas mientras la FP transforma los datos y pasa comportamiento de forma segura, inmutable y declarativa.",
      "La Orientación a Objetos se ha abandonado totalmente tras la llegada de las Lambdas y las Scope Functions de Jetpack Compose.",
      "La Programación Funcional obliga a desechar las jerarquías de dominios en favor de simples scripts matemáticos y declarativos puros en consola."
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. OOP y FP se complementan: OOP modela entidades y FP transforma datos de forma segura e inmutable."
  },
  {
    "question": "Al procesar respuestas de APIs o modelos de datos anidados, ¿qué operador se utiliza para detener la evaluación inmediatamente (cortocircuito) retornando null si algún eslabón es nulo, sin producir una excepción?",
    "options": [
      "Operador de Aserción No Nula (!!)",
      "Operador de Llamada Segura (?.)",
      "Operador Elvis (?:)",
      "Smart Casts (is)"
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. El operador `?.` detiene la evaluación y devuelve null si algún eslabón es nulo, sin lanzar excepción."
  },
  {
    "question": "Si comparamos el impacto directo medible del sistema de tipos seguro de Kotlin en los proyectos Android modernos frente a los desarrollados exclusivamente en Java, ¿cuál es un beneficio estadístico validado en la industria?",
    "options": [
      "La anulación absoluta del consumo de datos en red al usar lambdas optimizadas por el compilador AOT de Android 16.",
      "Una reducción probada de casi el 20% en la probabilidad de \"crashes\" (cierres inesperados) en producción gracias a la detección temprana del compilador de los errores de referencia nula.",
      "Un ahorro del 94% del espacio total en disco del sistema de archivos al compilar los proyectos.",
      "Un rendimiento un 50% superior al ejecutar Garbage Collection en gamas medias locales en Latinoamérica."
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. Kotlin reduce aproximadamente un 20% los crashes por errores de referencia nula."
  },
  {
    "question": "Para elegir correctamente entre las \"Scope Functions\" del lenguaje Kotlin (apply, run, with, let, also), se deben contestar dos preguntas fundamentales. ¿Cuáles son?",
    "options": [
      "¿Cómo quiero acceder al objeto dentro del bloque (como `this` o como `it`)? y ¿Qué necesito que devuelva la función (el objeto original o el resultado del cálculo)?",
      "¿El valor a evaluar proviene de red o base de datos local? y ¿Será procesado en JIT o AOT?",
      "¿El objeto es de un tipo Platform (`!`) o Nullable (`?`)? y ¿Qué estado sellado lo engloba?",
      "¿El proyecto fue iniciado con \"Kotlin-First\" o migrado desde Java heredado? y ¿Utiliza Jetpack Compose?"
    ],
    "correctIndex": 0,
    "feedback": "La opción correcta es a. Las dos preguntas clave son el tipo de acceso (`this` o `it`) y el tipo de retorno (objeto original o resultado)."
  },
  {
    "question": "¿Por qué adoptó Google la filosofía \"Kotlin-First\" como estándar mandatorio para el ecosistema Android?",
    "options": [
      "Porque Kotlin reduce el ruido sintáctico (boilerplate) permitiendo que la lógica de negocio resalte y se disminuya la deuda técnica.",
      "Porque es el único lenguaje que el compilador LLVM puede leer.",
      "Para reemplazar por completo y eliminar el uso de la Máquina Virtual de Java (JVM).",
      "Porque Kotlin compila mucho más rápido que Java convirtiendo las aplicaciones en ejecutables iOS."
    ],
    "correctIndex": 0,
    "feedback": "La opción correcta es a. Kotlin reduce boilerplate y deuda técnica, permitiendo que la lógica de negocio sea más clara."
  },
  {
    "question": "¿Qué concepto utiliza Kotlin para reemplazar definitivamente a los miembros `static` del lenguaje Java, eliminando la compleja necesidad de sincronizar el código defensivo multihilo?",
    "options": [
      "La clase `data class Singleton`",
      "Las Funciones de Orden Superior",
      "Las Extension Functions",
      "La declaración `object` (El Patrón Singleton Nativo)"
    ],
    "correctIndex": 3,
    "feedback": "La opción correcta es d. La declaración `object` crea un singleton nativo thread-safe, reemplazando a los miembros estáticos."
  },
  {
    "question": "¿Qué salto arquitectónico introduce el nuevo compilador K2 de Kotlin 2.0+ en comparación con el K1 (Legacy)?",
    "options": [
      "Reemplaza el uso de la memoria virtual en favor del compilador Ahead-Of-Time exclusivamente.",
      "Exige la mutabilidad por defecto en todas las funciones declaradas.",
      "Presenta una arquitectura unificada (FIR) que permite hasta un 94% más de velocidad en compilaciones limpias e inferencia semántica inteligente.",
      "Elimina las corrutinas en favor de la gestión manual de hilos del procesador."
    ],
    "correctIndex": 2,
    "feedback": "La opción correcta es c. K2 introduce una arquitectura unificada FIR con mejoras de velocidad e inferencia semántica."
  },
  {
    "question": "Cuando Kotlin consume un método de Java que carece de anotaciones de nulidad (@Nullable o @NotNull), ¿qué tipo de dato problemático le asigna el compilador?",
    "options": [
      "Tipo estrictamente seguro (String)",
      "Platform Type o Tipo de Plataforma (String!)",
      "Tipo Opcional (Optional)",
      "Tipo anulable por defecto (String?)"
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. Kotlin asigna un Platform Type (`String!`) que puede tratarse como nulo o no nulo, con riesgo de error."
  },
  {
    "question": "El uso intensivo de lambdas en funciones de colección (como `.filter`, `.map`) crearía numerosos objetos en memoria en Java. Para evitar este costo de rendimiento sin sacrificar código idiomático en Kotlin, ¿qué modificador se utiliza en la declaración de estas funciones de orden superior?",
    "options": [
      "`crossinline`",
      "`reified`",
      "`inline`",
      "`suspend`"
    ],
    "correctIndex": 2,
    "feedback": "La opción correcta es c. `inline` evita la creación de objetos lambda y mejora el rendimiento en funciones de orden superior."
  },
  {
    "question": "¿Qué sintaxis indica que una variable pertenece al conjunto de tipos que sí tienen capacidad de contener la ausencia de valor en Kotlin?",
    "options": [
      "La anotación `@Nullable` antes del tipo de variable.",
      "El sufijo de un signo de interrogación (ej. `String?`).",
      "La palabra reservada `optional`.",
      "El sufijo del signo de exclamación (ej. `String!`)."
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. El sufijo `?` indica que el tipo puede contener null."
  },
  {
    "question": "¿Qué define una función de orden superior?",
    "options": [
      "Una función que solo puede ejecutarse dentro de una coroutine.",
      "Una función que recibe o devuelve otra función.",
      "Una función que no puede tener parámetros.",
      "Una función que se ejecuta únicamente en tiempo de compilación."
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. Una función de orden superior recibe o devuelve otra función."
  },
  {
    "question": "A diferencia de Android que utiliza \"Garbage Collection\", ¿qué sistema utiliza iOS para liberar la memoria en el instante exacto en que un objeto deja de usarse?",
    "options": [
      "Low Memory Killer (LMK)",
      "Just-In-Time Compiler (JIT)",
      "Profile Guided Optimization (PGO)",
      "Automatic Reference Counting (ARC)"
    ],
    "correctIndex": 3,
    "feedback": "La opción correcta es d. iOS utiliza Automatic Reference Counting (ARC) para liberar memoria cuando un objeto deja de usarse."
  },
  {
    "question": "¿Por qué el operador de Aserción No Nula (`!!`) se considera una mala práctica y un \"Code Smell\" en ingeniería móvil?",
    "options": [
      "Porque fuerza a tratar un valor anulable como seguro, lanzando inmediatamente un `NullPointerException` si la suposición falla.",
      "Porque ignora por completo la eficiencia de consumo de batería de ART (Android Runtime).",
      "Porque obliga al compilador K2 a deshabilitar la inferencia de tipos general.",
      "Porque hace que el código compilado no sea compatible con dispositivos iOS."
    ],
    "correctIndex": 0,
    "feedback": "La opción correcta es a. `!!` fuerza un valor anulable como no nulo y lanza `NullPointerException` si falla."
  },
  {
    "question": "4. ¿Qué define una función de orden superior?",
    "options": [
      "Una función que recibe o devuelve otra función.",
      "Una función que se ejecuta únicamente en tiempo de compilación.",
      "Una función que no puede tener parámetros.",
      "Una función que solo puede ejecutarse dentro de una coroutine."
    ],
    "correctIndex": 0,
    "feedback": "La opción correcta es a. Una función de orden superior recibe o devuelve otra función."
  },
  {
    "question": "¿Cuál es el propósito principal de una extension function en Kotlin?",
    "options": [
      "Añadir comportamiento adicional a un tipo sin necesidad de herencia.",
      "Modificar el código fuente de una clase existente.",
      "Crear una nueva clase que reemplace a la original.",
      "Agregar nuevas propiedades almacenadas a un tipo."
    ],
    "correctIndex": 0,
    "feedback": "La opción correcta es a. Las extension functions añaden comportamiento a un tipo sin herencia ni modificar la clase original."
  },
  {
    "question": "¿A qué equivalente sintáctico de Kotlin en el manejo de nulos (el Operador Elvis `?:`) corresponde la estructura Nil-Coalescing (`??`) en el lenguaje Swift?",
    "options": [
      "Funciones Lambda",
      "Proveer un valor por defecto o de respaldo en caso de recibir un nulo",
      "Smart Casting",
      "Inferencia de Tipos"
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. Tanto `?:` en Kotlin como `??` en Swift proveen un valor por defecto si el valor es nulo."
  },
  {
    "question": "¿Cuál es la \"Regla de Oro\" respecto a la mutabilidad de las variables recomendada en ingeniería móvil?",
    "options": [
      "Utilizar arreglos mutables de Java para asegurar la interoperabilidad con servicios Legacy.",
      "Usar siempre `var` para no agotar la memoria disponible en el dispositivo.",
      "Intercambiar entre `val` y `var` dependiendo del tamaño de la clase de datos (data class).",
      "Siempre declarar con `val` como estado por defecto y cambiar a `var` solo si es estrictamente necesario."
    ],
    "correctIndex": 3,
    "feedback": "La opción correcta es d. La regla de oro es usar `val` por defecto y `var` solo cuando sea estrictamente necesario."
  },
  {
    "question": "En Kotlin, la sentencia `when` no requiere la instrucción `break` utilizada en el antiguo `switch` de Java. ¿Qué error de diseño humano se elimina completamente con este cambio?",
    "options": [
      "El uso innecesario de bucles `for` y `while`.",
      "El \"Fall-through\", donde por olvido del programador el código \"cae\" al siguiente caso accidentalmente.",
      "La mutabilidad no deseada generada en las variables de control.",
      "El desbordamiento de pila (StackOverflow) en funciones recursivas anidadas."
    ],
    "correctIndex": 1,
    "feedback": "La opción correcta es b. `when` elimina el fall-through accidental típico del `switch` de Java."
  }
];
