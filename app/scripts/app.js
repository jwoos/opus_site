(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  app.appName = 'OPUS';

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function() {
    console.log('template bound');
  });

  window.addEventListener('polymer-ready', function(e) {
    app.login = function() {
      this.$.baseLogin.login();
    };
    app.logout = function() {
      this.$.baseLogin.logout();
    };

    app.loginDialog = function() {
      this.$.dialog1.toggle();
    };
    app.signupDialog = function() {
      this.$.dialog2.toggle();
    };
    app.signupDialogStudent = function() {
      this.$.dialog2.toggle();
      this.$.dialog3.toggle();
    };
    app.signupDialogBusiness = function() {
      this.$.dialog2.toggle();
      this.$.dialog4.toggle();
    };
    app.signupFinish = function() {
      if ($('#dialog2').hasClass('core-opened')) {
        this.$.dialog4.toggle();
      } else {
        this.$.dialog3.toggle();
      }
    };

    app.confirmBack = function() {
      var hasClass = document.getElementById('dialog3').className;
      if (hasClass = 'core-opened') {
        this.$.dialog3.toggle();
        window.resizeTo(100, 100);
        window.resizeTo(-100, -100);
        this.$.dialog2.toggle();
      } else {
        this.$.dialog4.toggle();
        window.resizeTo(100, 100);
        window.resizeTo(-100, -100);
        this.$.dialog2.toggle();
      }
      
    };

    app.clearConfirm2 = function () {
      var confirmValue = confirm('Are you sure you want to leave without signing up?');

      console.log('confirmValue is' + ' ' + confirmValue);

      if (confirmValue === true) {
        //add clearing fields
        this.$.dialog2.toggle();
      } else {
        //do something when confirmValue === false
      }
    };
    
    console.log('Polymer is ready');
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));