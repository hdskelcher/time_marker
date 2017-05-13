Template.play.events({

    'click .goBack': function(e){
        e.preventDefault();
        history.back();
    },

    'click .edit': function(e){
        e.preventDefault();
        Router.go('setup');
    },

});