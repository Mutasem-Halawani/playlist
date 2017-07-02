/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class MusicAlbum{
    
    constructor(data){
        this.data = data;
    }
    
    buildAlbum(data){
      
        var albumContainer = $('<main>',{
           'class' : 'all-albums'
        });
        albumContainer.appendTo('body');
        
        for(let i=0;i<data.data.length;i++){
//        console.log(data);
//        console.log(data.data.length);
//        console.log(data.data[0]);
        var album = $('<section>',{
            'data-album-id' : data.data[i].id,
           'class' : 'album album-cover'
        });
//        console.log(data.data[i].image);
        album.css('background-image', 'url(' + data.data[i].image + ')');
        album.appendTo(albumContainer);
        
        var albumTitle = $('<h3>',{
           'class' : 'album-title',
           text : data.data[i].name
        });
        albumTitle.appendTo(album);
        
        var icons = $('<div>');
        icons.appendTo(album);
         
         var deleteIcon = $('<i>',{
//             id : data.data[i].id,
//            'data-album-delete-id' : 
            'class' : 'fa fa-times-circle-o delete-album',
            'aria-hidden' : 'true',
//            click : this.deleteAlbum.bind(this.data)
            click : function(){
//                 console.log($('i').attr('id'));
                   console.log();
                   var cancelPopup = new CancelPopup('Are you sure?',data.data[i].id);
                   cancelPopup.buildPopup(data.data[i].id);
            }
//        });
         });
        deleteIcon.appendTo(icons);
        
        var editIcon = $('<i>',{
            'class' : 'fa fa-pencil edit-album',
            'aria-hidden' : 'true',
            click : this.editAlbum
        });
        editIcon.appendTo(icons);
        
        var playIcon = $('<i>',{
            'data-album-play-id' : data.data[i].id,
            'class' : 'fa fa-play-circle play-album',
            'aria-hidden' : 'true',
//            click : this.playAlbum
            click : function(){
                console.log(data.data[i].id);
                var musicPlayer = new MusicPlayer(data.data[i].id,data.data[i].image);
                musicPlayer.clearHTML();
                musicPlayer.buildHeader();
                musicPlayer.buildMusicPlayer(data.data[i].id,data.data[i].image);
            }
        });
        playIcon.appendTo(album);
        
    }
    }
    
//    playAlbum(data){
////        console.log(data.data[i].id);
//        console.log(this.data);
//        console.log(data);
//        var musicPlayer = new MusicPlayer();
//        musicPlayer.clearHTML();
//        musicPlayer.buildHeader();
//        musicPlayer.buildMusicPlayer();
//    }
    
    editAlbum(){
         var newPlaylistPopup = new NewPlaylistPopup('Edit Playlist');
            newPlaylistPopup.buildPopup();  
    }
    
    deleteAlbum(){
//        console.log(data.data[i].id);
////         console.log(this.data);
////        console.log(this.data);
////        var cancelPopup = new CancelPopup('Are you sure?',this.data);
//        var cancelPopup = new CancelPopup('Are you sure?',this.data);
//             cancelPopup.buildPopup(this.data);
    }
}
