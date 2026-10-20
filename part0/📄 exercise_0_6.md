sequenceDiagram
participant browser
participant server

    Note right of browser: El usuario escribe una nota en el campo de texto y hace clic en Save
    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note left of server: El servidor guarda la nueva nota y ordena redirigir
    server-->>-browser: HTTP status 302 (Redirect to /notes)

    Note right of browser: El navegador sigue la redirección y actualiza el componente sin recargar la pagina completa
    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>-browser: actualizar el vitual DOM

    Note right of browser: El navegador ejecuta el código JavaScript que solicita el JSON
    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>-browser: [{ "content": "tu nueva nota", "date": "2026-10-19" }, ... ]
