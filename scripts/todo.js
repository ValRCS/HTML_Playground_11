console.log("Started TODO app!");

const addBtn = document.getElementById('todo-add');
const todoList = document.getElementById('todo-list');
const resourceUrl = 'https://jsonplaceholder.typicode.com/todos';

let jobId = 0;



addBtn.onclick = () => {
    console.log("You Clicked ADD");
    //so I pass an object with a single property desc and the value of our input
    addJob({
        title: document.getElementById('todo-input').value,
        id: jobId
    });
    jobId++;
}

function addJob(job) {
    const jobCont = document.createElement('div');
    jobCont.id = 'job-' + job.id;

    const jobDesc = document.createElement('span');
    jobDesc.innerText = job.title;

    jobCont.appendChild(jobDesc);

    const delBut = document.createElement('button');
    delBut.innerText = "Delete Job No." + job.id;
    delBut.value = job.id;
    jobCont.appendChild(delBut);
    delBut.onclick = (event) => {
        console.log("I want to delete job no:" + event.target.parentNode.id);
        const parent = event.target.parentNode;
        const grandParent = event.target.parentNode.parentNode;
        grandParent.removeChild(parent);

    }

    const jobDone = document.createElement('input');
    jobDone.setAttribute("type", "checkbox");
    jobDone.onchange = (ev) => {
        console.log("Changed me:" + ev.target.checked);
        if (ev.target.checked) {
            ev.target.parentNode.querySelector('span').classList.add('finished');
            //if we want the first child then we can use below
            // ev.target.parentNode.childNodes[0].classList.add('finished');
        } else {
            ev.target.parentNode.querySelector('span').classList.remove('finished');
        }

    }


    jobCont.appendChild(jobDone);



    todoList.appendChild(jobCont);
}

function destroyAllChildren(parent) {
    console.log("Deleting everything");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    jobId = 0;
}

document.getElementById('delete-all').onclick = () => {
    destroyAllChildren(todoList);
};

function init() {
    console.log('Init');
    //TODO add init code later
}

function addHandlers() {
    document.getElementById('show-active').onclick = (event) => {
        if (event.target.value === "all") {
            console.log("Showing Only Active Jobs");
            const finishedJobs = todoList.querySelectorAll('span.finished');
            for (let job of finishedJobs) {
                job.parentNode.style.display = "none";
            }
            event.target.innerText = "Show All";
            event.target.value = "finished";
        } else {
            console.log("Showing All Jobs");
            const finishedJobs = todoList.querySelectorAll('span.finished');
            for (let job of finishedJobs) {
                job.parentNode.style.display = "block";
            }
            event.target.innerText = "Show Only Unfinished Jobs";
            event.target.value = "all";
        }

    }

    document.getElementById('fetch-jobs').onclick = () => {
        console.log("Fetching Jobs");
        fetch(resourceUrl)
            .then(response => response.json())
            .then(json => processJSON(json))
    }

    document.getElementById('startRange').onchange = (ev) => {
        document.getElementById('startDisp').value = ev.target.value;
    }
    document.getElementById('endRange').onchange = (ev) => {
        document.getElementById('endDisp').value = ev.target.value;
    }
}

function processJSON(json) {
    console.log(json);
    //add a single element

    // addJob(json[0]);

    //add all
    const start = document.getElementById('startRange').value;
    const end = document.getElementById('endRange').value;
    for (let i = start; i < end; i++) {
        addJob(json[i]);
    }

    //new syntax for looping through all elements in a collection(array here)
    // for (let job of json) {
    //     addJob(job);
    // }
}

function main() {
    console.log("Running main");
    init();
    addHandlers();
}

window.onload = main;

