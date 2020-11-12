// ----------- HTML REFERENCES ----------------
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];

// ------------ REDUX -----------------------
function deleteNote(index){
//	console.log(index);
}

function renderNotes() {
	setDeleteNoteButtonEventListeners();
}

//event listener
addNoteForm.addEventListener('submit',(e) => {
	e.preventDefault();
//	console.log('Title:', addNoteTitle.value, 'Content', addNoteContent.valie);
});

function setDeleteNoteButtonsEventListenders(){
	let buttons = document.querySelectorAll('ul#notes li button');
	for (let button of buttons) {
		button.addEventListener('click', () => {
			deleteNote(button.dataset.id);
		});
	}
}

//render initial Notes
renderNotes();
