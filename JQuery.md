*JQuery*

    Events:
        1. focus() ->The focus event occurs when an element gets focus (selected by a mouse click or by "tab-navigating" to it).
        2. blur() ->The blur event occurs when an element loses focus(assume blur means foucs out).
        3. change() ->The change event occurs when the value of an element has been changed (
           + select menus: the change event occurs when an option is selected. 
           + Text fields or text areas: the change event occurs when the field loses focus, after the content has been changed.)
        4. event.stopPropagation() ->is used to make sure the event doesn't bubble up the chain on its child or parent element.
        5. event.preventDefault() ->is used to stop the normal action of an element,a link or on a submit button would stop the              form being submitted, which is a browser default action.
        5. event.target ->which dom element is clicked exactly. used as: event.target.nodeName
        6. focus(),focusin(),focusout(),blur The focusin and focusout events bubble(with parent or child occur event),the focus
        and blur events doesn't. That means that you can use the focusin and focusout on the parent element of a form field.
        7. keydown() ->when a keyboard key is pressed down.It has more
            a. keydown() ->The key is on its way down. on the way of down.
            b. keypress() ->The key is pressed down
            c. keyup() ->The key is released.
        8. mousedown() ->When the mouse button is pressed.
            a. mouseup() -> When mouse pressed is released.
            mouseenter() -> When mouse pointer is hovered on a element.
            mouseleave() ->when the mouse pointer leaves
            mouseover() -> like mouseenter, but it occur event parent to child, where mouseenter event only exact element.
            mouseout() ->When mouse pointer leaves any child elements as well as the selected element.
            mousemove() ->Get the position of the mouse pointer within a page
        9. event.result -> Contains the last/previous value returned by same element.
        10. off() ->Remove the event for a element.
        11. on() -> Add the event with a element.
        12. trigger() -> Trigger(add) or occur an event of selected element
        
        13. delegate() ->The delegate attaches one or more event handlers for specified elements that are children of selected                elements and specifies a function to run when the events occur.
            + Event handlers attached using the delegate() method will work for both current and FUTURE elements (like a new                 element created by a script)
        14. event.currentTarget ->It is typically equal to this. Similar to event.delegateTarget.
            $("h1, h2, p").click(function(event){
                alert(event.currentTarget === this);
            });
        15. click() ->The click event occurs when an element is clicked. 
        16. dblclick() ->The dblclick event occurs when an element is double-clicked.(dblclick also generates a click event.)
