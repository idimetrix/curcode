const data = require('./data');
const symbols = require('./symbols');

const combine = (code) => {
    if (!code) return code;

    code.symbol = symbols[code.code];

    return code;
}

const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value)

module.exports = {
    code: (code) => combine(data.find(c => c.code === code.toUpperCase())),
    symbol: (symbol) => combine(data.find(c => c.code === getKeyByValue(symbols, symbol))),
    country: (country) => data.filter(c => (c.countries.map((c) => c.toLowerCase()) || []).indexOf(country.toLowerCase()) > -1),
    number: (number) => data.find((c) => c.number === String(number)),
    codes: () => data.map((c) => c.code),
    numbers: () => data.map((c) => c.number).filter(n => !!n),
    countries: () => data.map((c) => c.countries).flat().filter((c, i, arr) => arr.indexOf(c) === i),
    data,
    symbols,
    publishDate: require('./iso-4217-publish-date')
};
