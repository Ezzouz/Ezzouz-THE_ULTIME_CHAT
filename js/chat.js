function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


function chatUser(){
    var message = document.getElementById('chat-input').value;
    verifInsultes(message);            
}


function chatBot(){
    var questions = ['Bienvenue !<br> Comment allez-vous ?', 'Avez-vous passé une bonne journée ?', 'Voulez-vous que je vous raconte une blague ?', 'Voulez-vous que je vous fasse une devinette ?']
    creerMessageBot(questions[0]);
}

function verifMessageUser(message){
    var questions = ['Bienvenue !<br> Comment allez-vous ?', 'Avez-vous passé une bonne journée ?', 'Voulez-vous que je vous raconte une blague ?', 'Voulez-vous que je vous fasse une devinette ?']
    var leMessage = message;
    if(leMessage.toLowerCase().trim() == 'bien'){
        creerMessageBot(questions[1]);
    }
    else{
        if(!leMessage.trim() == ""){
        creerMessageBot("Je n'ai pas compris votre réponse.");
        }
    }
}

function verifInsultes(message){
    var leMessage = message;
    var possible = "*#?&";    
    var leMessageCens = "";
    var insulte = false;
    var lesInsultes = ['enculé', 'pute', 'pd', 'mes couilles', 'enfoiré', 'con', 'connard', 'con', 'salope'];
    for(var i = 0; i < lesInsultes.length; i++)
    {
        if(leMessage.toLowerCase().trim().includes(lesInsultes[i])){
            for (var i = 0; i < leMessage.length; i++){
                leMessageCens = leMessageCens + possible.charAt(getRandomInt(3));
                insulte = true;
            }            
            creerMessageUser(leMessageCens);  
            verifMessageUser(leMessageCens);    
              
        }
    }
    if(insulte == false){
        
        creerMessageUser(leMessage);
        verifMessageUser(leMessage);
    }    
    
}

  

  

  