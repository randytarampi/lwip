// methods should throw errors when arguments are invalid


import lwip from '../../index.js';
import imgs from '../imgs.js';

// methods should throw errors when arguments are invalid


describe('image.mirror arguments validation', () => {

    let image;
    before(done => {
        lwip.open(imgs.jpg.rgb, (err, img) => {
            image = img;
            done(err);
        });
    });

    describe('invalid axis - g', () => {
        it('should throw an error', () => {
            image.mirror.bind(image, 'g', () => {}).should.throwError();
        });
    });
    describe('invalid axis - kjh', () => {
        it('should throw an error', () => {
            image.mirror.bind(image, 'kjh', () => {}).should.throwError();
        });
    });
});
