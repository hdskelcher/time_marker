
Template.home2.events({

    'click .create': function(e){
        e.preventDefault();
        Router.go('setup');
    },


    'click .workout': function(e){
        e.preventDefault();
        Router.go('setup');
    },

});