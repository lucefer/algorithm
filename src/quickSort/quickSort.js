export function quickSort(arr){
	if(arr.length<=1)
		return arr
	 var benchmark=0,leftArr=[],rightArr=[];

	 for(var i=benchmark+1,count=arr.length;i<count;i++){
	 	if(arr[i]<=arr[benchmark]){
	 		leftArr.push(arr[i])
	 	}else{
	 		rightArr.push(arr[i])
	 	}
	 }

	 return quickSort(leftArr).concat(arr[benchmark],quickSort(rightArr));

}
