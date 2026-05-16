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
    
    const btn = document.getElementById('play-sound');
    const sound = document.getElementById('f1-sound');
    if (btn && sound) {
        btn.addEventListener('click', () => {
            sound.currentTime = 0;
            sound.play();
        });
    }
    
    const forma = document.getElementById('newsletter-forma');
    const poruka = document.getElementById('poruka-zahvale');
    console.log("!!!!!!!");

    if (forma && poruka) {
        forma.addEventListener('submit', function(event) {
            event.preventDefault();
            forma.style.display = 'none'; 
            poruka.style.display = 'block'; 
            console.log("Forma radiii!");
        });
    }

    const otvoriBtn = document.getElementById('otvoriBugBtn');
const formaKontejner = document.getElementById('bugFormaKontejner');
const sadrzajForme = document.getElementById('bugSadrzajForme');
const posaljiBtn = document.getElementById('posaljiBugBtn');
const zahvalnica = document.getElementById('bugZahvalnica');
const tekstPolje = document.getElementById('bugTekst');


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
});
