const emailsarray = ["ciao", "ciao2", "ciao4", "ciao3", "ciao5", "marco.amico@gmail.com"];
const button = document.getElementById("Btn");
let controllo = false;
let verifica = document.getElementById("Verifica");
button.addEventListener('click', function () {
    controllo = false;
    const email = document.getElementById('userEmail').value;
    for (let i = 0; i < emailsarray.length && controllo == false; i++) {
        if (email == emailsarray[i]) {
            verifica.innerText = `Verificato`;
            verifica.classList.add("c-green");
            controllo = true;
            document.getElementById("userEmail").value = " ";
        }
    }
    if (controllo == false) {
        verifica.innerText = `Non Verificato`;
        verifica.classList.add("c-red");
        document.getElementById("userEmail").value = " ";
    }
})
