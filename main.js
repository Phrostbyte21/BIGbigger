//Import Testimonials API
import { testimonials } from './testimonials.js'


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function first(array, count = 10) {
    return array.slice(0, count);
}

const testimonialQuote = document.getElementById('testimonial');


first(testimonials).map(person => {
    let li = createNode('li'),
        span = createNode('span');

    span.innerText = `${person.testimonial}`;

    append(li, span);
    append(testimonialQuote, li);
})
