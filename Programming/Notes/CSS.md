# CSS:

## Layout: There are 4 layouts in css.
1. Normal layout: The default layout it's just content default flow.
    ```html
    <div>
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>Third paragraph</p>
    </div>
    ```
2. Float Layout: float attribute with left and right used with width for this layout.
    ```html
    <div class="container">
        <div class="left">Left content</div>
        <div class="right">Right content</div>
    </div>
    ```
    ```css
        .left {
            float: left;
            width: 50%;
        }
        .right {
            float: right;
            width: 50%;
        }
    ```


3. Flexbox layout: A more efficient way to layout, align, and distribute space among items in a container.

    ```html
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
    ```
    
    ```css
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .item {
        flex: 1;
    }
    ```
    Example: https://jsbin.com/josafus/1

4. Grid Layout: A two-dimensional layout system for the web. It lets you lay content out in rows and columns.  
    ```html
        <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        </div>
    ```
    ```css
        .container { 
            display: grid;
            grid-template-columns: repeat(3, 1fr)
            gap: 10px;
        }
    ```
    Example: https://output.jsbin.com/josafus/2

5. Responsive Layout: A layout that adjusts based on the screen size or device, typically achieved using media queries.
   ```css
        @media (max-width: 768px) {
            .container {
                flex-direction: column;
            }
        }
   ```   

## Opacity:
Opacity: Controls the transparency level of an element. Values from 0 to 1;

Makes the containing element opaque/transparent so that background element can be visible a little bit according to the opacity value. 1 no visible.

## z-index: 
z-index: Specifies the stack order of an element according to value. Max value containing element show on top.
It only works on positioned elements (absolute,relative,fixed, sticky) and flex items.

Example: https://jsbin.com/yomatuw/1

## position:
Position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).
1. static: Default value. Elements render in order, as they appear in the document flow
2. absolute: The element is positioned to it's parent element which is positioned (not static)
3. relative: The element is positioned relative to its normal position.
4. fixed: The element is positioned relative to the browser window. it's fixed position on the screen.
5. sticky: The element is positioned based on the user's scroll position.
A sticky element toggles between relative and fixed, depending on the scroll position.
