const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: "./index.tsx",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js",
		publicPath: "/",
	},
	resolve: {
		modules: [path.join(__dirname, "src"), "node_modules"],
		alias: {
			react: path.join(__dirname, "node_modules", "react"),
		},
		extensions: [ ".tsx", ".ts", ".js" ],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",
				},
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
					{
						loader: "sass-loader"
					}
				],
			},
		],
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
		}),
	],
};
