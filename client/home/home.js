//Template.home.OnRendered = function() {
//
//};
//
//
//
//Template.home.helpers({
//
//    showName: function() {
//        return 'Austin Nevins';
//    }
//
//});
//
//

Template.home.events({

    'click .create': function(e){
        e.preventDefault();
        Router.go('setup');
    },

});

