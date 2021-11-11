'use strict';
import checkVisa from './visa';
import checkIP from './ip';
import checkMac from './mac';

const checker = (macAddress = 0) => {
	rules: {
		checkVisa(),
		checkIP(),
		checkMac()
	};
	validate(string, checkType) {
		if (checkType === 'ip') {
			return checkIP(string);
		} else if (checkType === 'visa') {
			return checkVisa(string);
		} else if (checkType === 'mac') {
			return checkMac(string);
		}
	}

}
export default checker;