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
    var fakeCheckbox = $('<div/>', {
        "class": checkboxClass,
        click: function() {
            toggleSelected();
        }
    }).insertAfter(realCheckbox);
    
    //toggle selected status
    function toggleSelected()
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
    
    //replace element with a div with a radio class
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

PrettySelect = function(realSelectBox) 
{   
  //hide element
	realSelectBox.hide();
    
    //replace element with a div with a select class
    var fakeSelect = $('<div/>', {
        "class": "select",
        click: function() {
            toggleOptions();
        }
    }).insertAfter(realSelectBox);
    
    //added text of first option to div
    var selectedOption = $('<div/>', {
        "class": "selectedOption",
        "text": realSelectBox.find("option").first().text()
    }).appendTo(fakeSelect);
    
    //adde arrrow to indicate dropdown
    var dropdownArrow = $('<div/>', {
        "class": "dropdownArrow",
        "text": "▼"
    }).appendTo(fakeSelect);
    
    //add a list for the options
    var options =  $('<ul/>', {
        "class": "options",
        "style": "list-style: none;" +
                 "position: absolute;" +
                 "top: " + (fakeSelect.outerHeight(true)-2) + "px;" +
                 "left: -1px;"
    }).appendTo(fakeSelect);
    
    //hide options
    toggleOptions();
    
    //add each option to the list
    realSelectBox.find("option").each(function() {
        var option = $('<li/>', {
            "text": $(this).text(),
            click: function() {
                selectOption($(this));
            }
        }).appendTo(options);
    });
    
    //toggle options
    function toggleOptions()
    {
        options.toggle();
    }
    
    //select option
    function selectOption(option)
    {
    	//change selected text
        selectedOption.text(option.text());
        
        //unselect other options
        realSelectBox.find("option").removeAttr("selected");
        
        //select option
        realSelectBox.find("option").each(function() {
            if(option.text() == $(this).text()) {
            	$(this).attr("selected", "selected");
            }
        });
    }
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