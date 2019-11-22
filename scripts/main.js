console.log('Running main.js');

function main() {
    const app = document.querySelector('#app');

    //add a new div inside app element
    const newDiv = document.createElement('div');
    newDiv.innerText = "I am a new div";
    app.appendChild(newDiv);

    app.appendChild(document.createElement('p'));

    const mypar = app.querySelector('p');
    mypar.innerText = "Lorem Ipsum";
    // mypar.style.backgroundColor = "red";
    mypar.classList.add("warning-text");
    mypar.classList.add("bold-text");
    mypar.id = "hopefully-unique";

    addElement(app, "mycoolid", "p", "Lorems");
    addElement(app, "mycoolid2", "p", "Lorems", ["warning-text"]);
    addElement(app, "mycoolid2", "p", "Lorems", ["warning-text", 'bold-text']);

    for (let i = 1; i < 10; i++) {
        const myDiv = addElement(app, "myid" + i, "div", "My text " + i);
        addElemObj(myDiv, { id: "ob" + i, tag: "p", innerText: "Text" + i })
    }

}

function addElement(parent, id, tag = 'p', content = null, classList = null) {
    const elem = document.createElement(tag);
    elem.id = id;
    if (content) elem.innerText = content;
    if (classList) elem.classList.add(...classList);
    parent.appendChild(elem);
    return elem;
}

function addElemObj(parent, obj) {
    const elem = document.createElement(obj.tag);
    elem.id = obj.id;
    elem.innerText = obj.innerText;
    parent.appendChild(elem);
    return elem;
}


main();
