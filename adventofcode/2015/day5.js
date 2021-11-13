let input = `qjhvhtzxzqqjkmpb
xxyxx
uurcxstgmygtbstg
ieodomkazucvgmuy
`;

// nice =
// contains >= 3 vowels (aeiou)
// contains at least one double letter (ll, xx, dd)
// it does not contain 'ab' 'cd' 'pq' 'xy'

const niceOrNot = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const naughtyStrings = ['ab', 'cd', 'pq', 'xy'];

  let vowelCount = 0;
  let doubleLetterCount = 0;

  let lastLetter = '';

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      vowelCount++;
    }
    if (string[i] === string[i + 1]) {
      doubleLetterCount++;
    }
    if (naughtyStrings.includes(lastLetter + string[i])) {
      return 0;
    }
    lastLetter = string[i];
  }

  if (vowelCount >= 3 && doubleLetterCount >= 1) {
    return 1;
  } else {
    return 0;
  }
};

// contains a pair of any two letters that appears twice without overlap
// xyxy === nice
// aaa === bad (it overlaps);

const niceOrNot2 = (string) => {
  let twoPairsTwiceNoOverlap = 0;
  let repeatsWithOneInbetween = 0;
  let pairs = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 2]) {
      repeatsWithOneInbetween++;
    }
    if (
      string[i] === string[i + 1] &&
      string[i] === string[i + 2] &&
      string[i] !== string[i + 3]
    ) {
      continue;
    } else {
      pairs.push(string[i] + string[i + 1]);
    }
  }

  for (let i = 0; i < pairs.length; i++) {
    if (pairs.filter((p) => p === pairs[i]).length >= 2) {
      twoPairsTwiceNoOverlap++;
      pairs.splice(pairs[i], 1);
    }
  }
  if (twoPairsTwiceNoOverlap >= 1 && repeatsWithOneInbetween >= 1) {
    return 1;
  } else {
    return 0;
  }
};

const niceWordCount = (input) => {
  const strings = input.split('\n');
  let niceWordCount = 0;
  for (let i = 0; i < strings.length; i++) {
    niceWordCount += niceOrNot2(strings[i]);
  }
  return niceWordCount;
};

console.log(niceWordCount(input));
