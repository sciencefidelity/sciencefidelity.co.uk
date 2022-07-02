module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module"
	},
	plugins: ["@typescript-eslint"],
	rules: {
		indent: "off",
		"linebreak-style": ["error", "unix"],
		quotes: "off",
		semi: "off",
		"space-before-function-paren": [
			"error",
			{
				anonymous: "always",
				named: "never",
				asyncArrow: "always"
			}
		],
		"no-unused-vars": [
			"warn",
			{ varsIgnorePattern: "[iI]gnored", argsIgnorePattern: "^_" }
		],
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{ varsIgnorePattern: "[iI]gnored", argsIgnorePattern: "^_" }
		]
	}
}
