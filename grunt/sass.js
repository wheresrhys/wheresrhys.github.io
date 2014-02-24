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
            './_site/static/main.css': './style/main.scss'
        }
    }
};