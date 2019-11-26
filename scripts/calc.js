console.log("Starting my calc!");

// const myelements = {}; for more complicated state better to store in one place

const myaddbutton = document.getElementById('addbut');
const myinp1 = document.getElementById('val1');
const myinp2 = document.getElementById('val2');


myaddbutton.onclick = () => {
    console.log("ADDING");

    //get numbers from two inputs



    console.log('Inp1 value: ' + myinp1.value);
    //below same as myinp2.value
    console.log('Inp1 value: ' + document.getElementById('val2').value);

    //this will not quite work as we have strings as values
    console.log("My result is:" + (myinp1.value + myinp2.value));
    updateResult();
};

function updateResult() {
    const resultElement = document.getElementById('result');
    const val1 = parseFloat(myinp1.value);
    const val2 = parseFloat(myinp2.value);

    console.log("Real result is this:" + (val1 + val2));
    //show result in resul div
    resultElement.innerText = val1 + val2;
}

//inputHandler and inputHanlder2 do the same thing!
const inputHandler = (event) => {
    console.log("oninput fired! New value is:" + event.target.value);
    updateResult();
}

//old way of writing, works just as well
function inputHandler2(event) {
    console.log("oninput fired! New value is:" + event.target.value);
    updateResult();
}

myinp1.oninput = inputHandler2;
myinp2.oninput = inputHandler2;



//on change fires less often than oninput , only when value is finalized(as by pressing enter)
myinp1.onchange = (event) => {
    console.log("onchange fired! New value is:" + event.target.value);
};

function main() {

    //myinit();
    //setupHandlers();

    updateResult();
}

main();