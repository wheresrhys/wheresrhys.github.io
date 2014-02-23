module.exports = {
    dev: {
        options: {
            style: 'expanded'
        },
        files: {
            './style/main.css': './style/main.scss'
        }
    },
    dist: {
        options: {
            style: 'compressed'
        },
        files: {
            './_site/style/main.css': './style/main.scss'
        }
    }
};