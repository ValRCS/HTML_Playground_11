console.log("Started TODO app!");

const container = document.querySelector('.container');
console.log("container tag" + container.tagName);
const children = container.childNodes;
for (let child of children) {
    console.log("My element has tag:" + child.tagName);
}