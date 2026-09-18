// ============================================================
// BANCO DE PREGUNTAS - SEMANA 3
// Kotlin Avanzado: OOP Funcional, Data/Sealed Classes, Scope Functions
// ============================================================
const questionsWeek3 = [
  {
    "week": 3,
    "question": "¿Qué métodos genera AUTOMÁTICAMENTE el compilador de Kotlin al declarar una `data class`?",
    "options": [
      "Solo `toString()` y `equals()`.",
      "`equals()`, `hashCode()`, `toString()`, `copy()` y `componentN()`.",
      "`clone()`, `equals()`, `hashCode()` y un constructor vacío.",
      "`serialize()`, `deserialize()`, `toString()` y `equals()`."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Al agregar la palabra clave `data` a una clase, el compilador K2 genera automáticamente 5 métodos: `equals()` (comparación estructural por valor, no por referencia), `hashCode()` (para uso en colecciones), `toString()` (representación legible), `copy()` (crear copias modificadas) y `componentN()` (para destructuración)."
  },
  {
    "week": 3,
    "question": "¿Cuál es la regla de las `data class` en Kotlin respecto a las propiedades que participan en los métodos autogenerados?",
    "options": [
      "Todas las propiedades de la clase, incluyendo las del cuerpo, participan en los métodos.",
      "Solo las propiedades declaradas en el CONSTRUCTOR PRIMARIO participan en `equals()`, `hashCode()` y `toString()`.",
      "Solo las propiedades marcadas con `@DataProperty` participan en los métodos autogenerados.",
      "Las propiedades del constructor primario participan en todo excepto en `copy()`."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Esta es una regla fundamental de las data classes: SOLO las propiedades del constructor primario son consideradas por los métodos autogenerados. Las propiedades declaradas en el cuerpo de la clase (dentro de `{}`) son ignoradas por `equals()`, `hashCode()`, `toString()` y `copy()`. Esto permite tener propiedades auxiliares que no afecten la identidad del objeto."
  },
  {
    "week": 3,
    "question": "¿Cuál de las siguientes restricciones es válida para las `data class` en Kotlin?",
    "options": [
      "No pueden tener funciones ni métodos propios.",
      "No pueden implementar interfaces.",
      "No pueden ser `abstract`, `open`, `sealed`, ni `inner`.",
      "Deben tener al menos 3 propiedades en el constructor primario."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. Las `data class` no pueden ser `abstract` (no pueden ser abstractas), `open` (no pueden ser heredadas), `sealed` (no pueden ser selladas) ni `inner` (no pueden ser clases internas). SÍ pueden implementar interfaces, tener funciones propias y tener cualquier número de propiedades (incluyendo solo 1)."
  },
  {
    "week": 3,
    "question": "¿Para qué sirve el método `copy()` autogenerado en una `data class` y por qué es fundamental en arquitecturas reactivas como Jetpack Compose?",
    "options": [
      "Para duplicar un objeto en memoria y tener dos instancias idénticas que se puedan modificar independientemente.",
      "Para serializar el objeto a un formato JSON antes de enviarlo a una API.",
      "Para crear una NUEVA instancia del objeto con algunas propiedades modificadas mientras las demás permanecen iguales, manteniendo inmutabilidad.",
      "Para copiar el objeto entre hilos de ejecución de forma thread-safe."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. `copy()` es clave para la inmutabilidad: `val usuario2 = usuario.copy(edad = 21)` crea un NUEVO objeto con `edad = 21` pero con todos los demás campos idénticos al original. `usuario` no se modifica. En Compose, esto activa la recomposición: la referencia del estado cambia (nuevo objeto), indicando a Compose que debe re-renderizar."
  },
  {
    "week": 3,
    "question": "¿Qué son las `sealed class` en Kotlin y cuál es su característica definitoria?",
    "options": [
      "Son clases que no pueden ser instanciadas directamente, solo a través de un factory method.",
      "Son clases que representan jerarquías cerradas y restringidas: el compilador conoce de antemano TODAS las posibles subclases, funcionando como interruptores lógicos finitos.",
      "Son clases que sellan sus propiedades como inmutables, similar a una interfaz.",
      "Son clases que no pueden ser modificadas después de ser compiladas en el APK."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Una `sealed class` define un conjunto CERRADO de subclases. Todas las subclases deben estar declaradas en el mismo archivo (o módulo, desde Kotlin 1.5). El compilador conoce en compile-time todas las subclases posibles, lo que permite que `when` sobre una `sealed class` sea exhaustivo y te advierta si olvidas manejar algún caso."
  },
  {
    "week": 3,
    "question": "¿Cuál es el 'Escudo del Compilador' que se obtiene al combinar `sealed class` con la expresión `when` en Kotlin?",
    "options": [
      "El compilador genera automáticamente el código de manejo de errores para cada subclase.",
      "El compilador verifica exhaustividad: si agregas una nueva subclase a la sealed class, el código NO COMPILA hasta que también manejes ese nuevo caso en todos los `when` que usen esa sealed class.",
      "El compilador optimiza el `when` sobre sealed classes convirtiéndolo en una tabla de salto.",
      "El compilador evita que dos hilos accedan simultáneamente al mismo `when` sobre una sealed class."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. El 'Escudo del Compilador' es una de las razones más poderosas para usar `sealed class`: si mañana agregas `data class Timeout : NetworkResult()`, el compilador te fuerza a manejar ese nuevo caso en TODOS los `when` del proyecto. Sin este mecanismo, es fácil olvidar manejar un nuevo estado y crear bugs silenciosos."
  },
  {
    "week": 3,
    "question": "¿Cuál es el caso de uso ideal de las `sealed interfaces` introducidas en Kotlin 1.5, diferenciándolas de las `sealed classes`?",
    "options": [
      "Las sealed interfaces son más eficientes en memoria que las sealed classes para jerarquías grandes.",
      "Las sealed interfaces permiten modelar comportamientos TRANSVERSALES: una subclase puede implementar múltiples sealed interfaces simultáneamente, algo imposible con herencia de sealed classes.",
      "Las sealed interfaces pueden tener propiedades con backing field, cosa que las sealed classes no permiten.",
      "Las sealed interfaces son útiles para definir contratos que deben ser implementados en módulos separados."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Con `sealed class`, una subclase solo puede heredar de UN padre (herencia simple). Con `sealed interface`, una clase puede implementar MÚLTIPLES sealed interfaces. Ejemplo: `class TimeoutError : NetworkError(), RetryableError` - el error implementa tanto la jerarquía de errores de red como la interfaz de errores que se pueden reintentar."
  },
  {
    "week": 3,
    "question": "¿Qué diferencia fundamental existe entre un `enum` clásico y una `sealed class` en Kotlin?",
    "options": [
      "El `enum` es más rápido en ejecución porque usa una tabla de hash interna.",
      "El `enum` solo puede representar valores cerrados simples (sin datos asociados); la `sealed class` permite que cada subclase tenga su propio modelo de datos complejo y distinto.",
      "La `sealed class` puede tener métodos abstractos mientras que el `enum` no.",
      "El `enum` solo funciona con valores numéricos, mientras la `sealed class` acepta cualquier tipo."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Un `enum` como `enum class Result { SUCCESS, ERROR, LOADING }` tiene estados simples sin datos. Una `sealed class` permite: `data class Success(val data: User) : Result()`, `data class Error(val code: Int, val message: String) : Result()`, `object Loading : Result()`. Cada estado puede llevar información diferente y estructurada."
  },
  {
    "week": 3,
    "question": "¿Qué garantiza el uso de la declaración `object` en Kotlin para implementar el patrón Singleton?",
    "options": [
      "Que el objeto solo puede ser accedido desde el hilo principal (Main Thread).",
      "Una inicialización perezosa (lazy) thread-safe y que garantiza una ÚNICA instancia en toda la JVM, sin necesidad de escribir código de sincronización manual.",
      "Que el objeto es destruido y recreado automáticamente cuando cambia la configuración del dispositivo.",
      "Que el objeto puede ser serializado automáticamente para persistencia en base de datos."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La declaración `object` en Kotlin es el Singleton Nativo: el compilador genera el código thread-safe necesario para garantizar que solo existe UNA instancia en todo el programa. Es lazy (se inicializa al primer acceso) y thread-safe de forma intrínseca, reemplazando los complicados patrones de Singleton de Java con `synchronized`."
  },
  {
    "week": 3,
    "question": "¿Cómo reemplaza la declaración `object` en Kotlin a los miembros `static` de Java?",
    "options": [
      "No los reemplaza; Kotlin también tiene la palabra clave `static` para el mismo propósito.",
      "En Kotlin, los equivalentes a `static` se colocan dentro de un `companion object` dentro de la clase, o en un `object` de nivel superior, que sirve como contenedor de miembros compartidos.",
      "Los miembros estáticos de Java se importan directamente con `@JvmStatic` y no necesitan reemplazo.",
      "Se usan `extension functions` a nivel de paquete en lugar de métodos estáticos."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Java usa `static` para miembros que pertenecen a la clase, no a instancias. Kotlin lo reemplaza con `companion object`: `class MiClase { companion object { fun crearInstancia() = MiClase() } }`. Los `companion objects` son singletons asociados a su clase, y con la anotación `@JvmStatic` son compatibles con código Java."
  },
  {
    "week": 3,
    "question": "¿Qué es una función Lambda en Kotlin y cuál es su característica fundamental?",
    "options": [
      "Una función privada que solo puede ser llamada dentro de la clase donde se define.",
      "Una función anónima que puede ser tratada como un valor: almacenarse en variables, pasarse como parámetro y devolverse como resultado de otra función.",
      "Una función que se ejecuta de forma asíncrona en un hilo separado.",
      "Una función que acepta un número variable de parámetros usando el operador `vararg`."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Una lambda en Kotlin es una función anónima (sin nombre) que es un 'ciudadano de primera clase': puede ser asignada a una variable (`val saludar = { nombre: String -> \"Hola $nombre\" }`), pasada como argumento y retornada. Esto habilita patrones funcionales y es la base de HOFs, Scope Functions y colecciones funcionales."
  },
  {
    "week": 3,
    "question": "¿Qué es una Función de Orden Superior (Higher-Order Function) en Kotlin?",
    "options": [
      "Una función que pertenece a una clase de jerarquía alta en la arquitectura del proyecto.",
      "Una función que acepta otras funciones como parámetros o que devuelve una función como resultado.",
      "Una función que tiene más de 5 parámetros de entrada.",
      "Una función que corre con mayor prioridad de CPU que las funciones normales."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Las Higher-Order Functions (HOF) son un pilar de la Programación Funcional. En Kotlin: `fun transformar(numero: Int, operacion: (Int) -> Int): Int = operacion(numero)`. La función `transformar` recibe otra función como parámetro. `.map()`, `.filter()`, `.forEach()` en colecciones son HOFs de la biblioteca estándar."
  },
  {
    "week": 3,
    "question": "¿Qué es el 'Trailing Lambda' en Kotlin y qué código más limpio permite escribir?",
    "options": [
      "Una lambda que siempre retorna `Unit` (equivalente a `void`).",
      "Cuando la lambda es el ÚLTIMO parámetro de una función, puede escribirse FUERA de los paréntesis, resultando en código más limpio y similar a una estructura de control.",
      "Una lambda que se pasa al final de una cadena de llamadas usando el operador `?:`.",
      "Una lambda que solo puede acceder a las variables del ámbito exterior mediante captura explícita."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. El Trailing Lambda es azúcar sintáctico idiomático de Kotlin: `Button(onClick = { doSomething() })` puede escribirse como `Button { doSomething() }`. Esto hace que las APIs como Jetpack Compose luzcan como estructuras del lenguaje en vez de llamadas a funciones, mejorando la legibilidad del código declarativo."
  },
  {
    "week": 3,
    "question": "¿Por qué el modificador `inline` es importante para funciones de orden superior en Kotlin?",
    "options": [
      "Hace que la función se ejecute antes que las otras funciones del mismo hilo.",
      "Permite que la función acceda a propiedades privadas de otras clases.",
      "Evita la creación de objetos lambda en memoria (que normalmente crean una instancia de una clase anónima en Java), incrustando el código de la lambda directamente en el punto de llamada.",
      "Hace que la función sea accesible desde código Java sin adaptadores adicionales."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. Cada lambda en JVM normalmente crea un objeto (instancia de clase anónima). Con `inline`, el compilador incrusta el código de la lambda directamente en el lugar donde se llama, eliminando la creación de objetos y la sobrecarga de memoria. Por eso `filter`, `map`, `forEach` en Kotlin son `inline`: permiten código funcional sin penalidad de rendimiento."
  },
  {
    "week": 3,
    "question": "¿Cuáles son las DOS preguntas fundamentales para elegir la Scope Function correcta en Kotlin?",
    "options": [
      "¿El objeto viene de la red o de la base de datos? y ¿Se ejecuta en el hilo principal o en un hilo de fondo?",
      "¿Cómo quiero acceder al objeto dentro del bloque (`this` o `it`)? y ¿Qué necesito que devuelva la función (el objeto original o el resultado del cálculo)?",
      "¿El objeto es nulable? y ¿Necesito un efecto secundario o una transformación pura?",
      "¿El objeto es una data class? y ¿Voy a usar el resultado en Jetpack Compose?"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La 'Matriz de Decisión' de las Scope Functions se basa en 2 ejes: el ACCESO (¿accedo al objeto como `this` dentro del bloque, o como `it`?) y el RETORNO (¿la función me devuelve el objeto original o el resultado de la lambda?). Estas 2 preguntas determinan unívocamente qué función usar."
  },
  {
    "week": 3,
    "question": "La Scope Function `let`: ¿cómo accede al objeto y qué retorna?",
    "options": [
      "Accede como `this` y retorna el objeto original.",
      "Accede como `it` y retorna el resultado de la lambda.",
      "Accede como `this` y retorna el resultado de la lambda.",
      "Accede como `it` y retorna el objeto original."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. `let` usa `it` para referirse al objeto y retorna el resultado de la lambda (lo que la lambda calcule y retorne, no el objeto original). Ejemplo: `val longitud = nombre?.let { it.length }` - `it` es `nombre`, y `longitud` es el resultado del bloque (un `Int?`). Es ideal para transformar un valor y ejecutar código solo si no es null con `?.let`."
  },
  {
    "week": 3,
    "question": "La Scope Function `apply`: ¿cómo accede al objeto y qué retorna?",
    "options": [
      "Accede como `it` y retorna el resultado de la lambda.",
      "Accede como `this` (receptor) y retorna el OBJETO ORIGINAL.",
      "Accede como `this` y retorna el resultado de la lambda.",
      "Accede como `it` y retorna el objeto original."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. `apply` usa `this` como receptor (puedes llamar a las propiedades y métodos del objeto directamente sin prefijo) y SIEMPRE retorna el objeto original. Es ideal para la configuración de objetos: `val usuario = Usuario(\"Ana\").apply { email = \"ana@test.com\"; edad = 30 }`. Configuras el objeto y lo devuelves ya configurado."
  },
  {
    "week": 3,
    "question": "La Scope Function `also`: ¿cuál es su caso de uso principal y cómo se diferencia de `apply`?",
    "options": [
      "Es idéntico a `apply` pero más eficiente en términos de memoria.",
      "`also` usa `it` (en lugar de `this`), retorna el objeto original y es ideal para efectos secundarios como logging o validación, sin modificar el flujo principal.",
      "`also` usa `this`, retorna el resultado de la lambda y es ideal para transformaciones complejas.",
      "`also` convierte el objeto a un tipo diferente y retorna el nuevo tipo."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. `also` retorna el objeto original (igual que `apply`) pero accede a él como `it`. Es ideal para efectos secundarios que no deben modificar la cadena: `val usuario = crearUsuario().also { println(\"Usuario creado: $it\") }`. El `also` loggea el usuario sin interrumpir el flujo ni cambiar el valor retornado."
  },
  {
    "week": 3,
    "question": "La Scope Function `run`: ¿en qué dos formas puede usarse y qué retorna?",
    "options": [
      "Solo se puede usar como extensión de un objeto y retorna el objeto original.",
      "Como extensión de objeto (usa `this`, retorna resultado de la lambda) o como función independiente (ejecuta un bloque de código y retorna su resultado).",
      "Solo como función independiente y retorna siempre `Unit`.",
      "Como extensión de objeto o como función independiente, pero siempre retorna el objeto original."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. `run` es versátil: (1) Como extensión: `usuario.run { \"$nombre tiene $edad años\" }` - usa `this`, retorna el resultado de la lambda. (2) Como función independiente: `val resultado = run { calcularAlgo() }` - ejecuta un bloque de código y retorna su resultado. Es útil para configurar un objeto y calcular algo basado en él."
  },
  {
    "week": 3,
    "question": "La Scope Function `with`: ¿cuál es su característica más diferenciadora respecto al resto?",
    "options": [
      "Es la única Scope Function que puede manejar excepciones internamente.",
      "A diferencia de todas las demás, se llama como función INDEPENDIENTE recibiendo el objeto como ARGUMENTO (no como extensión con punto), usando `this` internamente y retornando el resultado de la lambda.",
      "Es la única que puede usarse en código Java directamente sin adaptadores.",
      "Se usa exclusivamente para operaciones sobre colecciones (listas, mapas)."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. `with` es especial porque su sintaxis es diferente: `with(usuario) { println(nombre); println(edad) }` en lugar de `usuario.with { ... }`. Recibe el objeto como primer argumento, usa `this` internamente y retorna el resultado de la lambda. Es ideal para ejecutar múltiples operaciones sobre un mismo objeto ya inicializado."
  },
  {
    "week": 3,
    "question": "¿Por qué anidar múltiples `let` o `run` es considerado un 'Code Smell' según el material de Semana 3?",
    "options": [
      "Porque cada `let` anidado crea un objeto en memoria, degradando el rendimiento.",
      "Porque genera confusión cognitiva: en el bloque interno ya no es claro si `it` o `this` se refieren al objeto exterior, al interior, o a algún resultado intermedio.",
      "Porque el compilador K2 genera un warning cuando detecta Scope Functions anidadas.",
      "Porque el GC de Android no puede limpiar correctamente las lambdas anidadas."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Cuando anidas `?.let { it.direccion?.let { println(it.calle) } }`, el `it` interior ya no se refiere al mismo objeto que el exterior. Esto causa confusión: ¿a qué se refiere `it` ahora? La solución es nombrar explícitamente el parámetro: `?.let { usuario -> usuario.direccion?.let { direccion -> println(direccion.calle) } }`."
  },
  {
    "week": 3,
    "question": "¿Cuál es el patrón idiomático más recomendado en Android moderno para manejar de forma segura un objeto nullable (ejecutar código solo si no es null)?",
    "options": [
      "`if (objeto != null) { objeto.hacer() }`",
      "`objeto!!.hacer()`",
      "`objeto?.let { it.hacer() }`",
      "`try { objeto.hacer() } catch (e: NullPointerException) { }`"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. `objeto?.let { it.hacer() }` es el patrón estándar idiomático: `?.` hace la verificación de null (si es null, no ejecuta el bloque), `let` provee el objeto como `it` ya garantizado como no-null dentro del bloque, y Smart Cast hace que dentro del `let` el tipo sea non-nullable. Es conciso, seguro y expresivo."
  },
  {
    "week": 3,
    "question": "¿Qué es una Extension Function en Kotlin y cómo beneficia la arquitectura de software limpia?",
    "options": [
      "Una función que extiende la clase base de todas las clases en Kotlin (`Any`).",
      "Permite 'agregar' nuevas funciones a tipos existentes (incluso cerrados como `String` o `Int`) sin modificar su código fuente ni usar herencia.",
      "Una función que puede acceder a los miembros privados de otra clase.",
      "Una función que se ejecuta automáticamente cuando el objeto es destruido por el GC."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Las Extension Functions te permiten escribir `fun String.esPalindromo(): Boolean = this == this.reversed()` y luego llamar `\"ana\".esPalindromo()`. No modificas la clase `String` (que es cerrada), solo 'pegas' comportamiento útil. Esto mantiene las clases de dominio limpias y agrupa utilitarios cerca del tipo al que pertenecen."
  },
  {
    "week": 3,
    "question": "Dado el siguiente código, ¿qué imprime el programa?\n\n```kotlin\ndata class Usuario(val nombre: String, val edad: Int)\nval u1 = Usuario(\"Ana\", 30)\nval u2 = u1.copy(edad = 31)\nprintln(u1 == u2)\nprintln(u1 === u2)\n```",
    "options": [
      "`true` y `true` porque `copy()` crea un objeto idéntico en todos los aspectos.",
      "`false` y `false` porque `u1` y `u2` son objetos completamente diferentes.",
      "`false` y `false`: `==` compara estructuralmente (nombre diferente en edad) y `===` compara referencia (son objetos distintos).",
      "`false` porque `u1 == u2` compara valores (edad 30 ≠ 31) y `false` porque `u1 === u2` compara referencias (son instancias distintas)."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es d. `u1 == u2` usa el `equals()` autogenerado que compara TODOS los campos del constructor: `nombre=\"Ana\"` es igual, pero `edad=30` ≠ `edad=31`, por lo tanto `false`. `u1 === u2` compara referencias de objeto: son instancias distintas en memoria (copy() crea un nuevo objeto), por lo tanto también `false`."
  },
  {
    "week": 3,
    "question": "En el ejemplo del material de la Semana 3 sobre la 'Actividad 1: El dilema del estado de Red', ¿qué estructura de Kotlin es la respuesta idiomática para modelar 4 estados mutuamente excluyentes (Inactivo, Descargando, Exitoso con User, Error con código y mensaje)?",
    "options": [
      "Un `enum class` con 4 valores.",
      "Una interfaz con 4 clases que la implementan.",
      "Una `sealed class` con subclases, algunas como `data object` y otras como `data class` con datos asociados.",
      "Un `when` con 4 ramas que evalúa una variable `String`."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. La solución idiomática es: `sealed class NetworkState { data object Idle : NetworkState(); data object Downloading : NetworkState(); data class Success(val user: User) : NetworkState(); data class Error(val code: Int, val message: String) : NetworkState() }`. Cada estado tiene la estructura exacta que necesita: los simples son `data object` y los con datos son `data class`."
  },
  {
    "week": 3,
    "question": "¿Cuáles son los 3 beneficios MEDIBLES de migrar de código imperativo Java a código funcional Kotlin en proyectos Android modernos, según el material?",
    "options": [
      "Mayor velocidad de compilación, menor tamaño del APK y mayor compatibilidad con iOS.",
      "Mayor concisión (menos código repetitivo), mejor inmutabilidad (menos estados mutables) y mayor testabilidad (funciones puras predecibles).",
      "Soporte automático para multi-hilo, animaciones más fluidas y menor consumo de batería.",
      "Mejor integración con Play Store, actualizaciones automáticas de dependencias y CI/CD más eficiente."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Los beneficios observados en la práctica al migrar a código funcional Kotlin son: Mayor concisión (menos líneas, código más expresivo), Mejor inmutabilidad (reducción de estados mutables y efectos colaterales), Mayor testabilidad (funciones puras con resultado predecible), y además: Legibilidad en Compose y prevención de NPEs."
  },
  {
    "week": 3,
    "question": "¿Qué es la 'destructuración' en Kotlin y cómo se relaciona con el método `componentN()` de las `data class`?",
    "options": [
      "Es la técnica de eliminar campos innecesarios de una data class para reducir su tamaño en memoria.",
      "Permite asignar los campos de una data class a variables individuales en una sola línea: `val (nombre, edad) = usuario`. Internamente usa los métodos `component1()`, `component2()`, etc., generados automáticamente.",
      "Es la capacidad de convertir una data class a un Map<String, Any> automáticamente.",
      "Es el proceso de deserializar un JSON en una data class usando reflection."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La destructuración: `val (nombre, edad) = usuario` es equivalente a `val nombre = usuario.component1(); val edad = usuario.component2()`. Los métodos `componentN()` son generados por el compilador en orden de declaración del constructor. Esto es muy útil en `for` loops: `for ((nombre, edad) in listaUsuarios) { ... }`."
  },
  {
    "week": 3,
    "question": "¿Cuál es la diferencia entre `data object` y `data class` en el contexto de sealed classes para modelar estados?",
    "options": [
      "No hay diferencia; ambos son sinónimos en Kotlin 2.0.",
      "`data object` se usa para estados SIN datos asociados (ej: `Inactivo`, `Cargando`) y `data class` para estados CON datos (ej: `Success(val user: User)`). `data object` genera `toString()` y `equals()` pero no `copy()` ni `componentN()`.",
      "`data class` siempre necesita al menos un parámetro; `data object` puede estar vacío.",
      "`data object` es un singleton compartido mientras que `data class` crea una nueva instancia cada vez."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. `data object Idle : NetworkState()` es perfecta para estados sin información adicional: hay exactamente UNA instancia (singleton) con un buen `toString()`. `data class Success(val user: User)` es para estados que LLEVAN datos: puedes crear múltiples instancias con diferentes usuarios. Juntos permiten modelar el ciclo de vida de una operación de red de forma expresiva."
  },
  {
    "week": 3,
    "question": "Según la 'Actividad 2: Refactorización a Funcional', ¿cómo se transforma la función imperativa Java `filterEvens(List<Integer> numbers)` a una versión idiomática Kotlin?",
    "options": [
      "`fun filterEvens(numbers: List<Int>): List<Int> { val result = mutableListOf<Int>(); for (n in numbers) { if (n % 2 == 0) result.add(n) }; return result }`",
      "`fun filterEvens(numbers: List<Int>) = numbers.filter { it % 2 == 0 }`",
      "`fun filterEvens(numbers: List<Int>): List<Int> = numbers.where { n -> n % 2 == 0 }`",
      "`fun filterEvens(numbers: List<Int>) = numbers.select { even -> even % 2 == 0 }`"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La transformación demuestra el poder de la programación funcional en Kotlin: 12 líneas de Java imperativo se convierten en UNA línea con `numbers.filter { it % 2 == 0 }`. `filter` es una función de orden superior que recibe una lambda predicado y retorna una nueva lista con los elementos que cumplen la condición."
  },
  {
    "week": 3,
    "question": "En la 'Actividad 3: Salvando el NullPointerException', ¿cuál es el patrón completo recomendado para manejar un `nombre: String?` de una API de forma segura?",
    "options": [
      "`val nombreSeguro = nombre!!; actualizarUI(nombreSeguro)`",
      "`if (nombre != null) { actualizarUI(nombre) } else { actualizarUI(\"Desconocido\") }`",
      "`nombre?.let { nameSafe -> println(nameSafe.length); actualizarUI(nameSafe) }` - dentro del bloque, `nameSafe` ya es `String` (non-null).",
      "`try { actualizarUI(nombre!!) } catch (e: NullPointerException) { actualizarUI(\"Error\") }`"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. `nombre?.let { nameSafe -> ... }` combina: `?.` que solo ejecuta el bloque si `nombre` no es null, `let` que pasa el valor como `nameSafe` (con un nombre explícito para claridad), y dentro del bloque `nameSafe` es automáticamente de tipo `String` (no `String?`) gracias al Smart Cast. Es el patrón idiomático completo."
  },
  {
    "week": 3,
    "question": "¿Cómo define el material de la Semana 3 el concepto de 'Programación Funcional' en el contexto de Kotlin para Android?",
    "options": [
      "Es un paradigma donde todo el código se organiza en funciones sin estado mutable de ningún tipo.",
      "Las funciones son 'ciudadanos de primera clase': pueden almacenarse en variables, pasarse como parámetros y devolverse como resultados, igual que cualquier otro valor.",
      "Es el estilo de programación que usa exclusivamente lambdas y evita completamente el uso de clases.",
      "Es un subconjunto de la OOP que se aplica solo a las capas de datos (Repository y DataSource)."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La Programación Funcional en Kotlin se centra en que las funciones son valores de primera clase. Esto habilita: pasar comportamiento como argumento (Higher-Order Functions), transformar datos con funciones puras (map, filter, reduce), componer funciones y evitar estados mutables. No es exclusiva; en Kotlin coexiste con OOP."
  },
  {
    "week": 3,
    "question": "¿Cuál es el resumen final de la Semana 3 respecto a lo que cada concepto aporta al desarrollo Android profesional?",
    "options": [
      "Data Classes hacen el código más lento pero seguro; Sealed Classes aumentan la complejidad; Extension Functions son opcionales.",
      "Data Classes reducen el código redundante de Java, Sealed Classes hacen los estados más seguros y Extension Functions permiten inyectar comportamiento de forma elegante.",
      "Data Classes reemplazan las bases de datos, Sealed Classes reemplazan las interfaces y Extension Functions reemplazan la herencia.",
      "Data Classes son para el backend, Sealed Classes para la UI y Extension Functions para las pruebas unitarias."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Este es el resumen explícito del material: 'Kotlin reduce el código redundante de Java (Data Classes), hace los estados más seguros (Sealed Classes) y permite inyectar comportamiento de forma elegante (Extension Functions).' Cada herramienta tiene un rol específico y complementario en la arquitectura Android moderna."
  },
  {
    "week": 3,
    "question": "¿Qué es el 'Embudo de Saneamiento de Datos' mencionado en el material y cómo se relaciona con los conceptos de la Semana 3?",
    "options": [
      "Es una función de la base de datos Room que limpia los datos antes de guardarlos.",
      "Es el proceso arquitectónico donde los datos crudos (de red/DB) pasan por filtros de Inmutabilidad (Data Classes) y Null Safety antes de llegar como 'UI State' puro a la capa de presentación.",
      "Es el sistema de caché que filtra peticiones duplicadas de red en Retrofit.",
      "Es el patrón de diseño Repository que separa las fuentes de datos de la lógica de negocio."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. El 'Embudo de Saneamiento de Datos' es el concepto arquitectónico central que integra todo: los datos crudos de APIs o bases de datos entran al sistema → son modelados en Data Classes (inmutabilidad) → pasan por verificaciones de Null Safety → son procesados con funciones funcionales (map, filter) → llegan a la UI como un 'UI State' limpio, inmutable y seguro."
  },
  {
    "week": 3,
    "question": "Al integrar OOP (Programación Orientada a Objetos) y PF (Programación Funcional) en Kotlin para Android, ¿cómo se posicionan entre sí según el material?",
    "options": [
      "Son paradigmas opuestos e incompatibles; los proyectos Android deben elegir uno u otro.",
      "OOP y PF se complementan: OOP modela entidades y arquitecturas mientras PF transforma los datos y pasa comportamiento de forma segura, inmutable y declarativa.",
      "La PF ha reemplazado completamente a la OOP desde la llegada de Jetpack Compose.",
      "OOP se usa solo en la capa de datos y PF solo en la capa de presentación."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Kotlin es pragmático: no obliga a elegir un paradigma. La OOP es excelente para modelar entidades del dominio (User, Product, Order) con sus relaciones y jerarquías. La PF es excelente para transformar datos de forma predecible y libre de efectos colaterales. En Android moderno, usas OOP para estructurar y PF para procesar datos."
  },
  {
    "week": 3,
    "question": "¿Qué ventaja específica ofrecen las Extension Functions sobre la herencia tradicional al añadir comportamiento a tipos existentes?",
    "options": [
      "Las extension functions son más rápidas en ejecución que los métodos heredados.",
      "Permiten agregar comportamiento a CUALQUIER tipo, incluyendo clases finales (cerradas) como String o las de Android SDK, sin modificar el código fuente ni crear subclases.",
      "Las extension functions pueden acceder a miembros privados de la clase original.",
      "Permiten sobrescribir métodos existentes de una clase, algo imposible con herencia si la clase es final."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La herencia tiene una limitación: solo puedes heredar de clases no-finales (open en Kotlin). String, Int, clases del SDK de Android son `final` (o equivalentes). Las extension functions evitan este problema: puedes agregar `fun String.capitalizeWords()` a String sin modificar su código y sin herencia. Esto mantiene las clases cerradas (principio open/closed)."
  },
  {
    "week": 3,
    "question": "¿Cuál es la motivación principal para usar `sealed class` en el modelado del ciclo de vida de una operación de red en Android?",
    "options": [
      "Las sealed classes son más eficientes en red porque reducen el tamaño de los payloads JSON.",
      "Permiten representar todos los estados posibles de una operación (Cargando, Éxito, Error) en una única jerarquía tipada, y el compilador te obliga a manejarlos todos, eliminando estados no manejados.",
      "Las sealed classes se integran nativamente con Retrofit para parsear respuestas HTTP.",
      "Permiten cancelar operaciones de red en progreso cuando el usuario abandona la pantalla."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. El ciclo de vida de una llamada de red tiene estados discretos: Inactivo → Cargando → Éxito(datos) o Error(código, mensaje). Una `sealed class NetworkResult` modela exactamente esto. Cuando en la UI haces `when(resultado) { is Success -> ... is Error -> ... }`, el compilador verifica que manejas TODOS los estados, previniendo UIs inconsistentes o crashes."
  },
  {
    "week": 3,
    "question": "¿Cuál es la diferencia técnica entre `companion object` y `object` de nivel superior en Kotlin?",
    "options": [
      "No hay diferencia; ambos son singletons equivalentes.",
      "`companion object` está asociado a una clase específica (similar a miembros estáticos de Java) y tiene acceso a sus miembros privados. `object` de nivel superior es un singleton global independiente.",
      "`companion object` puede tener múltiples instancias, mientras que `object` solo tiene una.",
      "`companion object` solo puede contener constantes, mientras que `object` puede contener funciones y estado."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. El `companion object` vive dentro de una clase (`class MiClase { companion object { val CONSTANTE = 1 } }`) y tiene acceso a los miembros privados de esa clase, similar a los miembros `static` de Java. Un `object` de nivel superior (`object MiSingleton`) es completamente independiente, accesible globalmente como su propio tipo."
  },
  {
    "week": 3,
    "question": "¿Cuál de las siguientes Scope Functions es la ÚNICA que NO se llama con el operador punto (`.`) sobre el objeto?",
    "options": [
      "`let`",
      "`apply`",
      "`also`",
      "`with`"
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es d. `with` es la única Scope Function que se llama como función independiente recibiendo el objeto como argumento: `with(usuario) { println(nombre) }`. Las demás (`let`, `run`, `apply`, `also`) se llaman como extensiones del objeto con punto: `usuario.let { ... }`, `usuario.apply { ... }`, etc."
  },
  {
    "week": 3,
    "question": "¿Qué aplicación práctica tiene el método `copy()` de data class en la arquitectura de Jetpack Compose con estados de UI?",
    "options": [
      "Permite duplicar componentes de UI para mostrar múltiples instancias del mismo estado.",
      "Serializa el estado de UI a SharedPreferences para persistencia entre sesiones.",
      "Permite crear una nueva versión del estado de UI con solo los campos modificados: `_uiState.value = _uiState.value.copy(isLoading = false, data = result)`, activando la recomposición de Compose.",
      "Crea una copia de seguridad del estado anterior para implementar funcionalidad de 'Deshacer'."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es c. En el patrón UDF (Unidirectional Data Flow) de Compose, el estado de UI es una data class inmutable. Cuando algo cambia, no modificas el objeto existente sino que creas uno nuevo con `copy()`. Esto asigna una nueva referencia al `StateFlow`, Compose detecta el cambio de referencia y actualiza solo los composables que observan los campos modificados."
  },
  {
    "week": 3,
    "question": "¿Por qué es preferible usar `apply` sobre repetir el nombre del objeto para configurarlo?",
    "options": [
      "Porque `apply` es más rápido en ejecución al usar acceso directo a campos.",
      "Porque evita la repetición del nombre del objeto en cada configuración: en lugar de `usuario.email = ...; usuario.telefono = ...; usuario.activo = ...`, usas `usuario.apply { email = ...; telefono = ...; activo = ... }`, siendo más conciso y legible.",
      "Porque `apply` garantiza que la configuración se aplica de forma atómica (all-or-nothing).",
      "Porque `apply` permite configurar objetos de forma asíncrona sin bloquear el hilo principal."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La ventaja práctica de `apply` es la concisión: dentro del bloque `apply`, `this` es el objeto, por lo que puedes acceder a sus propiedades directamente sin repetir el nombre. Esto es especialmente valioso al construir objetos complejos con muchos campos, haciendo el código más limpio y fácil de leer."
  }
];
