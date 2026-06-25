// methods should throw errors when arguments are invalid


import lwip from '../../index.js';
import imgs from '../imgs.js';

// methods should throw errors when arguments are invalid


describe('batch.mirror arguments validation', () => {

    let batch;
    before(done => {
        lwip.open(imgs.gif.trans, (err, img) => {
            batch = img.batch();
            done(err);
        });
    });

    describe('invalid axis - g', () => {
        it('should throw an error', () => {
            batch.mirror.bind(batch, 'g').should.throwError();
        });
    });
    describe('invalid axis - kjh', () => {
        it('should throw an error', () => {
            batch.flip.bind(batch, 'kjh').should.throwError();
        });
    });
});
