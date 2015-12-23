var generators = require('yeoman-generator');
var path = require('path');

function camelCase(value) {
    return value[0].toLowerCase() + value.substring(1);
}

function titleCase(value) {
    return value[0].toUpperCase() + value.substring(1);
}

module.exports = generators.Base.extend({
    constructor: function () {
    generators.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });
  },
  writing: function() {
    
    this.fs.copyTpl(
      this.templatePath('component.js'),
      this.destinationPath(camelCase(this.name) + '.js'),
      { name: titleCase(this.name) }
    ); //<%= value %>
  }
});