let chaptersObj = {
    Le_debut: {
        subtitle: "Débuter",
        text: "Tu a deux choix de pièce. Il y a la cuisine et la salle de bain. Chacune des personnes est dans une pièce. Ou veux-tu aller?",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'cuisine', rentrer dans la cuisine: 'goToChapter('cuisine')'},};]",
        options: "[option2: {optionText: 'toilette', rentrer dans la toilette: 'goToChapter('toilette')'},};]",
    },

    cuisine: {
        subtitle: "Cusine",
        text: "Dans la cuisine tu vois quatre item auquel tu peux intéragir.",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'assiettes', action: 'goToChapter('assiettes')'},};]",
        options: "[option2: {optionText: 'chat', action: 'goToChapter('chat')'},};]",
        options: "[option3: {optionText: 'four', action: 'goToChapter('four')'},};]",
        options: "[option4: {optionText: 'detecteur', action: 'goToChapter('detecteur')'},};]",
    },

    assiettes: {
        subtitle: "Renverser les assiettes",
        text: "Tu decides de faire tomber les assiettes mais cela ne fait pas peur.",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'renvoyer', action: 'goToChapter('renvoyer')'},};]",
    },

    chat: {
        subtitle: "Le chat",
        text: "Tu appercois le chat. As-tu le rouge à levres?",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'oui', action: 'goToChapter('ouirouge')'},};]",
        options: "[option2: {optionText: 'non', action: 'goToChapter('nonrouge')'},};]",
        
    },

    ouirouge: {
        subtitle: "Le chat en rouge",
        text: "Tu paint le chat en rouge pour simmuler du sang mais cela ne fait pas peur.",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'oui', action: 'goToChapter('renvoyer')'},};]",
        
    },

    nonrouge: {
        subtitle: "Bon chat!",
        text: "Tu na rien pour peindre le chat en rouge donc tu flattes le chat à la place.",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'oui', action: 'goToChapter('Le_debut')'},};]",
        
    },


    four: {
        subtitle: "Four",
        text: "Tu peux monter la température du four. As-tu enlever le détecteur de fumer? ",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'oui', action: 'goToChapter('ouidetect')'},};]",
        options: "[option2: {optionText: 'non', action: 'goToChapter('nondetect')'},};]",
        
    },

    ouidetect: {
        subtitle: "Le feu!",
        text: " Le feu a pris dans la maison et cela à apeurer les deux humains.",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'Danger', action: 'goToChapter('pas_renvoyer')'},};]",
        
    },

    nondetect: {
        subtitle: "Rien",
        text: "cela na pas fait peur a la personne mais tu est dans la bonne voie. ",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'retour', action: 'goToChapter('Le_debut')'},};]",
        
    },

    detecteur: {
        subtitle: "Detecteur de fumer",
        text: "Tu vois que tu peux devicer le detecteur. As-tu un tournevice?",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'ouitourne', action: 'goToChapter('ouitourne')'},};]",
        options: "[option2: {optionText: 'nontourne', action: 'goToChapter('nontourne')'},};]",
    },

    ouitourne: {
        subtitle: "Enlever le detecteur",
        text: "Tu enleves le detecteur de fumer",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'retour', action: 'goToChapter('Le_debut')'},};]",
    },

    nontourne: {
        subtitle: "Tu peux rien faire",
        text: "Tu ne peux pas rien faire pour l'instant. Mais tu est dans la bonne vois.",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'ouitourne', action: 'goToChapter('ouitourne')'},};]",
        options: "[option2: {optionText: 'nontourne', action: 'goToChapter('nontourne')'},};]",
    },

    toilette: {
        subtitle: "Toilette",
        text: "Tu as trois option à interagir dans la salle de bain. Avec lequel veux tu interagir?",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'outil', action: 'goToChapter('outil')'},};]",
        options: "[option2: {optionText: 'mirroir', action: 'goToChapter('miroir')'},};]",
        options: "[option3: {optionText: 'maquillage', action: 'goToChapter('maquillage')'},};]",
    },

    outil: {
        subtitle: "Un tournevis!",
        text: "Tu trouve un tournevis.",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'retour', action: 'goToChapter('Le_debut')'},};]",
    },

    maquillage: {
        subtitle: "un rouge à levre",
        text: "Tu trouve un rouge a levre",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'retour', action: 'goToChapter('Le_debut')'},};]",
    },

    miroir: {
        subtitle: "Écriture sur le mirroir",
        text: "As-tu quelque chose pour ecrire sur le miroir?",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'oui', action: 'goToChapter('ouimiroire')'},};]",
        options: "[option2: {optionText: 'non', action: 'goToChapter('nonmiroir')'},};]",
    },

    nonmiroir: {
        subtitle: "Écriture sur le mirroir",
        text: "Tu nas rien a écrire sur le miroir.",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'retour', action: 'goToChapter('Le_debut')'},};]",
    },

    ouimiroir: {
        subtitle: "Écriture sur le mirroir",
        text: "Tu as trois idee pour ecrire dans le miroir. Que choisis tu?",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'ecrire bonjour', action: 'goToChapter('bonjour')'},};]",
        options: "[option2: {optionText: 'faire un bonhomme sourire', action: 'goToChapter('sourire')'},};]",
        options: "[option3: {optionText: 'Je te vois', action: 'goToChapter('vois')'},};]",
    },

    bonjour: {
        subtitle: "Renvoyer",
        text: "TEXT_EXPLAINING_THE_CHAPTER",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'recommencer', action: 'goToChapter('renvoyer')'},};]",
    },

    sourire: {
        subtitle: "Renvoyer",
        text: "TEXT_EXPLAINING_THE_CHAPTER",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'recommencer', action: 'goToChapter('renvoyer')'},};]",
    },

    vois: {
        subtitle: "Renvoyer",
        text: "TEXT_EXPLAINING_THE_CHAPTER",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'recommencer', action: 'goToChapter('pas_renvoyer')'},};]",
    },

    renvoyer: {
        subtitle: "Renvoyer",
        text: "Tu est renvoyer",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'recommencer', action: 'goToChapter('Le_debut')'},};]",
    },

    pas_renvoyer: {
        subtitle: "pas Renvoyer?",
        text: "Tu as gagner!",
        img: "../assets/images/NAME_OF_IMAGE.png",
        options: "[option1: {optionText: 'recommencer', action: 'goToChapter('Le_debut')'},};]",
    },



};

function goToChapter(chapterName) {
    console.log(chaptersObj[chapterName]["subtitle"]);
    console.log(chaptersObj[chapterName]["text"]);
};

