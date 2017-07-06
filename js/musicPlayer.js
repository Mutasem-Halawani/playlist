/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class MusicPlayer{
    
    constructor(albumID,albumImg){
        this.albumID = albumID;
        this.albumImg = albumImg;
//        console.log(albumID);
//        console.log(albumImg);
    }
    
    clearHTML(){
        $('body').empty();
    }
    
    buildHeader(){
        var header = $('<header>').appendTo('body');
        
        var link = $('<a>',{
            href : '#',
            id : 'add-new-playlist',
            text : 'Add new playlist',
            click : this.addNewPlaylist
        });
        link.appendTo(header);
        
        var addIcon = $('<i>',{
            'class' : 'fa fa-plus-circle',
            'aria-hidden' : 'true'
        });
        addIcon.prependTo(link);
        
        var backButton = $('<button>',{
            id : 'back'
        });
        backButton.appendTo(header);
        
        var buttonText = $('<span>',{
            id : 'back-text',
            text : 'Back',
            click : this.previousPage
        });
        buttonText.appendTo(backButton);
    }
    
    buildMusicPlayer(albumID,albumImg){
//         console.log(albumID);
        var main  = $('<main>',{
            id : 'music-player-container',
            'class' : 'music-player-main',
            click: this.removePopup.bind(this)
        });
        main.appendTo('body');
        
        var musicPlayer = $('<div>',{
           'class' :  'music-player'
        });
        musicPlayer.appendTo(main);
        
        var albumSection = $('<section>',{
           'class' : 'album album-cover music-player-album-cover'
        });
        albumSection.css('background-image', 'url(' + albumImg + ')');
        albumSection.appendTo(musicPlayer);
        
        var playIcon = $('<i>',{
            id : 'play-album-music-player',
            'class' : 'fa fa-play-circle fa-play-circle-album show',
            'aria-hidden' : 'true',
            click : this.changeIconToPause
        });
        playIcon.appendTo(albumSection);
        
        var pauseIcon = $('<i>',{
            id : 'pause',
            'class' : 'fa fa-pause fa-pause-album hide',
            'aria-hidden' : 'true',
            click : this.changeIconToPlay
        });
        pauseIcon.appendTo(albumSection);
        
        var playerSection = $('<section>',{
            'class' : 'player-songs'
        });
        playerSection.appendTo(musicPlayer);
        
        var songMarquee = $('<div>',{
            'class' : 'song-marquee'
        });
        songMarquee.appendTo(playerSection);
        
        var audioPlayer = $('<audio>',{
            'class' : 'audio-player',
            controls : true
        });
        audioPlayer.appendTo(playerSection);
       
        var musicList = $('<ol>',{
            'class' : 'music-songs-list'
        });
        musicList.appendTo(playerSection);
    
        var controls = $('<div>',{
            'class' : 'controls'
        });
        controls.appendTo(main);

        var deleteIcon = $('<i>',{
            id : 'music-play-delete-album',
            'class' : 'fa fa-times-circle-o',
            'aria-hidden' : 'true',
//            click: this.deleteAlbum.bind(this)
            click : function(){
                var cancelPopup = new CancelPopup('Are you sure?',albumID);
                   cancelPopup.buildPopup(albumID);
            }
        });
        deleteIcon.appendTo(controls);
        
        var editIcon = $('<i>',{
            id : 'music-play-edit-album',
            'class' : 'fa fa-pencil',
            'aria-hidden' : 'true',
            click : function(){
//                console.log(albumID);
//                console.log('albumID');
                var newPlaylistPopup = new NewPlaylistPopup('Edit Playlist');
                newPlaylistPopup.buildPopup(albumID);  
            }
        });
        editIcon.appendTo(controls);
        
        this.buildMusicList(albumID);
    }
    
    buildMusicList(albumID){
//        console.log('list');
//        console.log(albumID);
        
           $.ajax({
                url : "api/playlist.php?&type=songs&id=" + albumID ,
                method:'GET',
                success: function(data){
//                console.log(data);
//                console.log(data.data.songs);
                var object = data.data.songs;
//                console.log(object[0].name);
                
                for(let i=0;i<object.length;i++){
                    var list = $('ol.music-songs-list');
                    var listItem = $('<li>',{
                        'class' : 'music-songs-list-item',
                        text : object[i].name
                    });
                    listItem.appendTo(list);
                }
                
                var songMarquee = $('div.song-marquee');
                var firstSong = $('li.music-songs-list-item').first().text();
                var currentSong = $('<h5>',{
                    'class' : 'current-song',
                    text : firstSong
                 });
                currentSong.appendTo(songMarquee);
                
                for(let i=0;i<object.length;i++){
                    var audio = $('audio.audio-player');
                    var source = $('<source>',{
                        src : object[i].url,
                        type : 'audio/mp3'
                    });
                    source.appendTo(audio);

                    console.log(object[0].url);
                }
                }
           });
    }
    
    deleteAlbum(){
        var cancelPopup = new CancelPopup('Are you sure?');
             cancelPopup.buildPopup();
    }
    
    removePopup(e){
        if (e.target.id === "cancel-popup-container"){
            e.currentTarget.remove();
    }
        else if (e.target.id === "cancel"){
            e.currentTarget.closest('div#cancel-popup-container').remove();
    }
    }
    
    previousPage(){
         $('body').empty();
         
        var header = $('<header>').appendTo('body');
        
        var link = $('<a>',{
            href : '#',
            id : 'add-new-playlist',
            text : 'Add new playlist',
            click : function(){
                 var newPlaylistPopup = new NewPlaylistPopup('Add New Playlist');
                 newPlaylistPopup.buildPopup();    
            }
        });
        link.appendTo(header);
        
        var addIcon = $('<i>',{
            'class' : 'fa fa-plus-circle',
            'aria-hidden' : 'true'
        });
        addIcon.prependTo(link);
        
        var label = $('<label>').appendTo(header);
        
        var input = $('<input>',{
            id : 'search-playlists',
            type : 'search',
            placeholder : 'Search playlists',
            size : '15'
        });
        input.prependTo(label);
        
        $.get( "api/playlist.php?type=playlist", function( data ) {
        var albums = new MusicAlbum(data);
        albums.buildAlbum(data);
//        console.log(data);
        });
    }
    
    changeIconToPlay(){
        $('i#play-album-music-player').addClass('show');
        $('i#pause').removeClass('show');
             
    }
    
    changeIconToPause(){
        $('i#pause').addClass('show');
        $('i#play-album-music-player').removeClass('show');
//        var audio = $('audio');
//        audio.play();
//        console.log(audio);
    }
//    
//    playSong(){
//    }
//    
//    pauseSong(){
//        
//    }
    
    addNewPlaylist(){
        var newPlaylistPopup = new NewPlaylistPopup('Add New Playlist');
            newPlaylistPopup.buildPopup();    
    }
//    
    editAlbum(){
//        console.log('albumID');
//        console.log(this.albumID);
//        console.log(albumID);
         var newPlaylistPopup = new NewPlaylistPopup('Edit Playlist');
            newPlaylistPopup.buildPopup(albumID);  
    }
//    
}

