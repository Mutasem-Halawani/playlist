/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("h3").lettering();


var cancelPopup = new CancelPopup('Are you sure?');


$('i#delete-album').on('click',function(){
    cancelPopup.buildPopup();
})