# curcode

A node.js module to list and work on currency codes based on the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217)
standard.

	npm install curcode

## code('EUR')

``` js
var cc = require('curcode');
console.log(cc.code('EUR'));

/*
{
	code: 'EUR',
	number: 978,
	digits: 2,
	currency: 'Euro',
	symbol: '€',
	countries: [
		'andorra', 'austria', 'belgium', 'cyprus', 'estonia', 'finland',
		'france', 'germany', 'greece', 'ireland', 'italy', 'kosovo',
		'luxembourg', 'malta', 'monaco', 'montenegro', 'netherlands',
		'portugal', 'san marino', 'slovakia', 'slovenia', 'spain',
		'vatican city' ]
}
*/
```

## number(967)

``` js
var cc = require('curcode');
console.log(cc.number(967));

/*
{
	code: 'ZMW',
	number: 967,
	digits: 2,
	currency: 'Zambian kwacha',
	countries: [ 'zambia' ] }
*/
```

## country('colombia')

``` js
var cc = require('curcode');
console.log(cc.country('colombia'));

/*
[
	{
		code: 'COP',
		number: 170,
		digits: 2,
		currency: 'Colombian peso',
		countries: [ 'colombia' ]
	}, {
		code: 'COU',
		number: 970,
		digits: 2,
		currency: 'Unidad de Valor Real',
		countries: [ 'colombia' ]
	}
]
*/
```

## codes()

``` js
var cc = require('curcode');
console.log(cc.codes());

/*
[
	'AED',
	'AFN',
	...
	'ZAR',
	'ZMW'
]
*/
```

## numbers()

``` js
var cc = require('curcode');
console.log(cc.numbers());

/*
[
	'784',
	'971',
	...
	'710',
	'967'
]
*/
```

## countries()

``` js
var cc = require('curcode');
console.log(cc.countries());

/*
[ 
	'united arab emirates',
	'afghanistan',
	...
]
*/
```

## symbols

``` js
var cc = require('curcode');
console.log(cc.symbols);

/*
    AED: 'د.إ',
    AFN: '؋',
    ALL: 'L',
    AMD: '֏',
    ANG: 'ƒ',
    ...
*/
```

## data

``` js
var data = require('curcode/data');
console.log(data);

/*
[{
	code: 'AED',
	number: '784',
	digits: 2,
	currency: 'United Arab Emirates dirham',
	countries: ['united arab emirates']
}, {
	code: 'AFN',
	number: '971',
	digits: 2,
	currency: 'Afghan afghani',
	countries: ['afghanistan']
}, {
	...
*/
```

## publishDate

```js
var cc = require('curcode');

console.log(cc.publishDate);

/*
2018-08-29
*/
```

# License

MIT
