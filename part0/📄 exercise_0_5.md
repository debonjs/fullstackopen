sequenceDiagram
participant browser
participant server

    Note right of browser: El usuario accede a la URL de la versión SPA
    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>-browser: HTML document


    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>-browser: archivo css


    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->>-browser: archivo javascript


    Note right of browser: El navegador ejecuta el archivo javascript y devuelve el archivo json [notes:{...}]
    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>-browser: [{ "content": "Nueva nota", "date": "2026-10-19" }, ... ]

    Note right of browser: El navegador ejecuta la función callback y dibuja las notas en la pantalla
