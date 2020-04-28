const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './ts/main.ts',
    output: {
        filename: 'app-bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ["@babel/preset-typescript", '@babel/preset-env'],
                            plugins: ["@babel/transform-runtime"] 
                    },
                  }
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
};
