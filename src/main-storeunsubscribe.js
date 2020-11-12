const unsubscribe = store.subscribe(() => {
	renderNotes();
});

unsubscribe();
