import { dirname, join } from 'node:path';
import { mkdirp } from 'mkdirp';
import lwip from '../../index.js';
import imgs from '../imgs.js';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const tmpDir = join(__dirname, '../results');

describe('lwip.opacify', () => {

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
        image.writeFile(join(tmpDir, 'opacify.png'), 'png', {
            compression: 'fast',
            interlaced: true
        }, done);
    });

    it('should succeed', done => {
        image.opacify(done);
    });

});
