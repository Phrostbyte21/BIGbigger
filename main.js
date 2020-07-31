//Import Testimonials API
import { testimonials } from './testimonials.js'


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
// Generates random number between 1 and 10.
const testRndNum = Math.floor(Math.random() * (/*max*/10 - /*min*/1 + 1)) + /*min*/1;
console.log(testRndNum);

function first(array, count = 1) {
    return array.slice(0, count);
}



const testimonialQuote = document.getElementById('testimonial');


first(testimonials).map(person => {
    let q = createNode('q')

    q.innerText = `${person.testimonial}`;

    append(testimonial, q);
})
