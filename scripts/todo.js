console.log("Started TODO app!");

const addBtn = document.getElementById('todo-add');

addBtn.onclick = () => {
    console.log("You Clicked ADD");
    const el = document.createElement('div');
    const jobInput = document.getElementById('todo-input');
    el.innerText = jobInput.value;
    document.getElementById('todo-list').appendChild(el);

}

// const container = document.querySelector('.container');
// console.log("container tag" + container.tagName);
// const children = container.childNodes;
// for (let child of children) {
//     console.log("My element has tag:" + child.tagName);
// }