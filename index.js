/* Déclarations */
const livres = document.querySelector("ul.livres"); // balise ul de classe livres
const listeLivres = livres.querySelectorAll("li"); // liste des li de livres
const listeTitres = livres.querySelectorAll("h2"); // liste des titres de livres
const listeImages = livres.querySelectorAll("img"); // liste des images de livres
const listeAuteurs = livres.querySelectorAll("h3"); // liste des auteurs de livres
const listeResumes = livres.querySelectorAll("p"); // liste des résumés de livres


/*
    <ul class="livres exercices">             // livres
        <li>
            <img>               // li img : listeLivres
            ...
        ...
    </ul>
    <h2 class="titre"></h2>     // titre
    <h3 class="auteur"></h3>    // auteur
    <p class="resume"></p>      // resume
</div>
*/

livres.classList.add('exercice');
listeImages[0].style.opacity = 1;

const titre = document.createElement('h2');
titre.className = 'titre';
titre.textContent = livres.querySelector('h2').textContent;

const auteur = document.createElement('h3');
auteur.className = 'auteur';
auteur.textContent = livres.querySelector('h3').textContent;

const resume = document.createElement('p');
resume.className = 'resume';
resume.textContent = livres.querySelector('p').textContent;

livres.appendChild(titre);
livres.appendChild(auteur);
livres.appendChild(resume);



listeLivres.forEach(function (livre, index) {
    livre.addEventListener('click', () => {
        listeImages.forEach((img) => opacity(img, 0.1));
        show(livre.querySelector('img'));
        hide(titre);
        hide(auteur);
        hide(resume).finished.then(() => {
            titre.textContent = livre.querySelector('h2').textContent;
            auteur.textContent = livre.querySelector('h3').textContent;
            resume.textContent = livre.querySelector('p').textContent;
            [titre,auteur,resume].forEach((elt)=>show(elt));
        })
    });
});

const opacity = (elt, val = 1, duration=1000) => {
    const op = window.getComputedStyle(elt).opacity;
    const keyframes = [
        {
            opacity: op,
        },
        {
            opacity: val,
        },
    ];

    const options = {
        duration: duration,
        fill: 'forwards',
    };
    return elt.animate(keyframes, options);
}

const show = (elt) => opacity(elt);
const hide = (elt) => opacity(elt, 0);