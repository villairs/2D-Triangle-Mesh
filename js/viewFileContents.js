function readInputFile(file){
    var arr = []
    var inputFile = new File(file);
    inputFile.open("r");

    var looplen = inputFile.readln(); //dont really need this, just need to get rid of the first line

    while(!inputFile.eof){
        arr.push(inputFile.readln());
    }
}

document.getElementById("filecontents").innerHTML = readInputFile(document.getElementById(txtfiletoread));
