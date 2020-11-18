'use strict';

module.exports = class Loading {
    target;
    constructor(target) {
        this.target = target;

        this.loadingBy();
    }

    loading_by_obj(){
        this.manage_loading(this.target);
    }

    loading_by_objs(){
        for(let element of this.target){
            this.manage_loading(element);
        }
    }

    loading_by_id(){
        this.manage_loading(document.getElementById(this.target));
    }

    manage_loading(target_element){
        if(!target_element) return ;

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
            target_element.getElementsByClassName('my-overlay')[0].remove();
        }
    }

    loadingBy(){
        if(typeof this.target === "object"){
            this.target.length ? this.loading_by_objs() : this.loading_by_obj()
        }else if(typeof this.target === 'string'){
            this.loading_by_id();
        }else{
            console.log('Loading error: Type is unknown...', this.target)
        }
    }
}