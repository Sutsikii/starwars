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
    popupBox.classList.remove("show");
});

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

    }

});