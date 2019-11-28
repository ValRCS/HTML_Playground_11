console.log("Running class examples");

class MyClass {
    myval = 42;
    constructor(name, lastName, myfun) {
        this.name = name;
        this.lastName = lastName;
        this.myfun = myfun;
        // console.log("Initializing with " + JSON.stringify(props));
        // this.name = props.name;
        // this.lastName = props.lastName;
    }
    showMyVal() {
        console.log("My Val is", this.myval);
    }
    setMyVal(num) {
        console.log("Changing " + this.myval + " to:" + num);
        this.myval = num;
    }
}

const personA = new MyClass("Valdis", "Saulespurens", function () { console.log("Hello" + this.name) });
personA.myfun();

const personB = new MyClass("Krisjanis", "Karins", () => 9000);
console.log(personB.myfun());
// const newInstance = new MyClass({ name: "Valdis", lastName: "Saules" });

// const newInstanceB = new MyClass();
// const newInstanceC = new MyClass();

// newInstance.showMyVal();
// newInstance.setMyVal(66);
// newInstance.showMyVal();

// newInstanceC.showMyVal();
// newInstanceC.setMyVal(3333);
// newInstanceC.showMyVal();