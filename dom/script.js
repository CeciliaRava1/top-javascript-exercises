const container = document.querySelector('#container');

const container_p = document.createElement('p');
container_p.textContent = "Hey I’m red!";
container_p.style.color = 'red';

const container_h3 = document.createElement('h3');
container_h3.textContent = "I’m a blue h3!";
container_h3.style.color = 'blue';


const container_div = document.createElement('div');
container_div.setAttribute("id", "container_div");
container_div.style.border = '1px solid black';
container_div.style.background = 'pink';

const container_div_h1 = document.createElement('h1');
container_div_h1.textContent = "I’m in a div";

const container_div_p = document.createElement('p');
container_div_p.textContent = "ME TOO!";

container.appendChild(container_p);
container.appendChild(container_h3);
container.appendChild(container_div);

container_div.appendChild(container_div_h1);
container_div.appendChild(container_div_p);

