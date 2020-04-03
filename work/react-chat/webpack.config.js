const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './ts/main.tsx',
    output: {
        filename: 'app-bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'                    
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                }],
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ],
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    resolve: {
        extensions: [ '.tsx', '.ts'],
    },
};
