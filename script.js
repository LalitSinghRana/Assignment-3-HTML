function logSubmit(event) {
	log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;

	let name = form.elements['name'].value;
	let email = form.elements['email'].value;
	let website = form.elements['website'].value;
	let image = form.elements['image'].value;
	let gender = form.elements['gender'].value;
	log.textContent = ` ${name}, ${email}, ${website}, ${image}, ${gender}`;

	var div = document.createElement('div');
	div.style.backgroundColor = 'black';
	// div.style.position = 'absolute';
	// div.style.left = '50px';
	// div.style.top = '50px';
	div.style.height = '10px';
	div.style.width = '10px';

	event.preventDefault();
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);

function myFunction() {
	if (validate()) {
		let name = form.elements['name'].value;
		let email = form.elements['email'].value;
		let website = form.elements['website'].value;
		let image = form.elements['image'].value;
		let gender = form.elements['gender'].value;

		let div1 = document.createElement('div');
		div1.className = 'card-left';
		div1.innerHTML = `${name} <br/> ${gender} <br/> ${email} <br/> ${website} <br/> ${skills} <br/>`;

		let div2 = document.createElement('div');
		div2.className = 'card-right';

		document.getElementById('card-dis').appendChild(div1);
		document.getElementById('card-img').appendChild(div2);
	}

	event.preventDefault();
}

function validate() {
	return true;
}
