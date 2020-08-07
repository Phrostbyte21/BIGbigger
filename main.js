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

function createBusiness(company) {
    let h4 = createNode('h4');
    h4.innerText = `${company.name}`;
    append(businessDiv, h4);
}

const businessDiv = document.getElementById('companies');
const allToggle = document.getElementById('all');
const foodToggle = document.getElementById('food');
const technologyToggle = document.getElementById('technology');
const entertainmentToggle = document.getElementById('entertainment');
const gamingToggle = document.getElementById('gaming');
const cleaningToggle = document.getElementById('cleaning');
const restaurantToggle = document.getElementById('restaurant');
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
let isRestaurant = true;
let isTransportation = true;
let isShopping = true;
let isAnimal = true;
let isApplication = true;
let isApparel = true;

// All Toggle Button
allToggle.addEventListener('click', () => {
    businessDiv.innerText = '';
    first(business).map(company => {
        createBusiness(company);
    })
})
// Food Toggle Button
foodToggle.addEventListener('click', () => {
    isFood = !isFood
    businessDiv.innerText = '';
    business.filter(company => {
        if (company.types[0] == 'Food') {
            return company.name;
        } else if (company.types[1] == 'Food') {
            return company.name;
        } else if (company.types[2] == 'Food') {
            return company.name;
        }
    })
    .map(company => {
        createBusiness(company);
    })
})
// Technology Toggle Button
technologyToggle.addEventListener('click', () => {
    isTechnology = !isTechnology
    businessDiv.innerText = '';
    business.filter(company => {
        if (company.types[0] == 'Technology') {
            return company.name;
        } else if (company.types[1] == 'Technology') {
            return company.name;
        } else if (company.types[2] == 'Technology') {
            return company.name;
        }
    })
    .map(company => {
        createBusiness(company);
    })
})
// Entertainment Toggle Button
entertainmentToggle.addEventListener('click', () => {
    isEntertainment = !isEntertainment
    businessDiv.innerText = '';
    business.filter(company => {
        if (company.types[0] == 'Entertainment') {
            return company.name;
        } else if (company.types[1] == 'Entertainment') {
            return company.name;
        } else if (company.types[2] == 'Entertainment') {
            return company.name;
        }
    })
    .map(company => {
        createBusiness(company);
    })
})
// Gaming Toggle Button
gamingToggle.addEventListener('click', () => {
    isGaming = !isGaming
    businessDiv.innerText = '';
    business.filter(company => {
        if (company.types[0] == 'Gaming') {
            return company.name;
        } else if (company.types[1] == 'Gaming') {
            return company.name;
        } else if (company.types[2] == 'Gaming') {
            return company.name;
        }
    })
    .map(company => {
        createBusiness(company);
    })
})
// Cleaning Toggle Button
cleaningToggle.addEventListener('click', () => {
    isCleaning = !isCleaning
    businessDiv.innerText = '';
    business.filter(company => {
        if (company.types[0] == 'Cleaning') {
            return company.name;
        } else if (company.types[1] == 'Cleaning') {
            return company.name;
        } else if (company.types[2] == 'Cleaning') {
            return company.name;
        }
    })
    .map(company => {
        createBusiness(company);
    })
})
// Restaurant Toggle Button
restaurantToggle.addEventListener('click', () => {
    isRestaurant = !isRestaurant
    businessDiv.innerText = '';
    business.filter(company => {
        if (company.types[0] == 'Restaurant') {
            return company.name;
        } else if (company.types[1] == 'Restaurant') {
            return company.name;
        } else if (company.types[2] == 'Restaurant') {
            return company.name;
        }
    })
    .map(company => {
        createBusiness(company);
    })
})
// Transportation Toggle Button
transportationToggle.addEventListener('click', () => {
    isTransportation = !isTransportation
    businessDiv.innerText = '';
    business.filter(company => {
        if (company.types[0] == 'Transportation') {
            return company.name;
        } else if (company.types[1] == 'Transportation') {
            return company.name;
        } else if (company.types[2] == 'Transportation') {
            return company.name;
        }
    })
    .map(company => {
        createBusiness(company);
    })
})
// Shopping Toggle Button
shoppingToggle.addEventListener('click', () => {
    isShopping = !isShopping
    businessDiv.innerText = '';
    business.filter(company => {
        if (company.types[0] == 'Shopping') {
            return company.name;
        } else if (company.types[1] == 'Shopping') {
            return company.name;
        } else if (company.types[2] == 'Shopping') {
            return company.name;
        }
    })
    .map(company => {
        createBusiness(company);
    })
})
// Animal Toggle Button
animalToggle.addEventListener('click', () => {
    isAnimal = !isAnimal
    businessDiv.innerText = '';
    business.filter(company => {
        if (company.types[0] == 'Animal') {
            return company.name;
        } else if (company.types[1] == 'Animal') {
            return company.name;
        } else if (company.types[2] == 'Animal') {
            return company.name;
        }
    })
    .map(company => {
        createBusiness(company);
    })
})
// Application Toggle Button
applicationToggle.addEventListener('click', () => {
    isApplication = !isApplication
    businessDiv.innerText = '';
    business.filter(company => {
        if (company.types[0] == 'Application') {
            return company.name;
        } else if (company.types[1] == 'Application') {
            return company.name;
        } else if (company.types[2] == 'Application') {
            return company.name;
        }
    })
    .map(company => {
        createBusiness(company);
    })
})
// Apparel Toggle Button
apparelToggle.addEventListener('click', () => {
    isApparel = !isApparel
    businessDiv.innerText = '';
    business.filter(company => {
        if (company.types[0] == 'Apparel') {
            return company.name;
        } else if (company.types[1] == 'Apparel') {
            return company.name;
        } else if (company.types[2] == 'Apparel') {
            return company.name;
        }
    })
    .map(company => {
        createBusiness(company);
    })
})

//Pulls the first n count of businesses and displays that many on page load
first(business).map(company => {
    createBusiness(company);
})

//Generates a new company testimonial
const newTest = document.getElementById('newTestimonial');

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