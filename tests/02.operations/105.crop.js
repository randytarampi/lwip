import { dirname, join } from 'node:path';
import assert from 'node:assert';
import { mkdirp } from 'mkdirp';
import lwip from '../../index.js';
import imgs from '../imgs.js';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const tmpDir = join(__dirname, '../results');
const basename = 'crop';
let current;

describe('lwip.crop', () => {

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

    describe('rectangle from center', () => {

        beforeEach(() => {
            current = [basename, 'center'];
        });

        describe('100X100', () => {
            const width = 100,
                height = 100;
            it('image should have the correct size', done => {
                current.push(width + 'X' + height);
                image.crop(width, height, (err, im) => {
                    if (err) return done(err);
                    assert(im.width() === width);
                    assert(im.height() === height);
                    done();
                });
            });
        });

        describe('200X100', () => {
            const width = 200,
                height = 100;
            it('image should have the correct size', done => {
                current.push(width + 'X' + height);
                image.crop(width, height, (err, im) => {
                    if (err) return done(err);
                    assert(im.width() === width);
                    assert(im.height() === height);
                    done();
                });
            });
        });

    });

    describe('rectangle coordinates', () => {

        beforeEach(() => {
            current = [basename, 'coordinates'];
        });

        describe('10,10,100,100', () => {
            const left = 10,
                top = 10,
                right = 100,
                bottom = 100,
                width = right - left + 1,
                height = bottom - top + 1;
            it('image should have the correct size', done => {
                current.push([left, top, right, bottom].join(','));
                image.crop(left, top, right, bottom, (err, im) => {
                    if (err) return done(err);
                    assert(im.width() === width);
                    assert(im.height() === height);
                    done();
                });
            });
        });

    });

});
