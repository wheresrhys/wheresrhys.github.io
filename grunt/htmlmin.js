module.exports = {
    dist: { // Target options
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: [{
            expand: true,
            cwd: '_site/',
            src: ['**/*.html'],
            dest: '_site/'
        }]
    }
};