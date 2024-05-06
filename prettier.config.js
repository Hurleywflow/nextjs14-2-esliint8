/** @type {import('prettier').Config} */
module.exports = {
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: "es5",
	tailwindFunctions: ["tw", "clsx"],
	tailwindAttributes: ["myClassList"],

	plugins: ["prettier-plugin-tailwindcss"],
};
