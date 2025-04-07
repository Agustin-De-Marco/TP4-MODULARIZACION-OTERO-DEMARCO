# TP4 - Modularización y Uso de Módulos en Node.js

Este proyecto contiene una serie de ejercicios desarrollados en Node.js como parte del Trabajo Práctico 4 (TP4) de la materia Desarrollo de Aplicaciones Informáticas.

## Estructura

```
TP4-MODULARIZACION
│
├── modules/
│   ├── ej1.js
│   ├── ej2.js
│   ├── ej3.js
│   ├── ej4.js
│   ├── ej5.js
│   ├── ej6.js
│   └── ej7.js
│
├── entrada.txt
├── salida.txt (se genera automáticamente)
├── index.js
├── package.json
└── package-lock.json
```

## Ejercicios

### EJ04
Usando el módulo interno `fs`, copia el contenido de un archivo a otro.
```js
copiar("./entrada.txt", "./salida.txt");
```

### EJ05
Usando el módulo interno `url`, parsea una URL y devuelve un objeto con host, pathname y parámetros.
```js
parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
```

### EJ06
Versión del EJ05 con manejo de excepciones mediante `try/catch`.

### EJ07
Usa la librería `country-list-with-dial-code` para obtener la moneda de un país a partir del código.
```bash
npm install country-list-with-dial-code
```

```js
obtenerMoneda("AR"); // Devuelve: "Peso Argentino"
```

## Autor

Felipe Otero — Instituto ORT Yatay (4to Informática)

---