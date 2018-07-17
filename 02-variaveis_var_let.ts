function showWithVar() {
    var text = 'temistocles area';
    var text = 'texto';
    if(true) {
        var text = 'texto';
    }
    console.log(text);
}

function showWithLet() {
    let text = 'temistocles area';
    text = "temistocles a";
    if(true) {
        let text = 'texto';
    }
    console.log(text);
}

showWithVar();
showWithLet();