<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width; initial-scale=1;" />
  <link href="/css/styles.css" rel="stylesheet" />
  <title>ULTIME CHAT BOT</title>
</head>
<body onload="chatBot()">
<div class="time">
<span id="display-date"></span>
</div>
<section>
    <h1>Bob l'assistant personnel</h1>
    <span>ou juste un BOT</span>
    <div class="container" id="container1">
        <div class="form-container sign-in-container">
            <div id="conversation">
                    
            </div>
            <div class="envoi">
                <input id="chat-input" type="text" placeholder="chatter..."">
                <button onclick="chatUser()">Envoyer</button>

            </div>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello <label id="pseudo">You</label> 🖖 !</h1>
                    <p>Entrez votre prénom pour commencer à conquérir le monde !</p>
                    <input id="name-input" type="text" placeholder="Votre prénom..." onkeypress="verifierCaracteres(event); return false;">
                    <button onclick="afficherPseudo()">Changer d'identité</button>
                </div>
            </div>
        </div>
    </div>
    <button class="deco" onclick="deco()" >Se déconecter 😴</button>
    <footer>
        <p>
            Made in 🌍 with ❤ by 🧞️.
        </p>
    </footer>
</section>
<!-- partial -->
  <script  src="/js/pseudo.js"></script>
  <script  src="/js/date.js"></script>
  <script  src="/js/verifCaractere.js"></script>
  <script src="/js/elementCreator.js"></script>
  <script src="/js/chat.js"></script>
<script src="/js/deco.js"></script>

</body>
</html>