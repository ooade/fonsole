import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

let pkg = require('./package.json');

export default {
  entry: 'src/index.js',
  useStrict: false,
  plugins: [
    babel(babelrc())
  ],
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'fonsole',
      sourceMap: true
    },
    {
      dest: pkg.module,
      format: 'cjs',
      sourceMap: true
    }
  ]
};
