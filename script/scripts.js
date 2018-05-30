

var data = [
    {
        "name": "kid 0",
        "age": "14",
        "story": "lorem ipsum dolor, sit amet...",
        "status": "unsponsored"
    }, {
        "name": "kid 1",
        "age": "14",
        "story": "lorem ipsum dolor, sit amet...",
        "status": "unsponsored"
    }, {
        "name": "kid 2",
        "age": "14",
        "story": "lorem ipsum dolor, sit amet...",
        "status": "sponsored"
    }, {
        "name": "kid 3",
        "age": "14",
        "story": "lorem ipsum dolor, sit amet...",
        "status": "unsponsored"
    }, {
        "name": "kid 4",
        "age": "14",
        "story": "lorem ipsum dolor, sit amet...",
        "status": "sponsored"
    }, {
        "name": "kid 5",
        "age": "14",
        "story": "lorem ipsum dolor, sit amet...",
        "status": "sponsored"
    }
]


var photos = document.getElementById('photos');

$(document).ready(function() {
    for (var i = 0; i < 5; i++)
    {
        // create an image element and set it's source
        var image = new Image(150);
        image.src = `images/kids/${i}.jpg`;

        var figure = document.createElement('figure');
        figure.classList.add('col');
        var figcaption = document.createElement('figcaption');

        // construct the personal information for each child
        figcaption.innerHTML = `<h5> ${data[i]['name']} </h5>
        <p> Age: ${data[i]['age']} Status: ${data[i]['status']} </p>
        <p> Story: ${data[i]['story']} </p>`;

        photos.appendChild(figure);
        figure.appendChild(image);
        figure.appendChild(figcaption);

    }
});






// $(window).load()
