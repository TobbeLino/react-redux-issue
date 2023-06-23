module.exports = (api) => {
	api.cache.using(() => process.env.NODE_ENV);

	return {
		presets: [
			"@babel/preset-env",
			"@babel/preset-react"
		],
		plugins: [
			"@emotion",
			["@babel/plugin-transform-runtime", {
				helpers: true,
				regenerator: true,
			}],
			["@babel/plugin-transform-react-jsx", {
				pragma: "react.createElement",
				pragmaFrag: "react.Fragment"
			}],
			['@emotion/babel-plugin-jsx-pragmatic', {
				module: 'react',
				import: 'react'
			}].filter(Boolean)
		]
	};
};
