const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js", //'chunckhash'
    clean: true
  },  
  module: { //loader
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { //typescript 
        test: /\.tsx?$/, 
        loader: "ts-loader",   
        exclude: /node_modules/,  
        options: {
          configFile: 'tsconfig.json',
        }
      }
    ]
  },  
  // see : https://webpack.js.org/plugins/html-webpack-plugin/#third-party-addons
  plugins: [ new CleanWebpackPlugin(), new HtmlWebpackPlugin({ template: './index.html', }), ],
  devtool: "inline-source-map",
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: 'inline-source-map',
  devServer: {
    static : {
      directory: path.join(__dirname, "/"),
    },
   hot: true,
   port: 9000,
   client: {
    overlay: false,
  },
  }
};