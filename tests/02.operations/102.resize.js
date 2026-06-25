import { dirname, join } from 'node:path';
import assert from 'node:assert';
import { mkdirp } from 'mkdirp';
import lwip from '../../index.js';
import imgs from '../imgs.js';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const tmpDir = join(__dirname, '../results');
const basename = 'resize';
let current;

describe('lwip.resize', () => {

    let image;

    before(() => {
        return mkdirp(tmpDir);
    });

    beforeEach(done => {
        lwip.open(imgs.jpg.rgb, (err, img) => {
            image = img;
            done(err);
        });
    });

    afterEach(done => {
        image.writeFile(join(tmpDir, current.join('_') + '.jpg'), 'jpeg', {
            quality: 100
        }, done);
    });

    describe('1000X1330', () => {

        const width = 1000,
            height = 1330;

        beforeEach(() => {
            current = [basename, width + 'X' + height];
        });

        describe('unspecified interpolation', () => {
            it('image should have the correct size', done => {
                current.push('unspecified_inter');
                image.resize(width, height, (err, im) => {
                    if (err) return done(err);
                    assert(im.width() === width);
                    assert(im.height() === height);
                    done();
                });
            });
        });

        describe('lanczos interpolation', () => {
            it('image should have the correct size', done => {
                current.push('lanczos');
                image.resize(width, height, 'lanczos', (err, im) => {
                    if (err) return done(err);
                    assert(im.width() === width);
                    assert(im.height() === height);
                    done();
                });
            });
        });

        describe('cubic interpolation', () => {
            it('image should have the correct size', done => {
                current.push('cubic');
                image.resize(width, height, 'cubic', (err, im) => {
                    if (err) return done(err);
                    assert(im.width() === width);
                    assert(im.height() === height);
                    done();
                });
            });
        });

        describe('nearest-neighbor interpolation', () => {
            it('image should have the correct size', done => {
                current.push('nearest-neighbor');
                image.resize(width, height, 'nearest-neighbor', (err, im) => {
                    if (err) return done(err);
                    assert(im.width() === width);
                    assert(im.height() === height);
                    done();
                });
            });
        });

        describe('moving-average interpolation', () => {
            it('image should have the correct size', done => {
                current.push('moving-average');
                image.resize(width, height, 'moving-average', (err, im) => {
                    if (err) return done(err);
                    assert(im.width() === width);
                    assert(im.height() === height);
                    done();
                });
            });
        });

        describe('linear interpolation', () => {
            it('image should have the correct size', done => {
                current.push('linear');
                image.resize(width, height, 'linear', (err, im) => {
                    if (err) return done(err);
                    assert(im.width() === width);
                    assert(im.height() === height);
                    done();
                });
            });
        });

        describe('grid interpolation', () => {
            it('image should have the correct size', done => {
                current.push('grid');
                image.resize(width, height, 'grid', (err, im) => {
                    if (err) return done(err);
                    assert(im.width() === width);
                    assert(im.height() === height);
                    done();
                });
            });
        });

    });

    describe('100X100', () => {

        const size = 100;

        beforeEach(() => {
            current = [basename, size + 'X' + size];
        });

        describe('unspecified interpolation', () => {
            it('image should have the correct size', done => {
                current.push('unspecified_inter');
                image.resize(size, (err, im) => {
                    if (err) return done(err);
                    assert(im.width() === size);
                    assert(im.height() === size);
                    done();
                });
            });
        });

    });

});
