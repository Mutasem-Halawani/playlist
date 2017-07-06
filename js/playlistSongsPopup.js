/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class PlaylistSongsPopup{
    
    constructor(text){
        this.text = text;
    }
    
    buildPopup(albumID){
//        console.log(albumID);
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
           form : 'add-playlist-songs-form',
           click : function(){
                var allInputValues = [];
                var arrayofArrays = [];
                var allSongsArray = [];
                
                //loop through all form's inputs 
                $('input', $('form#add-playlist-songs-form')).each(function () {
                    var inputValues= ($(this)[0]).value;
                    allInputValues.push(inputValues);
                });
                
                //add double quotes to all values
                var songsArrayWithDoubleQuotes = allInputValues.map(function(a) {
                    return '"' +  a + '"';
                 });
                 
                //create an array of each song
                for(let i=0;i<songsArrayWithDoubleQuotes.length;i=i+2){
                    var slicedArray = songsArrayWithDoubleQuotes.slice(i,i+2);
                    arrayofArrays.push(slicedArray);
                }

                //change the structure of each song array & turn it into a string
                for(let i=0;i<arrayofArrays.length;i++){
                    if(arrayofArrays.length > 2){
                        var oneSongAsArray = arrayofArrays[i].splice(0,arrayofArrays.length);
                    }
                    else {
                        var oneSongAsArray = arrayofArrays[i].splice(0);
                    }
                    oneSongAsArray.unshift('{ "name":');
                    oneSongAsArray.splice(2, 0, ', "url":');
                    oneSongAsArray.push('}');
                    var string = oneSongAsArray.join('');
                    var myobject = JSON.parse(string);
                    allSongsArray.push(myobject);
                }
                
                var albumName = sessionStorage.getItem('albumName');
                var albumURL = sessionStorage.getItem('albumURL');
                 $.ajax({
                    url : 'api/playlist.php?type=playlist',
                    method:'POST',
                    data : {
                        "name" : albumName,
                        "image" : albumURL,
                        "songs" : allSongsArray      
                    },
                    success: function(data){
                            alert('success');
                    }
                    });
           }    
        });
        button.appendTo(footer);
//        this.addRow(albumID);





//this.getExistingSongs().bind(albumID);
//function getExistingSongs(albumID){
//            console.log(albumID);
//           $.ajax({
//                url : "api/playlist.php?&type=songs&id=" + albumID ,
//                method:'GET',
//                success: function(data){
////                console.log(data);
////                console.log(data.data.songs);
//                var object = data.data.songs;
////                console.log(object[0].name);
//                
//                for(let i=0;i<object.length;i++){
//                    var list = $('ol.music-songs-list');
//                    var listItem = $('<li>',{
//                        'class' : 'music-songs-list-item',
//                        text : object[i].name
//                    });
//                    listItem.appendTo(list);
//                }
//                
//                var songMarquee = $('div.song-marquee');
//                var firstSong = $('li.music-songs-list-item').first().text();
//                var currentSong = $('<h5>',{
//                    'class' : 'current-song',
//                    text : firstSong
//                 });
//                currentSong.appendTo(songMarquee);
//                
//                for(let i=0;i<object.length;i++){
//                    var audio = $('audio.audio-player');
//                    var source = $('<source>',{
//                        src : object[i].url,
//                        type : 'audio/mp3'
//                    });
//                    source.appendTo(audio);
//
//                    console.log(object[0].url);
//                }
//                }
//           });
//}
           
        this.getExistingSongs(albumID);
           
    }
    
    
    
    
    
    
    
    
    
    removePopup(e){
        if (e.target.id === "playlist-songs-popup-container"){
            e.currentTarget.remove();
        }
    }
    
    addRow(albumID){
//        console.log(albumID);
        var songRow = $('<div>',{
           'class' : 'add-song-rows'
        });
        songRow.appendTo('form#add-playlist-songs-form');
        
        var URLLabel = $('<label>',{
            text : 'Song URL'
        });
        URLLabel.appendTo($(songRow));
        
        var URLInput = $('<input>',{
           'class' : 'song-URL',
           type : 'text',
           placeholder : 'http://'
        });
        URLInput.appendTo($(songRow));
        
         var nameLabel = $('<label>',{
            text : 'Song Name'
        });
        nameLabel.appendTo($(songRow));
        
        var nameInput = $('<input>',{
           'class' : 'song-name',
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
    
    getExistingSongs(albumID){
        console.log(albumID);
        $.ajax({
                url : "api/playlist.php?&type=songs&id=" + albumID ,
                method:'GET',
                success: function(data){
                    var object = data.data.songs;
                    for(let i=0;i<object.length;i++){
//                    console.log(data);
                    var songRow = $('<div>',{
                      'class' : 'add-song-rows'
                    });
                    songRow.appendTo('form#add-playlist-songs-form');

                    var URLLabel = $('<label>',{
                       text : 'Song URL'
                    });
                    URLLabel.appendTo($(songRow));

                    var URLInput = $('<input>',{
                        'class' : 'song-URL',
                        type : 'text',
                        placeholder : 'http://',
                        value : data.data.songs[i].url
                    });
                    URLInput.appendTo($(songRow));

                    var nameLabel = $('<label>',{
                       text : 'Song Name'
                    });
                    nameLabel.appendTo($(songRow));

                    var nameInput = $('<input>',{
                      'class' : 'song-name',
                      type : 'text',
                      placeholder : 'e.g. Yellow',
                      value : data.data.songs[i].name
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
                    }
                });
    }
    
    
    }
//    updateServer(songs){
//        console.log(songs);
//    }
    
//    removeRow(){
//        console.log('hi');
//    }

