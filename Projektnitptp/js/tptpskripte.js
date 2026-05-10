function izracunaj() {
    let bodovi = parseInt(document.getElementById("pozicija").value);
    let dodatniBod = document.getElementById("najbrziKrug").checked;


    if (dodatniBod && bodovi > 0) {
        bodovi += 1;
    }
    document.getElementById("suma").innerText = bodovi;
}
