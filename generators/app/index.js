'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the kickass ' + chalk.red('generator-lnv-mobile') + ' generator!'
    ));

    var prompts = [{
        type: 'input',
        name: 'projectName',
        message: '项目名:',
        default: 'mobile-base'
      }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    var pname = this.props.projectName;

    this.bulkDirectory('gulp', this.props.projectName + '/gulp');
    this.bulkDirectory('src', this.props.projectName + '/src');
    this.bulkDirectory('docs', this.props.projectName + '/docs');


    this.fs.copy(
      this.templatePath('ChangeLog.md'),
      this.destinationPath(pname + '/ChangeLog.md')
    );

    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath(pname + '/gulpfile.js')
    );

    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath(pname + '/package.json')
    );

    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath(pname + '/README.md')
    );

    this.fs.copy(
      this.templatePath('.eslintrc'),
      this.destinationPath(pname + '/.eslintrc')
    );

    this.fs.copy(
      this.templatePath('config.json'),
      this.destinationPath(pname + '/config.json')
    );

  },

  install: function () {
    this.log(chalk.green('目录已建立, 请 `npm install` 安装依赖, 然后执行 `gulp` 运行`'));
  }
});
