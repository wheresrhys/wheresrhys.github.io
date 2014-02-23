'use strict';

module.exports = function(grunt) {

    require('load-grunt-config')(grunt);
    // Default task.
    grunt.registerTask('buildProd', ['uglify', 'cssmin', 'concat:prod', 'htmlmin']);
    grunt.registerTask('buildDev', ['concat:dev']);
    grunt.registerTask('build', ['buildDev', 'buildProd']);
};