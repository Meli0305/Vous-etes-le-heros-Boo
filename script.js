let chaptersObj = {
    Le_debut: {
        subtitle: "Débuter",
        text: "Tu es un fantôme qui travail dans une industrie de peur. Ton patron est faché, car tu ne fait pas peur c'est dernier temps. Donc, il te laisse une dernière chance pour te rattraper et t'envoie dans une maison. Tu a deux choix de pièce. Il y a la cuisine et la salle de bain. Ou veux-tu aller?",
        img: "Shovel_ref.png",
        video: "ezgif.com-gif-maker.mp4",
        options: [
            {optionText: "cuisine", action: "goToChapter('cuisine')"},
            {optionText: "toilette", action: "goToChapter('toilette')"},
            ]
    },

    cuisine: {
        subtitle: "Cusine",
        text: "Dans la cuisine, tu vois quatre items auquel tu peux intéragir.",
        img: "cuisine.jpg",
        options: [
            {optionText: "assiettes", action: "goToChapter('assiettes')"},
         {optionText: "chat", action: "goToChapter('chat')"},
         {optionText: "four", action: "goToChapter('four')"},
         {optionText: "detecteur", action: "goToChapter('detecteur')"}
        ]
    },

    assiettes: {
        subtitle: "Renverser les assiettes",
        text: "Tu decides de faire tomber les assiettes mais cela ne fait pas peur.",
        img: "broken.jpg",
        options: [
            {optionText: "renvoyer", action: "goToChapter('renvoyer')"},
    ]
    },

    chat: {
        subtitle: "Le chat",
        text: "Tu appercois le chat. Veux-tu le peindre en rouge pour simmuler du sang?",
        img: "chat.jpg",
        options: [
        {optionText: "oui", action: "verifirougelevre()"}
    ]
    },

    ouirouge: {
        subtitle: "Le chat en rouge",
        text: "Tu paint le chat en rouge, mais cela ne fait pas peur.",
        img: "chatrouge.jpg",
        options:[ {optionText: "oui", action: "goToChapter('renvoyer')"}
    ],
        
    },

    nonrouge: {
        subtitle: "Bon chat!",
        text: "Tu n'as rien pour peindre le chat en rouge, donc tu flattes le chat à la place.",
        img: "chat.jpg",
        options:[ {optionText: "retour", action: "goToChapter('Le_debut')"}],
        
    },


    four: {
        subtitle: "Four",
        text: "Tu veux monter la température du four. Peux-tu enlever le détecteur de fumer? ",
        img: "oven.png",
        options: [
            {optionText: "oui", action: "echec()"},]
        
    },

    ouidetect: {
        subtitle: "Le feu!",
        text: " Le feu a pris dans la maison et cela a apeuré les deux humains.",
        img: "smoke_alarm.jpg",
        options:[ {optionText: "Danger", action: "goToChapter('pas_renvoyer')"}]
        
    },

    nondetect: {
        subtitle: "Rien",
        text: "Cela ne fait pas peur à la personne, mais tu es dans la bonne voie. ",
        img: "smoke_alarm.jpg",
        options: [
            {optionText: "retour", action: "goToChapter('Le_debut')"}
        ]
    },

    detecteur: {
        subtitle: "Detecteur de fumer",
        text: "Tu vois que tu peux dévisser le détecteur. As-tu un tournevis?",
        img: "smoke_alarm.jpg",
        options: [
            {optionText: "ouitourne", action: "tournevisget()"},]
        },

    ouitourne: {
        subtitle: "Enlever le detecteur",
        text: "Tu enlèves le détecteur de fumer",
        img: "smoke_alarm.jpg",
        options: [
            {optionText: "retour", action: "goToChapter('Le_debut')"},
        ]
    },

    nontourne: {
        subtitle: "Tu peux rien faire",
        text: "Tu ne peu rien faire pour l'instant. Mais tu es dans la bonne voie.",
        img: "smoke_alarm.jpg",
        options: [{optionText: "ouitourne", action: "goToChapter('ouitourne')"},
        {optionText: "nontourne", action: "goToChapter('nontourne')"}]
    },

    toilette: {
        subtitle: "Toilette",
        text: "Tu as deux option à intéragir dans la salle de bain. Avec lequel veux-tu intéragir?",
        img: "toilette.jpg",
        options: [
        {optionText: "outil", action: "goToChapter('outil')"},
         {optionText: "maquillage", action: "goToChapter('maquillage')"}
    ]
    },

    outil: {
        subtitle: "Un tournevis!",
        text: "Tu trouves un tournevis.",
        img: "tournevis.jpg",
        options:[ {optionText: "retour", action: "goToChapter('Le_debut')"}
    ]
    },

    maquillage: {
        subtitle: "un rouge à levre",
        text: "Tu trouves un rouge à levre",
        img: "makeup.jpg",
        options: [
            {optionText: "retour", action: "rougelevreget()"}
    ]
    },

    renvoyer: {
        subtitle: "Renvoyer",
        text: "Tu es renvoyé(e)",
        img: "NAME_OF_IMAGE.png",
        video: "gameover.mp4",
        options:[ 
            {optionText: "recommencer", action: "goToChapter('Le_debut')"},
            {optionText: "effacer ma partie", action: "reset()"}
    ]
    },

    pas_renvoyer: {
        subtitle: "pas Renvoyer!!!",
        text: "Tu as gagné(e)!",
        img: "images.jpg",
        options:[ 
            {optionText: "recommencer", action: "goToChapter('Le_debut')"},
            {optionText: "effacer ma partie", action: "reset()"}
    ]
    },

};


function goToChapter(chapterName) {
   localStorage.setItem("Name",[chapterName]);

   let body = document.querySelector("body");
   body.setAttribute("class",[chapterName])

let son = document.querySelector(".check");
sonplaying = son.checked
if(sonplaying==true){
    const audio = new Audio("./assets/img/retro.mp3");
    audio.currentTime=0;
    audio.volume = 0.2;
audio.play();
}

    //query selector nom variable.checked
    
    console.log(chaptersObj[chapterName]["subtitle"]);
    console.log(chaptersObj[chapterName]["text"]);
    document.querySelector("h2").innerHTML = chaptersObj[chapterName]["subtitle"];
    document.querySelector("p").innerHTML = chaptersObj[chapterName]["text"];
    if(chaptersObj[chapterName]["video"]){
        document.querySelector(".img-change").innerHTML= `<video src="assets/img/${chaptersObj[chapterName]["video"]}" class="video" loop muted autoplay></video>`;
    }else{
      document.querySelector(".img-change").innerHTML= `<img src="assets/img/` + chaptersObj[chapterName]["img"] + `" class="image">`;  
    }
    
    let optionTableau = document.querySelector('.btn')
    optionTableau.innerHTML= "";
    for(element of chaptersObj[chapterName]["options"]){
        let btnAdd = document.createElement("button");
        btnAdd.setAttribute("onclick",element["action"]);
        btnAdd.setAttribute("type", "button");
        let btnText = document.createTextNode(element["optionText"]);
        btnAdd.appendChild(btnText);
        optionTableau.appendChild(btnAdd);
        
    }
    
};

localStorage.setItem("rougelevre" , false);
localStorage.setItem("tournevis" , false);
localStorage.setItem("four" , false);

let rougelevre = false;

function rougelevreget() {
    localStorage.setItem("rougelevre", true) ;
    rougelevre = Boolean("rougelevre");
    goToChapter('Le_debut');
  }

  function verifirougelevre() {
    if(rougelevre==true){
    goToChapter('ouirouge');
    }else{
    goToChapter('nonrouge'); 
    }
  }

  let fouralarme = false;

  function echec() {
    fouralarme = Boolean("four"); 
    goToChapter('pas_renvoyer');
  }

  function echecverifi() {
    if(fouralarme==true){
    goToChapter('ouidetect');
    }else{
    goToChapter('nondetect'); 
    }
  }

  let detecteurfumer = false;

  function tournevisget() {
    localStorage.setItem("tournevis", true) ;
    detecteurfumer = Boolean("tournevis"); 
    goToChapter('Le_debut');
  }

  function tournevisverifi() {
    if(detecteurfumer==true){
    goToChapter('ouitourne');
    }else{
    goToChapter('nontourne'); 
    }
  }


  let dernierchap =localStorage.getItem("Name")
function startGame() {
    goToChapter("Le_debut")
    if (dernierchap !== "Le_debut"){
       goToChapter(dernierchap) 
    } else {
        goToChapter("Le_debut")
    }
}

startGame()
  
function reset(){
    rougelevre = false;
    fouralarme = false;
    detecteurfumer = false;
    localStorage.removeItem("rougelevre");
    localStorage.removeItem("tournevis");
    localStorage.removeItem("four");
    goToChapter("Le_debut");
}

