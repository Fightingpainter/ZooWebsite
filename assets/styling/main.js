function createWidget(link, title, text, imgPath, imgAlt) {
    // Create elements
    var widget = document.createElement('div');
    var closeBtn = document.createElement('a');
    var linkElem = document.createElement('a');
    var contentDiv = document.createElement('div');
    var titleH4 = document.createElement('h4');
    var textP = document.createElement('p');
    var imgElem = document.createElement('img');

    // Set attributes and contents
    widget.id = 'my-add';
    closeBtn.id = 'close-add';
    closeBtn.className = 'my-add-close';
    closeBtn.textContent = 'x';
    linkElem.href = link;
    contentDiv.className = 'my-add';
    titleH4.className = 'my-add-title';
    titleH4.textContent = title;
    textP.className = 'my-add-text';
    textP.textContent = text;
    imgElem.className = 'my-add-image';
    imgElem.src = imgPath;
    imgElem.alt = imgAlt;

    // Build widget structure
    contentDiv.appendChild(titleH4);
    contentDiv.appendChild(textP);
    contentDiv.appendChild(imgElem);
    linkElem.appendChild(contentDiv);
    widget.appendChild(closeBtn);
    widget.appendChild(linkElem);

    // Append widget to body
    document.body.appendChild(widget);

    // Add event listener to 'close' button
    closeBtn.addEventListener('click', function() {
        widget.remove();
    });
}

function createAdd(adsData) {

    // Wait a random amount of time between 0 and 1 minute (you can adjust this as necessary)

    var delay = Math.random() * 60000;

    setTimeout(function() {
        // Select a random ad data from the array
        var adData = adsData[Math.floor(Math.random() * adsData.length)];

        // Call createWidget function with ad data
        createWidget(adData.link, adData.title, adData.text, adData.imgPath, adData.imgAlt);
    }, delay);
}



document.addEventListener('DOMContentLoaded', function() {

    // Create array of ad data
    var ads = [
        /* {
            link: "https://fightingpainter.github.io/ZooWebsite",
            title: "Evade's Enchanted Aquarium",
            text: "Dive into the Wonder of Evade's Enchanted Aquarium: Experience Aquatic Beauty Online!",
            imgPath: "https://fightingpainter.github.io/ZooWebsite/favicon.png",
            imgAlt: "Evade's Enchanted Aquarium's icon"
        }, */
        {
            link: "https://standbee.github.io/peculiar-zoo",
            title: "Zoo of Peculiarity",
            text: "Discover the Extraordinary at the Zoo of Peculiarity: Unveil the Wonders of Bizarre Wildlife!",
            imgPath: "https://standbee.github.io/peculiar-zoo/favicon.png",
            imgAlt: "Zoo of Peculiarity's icon"
        },
        {
            link: "https://sven1222225.github.io/ardougne-zoo",
            title: "Ardougne Zoo",
            text: "Embark on an Adventure at Ardougne Zoo: Experience the Thrills of RuneScape's Wildlife Sanctuary!",
            imgPath: "https://sven1222225.github.io/ardougne-zoo/favicon.png",
            imgAlt: "Ardougne Zoo's icon"
        }
    ];

    // Call createAdd function with ads array
    createAdd(ads);
});