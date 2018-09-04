# Replacing Array.indexOf with Array.includes
```
'use strict';

const characters = [
  'ironman',
  'black_widow',
  'hulk',
  'captain_america',
  'hulk',
  'thor',
];

console.log(characters.indexOf('hulk'));
// 2
console.log(characters.indexOf('batman'));
// -1

console.log(characters.includes('hulk'));
// true
console.log(characters.includes('batman'));
// false
```

# Using Array.find or Array.some | instead of Array.filter
```
'use strict';

const characters = [
  { id: 1, name: 'ironman' },
  { id: 2, name: 'black_widow' },
  { id: 3, name: 'captain_america' },
  { id: 4, name: 'captain_america' },
];

function getCharacter(name) {
  return character => character.name === name;
}

console.log(characters.filter(getCharacter('captain_america')));
// [
//   { id: 3, name: 'captain_america' },
//   { id: 4, name: 'captain_america' },
// ]

console.log(characters.find(getCharacter('captain_america')));
// { id: 3, name: 'captain_america' }

console.log(characters.some(getCharacter('ironman')));
// true

```
