/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class CancelPopup{
    
    constructor(text){
        this.text = text;
    }
    
    buildPopup(){
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
        });
        deleteButton.appendTo(popUp);
         var cancelButton = $('<button>',{
            id: 'cancel',
            text: 'cancel',
        });
        cancelButton.appendTo(popUp);
        
    }
    
    removePopup(e){
        if (e.target.id === "cancel-popup-container"){
            e.currentTarget.remove();
    }
    
        else if (e.target.id === "cancel"){
        console.log('hi');
            e.currentTarget.remove();
    }
    
}
}
