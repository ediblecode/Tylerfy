
(function () {

    function start() {
        swapImages();
        setInterval(swapImages, 2000);
    }

    function swapImages() {
        var images = document.images;
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            if (image.getAttribute('data-tylerfied') !== 'true')
            {
                image.setAttribute('data-tylerfied', 'true');
                image.src = 'http://tylerfy.com/g/' + image.width + '/' + image.height + '?nocache=' + Math.round(Math.random() * 10000000);
            }
        }
    }

    if(document.readyState === 'complete') {
        start();
    } else {
        window.addEventListener('load', start);
    }
})();