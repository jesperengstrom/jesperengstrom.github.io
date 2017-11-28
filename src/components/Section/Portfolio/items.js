import React from 'react';

//img sizes: thumb 400*350px

export const items = [
    {
        name: 'LuffarschApp',
        id: 'item-8',
        date: 'September 2017',
        description: <span><p>LuffarschApp är en webbapp byggd i React där man utmanar och spelar luffarschack mot andra användare.</p><p>Spelet, liksom inloggade spelare, spelstatus och ranking uppdateras i realtid.</p></span>,
        tools: ['React', 'Firebase', 'Styled Components', 'Semantic UI'],
        url: 'http://jesperengstrom.se/luffarschapp/',
        repo: 'https://github.com/jesperengstrom/luffarschapp',
        img: 'luffarschapp.jpg',
        color: 'rgb(82, 126, 124)'
    },
    {
        name: 'Palmekartan',
        id: 'item-7',
        date: 'Augusti 2017',
        description: <span><p>Palmekartan är ett försök att visualisera vittnesiakttagelser kring mordet på Olof Palme 1986 genom att placera ut dem på en tidslinje och en karta tillsammans med källhänvisningar.</p><p>Intresserade privatspanare kan själva bidra genom att logga in och posta eller redigera information.</p></span>,
        tools: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'ES6'],
        url: 'http://palmekartan.cloudno.de/',
        repo: 'https://github.com/jesperengstrom/pk',
        img: 'palmekartan.jpg',
        color: 'rgb(119, 35, 36)'
    }, 
    {
        name: 'Talartoppen',
        id: 'item-6',
        date: 'April 2017',
        description: <span><p>Talartoppen använder Riksdagens öppna API för att räkna ut vilka riksdagsledamöter som varit mest aktiva i debatterna i kammaren.</p><p>Det går även att skapa topp- och bottenlistor för de olika partierna och jämförande statistik partierna emellan.</p></span>,
        tools: ['Ajax', 'jQuery', 'Bootstrap', 'Gulp', 'SASS'],
        url: 'http://jesperengstrom.se/Talartoppen/',
        repo: 'https://github.com/jesperengstrom/Talartoppen',
        img: 'talartoppen.jpg',
        color: 'rgb(94, 135, 89)'

    },
    {
        name: 'Front end blog',
        id: 'item-5',
        date: 'Maj 2017',
        description: <span><p>En blogg och bloggplattform/CMS byggd från grunden i PHP.</p><p>Inloggade användare kan posta, redigera och gilla inlägg, redigera sin profil m.m.</p></span>,
        tools: ['PHP', 'MySQL'],
        url: 'http://fontendblog.rf.gd',
        repo: 'https://github.com/phpgrupp/simple-cms',
        img: 'front-end-blog.jpg',
        color: 'rgb(61, 44, 89)'
    },
    {
        name: 'JMDb',
        id: 'item-4',
        date: 'Mars 2017',
        description: <span><p>JMDb är en filmdatabas där det går att lägga till, söka efter, sortera och betygsätta filmer.</p><p>I detta projekt låg fokus på att hantera JSON-objekt och implementera designmönster; <em>module pattern</em> och <em>revealing module pattern</em> i detta fall.</p></span>,
        tools: ['JavaScript', 'Bootstrap'],
        url: 'http://jesperengstrom.se/JMDb/',
        repo: 'https://github.com/jesperengstrom/JMDb',
        img: 'jmdb.jpg',
        color: 'rgb(212, 192, 70)'
    },
    {
        name: 'Asap Dev',
        id: 'item-3',
        date: 'Januari 2017',
        description: <span><p>En sajt till den fiktiva webbyrån Asap Development.</p><p>Denna gruppuppgift gick ut på att bygga en responsiv sajt utifrån en designskiss - först utan och sedan med ett ramverk.</p><p>Det var också en övning i att jobba agilt och versionshantera med Git.</p></span>,
        tools: ['HTML', 'CSS', 'Adobe Photoshop', 'SASS', 'Bootstrap', 'Git'],
        url: 'https://danteuh.github.io/asap-development/',
        repo: 'https://github.com/DanteUh/asap-development/',
        img: 'asap-dev.jpg',
        color: 'rgb(191, 114, 24)'
    },
    {
        name: 'Designexempel',
        id: 'item-2',
        date: 'December 2016',
        description: <span><p>Några små designövningar i jobba med till exempel grids & gutters, responsiva designkomponenter och atomic design. </p></span>,
        tools: ['Adobe Photoshop'],
        url: 'https://photos.app.goo.gl/EdoLX5WM2L4pHMi62',
        img: 'design-examples.jpg',
        color: 'rgb(50, 16, 58)'
    },
    {
        name: 'Sänka skepp',
        id: 'item-1',
        date: 'December 2016',
        description: <span><p>Ett sänka skepp-spel skrivet vanilla JS, mest på kul.</p></span>,
        tools: ['JavaScript'],
        url: 'http://jesperengstrom.se/battleship/',
        repo: 'https://github.com/jesperengstrom/battleship',
        img: 'sanka-skepp.jpg',
        color: 'rgb(75, 114, 155)'
    }
];


