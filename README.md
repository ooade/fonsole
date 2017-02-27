<p align="center">
<img src='http://emojione.com/wp-content/uploads/assets/emojis/1f916.svg' width="256" height="256" alt="Fonsole"/>
<br/>
<a href="https://www.npmjs.org/package/fonsole"><img src="https://img.shields.io/npm/v/fonsole.svg?style=flat" alt="npm"></a> <a href="https://travis-ci.org/ooade/fonsole"><img src="https://travis-ci.org/ooade/fonsole.svg?branch=master" alt="travis"></a>
</p>

# Fonsole

Tiny ~250B browser console formatter.

## Usage
Fonsole exports a single object, which has a single method `log`. `fonsole.log` replaces your native browser's `console.log` statement with it's own formatted log statement, which takes in the style to be used as its second argument.

```js
import fonsole from 'fonsole';

fonsole.log('Hi There!', 'color: green; font-size: 1.5rem');
```

## License
MIT
