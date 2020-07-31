//Import Testimonials API
import { testimonials } from './testimonials.js'

// Create variable with random length based on API entries
const index = Math.floor(Math.random() * testimonials.length);

const q = document.createElement('q');

q.innerText = testimonials[index].testimonial;

document.getElementById('testimonial').append(q);