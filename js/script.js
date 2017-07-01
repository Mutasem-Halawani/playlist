/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var albums = new MusicAlbum();
albums.buildAlbum();

$("h3").lettering();

$('a#add-new-playlist').on('click',function(){
    var newPlaylistPopup = new NewPlaylistPopup('Add New Playlist');
    newPlaylistPopup.buildPopup();
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

//$.ajax({
//  url:  "C:/xampp/htdocs/playlist/public_html/playlist/api/playlist.php?type=playlist",
//  dataType: 'jsonp',
//  success: print
//});


//function print(data){
//    console.log(data);
//}