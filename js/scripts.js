console.log("hello");

const menuToggle= document.getElementById("menu-toggle");
const menuNav= document.getElementById("menuNav");

const toggleEs6 = () => console.log("called toggleMenu");
menuToggle.addEventListener('click', toggleEs6);

