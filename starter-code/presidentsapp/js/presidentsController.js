angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http) {
  // stores Presidents
  this.all = [];
  // = function addPresident which is where we'll get data from the form
  this.addPresident = addPresident;
  this.newPresident = {};
  this.getPresidents = getPresidents;
  var self = this;
  function addPresident(){
    this.all.push(this.newPresident);
    this.newPresident = {};
  }

  function getPresidents() {
    $http
      .get('http://localhost:3000/presidents')
      .then(function(response) {
        self.all = response.data.presidents;
      });
  };
  getPresidents();

  function addPresident() {
    $http
      .post('http://localhost:3000/presidents', self.newPresident)
      .then(function(response) {
        getPresidents();
      });
    self.newPresident = {};
  }

}
