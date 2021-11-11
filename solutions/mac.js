'use strict';
const checkMac = (macAddress = 0) => {
	return (macAddress.toString().match(/(([0-9A-Fa-f]{2}[-:]){5}[0-9A-Fa-f]{2})|(([0-9A-Fa-f]{4}\.){2}[0-9A-Fa-f]{4})/gi) ? true : false)
};
export default checkMac;