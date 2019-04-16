function processData(input) {
    //Enter your code here
    var input = input.split('\n');

    for (var i = 1; i < input.length; i++) {
        var split_Word = input[i].split('');
        var even = '';
        var odd = '';

        for (var x = 0; x < split_Word.length; x++) {
            if (x % 2 == 0) {
                var even = even + split_Word[x];
            } 
            else {
                var odd = odd + split_Word[x];
            }
        }
        console.log(even + ' ' + odd);
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
