
document.addEventListener('DOMContentLoaded', function(){
    let proiecte = [
        {id: 1, title: 'Coffee & Tea', link: 'https://coffee.mihaii.com/', des: 'Site-ul unei firme de exercitiu, scopul site-ului este de a avea o prezenta online, descriere servicii si produse + cumpararea online a acstora.', image: 'ProjectsImg/coffee.png'},
        {id: 2, title: 'MSD', link: 'https://msd.mihaii.com/', des: 'O asociație nonprofit, înființată pe 16 mai 2024, dedicată sprijinirii copiilor aflați în dificultate și comunităților din zone defavorizate. Misiunea noastră este să aducem', image: 'ProjectsImg/msd.png'},
        {id: 3, title: 'Profinex', link: 'https://profinex.mihaii.com/', des: 'Profinex este un site web creat pentru un client cu scopul de a prezenta serviciile oferite într-un mod modern, dar și o adresă de e-mail pentru contact.', image: 'ProjectsImg/Profinex1.jpg'},
        {id: 4, title: 'ePlants', link: 'https://eplants.mihaii.com/', des: 'Un portofoliu pentru toate aplicațiile, de la functii JSON local până la jocuri precum Ghicește numărul sau animații de derulare.', image: 'ProjectsImg/ePlants1.jpg'},
        {id: 5, title: 'mihaii.com', link: 'https://mihaii.com/', des: 'Site-ul oficial a per. care gazduieste in momentul de fata domeniul!', image: 'ProjectsImg/creator.png'},
        {id: 6, title: 'Database', link: 'https://online-nx41.onrender.com/login', des: 'Un proiect dedicat site-urilor bazate pe servere (node.js), care pot transmite informatii catre o baza de date.', image: 'ProjectsImg/online.png'},
        {id: 7, title: 'Proiectul Tau!', link: '', des: 'Prin colaborare cu noi, beneficiezi de o publicitate gratuita pe site-ul nostru!', image: 'ProjectsImg/soon.png'},
    ]

    const proiecteContainer = document.getElementById('project-container-all');
    proiecteContainer.innerHTML = '';
    proiecte.forEach(proiect => {
        const pr = `<div id='pr${proiect.id}' class="project-container">
                        <div class="img-back">
                            <img src='${proiect.image}'>
                        </div>
                        <div class="proj-info">
                            <div class="part1-info">
                                <p>${proiect.title}</p>
                            </div>
                            <div class="part2-info">
                                <div class='inf2-1'><p>${proiect.des}</p></div>
                                <div class='inf2-2'><a href='${proiect.link}'><button class="vezi-pr">Vezi <span> ↗</span></button></a></div>
                            </div>
                        </div>
                    </div>`;

        proiecteContainer.innerHTML += pr;
    })

    const showMore = document.getElementById('show-btn');
    const showContent1 = document.querySelectorAll('#pr1, #pr2, #pr3');
    const showContent2 = document.querySelectorAll('#pr4, #pr5, #pr6');
    const showContent3 = document.querySelectorAll('#pr7');
    const screenWidth = window.innerWidth;
    let step = 0;

    const allContent = document.querySelectorAll('#pr1, #pr2, #pr3, #pr4, #pr5, #pr6, #pr7');
    allContent.forEach(el => el.style.display = 'none');

    if (screenWidth > 925){
        width925();
    }
    else if (621 < screenWidth && screenWidth <= 925){
        width621();
    }
    else if (screenWidth < 620){
        width620();
    }

    let lastWidth = screenWidth;
    window.addEventListener('resize', function () {
        if (
            (lastWidth <= 620 && window.innerWidth > 620) ||
            (lastWidth <= 925 && window.innerWidth > 925) ||
            (lastWidth > 925 && window.innerWidth <= 925) ||
            (lastWidth > 620 && window.innerWidth <= 620)
        ) {
            location.reload();
        }
    });

    function width925() {
        if (screenWidth > 925){
        showContent1.forEach(el => el.style.display = 'block');
        showContent2.forEach(el => el.style.display = 'block');

        showMore.addEventListener('click', function () {
            step++;

            if (step === 1) {
                showContent3.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai putine';
                console.log(step);
            }

            else {
                showContent3.forEach(el => el.style.display = 'none');
                showMore.textContent = 'Arată mai multe';
                step = 0;
                console.log(step);
            }
        })
    }
    }
    
    function width621() {
        if (621 < screenWidth && screenWidth < 925){
        showContent1.forEach(el => el.style.display = 'block');
        showContent2[0].style.display = 'block';

        showMore.addEventListener('click', function (){
            step++;

            if(step === 1){
                showContent2.forEach(el => el.style.display = 'block');
                showContent3.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai putine';
                console.log(step);
            }

            else{
                showContent2[1].style.display = 'none';
                showContent2[2].style.display = 'none';
                showContent3.forEach(el => el.style.display = 'none');
                showMore.textContent = 'Arată mai multe';
                step = 0;
                console.log(step);
            }
        })
    }
    }
    
    function width620() {
        if (screenWidth < 620){
        showContent1.forEach(el => el.style.display = 'block');

        showMore.addEventListener('click', function(){
            step++;
            console.log(step);

            if (step === 1){
                showContent2.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai multe';
                console.log(step);
            }

            else if (step === 2){
                showContent3.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai putine';
                console.log(step);
            }

            else{
                showContent2.forEach(el => el.style.display = 'none');
                showContent3.forEach(el => el.style.display = 'none');
                showMore.textContent = 'Arată mai multe';
                step = 0;
                console.log(step);
            }
        })
    }
    }
})