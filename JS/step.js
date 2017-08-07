;(function(){
    
    $(".step:nth-child(1)").addClass("active")
    
    const selector="#contac-form"
    
    $(selector).find(".input").on("change",(ev)=>{
        let $input=$(ev.target)
        
        let $next_step=$input.parent().next()
        
        if($next_step.length>0){
        next($next_step)
        }else{
            validar_formulario()
        }
        
    })
    
    //Helpers
    
    function validar_formulario(){
        if(es_valido_formulario()){
            
        }else{
            let $fieldset_inavlid=$(selector).find(".input:invalid").first().parent()
            next($fieldset_inavlid)
        }
    }
    
    function es_valido_formulario(){
        document.querySelector(selector).checkValidity()
    }
    
    function next($next_step){
        $(".step.active").removeClass("active")
        $next_step.addClass("active")
        $next_step.find(".input").focus()
        //$next_input.focus()
    }
    
    
    
})()