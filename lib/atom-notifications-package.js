'use babel'

export default {
  name: 'notifications',

  isEnabled() {
    var isDisabled = atom.packages.isPackageDisabled(this.name);
    var isBundled = atom.packages.isBundledPackage(this.name);

    return isBundled && !isDisabled;
  },

  disable() {
    atom.packages.disablePackage(this.name);
    atom.restartApplication();
  },

  requestDisable() {
    atom.notifications.addWarning('Learn IDE: incorrect notification package enabled', {
			detail: `In order for the Learn IDE to work properly, please disable Atom's core "${this.name}" package. Please do not report any errors until you have disabled it.`,
			dismissable: true,
			description: 'Click below to disable it and restart the application. This can be undone in your preferences at any time.',
			buttons: [{text: 'Disable & Restart', onDidClick: () => this.disable()} ]
    });
  }
};

