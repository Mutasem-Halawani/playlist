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
        console.log(data);
        var albumContainer = $('<main>',{
           'class' : 'all-albums'
        });
        albumContainer.appendTo('body');
        
        for(let i=0;i<data.data.length;i++){
        var album = $('<section>',{
            'data-album-id' : data.data[i].id,
            'class' : 'album album-cover'
        });
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
            'class' : 'fa fa-times-circle-o delete-album',
            'aria-hidden' : 'true',
            click : function(){
                   var cancelPopup = new CancelPopup('Are you sure?',data.data[i].id);
                   cancelPopup.buildPopup(data.data[i].id);
            }
         });
        deleteIcon.appendTo(icons);
        
        var editIcon = $('<i>',{
            'edit-data-album-id' : data.data[i].id,
            'class' : 'fa fa-pencil edit-album',
            'aria-hidden' : 'true',
            click : function(){
                var newPlaylistPopup = new NewPlaylistPopup('Edit Playlist');
                   newPlaylistPopup.buildPopup(data.data[i].id);  
            }
        });
        editIcon.appendTo(icons);
        
        var playIcon = $('<i>',{
            'data-album-play-id' : data.data[i].id,
            'class' : 'fa fa-play-circle play-album',
            'aria-hidden' : 'true',
            click : function(){
                var musicPlayer = new MusicPlayer(data.data[i].id,data.data[i].image);
                musicPlayer.clearHTML();
                musicPlayer.buildHeader();
                musicPlayer.buildMusicPlayer(data.data[i].id,data.data[i].image);
            }
        });
        playIcon.appendTo(album);
    }
    }
}
