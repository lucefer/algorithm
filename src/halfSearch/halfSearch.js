/*二分查找算法适用于按正序排列好的数组，所以在使用该算法的时候，一定要保证源数组是已经排好序的哦。*/
/**
 * 非递归
 * @param  {[type]}
 * @param  {[type]}
 * @param  {Function}
 * @return {[type]}
 */
export function search(arr,dest){
	if(arr&&arr.length==0) return -1;
	let l=arr.length-1,i=0,re=-1;
	while(i<=l){
		let m=Math.floor((i+l)/2)
		if(dest==arr[m]){
			re=m
		}
		else if(dest>arr[m]){
			i=m+1
		}
		else{
			l=m-1
		}
		if(re>=0){
			break;
		}
	}

	return re;
}

/**
 * 递归
 * @param  {[type]}
 * @param  {[type]}
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 */
export function searchByRecursion(arr,dest,startIndex,endIndex){
	if(arr&&arr.length==0) return -1;
	let l=endIndex||arr.length,
	i=startIndex||0,
	re=-1,
	m=Math.floor((i+l)/2);
	if(arr[m]==dest){re=m;}
	else if(dest>arr[m]){
		i=m+1;
	}
	else if(dest<arr[m]){
		l=m-1;
	}
	if(re>=0){
		return re;
	}
	searchByRecursion(arr,dest,i,l);
}