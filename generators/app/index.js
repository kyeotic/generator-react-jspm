var generators = require('yeoman-generator');
var path = require('path');

module.exports = generators.Base.extend({
    constructor: function () {
    generators.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });

    // Next, add your custom code
    //this.option('coffee'); // This method adds support for a `--coffee` flag
  },
  writing: function() {
    this.log(path.join(this.templatePath(), '/**/*'), this.sourceRoot(), this.destinationRoot())
    
    this.fs.copyTpl(
      path.join(this.templatePath(), '/**/*'),
      this.destinationRoot(),
      { appName: this.name }
    ); //<%= value %>
  },
  install: function () {
    this.npmInstall();
    this.spawnCommand('jspm', ['install']);
  }
});