/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class MusicPlayer{
    
    constructor(albumID,albumImg){
        this.albumID = albumID;
        this.albumImg = albumImg;
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
        
        var audioPlayer = $('audio.audio-player');
        audioPlayer.on('pause',function(){
                $('i#play-album-music-player').addClass('show');
                $('i#pause').removeClass('show');
                });
        audioPlayer.on('play',function(){
                $('i#pause').addClass('show');
                $('i#play-album-music-player').removeClass('show');
                });
            
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
                var newPlaylistPopup = new NewPlaylistPopup('Edit Playlist');
                newPlaylistPopup.buildPopup(albumID);  
            }
        });
        editIcon.appendTo(controls);
        
        this.buildMusicList(albumID);
        this.playNextSong();
    }
    
    buildMusicList(albumID){
        $.ajax({
            url : "api/playlist.php?&type=songs&id=" + albumID ,
            method:'GET',
            success: function(data){
            var object = data.data.songs;
            for(let i=0;i<object.length;i++){
                var list = $('ol.music-songs-list');
                var listItem = $('<li>',{
                    'class' : 'music-songs-list-item',
                    'data-song-src' : object[i].url,
                    text : object[i].name,
                    click : function(){
                        var currentSongMarquee = $('h5.current-song');
                        currentSongMarquee[0].textContent = this.textContent;
                        var songURL = this.getAttribute('data-song-src');
                        var audioPlayer = $('audio.audio-player');
                        audioPlayer[0].src = songURL;
                        audioPlayer[0].play();
                        $('i#pause').addClass('show');
                        $('i#play-album-music-player').removeClass('show');
                    }
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
        });
    }
    
    changeIconToPlay(){
        $('i#play-album-music-player').addClass('show');
        $('i#pause').removeClass('show');
        var audioPlayer = $('audio.audio-player')[0];
        audioPlayer.pause();
    }
    
    changeIconToPause(){
        $('i#pause').addClass('show');
        $('i#play-album-music-player').removeClass('show');
        var audioPlayer = $('audio.audio-player');
        audioPlayer[0].play();
    }
    
    playNextSong(){
//        var myvid = document.getElementById('myvideo');
//
//        myvid.addEventListener('ended', function(e) {
//          // get the active source and the next video source.
//          // I set it so if there's no next, it loops to the first one
//          var activesource = document.querySelector("#myvideo source.active");
//          var nextsource = document.querySelector("#myvideo source.active + source") || document.querySelector("#myvideo source:first-child");
//
//          // deactivate current source, and activate next one
//          activesource.className = "";
//          nextsource.className = "active";
//
//          // update the video source and play
//          myvid.src = nextsource.src;
//          myvid.play();
//        });
           var audioPlayer = $('audio.audio-player');
           
         
            audioPlayer.on('ended',function(i){
//                var firstSong = audioPlayer.children('source')[0];
//                firstSong.className = 'active';
//                console.log(firstSong);
//                
//                
//                audioPlayer[0].src = 'songs/2pac/Tupac - Only God Can Judge Me.mp3';
//                console.log(audioPlayer[0]);
//                audioPlayer[0].play();
//                var activeSong = $('audio.audio-player source.active');
//                i = i;
                var songsSources = $('audio.audio-player source');
//                console.log(audioPlayer.children('source.active'));
//                var songAttr = songsSources.attr('class');
//                var activeSong = songsSources.attr('class') = 'active'
//                if (songsSources.attr('class') === 'active'){
//                    activeSong
//                }
//                var nextSong = audioPlayer.children('source.active + source');
//                var nextSong = currentSong.next();
//                
//                console.log('currentSong', currentSong.src);
//                console.log('nextSong', nextSong.src);
                var activeSong = songsSources[0];
                var nextSong = songsSources[2];
                  nextSong.className = "active";
//                console.log('activeSong', activeSong);
//                console.log(activeSong.src);
//                console.log('nextSong', activeSong);
                console.log(nextSong.src);
//                console.log(nextSong.src);
//                console.log('nextSong', nextSong);
//                console.log(nextSong);
//                activeSong.className = '';
//                nextSong.className = 'active';
                audioPlayer[0].src = nextSong.src;
//                console.log(audioPlayer);
                console.log(audioPlayer[0]);
//                console.log(audioPlayer.src);
                audioPlayer[0].play();
//                    i++;
//                audioPlayer[0].src = nextSong.src;
//                audioPlayer[0].play();
            });
    }
    
    addNewPlaylist(){
        var newPlaylistPopup = new NewPlaylistPopup('Add New Playlist');
            newPlaylistPopup.buildPopup();   
    }
    
    editAlbum(){
         var newPlaylistPopup = new NewPlaylistPopup('Edit Playlist');
            newPlaylistPopup.buildPopup(albumID);  
    }
}

