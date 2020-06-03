function musicTurnOn() {
    let trackNames = document.querySelector('#audio-name');
    let tracks = document.querySelector('#audio');
    let image = document.querySelector('#image');

    trackNames.addEventListener('click', function (event) {
        for (let i = 0; i < trackNames.children.length; i++) {
            trackNames.children[i].classList.remove('on');
        }
        event.target.classList.add('on');

        for (let i = 0; i < trackNames.children.length; i++) {
            if (trackNames.children[i].classList.contains('on')) {
                for (let j = 0; j < tracks.children.length; j++) {
                    tracks.children[j].classList.add('hidden');
                    tracks.children[j].childNodes[1].pause();
                }
                tracks.children[i].classList.remove('hidden');
                tracks.children[i].childNodes[1].play();
                image.classList.add('rotate');
            }
        }
    });
}
musicTurnOn();


function putInfoToThePage() {
    let input = document.querySelector('#input');
    let btn = document.querySelector('#btn');
    let text = document.querySelector('.text');
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(function (data) {
            btn.addEventListener('click', function () {
                text.innerHTML = '';

                data.forEach(element => {
                    if (input.value == element.id) {
                        let li = document.createElement('li');
                        li.innerHTML = `postId: ${element.postId}`;
                        li.classList.add('list-group-item');
                        text.appendChild(li);

                        let li1 = document.createElement('li');
                        li1.innerHTML = `id: ${element.id}`;
                        li1.classList.add('list-group-item');
                        text.appendChild(li1);

                        let li2 = document.createElement('li');
                        li2.innerHTML = `name: ${element.name}`;
                        li2.classList.add('list-group-item');
                        text.appendChild(li2);

                        let li3 = document.createElement('li');
                        li3.innerHTML = `email: ${element.email}`;
                        li3.classList.add('list-group-item');
                        text.appendChild(li3);

                        let li4 = document.createElement('li');
                        li4.innerHTML = `body: ${element.body}`;
                        li4.classList.add('list-group-item');
                        text.appendChild(li4);

                    }
                });
            });
        });
}
putInfoToThePage();