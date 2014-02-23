module.exports = {
    prod: {
        src: [
            'templates/header.html',
            'templates/prod/style-start.html',
            'dist/main.css',
            'templates/prod/style-end.html',
            'templates/body.html',
            'templates/prod/script-start.html',
            'dist/main.js',
            'templates/prod/script-end.html',
            'templates/foot.html'
        ],
        dest: 'dist/index.html'
    },
    dev: {
        src: ['templates/header.html', 'templates/dev/style.html', 'templates/body.html', 'templates/dev/script.html', 'templates/foot.html'],
        dest: 'index.html'
    }
};