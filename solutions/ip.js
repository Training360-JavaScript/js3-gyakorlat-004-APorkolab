'use strict';
const checkIP = (ipAddress = 0) => {
	return (ipAddress.toString().match(/\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/ig) ? true : false)
};
export default checkIP;