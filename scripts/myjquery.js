
console.log("Running my jquery.js");

function $$(parameter) {
    console.log("my super function!")
}

$('.mydivs').css("background-color", "red");

const mydivs = document.querySelectorAll('.mydivs');
for (let el of mydivs) {
    el.style.backgroundColor = "green";
}

// $('button').click((ev) => console.log("You clicked BTN:" + ev.target.innerText))
//if we want to  use this then we need old style function declaration
// $('button').click(function () {
//     console.log("You clicked BTN:" + $(this).text());
// }) 

// if we use arrow function we use ev.target
$('.fadeinbtn').click((ev) => {
    //jquery
    console.log("You clicked BTN:" + $(ev.target).text())
    console.log("BTN value:" + $(ev.target).val());

    //plain Vanilla
    console.log("You clicked BTN:" + ev.target.innerText)
    console.log("BTN value:" + ev.target.value);

    $('.mydiv' + ev.target.value).fadeIn(2000);

});

$('.fadebtn').click((ev) => {
    //plain Vanilla
    console.log("You clicked BTN:" + ev.target.innerText)
    console.log("BTN value:" + ev.target.value);

    $('.mydiv' + ev.target.value).fadeOut(2000);

});


