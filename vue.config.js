module.exports = {
  transpileDependencies: ["vuetify"],
  pages: {
    "index": {
      entry: "./src/pages/Home/main.ts",
      template: "public/index.html",
      title: "Home",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    "BIM": {
      entry: "./src/pages/BIM/main.ts",
      template: "public/test.html",
      title: "BIM",
      chunks: ["chunk-vendors", "chunk-common", "BIM"]
    }
  }
};
