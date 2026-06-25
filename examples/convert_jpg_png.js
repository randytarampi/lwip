import lwip from '../index.js';

/**
 * Example for using LWIP to convert an image from jpg to png.
 */


lwip.open('lena.jpg', (err, image) => {
    if (err) return console.log(err);
    image.writeFile('lena_from_jpg.png', err => {
        if (err) return console.log(err);
        console.log('done');
    });
});
