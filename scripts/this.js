console.log("Check this out!");

const obj = {
    data: {
        myarr: [1, 2, 3, 5, 4],
        myname: "Valdis"
    },

    myvalue: 42,

    getmyVal: function () {
        return this.myvalue;
    },

    getmyName: function () {
        return this.data.myname;
    },

    mymax2: function () {
        return Math.max(...this.data.myarr);
    },

    methods: {
        //hardcoded obj reference
        mymax: () => {
            return Math.max(...obj.data.myarr);
        },

    }

}

console.log(obj.getmyName());
console.log(obj.mymax2());
console.log(obj.methods.mymax());

function handleClick(ev) {
    console.log("You clicked me!");
    console.log("My text is:" + ev.target.innerText);
    console.log("Text value of this is:" + this.innerText);
    //do more stuff
}

const myButtons = document.querySelectorAll('button');

for (let btn of myButtons) {
    btn.onclick = handleClick;
};

//$('button').click(handleClick)
