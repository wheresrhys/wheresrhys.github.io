/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
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
      },
      css: {
         src: 'style/components/*.css',
        dest: 'style/main.css'
      }
    },
    min: {
      def: {
        src: 'src/main.js',
        dest: 'dist/main.js'
      }
    },
    cssmin: {
      def: {
        src: 'style/main.css',
        dest: 'dist/main.css'
      }
    },
    watch: {
      templates: {
        files: 'templates/**/*.html',
        tasks: ['concat:dev']
      },
      styles: {
        files: 'style/components/*.css',
        tasks: ['concat:css']
      }
    },


    htmlcompressor: {
      compile: {
        files: {
          'dest/index.html': 'dest/index.html'
        },
        options: {
          type: 'html',
          preserveServerScript: true
        }
      }
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });
  grunt.loadNpmTasks('grunt-css');
  //grunt.loadNpmTasks('grunt-htmlcompressor');
  // Default task.
  grunt.registerTask('buildProd', 'min cssmin:def concat:prod');// htmlcompressor');
  grunt.registerTask('buildDev', 'concat:dev');
  grunt.registerTask('build', 'buildDev buildProd');
};

// module.exports = function (grunt) {
  
//   'use strict';
  
//   grunt.loadNpmTasks('grunt-shell');
//   grunt.loadNpmTasks('grunt-contrib-copy');
//   grunt.loadNpmTasks('grunt-css');
//   grunt.loadNpmTasks('grunt-bump');
//   grunt.loadNpmTasks('grunt-linter');
//   grunt.loadNpmTasks('grunt-contrib-requirejs');
  
//   grunt.initConfig({
//     pkg: '<json:package.json>',
//     lint: [
//         'grunt.js',
//         'src/*.js'
//     ],
//     csslint: {
//       base_theme: {
//         src: 'style/*.css',
//         rules: {
//           'import': 2,
//           'important': 2,
//           'underscore-property-hack': 2,
//           'display-property-grouping': 2,
//           'duplicate-properties': 2,
//           'empty-rules': 2,
//           'vendor-prefix': 2,
//           'star-property-hack': 2,
//           'regex-selectors': 2,
//           'overqualified-elements': 2,
//           'shorthand': 2,
//           'duplicate-background-images': 2,
//           'zero-units': 2,
//           'unqualified-attributes': false,
//           'adjoining-classes': false,
//           'box-sizing': false,
//           'compatible-vendor-prefixes': false,
//           'gradients': false,
//           'text-indent': false,
//           'fallback-colors': false,
//           'font-faces': false,
//           'outline-none': false
//         }
//       }
//     },
//     linter: {
//       files: [
//         'src/*.js'
//       ],
//       directives: {
//         'bitwise': true,
//         'camelcase': true,
//         'curly': true,
//         'eqeqeq': true,
//         'forin': true,
//         'immed': true,
//         'indent': 4,
//         'latedef': true,
//         'newcap': true,
//         'noarg': true,
//         'noempty': true,
//         'nonew': true,
//         'plusplus': false,
//         'quotmark': true,
//         'regexp': true,
//         'undef': true,
//         'unused': false,
//         'strict': false,
//         'trailing': true,
//         'boss': true,
//         'debug': true,
//         'eqnull': true,
//         'es5': true,
//         'esnext': true,
//         'evil': true,
//         'funcscope': true,
//         'globalstrict': true,
//         'iterator': true,
//         'laxbreak': true,
//         'proto': true,
//         'scripturl': true,
//         'supernew': true,
//         'validthis': true,
//         'browser': true,
//         'jquery': true,
//         'node': true,
//         'laxcomma': true,
//         'predef': []
//       },
//       globals: {
//         'exports': true,
//         'zepto': true,
//         'google': true,
//         'MarkerClusterer': true,
//         'MarkerWithLabel': true,
//         'define': true,
//         'require': true,
//         'Backbone': true,
//         '_': true
//       },
//       options: {
//         junit: 'out/junit.xml',
//         log: 'out/lint.log',
//         errorsOnly: true
//       }
//     },
//     shell: {
//       updateEnvironment: {
//         command: 'svn update package.json && npm install -d && svn update ../'
//       },
//       savePackageToSVN: {
//         command: 'svn commit package.json -m "Dev server build completed"'
//       },
//       removeBuildFolder: {
//         command: 'rm -rf build'
//       },
//       emptyDev: {
//         command: 'rm -rf ../../dev && mkdir ../../dev'
//       },
//       emptyQa: {
//         command: 'rm -rf ../../qa && mkdir ../../qa'
//       },
//       emptyStage: {
//         command: 'rm -rf ../../stage && mkdir ../../stage'
//       },
//       copyBuildToDev: {
//         command: 'cp -r build*/* ../../dev'
//       },
//       copyDevToQA: {
//         command: 'cp -r ../../dev/* ../../qa'
//       },
//       copyQAToStage: {
//         command: 'cp -r ../../qa/* ../../stage'
//       },
//       _options: {
//         stdout: true
//       }
//     },
//     copy: {
//       createBuild: {
//         files: {
//           'build/': '../id_root/**'
//         }
//       }
//     }
//   });

//   grunt.registerTask('start', 'shell:updateEnvironment', function() {
//     grunt.task.run('csslint linter buildDev');
//   });
  
//   grunt.registerTask('buildDev', 'shell:savePackageToSVN', function() {
//     grunt.task.run('shell:removeBuildFolder copy:createBuild shell:copyBuildToDev');
//   });

//   grunt.registerTask('buildProd', 'shell:savePackageToSVN', function() {
//     grunt.task.run('shell:removeBuildFolder copy:createBuild shell:copyBuildToDev');
//   });

//   grunt.registerTask('production', 'shell:updateEnvironment', function() {
//     //grunt.task.run('csslint linter requirejs shell:stylus');
//     grunt.task.run('requirejs shell:stylus');
//   });

//   grunt.registerTask('updateqa', 'shell:emptyQA shell:copyDevToQA');
  
//   grunt.registerTask('updatestage', 'shell:emptyStage shell:copyQAToStage');

// };
