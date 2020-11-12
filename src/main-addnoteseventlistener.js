addNoteForm.addEventListener('submit', (e) => {
	e.preventDefault();
	
	let title = addNoteTitle.value;
	let content = addNoteContent.value;
	store.dispatch(addNote(title, content));
});
