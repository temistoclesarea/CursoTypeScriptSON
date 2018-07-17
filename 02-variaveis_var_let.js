function showWithVar() {
    var text = 'temistocles area';
    var text = 'texto';
    if (true) {
        var text = 'texto';
    }
    console.log(text);
}
function showWithLet() {
    var text = 'temistocles area';
    text = "temistocles a";
    if (true) {
        var text_1 = 'texto';
    }
    console.log(text);
}
showWithVar();
showWithLet();
