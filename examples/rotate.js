import lwip from '../index.js';

/**
 * Example for using LWIP to rotate an image.
 */


lwip.open('lena.jpg', (err, image) => {
    if (err) return console.log(err);
    image.batch()
        .rotate(45, {
            r: 90,
            g: 55,
            b: 40
        })
        .writeFile('lena_rotate.gif', err => {
            if (err) return console.log(err);
            console.log('done');
        });
});
