angular.module('starter.services', [])

.factory('Species', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var species = [];

    return {
      all: function() {
        return species;
      },
      remove: function(specie) {
        species.splice(species.indexOf(specie), 1);
      },
      set: function(s){
        species = s;
      },
      get: function(specieID) {
        for (var i = 0; i < species.length; i++) {
          if (species[i].id === parseInt(specieID)) {
            return species[i];
          }
        }
        return null;
      }
  };
});