// *****************************
//        JS API / Fetch
// *****************************

fetch('https://picsum.photos/v2/list')
    .then(response => {
    if (!response.ok) {
        throw new Error('Fehler beim Abrufen der Daten');
    }
    return response.json();
    })
    .then(userArr => {
        console.log(userArr);

        const imgContainer = document.body.querySelector('#img_container');
        imgContainer.style.padding = '20px';

        userArr.forEach(singleElement => {
            const figure = document.createElement('figure');
            figure.classList.add('img_item');

            const img = document.createElement('img');
            img.src = singleElement.download_url;
            img.style.width = '100%';

            const figcaption = document.createElement('figcaption');
            figcaption.textContent = singleElement.author;

            const btn = document.createElement('button');
            btn.textContent = 'Mehr anzeigen';

            btn.addEventListener('click', () => {
            if (singleElement.url) {
                window.open(singleElement.url, '_blank');
            } else {
                alert('URL nicht verfügbar');
            }
            });

            imgContainer.appendChild(figure);
            figure.append(img, figcaption, btn);
        });
    })
    .catch(error => console.error('Fehler:', error.message));
