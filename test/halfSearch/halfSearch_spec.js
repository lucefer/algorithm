define(['algorithm'], function(algorithm) {
	console.log(algorithm)
	describe("my great and huge math lib", function () {  
      it("should perfectly complete complex addition", function () {  
      	var a=[1,2,3,4,5,6]
        var result = algorithm.search(a,4);  
		
        expect(result).toEqual(3);  
		
      }); 
	  it("should perfectly complete complex addition", function () {  
      	var a=[1,2,3,4,5,6]
		var result=algorithm.searchByRecursion(a,4);
		expect(result).toEqual(3);
      });  
    });  
})