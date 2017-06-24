/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Popup{
    
    constructor(text){
        this.text = text;
    }
    
    buildPopup(){
        var popUpContainer = $('<div>',{
           id: 'popup-container',
           click: this.removePopup.bind(this)
        });
        popUpContainer.appendTo('body');
        
        var popUp = $('<div>',{
            id : 'popup'
        });
        popUp.appendTo(popUpContainer);
        
        
        var header = $('<div>',{
            id : 'modal-header',
            text : this.text
        });
        
        header.appendTo(popUp);
        
        var content = $('<div>',{
            id : 'modal-content',
        });
        content.appendTo(popUp);
        
        var cancelButton = $('<button>',{
            id: 'cancel',
            text: 'cancel',
        });
        cancelButton.appendTo(popUp);
    }
    
    removePopup(e){
        if (e.target.id === "popup-container"){
            e.currentTarget.remove();
    }
    
        else if (e.target.id === "cancel"){
            e.currentTarget.remove();
    }
    
}
}

$('button#cancel').on('click',function(){
    alert('button clicked');
});
