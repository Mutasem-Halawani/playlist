/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class MusicPlayer{
    
    clearHTML(){
        $('main.all-albums').empty();
    }
    
    buildMusicPlayer(){
        var main  = $('<main>',{
            'class' : 'music-player-main'
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
            id : 'play-album',
            'class' : 'fa fa-play-circle',
            'aria-hidden' : 'true'
        });
        playIcon.appendTo(albumSection);
        
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
            'aria-hidden' : 'true'
        });
        deleteIcon.appendTo(controls);
        
        var editIcon = $('<i>',{
            id : 'music-play-edit-album',
            'class' : 'fa fa-pencil',
            'aria-hidden' : 'true'
        });
        editIcon.appendTo(controls);
    }
}















