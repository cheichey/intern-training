const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
    mode: "development",
    target: "node",
    entry: {
        server: "./src/server/index.ts",
        "public/client": "./src/client/index.tsx",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        compilerOptions: {
                            strict: false,
                            strictNullChecks: false,
                        },
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    "isomorphic-style-loader",
                    "css-modules-typescript-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            esModule: false
                        }
                    },
                ]
            }
        ],
    },
    resolve: {
        fallback: {
            modules: [path.resolve("./src"), "node_modules"],
            crypto: require.resolve("crypto-browserify"),
            zlib: require.resolve("browserify-zlib"),
            fs: require.resolve("fs"),
            http: require.resolve("stream-http"),
            assert: require.resolve("assert/"),
        },
        extensions: [".ts", ".js", ".tsx"],
        plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
    },
    externals: {
        "node-fetch": "commonjs2 node-fetch",
    },
};
