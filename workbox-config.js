module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,html,png,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};