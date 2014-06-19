
(function() {
    function swapImages() {
        var images = document.images;
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            image.src = 'http://placekitten.com/' + image.width + '/' + image.height;
        }
    }

    if(document.readyState === 'complete') {
        swapImages();
    } else {
        window.addEventListener('load', swapImages);
    }
})();