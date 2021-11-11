'use strict';
const checkVisa = (cardNumber = 0) => {
	return (cardNumber.toString().length === 16 && cardNumber.toString().charAt(0) === '4') ? true : false
};

export default checkVisa;