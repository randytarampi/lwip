// methods should throw errors when arguments are invalid


import lwip from '../../index.js';
import imgs from '../imgs.js';

// methods should throw errors when arguments are invalid


describe('batch.scale arguments validation', () => {

    let batch;
    before(done => {
        lwip.open(imgs.jpg.rgb, (err, img) => {
            batch = img.batch();
            done(err);
        });
    });

    describe('invalid interpolation', () => {
        it('should throw an error', () => {
            batch.scale.bind(batch, 0.5, 0.5, 'foo').should.throwError();
        });
    });
});
