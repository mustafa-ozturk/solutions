// https://www.codewars.com/kata/52685f7382004e774f0001f7
function humanReadable(seconds) {
    if(seconds >= 359999) {
      return '99:59:59';
    }
    let ss = 0;
    let mm = 0;
    let hh = 0;
    if(seconds / 3600 >= 1 && hh < 99) {
      hh = Math.floor(seconds / 3600);
      seconds -= hh * 3600;
    } 
    if(seconds / 60 >= 1 && mm < 59) {
      mm = Math.floor(seconds / 60);
      seconds -= mm * 60;
    } 
    if(ss < 59) {
      ss = seconds;
      seconds -= ss;
    }
    if(ss < 9) {
      ss = `0${ss}`;
    }
    if(mm < 9) {
      mm = `0${mm}`;
    }
    if(hh < 9) {
      hh = `0${hh}`;
    }
    return `${hh}:${mm}:${ss}`
}