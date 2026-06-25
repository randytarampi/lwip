// methods should throw errors when arguments are invalid


import lwip from '../../index.js';
import imgs from '../imgs.js';

// methods should throw errors when arguments are invalid


describe('image.scale arguments validation', () => {

    let image;
    before(done => {
        lwip.open(imgs.jpg.rgb, (err, img) => {
            image = img;
            done(err);
        });
    });

    describe('invalid interpolation', () => {
        it('should throw an error', () => {
            image.scale.bind(image, 0.5, 0.5, 'foo', () => {}).should.throwError();
        });
    });
});
