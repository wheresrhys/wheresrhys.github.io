/*global module:false*/

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    clean: {
      files: ['dist']
    },

    concat: {
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
    },

    uglify: {
      dist: {
        src: 'src/main.js',
        dest: 'dist/main.js'
      }
    },
    
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      templates: {
        files: 'templates/**/*.html',
        tasks: ['concat:dev']
      },
      // styluses: {
      //   files: 'style/components/*.styl',
      //   tasks: ['shell:stylus']
      // },
      // styles: {
      //   files: 'style/components/*.css',
      //   tasks: ['concat:css']
      // }
    },
    shell: {
      // updateEnvironment: {
      //   command: 'svn update package.json && npm install -d && svn update ../'
      // },
      // savePackageToSVN: {
      //   command: 'svn commit package.json -m "Dev server build completed"'
      // },
      // removeBuildFolder: {
      //   command: 'rm -rf build'
      // },
      // emptyDev: {
      //   command: 'rm -rf ../../dev && mkdir ../../dev'
      // },
      // emptyQa: {
      //   command: 'rm -rf ../../qa && mkdir ../../qa'
      // },
      // emptyStage: {
      //   command: 'rm -rf ../../stage && mkdir ../../stage'
      // },
      // copyBuildToDev: {
      //   command: 'cp -r build*/* ../../dev'
      // },
      // copyDevToQA: {
      //   command: 'cp -r ../../dev/* ../../qa'
      // },
      // copyQAToStage: {
      //   command: 'cp -r ../../qa/* ../../stage'
      // },
      stylus: {
        command: 'stylus package/assets/css/master.styl -u ./node_modules/nib/lib/nib -c'
      }
    },
    htmlmin: {
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      min: {
        files: {
          'dist/index.html': 'dist/index.html'
        }
      }
    },
    cssmin: {
      min: {
        files: {
          'dist/main.css': ['style/components/*.css']
        }
      }
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  // Default task.
  grunt.registerTask('buildProd', ['uglify', 'cssmin', 'concat:prod', 'htmlmin']);
  grunt.registerTask('buildDev', ['concat:dev']);
  grunt.registerTask('build', ['buildDev', 'buildProd']);

};



