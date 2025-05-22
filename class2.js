document.addEventListener("DOMContentLoaded", function () {
    const blockSelect = document.getElementById("block");
    const addClassroom = document.getElementById("addClassroom");
    const editClassroom = document.getElementById("editClassroom");
    const deleteClassroom = document.getElementById("deleteClassroom");

    // Function to display the selected block's classrooms
    function showSelectedBlock() {
        document.querySelectorAll(".classroom-grid").forEach(grid => grid.style.display = "none");
        const selectedBlock = blockSelect.options[blockSelect.selectedIndex].dataset.target;
        document.getElementById(selectedBlock).style.display = "grid";
    }

    blockSelect.addEventListener("change", showSelectedBlock);
    showSelectedBlock(); // Show initial selection

    // Function to add a classroom
    addClassroom.addEventListener("click", function () {
        const selectedBlock = blockSelect.options[blockSelect.selectedIndex].dataset.target;
        const blockSection = document.getElementById(selectedBlock);
        
        const classroomNumber = prompt("Enter classroom number (e.g., AERO-101):");
        if (classroomNumber) {
            const newCard = document.createElement("div");
            newCard.classList.add("classroom-card");
            newCard.innerHTML = `
                <h3>${classroomNumber}</h3>
                <p>Capacity: 60</p>
                <p>Status: <span class="status-not-booked">Not Booked</span></p>
            `;
            blockSection.appendChild(newCard);
        }
    });

    // Function to edit a classroom
    editClassroom.addEventListener("click", function () {
        const selectedBlock = blockSelect.options[blockSelect.selectedIndex].dataset.target;
        const blockSection = document.getElementById(selectedBlock);
        const classrooms = blockSection.querySelectorAll(".classroom-card");

        if (classrooms.length === 0) {
            alert("No classrooms to edit!");
            return;
        }

        const classroomToEdit = prompt("Enter classroom number to edit (e.g., AERO-101):");
        let found = false;

        classrooms.forEach(classroom => {
            if (classroom.querySelector("h3").innerText === classroomToEdit) {
                const newNumber = prompt("Enter new classroom number:");
                if (newNumber) {
                    classroom.querySelector("h3").innerText = newNumber;
                }
                found = true;
            }
        });

        if (!found) {
            alert("Classroom not found!");
        }
    });

    // Function to delete a classroom
    deleteClassroom.addEventListener("click", function () {
        const selectedBlock = blockSelect.options[blockSelect.selectedIndex].dataset.target;
        const blockSection = document.getElementById(selectedBlock);
        const classrooms = blockSection.querySelectorAll(".classroom-card");

        if (classrooms.length === 0) {
            alert("No classrooms to delete!");
            return;
        }

        const classroomToDelete = prompt("Enter classroom number to delete (e.g., AERO-101):");
        let found = false;

        classrooms.forEach(classroom => {
            if (classroom.querySelector("h3").innerText === classroomToDelete) {
                blockSection.removeChild(classroom);
                found = true;
            }
        });

        if (!found) {
            alert("Classroom not found!");
        }
    });
});
