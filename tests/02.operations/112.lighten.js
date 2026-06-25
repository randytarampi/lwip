import { dirname, join } from 'node:path';
import { mkdirp } from 'mkdirp';
import lwip from '../../index.js';
import imgs from '../imgs.js';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const tmpDir = join(__dirname, '../results');
const basename = 'lighten';
let current;

describe('lwip.lighten', () => {

    let image;

    before(() => {
        return mkdirp(tmpDir);
    });

    beforeEach(done => {
        lwip.open(imgs.png.trans, (err, img) => {
            image = img;
            done(err);
        });
    });

    beforeEach(() => {
        current = [basename];
    });

    afterEach(done => {
        image.writeFile(join(tmpDir, current.join('_') + '.png'), 'png', {
            compression: 'fast',
            interlaced: true
        }, done);
    });

    describe('delta=0', () => {
        const d = 0;
        it('should succeed', done => {
            current.push('d' + d);
            image.lighten(d, done);
        });
    });

    describe('delta=0.5', () => {
        const d = 0.5;
        it('should succeed', done => {
            current.push('d' + d);
            image.lighten(d, done);
        });
    });

    describe('delta=-0.5', () => {
        const d = -0.5;
        it('should succeed', done => {
            current.push('d' + d);
            image.lighten(d, done);
        });
    });

});
