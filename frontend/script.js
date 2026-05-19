// ELEMENTS

const addTaskBtn =
document.getElementById("addTaskBtn");

const tasksContainer =
document.getElementById("tasksContainer");


// LOAD TASKS WHEN PAGE LOADS

window.onload = fetchTasks;


// FETCH TASKS

async function fetchTasks(){

    tasksContainer.innerHTML = "";

    const response =
    await fetch("http://localhost:5000/tasks");

    const tasks =
    await response.json();

    tasks.forEach(task => {

        createTaskCard(task);
    });
}


// ADD TASK

addTaskBtn.addEventListener("click",
async () => {

    const title =
    document.getElementById("title").value;

    const description =
    document.getElementById("description").value;

    if(title === "" || description === ""){

        alert("Please Fill All Fields");

        return;
    }

    await fetch(
        "http://localhost:5000/add-task",

        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                title,
                description
            })
        }
    );

    document.getElementById("title").value = "";

    document.getElementById("description").value = "";

    fetchTasks();
});


// CREATE TASK CARD

function createTaskCard(task){

    const taskCard =
    document.createElement("div");

    taskCard.classList.add("task-card");

    if(task.status === "Completed"){

        taskCard.classList.add("completed");
    }

    taskCard.innerHTML = `

        <div class="task-content">

            <h3>${task.title}</h3>

            <p>${task.description}</p>

            <small>Status:
            ${task.status}</small>

        </div>

        <div class="task-buttons">

            <button class="complete-btn">

                Complete

            </button>

            <button class="delete-btn">

                Delete

            </button>

        </div>

    `;

    // COMPLETE BUTTON

    const completeBtn =
    taskCard.querySelector(".complete-btn");

    completeBtn.addEventListener("click",
    async () => {

        await fetch(

            `http://localhost:5000/complete-task/${task.id}`,

            {
                method:"PUT"
            }
        );

        fetchTasks();
    });

    // DELETE BUTTON

    const deleteBtn =
    taskCard.querySelector(".delete-btn");

    deleteBtn.addEventListener("click",
    async () => {

        await fetch(

            `http://localhost:5000/delete-task/${task.id}`,

            {
                method:"DELETE"
            }
        );

        fetchTasks();
    });

    tasksContainer.appendChild(taskCard);
}
