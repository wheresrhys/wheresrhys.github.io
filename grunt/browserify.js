module.exports = {
    dev: {
        options: {
            debug: true
        },
        files: {
            './static/main.js': './src/main.js'
        }
    },
    dist: {
        options: {
            debug: false
        },
        files: {
            './_site/static/main.js': './src/main.js'
        }
    }
};