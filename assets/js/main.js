//Chiedi all’utente il suo nome,
var myName = prompt("Ciao! Qual è il tuo nome?");
//poi chiedi il suo cognome,
var mySurname = prompt("ed il tuo cognome?");
//poi chiedi il suo colore preferito
var myFavColor = prompt("Un'ultima domanda! Qual è il tuo colore preferito?");
//Infine scrivi sulla pagina il risultato nomecognomecolorepreferito21
document.getElementById("msg").innerHTML = ("Ciao, " + myName + " " + mySurname + ". Il tuo colore preferito è: " + myFavColor);