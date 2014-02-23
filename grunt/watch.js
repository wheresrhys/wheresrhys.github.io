module.exports = {
    templates: {
        files: 'templates/**/*.html',
        tasks: ['concat:dev']
    },
    style: {
        files: 'style/**/*.scss',
        tasks: ['sass:dev']
    } //,
    // styluses: {
    //   files: 'style/components/*.styl',
    //   tasks: ['shell:stylus']
    // },
    // styles: {
    //   files: 'style/components/*.css',
    //   tasks: ['concat:css']
    // }
};