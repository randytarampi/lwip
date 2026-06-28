## [3.0.19](https://github.com/randytarampi/lwip/compare/v3.0.18...v3.0.19) (2026-06-28)


### Bug Fixes

* **release:** make release actually work. Detached HEAD, wrong trigger, stale PR refs. 🤦‍♂️ ([8c13a50](https://github.com/randytarampi/lwip/commit/8c13a501b0a0568f350b14d2d5ff3105b66e2499))

## [3.0.18](https://github.com/randytarampi/lwip/compare/v3.0.17...v3.0.18) (2026-06-28)


### Bug Fixes

* **ci:** add environment: production, fix stale .releaserc assets. Travis references begone. 🪦 ([020d3d4](https://github.com/randytarampi/lwip/commit/020d3d4df1cccf833740b070848d01dcb786fab5))
* **ci:** add Node 20/22/24/26 test matrix. We say >=20, let's prove it. 🧪 ([64a4377](https://github.com/randytarampi/lwip/commit/64a43776e1d2250dd8044c0daa225470353bd21c))
* **ci:** disable Yarn hardened mode — portal deps need lockfile resolution in PR CI. 🤝 ([90451d3](https://github.com/randytarampi/lwip/commit/90451d3a788f266b6f747254edb2ec5c02851b45))
* **ci:** drop Node 26 from matrix — native addon doesn't build on it yet. We can add it back when nan catches up. 🤞 ([52b6963](https://github.com/randytarampi/lwip/commit/52b6963598abd928e5a657348b737d0fa9a62084))
* **ci:** fetch full git history for --since to work. Shallow clones don't have master ref. 🤦‍♂️ ([9906d8b](https://github.com/randytarampi/lwip/commit/9906d8b9883b343d998370c34f90d51e197d05a8))
* **ci:** regenerate yarn.lock. 🔄 ([e6851af](https://github.com/randytarampi/lwip/commit/e6851af25037035fbae496232e2cb1c2fb4964d9))
* **ci:** relax --immutable-cache. Lockfile needs network resolution in fresh CI. 🌐 ([20f6ea6](https://github.com/randytarampi/lwip/commit/20f6ea630e080e267d070b076668295a5f2b11b7))
* **ci:** update AppVeyor for Node 24 + Yarn 4. Good boy. 🐕 ([e8f4008](https://github.com/randytarampi/lwip/commit/e8f4008b94c99ca53cd22a9eda483bfa99ebdbdb))
* package.json & package-lock.json to reduce vulnerabilities ([8cdc4ea](https://github.com/randytarampi/lwip/commit/8cdc4ea9819d3858750c4b272ba6888c9e5f2e03))
* package.json & package-lock.json to reduce vulnerabilities ([504a0db](https://github.com/randytarampi/lwip/commit/504a0db9234a2b288c2c825b342800a605346e81))
* package.json & package-lock.json to reduce vulnerabilities ([d92aef6](https://github.com/randytarampi/lwip/commit/d92aef61361d1c206ffb983455bfecd247c03192))
* package.json & package-lock.json to reduce vulnerabilities ([9bb986b](https://github.com/randytarampi/lwip/commit/9bb986b0b12d7d18af95204c1e097c65032a3ddf))
* package.json & package-lock.json to reduce vulnerabilities ([56c64bf](https://github.com/randytarampi/lwip/commit/56c64bfb9a1e699505c36072cdf6c308f1cf6115))
* update C++ source for Node 24/V8 API changes ([7d6a968](https://github.com/randytarampi/lwip/commit/7d6a968652d74859fb7c1e88822cdeb93d172e84))
* upgrade coveralls from 3.1.0 to 3.1.1 ([430610f](https://github.com/randytarampi/lwip/commit/430610f5fea25558a89f5d31f8d963bef10ea715))
* upgrade eslint from 7.14.0 to 7.15.0 ([74791b0](https://github.com/randytarampi/lwip/commit/74791b0ddcb7d453af4308a7efbbc58063128bd8))
* upgrade eslint from 7.15.0 to 7.16.0 ([7c93f5c](https://github.com/randytarampi/lwip/commit/7c93f5c63d9e6fe608f897b1d13e95c2053b60e7))
* upgrade eslint from 7.16.0 to 7.17.0 ([e317555](https://github.com/randytarampi/lwip/commit/e317555d4c524c1a9ec2efd2932f90ac94d813c2))
* upgrade eslint from 7.17.0 to 7.18.0 ([2ece1c8](https://github.com/randytarampi/lwip/commit/2ece1c8054994211d118fca4a23499676850b445))
* upgrade eslint from 7.18.0 to 7.19.0 ([4216888](https://github.com/randytarampi/lwip/commit/42168883daa1bb5806c90b2853538eb792b04eb9))
* upgrade eslint from 7.19.0 to 7.20.0 ([325e97b](https://github.com/randytarampi/lwip/commit/325e97b42c0ff3acec3c3d4d43db529a7889547e))
* upgrade eslint from 7.20.0 to 7.21.0 ([7d6c1a8](https://github.com/randytarampi/lwip/commit/7d6c1a8d5c608badf0dd5a343df9e466bdcc24ef))
* upgrade eslint from 7.21.0 to 7.22.0 ([f6f0f7c](https://github.com/randytarampi/lwip/commit/f6f0f7c9a940852369df976ba9f68649a0b36d85))
* upgrade eslint from 7.22.0 to 7.23.0 ([f352516](https://github.com/randytarampi/lwip/commit/f352516f6ce095160988ba4d07189002c3aeb473))
* upgrade eslint from 7.23.0 to 7.24.0 ([46733f8](https://github.com/randytarampi/lwip/commit/46733f82c8b0ee97f08014a16565dcf95e36919e))
* upgrade eslint from 7.24.0 to 7.25.0 ([7fc728a](https://github.com/randytarampi/lwip/commit/7fc728a1a6e324a29148730a4bcbce32c7908dd8))
* upgrade eslint from 7.25.0 to 7.26.0 ([d683ddf](https://github.com/randytarampi/lwip/commit/d683ddf6e425ba20d648f2070bef4082d57534c8))
* upgrade eslint from 7.26.0 to 7.27.0 ([e8230f2](https://github.com/randytarampi/lwip/commit/e8230f2331a0136f5fb37509aef4732d6c4876e8))
* upgrade eslint from 7.27.0 to 7.28.0 ([5c7dea1](https://github.com/randytarampi/lwip/commit/5c7dea1ae178164d3b224aa690a80c92a666dd3e))
* upgrade eslint-plugin-import from 2.22.1 to 2.23.0 ([2a54b81](https://github.com/randytarampi/lwip/commit/2a54b8165a7eaff2a990a686e2919637bbed5e11))
* upgrade eslint-plugin-import from 2.23.0 to 2.23.2 ([b5d09ab](https://github.com/randytarampi/lwip/commit/b5d09aba3430ac5f601cbc0cc4a3d723c11ce864))
* upgrade eslint-plugin-import from 2.23.2 to 2.23.3 ([d20a571](https://github.com/randytarampi/lwip/commit/d20a57124af58be0c9d59cd7524369b994212010))
* upgrade eslint-plugin-import from 2.23.3 to 2.23.4 ([9296315](https://github.com/randytarampi/lwip/commit/9296315d667894fd92b3d693aed66b9adcdad12b))
* upgrade mocha from 8.2.1 to 8.3.0 ([b72281b](https://github.com/randytarampi/lwip/commit/b72281b14419703474a5dceb1bff61b7c27ab8a8))
* upgrade mocha from 8.3.0 to 8.3.1 ([8165f62](https://github.com/randytarampi/lwip/commit/8165f6255e60cc75c5d85cdff94f339171edd2a6))
* upgrade mocha from 8.3.1 to 8.3.2 ([0e886f9](https://github.com/randytarampi/lwip/commit/0e886f922e3dbd74d8c1d532e238f94550af2242))
* upgrade mocha from 8.3.2 to 8.4.0 ([b3e4a18](https://github.com/randytarampi/lwip/commit/b3e4a1853c0e74497a0d31eeef429e65b149303c))
* upgrade run-script-os from 1.1.3 to 1.1.4 ([313f40f](https://github.com/randytarampi/lwip/commit/313f40f892850e83610301d871c977aab718d789))
* upgrade run-script-os from 1.1.4 to 1.1.5 ([3208d4f](https://github.com/randytarampi/lwip/commit/3208d4f7c99f6f3aeccb683baf9fab9ea5ed7a5e))
* upgrade run-script-os from 1.1.5 to 1.1.6 ([6fea455](https://github.com/randytarampi/lwip/commit/6fea45567150187805a7caf2b94d33035e8c1e5a))
* upgrade semantic-release from 17.2.4 to 17.3.0 ([9b4e713](https://github.com/randytarampi/lwip/commit/9b4e7131aa2d923ed0a4c24830134d6fc686c7cd))
* upgrade semantic-release from 17.3.1 to 17.3.2 ([87905cf](https://github.com/randytarampi/lwip/commit/87905cfe8f3adc3babc507d9866c7e56b408e1cc))
* upgrade semantic-release from 17.3.2 to 17.3.3 ([ae4e2bd](https://github.com/randytarampi/lwip/commit/ae4e2bd84090e7d15ddb816262dd0ac955498da9))
* upgrade semantic-release from 17.3.3 to 17.3.7 ([755fa08](https://github.com/randytarampi/lwip/commit/755fa08c459982ebb7d70fe94b40131b138dfe0c))
* upgrade semantic-release from 17.3.8 to 17.3.9 ([04f4e5d](https://github.com/randytarampi/lwip/commit/04f4e5d0a5f82b32ecc757448c37304e427bbb82))
* upgrade semantic-release from 17.3.9 to 17.4.0 ([94ccd3c](https://github.com/randytarampi/lwip/commit/94ccd3c6802e71ca0dc19fb6421ac3f53d710b6e))
* upgrade semantic-release from 17.4.0 to 17.4.1 ([7dde6a8](https://github.com/randytarampi/lwip/commit/7dde6a8fd166647926cecbb9209962518dea4755))
* upgrade semantic-release from 17.4.1 to 17.4.2 ([031eb1d](https://github.com/randytarampi/lwip/commit/031eb1d0fcf7555f0927746ac5acb21e744ba481))
* upgrade semantic-release from 17.4.2 to 17.4.3 ([c49ce4e](https://github.com/randytarampi/lwip/commit/c49ce4e1981140d8b1dd6d68d7bb5b4def494cd9))
* upgrade snyk from 1.430.0 to 1.430.2 ([227c74a](https://github.com/randytarampi/lwip/commit/227c74ac180ccccb59a28dadd7b4e9c1fdb56313))
* upgrade snyk from 1.430.2 to 1.431.2 ([892fd67](https://github.com/randytarampi/lwip/commit/892fd67106e0034c1dab6d1b216bf175aee3d384))
* upgrade snyk from 1.431.2 to 1.431.4 ([0bd6981](https://github.com/randytarampi/lwip/commit/0bd6981f876652f9bf1df1b9693343e809a136e4))
* upgrade snyk from 1.431.4 to 1.433.0 ([65035f0](https://github.com/randytarampi/lwip/commit/65035f0318948529781f7bbeff78916ebe4c1978))
* upgrade snyk from 1.433.0 to 1.434.0 ([397c56c](https://github.com/randytarampi/lwip/commit/397c56c44b85914a1918b7ba501274f220098318))
* upgrade snyk from 1.434.0 to 1.434.2 ([246df09](https://github.com/randytarampi/lwip/commit/246df09a6b9acb31893b3d4bf1c57f3fc26a83b4))
* upgrade snyk from 1.434.2 to 1.436.0 ([a57fb32](https://github.com/randytarampi/lwip/commit/a57fb3241d81fabff7a758a4866454f4dc26ab8b))
* upgrade snyk from 1.436.0 to 1.437.0 ([aabf283](https://github.com/randytarampi/lwip/commit/aabf283cd0e7745a510e8d2d31990f497fca685a))
* upgrade snyk from 1.437.0 to 1.437.1 ([2dacaf4](https://github.com/randytarampi/lwip/commit/2dacaf4a0b0e821ebc585662bc59ded092dd1646))
* upgrade snyk from 1.437.1 to 1.437.2 ([fa20448](https://github.com/randytarampi/lwip/commit/fa20448c90077da71120b6766f12e43a2335484c))
* upgrade snyk from 1.437.2 to 1.437.3 ([965165e](https://github.com/randytarampi/lwip/commit/965165ec6eca83b66d89255669a66e195e1fd455))
* upgrade snyk from 1.437.3 to 1.437.4 ([66f335e](https://github.com/randytarampi/lwip/commit/66f335ee14349369bb7144a66521c3705e8b73df))
* upgrade snyk from 1.437.4 to 1.438.0 ([b7c4f04](https://github.com/randytarampi/lwip/commit/b7c4f04126753b21305b11cbad71ed3d64f0e7f5))
* upgrade snyk from 1.438.0 to 1.439.0 ([7467ffa](https://github.com/randytarampi/lwip/commit/7467ffa0add1eee22f3a471ba4c02cb48f783941))
* upgrade snyk from 1.439.0 to 1.439.1 ([197debd](https://github.com/randytarampi/lwip/commit/197debd48008e59945d0f2af455749ed773f5e39))
* upgrade snyk from 1.439.1 to 1.458.0 ([27875de](https://github.com/randytarampi/lwip/commit/27875de1b9822847b81fe9ca515e2d1eb81c4cb3))
* upgrade snyk from 1.458.0 to 1.459.0 ([f1034ce](https://github.com/randytarampi/lwip/commit/f1034cef54d6f4f3e054eae4d58ea84957eeb17f))
* upgrade snyk from 1.459.0 to 1.460.0 ([c113260](https://github.com/randytarampi/lwip/commit/c1132609e1b16299c033e7eac9d4c533ae257920))
* upgrade snyk from 1.460.0 to 1.461.0 ([5f539ce](https://github.com/randytarampi/lwip/commit/5f539ce7ecad55297c25446a95c9f3f711e8fb44))
* upgrade snyk from 1.461.0 to 1.462.0 ([787096d](https://github.com/randytarampi/lwip/commit/787096d0b613682f6bc46297176c56b10634e7b2))
* upgrade snyk from 1.462.0 to 1.464.0 ([522faee](https://github.com/randytarampi/lwip/commit/522faee5d90e7c91e6ca62b73e94c23de1b61f5d))
* upgrade snyk from 1.464.0 to 1.467.0 ([58a1840](https://github.com/randytarampi/lwip/commit/58a184088912a6d5ac790fa343b63e6941186b04))
* upgrade snyk from 1.467.0 to 1.471.0 ([8179efc](https://github.com/randytarampi/lwip/commit/8179efc5cfb3112053adae5ec5e019242f2c74d1))
* upgrade snyk from 1.471.0 to 1.476.0 ([39b85ca](https://github.com/randytarampi/lwip/commit/39b85cab309ce0b43067046f287669fe5ede5d89))
* upgrade snyk from 1.476.0 to 1.486.0 ([029a7fb](https://github.com/randytarampi/lwip/commit/029a7fbd056c83919cc7c465679731f75b3f2d04))
* upgrade snyk from 1.486.0 to 1.488.0 ([8ab12c4](https://github.com/randytarampi/lwip/commit/8ab12c4b24f46296aaa6478df52d460634c6aacf))
* upgrade snyk from 1.488.0 to 1.491.0 ([adf207b](https://github.com/randytarampi/lwip/commit/adf207b7608fbe41c69ede94d51aa4bc83257d9e))
* upgrade snyk from 1.491.0 to 1.495.0 ([67c8ddb](https://github.com/randytarampi/lwip/commit/67c8ddb99aac61ec3e9910713afc4c1c44578923))
* upgrade snyk from 1.495.0 to 1.500.0 ([f796769](https://github.com/randytarampi/lwip/commit/f796769299b11d74f6cc7bad55686e42ffbab432))
* upgrade snyk from 1.500.0 to 1.502.0 ([9add883](https://github.com/randytarampi/lwip/commit/9add883e9b81ece1d81c73605bff4a9d14fe8746))
* upgrade snyk from 1.502.0 to 1.503.0 ([e464d4b](https://github.com/randytarampi/lwip/commit/e464d4ba9123ef5230684fa5dac1a405da9692ed))
* upgrade snyk from 1.503.0 to 1.509.0 ([2b9871a](https://github.com/randytarampi/lwip/commit/2b9871ae1ca9488caf13d1598d3c6557f67bf1a7))
* upgrade snyk from 1.509.0 to 1.511.0 ([5a0a3d5](https://github.com/randytarampi/lwip/commit/5a0a3d584c0a56ec2b2695fc50bded74296792e4))
* upgrade snyk from 1.518.0 to 1.520.0 ([eaa1bdd](https://github.com/randytarampi/lwip/commit/eaa1bdda5421a5772496dbb5a2bc82f043226911))
* upgrade snyk from 1.520.0 to 1.526.0 ([921551f](https://github.com/randytarampi/lwip/commit/921551ff3f8b822912f7b39947acb7c945fc59de))
* upgrade snyk from 1.526.0 to 1.528.0 ([1e1efc0](https://github.com/randytarampi/lwip/commit/1e1efc09a6c19439474538fa0c992a08e609995d))
* upgrade snyk from 1.528.0 to 1.529.0 ([21f41ef](https://github.com/randytarampi/lwip/commit/21f41effdd8cdc260f128c48f42dc1e9282fe4ef))
* upgrade snyk from 1.529.0 to 1.530.0 ([a59ea9d](https://github.com/randytarampi/lwip/commit/a59ea9d9717890c55301fc365b428da6f8ec5dbd))
* upgrade snyk from 1.530.0 to 1.532.0 ([ee2c7a1](https://github.com/randytarampi/lwip/commit/ee2c7a13d43b3271a11fbbe1646aa55d37b12fca))
* upgrade snyk from 1.532.0 to 1.541.0 ([a915b9b](https://github.com/randytarampi/lwip/commit/a915b9bf2df7710e813fa85b590cac18f077f578))
* upgrade snyk from 1.541.0 to 1.543.0 ([c4e39c3](https://github.com/randytarampi/lwip/commit/c4e39c37268d357ad5184b445e7548491da18a45))
* upgrade snyk from 1.543.0 to 1.550.0 ([fbb4d96](https://github.com/randytarampi/lwip/commit/fbb4d9695d45b7e488a2af0ee805c7d63a4e0e4d))
* upgrade snyk from 1.550.0 to 1.551.0 ([fa45f2d](https://github.com/randytarampi/lwip/commit/fa45f2dcdb23dbf3676dd41276d5ed0583d1f3e4))
* upgrade snyk from 1.551.0 to 1.557.0 ([180b959](https://github.com/randytarampi/lwip/commit/180b95955299046279352a8682ed9f2066424252))
* upgrade snyk from 1.557.0 to 1.563.0 ([67c109b](https://github.com/randytarampi/lwip/commit/67c109be535a8a053144c5a2d59a949b17e95af8))
* upgrade snyk from 1.563.0 to 1.564.0 ([5691e14](https://github.com/randytarampi/lwip/commit/5691e14eece014e2073f83780728ca601e45969d))
* upgrade snyk from 1.564.0 to 1.566.0 ([c37d5b5](https://github.com/randytarampi/lwip/commit/c37d5b5beb1d8588bae546d4b348be2405e61a53))
* upgrade snyk from 1.566.0 to 1.570.0 ([65d78fd](https://github.com/randytarampi/lwip/commit/65d78fdb50bfd19621be759212c5f501db42c448))
* upgrade snyk from 1.570.0 to 1.582.0 ([6b5553b](https://github.com/randytarampi/lwip/commit/6b5553b9b3a1f76e5a6f10dbccf4486bf3fadd41))
* upgrade snyk from 1.582.0 to 1.586.0 ([992e53c](https://github.com/randytarampi/lwip/commit/992e53c7e79b2b6cec313b7fb57a118cfb17af73))
* upgrade snyk from 1.586.0 to 1.587.0 ([a75deda](https://github.com/randytarampi/lwip/commit/a75deda45240c52490273de5ef4a76b17a363c76))
* upgrade snyk from 1.587.0 to 1.590.0 ([e0572b6](https://github.com/randytarampi/lwip/commit/e0572b619133af515b102ecef9cd91a69bb81edf))
* upgrade snyk from 1.590.0 to 1.592.0 ([c6794d7](https://github.com/randytarampi/lwip/commit/c6794d7b654c8200a842468b8521b2849254eaeb))
* upgrade snyk from 1.592.0 to 1.595.0 ([5b9220c](https://github.com/randytarampi/lwip/commit/5b9220c4d6b311c89b21087426f79ba289d22f3d))
* upgrade snyk from 1.595.0 to 1.596.0 ([0754579](https://github.com/randytarampi/lwip/commit/07545799378db80ff579bfda0e0d20cd8bd6d742))
* upgrade snyk from 1.596.0 to 1.604.0 ([af51793](https://github.com/randytarampi/lwip/commit/af5179330f6c70e6c138af7c01c78534cee1a215))
* upgrade snyk from 1.604.0 to 1.605.0 ([e71852d](https://github.com/randytarampi/lwip/commit/e71852dd27264af7823c8b823b06aed7c31898ef))
* upgrade snyk from 1.605.0 to 1.616.0 ([0e08461](https://github.com/randytarampi/lwip/commit/0e084617453ad0f617b48e843b4a0f8713cb248b))
* upgrade snyk from 1.616.0 to 1.618.0 ([9b0d382](https://github.com/randytarampi/lwip/commit/9b0d3826e49f74041752fbe7125d12c3b982bda7))
* upgrade snyk from 1.618.0 to 1.620.0 ([dff613f](https://github.com/randytarampi/lwip/commit/dff613f53698be0732f2c0d11f727bbf997302e7))
* upgrade snyk from 1.620.0 to 1.621.0 ([1689714](https://github.com/randytarampi/lwip/commit/16897149ee8cf485a094846e815ac09fc5bdb0af))
* upgrade snyk from 1.621.0 to 1.622.0 ([9f1d12a](https://github.com/randytarampi/lwip/commit/9f1d12adfb7fb45913f9998cfa5c201ab45cd721))
* upgrade snyk from 1.622.0 to 1.623.0 ([8cdd22c](https://github.com/randytarampi/lwip/commit/8cdd22caa1d15285d92070afacf9071492678a72))
* upgrade snyk from 1.623.0 to 1.624.0 ([b0915e5](https://github.com/randytarampi/lwip/commit/b0915e5c719df9cfb97a2d594c81870548a199b5))

## [3.0.17](https://github.com/randytarampi/lwip/compare/v3.0.16...v3.0.17) (2020-11-22)


### Bug Fixes

* **zlib:** Work around `error: implicit declaration of function 'lseek' is invalid in C99`. Properly. ([da3d750](https://github.com/randytarampi/lwip/commit/da3d750312517e1e046d6d8f62ef7afc16601bec))

## [3.0.16](https://github.com/randytarampi/lwip/compare/v3.0.15...v3.0.16) (2020-11-22)


### Bug Fixes

* **zlib:** Work around `error: implicit declaration of function 'lseek' is invalid in C99`. ([f60acb8](https://github.com/randytarampi/lwip/commit/f60acb8bec26fcdcba2efad430f0c30efef0f02d))

## [3.0.15](https://github.com/randytarampi/lwip/compare/v3.0.14...v3.0.15) (2020-10-31)


### Bug Fixes

* upgrade eslint from 7.11.0 to 7.12.0 ([222b50c](https://github.com/randytarampi/lwip/commit/222b50c748888f03d9b2a26851eacf9afeed3e4c))
* upgrade run-script-os from 1.1.1 to 1.1.3 ([fe7287b](https://github.com/randytarampi/lwip/commit/fe7287b79fa5fffddb5400b537e218fc3cb7dae8))
* upgrade semantic-release from 17.2.1 to 17.2.2 ([8ba2335](https://github.com/randytarampi/lwip/commit/8ba233584092744bd590dfbfaa1bbf31cc10fa78))
* upgrade snyk from 1.416.0 to 1.419.0 ([ebd40c5](https://github.com/randytarampi/lwip/commit/ebd40c59138011134e4e9962bd97cdbd74194e8d))

## [3.0.14](https://github.com/randytarampi/lwip/compare/v3.0.13...v3.0.14) (2020-10-21)


### Bug Fixes

* upgrade snyk from 1.415.0 to 1.416.0 ([c48a917](https://github.com/randytarampi/lwip/commit/c48a917da029e509e0f7aae93aac20360752a12b))

## [3.0.13](https://github.com/randytarampi/lwip/compare/v3.0.12...v3.0.13) (2020-10-20)


### Bug Fixes

* upgrade snyk from 1.414.1 to 1.415.0 ([296608b](https://github.com/randytarampi/lwip/commit/296608b1d01b54dd4dd82b0823563b9f26ec0fa1))

## [3.0.12](https://github.com/randytarampi/lwip/compare/v3.0.11...v3.0.12) (2020-10-18)


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([bd42ca9](https://github.com/randytarampi/lwip/commit/bd42ca9dbf622a773e6191aa15a2d21b070df126))
* upgrade eslint from 7.10.0 to 7.11.0 ([8f72cff](https://github.com/randytarampi/lwip/commit/8f72cffa0c6a4127ea0450297d1c8b18cbfaa6c0))
* upgrade mocha from 8.1.3 to 8.2.0 ([9fbeaf2](https://github.com/randytarampi/lwip/commit/9fbeaf27131eb3b967afe5552259979c413e6506))
* upgrade nan from 2.14.1 to 2.14.2 ([9b8adc2](https://github.com/randytarampi/lwip/commit/9b8adc21234d38daac8fa156e7e6605be4ddc913))
* upgrade semantic-release from 17.1.2 to 17.2.1 ([f812b98](https://github.com/randytarampi/lwip/commit/f812b981f39b0bd8ebf5de2244cf0c9c0444fddb))
* upgrade snyk from 1.405.1 to 1.406.0 ([74324ce](https://github.com/randytarampi/lwip/commit/74324ce37a445b56a09c99843d3dc311f4b54b94))
* upgrade snyk from 1.406.0 to 1.414.1 ([8b54df3](https://github.com/randytarampi/lwip/commit/8b54df37e384d8a9c5b1082635615e170379d894))

## [3.0.11](https://github.com/randytarampi/lwip/compare/v3.0.10...v3.0.11) (2020-10-03)


### Bug Fixes

* upgrade snyk from 1.402.0 to 1.405.1 ([5d3ebd3](https://github.com/randytarampi/lwip/commit/5d3ebd391b2a476b4f26746888325ec9b2ae0192))

## [3.0.10](https://github.com/randytarampi/lwip/compare/v3.0.9...v3.0.10) (2020-10-01)


### Bug Fixes

* upgrade eslint-plugin-import from 2.22.0 to 2.22.1 ([496c3b2](https://github.com/randytarampi/lwip/commit/496c3b29dece950a152c5f1b7b0e1aa55aab1273))
* upgrade snyk from 1.400.0 to 1.402.0 ([601fbe0](https://github.com/randytarampi/lwip/commit/601fbe088020a103e804dbf20d1a6555e8217691))

## [3.0.9](https://github.com/randytarampi/lwip/compare/v3.0.8...v3.0.9) (2020-09-29)


### Bug Fixes

* upgrade eslint from 7.9.0 to 7.10.0 ([1a908f9](https://github.com/randytarampi/lwip/commit/1a908f9241a5f45221211b13fdb058c2e3c5d3bb))
* upgrade snyk from 1.399.1 to 1.400.0 ([b70718b](https://github.com/randytarampi/lwip/commit/b70718b98134da9da6926bfd8fac1ca8d2d9d3f5))

## [3.0.8](https://github.com/randytarampi/lwip/compare/v3.0.7...v3.0.8) (2020-09-24)


### Bug Fixes

* upgrade snyk from 1.399.0 to 1.399.1 ([834c9d8](https://github.com/randytarampi/lwip/commit/834c9d8973b43aa5fdd3426f7d6597d074730133))

## [3.0.7](https://github.com/randytarampi/lwip/compare/v3.0.6...v3.0.7) (2020-09-23)


### Bug Fixes

* upgrade snyk from 1.398.1 to 1.399.0 ([6205e37](https://github.com/randytarampi/lwip/commit/6205e373dba8b4d6863b01db584956fe4ea637c4))

## [3.0.6](https://github.com/randytarampi/lwip/compare/v3.0.5...v3.0.6) (2020-09-22)


### Bug Fixes

* upgrade semantic-release from 17.1.1 to 17.1.2 ([078bdf2](https://github.com/randytarampi/lwip/commit/078bdf2a1b604e6a000905970d2bef18deadbb45))

## [3.0.5](https://github.com/randytarampi/lwip/compare/v3.0.4...v3.0.5) (2020-09-18)


### Bug Fixes

* upgrade snyk from 1.395.0 to 1.398.1 ([3739786](https://github.com/randytarampi/lwip/commit/3739786b16df86d08faaf224f20e07763d2ea079))

## [3.0.4](https://github.com/randytarampi/lwip/compare/v3.0.3...v3.0.4) (2020-09-17)


### Bug Fixes

* upgrade snyk from 1.393.0 to 1.395.0 ([30ec568](https://github.com/randytarampi/lwip/commit/30ec56875c9872f65a2b7ede0724435e54002450))

## [3.0.3](https://github.com/randytarampi/lwip/compare/v3.0.2...v3.0.3) (2020-09-14)


### Bug Fixes

* upgrade eslint from 7.8.1 to 7.9.0 ([0f8664b](https://github.com/randytarampi/lwip/commit/0f8664b73e2d8341b663ba044f677b1338226215))
* upgrade snyk from 1.387.0 to 1.393.0 ([5e52057](https://github.com/randytarampi/lwip/commit/5e52057eb723973f3955e180706a5a9cadcc2e6a))

## [3.0.2](https://github.com/randytarampi/lwip/compare/v3.0.1...v3.0.2) (2020-09-13)


### Bug Fixes

* upgrade eslint from 7.7.0 to 7.8.1 ([8c9d1dd](https://github.com/randytarampi/lwip/commit/8c9d1ddba3055bc06dcc169e5dd69a77311de9de))
* upgrade snyk from 1.386.0 to 1.387.0 ([19de674](https://github.com/randytarampi/lwip/commit/19de674f18c16f68f47c4fd401d6c5cbcc9d13d5))

## [3.0.1](https://github.com/randytarampi/lwip/compare/v3.0.0...v3.0.1) (2020-08-29)


### Bug Fixes

* **package:** Bump packages for security updates (2020-08-29) ([fb1fa8e](https://github.com/randytarampi/lwip/commit/fb1fa8ea7f4464d4eb366e2fc00c3b846d6bb2a6)), closes [/github.com/randytarampi/slamscan/pull/131#issuecomment-669014514](https://github.com//github.com/randytarampi/slamscan/pull/131/issues/issuecomment-669014514) [/github.com/randytarampi/lwip/pull/47#issuecomment-669576137](https://github.com//github.com/randytarampi/lwip/pull/47/issues/issuecomment-669576137) [/github.com/randytarampi/lwip/pull/46#issuecomment-669587798](https://github.com//github.com/randytarampi/lwip/pull/46/issues/issuecomment-669587798) [/github.com/randytarampi/pseudolocalize/pull/43#issuecomment-669639431](https://github.com//github.com/randytarampi/pseudolocalize/pull/43/issues/issuecomment-669639431) [/github.com/randytarampi/pseudolocalize/pull/44#issuecomment-669640745](https://github.com//github.com/randytarampi/pseudolocalize/pull/44/issues/issuecomment-669640745) [/github.com/randytarampi/pseudoimage/pull/60#issuecomment-669730376](https://github.com//github.com/randytarampi/pseudoimage/pull/60/issues/issuecomment-669730376) [/github.com/randytarampi/slamscan/pull/132#issuecomment-669738806](https://github.com//github.com/randytarampi/slamscan/pull/132/issues/issuecomment-669738806) [/github.com/randytarampi/slamscan/pull/134#issuecomment-669738983](https://github.com//github.com/randytarampi/slamscan/pull/134/issues/issuecomment-669738983) [/github.com/randytarampi/slamscan/pull/133#issuecomment-669739016](https://github.com//github.com/randytarampi/slamscan/pull/133/issues/issuecomment-669739016) [/github.com/randytarampi/pseudoimage/pull/61#issuecomment-669743569](https://github.com//github.com/randytarampi/pseudoimage/pull/61/issues/issuecomment-669743569) [/github.com/randytarampi/slamscan/pull/135#issuecomment-671014646](https://github.com//github.com/randytarampi/slamscan/pull/135/issues/issuecomment-671014646) [/github.com/randytarampi/pseudolocalize/pull/45#issuecomment-673205158](https://github.com//github.com/randytarampi/pseudolocalize/pull/45/issues/issuecomment-673205158) [/github.com/randytarampi/pseudoimage/pull/62#issuecomment-673288919](https://github.com//github.com/randytarampi/pseudoimage/pull/62/issues/issuecomment-673288919) [/github.com/randytarampi/lwip/pull/48#issuecomment-674452146](https://github.com//github.com/randytarampi/lwip/pull/48/issues/issuecomment-674452146) [/github.com/randytarampi/me/pull/748#issuecomment-674633206](https://github.com//github.com/randytarampi/me/pull/748/issues/issuecomment-674633206)

# [3.0.0](https://github.com/randytarampi/lwip/compare/v2.0.2...v3.0.0) (2020-08-02)


### Features

* **package:** Ignore node@8 test failures. ([b65f49f](https://github.com/randytarampi/lwip/commit/b65f49f47ea559053248d97a7930360eae29e9aa))


### BREAKING CHANGES

* **package:** And also formally drop node@8 support. It *should* still work on node@8 though. This is just a `devDependencies` incompatibility but bump this anyways...

## [2.0.2](https://github.com/randytarampi/lwip/compare/v2.0.1...v2.0.2) (2020-05-04)


### Bug Fixes

* upgrade snyk from 1.316.1 to 1.316.2 ([4a5c032](https://github.com/randytarampi/lwip/commit/4a5c0324d64525f743a02c427459727261bd787e))
* upgrade snyk from 1.316.1 to 1.316.2 ([e7ff6f5](https://github.com/randytarampi/lwip/commit/e7ff6f5d88412e3412ff6431b86f84c40527bdd4))

## [2.0.1](https://github.com/randytarampi/lwip/compare/v2.0.0...v2.0.1) (2020-05-01)


### Bug Fixes

* package.json, package-lock.json & .snyk to reduce vulnerabilities ([a5be9d6](https://github.com/randytarampi/lwip/commit/a5be9d6b8c6422bff10d42fa1a382529c97fda94))
* package.json, package-lock.json & .snyk to reduce vulnerabilities ([662dceb](https://github.com/randytarampi/lwip/commit/662dceb1b7056074a4f9b7f413e0d19ce527679e))
* package.json, package-lock.json & .snyk to reduce vulnerabilities ([468a0e1](https://github.com/randytarampi/lwip/commit/468a0e15d112c32d883581d264978859f0709cdb))

# [2.0.0](https://github.com/randytarampi/lwip/compare/v1.3.1...v2.0.0) (2020-04-29)


### Features

* Support node@14. ([8e74b81](https://github.com/randytarampi/lwip/commit/8e74b815882499b69610c924391af522c80d4206)), closes [/github.com/randytarampi/lwip/pull/34#issuecomment-620724886](https://github.com//github.com/randytarampi/lwip/pull/34/issues/issuecomment-620724886)


* Merge pull request #36 from randytarampi/feat/support-node-14 ([abe243f](https://github.com/randytarampi/lwip/commit/abe243f39366d8184ee3e8b6686445db7d32560d)), closes [#36](https://github.com/randytarampi/lwip/issues/36)


### BREAKING CHANGES

* Drop support for node<8.

I mean, technically we haven't supported node<8 since  https://github.com/randytarampi/lwip/commit/76066757ec41c21e2e25520025a92dac3c9e7166 per  https://github.com/randytarampi/lwip/commit/b1883ebeb49e39aa2e6443a59fd72b9ff017688c, but by removing the tests I'm saying that it's **done**. Besides, node@8 is EoL already anyways right?
* Drop support for node<8.

## [1.3.1](https://github.com/randytarampi/lwip/compare/v1.3.0...v1.3.1) (2020-04-28)


### Bug Fixes

* **blur:** Just use `CImg.blur` to blur images ([4cf9aaf](https://github.com/randytarampi/lwip/commit/4cf9aaf4b76c6a26fb6b45ffd830da405f38e0cc))

# [1.3.0](https://github.com/randytarampi/lwip/compare/v1.2.0...v1.3.0) (2020-04-28)


### Features

* **Image:** Fix conflicts per https://github.com/randytarampi/lwip/pull/29. ([0745d4f](https://github.com/randytarampi/lwip/commit/0745d4f966d4ba5220309f132f83efe9beeae98e)), closes [/github.com/randytarampi/lwip/pull/29/files#diff-42195936cee3445e27c1695ab97c3cc8R563](https://github.com//github.com/randytarampi/lwip/pull/29/files/issues/diff-42195936cee3445e27c1695ab97c3cc8R563)

# [1.2.0](https://github.com/randytarampi/lwip/compare/v1.1.0...v1.2.0) (2020-04-28)


### Features

* **Image:** Fix conflicts per https://github.com/randytarampi/lwip/pull/28. ([7cd33d5](https://github.com/randytarampi/lwip/commit/7cd33d5e6b39ae9f383acd89381dd811abf9ee00))

# [1.1.0](https://github.com/randytarampi/lwip/compare/v1.0.1...v1.1.0) (2020-01-06)


### Features

* **package:** Blindly upgrade our dependencies for the new year. ([111fefc](https://github.com/randytarampi/lwip/commit/111fefc01aaaf4e7b0ebfe14500c7f22cacb2140))

## [1.0.1](https://github.com/randytarampi/lwip/compare/v1.0.0...v1.0.1) (2020-01-05)


### Bug Fixes

* Set our minimum node version to node@8, test against node@12, and allow failures against node@6. ([7606675](https://github.com/randytarampi/lwip/commit/7606675))

# [1.0.0](https://github.com/randytarampi/lwip/compare/v0.0.19...v1.0.0) (2020-01-05)


### Features

* Support node@12. ([b1883eb](https://github.com/randytarampi/lwip/commit/b1883eb)), closes [#20](https://github.com/randytarampi/lwip/issues/20)


### BREAKING CHANGES

* Drop support for node@6, but add support for node@12.

## [0.0.19](https://github.com/randytarampi/lwip/compare/v0.0.18...v0.0.19) (2019-03-10)


### Bug Fixes

* **travis:** Don't bother caching dependencies. ([81c0c4e](https://github.com/randytarampi/lwip/commit/81c0c4e))


### Reverts

* chore(package): Apparently we support node^4? ([5c860bf](https://github.com/randytarampi/lwip/commit/5c860bf))

## [0.0.18](https://github.com/randytarampi/lwip/compare/v0.0.17...v0.0.18) (2019-03-10)


### Bug Fixes

* **build:** Always build _everything_ from source. ([#5](https://github.com/randytarampi/lwip/issues/5)) ([f3a8775](https://github.com/randytarampi/lwip/commit/f3a8775))


### Reverts

* chore(build): use system libs on non-windows, speed up build ([#1](https://github.com/randytarampi/lwip/issues/1)) ([e61204b](https://github.com/randytarampi/lwip/commit/e61204b))

## [0.0.17](https://github.com/randytarampi/lwip/compare/v0.0.16...v0.0.17) (2019-03-09)


### Bug Fixes

* **build:** Build against the included `zlib`. ([#4](https://github.com/randytarampi/lwip/issues/4)) ([ee4352a](https://github.com/randytarampi/lwip/commit/ee4352a))


### Reverts

* Conditionally use ZLIB version, based on version of NodeJS ([53a9ccb](https://github.com/randytarampi/lwip/commit/53a9ccb))

## [0.0.16](https://github.com/randytarampi/lwip/compare/v0.0.15...v0.0.16) (2019-03-09)


### Bug Fixes

* **appveyor:** Actually `npm install -g npm`. ([d08cdad](https://github.com/randytarampi/lwip/commit/d08cdad))
* **appveyor:** Allow failures on node@6. ([4104ae6](https://github.com/randytarampi/lwip/commit/4104ae6))
* **appveyor:** Don't bother passing `--msvs_version` to `npm install`. ([be700c0](https://github.com/randytarampi/lwip/commit/be700c0))
* **appveyor:** Install the latest `npm`. ([ccf1e39](https://github.com/randytarampi/lwip/commit/ccf1e39))
* **appveyor:** Just run commands in shell mode. ([7841147](https://github.com/randytarampi/lwip/commit/7841147))

## [0.0.15](https://github.com/randytarampi/lwip/compare/v0.0.14...v0.0.15) (2019-03-08)


### Bug Fixes

* `new Buffer` -> `Buffer.allocUnsafe`. ([9b4b113](https://github.com/randytarampi/lwip/commit/9b4b113))

## [0.0.14](https://github.com/randytarampi/lwip/compare/v0.0.13...v0.0.14) (2019-03-08)


### Bug Fixes

* **travis:** `allow_failures` for all Windows builds per my note in cfb1e2e21d53eee3f9b6b39180347ff250af2020. ([56b6711](https://github.com/randytarampi/lwip/commit/56b6711))


### Reverts

* chore: Stop running CI on Appveyor. ([cfb1e2e](https://github.com/randytarampi/lwip/commit/cfb1e2e))

## [0.0.13](https://github.com/randytarampi/lwip/compare/v0.0.12...v0.0.13) (2019-03-08)


### Performance Improvements

* **package:** Just hardcode `node-gyp rebuild -j 8`. ([f07bf13](https://github.com/randytarampi/lwip/commit/f07bf13))

## [0.0.12](https://github.com/randytarampi/lwip/compare/v0.0.11...v0.0.12) (2019-03-08)


### Bug Fixes

* **semantic-release:** Use `@semantic-release/git` properly ([9cb6c1e](https://github.com/randytarampi/lwip/commit/9cb6c1e))
