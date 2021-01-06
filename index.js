'use strict'

module.exports = class Loading {
    manage_loading(){
        //set target-element
        if(typeof this.target === "object"){
            this.target_element = this.target;
        }else if(typeof this.target === 'string'){
            this.target_element = document.querySelector(this.target);
        }else{
            console.log('Show loading Error: target type not support ....')
        }
        
        // Disable button on loading
        this.manage_button()
    }
    
    toggle_loading(){
        this.manage_loading();
        
        if(!this.target_element.classList.contains('overlay-container')){
            this.show_loading();
        }else{
            this.hide_loading();
        }
    }
    show_loading(){
        this.manage_loading();
        if(!this.target_element) return;
        this.target_element.classList.add('overlay-container');
        let overlay_node = document.createElement('div');
        overlay_node.classList.add('my-overlay');
        let spinner_node = document.createElement('div');
        spinner_node.classList.add('spinner');
        overlay_node.appendChild(spinner_node);
        this.target_element.appendChild(overlay_node);
    }
    hide_loading(){
        this.manage_loading();
        if(!this.target_element) return;
        this.target_element.classList.remove('overlay-container');
        let my_overlay = this.target_element.getElementsByClassName('my-overlay')[0];
        
        if(!!my_overlay){
            my_overlay.remove();
        }
    }
    
    manage_button(){
        if(!this.target_element) return ;
        
        if(this.target_element.nodeName === 'button' || this.target_element.type === 'submit'){
            this.target_element.disabled = !!!this.target_element.classList.contains('overlay-container')
        }
    }
    
    toggle(target){
        this.target = target;
        this.toggle_loading();
    }
    
    show(target){
        this.target = target;
        this.show_loading();
    }
    
    hide(target){
        this.target = target;
        this.hide_loading();
    }
}