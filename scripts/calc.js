console.log("Starting my calc!");

const myaddbutton = document.getElementById('addbut');
myaddbutton.onclick = () => {
    console.log("ADDING");

    //get numbers from two inputs
    const myinp1 = document.getElementById('val1');
    const myinp2 = document.getElementById('val2');
    const resultElement = document.getElementById('result');

    console.log('Inp1 value: ' + myinp1.value);
    //below same as myinp2.value
    console.log('Inp1 value: ' + document.getElementById('val2').value);

    //this will not quite work as we have strings as values
    console.log("My result is:" + (myinp1.value + myinp2.value));

    const val1 = parseFloat(myinp1.value);
    const val2 = parseFloat(myinp2.value);

    console.log("Real result is this:" + (val1 + val2));
    //show result in resul div
    resultElement.innerText = val1 + val2;
};