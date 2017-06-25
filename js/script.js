/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("h3").lettering();
 
$('i#delete-album').on('click',function(){
    var cancelPopup = new CancelPopup('Are you sure?');
    cancelPopup.buildPopup();
});


$('a#add-new-playlist').on('click',function(){
    var newPlaylistPopup = new NewPlaylistPopup('Add New Playlist');
    newPlaylistPopup.buildPopup();
});

//$('button#reset-feilds').on('click',function(){
//    $("form#add-new-playlist-form")[0].reset();
//});
