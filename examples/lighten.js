import lwip from '../index.js';

/**
 * Example for using LWIP to increase image lightness by 50%.
 */


lwip.open('lena.jpg', (err, image) => {
    if (err) return console.log(err);
    image.batch()
        .lighten(0.5)
        .writeFile('lena_lighten.jpg', err => {
            if (err) return console.log(err);
            console.log('done');
        });
});
