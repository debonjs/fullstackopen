sequenceDiagram
participant browser
participant server

    Note right of browser: El usuario escribe una nota en el campo de texto y hace clic en Save

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note left of server: El servidor guarda la nueva nota y ordena redirigir
    server-->>browser: HTTP status 302 (Redirect to /notes)
    deactivate server

    Note right of browser: El navegador sigue la redirección y recarga la página

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: El navegador ejecuta el código JavaScript que solicita el JSON

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "tu nueva nota", "date": "2026-10-19" }, ... ]
    deactivate server

    Note right of browser: El navegador ejecuta la función callback y renderiza las notas actualizadas
