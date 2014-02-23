'use strict';

module.exports = function(grunt) {

    require('load-grunt-config')(grunt);
    // Default task.
    grunt.registerTask('buildProd', ['sass:dist', 'uglify', 'htmlmin']);
    grunt.registerTask('buildDev', ['sass:dev', 'browserify:dev']);
    grunt.registerTask('default', ['buildDev']);
};