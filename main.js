//Import Testimonials API
import { testimonials } from './testimonials.js'

// Create variable with random length based on API entries
const index = Math.floor(Math.random() * testimonials.length);

const q = document.createElement('q');

q.innerText = testimonials[index].testimonial;

document.getElementById('testimonial').append(q);

//Random user images and names
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const userURL = 'https://randomuser.me/api/';
const div = document.getElementById('rndUser');
let bigUsers;

fetch(userURL)
    .then(resp => resp.json())
    .then(data => {
        bigUsers = data.results;
        console.log(bigUsers)

        let h1 = createNode('h1'),
            img = createNode('img');
    
        img.src = bigUsers[0].picture.large;
        h1.innerText = `${bigUsers.name.first} ${bigUsers.name.first}`;
    
        append(h1, img);
        append(h1, div);

    })
