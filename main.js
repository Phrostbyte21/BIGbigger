//Import Testimonials API
import { testimonials } from './testimonials.js'

// Create variable with random length based on API entries
const index = Math.floor(Math.random() * testimonials.length);

const q = document.createElement('q');

q.innerText = testimonials[index].testimonial;

document.getElementById('testimonial').append(q);

//Random user images and names
function append(parent, el) {
    return parent.appendChild(el);
}

const userURL = 'https://randomuser.me/api/';
const span = document.getElementById('rndUser');
let bigUsers;

fetch(userURL)
    .then(resp => resp.json())
    .then(data => {
        bigUsers = data.results;
        console.log(bigUsers)

        bigUsers.map(user => {
            let h1 = document.createElement('h1'),
                img = document.createElement('img');

            img.src = user.picture.large;
            h1.innerText = `${user.name.first} ${user.name.last}`;

            append(span, img);
            append(span, h1);
        })
    })

//Change Submit button text
document.getElementById("submitBtn").addEventListener("click", () => {
    document.getElementById("submitBtn").innerHTML = "Submitted!";
    setTimeout(function(){ document.getElementById("submitBtn").innerHTML = "Submit" }, 5000);
});



//Working, just in case
/*
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const userURL = 'https://randomuser.me/api/';
const span = document.getElementById('rndUser');
let bigUsers;

fetch(userURL)
    .then(resp => resp.json())
    .then(data => {
        bigUsers = data.results;
        console.log(bigUsers)

        bigUsers.map(user => {
            let h1 = createNode('h1'),
                img = createNode('img');

            img.src = user.picture.large;
            h1.innerText = `${user.name.first} ${user.name.last}`;

            append(span, img);
            append(span, h1);
        })
    })
*/