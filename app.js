(function() {

  var app = angular.module('itemList', []);

  app.controller('ListController', function(){
    this.products = items;
  });

  app.controller('ItemController', function(){
    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.controller('PostController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  var items = [
    {
      reviews: [{}]
    }
  ];

})();


 // -------search-----
  var expectItemTitles = function (expectedTitles, key) {
  element.all(by.repeater(key + ' in items').column(key + '.title')).then(function (arr) {
    arr.forEach(function (wd, i) {
      expect(wd.getText()).toMatch(expectedTitles[i]);
    });
  });
};

it('should search across all fields when filtering with a string', function () {
  var searchText = element(by.model('searchText'));
  searchText.clear();

});
