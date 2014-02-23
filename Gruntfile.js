'use strict';

module.exports = function(grunt) {

    require('load-grunt-config')(grunt);
    // Default task.
    grunt.registerTask('buildProd', ['sass:dist', 'uglify', 'concat:prod', 'htmlmin']);
    grunt.registerTask('buildDev', ['sass:dev', 'concat:dev']);
    grunt.registerTask('default', ['buildDev', 'buildProd']);
};