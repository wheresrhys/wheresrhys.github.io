module.exports = {
    style: {
        files: 'style/**/*.scss',
        tasks: ['sass:dev']
    },
    browserify: {
        files: 'src/**/*.js',
        tasks: ['browserify:dev']
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