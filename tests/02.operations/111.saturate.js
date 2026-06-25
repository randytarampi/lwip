import { dirname, join } from 'node:path';
import { mkdirp } from 'mkdirp';
import lwip from '../../index.js';
import imgs from '../imgs.js';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const tmpDir = join(__dirname, '../results');
const basename = 'saturate';
let current;

describe('lwip.saturate', () => {

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

    beforeEach(() => {
        current = [basename];
    });

    afterEach(done => {
        image.writeFile(join(tmpDir, current.join('_') + '.jpg'), 'jpeg', {
            quality: 100
        }, done);
    });

    describe('delta=0', () => {
        const d = 0;
        it('should succeed', done => {
            current.push('d' + d);
            image.saturate(d, done);
        });
    });

    describe('delta=0.8', () => {
        const d = 0.8;
        it('should succeed', done => {
            current.push('d' + d);
            image.saturate(d, done);
        });
    });

    describe('delta=-1', () => {
        const d = -1;
        it('should succeed', done => {
            current.push('d' + d);
            image.saturate(d, done);
        });
    });

});
