Template.setup.events({

    'click .back': function(e){
        e.preventDefault();
        history.back();
    },

    'click .play': function(e){
        e.preventDefault();
        Router.go('play');
    },



});

$('.ui.modal')
    .modal('show')
;
