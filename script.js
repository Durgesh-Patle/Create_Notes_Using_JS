const notesContainer = document.getElementsByClassName(".notes-container");
        const createBtn = document.getElementsByClassName(".btn");
        let notes = document.querySelectorAll(".input-box");

        createBtn.addEventListener("click", function() {
            let inputBox = document.createElement("p");
            let img = document.createElement("img");
            inputBox.className = "input-box";
            inputBox.setAttribute("contenteditable", "true");
            img.src = "delete.png";
            notesContainer.appendChild(inputBox).appendChild(img);
        })