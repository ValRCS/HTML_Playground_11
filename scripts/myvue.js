console.log("Running my own Vue!");

// Define a new component called button-counter
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<div class="btn"><button v-on:click="count++">You clicked me {{ count }} times.</button></div>'
})

Vue.component('blog-post', {
    props: ['mytitle', 'secondprop'],
    template: '<h3>{{ mytitle }} and I like {{ secondprop }}</h3>'
})

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
        ],
        posts: [
            { id: 1, title: 'My journey with Vue', likes: "Chocolate" },
            { id: 2, title: 'Blogging with Vue', likes: "Milk" },
            { id: 3, title: 'Why Vue is so fun', likes: 'Milupa' }
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