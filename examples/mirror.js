import lwip from '../index.js';

/**
 * Example for using LWIP to mirror an image.
 */


lwip.open('lena.jpg', (err, image) => {
    if (err) return console.log(err);
    image.batch()
        .mirror('x')
        .writeFile('lena_mirror.jpg', err => {
            if (err) return console.log(err);
            console.log('done');
        });
});
