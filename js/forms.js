PrettyCheckbox = function(realCheckbox) 
{   
    //hide real checkbox
    realCheckbox.hide();
    
    //if selected set selected class
    if(realCheckbox.is(":checked")) {
        var checkboxClass = "checkbox selected"
    } else {
        var checkboxClass = "checkbox"
    }
    
    //replace checkbox button with <div class'checkbox' />
    var fakeCheckbox = $('<div/>', {
        "class": checkboxClass,
        click: function() {
            toggleSelected();
        }
    }).insertAfter(realCheckbox);
    
    //toggle selected status
    function toggleSelected()
    {
        fakeCheckbox.toggleClass("selected");
        realCheckbox.click();
    }
};


PrettyRadio = function(realRadio) 
{   
    //hide real radio button
    realRadio.hide();
    
    //if selected set selected class
    if(realRadio.is(":checked")) {
        var radioClass = "radio selected"
    } else {
        var radioClass = "radio"
    }
    
    //replace radio button with <div class'radio' />
    var fakeRadio = $('<div/>', {
        "class": radioClass,
        click: function() {
            toggleSelected();
        }
    }).insertAfter(realRadio);
    
    //toggle selected status
    function toggleSelected()
    {
        if(!realRadio.is(":checked")) 
        {
            //deselect all other radio buttons with same name
            var name = realRadio.attr("name");
            
            realRadio.closest("form").find(".radio").removeClass("selected");
            
            //select this one
            fakeRadio.addClass("selected");
            realRadio.click();
        }
    }
};


PrettySelect = function(realSelectBox) 
{   
    //wrap select div around select element 
    realSelectBox.wrap("<div class='select'></div>");
    
    //element to display selected option
    var fakeSelect = $('<div/>', {
        "class": "select-selectedOption",
    }).insertAfter(realSelectBox);
    
    //add text to fake select
    fakeSelect.text(realSelectBox.val());    
    
    //style real select box to be same size as fake select
    //hide it using opacity so its still clickable
    realSelectBox.css({
        "width": "100%",
        "height": "100%",
        "min-height": "100%",
        "opacity": "0",
        "position": "absolute",
        "top": "0",
        "left": "0",
        "cursor": "pointer"
    });
    
    //display text of selected option on change
    realSelectBox.on("change", function(event) {
        fakeSelect.text(realSelectBox.val());
    });
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