function izracunaj() {
    let bodovi = parseInt(document.getElementById("pozicija").value);
    let dodatniBod = document.getElementById("najbrziKrug").checked;


    if (dodatniBod && bodovi > 0) {
        bodovi += 1;
    }
    document.getElementById("suma").innerText = bodovi;
}

document.addEventListener('DOMContentLoaded', function() {


    const searchInput = document.getElementById('searchtimova');
    const teamCards = document.querySelectorAll('.f1-kartica');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const filter = searchInput.value.toLowerCase().trim();
            teamCards.forEach(card => {
                const teamName = card.getAttribute('data-team') || "";
                card.style.display = teamName.toLowerCase().includes(filter) ? "" : "none";
            });
        });
    }

    const jumpBtn = document.getElementById("jumpTopBtn");


    if (jumpBtn) {
        window.addEventListener("scroll", function() {
        
        if (window.scrollY > 300) {
            jumpBtn.classList.add("prikazi"); 
        } else {
            jumpBtn.classList.remove("prikazi"); 
        }
        });

        

        jumpBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" 
            });
        });
    }
    
    const btn = document.getElementById('play-sound');
    const sound = document.getElementById('f1-sound');
    if (btn && sound) {
        btn.addEventListener('click', () => {
            sound.currentTime = 0;
            sound.play();
        });
    }
    
    const newsletterForma = document.getElementById('newsletter-forma');
    const porukaZahvale = document.getElementById('poruka-zahvale');

    if (newsletterForma && porukaZahvale) {
        newsletterForma.addEventListener('submit', function(e) {
            e.preventDefault();

            const fname = document.getElementById('newsletter-fname').value.trim();
            const lname = document.getElementById('newsletter-lname').value.trim();
            const email = document.getElementById('newsletter-email').value.trim();
            const team = document.getElementById('newsletter-team').value;
            const country = document.getElementById('newsletter-country').value.trim();
            const age = document.getElementById('newsletter-age').value.trim();

           
            if (fname === "" || lname === "" || email === "" || team === "" || country === "" || age === "") {
                alert("All the fields must be filled!");
                return; 
            }

            
            if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
                alert("Please enter a valid email address (must contain '@' and '.')!");
                return;
            }

            
            const ageBroj = Number(age);
            
           
            if (isNaN(ageBroj) || ageBroj < 13 || ageBroj > 99) {
                alert("Age must be a number between 13 and 99!");
                return;
            }

            
            newsletterForma.style.display = 'none';
            porukaZahvale.style.display = 'block';
        });
    }

    const otvoriBtn = document.getElementById('otvoriBugBtn');
    const formaKontejner = document.getElementById('bugFormaKontejner');
    const sadrzajForme = document.getElementById('bugSadrzajForme');
    const posaljiBtn = document.getElementById('posaljiBugBtn');
    const zahvalnica = document.getElementById('bugZahvalnica');
    const tekstPolje = document.getElementById('bugTekst');

    if (otvoriBtn && formaKontejner && sadrzajForme && posaljiBtn && zahvalnica && tekstPolje) {
        otvoriBtn.addEventListener('click', () => {
            if (formaKontejner.style.display === 'none') {
                formaKontejner.style.display = 'block';
               
                sadrzajForme.style.display = 'block';
                zahvalnica.style.display = 'none';
                tekstPolje.value = ''; 
            } else {
                formaKontejner.style.display = 'none';
            }
        });


        posaljiBtn.addEventListener('click', () => {
            if (tekstPolje.value.trim() !== "") { 
                sadrzajForme.style.display = 'none';
                zahvalnica.style.display = 'block';
            } else {
                alert("Please enter the the text of the issue before sending an issue!");
            }
        });
    }
});

//Koristen Claude za doradu cijelog narednog koda za hamburger meni i promjenu teme

/*  HAMBURGER MENI — Toggle logika*/

const hamburger = document.querySelector('.hamburger');
const navigacija = document.querySelector('.navigacija');
const navLinkovi = document.querySelectorAll('.nav-btn');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navigacija.classList.toggle('active');
});

navLinkovi.forEach(function (link) {
    link.addEventListener('click', function () {
        navigacija.classList.remove('active');
        hamburger.classList.remove('active');
    });
});
/*THEME SWITCHER + LOCAL STORAGE*/

const themeSwitcher = document.getElementById("theme-switcher");

// Učitaj spremljenu temu
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    themeSwitcher.value = "light";
}
else if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    themeSwitcher.value = "dark";
}
else {
    document.body.classList.remove("light-theme");
    document.body.classList.remove("dark-theme");
    themeSwitcher.value = "system";
}

// Promjena teme
themeSwitcher.addEventListener("change", () => {

    const value = themeSwitcher.value;

    if (value === "light") {

        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");

        localStorage.setItem("theme", "light");
    }

    else if (value === "dark") {

        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");

        localStorage.setItem("theme", "dark");
    }

    else {

        document.body.classList.remove("light-theme");
        document.body.classList.remove("dark-theme");

        localStorage.setItem("theme", "system");
    }
});
/*- Gemini: Pomogo mi je u debugiranje JavaScript koda i rješavanje sintaksnog konflikta. 
Pomoć pri lociranju pogrešno zatvorenih vitičastih zagrada koje su blokirale izvršavanje skripte,
te uspješno izolovanje i popravka "Jump to Top" mehanizma za glatko skrolovanje na vrh stranice..*/




