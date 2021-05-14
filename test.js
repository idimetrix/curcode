const cc = require('./index');

const assert = require('assert');

assert(cc.code('EUR').countries.length === 35);
assert(cc.symbol('€').countries.length === 35);
assert(cc.code('IDR').digits === 2);
assert(cc.number('967').currency === 'Zambian Kwacha');
assert(cc.number(967).currency === 'Zambian Kwacha');
assert(cc.country('Colombia').length === 2);
assert(cc.country('colombia').length === 2);
assert(cc.codes().length === 179);
assert(Object.keys(cc.symbols).length === 183);
assert(cc.countries().length === 260);
assert(cc.numbers().length === 179);
assert(cc.numbers()[0] === '784');
assert(cc.data.length == 179);
