// eslint-disable-next-line @typescript-eslint/no-var-requires
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const path = require("path");

/** @type {import('eslint').Linter.Config} */
const config = {
	root: true,
	ignorePatterns: [
		"**/tsconfig.json",
		"**/node_modules/",
		"**/package.json",
		"**/biome.json",
	],
	overrides: [
		{
			files: ["*.cjs", "*.js"],
			parserOptions: {
				ecmaVersion: "latest",
			},
			rules: {},
		},
		{
			files: ["*.mjs"],
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
			},
			rules: {},
		},
		{
			files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
			parserOptions: {
				project: path.join(__dirname, "tsconfig.json"),
				tsconfigRootDir: __dirname,
				ecmaFeatures: {
					jsx: true,
				},
				requireConfigFile: false,
				// sourceType: "module",
				allowImportExportEverywhere: true,
				warnOnUnsupportedTypeScriptVersion: true,
			},
			extends: [
				"next",
				"next/core-web-vitals",
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				// "plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:tailwindcss/recommended",
				"plugin:react/recommended",
				"plugin:react-hooks/recommended",
				"plugin:@next/next/recommended",
				"plugin:import/recommended",
				"plugin:import/typescript",
				"prettier",
				"async",
				"async/node",
				"async/typescript",
				"plugin:oxlint/recommended",
			],
			parser: "@typescript-eslint/parser",
			plugins: [
				"@typescript-eslint",
				"tailwindcss",
				"eslint-plugin-react",
				"import",
				"jsx-a11y",
				"eslint-plugin-node",
				"@typescript-eslint",
				"react",
				"react-hooks",
			],
			settings: {
				// react: {
				// 	version: "detect",
				// },
				// "import/parsers": {
				// 	"@typescript-eslint/parser": [".ts", ".tsx"],
				// },
				// "import/resolver": {
				// 	typescript: {
				// 		alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

				// 		// Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

				// 		// use <root>/path/to/folder/tsconfig.json
				// 		project: "./tsconfig.json",
				// 	},
				// 	node: true,
				// },
				react: {
					version: "detect",
				},
				"import/parsers": {
					[require.resolve("@typescript-eslint/parser")]: [
						".ts",
						".mts",
						".cts",
						".tsx",
						".d.ts",
						".js",
						".jsx",
					],
				},
				"import/resolver": {
					[require.resolve("eslint-import-resolver-node")]: {
						extensions: [".js", ".jsx", ".ts", ".tsx"],
					},
					[require.resolve("eslint-import-resolver-typescript")]: {
						alwaysTryTypes: true,
					},
				},
				env: {
					browser: true,
					node: true,
				},
			},
			rules: {
				// turn on errors for missing imports
				"import/no-unresolved": "error",
				"import/no-anonymous-default-export": "warn",
				"jsx-a11y/alt-text": [
					"warn",
					{
						elements: ["img"],
						img: ["Image"],
					},
				],
				"jsx-a11y/aria-props": "warn",
				"jsx-a11y/aria-proptypes": "warn",
				"jsx-a11y/aria-unsupported-elements": "warn",
				"jsx-a11y/role-has-required-aria-props": "warn",
				"jsx-a11y/role-supports-aria-props": "warn",
				//
				// node specific
				//
				"node/handle-callback-err": "off",
				"no-async-promise-executor": "error",
				"no-await-in-loop": "error",
				"no-promise-executor-return": "error",
				"require-atomic-updates": "error",
				"max-nested-callbacks": ["error", 3],
				"prefer-promise-reject-errors": "error",
				"node/no-callback-literal": "error",
				"node/no-sync": "error",
				//
				"@typescript-eslint/await-thenable": "error",
				"@typescript-eslint/no-misused-promises": "error",
				"@typescript-eslint/promise-function-async": "error",
				"@typescript-eslint/consistent-type-imports": [
					"error",
					{
						prefer: "type-imports",
						fixStyle: "inline-type-imports",
					},
				],
				"@typescript-eslint/no-unused-vars": [
					"warn",
					{
						argsIgnorePattern: "^_",
						vars: "all",
						args: "all",
						varsIgnorePattern: "^_",
					},
				],
				"no-unused-vars": "off",
				"no-dupe-else-if": "error",
				"no-dupe-keys": "error",
				"no-duplicate-imports": "error",
				"no-unreachable": "error",
				"no-use-before-define": "error",
				"dot-notation": "error",
				eqeqeq: "error",
				"no-lonely-if": "error",
				"no-return-await": "error",
				"no-useless-catch": "error",
				"no-var": "error",
				"prefer-const": "warn",
				"@typescript-eslint/no-floating-promises": "error",
				"@typescript-eslint/consistent-type-definitions": ["warn", "type"],
				"consistent-return": "error",
				"@typescript-eslint/explicit-function-return-type": [
					"warn",
					{
						allowExpressions: true,
						allowTypedFunctionExpressions: true,
					},
				],
				"object-shorthand": "warn",
				"@typescript-eslint/no-explicit-any": "warn",
				"@typescript-eslint/return-await": "error",
				"no-unneeded-ternary": "error",
				"no-restricted-imports": [
					"off",
					{
						patterns: ["../"],
					},
				],
				"import/no-default-export": "off",
				"@typescript-eslint/no-confusing-void-expression": "error",
				"@typescript-eslint/no-meaningless-void-operator": "warn",
				"react/function-component-definition": [
					"off",
					{
						namedComponents: ["arrow-function"],
						unnamedComponents: "arrow-function",
					},
				],
				"no-plusplus": [
					"error",
					{
						allowForLoopAfterthoughts: true,
					},
				],
				"@typescript-eslint/strict-boolean-expressions": [
					"off",
					{
						allowString: false,
						allowNumber: false,
						allowNullableObject: false,
					},
				],
				"no-implicit-coercion": "error",
				"jsx-a11y/label-has-associated-control": [
					"error",
					{
						labelComponents: ["Label"],
						labelAttributes: ["label"],
						controlComponents: ["Input", "Select"],
						depth: 2,
						required: {
							some: ["nesting", "id"],
						},
					},
				],
				"jsx-a11y/anchor-is-valid": [
					"error",
					{
						components: ["Link"],
						specialLink: ["hrefLeft", "hrefRight"],
						aspects: ["invalidHref", "preferButton"],
					},
				],
				"@typescript-eslint/prefer-nullish-coalescing": "error",
				"@typescript-eslint/no-unnecessary-condition": "error",
				"@typescript-eslint/no-unsafe-assignment": "error",
				"@typescript-eslint/no-unsafe-member-access": "error",
				"@typescript-eslint/no-unsafe-call": "error",
				"@typescript-eslint/no-unsafe-return": "error",
				"@typescript-eslint/no-non-null-assertion": "error",
				"@typescript-eslint/prefer-optional-chain": "error",
				"@typescript-eslint/no-unnecessary-type-assertion": "error",

				// React
				"no-restricted-syntax": [
					"warn",
					{
						selector:
							"JSXElement[openingElement.name.name='TwoColumnLayout']:not([children.1.openingElement.name.name='Meta']), JSXElement[openingElement.name.name='TwoColumnLayout']:not([children.3.openingElement.name.name='main']), JSXElement[openingElement.name.name='TwoColumnLayout']:not([children.5.openingElement.name.name='aside'])",
						message:
							"The TwoColumLayout component must contain only <Meta />, <main> and <aside> elements as children, in exactly this order",
					},
				],
				"react/prop-types": "off",
				"react/jsx-key": "error",
				"react/jsx-no-target-blank": "error",
				"react/jsx-no-useless-fragment": "warn",
				"react/no-array-index-key": "warn",
				"react/no-deprecated": "warn",
				"react/no-unused-state": "error",
				"react/button-has-type": "error",
				"react/display-name": "error",
				"react/hook-use-state": "error",
				"react/jsx-fragments": ["error", "element"],
				"react/no-children-prop": "off",
				"react/react-in-jsx-scope": "off",
				"react/jsx-curly-brace-presence": "error",
				"react/jsx-boolean-value": "error",
				"react/no-direct-mutation-state": "error",
				"react/self-closing-comp": "error",
				"react/no-unknown-property": "error",
				"react/no-unescaped-entities": "off",

				// Tailwind
				"tailwindcss/classnames-order": "warn",
				"tailwindcss/migration-from-tailwind-2": "warn",
				"tailwindcss/enforces-negative-arbitrary-values": "warn",
				"tailwindcss/enforces-shorthand": "warn",
				"tailwindcss/no-contradicting-classname": "warn",
				"tailwindcss/no-unnecessary-arbitrary-value": "warn",
				"tailwindcss/no-custom-classname": "off",
				"tailwindcss/no-arbitrary-value": "off",
			},
		},
		{
			files: ["{page,layout,not-found}.tsx"],
			rules: {
				"import/no-default-export": "off",
			},
		},
	],
};

module.exports = config;

//
// flat eslint config
// eslint.config.js

// import path from "path";
// import { fileURLToPath } from "url";

// import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
// import { FlatCompat } from "@eslint/eslintrc";
// import js from "@eslint/js";
// import nextPlugin from "@next/eslint-plugin-next";
// import eslintConfigPrettier from "eslint-config-prettier";
// import hooksPlugin from "eslint-plugin-react-hooks";
// import reactRecommended from "eslint-plugin-react/configs/recommended.js";
// import globals from "globals";
// import tseslint from "typescript-eslint";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const compat = new FlatCompat({
// 	baseDirectory: __dirname,
// 	resolvePluginsRelativeTo: __dirname,
// });

// export default tseslint.config(
// 	{
// 		ignores: [".next", "eslint.config.js"],
// 	},
// 	js.configs.recommended,

// 	// TypeScript ESLint
// 	...tseslint.configs.strictTypeChecked,
// 	...tseslint.configs.stylisticTypeChecked,
// 	{
// 		linterOptions: {
// 			reportUnusedDisableDirectives: true,
// 		},
// 		languageOptions: {
// 			parserOptions: {
// 				project: "./tsconfig.json",
// 			},
// 		},
// 	},
// 	{
// 		rules: {
// 			"@typescript-eslint/no-unused-vars": [
// 				"warn",
// 				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
// 			],
// 			"@typescript-eslint/consistent-type-imports": [
// 				"warn",
// 				{ prefer: "type-imports", fixStyle: "separate-type-imports" },
// 			],
// 			"@typescript-eslint/no-misused-promises": [
// 				"error",
// 				{ checksVoidReturn: { attributes: false } },
// 			],
// 			"@typescript-eslint/no-unnecessary-condition": [
// 				"error",
// 				{
// 					allowConstantLoopConditions: true,
// 				},
// 			],
// 		},
// 	},

// 	{
// 		files: ["**/*.ts", "**/*.tsx"],
// 		plugins: {
// 			"@next/next": nextPlugin,
// 		},
// 		rules: {
// 			...nextPlugin.configs.recommended.rules,
// 			...nextPlugin.configs["core-web-vitals"].rules,
// 			// TypeError: context.getAncestors is not a function
// 			"@next/next/no-duplicate-head": "off",
// 		},
// 	},

// 	{
// 		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
// 		...reactRecommended,
// 		languageOptions: {
// 			...reactRecommended.languageOptions,
// 			globals: {
// 				...globals.serviceworker,
// 				...globals.browser,
// 			},
// 		},
// 		rules: {
// 			// TypeError: context.getFirstTokens is not a function
// 			"react/display-name": "off",
// 		},
// 	},

// 	{
// 		files: ["**/*.ts", "**/*.tsx"],
// 		plugins: {
// 			"react-hooks": hooksPlugin,
// 		},
// 		rules: {
// 			...hooksPlugin.configs.recommended.rules,
// 		},
// 	},

// 	...compat.extends("plugin:jsx-a11y/strict"),
// 	comments.recommended,
// 	eslintConfigPrettier,
// );
