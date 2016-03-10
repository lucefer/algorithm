/**
 * [insertSort 插入排序]
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
export function insertSort(arr){
	var currValue=0,j=0;

	for(var i=1,count=arr.length;i<count;i++){
		j=i
		currValue=arr[i]

		while(j>0&&currValue<arr[j-1]){
			arr[j]=arr[j-1]
			j--
		}

		arr[j]=currValue;
	}
	return arr;
}