// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unnecessary whitespace.

// convert string to array
// reverse the array
// convert to string

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(reverse("thisatexpertanamI"));
console.log(reverse("hello world"));
