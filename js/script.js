/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("h3").lettering();

$('a#add-new-playlist').on('click',function(){
    var newPlaylistPopup = new NewPlaylistPopup('Add New Playlist');
    newPlaylistPopup.buildPopup();
});

$.get( "api/playlist.php?type=playlist", function(data) {
    var albums = new MusicAlbum(data);
    albums.buildAlbum(data);
    console.log(data);
});


//$.ajax({
//    url : "C:/xampp\htdocs\playlist\public_html\playlist\html\header.html",
//    method : 'GET',
//    crossDomain: true,
////    dataType: 'jsonp',
//    success: print
//});
//
//
