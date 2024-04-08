const notesContainer = document.querySelector('.notes-container');
const createButton = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');
let icon = document.getElementById('moon');

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains('dark-theme')) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
}

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createButton.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = 'images/delete.png';
  notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === 'P') {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
      note.onkeyup = function () {
        updateStorage();
      }
    })
  }
})