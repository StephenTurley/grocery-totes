describe('directives', function() {
  var $compile;
  var $scope;
  var $httpBackend;
  
 
  beforeEach(module('app'));
  
  beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_){
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;
  }));
  
  describe('item-form', function(){
    var element;
    var elementScope;
    
    beforeEach(function(){
      element = $compile('<item-form></item-form>')($scope);
      $scope.$digest();
      elementScope = element.isolateScope();
    });
     
	  it('render the template', function() {  
	    expect(element.html()).toContain('<form class="item-form');
	  });
    
    it('should call $scope.addItem when add button is clicked', function(){
      spyOn(elementScope, 'addItem');
      
      element.find('input[value="add"]').click();
      
      $scope.$digest();
      
      expect(elementScope.addItem).toHaveBeenCalled();
    });
    
    it('should set item.name to value of iName input field', function(){
      spyOn(elementScope, 'addItem');
      
      element.find('input[name="iName"]').val('foo').trigger('input');
     
      element.find('input[value="add"]').submit();
      
      $scope.$digest();
      expect(elementScope.name).toBe('foo');
    });
    
  });
});
