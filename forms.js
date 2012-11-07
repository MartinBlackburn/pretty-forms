PrettyCheckbox = function(realCheckbox) 
{   
    //hide element
    realCheckbox.hide();
    
    //if selected set selected class
    if(realCheckbox.is(":checked")) {
        var checkboxClass = "checkbox selected"
    } else {
        var checkboxClass = "checkbox"
    }
    
    //replace element with a div with a checkbox class
    $('<div/>', {
        "class": checkboxClass,
        click: function() {
            toggleSelected($(this));
        }
    }).insertAfter(realCheckbox);
    
    //toggle selected status
    function toggleSelected(fakeCheckbox)
    {
        if(realCheckbox.is(":checked")) 
        {
            fakeCheckbox.removeClass("selected");
            realCheckbox.removeAttr("checked");
        } else {
            fakeCheckbox.addClass("selected");
            realCheckbox.attr("checked", "checked");
        }
    }
};


PrettyRadio = function(realRadio) 
{   
  //hide element
    realRadio.hide();
    
    //if selected set selected class
    if(realRadio.is(":checked")) {
        var radioClass = "radio selected"
    } else {
        var radioClass = "radio"
    }
    
    //replace element with a div with a checkbox class
    $('<div/>', {
        "class": radioClass,
        click: function() {
            toggleSelected($(this));
        }
    }).insertAfter(realRadio);
    
    //toggle selected status
    function toggleSelected(fakeRadio)
    {
        if(!realRadio.is(":checked")) 
        {
            //deselect all others with same name
            var name = realRadio.attr("name");
            
            realRadio.closest("form").find("input[type='radio'][name='" + name + "']").removeAttr("checked");
            realRadio.closest("form").find(".radio").removeClass("selected");
            
            //select this one
            fakeRadio.addClass("selected");
            realRadio.attr("checked", "checked");
        }
    }
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