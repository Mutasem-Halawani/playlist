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
            click: this.previousPage.bind(this)
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
        audioPlayer.on('ended',function(){
                var currentSong = $('li').parent('ol').find('li.active');
                var nextSong = $('li').parent('ol').find('li.active').next();
                currentSong.removeClass('active');
                nextSong.addClass('active');
                audioPlayer[0].src = nextSong[0].getAttribute('data-song-src');
                audioPlayer[0].play();
                $('h5.current-song')[0].innerHTML = nextSong.text();
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
                        $('li').parent('ol').find('li.active').removeClass('active');
                        $(this).addClass('active');
                        var currentSongMarquee = $('h5.current-song');
                        currentSongMarquee[0].textContent = this.textContent;
                        var songURL = this.getAttribute('data-song-src');
                        var audioPlayer = $('audio.audio-player');
                        currentSongMarquee[0].setAttribute('current-song-src',songURL);
                        audioPlayer[0].src = songURL;
                        audioPlayer[0].play();
                        $('i#pause').addClass('show');
                        $('i#play-album-music-player').removeClass('show');
                    }
                });
                listItem.appendTo(list);
            }
            $('li.music-songs-list-item').first().addClass('active');
            var songMarquee = $('div.song-marquee');
            var firstSong = $('li.music-songs-list-item').first().text();
            var currentSong = $('<h5>',{
                'class' : 'current-song',
                'current-song-src' : object[0].url,
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
        $('div').remove();
        var header = new MainHeader();
            header.buildHeader();
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
    
    addNewPlaylist(){
        var newPlaylistPopup = new NewPlaylistPopup('Add New Playlist');
            newPlaylistPopup.buildPopup();   
    }
    
    editAlbum(){
         var newPlaylistPopup = new NewPlaylistPopup('Edit Playlist');
            newPlaylistPopup.buildPopup(albumID);  
    }
}

