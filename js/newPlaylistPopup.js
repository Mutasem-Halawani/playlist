/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class NewPlaylistPopup{
    
    constructor(text){
        this.text = text;
    }
    
    buildPopup(){
        var popUpContainer = $('<div>',{
            id : 'new-playlist-popup-container',
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
           placeholder : 'http://',
           keyup : function(){
               var src = $('input#playlist-URL').val();
               $('img#add-album-image').attr('src',src);
               $('img#add-album-image').on('error',function(){
                   $('img#add-album-image').attr('src','http://ccel.ca/wp-content/uploads/2012/09/vector-music-boxes-cover-07-by-dragonart.jpg');
               });
           }
        });
        
        
         URLInput.appendTo(form);
         
          var img = $('<img>',{
            id : "add-album-image",
            src : 'http://ccel.ca/wp-content/uploads/2012/09/vector-music-boxes-cover-07-by-dragonart.jpg'
         });
         
         img.appendTo(content);
         
         var footer = $('<div>',{
            'class' :  'popup-modal-footer'
         });
         
         footer.appendTo(popUp);
        
        var nextButton = $('<button>',{
           id : 'next',
           text : 'Next',
           type : 'sumbit',
           form : 'add-new-playlist-form',
//           click : this.openNextPopup
           click : function(){
               var albumName = nameInput.val();
               var albumURL = URLInput.val();
               sessionStorage.setItem('albumName', albumName);
               sessionStorage.setItem('albumURL', albumURL);
//               sessionStorage.getItem('albumURL', 'albumName');
//               console.log(albumName);
//               console.log(albumURL);
//               console.log(sessionStorage);
                var playlistSongsPopup = new PlaylistSongsPopup('Add Playlist Songs');
                playlistSongsPopup.buildPopup();
               
           }
        });
        
        nextButton.appendTo(footer);
        
        var resetButton = $('<button>',{
           id : 'reset-feilds',
           text : 'Reset fields',
           click : this.clearFields.bind(this)
        });
        
        resetButton.appendTo(footer);
    }
    
    updateInfo(info){
        console.log(info);
    }
    
    removePopup(e){
        if (e.target.id === "new-playlist-popup-container"){
            e.currentTarget.remove();
        }
        if (e.target.id === 'next'){
            e.currentTarget.remove();
       }
   }
       
    openNextPopup(e){
        var playlistSongsPopup = new PlaylistSongsPopup('Add Playlist Songs');
        playlistSongsPopup.buildPopup();
    }
    
    clearFields(){
        $("form#add-new-playlist-form")[0].reset();
    }
}
