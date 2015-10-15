$(document).ready(function(){
    $('#contactform-A').toggleClass("hidden");
    
    $('#finalexam').on('click', function(){
        
        event.preventDefault();
        
        $(this).addClass("hidden"); 
        
        $('#contactform-A').toggleClass("hidden"); 
    });
    
    var formA= $('#contactform-A');
    
    $('#btnSubmit-A').on('click', function(){
        $.ajax({
            
            type:"POST",
            
            url: "http://www.fakedomain.com/formpost",
            
            data: formA.serialize(),
            
            success: function (response){
                
                console.log("you did it");
            }, 
            
            error: function(request,errortype,errorMessage){
                
            }
        });
    });
    
});