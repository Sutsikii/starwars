const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
closeIcon = popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

const notes = JSON.parse(localStorage.getItem("notes") || "[]")

addBox.addEventListener("click", () =>
{
    popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () =>
{
    titleTag.value = "";
    descTag.value = "";
    popupBox.classList.remove("show");
});

function showNotes()
{
    document.querySelectorAll(".note").forEach(note => note.remove());
    notes.forEach((note) =>
    {
        let liTag = `        
        <li class="note">
            <div class="details">
                <p>${note.title}</p>
                <span>${note.description}</span>
            </div>
            <div class="bottom-content">
                <span>${note.date}</span>
                <div class="settings">
                    <i class="uil uil-ellipsis-h"></i>
                    <ul class="menu">
                        <li><i class="uil uil-pen"></i>Editer</li>
                        <li><i class="uil uil-trash"></i>Supprimer</li>
                    </ul>
                </div>
            </div>
        </li>`;
        addBox.insertAdjacentHTML("afterend", liTag);
    });
}
showNotes();

addBtn.addEventListener("click", e =>
{
    e.preventDefault();
    let noteTitle = titleTag.value,
    noteDesc = descTag.value;

    if(noteTitle || noteDesc)
    {
        let dateObj = new Date(),
        month = months[dateObj.getMonth()],
        day = dateObj.getDate(),
        year = dateObj.getFullYear();

        let noteInfo = 
        {
            title: noteTitle,
            description: noteDesc,
            date : `${day} ${month} ${year}`
        }

        notes.push(noteInfo); //Ajoute la nouvelle note dans notes
        localStorage.setItem("notes", JSON.stringify(notes));

        showNotes();

    }

});