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

    
    const forma = document.getElementById('newsletter-forma');
    const poruka = document.getElementById('poruka-zahvale');
    console.log("!!!!!!!");

    if (forma && poruka) {
        forma.addEventListener('submit', function(event) {
            event.preventDefault();
            forma.style.display = 'none'; /
            poruka.style.display = 'block'; 
            console.log("Forma radiii!");
        });
    }
});
