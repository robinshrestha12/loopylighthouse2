const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let output = '';

    //checking divisions and getting output accordingly
    if (i % multiples[0] === 0) {
      output += words[0];
    }
    if (i % multiples[1] === 0) {
      output += words[1];
    }
    //if if output is not empty i is divisible by one or both of the multiples and the words are printed.
    console.log(output === '' ? i : output);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);