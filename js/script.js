/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $('h3.album-title').circleType({radius: 200});
});

$('a#add-new-playlist').on('click',function(){
    var newPlaylistPopup = new NewPlaylistPopup('Add New Playlist');
    newPlaylistPopup.buildPopup();
});


$.get( "api/playlist.php?type=playlist", function(data) {
    var albums = new MusicAlbum(data);
    albums.buildAlbum(data);
//    console.log(data);
});
