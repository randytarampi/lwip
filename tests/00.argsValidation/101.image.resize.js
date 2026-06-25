// methods should throw errors when arguments are invalid


import lwip from '../../index.js';
import imgs from '../imgs.js';

// methods should throw errors when arguments are invalid


describe('image.resize arguments validation', () => {

    let image;
    before(done => {
        lwip.open(imgs.jpg.rgb, (err, img) => {
            image = img;
            done(err);
        });
    });

    describe('invalid interpolation', () => {
        it('should throw an error', () => {
            image.resize.bind(image, 100, 100, 'foo', () => {}).should.throwError();
        });
    });
});
