// ===============================
// Typing Animation
// ===============================

const text = [
    "Computer Science Student",
    "Frontend Developer",
    "Problem Solver",
    "Web Designer",
    "Future Software Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            erase();

        }, 1500);

        return;
    }

    setTimeout(type, 120);

})();

function erase() {

    letter = currentText.slice(0, --index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === 0) {

        count++;

        setTimeout(type, 300);

    } else {

        setTimeout(erase, 60);

    }

}

// ===============================
// Scroll Progress Bar
// ===============================

window.addEventListener("scroll", () => {

    const scroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scroll / height) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});

// ===============================
// Custom Cursor
// ===============================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements =
    document.querySelectorAll("section");

const reveal = () => {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            el.classList.add("active");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

// ===============================
// Navbar Active Link
// ===============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Header Shadow
// ===============================

const header =
    document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ===============================
// Skill Card Hover Effect
// ===============================

const cards =
    document.querySelectorAll(".skill-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        let rect =
            card.getBoundingClientRect();

        let x =
            e.clientX - rect.left;

        let y =
            e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(0,234,255,.4),
            rgba(255,255,255,.08))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
            "rgba(255,255,255,.08)";

    });

});

// ===============================
// Contact Form
// ===============================

const form =
    document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

// ===============================
// Back To Top Button
// ===============================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`

position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#00eaff;
color:black;
font-size:24px;
cursor:pointer;
display:none;
box-shadow:0 10px 20px rgba(0,0,0,.4);
transition:.3s;
z-index:10000;

`;

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('nav a').forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior:'smooth'

});

});

});

// ===============================
// Floating Animation
// ===============================

const profile =
document.querySelector(".profile-card");

if(profile){

setInterval(()=>{

profile.classList.toggle("float");

},1500);

}
