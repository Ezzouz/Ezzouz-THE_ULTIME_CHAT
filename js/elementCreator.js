function creerMessageUser(lemessage){
    var message = lemessage;
    var messageHTML = '<div id="userDiv1" class="msg right-msg"><div id="userDiv2" class="msg-bubble"><div id="userDiv3" class="msg-info"><div id="userDiv4" class="msg-info-name">Vous</div><div id="heure" class="msg-info-time">' + displayHour() + '</div></div><div id="userDiv6" class="msg-text">' + message + '</div></div></div>';
    if(message.trim() == ""){
            alert('Veuillez entrer un message !');
    }
    else{
        var convers = document.getElementById('conversation');
        convers.insertAdjacentHTML('beforeend', messageHTML);
        document.getElementById('chat-input').value = "";                
    }    
}

function creerMessageBot(lemessage){
    var message = lemessage;
    var messageHTML = '<div id="botDiv1" class="msg left-msg"><div id="botDiv2" class="msg-bubble"><div id="botDiv3" class="msg-info"><div id="botDiv4" class="msg-info-name">Assistant</div><div id="heure" class="msg-info-time">' + displayHour() + '</div></div><div id="botDiv6" class="msg-text">'+ message +'</div></div></div>';
    var convers = document.getElementById('conversation');
    convers.insertAdjacentHTML('beforeend', messageHTML);
    document.getElementById('chat-input').value = "";
           
}