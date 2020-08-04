//Import APIs
import { testimonials } from './testimonials.js'
import { business } from './business.js'

// Create variable with random length based on API entries
// then print the selected testimonial to HTML
const index = Math.floor(Math.random() * testimonials.length);

const q = document.createElement('q');

q.innerText = testimonials[index].testimonial;

document.getElementById('testimonial').append(q);

//Pull random user images and names from the API
const userURL = 'https://randomuser.me/api/';
const span = document.getElementById('rndUser');
let bigUsers;

fetch(userURL)
    .then(resp => resp.json())
    .then(data => {
        bigUsers = data.results;

        bigUsers.map(user => {
            let h1 = document.createElement('h1'),
                img = document.createElement('img');

            img.src = user.picture.large;
            h1.innerText = `${user.name.first} ${user.name.last}`;

            span.appendChild(img);
            span.appendChild(h1);
        })
    })

// Pulling in business names and printing HTML
const indexTwo = Math.floor(Math.random() * business.length);
const li = document.createElement('li');

indexTwo + 5;

li.innerText = business[indexTwo].name;
console.log(business[indexTwo].name);

document.getElementById('companies').append(li);


// Change Submit button text
document.getElementById("submitBtn").addEventListener("click", () => {
    document.getElementById("submitBtn").innerHTML = "Submitted!";
    setTimeout(function(){ document.getElementById("submitBtn").innerHTML = "Submit" }, 5000);
});