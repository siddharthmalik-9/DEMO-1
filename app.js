const subjectsSection = document.getElementById("subjects-section");
const notesSection = document.getElementById("notes-section");
const subjectsList = document.getElementById("subjects-list");
const notesList = document.getElementById("notes-list");
const notesTitle = document.getElementById("notes-title");
const backBtn = document.getElementById("back-btn");
const errorBox = document.getElementById("error-box");

let notesData = {};

async function loadNotesData() {
  try {
    const response = await fetch("notes.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Failed to load notes.json");
    }

    notesData = await response.json();
    renderSubjects();
  } catch (error) {
    showError(
      "Could not load notes metadata. Make sure you are running a local server and that notes.json exists."
    );
    console.error(error);
  }
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.remove("hidden");
}

function renderSubjects() {
  subjectsList.innerHTML = "";
  const subjects = Object.keys(notesData);

  if (subjects.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = "No subjects available yet.";
    subjectsList.appendChild(empty);
    return;
  }

  subjects.forEach((subject) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    const count = notesData[subject].length;

    button.className = "subject-btn";
    button.innerHTML = `<span>${subject}</span><span class="badge">${count} notes</span>`;
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

loadNotesData();
