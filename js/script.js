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
});

$('input#search-playlists').on('keyup',function(){
    var search = this.value.toUpperCase();
    if (search === ''){
        for (let i=0;i<$('section.album-cover h3').length;i++){
            $('section.album-cover')[i].classList.remove('hideAlbum');
            $('section.album-cover')[i].classList.add('showAlbum');
        }
    }
    else {
        for (let i=0;i<$('section.album-cover h3').length;i++){
            var albumName = $('section.album-cover h3')[i].textContent.toUpperCase();
            if (albumName.indexOf(search) > -1){
              $('section.album-cover')[i].classList.remove('hideAlbum');
              $('section.album-cover')[i].classList.add('showAlbum');
            }
            else {
              $('section.album-cover')[i].classList.remove('showAlbum');
              $('section.album-cover')[i].classList.add('hideAlbum');
            }
        }
    }
});
