module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Convert LESS into CSS:
    less: {
      options: {
        concat: false
      },
      // Process Android LESS file into CSS:
      grid: {
        files: { '<%= pkg.projectPath %>chipper.css': 'src/chipper.less'}
      }
    },
    // Concat JavaScript files and Examples:
    concat: {
      grid: {
        options: {
          banner: '/*\nChipper.css\nCopyright <%= grunt.template.today("yyyy") %> Robert Biggs\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        src: ['<%= pkg.projectPath %>chipper.css'],
        dest: '<%= pkg.projectPath %>chipper.css'
      },
      example: {
        options: { },
        src: ['<%= pkg.projectPath %>src/grids.html'],
        dest: '<%= pkg.projectPath %>grids.html'
      }
    },
    cssmin: {
      grid: {
        options: {
          banner: '/*\nChipper.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        files: {'<%= pkg.projectPath %>chipper.min.css': '<%= pkg.projectPath %>chipper.css'}
      }
    },
    
    // Watch files for changes:
    watch: {
      css: {
        options: {
          spawn: false
        },
        files: ['src/*.less'],
        tasks: ['less','concat:grid','cssmin']
      }
    }
  });

  // Tasks:
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default build:
  grunt.registerTask('default', [
    'less',
    'concat',
    'cssmin'
  ]);
};