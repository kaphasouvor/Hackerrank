function processData(input) {
    // Enter your code here 
    input = input.split('\n');
    var name = parseInt(input[0]);
    var phoneBook = []; 

    // Adding values to dictionary.
    // In phoneBook dictionary are: 
    // sam 99912222, tom 11122222 and harry 12299933
    for (var i = 0; i < name; i++) {
        var newInput = input[i + 1];
        newInput = newInput.split(' ');
        phoneBook[newInput[0]] = newInput[1];
    } 

    // Checking to see if values are in dictionary. 
    // Print values if found. If not, print "not found".
    for (i = (name + 1); i < input.length; i++) {
        if (phoneBook[input[i]]) {
            console.log(input[i] + '=' + phoneBook[input[i]]);
        } else {
            console.log('Not found');
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
