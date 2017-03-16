'use strict';
module.exports = (function() {
	var vault = {};
	var password = {};

	function setValue(key,value){
  		vault = value;
  		password = key;
  	}

	function getValue(key){
  		if (key === password){
  			return vault;
  		} else {
  			return null;
  		}
	}
	
	return {
		setValue,
		getValue,
	};
});