const genera = document.getElementById("Genera");

genera.addEventListener('click', function () {
    if (controllo == true) {
        const randomPlayer = Math.floor(Math.random() * 6 + 1);
        const randomComputer = Math.floor(Math.random() * 6 + 1);
        const punteggioPlayer = document.getElementById("PunteggioP");
        const punteggioComputer = document.getElementById("PunteggioC");
        const risultato = document.getElementById("Risultato");
        punteggioPlayer.innerHTML = randomPlayer;
        punteggioComputer.innerHTML = randomComputer;
        if (randomPlayer > randomComputer) {
            risultato.innerHTML = "Hai vinto";
            risultato.classList.remove("c-red");
            risultato.classList.add("c-green");
        } else if (randomComputer == randomPlayer) {
            risultato.innerHTML = "pareggio";
            risultato.classList.remove("c-green","c-red");
            risultato.classList.add("c-grey");
        } else {
            risultato.innerHTML = "Hai perso";
            risultato.classList.remove("c-green");
            risultato.classList.add("c-red");
        }
    }
})