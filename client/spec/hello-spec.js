describe(".helloText", function(){
  When(function(){ this.result = helloText(); });
  Then(function(){ expect(this.result).toEqual("Welcome to grocery-totes!"); });
});