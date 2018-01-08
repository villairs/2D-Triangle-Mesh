window.onload = function(){

    var fileSelected = document.getElementById("txtfiletoread");
    fileSelected.addEventListener('change',function(e){
    
        var requiredFileExtension =    /text.*/;
        var file = fileSelected.files[0];

        if(file.type.match(requiredFileExtension)){
            var reader = new FileReader();
            reader.onload = function (e){
 
            var fileContents = document.getElementById("filecontents");
            fileContents.innerText = reader.result;
            }
            reader.readAsText(file);
        }

    },false)

}


