const notesData = {
  Math: [
    { title: "Algebra Basics", file: "subjects/math/algebra-basics.pdf" },
    { title: "Geometry Essentials", file: "subjects/math/geometry-essentials.pdf" }
  ],
  Science: [
    { title: "Physics Formulas", file: "subjects/science/physics-formulas.pdf" },
    { title: "Chemistry Quick Notes", file: "subjects/science/chemistry-quick-notes.pdf" }
  ],
  History: [
    { title: "World War II Overview", file: "subjects/history/world-war-2-overview.pdf" }
  ]
};

const subjectsSection = document.getElementById("subjects-section");
const notesSection = document.getElementById("notes-section");
const subjectsList = document.getElementById("subjects-list");
const notesList = document.getElementById("notes-list");
const notesTitle = document.getElementById("notes-title");
const backBtn = document.getElementById("back-btn");

function renderSubjects() {
  subjectsList.innerHTML = "";

  Object.keys(notesData).forEach((subject) => {
    const item = document.createElement("li");
    const button = document.createElement("button");

    button.className = "subject-btn";
    button.textContent = subject;
    button.addEventListener("click", () => renderNotes(subject));

    item.appendChild(button);
    subjectsList.appendChild(item);
  });
}

function renderNotes(subject) {
  const notes = notesData[subject] || [];

  notesTitle.textContent = `${subject} Notes`;
  notesList.innerHTML = "";

  if (notes.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = "No notes available yet.";
    notesList.appendChild(empty);
  } else {
    notes.forEach((note) => {
      const item = document.createElement("li");
      item.className = "note-item";

      const title = document.createElement("span");
      title.textContent = note.title;

      const link = document.createElement("a");
      link.href = note.file;
      link.download = "";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      const downloadBtn = document.createElement("button");
      downloadBtn.className = "download-btn";
      downloadBtn.textContent = "Download PDF";

      link.appendChild(downloadBtn);
      item.appendChild(title);
      item.appendChild(link);
      notesList.appendChild(item);
    });
  }

  subjectsSection.classList.add("hidden");
  notesSection.classList.remove("hidden");
}

backBtn.addEventListener("click", () => {
  notesSection.classList.add("hidden");
  subjectsSection.classList.remove("hidden");
});

renderSubjects();
