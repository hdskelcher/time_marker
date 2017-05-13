Router.configure({
    layoutTemplate: 'layout',
    //loadingTemplate: 'loading',
    //notFoundTemplate: 'notFound',

    onAfterAction : function () {
        jQuery(window).scrollTop(0);
    }
});

Router.route('/', {name: 'home'});

Router.route('/home2', {name: 'home2'});

Router.route('/setup', {name: 'setup'});

Router.route('/play', {name: 'play'});

Router.route('/test', {name: 'test'});