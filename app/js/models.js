(function(m) {

  // mix your models into "m", here's a sample

  m.Animal = Backbone.Model.extend({
    defaults: {
      name: 'Animal'
    },

    parse: function (res){
      res.checked = false;
      return res;
    }
  });

})(APP.Models);
