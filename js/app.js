$(function() {
 
    //Set up instafeed
    var feed = new Instafeed({
        target: 'instafeed',
        get: 'user',
        userId: 20495222,
        accessToken: '20495222.467ede5.c479a663a8f84795bb316334305ddfe2',
        useHttp: true,
        sortBy: 'random', 
        links: true,
        limit: 60,
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();
 
});

