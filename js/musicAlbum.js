/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class MusicAlbum{
    
    constructor(text){
        this.text = text;
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
            'class' : 'fa fa-times-circle-o delete-album',
            'aria-hidden' : 'true',
            click : this.deleteAlbum
        });
        deleteIcon.appendTo(icons);
        
        var editIcon = $('<i>',{
            'class' : 'fa fa-pencil edit-album',
            'aria-hidden' : 'true',
            click : this.editAlbum
        });
        editIcon.appendTo(icons);
        
        var playIcon = $('<i>',{
            'class' : 'fa fa-play-circle play-album',
            'aria-hidden' : 'true',
            click : this.playAlbum
        });
        playIcon.appendTo(album);
    }
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
