const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {

	const alias = env.preact ? {
		react: 'preact/compat',
		'react-dom/test-utils': 'preact/test-utils',
		'react-dom': 'preact/compat',
		'react/jsx-runtime': 'preact/jsx-runtime'
	} : {};
	const devServerPort = (env.preact ? 8085 : 8086);

	return {
		entry: {
			module1: './src/module1.js',
			module2: './src/module2.js'
		},
		output: {
			path: __dirname + '/dist',
			filename: '[name].js',
			library: {
				name: '[name]',
				type: 'umd'
			}
		},
		target: ['web', 'es5'],
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader']
				}
			]
		},
		resolve: {
			modules: [
				path.resolve('./src'),
				path.resolve('./node_modules')
			],
			alias
		},
		plugins: [
			new CopyPlugin({
				patterns: [{ from: 'index.html' }]
			})
		],
		devServer: {
			compress: true,
			allowedHosts: 'all',
			host: 'localhost',
			port: devServerPort,
			server: {
				type: 'http'
			},
			static: {
				directory: __dirname + '/dist'
			},
			devMiddleware: {
				stats: {
					modules: false
				}
			},
			liveReload: false,
			hot: false,
		},
		devtool: 'source-map'
	};
};
