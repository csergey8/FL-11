'use strict';

const formatTime = num => {
 return `${parseInt(num / 60 / 24)} days(s) ${parseInt(num / 60 % 24)} hours(s) ${parseInt(num % 60)} minutes`;
}

formatTime(120);
formatTime(59);
formatTime(3601);