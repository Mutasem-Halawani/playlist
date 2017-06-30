/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class MusicAlbum{
    
    constructor(text){
        this.text = text;
    }
    
    buildAlbum(){
        var albumContainer = $('<main>',{
           'class' : 'all-albums'
        });
        albumContainer.appendTo('body');
        
        var album = $('<section>',{
           'class' : 'album album-cover'
        });
        album.appendTo(albumContainer);
        
        var albumTitle = $('<h3>',{
           'class' : 'album-title'
        });
        albumTitle.appendTo(album);
        
        var icons = $('<div>');
        icons.appendTo(album);
        
         var deleteIcon = $('<i>',{
            id : 'delete-album',
            'class' : 'fa fa-times-circle-o',
            'aria-hidden' : 'true',
            click : this.deleteAlbum
        });
        deleteIcon.appendTo(icons);
        
        var editIcon = $('<i>',{
            id : 'edit-album',
            'class' : 'fa fa-pencil',
            'aria-hidden' : 'true',
            click : this.editAlbum
        });
        editIcon.appendTo(icons);
        
        var playIcon = $('<i>',{
            id : 'play-album',
            'class' : 'fa fa-play-circle',
            'aria-hidden' : 'true',
            click : this.playAlbum 
        });
        playIcon.appendTo(album);
    }
    
    playAlbum(){
        var musicPlayer = new MusicPlayer();
        musicPlayer.clearHTML();
        musicPlayer.buildHeader();
        musicPlayer.buildMusicPlayer();
    }
    
    editAlbum(){
         var newPlaylistPopup = new NewPlaylistPopup('Edit Playlist');
            newPlaylistPopup.buildPopup();  
    }
    
    deleteAlbum(){
        var cancelPopup = new CancelPopup('Are you sure?');
             cancelPopup.buildPopup();
    }
    
}
