console.log("Hello Class")
const titleNote = document.getElementById('notetitle');
const note = document.getElementById('content');
const button = document.getElementById('submit');


button.addEventListener('click', async () => {
    const title = titleNote.value;
    const content = note.value;
    if (!title || !content) {
        console.error('Title or content is missing');
        return;
    }
    const res = await api.createNote({
        title,
        content
    })
    console.log(res)
    titleNote.value = "";
    note.value = "";
})
