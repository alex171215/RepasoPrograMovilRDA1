// ============================================================
// BANCO DE PREGUNTAS - SEMANA 2
// Por qué Kotlin, Sistema de Tipos, Control de Flujo y Estilos
// ============================================================
const questionsWeek2 = [
  {
    "week": 2,
    "question": "¿Cuál es la premisa central de la filosofía 'Kotlin-First' que Google adoptó como estándar mandatorio para el ecosistema Android?",
    "options": [
      "Kotlin es el único lenguaje que el compilador de Android puede entender directamente.",
      "Kotlin reduce el código redundante (boilerplate), permitiendo que la lógica de negocio resalte, disminuyendo la deuda técnica y los errores.",
      "Kotlin es exclusivamente un lenguaje funcional que reemplaza totalmente la OOP.",
      "Kotlin compila el código 10 veces más rápido que Java, reduciendo los tiempos de build."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Kotlin-First significa que Google prioriza Kotlin para todas sus APIs y librería de Jetpack. La razón principal es que Kotlin reduce drásticamente el boilerplate de Java (getters, setters, equals, hashCode...), haciendo que el código sea más conciso, legible y con menos vectores de error."
  },
  {
    "week": 2,
    "question": "¿Qué es la 'Inferencia de Tipos' en Kotlin y cuál es su beneficio práctico?",
    "options": [
      "Es la capacidad del compilador de detectar y corregir automáticamente errores de tipo en tiempo de ejecución.",
      "Es la capacidad del compilador de deducir el tipo de una variable a partir de su valor asignado, eliminando la necesidad de declaraciones de tipo redundantes.",
      "Es un mecanismo que convierte automáticamente tipos Java (int, double) a tipos Kotlin (Int, Double).",
      "Es la capacidad del programador de declarar múltiples tipos posibles para una variable usando la sintaxis 'var x: Int | String'."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Con Inferencia de Tipos, al escribir `val age = 25`, el compilador K2 de Kotlin deduce automáticamente que `age` es de tipo `Int`. No necesitas escribir `val age: Int = 25`. Esto reduce el ruido visual del código manteniendo toda la seguridad de un lenguaje tipado."
  },
  {
    "week": 2,
    "question": "En Kotlin, ¿cuál es la diferencia técnica y semántica entre `val` y `var`?",
    "options": [
      "`val` es para valores primitivos (Int, Boolean) y `var` es para objetos complejos (clases, listas).",
      "`val` declara una referencia de solo lectura (inmutable, como `final` en Java) y `var` declara una variable que puede ser reasignada.",
      "`val` es una variable local de función y `var` es una propiedad de clase.",
      "`val` se evalúa en tiempo de compilación y `var` se evalúa en tiempo de ejecución."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. `val` crea una referencia inmutable: una vez asignada, no puede apuntar a otro objeto (similar a `final` en Java). `var` crea una referencia mutable que puede reasignarse. Importante: `val` no garantiza inmutabilidad del objeto interno (sus propiedades `var` aún pueden cambiar), solo la referencia."
  },
  {
    "week": 2,
    "question": "Dado el siguiente código Kotlin, ¿qué línea causará un error de compilación?\n\n```kotlin\nval usuario = Usuario(20)\nusuario.edad = 21  // Línea A\nusuario = Usuario(30)  // Línea B\n```",
    "options": [
      "La Línea A, porque no puedes modificar propiedades de un objeto `val`.",
      "La Línea B, porque `val` impide reasignar la referencia `usuario` a un nuevo objeto.",
      "Ambas líneas causan error.",
      "Ninguna línea causa error si `Usuario` tiene la propiedad `edad` declarada como `var`."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La Línea B causa el error: `Val cannot be reassigned`. `val` protege la REFERENCIA, no el contenido interno del objeto. Si `edad` en la clase `Usuario` es `var`, la Línea A es válida (cambiar la propiedad interna está permitido). Pero intentar hacer que `usuario` apunte a un objeto diferente (Línea B) viola el contrato de `val`."
  },
  {
    "week": 2,
    "question": "¿Cuáles son las 3 ventajas del uso de `val` (inmutabilidad) mencionadas en la Semana 2 para el desarrollo Android?",
    "options": [
      "Mayor velocidad de compilación, compatibilidad con Java y menor uso de RAM.",
      "Debugging simplificado, optimización de renderizado en Compose y seguridad en concurrencia.",
      "Interoperabilidad con Swift, eliminación de NullPointerExceptions y mejor Garbage Collection.",
      "Acceso directo al hardware, reducción del tamaño del APK y mayor velocidad de la UI."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Los 3 beneficios de la inmutabilidad (`val`) en Android son: Debugging simplificado (un valor constante no puede cambiar inesperadamente), Optimización de renderizado en Compose (evita recomposiciones innecesarias al garantizar estabilidad) y Seguridad en concurrencia (objetos inmutables son seguros para múltiples hilos sin sincronización)."
  },
  {
    "week": 2,
    "question": "¿Quién inventó el concepto de `null` y cómo lo describió retrospectivamente?",
    "options": [
      "Dennis Ritchie lo introdujo en C en 1972 y lo llamó 'un mal necesario'.",
      "Tony Hoare lo introdujo en 1965 y lo llamó su 'error del billón de dólares'.",
      "James Gosling lo introdujo en Java en 1995 como 'valor sentinela'.",
      "Linus Torvalds lo popularizó en Linux en 1991 como convención de retorno de error."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Tony Hoare, al diseñar ALGOL W en 1965, introdujo el `null` para simplificar la implementación de referencias vacías. Décadas después, lo llamó su 'error del billón de dólares' (billion-dollar mistake) porque los NullPointerExceptions causados por referencias nulas no verificadas han generado pérdidas incalculables en la industria."
  },
  {
    "week": 2,
    "question": "En Kotlin, ¿cómo declara el sistema de tipos la diferencia entre una variable que PUEDE ser nula y una que NUNCA puede serlo?",
    "options": [
      "Con la anotación `@Nullable` antes del tipo para permitir nulos y `@NotNull` para prohibirlos.",
      "Con el modificador `nullable` antes del `val`/`var` para permitir nulos.",
      "Añadiendo el sufijo `?` al tipo para permitir nulos (ej: `String?`) y dejando el tipo sin modificar para prohibirlos (ej: `String`).",
      "Con la palabra clave `optional` antes del tipo, similar a Swift."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. El sistema de tipos de Kotlin distingue en el propio tipo si puede contener null: `String` NUNCA puede ser null (el compilador garantiza esto), mientras que `String?` puede ser null pero el compilador te obliga a manejar ese caso antes de usar el valor. Esta distinción ocurre en tiempo de compilación, no en ejecución."
  },
  {
    "week": 2,
    "question": "¿Qué hace el Operador de Llamada Segura (`?.`) en Kotlin y en qué se diferencia del acceso directo (`.`)?",
    "options": [
      "Convierte automáticamente un valor nullable a non-nullable antes de acceder al miembro.",
      "Evalúa la expresión del lado derecho solo si el objeto del lado izquierdo NO es nulo; si es nulo, retorna `null` en lugar de lanzar una excepción.",
      "Verifica el tipo del objeto antes de acceder al miembro y hace un cast automático.",
      "Solo puede usarse con propiedades, no con llamadas a funciones."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. El `?.` es el operador de 'safe call' o llamada segura. En `token?.length`, si `token` es null, toda la expresión se evalúa como `null` sin lanzar ninguna excepción. Si `token` no es null, accede a `.length` normalmente. Esto permite encadenar operaciones sobre valores potencialmente nulos de forma segura."
  },
  {
    "week": 2,
    "question": "El Operador Elvis (`?:`) en Kotlin sirve para proporcionar un valor por defecto cuando una expresión es nula. ¿Cuál es su equivalente en Swift?",
    "options": [
      "El operador `guard let`",
      "El operador `if let`",
      "El operador Nil-Coalescing (`??`)",
      "El operador `as?` (Optional Casting)"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. El operador Nil-Coalescing `??` de Swift es funcionalmente idéntico al Operador Elvis `?:` de Kotlin. Ambos evalúan la expresión izquierda y, si es nula, usan el valor de la derecha como respaldo. Ejemplo en Kotlin: `val nombre = token ?: \"Anónimo\"`. En Swift: `let nombre = token ?? \"Anónimo\"`."
  },
  {
    "week": 2,
    "question": "¿Por qué el Operador de Aserción No Nula (`!!`) es considerado un 'Code Smell' (mala práctica) en ingeniería móvil profesional?",
    "options": [
      "Porque es sintácticamente confuso y el compilador K2 lo ignora en optimizaciones.",
      "Porque fuerza a tratar un tipo nullable como si fuera seguro; si el valor resulta ser null en tiempo de ejecución, lanza inmediatamente un `NullPointerException`, deshaciendo toda la seguridad que Kotlin ofrece.",
      "Porque aumenta el tamaño del APK al incluir código de verificación adicional en tiempo de ejecución.",
      "Porque hace que el código no sea compatible con interoperabilidad Java."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. El `!!` le dice al compilador 'confía en mí, esto nunca será null'. Si estás equivocado, obtienes un `NullPointerException` en producción, exactamente lo que Kotlin prometía eliminar. Es el 'botón de pánico': indica que el desarrollador no sabe con certeza si el valor puede ser null, lo cual es una señal de diseño deficiente."
  },
  {
    "week": 2,
    "question": "¿Qué es el 'Smart Cast' en Kotlin y cómo simplifica el manejo de tipos?",
    "options": [
      "Es un cast explícito usando la función `as` que convierte un tipo a otro con verificación en tiempo de ejecución.",
      "Después de una verificación de tipo con `is`, el compilador trata automáticamente el objeto como ese tipo dentro del bloque, sin necesidad de un cast manual.",
      "Es un mecanismo que convierte automáticamente tipos Java a tipos Kotlin al usar interoperabilidad.",
      "Es la capacidad de Kotlin de inferir el tipo de retorno de una función sin declararlo explícitamente."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Con Smart Cast, si escribes `if (obj is String) { println(obj.length) }`, dentro del `if` el compilador sabe que `obj` YA es un `String` y te deja usar sus métodos directamente, sin necesidad de `(obj as String).length`. Esto elimina casts manuales redundantes y es especialmente útil con `when`."
  },
  {
    "week": 2,
    "question": "¿Cuál es la diferencia principal entre `when` en Kotlin y `switch` en Java, según el material de la Semana 2?",
    "options": [
      "El `when` de Kotlin solo acepta tipos primitivos, mientras que `switch` de Java acepta cualquier tipo.",
      "El `switch` de Java requiere `break` explícito para evitar el 'fall-through' accidental; el `when` de Kotlin no requiere `break` y cada rama es independiente por defecto.",
      "El `when` de Kotlin es más lento porque evalúa todas las ramas antes de decidir, mientras `switch` usa tabla de salto.",
      "No hay diferencia funcional; `when` es solo azúcar sintáctico sobre `switch` para mejorar la legibilidad."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. En Java, olvidar el `break` en un `switch` causa 'fall-through': el código 'cae' al siguiente caso accidentalmente, un bug clásico difícil de detectar. Kotlin eliminó este problema de diseño: en `when`, cada rama es completamente independiente y no hay fall-through posible, haciendo el código más seguro por defecto."
  },
  {
    "week": 2,
    "question": "¿Qué significa usar `when` como EXPRESIÓN en Kotlin, y qué restricción importante impone el compilador en ese caso?",
    "options": [
      "Se usa dentro de una función lambda y puede retornar cualquier tipo.",
      "Retorna un valor que puede asignarse a una variable, y el compilador exige exhaustividad: deben cubrirse todos los casos posibles o incluir un bloque `else`.",
      "Se evalúa en tiempo de compilación en lugar de en tiempo de ejecución.",
      "Solo puede usarse con tipos sellados (sealed classes) que tengan un número finito de subtipos."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Cuando usas `val resultado = when(x) { ... }`, el `when` actúa como una expresión que produce un valor. En este caso, el compilador exige exhaustividad: si `x` puede tener casos no cubiertos, el compilador da error hasta que los cubras o añadas un `else`. Esto previene olvidos peligrosos en la lógica de negocio."
  },
  {
    "week": 2,
    "question": "En el ejemplo de `when` con Pattern Matching avanzado, ¿qué operador permite verificar si un valor está dentro de un rango numérico?",
    "options": [
      "El operador `between`",
      "El operador `in` (ej: `in 2..3`)",
      "El operador `range`",
      "El operador `contains`"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Kotlin permite usar `in` con rangos en expresiones `when`: `in 2..3 -> \"Semestre de Estabilización\"`. Esto es mucho más expresivo que múltiples comparaciones `if/else if` o `case` repetidos en Java. Los rangos pueden ser numéricos (`1..10`) o con `until` (`1 until 10`) para rangos exclusivos."
  },
  {
    "week": 2,
    "question": "Según la Guía de Estilo de Kotlin (recomendada por Google y JetBrains), ¿cómo deben nombrarse las CONSTANTES de nivel superior marcadas con `const val`?",
    "options": [
      "camelCase (ej: `baseUrl`, `maxRetryCount`)",
      "PascalCase (ej: `BaseUrl`, `MaxRetryCount`)",
      "SCREAMING_SNAKE_CASE (ej: `BASE_URL`, `MAX_RETRY_COUNT`)",
      "kebab-case (ej: `base-url`, `max-retry-count`)"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. Las constantes de nivel superior o dentro de companion objects marcadas con `const val` deben seguir SCREAMING_SNAKE_CASE (mayúsculas con guiones bajos). Es una convención del lenguaje: `const val BASE_URL = \"https://api.example.com\"`, `const val MAX_RETRY_COUNT = 3`."
  },
  {
    "week": 2,
    "question": "¿Cómo deben nombrarse las CLASES y OBJETOS en Kotlin según la Guía de Estilo oficial?",
    "options": [
      "camelCase (ej: `userAccount`, `loginFragment`)",
      "SCREAMING_SNAKE_CASE (ej: `USER_ACCOUNT`, `LOGIN_FRAGMENT`)",
      "PascalCase (ej: `UserAccount`, `LoginFragment`)",
      "snake_case (ej: `user_account`, `login_fragment`)"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. Las clases y objetos en Kotlin siguen PascalCase (también llamado UpperCamelCase): cada palabra comienza con mayúscula, sin separadores. Ejemplos: `UserAccount`, `LoginFragment`, `NetworkResultMapper`. Las funciones y propiedades usan camelCase (lowerCamelCase)."
  },
  {
    "week": 2,
    "question": "¿Cuál es el orden correcto para los elementos dentro de un archivo `.kt` según las convenciones de estilo de Kotlin?",
    "options": [
      "Declaraciones de clase → Importaciones → Sentencia de paquete → Encabezado de licencia",
      "Importaciones → Encabezado de licencia → Sentencia de paquete → Declaraciones",
      "Encabezado de licencia → Sentencia de paquete → Importaciones → Declaraciones de clases o funciones",
      "Sentencia de paquete → Declaraciones → Importaciones → Encabezado de licencia"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. El orden estándar en archivos Kotlin es: 1) Encabezado de licencia (comentario de copyright), 2) Sentencia de paquete (`package com.example.app`), 3) Importaciones (agrupadas, sin comodines `*`), 4) Declaraciones de clases o funciones. Este orden facilita la navegación rápida del código."
  },
  {
    "week": 2,
    "question": "¿Qué son los 'Platform Types' en Kotlin (notación `String!`) y por qué representan un riesgo?",
    "options": [
      "Son tipos nativos de Android que no están disponibles en Kotlin Multiplatform.",
      "Son tipos que el compilador Kotlin asigna a valores provenientes de código Java que no tiene anotaciones `@Nullable` o `@NotNull`, donde no puede garantizar si el valor puede ser null o no.",
      "Son tipos que solo existen en dispositivos físicos y no en el emulador.",
      "Son tipos que requieren conversión explícita antes de ser usados en contextos Kotlin."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Cuando Kotlin consume una API Java sin anotaciones de nulidad, no puede saber si el retorno puede ser null o no. Asigna un 'Platform Type' (notado con `!`). El riesgo: el compilador Kotlin te permite usar este valor sin verificación de null, pero si resulta ser null en runtime, obtienes un NullPointerException."
  },
  {
    "week": 2,
    "question": "¿Qué describe el material de la Semana 2 como la característica que reduce el 'ruido sintáctico' (boilerplate) de Java en Kotlin?",
    "options": [
      "La inferencia de tipos que elimina declaraciones de tipo redundantes.",
      "La generación automática por parte del compilador de código repetitivo como getters, setters, equals, toString, etc.",
      "El uso de lambdas que reemplazan clases anónimas de Java.",
      "Todas las anteriores son correctas, ya que Kotlin reduce el boilerplate desde múltiples ángulos."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es d. Kotlin reduce el boilerplate de múltiples formas simultáneas: la inferencia de tipos elimina declaraciones redundantes, el compilador autogenera equals/hashCode/toString en data classes, las lambdas reemplazan clases anónimas verbose de Java, y las extension functions eliminan clases helper. Juntas, estas características logran el mismo resultado en significativamente menos líneas."
  },
  {
    "week": 2,
    "question": "En la comparativa Java vs. Kotlin para el manejo del control de flujo, ¿qué ventaja específica tiene la expresión `when` de Kotlin frente al `switch` de Java según el ejemplo del material?",
    "options": [
      "El `when` de Kotlin es 3 veces más rápido en ejecución por usar tablas de hash internas.",
      "El `when` puede usarse como expresión que retorna un valor directamente, y soporta múltiples valores por caso (`1, 4 ->`) y rangos (`in 2..3 ->`), siendo más conciso y expresivo que el `switch`.",
      "El `when` soporta casos con tipos de dato mixtos (Int y String en el mismo `when`).",
      "El `when` permite definir casos en cualquier orden sin importar el valor evaluado."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. En el ejemplo del material, el `when` de Kotlin muestra 3 ventajas sobre Java: 1) Es una expresión (retorna valor directamente), 2) Soporta múltiples valores por rama (`1, 4 ->`), 3) Soporta rangos (`in 2..3 ->`). El equivalente Java requiere más líneas, variables mutables intermedias y `break` explícitos."
  },
  {
    "week": 2,
    "question": "¿Qué sucede en Kotlin si declaras `val token: String? = null` e intentas llamar directamente `token.length` sin operador seguro?",
    "options": [
      "El código compila pero lanza un NullPointerException en tiempo de ejecución.",
      "El código no compila: el compilador Kotlin detecta el error y produce un error de compilación en esa línea.",
      "El código retorna 0 automáticamente como valor por defecto para el length.",
      "El compilador inserta automáticamente una verificación de null antes de la llamada."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Esta es una de las características más importantes de Kotlin: los errores de null son detectados EN TIEMPO DE COMPILACIÓN. Si `token` es de tipo `String?` y no verificas que no es null antes de llamar `.length`, el compilador rechaza el código con un error. Esto mueve los NullPointerExceptions del runtime al compile-time."
  },
  {
    "week": 2,
    "question": "Según el material de Semana 2, ¿cuál es el escenario ideal para usar `val` vs. `var` en términos de seguridad de hilos (thread safety)?",
    "options": [
      "`val` y `var` tienen el mismo comportamiento en entornos multi-hilo.",
      "`val` es intrínsecamente más seguro para concurrencia porque no puede ser reasignado por múltiples hilos simultáneamente, mientras que `var` requiere gestión manual (sincronización, mutexes).",
      "`var` es más seguro en multi-hilo porque el compilador añade automáticamente locks al reasignarlo.",
      "Ninguno es thread-safe; siempre se deben usar Coroutines para operaciones concurrentes."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Un `val` (referencia inmutable) no puede ser reasignado una vez creado, lo que lo hace inherentemente seguro para ser leído desde múltiples hilos sin sincronización adicional. Un `var` puede ser modificado desde cualquier hilo en cualquier momento, lo que requiere mecanismos de sincronización (locks, `synchronized`, `AtomicReference`) para evitar condiciones de carrera."
  },
  {
    "week": 2,
    "question": "¿Qué es la 'Interoperabilidad Total' de Kotlin con Java, y por qué fue crítica para su adopción en Android?",
    "options": [
      "Que las apps Kotlin pueden instalarse en dispositivos que solo soportan Java.",
      "Que el código Kotlin puede llamar código Java y viceversa sin capas de traducción, permitiendo migraciones graduales y reutilización del enorme ecosistema de librerías Java.",
      "Que el código Kotlin compila directamente a bytecode Java sin pasar por el compilador Kotlin.",
      "Que Kotlin puede ser interpretado por la JVM de Java sin necesidad del runtime de Kotlin."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La interoperabilidad total fue clave para la adopción de Kotlin: las empresas con millones de líneas de código Java en Android podían migrar gradualmente (archivo por archivo, clase por clase) sin necesidad de reescribir todo. Un archivo Kotlin puede llamar a clases Java y viceversa. Además, todas las librerías del ecosistema Java son inmediatamente usables en Kotlin."
  },
  {
    "week": 2,
    "question": "En el contexto de la Semana 2 sobre convergencia Kotlin-Swift, ¿cuál es un paralelismo conceptual directo entre ambos lenguajes en cuanto al manejo de valores opcionales/nulos?",
    "options": [
      "Kotlin usa `null` y Swift usa `None` para representar ausencia de valor.",
      "Kotlin usa el tipo `String?` para valores nulables y Swift usa `Optional<String>` (o `String?`) para valores opcionales, siendo conceptos análogos.",
      "Kotlin usa `is` para verificar tipos y Swift usa `instanceof` para el mismo fin.",
      "Kotlin usa `val` para constantes y Swift usa `let`, siendo semánticamente idénticos en todos los aspectos."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Tanto Kotlin como Swift resolvieron el problema de los null/nil de forma similar pero con sintaxis propia: `String?` en Kotlin y `Optional<String>` (o también `String?`) en Swift. Ambos integran el concepto de 'puede no tener valor' en el sistema de tipos y requieren manejo explícito antes de usar el valor."
  },
  {
    "week": 2,
    "question": "¿Cuál es el beneficio de evitar el uso de comodines (`*`) en las importaciones de un archivo `.kt`?",
    "options": [
      "Reduce el tiempo de compilación porque el compilador solo carga las clases necesarias.",
      "Mejora la legibilidad y evita conflictos de nombres: al ver `import androidx.compose.material3.Button`, es inmediatamente claro de dónde viene cada clase.",
      "Es un requisito del compilador K2 que rechaza archivos con importaciones comodín.",
      "Reduce el tamaño del APK al eliminar clases no utilizadas del bundle final."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Las importaciones explícitas (sin `*`) mejoran la legibilidad del código: cuando alguien lee el archivo, puede ver exactamente qué clases se usan y de dónde vienen. Evita también colisiones cuando dos paquetes tienen clases con el mismo nombre (ej: `java.util.Date` vs `java.sql.Date`)."
  },
  {
    "week": 2,
    "question": "¿Qué es el 'Operador Elvis' (`?:`) y por qué se llama así?",
    "options": [
      "Se llama así por Elvis Presley porque su forma visual (`?:`) recuerda al peinado del cantante visto de lado.",
      "Se llama así por Elvis Presley porque fue creado por el mismo programador que era fan del cantante.",
      "Se llama así porque la combinación de signos `?:` recuerda al emoji de Elvis con pompadour si se inclina la cabeza.",
      "Se llama 'Elvis' por ser un operador 'icónico' del lenguaje Groovy donde se popularizó."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es a. El apodo 'Elvis Operator' viene de que si inclinas la cabeza a la derecha y miras `?:`, parece un emoji de una cara con los ojos (`?`) y el icónico pompadour de Elvis Presley (`:` representando el cabello). Es un ejemplo del humor de la comunidad de programadores al nombrar constructos del lenguaje."
  },
  {
    "week": 2,
    "question": "En Kotlin, ¿cuál es el impacto estadístico validado de la Seguridad de Tipos en la reducción de errores en producción según el material?",
    "options": [
      "Una reducción del 50% en todos los tipos de bugs.",
      "Una reducción del 94% en el tiempo de compilación.",
      "Una reducción probada de casi el 20% en la probabilidad de 'crashes' en producción gracias a la detección temprana de errores de referencia nula.",
      "Una reducción del 30% en el uso de memoria RAM por parte de las aplicaciones."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. Los datos de Google muestran que desde la adopción de Kotlin, los NullPointerExceptions (una de las principales causas de crashes en apps Android Java) se redujeron aproximadamente un 20% en producción. Esto es gracias al sistema de tipos que detecta estos errores en compilación, no en runtime."
  },
  {
    "week": 2,
    "question": "Según el material de Semana 2, ¿cuál es el escenario ideal para usar `var` según la 'Regla de Oro' de la mutabilidad?",
    "options": [
      "Siempre que la variable sea una propiedad de una clase, debe ser `var`.",
      "Siempre que el valor pueda cambiar durante la ejecución del programa, debe ser `var`.",
      "Siempre declarar con `val` por defecto y cambiar a `var` solo cuando sea estrictamente necesario e imposible evitarlo.",
      "Para contadores, estados de UI y configuraciones del usuario, siempre `var`."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. La 'Regla de Oro' de la mutabilidad en Kotlin es: `val` primero, siempre. El uso de `var` debe ser la excepción justificada, no la norma. Esta filosofía reduce los side effects, hace el código más predecible y facilita la concurrencia. Solo cambia a `var` cuando hayas agotado las opciones de diseño con `val`."
  },
  {
    "week": 2,
    "question": "¿Cómo nombra Kotlin el `switch` de Java y qué importante mejora introduce en su versión de esta estructura de control?",
    "options": [
      "Lo renombra `match` y añade soporte para Pattern Matching con tipos sellados.",
      "Lo renombra `when` y lo convierte en una expresión que puede retornar valores, además de soportar condiciones arbitrarias, no solo valores constantes.",
      "Lo renombra `select` y añade soporte para manejo de excepciones dentro de los casos.",
      "Mantiene el nombre `switch` pero elimina la necesidad de `break` usando llaves por caso."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Kotlin llama `when` a su versión del `switch`. La mejora fundamental es que `when` puede ser una EXPRESIÓN (retornar un valor), no solo una declaración. Además, acepta condiciones booleanas arbitrarias en cada rama (`when { x > 0 -> ... }`), rangos, y comprobaciones de tipo, siendo mucho más poderoso que el `switch` de Java."
  },
  {
    "week": 2,
    "question": "¿Qué significa la afirmación 'Kotlin delega la generación de boilerplate al compilador'?",
    "options": [
      "El compilador de Kotlin puede generar código Kotlin automáticamente a partir de diagramas UML.",
      "El compilador genera automáticamente métodos repetitivos como `equals()`, `hashCode()`, `toString()`, `copy()` en `data class`, liberando al programador de escribirlos manualmente.",
      "El compilador de Kotlin puede completar el código del programador usando inteligencia artificial.",
      "Kotlin genera automáticamente la interfaz gráfica de usuario a partir del modelo de datos."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. En Java, para tener una clase de datos correcta necesitas escribir manualmente los métodos `equals()`, `hashCode()`, `toString()`, getters y setters. En Kotlin, al declarar `data class`, el compilador K2 genera todo esto automáticamente, basándose en las propiedades del constructor primario. Esta delegación al compilador es central a la filosofía de reducción de boilerplate."
  },
  {
    "week": 2,
    "question": "Según el nuevo compilador K2 de Kotlin 2.0, ¿cuál es la mejora de rendimiento que ofrece sobre el compilador K1 (Legacy)?",
    "options": [
      "Un 10% más de velocidad en builds incrementales.",
      "Hasta un 94% más de velocidad en compilaciones limpias gracias a su arquitectura Frontend Intermedia Representational (FIR) unificada.",
      "Un 50% menos de uso de memoria RAM durante el proceso de compilación.",
      "La capacidad de compilar proyectos multi-módulo en paralelo de forma nativa."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. El compilador K2 introduce una arquitectura FIR (Frontend Intermediate Representation) completamente unificada que reemplaza el pipeline de compilación anterior. Esto logra hasta un 94% más de velocidad en compilaciones limpias, además de una inferencia semántica más inteligente que detecta más errores en compile-time."
  },
  {
    "week": 2,
    "question": "En el contexto de Jetpack Compose y la inmutabilidad, ¿por qué es importante el uso de `val` para el estado de la UI?",
    "options": [
      "Porque Compose solo puede renderizar objetos que implementan la interfaz `Immutable`.",
      "Porque los objetos inmutables (`val`) evitan recomposiciones innecesarias: Compose puede detectar que el estado no cambió y omitir el re-render, mejorando el rendimiento.",
      "Porque Compose usa reflection para leer el estado y solo puede acceder a propiedades `val`.",
      "Porque `val` en Compose tiene una sintaxis especial que activa el sistema de reactividad automáticamente."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Jetpack Compose usa un sistema de 'estabilidad de estado' para optimizar el renderizado. Si el estado de un componente es inmutable (`val`), Compose sabe con certeza que no cambió entre recomposiciones y puede saltarse el re-render de ese componente. Los estados mutables requieren comparaciones más costosas o fuerzan recomposiciones innecesarias."
  },
  {
    "week": 2,
    "question": "¿En qué se diferencia la verificación explícita `if (token != null)` del operador `?.` en Kotlin para manejar valores nulables?",
    "options": [
      "No hay diferencia; ambos son igualmente seguros y el compilador los trata igual.",
      "La verificación `if` funciona pero es más verbosa; el `?.` es la forma idiomática y concisa de Kotlin para el mismo propósito, y además puede encadenarse.",
      "La verificación `if` genera Smart Cast dentro del bloque, mientras que `?.` no activa el Smart Cast.",
      "El `?.` solo funciona con propiedades, mientras que `if (token != null)` funciona tanto con propiedades como con funciones."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Ambos son correctos y seguros (el compilador acepta ambos). Sin embargo, el `?.` es la forma idiomática de Kotlin: es más conciso y puede encadenarse fácilmente para acceso seguro en cadenas profundas (`user?.address?.city?.name`). El `if (token != null)` es más verboso y difícil de encadenar."
  },
  {
    "week": 2,
    "question": "Si tienes `val nombre: String? = \"Ana\"` y quieres llamar `println(nombre.length)`, ¿cuál es el operador correcto que hace esto posible de forma segura en Kotlin?",
    "options": [
      "`println(nombre!!.length)` - Aserción no nula",
      "`println(nombre?.length)` - Llamada segura que retorna `Int?`",
      "`println((nombre as String).length)` - Cast explícito",
      "`println(nombre.let { it.length })` - Scope function sin verificación"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. `nombre?.length` usa el operador de llamada segura: si `nombre` no es null, retorna el valor de `length` como `Int?`; si fuera null, retornaría `null` sin excepción. La opción `!!` funcionaría aquí (porque `nombre` tiene valor), pero es mala práctica porque si cambia el valor a `null` en el futuro, crashearía."
  },
  {
    "week": 2,
    "question": "Según el material de Semana 2, ¿cuáles son las 5 grandes secciones temáticas que cubre el contenido de la semana?",
    "options": [
      "Lambdas, Higher-Order Functions, Coroutines, Flows y Compose",
      "Por qué Kotlin, Sistema de Tipos e Inferencias, Control de Flujo con `when`, Convenciones de Estilo y Comparativa iOS (Swift)",
      "OOP en Kotlin, Data Classes, Sealed Classes, Objects y Companion Objects",
      "Arquitectura MVVM, LiveData, ViewModel, Room y Retrofit"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La Semana 2 cubre los pilares fundamentales de Kotlin: 1) Por qué Kotlin (filosofía Kotlin-First), 2) Sistema de Tipos e Inferencias (val/var, null safety), 3) Control de Flujo con `when`, 4) Convenciones de Estilo y Buenas Prácticas, y 5) Comparativa con iOS/Swift."
  },
  {
    "week": 2,
    "question": "¿Por qué el material de Semana 2 establece que en Jetpack Compose se deben crear copias inmutables del estado en lugar de modificar el estado existente?",
    "options": [
      "Porque Compose no puede detectar cambios en objetos mutables y nunca actualiza la UI.",
      "Porque crear copias inmutables activa el sistema de reactividad de Compose, que detecta el cambio de referencia y dispara la recomposición solo de los elementos afectados.",
      "Porque los objetos mutables consumen más memoria en el Heap de la JVM.",
      "Porque es un requisito de la arquitectura MVVM que los estados sean siempre inmutables."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Compose usa el principio de 'estabilidad de estado': para saber si debe re-renderizar un componente, compara referencias de objetos. Si modificas el objeto existente (mutable), la referencia no cambia y Compose podría no detectar el cambio. Si creas una nueva instancia inmutable, la referencia cambia y Compose sabe exactamente qué actualizar."
  },
  {
    "week": 2,
    "question": "¿Cuál es el resumen de los 'Pilares de la Ingeniería Kotlin' que cierra la Semana 2?",
    "options": [
      "Velocidad, Elegancia, Compatibilidad y Comunidad.",
      "Tipo seguro, Funcional, Conciso y Multiplataforma.",
      "Inferencia de tipos inteligente, Val/Var para robustez, Null Safety para confiabilidad y `when` como expresión potente.",
      "Lambdas, Extension Functions, Data Classes y Coroutines."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. Los pilares de la ingeniería Kotlin presentados en la Semana 2 son: la Inferencia de Tipos (código limpio sin redundancias), la filosofía Val/Var (cimientos de la robustez e inmutabilidad), Null Safety (eliminación del error del billón de dólares) y `when` como expresión potente (control de flujo expresivo y exhaustivo)."
  }
];
