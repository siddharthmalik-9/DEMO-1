# Notes Sharing Web App

Simple static web app for browsing and downloading PDF notes by subject.

## Folder structure

```
.
├── app.js
├── index.html
├── notes.json
├── styles.css
└── subjects
    ├── history
    │   └── world-war-2-overview.pdf
    ├── math
    │   ├── algebra-basics.pdf
    │   └── geometry-essentials.pdf
    └── science
        ├── chemistry-quick-notes.pdf
        └── physics-formulas.pdf
```

## Usage

1. Put your PDF files inside the right subject folder under `subjects/`.
2. Update `notes.json` with title and file path entries.
3. Start a local static server from project root, for example:
   - `python3 -m http.server 8000`
4. Open `http://localhost:8000` in your browser.
