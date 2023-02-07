import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
   test: /\.s[ac]ss$/i,
   use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
   ],
});

export const rendererConfig: Configuration = {
   module: {
      rules: rules,
   },
   plugins,
   resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
   },
};
