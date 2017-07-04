/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
//            $('h3.album-title').lettering();
            $('h3.album-title').circleType({radius: 200});
//            $('h3.album-title').circleType({fitText:true, radius: 200});
//            $('h3.album-title').circleType();
//            $('h3.album-title').circleType({fluid:true});;
        });

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
//    url : "api/playlist.php?&type=songs&id=15",
//    method:'GET',
//    success: function(data){
//    console.log(data);
//    console.log(data.data.songs);
//    var json = data.data.songs;
////    var data = eval('(' + json + ')');
////    console.log(typeof(json));
////    console.log(typeof(data));
//    console.log(json[0]);
////    console.log(data);
////    console.log(data[0].name);
//    }
//});

