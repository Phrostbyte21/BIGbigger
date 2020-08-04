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
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function first(array, count = 26) {
    return array.slice(0, count);
}

function createBusiness(person) {
    let h4 = createNode('h4');

    h4.innerText = `${person.name}`;

    append(businessDiv, h4);
}

const businessDiv = document.getElementById('companies');
const allToggle = document.getElementById('all');
const foodToggle = document.getElementById('food');
const technologyToggle = document.getElementById('technology');
let isFood = true;
let isTechnology = true;

// All Toggle Button
allToggle.addEventListener('click', () => {
    businessDiv.innerText = '';
    first(business).map(person => {
        createBusiness(person);
    })
})
// Food Toggle Button
foodToggle.addEventListener('click', () => {
    isFood = !isFood
    businessDiv.innerText = '';
    
    business.filter(person => {
        if (person.types[0] == 'Food') {
            return person.name;
        } else if (person.types[1] == 'Food') {
            return person.name;
        } else if (person.types[2] == 'Food') {
            return person.name;
        }
    })
    .map(person => {
        createBusiness(person);
    })
})
// Technology Toggle Button
technologyToggle.addEventListener('click', () => {
    isTechnology = !isTechnology
    businessDiv.innerText = '';
    
    business.filter(person => {
        if (person.types[0] == 'Technology') {
            return person.name;
        } else if (person.types[1] == 'Technology') {
            return person.name;
        } else if (person.types[2] == 'Technology') {
            return person.name;
        }
    })
    .map(person => {
        createBusiness(person);
    })
})

//Pulls the first n count of businesses and displays that many on page load
first(business).map(person => {
    createBusiness(person);
})

//Generates a new company testimonial
const newTest = document.getElementById('newTestinomial');

newTest.addEventListener('click', () => {
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
})



// Change Submit button text
document.getElementById("submitBtn").addEventListener("click", () => {
    document.getElementById("submitBtn").innerHTML = "Submitted!";
    setTimeout(function(){ document.getElementById("submitBtn").innerHTML = "Submit" }, 5000);
});


// business.filter(person => {
//     return isFood ? person.types == 'food' : person.types == 'technology'
// })