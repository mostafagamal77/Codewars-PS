function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);


function find(haystack) {
  return haystack.map((ele,index) =>
    ele === "needle" ? `found the needle at position ${index}` : ""
  ).join('');
}

console.log(
  find(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);



function findNeedle2(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
