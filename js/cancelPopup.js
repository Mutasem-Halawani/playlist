/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class CancelPopup{
    
    constructor(text, data){
        this.text = text;
        this.data = data;
    }
    
    buildPopup(data){
        var popUpContainer = $('<div>',{
            id : 'cancel-popup-container',
           'class': 'popup-container',
           click: this.removePopup.bind(this)
        });
        popUpContainer.appendTo('body');
        
        var popUp = $('<div>',{
            id : 'cancel-popup',
            'class' : 'popup'
        });
        popUp.appendTo(popUpContainer);
        
        var header = $('<div>',{
            'class' : 'popup-modal-header',
            text : this.text
        });
        header.appendTo(popUp);
        
        var deleteButton = $('<button>',{
           id: 'delete',
           text: 'delete',
           click : function(){
                let id = data;
                console.log(data);
                $.ajax({
                    url: 'api/playlist.php?type=playlist&id=' + id,
                    type: 'DELETE',
                    success: function(){
                        alert('success');
                    }
                });
           }
        });
        deleteButton.appendTo(popUp);
        
         var cancelButton = $('<button>',{
            id: 'cancel',
            text: 'cancel'
        });
        cancelButton.appendTo(popUp);
    }
    
    removePopup(e){
        if (e.target.id === "cancel-popup-container"){
            e.currentTarget.remove();
    }
        else if (e.target.id === "cancel"){
            e.currentTarget.remove();
    }
    }
}
