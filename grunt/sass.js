module.exports = {
    dev: {
        options: {
            style: 'expanded'
        },
        files: {
            './static/main.css': './style/main.scss'
        }
    },
    dist: {
        options: {
            style: 'compressed'
        },
        files: {
            './static/main.css': './style/main.scss'
        }
    }
};