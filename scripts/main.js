console.log('Running main.js');
window.onload = main;

function main() {
    console.log("Running Main");
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

    // addElement(app, "mycoolid", "p", "Lorems");
    // addElement(app, "mycoolid2", "p", "Lorems", ["warning-text"]);
    // addElement(app, "mycoolid2", "p", "Lorems", ["warning-text", 'bold-text']);

    // for (let i = 1; i < 10; i++) {
    //     const myDiv = addElement(app, "myid" + i, "div", "My text " + i);
    //     addElemObj(myDiv, { id: "ob" + i, tag: "p", innerText: "Text" + i })
    // }

    for (let i = 0; i < 5; i++) {
        const el = document.createElement('button');
        el.innerText = "Button" + (i + 1);
        app.appendChild(el);
    }

    addHandlers();
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

function onClick() {
    console.log("You clicked me!");
    //TODO pretty much anything
}

function addHandlers() {
    // const but2 = document.getElementById('button2');
    const but2 = document.querySelector('#button2');
    // but2.onclick = onClick;
    but2.onmousedown = function () {
        console.log("Mouse down!");
    }

    but2.onmouseup = () => {
        console.log("Mouse up!");
    }

    // # adding multiple handlers for same event
    const but3 = document.getElementById('button3');
    but3.addEventListener('click', () => { console.log("Clicked 3"); });
    but3.addEventListener('click', () => { console.log("Really clicked me!"); });
    but3.onclick = () => { console.log("This might get overwritten!"); };
    but3.ondblclick = () => { console.log("Double!"); };

    // we grab an array of all buttons in our page
    const myButtons = document.getElementsByTagName('button');
    for (let i = 0; i < myButtons.length; i++) {
        myButtons[i].onclick = () => { console.log('Generic Click'); };
        myButtons[i].addEventListener('click', () => { console.log('Generic AddEvent Click'); });

    }

    //myButtons is an HTMLcollection not a regular array so forEach will not work
    // myButtons.forEach((element) => {
    //     element.addEventListener('click', () => { console.log('For Each listener'); });
    // });

    for (let element of myButtons) {
        element.addEventListener('click', () => { console.log('For Each listener'); });
        //do more work on each element here
        //element is just a name we made up, could be button or el ,etc
    }

    //so window refers to whole browser, and body to just the document
    window.onscroll = () => { console.log("Scrolling!"); };
    // document.body.onscroll = () => { console.log("Scrolling!"); };
    // document.body.onwheel = () => { console.log("Mouse wheel turning!"); };
    // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onwheel#Examples
    window.onwheel = (event) => { console.log("Mouse wheel turning! DeltaY:" + event.deltaY); };
}



// main();
