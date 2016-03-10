(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["algorithm"] = factory();
	else
		root["algorithm"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _halfSearchHalfSearch = __webpack_require__(1);
	
	var _quickSortQuickSort = __webpack_require__(2);
	
	var _insertSortInsertSort = __webpack_require__(3);
	
	var Algorithm = { search: _halfSearchHalfSearch.search, searchByRecursion: _halfSearchHalfSearch.searchByRecursion, quickSort: _quickSortQuickSort.quickSort, insertSort: _insertSortInsertSort.insertSort };
	exports['default'] = Algorithm;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*二分查找算法适用于按正序排列好的数组，所以在使用该算法的时候，一定要保证源数组是已经排好序的哦。*/
	/**
	 * 非递归
	 * @param  {[type]}
	 * @param  {[type]}
	 * @param  {Function}
	 * @return {[type]}
	 */
	"use strict";
	
	exports.__esModule = true;
	exports.search = search;
	exports.searchByRecursion = searchByRecursion;
	
	function search(arr, dest) {
		if (arr && arr.length == 0) return -1;
		var l = arr.length - 1,
		    i = 0,
		    re = -1;
		while (i <= l) {
			var m = Math.floor((i + l) / 2);
			if (dest == arr[m]) {
				re = m;
			} else if (dest > arr[m]) {
				i = m + 1;
			} else {
				l = m - 1;
			}
			if (re >= 0) {
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
	
	function searchByRecursion(arr, dest, startIndex, endIndex) {
		if (arr && arr.length == 0) return -1;
		var l = endIndex || arr.length,
		    i = startIndex || 0,
		    re = -1,
		    m = Math.floor((i + l) / 2);
		if (arr[m] == dest) {
			re = m;
		} else if (dest > arr[m]) {
			i = m + 1;
		} else if (dest < arr[m]) {
			l = m - 1;
		}
		if (re >= 0) {
			return re;
		}
		searchByRecursion(arr, dest, i, l);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.quickSort = quickSort;
	
	function quickSort(arr) {
		if (arr.length <= 1) return arr;
		var benchmark = 0,
		    leftArr = [],
		    rightArr = [];
	
		for (var i = benchmark + 1, count = arr.length; i < count; i++) {
			if (arr[i] <= arr[benchmark]) {
				leftArr.push(arr[i]);
			} else {
				rightArr.push(arr[i]);
			}
		}
	
		return quickSort(leftArr).concat(arr[benchmark], quickSort(rightArr));
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * [insertSort 插入排序]
	 * @param  {[type]} arr [description]
	 * @return {[type]}     [description]
	 */
	"use strict";
	
	exports.__esModule = true;
	exports.insertSort = insertSort;
	
	function insertSort(arr) {
		var currValue = 0,
		    j = 0;
	
		for (var i = 1, count = arr.length; i < count; i++) {
			j = i;
			currValue = arr[i];
	
			while (j > 0 && currValue < arr[j - 1]) {
				arr[j] = arr[j - 1];
				j--;
			}
	
			arr[j] = currValue;
		}
		return arr;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=algorithm.js.map