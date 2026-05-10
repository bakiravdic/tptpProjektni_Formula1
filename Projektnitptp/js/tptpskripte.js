function izracunaj() {
    let bodovi = parseInt(document.getElementById("pozicija").value);
    let dodatniBod = document.getElementById("najbrziKrug").checked;


    if (dodatniBod && bodovi > 0) {
        bodovi += 1;
    }
    document.getElementById("suma").innerText = bodovi;
}

document.addEventListener('DOMContentLoaded', function() {
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
