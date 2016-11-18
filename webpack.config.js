var webpack = require("webpack")
var path = require("path")

var sources = [
  path.resolve(__dirname, "src"),
]

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./lib/index.js",
    library: "react-google-map",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: ["", ".js"]
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        include: sources,
        loader: "eslint",
        query: {
          presets: ["latest"]
        },
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        include: sources,
        loader: "babel",
        query: {
          presets: ["latest"]
        },
      },
    ],
  },
 externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
    },
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ]
}
