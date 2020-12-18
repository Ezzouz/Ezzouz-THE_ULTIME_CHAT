function getPseudo() {
    // Sélectionner l'élément input et récupérer sa valeur
    var pseudo = document.getElementById("name-input").value;
    var res;
    if(document.getElementById('name-input').value.trim() == ""){
        res = "You";
    }
    else{
        res = pseudo;
    }    
    return res;
}

function afficherPseudo(){
    var pseudoUser = getPseudo();
    document.getElementById('pseudo').innerHTML = pseudoUser;
}