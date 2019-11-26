console.log("Started TODO app!");

const addBtn = document.getElementById('todo-add');
const todoList = document.getElementById('todo-list');
let jobId = 0;

addBtn.onclick = () => {
    console.log("You Clicked ADD");
    const jobCont = document.createElement('div');
    jobCont.id = 'job-' + jobId;

    const jobDesc = document.createElement('span');
    jobDesc.innerText = document.getElementById('todo-input').value;

    jobCont.appendChild(jobDesc);

    const delBut = document.createElement('button');
    delBut.innerText = "Delete Job No." + jobId;
    delBut.value = jobId;
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


    jobId++;
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

function main() {
    console.log("Running main");
    console.log("Destroying all children of TODO list");
    destroyAllChildren(todoList);
}
window.onload = main;

// const container = document.querySelector('.container');
// console.log("container tag" + container.tagName);
// const children = container.childNodes;
// for (let child of children) {
//     console.log("My element has tag:" + child.tagName);
// }