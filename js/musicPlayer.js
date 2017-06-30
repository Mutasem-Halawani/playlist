/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class MusicPlayer {
    
    constructor(text){
        this.text = text;
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
    
    buildMusicPlayer(){
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
        
        var currentSong = $('<h5>',{
            'class' : 'current-song',
            text : 'Never Had A Friend Like Me'
        });
        currentSong.appendTo(songMarquee);
        
        var audioPlayer = $('<audio>',{
            'class' : 'audio-player',
            controls : true
        });
        audioPlayer.appendTo(playerSection);
        
        var source1 = $('<source>',{
            src : 'songs/Tupac - Never Had A Friend Like Me (HQ).mp3',
            type : 'audio/mp3'
        });
        source1.appendTo(audioPlayer);
        
        var source2 = $('<source>',{
            src : 'songs/Tupac - Only God Can Judge Me.mp3',
            type : 'audio/mp3'
        });
        source2.appendTo(audioPlayer);
        
        var musicList = $('<ol>',{
            'class' : 'music-songs-list'
        });
        musicList.appendTo(playerSection);
        
        var listItem1 = $('<li>',{
            'class' : 'music-songs-list-item',
            text : 'Never Had A Friend Like Me'
        });
        listItem1.appendTo(musicList);
        
        var listItem2 = $('<li>',{
            'class' : 'music-songs-list-item',
            text : 'Only God Can Judge'
        });
        listItem2.appendTo(musicList);
        
        var controls = $('<div>',{
            'class' : 'controls'
        });
        controls.appendTo(main);
        
        var deleteIcon = $('<i>',{
            id : 'music-play-delete-album',
            'class' : 'fa fa-times-circle-o',
            'aria-hidden' : 'true',
            click: this.deleteAlbum.bind(this)
        });
        deleteIcon.appendTo(controls);
        
        var editIcon = $('<i>',{
            id : 'music-play-edit-album',
            'class' : 'fa fa-pencil',
            'aria-hidden' : 'true',
            click : this.editAlbum
        });
        editIcon.appendTo(controls);
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
        console.log('button clicked');
//          var musicPlayer = new MusicPlayer();
         $('body').empty();
//    musicPlayer.buildHeader();
//    musicPlayer.buildMusicPlayer();
    
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
        
        var label = $('<label>').appendTo(header);
        
        var input = $('<input>',{
            id : 'search-playlists',
            type : 'search',
            placeholder : 'Search playlists',
            size : '15'
        });
        input.prependTo(label);
        
        var albums = new MusicAlbum();
        albums.buildAlbum();
    }
    
    changeIconToPlay(){
        $('i#play-album-music-player').addClass('show');
        $('i#pause').removeClass('show');
    }
    
    changeIconToPause(){
        $('i#pause').addClass('show');
         $('i#play-album-music-player').removeClass('show');
    }
    
    addNewPlaylist(){
        var newPlaylistPopup = new NewPlaylistPopup('Add New Playlist');
            newPlaylistPopup.buildPopup();    
    }
    
    editAlbum(){
         var newPlaylistPopup = new NewPlaylistPopup('Edit Playlist');
            newPlaylistPopup.buildPopup();  
    }
}















