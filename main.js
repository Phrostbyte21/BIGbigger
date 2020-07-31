//Import Testimonials API
import { testimonials } from './testimonials.js'


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function first(array, count = 1) {
    return array.slice(0, count);
}

const testRndNum = Math.floor(Math.random() * (10/*max*/ - 1/*min*/ + 1)) + 1;
console.log(testRndNum);

const testimonialQuote = document.getElementById('testimonial');


first(testimonials).map(person => {
    let li = createNode('li'),
        span = createNode('span');

    span.innerText = `${person.testimonial}`;

    append(li, span);
    append(testimonialQuote, li);
})
