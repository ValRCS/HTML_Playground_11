console.log("Running my own Vue!");


const app = new Vue({
    el: '#app',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        secondmessage: "Hello again",
        second: "mysecond",
        seen: true,
        seenMsg: "Turn me OFF!",
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
            this.secondmessage = this.secondmessage.toUpperCase();
        },
        toggleSeen: function () {
            this.seen = !this.seen;
            if (this.seen) {
                this.seenMsg = "Turn me OFF!";
            } else {
                this.seenMsg = "Turn me ON!";
            }
        }
    }
});

const app2 = new Vue({
    el: '#app2',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});


const myval = 42;
const mystring = `My value is ${myval}`;
console.log(mystring);