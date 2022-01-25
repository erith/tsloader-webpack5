const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    clean: true
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: 'inline-source-map',
  devServer: {
    static : {
      directory: path.join(__dirname, "/"),
    },
    
    
    //contentBase: path.join(__dirname, ""),
    //contentBase: "",
    //publicPath: "/",    
   hot: true,
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, 
        loader: "ts-loader",   
        exclude: /node_modules/,  
        options: {
          configFile: 'tsconfig.json',
        }
      }
    ]
  },
  plugins: [ new CleanWebpackPlugin(), new HtmlWebpackPlugin({ template: './index.html', }), ]

};