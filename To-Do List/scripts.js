document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('downloadBtn').addEventListener('click', downloadPDF);

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if(taskText !== ""){
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');

        const checkbox = document.createElement('div');
        checkbox.className = 'checkbox';
        checkbox.addEventListener('click', ()=>{
            checkbox.classList.toggle('checked');
            taskTextElement.classList.toggle('completed');
        });

        const taskTextElement = document.createElement('span');
        taskTextElement.className = 'task-text';
        taskTextElement.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', ()=>{
            taskList.removeChild(listItem);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskTextElement);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        taskInput.value = "";
    }
}

function downloadPDF(){
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF;

    const tasks = document.querySelectorAll('#taskList li');
    let yPosition = 20;

    tasks.forEach((task, index) => {
        const taskText = task.querySelector('.task-text').textContent;
        const isCompleted = task.querySelector('.task-text').classList.contains('completed');
        const checkbox = isCompleted ? '[done]' : '[ ]';

        doc.text(checkbox + taskText, 10, yPosition);
        yPosition += 10;
    });

    doc.save('to-do-list.pdf');
}