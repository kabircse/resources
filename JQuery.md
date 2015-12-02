*JQuery*

    Events:
        1. focus() ->The focus event occurs when an element gets focus (selected by a mouse click or by "tab-navigating" to it).
        2. blur() ->The blur event occurs when an element loses focus(assume blur means foucs out).
        3. change() ->The change event occurs when the value of an element has been changed (
           + select menus: the change event occurs when an option is selected. 
           + Text fields or text areas: the change event occurs when the field loses focus, after the content has been changed.)
        4. 
        
        9. delegate() ->The delegate attaches one or more event handlers for specified elements that are children of selected                elements and specifies a function to run when the events occur.
            + Event handlers attached using the delegate() method will work for both current and FUTURE elements (like a new                 element created by a script)
        9.event.currentTarget ->It is typically equal to this. Similar to event.delegateTarget.
            $("h1, h2, p").click(function(event){
                alert(event.currentTarget === this);
            });
        10. click() ->The click event occurs when an element is clicked. 
        11.dblclick() ->The dblclick event occurs when an element is double-clicked.(dblclick also generates a click event.)
