var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sideMenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

const form = document.getElementById('form'); // Select the form element by id
const msg = document.getElementById('msg');
const scriptURL = 'https://script.google.com/macros/s/AKfycbzNFc9tBd6TNpYDk-yWAScz5MWAERHcDY15AK4M8NZUK2eqt7LMQ9oWSVXpaeyBJdR82A/exec'; // Replace with your actual script URL

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                msg.innerHTML = "Message Sent Successfully";
                setTimeout(() => {
                    msg.innerHTML = "";
                }, 5000);
                form.reset(); // Clear the form fields
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            msg.innerHTML = `Error: ${error.message}`; // Display error message
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
        });
});
