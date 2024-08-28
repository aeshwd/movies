document.addEventListener('DOMContentLoaded', () => {
 /*  // Slider functionality
    const slides = document.querySelectorAll('.slider .slides img');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    document.querySelector('.next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);  */

    // Search functionality
    document.getElementById('search-bar').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        document.querySelectorAll('.movie-item').forEach(item => {
            const title = item.querySelector('h4').textContent.toLowerCase();
            item.style.display = title.includes(query) ? 'block' : 'none';
        });
    });  

    // Example movie data (Replace with your actual movie data)

const movies = {
    'adult-movies': [
        { name: 'The Dark Knight', image: 'images/dark.jpeg', url: 'https://youtu.be/AxMKVL3j990?si=twgzfR8R-z3I4UH9' },
        { name: 'Inception', image: 'images/inception.jpeg', url: 'https://youtu.be/HSaQoVOFS1U?si=q3NpAS3KXW4tmsVg' },
        { name: 'Fight Club', image: 'images/flight.jpg', url: 'https://youtu.be/6wzdhs6vx7Y?si=2AKPQTkRJjM6bZ1T' },
        { name: 'Pulp Fiction', image: 'images/pulp.jpeg', url: 'https://youtu.be/tGpTpVyI_OQ?si=aZm5-2n50-ADP1xe' } /*,
        { name: 'The Godfather', image: 'https://example.com/images/godfather.jpg', url: 'https://example.com/watch/godfather' },
        { name: 'Shutter Island', image: 'https://example.com/images/shutter-island.jpg', url: 'https://example.com/watch/shutter-island' },
        { name: 'Se7en', image: 'https://example.com/images/seven.jpg', url: 'https://example.com/watch/seven' },
        { name: 'The Departed', image: 'https://example.com/images/departed.jpg', url: 'https://example.com/watch/departed' },
        { name: 'American Psycho', image: 'https://example.com/images/american-psycho.jpg', url: 'https://example.com/watch/american-psycho' },
        { name: 'The Usual Suspects', image: 'https://example.com/images/usual-suspects.jpg', url: 'https://example.com/watch/usual-suspects' },
        { name: 'Casino Royale', image: 'https://example.com/images/casino-royale.jpg', url: 'https://example.com/watch/casino-royale' },
        { name: 'Requiem for a Dream', image: 'https://example.com/images/requiem.jpg', url: 'https://example.com/watch/requiem' },
        { name: 'The Wolf of Wall Street', image: 'https://example.com/images/wolf-wall-street.jpg', url: 'https://example.com/watch/wolf-wall-street' },
        { name: 'A Clockwork Orange', image: 'https://example.com/images/clockwork-orange.jpg', url: 'https://example.com/watch/clockwork-orange' },
        { name: 'Oldboy', image: 'https://example.com/images/oldboy.jpg', url: 'https://example.com/watch/oldboy' },
        { name: 'Memento', image: 'https://example.com/images/memento.jpg', url: 'https://example.com/watch/memento' },
        { name: 'Donnie Darko', image: 'https://example.com/images/donnie-darko.jpg', url: 'https://example.com/watch/donnie-darko' },
        { name: 'Her', image: 'https://example.com/images/her.jpg', url: 'https://example.com/watch/her' },
        { name: 'Black Swan', image: 'https://example.com/images/black-swan.jpg', url: 'https://example.com/watch/black-swan' },
        { name: 'The Revenant', image: 'https://example.com/images/revenant.jpg', url: 'https://example.com/watch/revenant' },
        { name: 'Gone Girl', image: 'https://example.com/images/gone-girl.jpg', url: 'https://example.com/watch/gone-girl' } */
    ],
    'bollywood-movies': [
        { name: 'Kabir Singh', image: 'images/kabir.jpeg', url: 'https://example.com/watch/kabir-singh' },
        { name: '3 Idiots', image: 'images/3.jpeg', url: 'https://example.com/watch/3-idiots' },
        { name: 'Dangal', image: 'images/dangal.jpeg', url: 'https://example.com/watch/dangal' },
        { name: 'Bhai', image: 'images/bajrangi.jpeg', url: 'https://example.com/watch/bajrangi-bhaijaan' }  /*,
        { name: 'Gully Boy', image: 'https://example.com/images/gully-boy.jpg', url: 'https://example.com/watch/gully-boy' },
        { name: 'Padmaavat', image: 'https://example.com/images/padmaavat.jpg', url: 'https://example.com/watch/padmaavat' },
        { name: 'Queen', image: 'https://example.com/images/queen.jpg', url: 'https://example.com/watch/queen' },
        { name: 'Jab We Met', image: 'https://example.com/images/jab-we-met.jpg', url: 'https://example.com/watch/jab-we-met' },
        { name: 'Zindagi Na Milegi Dobara', image: 'https://example.com/images/zindagi.jpg', url: 'https://example.com/watch/zindagi' },
        { name: 'Sultan', image: 'https://example.com/images/sultan.jpg', url: 'https://example.com/watch/sultan' },
        { name: 'Barfi!', image: 'https://example.com/images/barfi.jpg', url: 'https://example.com/watch/barfi' },
        { name: 'Chennai Express', image: 'https://example.com/images/chennai-express.jpg', url: 'https://example.com/watch/chennai-express' },
        { name: 'Dil Chahta Hai', image: 'https://example.com/images/dil-chahta-hai.jpg', url: 'https://example.com/watch/dil-chahta-hai' },
        { name: 'Tanu Weds Manu', image: 'https://example.com/images/tanu-weds-manu.jpg', url: 'https://example.com/watch/tanu-weds-manu' },
        { name: 'Raazi', image: 'https://example.com/images/raazi.jpg', url: 'https://example.com/watch/raazi' },
        { name: 'Kapoor & Sons', image: 'https://example.com/images/kapoor-sons.jpg', url: 'https://example.com/watch/kapoor-sons' },
        { name: 'Aashiqui 2', image: 'https://example.com/images/aashiqui-2.jpg', url: 'https://example.com/watch/aashiqui-2' },
        { name: 'Kal Ho Na Ho', image: 'https://example.com/images/kal-ho-na-ho.jpg', url: 'https://example.com/watch/kal-ho-na-ho' },
        { name: 'My Name is Khan', image: 'https://example.com/images/my-name-is-khan.jpg', url: 'https://example.com/watch/my-name-is-khan' },
        { name: 'Hum', image: 'https://example.com/images/hum.jpg', url: 'https://example.com/watch/hum' } */
    ],
    'kids-cartoons': [
        { name: 'SpongeBob SquarePants', image: 'images/car1.png', url: 'https://example.com/watch/spongebob' },
        { name: 'Paw Patrol', image: 'images/car2.jpeg', url: 'https://example.com/watch/paw-patrol' },
        { name: 'Peppa Pig', image: 'images/car3.jpeg', url: 'https://example.com/watch/peppa-pig' },
        { name: 'Dora the Explorer', image: 'images/car4.jpeg', url: 'https://example.com/watch/dora' } /*,
        { name: 'Tom and Jerry', image: 'https://example.com/images/tom-and-jerry.jpg', url: 'https://example.com/watch/tom-and-jerry' },
        { name: 'Mickey Mouse Clubhouse', image: 'https://example.com/images/mickey-mouse.jpg', url: 'https://example.com/watch/mickey-mouse' },
        { name: 'Sesame Street', image: 'https://example.com/images/sesame-street.jpg', url: 'https://example.com/watch/sesame-street' },
        { name: 'The Lion Guard', image: 'https://example.com/images/lion-guard.jpg', url: 'https://example.com/watch/lion-guard' },
        { name: 'My Little Pony', image: 'https://example.com/images/my-little-pony.jpg', url: 'https://example.com/watch/my-little-pony' },
        { name: 'Curious George', image: 'https://example.com/images/curious-george.jpg', url: 'https://example.com/watch/curious-george' },
        { name: 'Arthur', image: 'https://example.com/images/arthur.jpg', url: 'https://example.com/watch/arthur' },
        { name: 'Bluey', image: 'https://example.com/images/bluey.jpg', url: 'https://example.com/watch/bluey' },
        { name: 'Trollhunters', image: 'https://example.com/images/trollhunters.jpg', url: 'https://example.com/watch/trollhunters' },
        { name: 'Bob the Builder', image: 'https://example.com/images/bob-builder.jpg', url: 'https://example.com/watch/bob-builder' },
        { name: 'The Magic School Bus', image: 'https://example.com/images/magic-school-bus.jpg', url: 'https://example.com/watch/magic-school-bus' },
        { name: 'Caillou', image: 'https://example.com/images/caillou.jpg', url: 'https://example.com/watch/caillou' },
        { name: 'Wild Kratts', image: 'https://example.com/images/wild-kratts.jpg', url: 'https://example.com/watch/wild-kratts' },
        { name: 'Sid the Science Kid', image: 'https://example.com/images/sid-science-kid.jpg', url: 'https://example.com/watch/sid-science-kid' },
        { name: 'Hey Duggee', image: 'https://example.com/images/hey-duggee.jpg', url: 'https://example.com/watch/hey-duggee' },
        { name: 'Postman Pat', image: 'https://example.com/images/postman-pat.jpg', url: 'https://example.com/watch/postman-pat' }  */
    ],
    'kids-movies': [
        { name: 'Finding Nemo', image: 'images/nemo.jpeg', url: 'https://example.com/watch/finding-nemo' },
        { name: 'Toy Story', image: 'images/toy.jpeg', url: 'https://example.com/watch/toy-story' },
        { name: 'The Lion King', image: 'images/lion.jpeg', url: 'https://example.com/watch/lion-king' },
        { name: 'Moana', image: 'images/moana.jpeg', url: 'https://example.com/watch/moana' } /*,
        { name: 'Frozen', image: 'https://example.com/images/frozen.jpg', url: 'https://example.com/watch/frozen' },
        { name: 'Zootopia', image: 'https://example.com/images/zootopia.jpg', url: 'https://example.com/watch/zootopia' },
        { name: 'Coco', image: 'https://example.com/images/coco.jpg', url: 'https://example.com/watch/coco' },
        { name: 'Despicable Me', image: 'https://example.com/images/despicable-me.jpg', url: 'https://example.com/watch/despicable-me' },
        { name: 'Cars', image: 'https://example.com/images/cars.jpg', url: 'https://example.com/watch/cars' },
        { name: 'The Incredibles', image: 'https://example.com/images/incredibles.jpg', url: 'https://example.com/watch/incredibles' },
        { name: 'Madagascar', image: 'https://example.com/images/madagascar.jpg', url: 'https://example.com/watch/madagascar' },
        { name: 'Kung Fu Panda', image: 'https://example.com/images/kung-fu-panda.jpg', url: 'https://example.com/watch/kung-fu-panda' },
        { name: 'Puss in Boots', image: 'https://example.com/images/puss-in-boots.jpg', url: 'https://example.com/watch/puss-in-boots' },
        { name: 'Tangled', image: 'https://example.com/images/tangled.jpg', url: 'https://example.com/watch/tangled' },
        { name: 'The Secret Life of Pets', image: 'https://example.com/images/secret-life-pets.jpg', url: 'https://example.com/watch/secret-life-pets' },
        { name: 'The Good Dinosaur', image: 'https://example.com/images/good-dinosaur.jpg', url: 'https://example.com/watch/good-dinosaur' },
        { name: 'Onward', image: 'https://example.com/images/onward.jpg', url: 'https://example.com/watch/onward' },
        { name: 'Raya and the Last Dragon', image: 'https://example.com/images/raya.jpg', url: 'https://example.com/watch/raya' },
        { name: 'Luca', image: 'https://example.com/images/luca.jpg', url: 'https://example.com/watch/luca' },
        { name: 'Sing', image: 'https://example.com/images/sing.jpg', url: 'https://example.com/watch/sing' }  */
    ],

    /*
    'hollywood-movies': [
        { name: 'The Shawshank Redemption', image: 'https://example.com/images/shawshank-redemption.jpg', url: 'https://example.com/watch/shawshank-redemption' },
        { name: 'The Godfather', image: 'https://example.com/images/godfather.jpg', url: 'https://example.com/watch/godfather' },
        { name: 'The Dark Knight', image: 'https://example.com/images/dark-knight.jpg', url: 'https://example.com/watch/dark-knight' },
        { name: 'Pulp Fiction', image: 'https://example.com/images/pulp-fiction.jpg', url: 'https://example.com/watch/pulp-fiction' },
        { name: 'The Lord of the Rings: The Return of the King', image: 'https://example.com/images/lotr-return-of-the-king.jpg', url: 'https://example.com/watch/lotr-return-of-the-king' },
        { name: 'Forrest Gump', image: 'https://example.com/images/forrest-gump.jpg', url: 'https://example.com/watch/forrest-gump' },
        { name: 'Fight Club', image: 'https://example.com/images/fight-club.jpg', url: 'https://example.com/watch/fight-club' },
        { name: 'Inception', image: 'https://example.com/images/inception.jpg', url: 'https://example.com/watch/inception' },
        { name: 'The Matrix', image: 'https://example.com/images/matrix.jpg', url: 'https://example.com/watch/matrix' },
        { name: 'Interstellar', image: 'https://example.com/images/interstellar.jpg', url: 'https://example.com/watch/interstellar' },
        { name: 'Gladiator', image: 'https://example.com/images/gladiator.jpg', url: 'https://example.com/watch/gladiator' },
        { name: 'The Prestige', image: 'https://example.com/images/prestige.jpg', url: 'https://example.com/watch/prestige' },
        { name: 'Memento', image: 'https://example.com/images/memento.jpg', url: 'https://example.com/watch/memento' },
        { name: 'The Departed', image: 'https://example.com/images/departed.jpg', url: 'https://example.com/watch/departed' },
        { name: 'The Social Network', image: 'https://example.com/images/social-network.jpg', url: 'https://example.com/watch/social-network' },
        { name: 'Joker', image: 'https://example.com/images/joker.jpg', url: 'https://example.com/watch/joker' },
        { name: 'The Revenant', image: 'https://example.com/images/revenant.jpg', url: 'https://example.com/watch/revenant' },
        { name: 'Django Unchained', image: 'https://example.com/images/django-unchained.jpg', url: 'https://example.com/watch/django-unchained' },
        { name: 'Once Upon a Time in Hollywood', image: 'https://example.com/images/once-upon-a-time.jpg', url: 'https://example.com/watch/once-upon-a-time' },
        { name: 'The Wolf of Wall Street', image: 'https://example.com/images/wolf-wall-street.jpg', url: 'https://example.com/watch/wolf-wall-street' }
    ],  */
    'trailers': [
        { name: 'Dune: Part Two', image: 'images/tra1.jpeg', url: 'https://example.com/watch/dune-2' },
        { name: 'Avatar: The Way of Water', image: 'images/tra2.jpeg', url: 'https://example.com/watch/avatar-2' },
        { name: 'Mission: Impossible – Dead Reckoning', image: 'images/tra3.jpeg', url: 'https://example.com/watch/mission-impossible-7' },
        { name: 'John Wick: Chapter 4', image: 'images/tra4.jpeg', url: 'https://example.com/watch/john-wick-4' } /*,
        { name: 'The Marvels', image: 'https://example.com/images/marvels.jpg', url: 'https://example.com/watch/marvels' },
        { name: 'Oppenheimer', image: 'https://example.com/images/oppenheimer.jpg', url: 'https://example.com/watch/oppenheimer' },
        { name: 'Barbie', image: 'https://example.com/images/barbie.jpg', url: 'https://example.com/watch/barbie' },
       

 { name: 'Spider-Man: Across the Spider-Verse', image: 'https://example.com/images/spider-man-across.jpg', url: 'https://example.com/watch/spider-man-across' },
        { name: 'The Hunger Games: The Ballad of Songbirds & Snakes', image: 'https://example.com/images/hunger-games-prequel.jpg', url: 'https://example.com/watch/hunger-games-prequel' },
        { name: 'Deadpool 3', image: 'https://example.com/images/deadpool-3.jpg', url: 'https://example.com/watch/deadpool-3' },
        { name: 'Killers of the Flower Moon', image: 'https://example.com/images/killers-of-the-flower-moon.jpg', url: 'https://example.com/watch/killers-of-the-flower-moon' },
        { name: 'Napoleon', image: 'https://example.com/images/napoleon.jpg', url: 'https://example.com/watch/napoleon' },
        { name: 'The Little Mermaid', image: 'https://example.com/images/little-mermaid.jpg', url: 'https://example.com/watch/little-mermaid' },
        { name: 'Furiosa', image: 'https://example.com/images/furiosa.jpg', url: 'https://example.com/watch/furiosa' },
        { name: 'Wonka', image: 'https://example.com/images/wonka.jpg', url: 'https://example.com/watch/wonka' },
        { name: 'The Flash', image: 'https://example.com/images/flash.jpg', url: 'https://example.com/watch/flash' },
        { name: 'Shazam! Fury of the Gods', image: 'https://example.com/images/shazam-2.jpg', url: 'https://example.com/watch/shazam-2' },
        { name: 'Jaws Reboot', image: 'https://example.com/images/jaws-reboot.jpg', url: 'https://example.com/watch/jaws-reboot' },
        { name: 'Evil Dead Rise', image: 'https://example.com/images/evil-dead-rise.jpg', url: 'https://example.com/watch/evil-dead-rise' },
        { name: 'The Exorcist: Believer', image: 'https://example.com/images/exorcist-believer.jpg', url: 'https://example.com/watch/exorcist-believer' }  */
    ]
};

    function loadMovies(category) {
        const movieList = document.getElementById(category).querySelector('.movie-list');
        movieList.innerHTML = '';
        movies[category].forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = `
                <img src="${movie.image}" alt="${movie.name}">
                <h4>${movie.name}</h4>
                <a href="${movie.url}" target="_blank" class="wat">Watch Now</a>
            `;
            movieList.appendChild(movieItem);
        });
    }

    Object.keys(movies).forEach(category => loadMovies(category));
});
