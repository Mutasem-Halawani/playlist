/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class PlaylistSongsPopup{
    
    constructor(text){
        this.text = text;
    }
    
    buildPopup(){
        var popUpContainer = $('<div>',{
            id : 'playlist-songs-popup-container',
           'class': 'popup-container',
           click: this.removePopup.bind(this)
        });
        popUpContainer.appendTo('body');
        
        var popUp = $('<div>',{
            id : 'add-playlist-songs-popup',
            'class' : 'popup'
        });
        popUp.appendTo(popUpContainer);
        
        var header = $('<div>',{
            id: 'add-playlist-songs-popup-modal-header',
            'class' : 'popup-modal-header',
            text : this.text
        });
        
        header.appendTo(popUp);
        
        var content = $('<div>',{
           id : 'add-playlist-songs-content', 
           'class' : 'popup-modal-content'
        });
        
        content.appendTo(popUp);
        
        var form = $('<form>',{
            id: 'add-playlist-songs-form'
        });
        
        form.appendTo(content);
//        this.addRow();
         
        var footer = $('<div>',{
             id : 'add-playlist-songs-popup-modal-footer',
            'class' :  'popup-modal-footer'
         });
         
         footer.appendTo(popUp);
        
        var songLink = $('<a>',{
           href : '#',
           id : 'add-another-song',
           text : 'Add song',
           click : this.addRow
        });
        
        songLink.appendTo(footer);
        
        var icon = $('<i>',{
           'class' : 'fa fa-plus-circle',
           'aria-hidden' : 'true'
        });
        
        icon.appendTo(songLink);
        
        var button = $('<button>',{
           id : 'finish-and-save',
           text : 'Finish & Save',
           type : 'sumbit',
           form : 'add-playlist-songs-form'
        });
        
        button.appendTo(footer);
    }
    
    removePopup(e){
        if (e.target.id === "playlist-songs-popup-container"){
            e.currentTarget.remove();
        }
    }
    
    addRow(){
          var songRow = $('<div>',{
           'class' : 'add-song-rows'
        });
        
        songRow.appendTo('form#add-playlist-songs-form');
        
        var URLLabel = $('<label>',{
            for : 'song-URL',
            text : 'Song URL'
        });
        
        URLLabel.appendTo($(songRow));
        
        var URLInput = $('<input>',{
           id : 'song-URL',
           type : 'text',
           placeholder : 'http://'
        });
        
        URLInput.appendTo($(songRow));
        
         var nameLabel = $('<label>',{
            for : 'song-name',
            text : 'Song Name'
        });
        
        nameLabel.appendTo($(songRow));
        
        var nameInput = $('<input>',{
           id : 'song-name',
           type : 'text',
           placeholder : 'e.g. Yellow'
        });
        
         nameInput.appendTo($(songRow));
         
         var deleteIcon = $('<i>',{
           id : 'delete-row',
           'class' : 'fa fa-times',
           'aria-hidden' : 'true',
           click: function(e){
                $(e.target).parent().remove();
           }
        });
        deleteIcon.appendTo(songRow);
    }
    
    removeRow(){
        console.log('hi');
    }
}

