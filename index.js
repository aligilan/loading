'use strict'

module.exports = class Loading {
    loading_by_selector(){
        this.target = document.querySelector(this.target)
        this.manage_loading(this.target)
    }

    manage_loading(target_element){
        if(!target_element) return ;

        // Disable button on loading
        this.manage_button(target_element)

        if(!target_element.classList.contains('overlay-container')){
            target_element.classList.add('overlay-container');

            let overlay_node = document.createElement('div');
            overlay_node.classList.add('my-overlay');
            let spinner_node = document.createElement('div');
            spinner_node.classList.add('spinner');
            overlay_node.appendChild(spinner_node);
            target_element.appendChild(overlay_node);

        }else{
            target_element.classList.remove('overlay-container');
	    let my_overlay = target_element.getElementsByClassName('my-overlay')[0];

            if(my_overlay)
            	myoverlay.remove();
        }
    }

    manage_button(target_element){
        if(!target_element) return ;

        if(target_element.nodeName == 'button' || target_element.type == 'submit'){
            target_element.disabled = !!!target_element.classList.contains('overlay-container')
        }
    }

    toggle(target){
        this.target = target;

        if(typeof this.target === "object"){
            this.manage_loading(this.target)
        }else if(typeof this.target === 'string'){
            this.loading_by_selector();
        }else{
            console.log('Show loading Error: target is type not support ....')
        }
    }
}
