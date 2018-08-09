import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import sourceMaps from 'rollup-plugin-sourcemaps';

import pkg from './package.json';

const shared = {
  input: `compiled/index.js`,
  external: ['react', 'react-native'],
};

export default [
  Object.assign({}, shared, {
    output: {
      name: 'ReactNativeDesignUtility',
      format: 'umd',
      sourcemap: true,
      file:
        process.env.NODE_ENV === 'production'
          ? './dist/ReactNativeDesignUtility.umd.min.js'
          : './dist/ReactNativeDesignUtility.umd.js',
      exports: 'named',
      globals: {
        react: 'React',
        'react-native': 'ReactNative',
      },
    },

    plugins: [
      resolve(),
      replace({
        exclude: 'node_modules/**',
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV || 'development',
        ),
      }),
      commonjs({
        include: /node_modules/,
      }),
      sourceMaps(),
      process.env.NODE_ENV === 'production' && filesize(),
      process.env.NODE_ENV === 'production' &&
        uglify({
          output: { comments: false },
          compress: {
            keep_infinity: true,
            pure_getters: true,
          },
          warnings: true,
          // ecma: 5,
          toplevel: false,
        }),
    ],
  }),

  Object.assign({}, shared, {
    // external: shared.external.concat(Object.keys(pkg.dependencies)),
    output: [
      {
        file: 'dist/ReactNativeDesignUtility.es6.js',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'dist/ReactNativeDesignUtility.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      sourceMaps(),
      process.env.NODE_ENV === 'production' && filesize(),
    ],
  }),
];
