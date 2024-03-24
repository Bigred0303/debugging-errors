let original = "";
const reverseList = function(original) {

  return original.split('').reverse('').join('');
}

var input = process.argv[2];

if (input)
  console.log(reverseList(input));
