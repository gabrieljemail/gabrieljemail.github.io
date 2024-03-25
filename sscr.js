const dom = document;
const device = window;

function add(tag, classes, id, otherAttributes, content) {
        // create a new div element
        const newDiv = document.createElement(tag);

        // and give it some content
        const newContent = document.createTextNode(content);

        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);

        // Set the classes and ID
        currentDiv.setAttribute('class', classes);
        currentDiv.setAttribute('id', id);
        if () {
            
        }

}