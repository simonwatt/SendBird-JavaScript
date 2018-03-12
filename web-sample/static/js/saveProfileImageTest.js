console.log('hi');

function getFileForTest(){
    var file = null;	
    var fileObj = $('#profile_file_input');
    var fileVal = fileObj.val();

    if(fileVal== null || fileVal == 'undefined' || fileVal.trim().length == 0){
        alert('no file found');
        return null;
    }
    else
    {
        file = fileObj[0].files[0]
    }  

    return file;
}
$('#btnSaveProfileImageAsFile').click(function() {

    console.log(sb);

    var file = getFileForTest();

    sb.updateCurrentUserInfoWithProfileImage(sb.currentUser.nickname, file, function(response, error) {  
        
        if(error){
            alert('there was an error');
            return;
        }
    
        alert('image saved to: ' + response.profileUrl);
    });  
});

$('#btnSaveProfileImageAsBlob').click(function() {

    console.log(sb);

    var file = getFileForTest();   

    var reader = new FileReader();
    reader.onloadend = function(e) {
        var blob = new Blob([ this.result ], { type: "image/jpeg" } );

        sb.updateCurrentUserInfoWithProfileImage(sb.currentUser.nickname, blob, function(response, error) {  
           
            if(error){
                alert('there was an error');
                return;
            }
        
            alert('image saved to: ' + response.profileUrl);
        });
    };

    reader.readAsArrayBuffer(file);   

});
    
    