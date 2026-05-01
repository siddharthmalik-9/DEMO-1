# Notes Sharing Web App

Simple static web app for browsing and downloading PDF notes by subject.

## Folder structure

```
.
├── app.js
├── index.html
├── styles.css
└── subjects
    ├── history
    │   └── .gitkeep
    ├── math
    │   └── .gitkeep
    └── science
        └── .gitkeep
```

## Usage

1. Put your PDF files inside the correct subject folder under `subjects/`.
2. Update `notesData` in `app.js` with note title and file path.
3. Open `index.html` in a browser.
