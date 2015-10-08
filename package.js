Package.describe({
  name: 'netrics:my-package',
  version: 'v2.1.0',
  // Brief, one-line summary of the package.
  summary: 'pacote de teste',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/luissombra/my-package',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use([
      'ecmascript'
  ]);

  api.use([
    'templating',
    'reactive-var'
  ],['client']);

  api.addFiles([
    'lib/templates/my-package.html',
    'lib/templates/my-package.js'
  ],['client']);

  api.addFiles([
    'lib/server/my-package.js'
  ],['server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('netrics:my-package');
});
