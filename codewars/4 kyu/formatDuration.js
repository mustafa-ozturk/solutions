// https://www.codewars.com/kata/52742f58faf5485cae000b9a
function formatDuration (seconds) {
    let ss = 0;
    let mm = 0;
    let hh = 0;
    let days = 0; 
    let years = 0;
  
    if(seconds / 31536000 >= 1) {
      years = Math.floor(seconds / 31536000);
      seconds -= years * 31536000;
    }
    if(seconds / 86400 >= 1) {
      days = Math.floor(seconds / 86400);
      seconds -= days * 86400;
    }
    if(seconds / 3600 >= 1) {
      hh = Math.floor(seconds / 3600);
        seconds -= hh * 3600
    } 
    if(seconds / 60 >= 1) {
      mm = Math.floor(seconds / 60);
        seconds -= mm * 60;
    } 
    if(ss < 59) {
      ss = seconds;
      seconds -= ss;
    } 
    
    if(years > 0 && days > 0 && hh > 0 && mm > 0 && ss > 0) {
      return `${years} year${years > 1 ? 's' : ''}, ${days} day${days > 1 ? 's' : ''}, ${hh} hour${hh > 1 ? 's' : ''}, ${mm} minute${mm > 1 ? 's' : ''} and ${ss} second${ss > 1 ? 's' : ''}`
    } 
    if (years > 0 && days > 0 && hh > 0 && mm > 0 && ss === 0) {
      return `${years} year${years > 1 ? 's' : ''}, ${days} day${days > 1 ? 's' : ''}, ${hh} hour${hh > 1 ? 's' : ''} and ${mm} minute${mm > 1 ? 's' : ''}`
    } 
    
    if(days > 0 && hh > 0 && mm > 0 && ss > 0) {
      return `${days} day${days > 1 ? 's' : ''}, ${hh} hour${hh > 1 ? 's' : ''}, ${mm} minute${mm > 1 ? 's' : ''} and ${ss} second${ss > 1 ? 's' : ''}`
    } 
    if(days > 0 && hh === 0 && mm > 0 && ss > 0) {
      return `${days} day${days > 1 ? 's' : ''}, ${mm} minute${mm > 1 ? 's' : ''} and ${ss} second${ss > 1 ? 's' : ''}`
    } 
    if(days > 0 && hh > 0 && mm === 0 && ss > 0) {
      return `${days} day${days > 1 ? 's' : ''}, ${hh} hour${hh > 1 ? 's' : ''} and ${ss} second${ss > 1 ? 's' : ''}`
    } 
    if(days > 0 && hh === 0 && mm === 0 && ss > 0) {
      return `${days} day${days > 1 ? 's' : ''} and ${ss} second${ss > 1 ? 's' : ''}`
    } 
    if(days > 0 && hh > 0 && mm > 0 && ss === 0) {
      return `${days} day${days > 1 ? 's' : ''}, ${hh} hour${hh > 1 ? 's' : ''} and ${mm} minute${mm > 1 ? 's' : ''}`
    } 
    
    if(hh > 0 && mm > 0 && ss > 0) {
      return `${hh} hour${hh > 1 ? 's' : ''}, ${mm} minute${mm > 1 ? 's' : ''} and ${ss} second${ss > 1 ? 's' : ''}`
    } 
    if (hh > 0 && mm === 0 && ss === 0) {
      return `${hh} hour${hh > 1 ? 's' : ''}`
    } 
    
    if (mm > 0 && ss > 0) {
      return `${mm} minute${mm > 1 ? 's' : ''} and ${ss} second${ss > 1 ? 's' : ''}`
    } 
    if (mm > 0 && ss === 0) {
      return `${mm} minute${mm > 1 ? 's' : ''}`
    } 
    
    if (ss > 0) {
      return `${ss} second${ss > 1 ? 's' : ''}`
    }
    return 'now';
  }