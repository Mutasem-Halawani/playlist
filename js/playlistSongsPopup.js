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
           'class': 'popup-container',
           click: this.removePopup.bind(this)
        });
        popUpContainer.appendTo('body');
        
        var popUp = $('<div>',{
            id : 'add-new-playlist-popup',
            'class' : 'popup'
        });
        popUp.appendTo(popUpContainer);
        
        var header = $('<div>',{
            id: 'new-playlist-popup-modal-header',
            'class' : 'popup-modal-header',
            text : this.text
        });
        
        header.appendTo(popUp);
        
        
        var content = $('<div>',{
           id : 'add-new-playlist-content', 
           'class' : 'popup-modal-content'
        });
        
        content.appendTo(popUp);
        
        var form = $('<form>',{
            id: 'add-new-playlist-form'
        });
        
        form.appendTo(content);
        
        var nameLabel = $('<label>',{
            for : 'playlist-name',
            text : 'Playlist name'
        });
        
        nameLabel.appendTo(form);
        
        var nameInput = $('<input>',{
           id : 'playlist-name',
           type : 'text',
           placeholder : 'e.g. New Pop Songs'
        });
        
        nameInput.appendTo(form);
        
         var URLLabel = $('<label>',{
            for : 'playlist-URL',
            text : 'Playlist URL'
        });
        
        URLLabel.appendTo(form);
        
        var URLInput = $('<input>',{
           id : 'playlist-URL',
           type : 'text',
           placeholder : 'http://'
        });
        
         URLInput.appendTo(form);
         
          var img = $('<img>',{
            id : "add-album-image",
            src : 'http://www.mentalfloss.com/wp-content/uploads/2009/01/Nas-gods-son-music-album.jpg'
         });
         
         img.appendTo(content);
         
         var footer = $('<div>',{
            'class' :  'popup-modal-footer'
         });
         
         footer.appendTo(popUp);
        
        var nextButton = $('<button>',{
           id : 'next',
           text : 'Next'
        });
        
        nextButton.appendTo(footer);
        
        var resetButton = $('<button>',{
           id : 'reset-feilds',
           text : 'Reset fields'
        });
        
        resetButton.appendTo(footer);
    }
    
    removePopup(e){
            e.currentTarget.remove();
}
}
