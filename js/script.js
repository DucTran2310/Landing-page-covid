const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("nav");
const menu = document.querySelector("#menu");
const logo = document.querySelector('.logo');

// Toggle nav bars or times
navToggle.addEventListener("click", () => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('nav-toggle');
});

// Toggle when click logo
logo.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    nav.classList.remove('nav-toggle');
});

// click navbar item
const list = document.querySelectorAll('.navbar__item');
function activeLink(){
    list.forEach(item => 
        item.classList.remove('active'));
        this.classList.add('active');
}
list.forEach(item => item.addEventListener('click', activeLink));



// Handle sticky navbar
window.addEventListener("scroll", () => {
    let header = document.querySelector("header");

    header.classList.toggle('sticky', window.scrollY > 0);
    
});

// Icrementing-counter
const counters = document.querySelectorAll('.case__qnt');
const speed = 2000; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

        const formatter = new Intl.NumberFormat('en');
		// Check if target is reached
		if (count < target) {
            // Add inc to count and output in counter
			counter.innerText = `${Math.ceil(count + inc)}`;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
            counter.innerText = target;
		}

	};
	updateCount();
});







