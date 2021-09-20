// https://www.codewars.com/kata/5cb05eee03c3ff002153d4ef
function getSectionIdFromScroll(scrollY,sizes){
    let count = 0;
     for (let i = 0; i < sizes.length; i++) {
       if(scrollY >= sizes[i]) {
         count += 1;
         scrollY -= sizes[i]
       } else {
         break;
       }
     }
    return count >= sizes.length ? -1 : count;
}