import path from 'path';

import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './build.types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    compress: true,
    static: {
      directory: path.join(__dirname, 'build'),
    },
    hot: true,
  };
}
