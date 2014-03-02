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
            './static/main.js': './src/main.js'
        }
    }
};