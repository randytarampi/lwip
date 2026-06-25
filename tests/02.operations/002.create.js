import { dirname, join } from 'node:path';
import assert from 'node:assert';
import { mkdirp } from 'mkdirp';
import lwip from '../../index.js';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const tmpDir = join(__dirname, '../results');

describe('lwip.create', () => {

    before(() => {
        return mkdirp(tmpDir);
    });

    describe('500X500, [255,0,0,50]', () => {
        it('should succeed', done => {
            const width = 500,
                height = 500,
                bg = [255, 0, 0, 50];
            lwip.create(width, height, bg, (err, img) => {
                if (err) return done(err);
                assert(img.width() === width);
                assert(img.height() === height);
                img.writeFile(join(tmpDir, 'create500X500[255,0,0,50].png'), done);
            });
        });
    });

    describe('500X500, [0,255,0]', () => {
        it('should succeed', done => {
            const width = 500,
                height = 500,
                bg = [0, 255, 0];
            lwip.create(width, height, bg, (err, img) => {
                if (err) return done(err);
                assert(img.width() === width);
                assert(img.height() === height);
                img.writeFile(join(tmpDir, 'create500X500[0,255,0].png'), done);
            });
        });
    });

    describe('500X500, no color specified', () => {
        it('should succeed', done => {
            const width = 500,
                height = 500;
            lwip.create(width, height, (err, img) => {
                if (err) return done(err);
                assert(img.width() === width);
                assert(img.height() === height);
                img.writeFile(join(tmpDir, 'create500X500nocolor.png'), done);
            });
        });
    });

});
