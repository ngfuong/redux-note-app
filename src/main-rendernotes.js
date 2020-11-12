function renderNotes() {
	let notes = store.getState().notes;
	
	notesUList.innerHTML = '';
	notes.map((note, index) => {
		let noteItem = `
			<li>
			<b>${note.title}</b>
			<br />
			<span>${note.content}</span>
			</li>
			`;
		notesUList.innerHTML += noteItem;
	});
	setDeleteNoteButtonsEventListeners();
}
