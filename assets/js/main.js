// *****************************
//        JS API / Fetch
// *****************************

fetch('https://picsum.photos/v2/list')
    .then(response => {

        return response.json();

    })
    .then(userArr => {

        console.log(userArr);

        const imgContainer = document.body.querySelector('#img_container');
        imgContainer.style.padding = '10px';

        userArr.forEach(singleElement => {

            const figure = document.createElement('figure');
            figure.classList.add('img_item');
            const img = document.createElement('img');
            img.setAttribute('src', singleElement.download_url)
            img.style.width = '100%';
            const figcaption = document.createElement('figcaption');
            figcaption.textContent = singleElement.author;
            const btn = document.createElement('button');
            btn.textContent = 'show more';

            btn.addEventListener('click', () => {
                window.open(singleElement.url, '_blank'); // Öffne die URL in einem neuen Tab/Fenster
            });

            imgContainer.appendChild(figure);
            figure.append(img, figcaption, btn);

        });
    });