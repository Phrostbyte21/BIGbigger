import { testimonials } from './testimonials.js'

const index = Math.floor(Math.random() * testimonials.length);

const q = document.createElement('q');

q.innerText = testimonials[index].testimonial;

document.getElementById('testimonial').append(q);

/*
//Import Testimonials API
import { testimonials } from './testimonials.js'

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
// Generates random number between 1 and 10.
const index = Math.floor(Math.random() * testimonials.length);
console.log(index);

function first(array, count = 1) {
    return array.slice(0, count);
}



const testimonialQuote = document.getElementById('testimonial');


first(testimonials).map(person => {
    let q = createNode('q')

    q.innerText = `${person.testimonial}`;

    q.innerText = testimonial[testRndNum];

    append(testimonialQuote, q);
})
*/