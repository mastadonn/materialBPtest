Template.header.rendered = function ( ) {
  this.$('.button-collapse').sideNav({
    menuWidth: 200, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });

this.$('.profile-button-collapse').sideNav({
  menuWidth: 200, // Default is 240
  edge: 'right', // Choose the horizontal origin
  closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

};
