;(function(){
    
    let sticky=false
    let currentPosition=0
    
    const imgCounter=$("[data-name='imgCounter']").attr("content")-1
    
    
    $("#sticky-navigation").removeClass("invisible")
    $("#sticky-navigation").slideUp(0)
    
    setInterval(()=>{
        
        if(currentPosition<imgCounter){
        currentPosition++
        }else{
            currentPosition=0
        }
        
        $("#gallery .inner").css({
            left:"-"+currentPosition*100+"%"
        })
    },4000)
    
    
    $(window).scroll(()=>{
        const inBottom=isInBottom();
        
       console.log(isInBottom()) 
       
       if(isBottom && !sticky){
           console.log("Change Nav")
           sticky=true
           stickNavigation()
       }else if(!inBottom && sticky){
           sticky=false
           unStickNavigation()
          
       }
        
    })
    
    function stickNavigation(){
        
        $("#description").addClass("fixed").removeClass("absolute")
        $("#navigation").slideUp()
        $("#sticky-navigation").slideDown("fast")
        
    }
    
    function unStickNavigation(){
        
        $("#description").removeClass("fixed").addClass("absolute")
        $("#navigation").slideDown("fast")
        $("#sticky-navigation").slideUp("fast")
    }
    
     const mail="reysh_2@yahoo.com"
    
    /*
    $("#contact-form").onclick("submit",function(ev){
        
        ev.preventDefault()
        
        sendForm($(this))
        
        return false;        
    }) */
    
    
    
 /*   
    function sendForm($form){
       $.ajax({
           
            url: $form.attr("action"), 
            method: "POST",
            data: $form.formObject(),
            dataType: "json"
           // success:function(){
           //    alert("Have been send OK")
           //}
           
         })
    }
    */
    
    function isInBottom(){
        const $description=$("#description")
        const descriptionHeight=$description.height()
        
        return $(window).scrollTop()>$(window).height()-(descriptionHeight*1.5)
    }
    
})()





























