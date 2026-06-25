import { dirname, join } from 'node:path';
import assert from 'node:assert';
import { mkdirp } from 'mkdirp';
import lwip from '../../index.js';
import imgs from '../imgs.js';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const tmpDir = join(__dirname, '../results');
const basename = 'cover';
let current;

describe('lwip.cover', () => {

    let image;

    before(() => {
        return mkdirp(tmpDir);
    });

    beforeEach(done => {
        lwip.open(imgs.png.rgb, (err, img) => {
            image = img;
            done(err);
        });
    });

    afterEach(done => {
        image.writeFile(join(tmpDir, current.join('_') + '.jpg'), 'jpg', {
            quality: 90
        }, done);
    });

    beforeEach(() => {
        current = [ basename ];
    });

    describe('800X300, unspecified interpolation', () => {
        it('image should have the correct size', done => {
            current.push('800X300','unspecified_inter');
            image.cover(800, 300, (err, im) => {
                if (err) return done(err);
                assert(im.width() === 800);
                assert(im.height() === 300);
                done();
            });
        });
    });

    describe('300X800, lanczos interpolation', () => {
        it('image should have the correct size', done => {
            current.push('300X800','lanczos');
            image.cover(300, 800, 'lanczos', (err, im) => {
                if (err) return done(err);
                assert(im.width() === 300);
                assert(im.height() === 800);
                done();
            });
        });
    });

});
