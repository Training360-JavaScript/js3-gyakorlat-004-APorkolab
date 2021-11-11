'use strict';
const checkVisa = (cardNumber = 0) => {
	if (cardNumber.toString.length !== 16 && !cardNumber.toString.indexOf(0) === 5 || !cardNumber.toString.startsWith(54)) {
		return false;
	} else {
		return true;
	}
};



export default checkVisa;