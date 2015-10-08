Template.myPackage.onCreated(function(){
    var self = this;
    this.ver = new ReactiveVar(null);

    Meteor.call('getVersao', function(err, ver){
        self.ver.set(ver);
        console.log(ver);
    });
});

Template.myPackage.helpers({
    versao: function(){
        return Template.instance().ver.get();
    }
});
