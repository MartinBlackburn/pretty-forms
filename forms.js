PrettyCheckbox = function(element) 
{   
    //hide element
    
    //replace element with a div with a checkbox class
    
    //update hidden element on click
    
    //update div selected status
};


PrettyRadio = function(element) 
{   
    //hide element
    
    //replace element with a div with a radio class
    
    //update hidden element on click (removing from others with same name)
    
    //update div selected status
};

PrettySelect = function(element) 
{   
    //hide element
    
    //replace element with a div with a select class
    
    //update hidden element on click
    
    //update div selected status
};

$(function() 
{
    $("input[type='checkbox']").each(function()
    {
        new PrettyCheckbox($(this));
    });
    
    $("input[type='radio']").each(function()
    {
        new PrettyRadio($(this));
    });
            
    $("select").each(function()
    {
        new PrettySelect($(this));
    });
});