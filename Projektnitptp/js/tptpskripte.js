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
