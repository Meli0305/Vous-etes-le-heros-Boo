let chaptersObj = {
    Le_debut: {
        subtitle: "Débuter",
        text: "Tu a deux choix de pièce. Il y a la cuisine et la salle de bain. Chacune des personnes est dans une pièce. Ou veux-tu aller?",
        img: "Shovel_ref.png",
        options: [
            {optionText: "cuisine", action: "goToChapter('cuisine')"},
            {optionText: "toilette", action: "goToChapter('toilette')"},
            ]
    },

    cuisine: {
        subtitle: "Cusine",
        text: "Dans la cuisine tu vois quatre item auquel tu peux intéragir.",
        img: "NAME_OF_IMAGE.png",
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
        img: "NAME_OF_IMAGE.png",
        options: [
            {optionText: "renvoyer", action: "goToChapter('renvoyer')"},
    ]
    },

    chat: {
        subtitle: "Le chat",
        text: "Tu appercois le chat. Veux-tu le peindre en rouge?",
        img: "NAME_OF_IMAGE.png",
        options: [
        {optionText: "oui", action: "verifirougelevre()"}
    ]
    },

    ouirouge: {
        subtitle: "Le chat en rouge",
        text: "Tu paint le chat en rouge pour simmuler du sang mais cela ne fait pas peur.",
        img: "NAME_OF_IMAGE.png",
        options:[ {optionText: "oui", action: "goToChapter('renvoyer')"}
    ],
        
    },

    nonrouge: {
        subtitle: "Bon chat!",
        text: "Tu na rien pour peindre le chat en rouge donc tu flattes le chat à la place.",
        img: "NAME_OF_IMAGE.png",
        options:[ {optionText: "retour", action: "goToChapter('Le_debut')"}],
        
    },


    four: {
        subtitle: "Four",
        text: "Tu veux monter la température du four. Peu-tu enlever le détecteur de fumer? ",
        img: "NAME_OF_IMAGE.png",
        options: [
            {optionText: "oui", action: "echec()"},]
        
    },

    ouidetect: {
        subtitle: "Le feu!",
        text: " Le feu a pris dans la maison et cela à apeurer les deux humains.",
        img: "NAME_OF_IMAGE.png",
        options:[ {optionText: "Danger", action: "goToChapter('pas_renvoyer')"}]
        
    },

    nondetect: {
        subtitle: "Rien",
        text: "cela na pas fait peur a la personne mais tu est dans la bonne voie. ",
        img: "NAME_OF_IMAGE.png",
        options: [
            {optionText: "retour", action: "goToChapter('Le_debut')"}
        ]
    },

    detecteur: {
        subtitle: "Detecteur de fumer",
        text: "Tu vois que tu peux devicer le detecteur. As-tu un tournevice?",
        img: "NAME_OF_IMAGE.png",
        options: [
            {optionText: "ouitourne", action: "tournevisget()"},]
        },

    ouitourne: {
        subtitle: "Enlever le detecteur",
        text: "Tu enleves le detecteur de fumer",
        img: "NAME_OF_IMAGE.png",
        options: [
            {optionText: "retour", action: "goToChapter('Le_debut')"},
        ]
    },

    nontourne: {
        subtitle: "Tu peux rien faire",
        text: "Tu ne peux pas rien faire pour l'instant. Mais tu est dans la bonne vois.",
        img: "NAME_OF_IMAGE.png",
        options: [{optionText: "ouitourne", action: "goToChapter('ouitourne')"},
        {optionText: "nontourne", action: "goToChapter('nontourne')"}]
    },

    toilette: {
        subtitle: "Toilette",
        text: "Tu as trois option à interagir dans la salle de bain. Avec lequel veux tu interagir?",
        img: "NAME_OF_IMAGE.png",
        options: [
        {optionText: "outil", action: "goToChapter('outil')"},
         {optionText: "mirroir", action: "goToChapter('miroir')"},
         {optionText: "maquillage", action: "goToChapter('maquillage')"}
    ]
    },

    outil: {
        subtitle: "Un tournevis!",
        text: "Tu trouve un tournevis.",
        img: "NAME_OF_IMAGE.png",
        options:[ {optionText: "retour", action: "goToChapter('Le_debut')"}
    ]
    },

    maquillage: {
        subtitle: "un rouge à levre",
        text: "Tu trouve un rouge a levre",
        img: "NAME_OF_IMAGE.png",
        options: [
            {optionText: "retour", action: "rougelevreget()"}
    ]
    },

    miroir: {
        subtitle: "Écriture sur le mirroir",
        text: "As-tu quelque chose pour ecrire sur le miroir?",
        img: "NAME_OF_IMAGE.png",
        options:[ 
            {optionText: "oui", action: "rougelevremirroirget()"},
    ]
    },

    nonmiroir: {
        subtitle: "Écriture sur le mirroir",
        text: "Tu nas rien a écrire sur le miroir.",
        img: "NAME_OF_IMAGE.png",
        options:[ 
            {optionText: "retour", action: "goToChapter('Le_debut')"}
    ]
    },

    ouimiroir: {
        subtitle: "Écriture sur le mirroir",
        text: "Tu as trois idee pour ecrire dans le miroir. Que choisis tu?",
        img: "NAME_OF_IMAGE.png",
        options: [ 
        {optionText: "ecrire bonjour", action: "goToChapter('bonjour')"},
        {optionText: "faire un bonhomme sourire", action: "goToChapter('sourire')"},
        {optionText: "Je te vois", action: "goToChapter('vois')"},
    ]
    },

    bonjour: {
        subtitle: "Renvoyer",
        text: "TEXT_EXPLAINING_THE_CHAPTER",
        img: "NAME_OF_IMAGE.png",
        options: [
            {optionText: "recommencer", action: "goToChapter('renvoyer')"}
    ]
    },

    sourire: {
        subtitle: "Renvoyer",
        text: "TEXT_EXPLAINING_THE_CHAPTER",
        img: "NAME_OF_IMAGE.png",
        options:[ 
            {optionText: "recommencer", action: "goToChapter('renvoyer')"}
    ]
    },

    vois: {
        subtitle: "Renvoyer",
        text: "TEXT_EXPLAINING_THE_CHAPTER",
        img: "NAME_OF_IMAGE.png",
        options:[ 
            {optionText: "recommencer", action: "goToChapter('pas_renvoyer')"}
    ]
    },

    renvoyer: {
        subtitle: "Renvoyer",
        text: "Tu est renvoyer",
        img: "NAME_OF_IMAGE.png",
        options:[ 
            {optionText: "recommencer", action: "goToChapter('Le_debut')"}
    ]
    },

    pas_renvoyer: {
        subtitle: "pas Renvoyer?",
        text: "Tu as gagner!",
        img: "NAME_OF_IMAGE.png",
        options:[ 
            {optionText: "recommencer", action: "goToChapter('Le_debut')"}
    ]
    },

};

function goToChapter(chapterName) {
    console.log(chaptersObj[chapterName]["subtitle"]);
    console.log(chaptersObj[chapterName]["text"]);
    document.querySelector("h2").innerHTML = chaptersObj[chapterName]["subtitle"];
    document.querySelector("p").innerHTML = chaptersObj[chapterName]["text"];
    document.querySelector(".img-change").innerHTML= `<img src="../assets/img/` + chaptersObj[chapterName]["img"] + `" class="image">`;
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

let rougelevre = false;

function rougelevreget() {
    rougelevre = true; 
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
    fouralarme = true; 
    goToChapter('Le_debut');
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
    detecteurfumer = true; 
    goToChapter('Le_debut');
  }

  function tournevisverifi() {
    if(detecteurfumer==true){
    goToChapter('ouitourne');
    }else{
    goToChapter('nontourne'); 
    }
  }

  let rougelevremirroir = false;

function rougelevremirroirget() {
    rougelevremirroir = true; 
    goToChapter('Le_debut');
  }

  function rougelevremirroirverifi() {
    if(rougelevremirroir==true){
    goToChapter('ouimiroir');
    }else{
    goToChapter('nonmiroir'); 
    }
  }
  