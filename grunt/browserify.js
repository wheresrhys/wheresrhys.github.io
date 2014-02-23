module.exports = {
    dev: {
        options: {
            debug: true
        },
        files: {
            './main.js': './src/main.js'
        }
    },
    dist: {
        options: {
            debug: false
        },
        files: {
            './_site/main.js': './src/main.js'
        }
    }
};