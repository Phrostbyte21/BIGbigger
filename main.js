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
const span = document.getElementById('rndUser');
let bigUsers;

fetch(userURL)
    .then(resp => resp.json())
    .then(data => {
        bigUsers = data.results;
        console.log(bigUsers)

        bigUsers.map(user => {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');

            img.src = bigUsers.picture.medium;
            span.innerText = `${bigUser.name.first} ${bigUser.name.first}`;

            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })




// fetch(userURL)
//     .then(resp => resp.json())
//     .then(data => {
//         bigUsers = data.results;
//         console.log(bigUsers)

//         let h1 = createNode('h1'),
//             img = createNode('img');
    
//         img.src = bigUsers[0].picture.large;
//         h1.innerText = `${bigUsers[0].name.first} ${bigUsers[0].name.last}`;
    
//         append(h1, img);
//         append(h1, span);

//     })
