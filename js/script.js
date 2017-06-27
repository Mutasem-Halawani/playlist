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

$('i#delete-album').on('click',function(){
    var cancelPopup = new CancelPopup('Are you sure?');
    cancelPopup.buildPopup();
});

$('i#edit-album').on('click',function(){
    var newPlaylistPopup = new NewPlaylistPopup('Add New Playlist');
    newPlaylistPopup.buildPopup();
});


$('i#play-album').on('click',function(){
    var musicPlayer = new MusicPlayer();
    musicPlayer.clearHTML();
    musicPlayer.buildMusicPlayer();
    history.pushState(null, null, 'play-music');
});


