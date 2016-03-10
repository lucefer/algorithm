define(['algorithm'], function(algorithm) {
	console.log(algorithm)
	describe("my great and huge math lib", function () {  
      it("should perfectly complete complex addition", function () {  
      	var a=[1,3,5,2,3,6,4]
        var result = algorithm.quickSort(a);  
        expect(result).toEqual([1,2,3,3,4,5,6]);  
      }); 
    });  
})