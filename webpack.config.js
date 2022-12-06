const path = require("path")

module.exports = {
    mode: 'development',
    entry: "./src/index.jsx", // el punto de arranque de nuestro programa
    output: {
        path: path.resolve(__dirname, "build"), // el path absoluto para el directorio donde queremos que el output sea colocado
        filename: "bundle.js" // el nombre del archivo que va a contener nuestro output - podemos nombrarlo como queramos pero bundle.js es lo típico
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.gcss$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg)$/,
                use: 'file-loader'
            }
        ],
    },
}