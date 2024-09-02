import HtmlWebpackPlugin from "html-webpack-plugin";
// import NodemonPlugin from "nodemon-webpack-plugin";

import path from "path";

export default {
  mode: "production",
  entry: "./index.jsx",
  output: {
    filename: "main.js",
    path: import.meta.dirname + "/dist",
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        // js/jsx를 동시에 같은 방식으로 처리
        test: /\.(js|jsx)$/, // 인터넷의 예제들을 살펴 보니 보통 여기에는 정규표현식을 쓰는 것 같다.
        use: "babel-loader", // js가 있는 이유는...공식 도움말의 Shimming을 보자. Polyfill을 써야 하는 이유인 ECMAScript 버전 차이가 주된 이유라고 한다.
        exclude: [/node_modules/, /dist/],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: [/node_modules/, /dist/],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "리버티미디어",
      template: "./index.html",
    }),
  ],
  devServer: {
    static: path.resolve(import.meta.url + "/dist"),
    historyApiFallback: true,
    port: 8080,
    hot: true,
  },
  resolve: {
    extensions: [".jsx", ".js", ".css"],
  },
  watchOptions: {
    ignored: ["./node_modules"],
  },
};
