//Import APIs
import { testimonials } from './testimonials.js'
import { business } from './business.js'

// Create variable with random length based on API entries
// then print the selected testimonial to HTML
const index = Math.floor(Math.random() * testimonials.length);

const q = document.createElement('q');

q.innerText = testimonials[index].testimonial;

document.getElementById('testimonial').append(q);

// Open/Close mobile menu
function menu() {
    var x = document.getElementById("mobileMenu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

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
const entertainmentToggle = document.getElementById('entertainment');
const gamingToggle = document.getElementById('gaming');
const cleaningToggle = document.getElementById('cleaning');
const resturauntToggle = document.getElementById('resturaunt');
const transportationToggle = document.getElementById('transportation');
const shoppingToggle = document.getElementById('shopping');
const animalToggle = document.getElementById('animal');
const applicationToggle = document.getElementById('application');
const apparelToggle = document.getElementById('apparel');
let isFood = true;
let isTechnology = true;
let isEntertainment = true;
let isGaming = true;
let isCleaning = true;
let isResturaunt = true;
let isTransportation = true;
let isShopping = true;
let isAnimal = true;
let isApplication = true;
let isApparel = true;

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
// Entertainment Toggle Button
entertainmentToggle.addEventListener('click', () => {
    isEntertainment = !isEntertainment
    businessDiv.innerText = '';
    business.filter(person => {
        if (person.types[0] == 'Entertainment') {
            return person.name;
        } else if (person.types[1] == 'Entertainment') {
            return person.name;
        } else if (person.types[2] == 'Entertainment') {
            return person.name;
        }
    })
    .map(person => {
        createBusiness(person);
    })
})
// Gaming Toggle Button
gamingToggle.addEventListener('click', () => {
    isGaming = !isGaming
    businessDiv.innerText = '';
    business.filter(person => {
        if (person.types[0] == 'Gaming') {
            return person.name;
        } else if (person.types[1] == 'Gaming') {
            return person.name;
        } else if (person.types[2] == 'Gaming') {
            return person.name;
        }
    })
    .map(person => {
        createBusiness(person);
    })
})
// Cleaning Toggle Button
cleaningToggle.addEventListener('click', () => {
    isCleaning = !isCleaning
    businessDiv.innerText = '';
    business.filter(person => {
        if (person.types[0] == 'Cleaning') {
            return person.name;
        } else if (person.types[1] == 'Cleaning') {
            return person.name;
        } else if (person.types[2] == 'Cleaning') {
            return person.name;
        }
    })
    .map(person => {
        createBusiness(person);
    })
})
// Resturaunt Toggle Button
resturauntToggle.addEventListener('click', () => {
    isResturaunt = !isResturaunt
    businessDiv.innerText = '';
    business.filter(person => {
        if (person.types[0] == 'Resturaunt') {
            return person.name;
        } else if (person.types[1] == 'Resturaunt') {
            return person.name;
        } else if (person.types[2] == 'Resturaunt') {
            return person.name;
        }
    })
    .map(person => {
        createBusiness(person);
    })
})
// Transportation Toggle Button
transportationToggle.addEventListener('click', () => {
    isTransportation = !isTransportation
    businessDiv.innerText = '';
    business.filter(person => {
        if (person.types[0] == 'Transportation') {
            return person.name;
        } else if (person.types[1] == 'Transportation') {
            return person.name;
        } else if (person.types[2] == 'Transportation') {
            return person.name;
        }
    })
    .map(person => {
        createBusiness(person);
    })
})
// Shopping Toggle Button
shoppingToggle.addEventListener('click', () => {
    isShopping = !isShopping
    businessDiv.innerText = '';
    business.filter(person => {
        if (person.types[0] == 'Shopping') {
            return person.name;
        } else if (person.types[1] == 'Shopping') {
            return person.name;
        } else if (person.types[2] == 'Shopping') {
            return person.name;
        }
    })
    .map(person => {
        createBusiness(person);
    })
})
// Animal Toggle Button
animalToggle.addEventListener('click', () => {
    isAnimal = !isAnimal
    businessDiv.innerText = '';
    business.filter(person => {
        if (person.types[0] == 'Animal') {
            return person.name;
        } else if (person.types[1] == 'Animal') {
            return person.name;
        } else if (person.types[2] == 'Animal') {
            return person.name;
        }
    })
    .map(person => {
        createBusiness(person);
    })
})
// Application Toggle Button
applicationToggle.addEventListener('click', () => {
    isApplication = !isApplication
    businessDiv.innerText = '';
    business.filter(person => {
        if (person.types[0] == 'Application') {
            return person.name;
        } else if (person.types[1] == 'Application') {
            return person.name;
        } else if (person.types[2] == 'Application') {
            return person.name;
        }
    })
    .map(person => {
        createBusiness(person);
    })
})
// Apparel Toggle Button
apparelToggle.addEventListener('click', () => {
    isApparel = !isApparel
    businessDiv.innerText = '';
    business.filter(person => {
        if (person.types[0] == 'Apparel') {
            return person.name;
        } else if (person.types[1] == 'Apparel') {
            return person.name;
        } else if (person.types[2] == 'Apparel') {
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
    rndUser.innerText = '';
    testimonial.innerText = '';
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