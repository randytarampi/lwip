import { dirname, join } from 'node:path';
import assert from 'node:assert';
import { mkdirp } from 'mkdirp';
import lwip from '../../index.js';
import imgs from '../imgs.js';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const tmpDir = join(__dirname, '../results');
const basename = 'setPixel';
let current;

describe('lwip.setPixel', () => {

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

    afterEach(done => {
        image.writeFile(join(tmpDir, current.join('_') + '.jpg'), 'jpeg', {
            quality: 100
        }, done);
    });

    beforeEach(() => {
        current = [basename];
    });

    describe('red pixel at 0,0', () => {

        it('pixel should have the correct color', done => {
            current.push('0,0-red');
            image.setPixel(0, 0, 'red', (err, im) => {
                if (err) return done(err);
                const color = im.getPixel(0, 0);
                assert(color.r === 255);
                assert(color.g === 0);
                assert(color.b === 0);
                assert(color.a === 100);
                done();
            });
        });

    });

    describe('red pixel at 100,100', () => {

        it('pixel should have the correct color', done => {
            current.push('100,100-red');
            image.setPixel(100, 100, 'red', (err, im) => {
                if (err) return done(err);
                const color = im.getPixel(100, 100);
                assert(color.r === 255);
                assert(color.g === 0);
                assert(color.b === 0);
                assert(color.a === 100);
                done();
            });
        });

    });

});
