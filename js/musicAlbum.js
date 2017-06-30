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
        var albumContainer = $('main',{
           'class' : 'all-albums' 
        });
        albumContainer.appendTo('body');
              console.log('hi');

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
            'aria-hidden' : 'true'
//            click: this.deleteAlbum.bind(this)
        });
        deleteIcon.appendTo(album);
        
        var editIcon = $('<i>',{
            id : 'edit-album',
            'class' : 'fa fa-pencil',
            'aria-hidden' : 'true'
        });
        editIcon.appendTo(album);
        var playIcon = $('<i>',{
            id : 'play-album',
            'class' : 'fa fa-play-circle',
            'aria-hidden' : 'true'
        });
        playIcon.appendTo(album);
        console.log('inside class');
    }
}
