
const json =require('../../package.json');//引进package.json

const newEntry = {
    'index':'./entryBuild/index.js',
    'shop':'./entryBuild/shop.js',
};

newEntry.vendor = Object.keys(json.devDependencies); //把公共的组件放进vendor中单独打包

let config = {
    entry: newEntry,
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css",".pcss"],
    }

};

module.exports = config;

