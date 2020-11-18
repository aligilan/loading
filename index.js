'use strict';

module.exports = class Loading {
    target;

    #loading_by_obj(){
        this.#manage_loading(this.target);
    }

    #loading_by_objs(){
        for(let element of this.target){
            this.#manage_loading(element);
        }
    }

    #loading_by_selector(){
        this.target = document.querySelector(this.target)
        this.#manageObjectTarget()
    }

    #manage_loading(target_element){
        if(!target_element) return ;

        if(!target_element.classList.contains('overlay-container')){
            target_element.classList.add('overlay-container');
            target_element.disabled = true;

            let overlay_node = document.createElement('div');
            overlay_node.classList.add('my-overlay');
            let spinner_node = document.createElement('div');
            spinner_node.classList.add('spinner');
            overlay_node.appendChild(spinner_node);
            target_element.appendChild(overlay_node);

        }else{
            target_element.classList.remove('overlay-container');
            target_element.getElementsByClassName('my-overlay')[0].remove();
            target_element.disabled = false;
        }
    }

    loadingBy(target){
        this.target = target;

        if(typeof this.target === "object"){
            this.#manageObjectTarget()
        }else if(typeof this.target === 'string'){
            this.#loading_by_selector();
        }else{
            console.log('Show loading Error: target is type not support ....')
        }
    }

    #manageObjectTarget(){
        this.target.length ? this.#loading_by_objs() : this.#loading_by_obj()
    }
}