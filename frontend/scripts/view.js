// THE ACCESSIBILITY PART OF THE PROJECT

console.log("JS connected");

/*
// Check if pointer events are supported.
if (window.PointerEvent) {
    // Add Pointer Event Listener
    swipeFrontElement.addEventListener('pointerdown', this.handleGestureStart, true);
    swipeFrontElement.addEventListener('pointermove', this.handleGestureMove, true);
    swipeFrontElement.addEventListener('pointerup', this.handleGestureEnd, true);
    swipeFrontElement.addEventListener('pointercancel', this.handleGestureEnd, true);
  } else {
    // Add Touch Listener
    swipeFrontElement.addEventListener('touchstart', this.handleGestureStart, true);
    swipeFrontElement.addEventListener('touchmove', this.handleGestureMove, true);
    swipeFrontElement.addEventListener('touchend', this.handleGestureEnd, true);
    swipeFrontElement.addEventListener('touchcancel', this.handleGestureEnd, true);
  
    // Add Mouse Listener
    swipeFrontElement.addEventListener('mousedown', this.handleGestureStart, true);
  }

  // Handle end gestures
this.handleGestureEnd = function(evt) {
    evt.preventDefault();
  
    if(evt.touches && evt.touches.length > 0) {
      return;
    }
  
    rafPending = false;
  
    // Remove Event Listeners
    if (window.PointerEvent) {
      evt.target.releasePointerCapture(evt.pointerId);
    } else {
      // Remove Mouse Listeners
      document.removeEventListener('mousemove', this.handleGestureMove, true);
      document.removeEventListener('mouseup', this.handleGestureEnd, true);
    }
  
    updateSwipeRestPosition();
  
    initialTouchPos = null;
  }.bind(this);
  */

  /*
 function enterHandler(ev) {
    // Process the pointerenter event
    alert("PASSWORDS");
    console.log("PASSWORDS")
  }
  function init() {
    let el = document.getElementsByClassName("item-password");
    el.ontouchmove = enterHandler;
  }
  */

 var selElem = null; // store the currently selected element
 var origBorder = "";    // stores the border settings of the selected element

 function OnTouchMove (event) {
    var posX = event.clientX, posY = event.clientY;

    var overElem = document.elementFromPoint (posX, posY);

    if (overElem && overElem.tagName === undefined) {   // in case of text nodes (Opera)
        overElem = overElem.parentNode; // the parent node will be selected
    }

    if (selElem) {  // if there was previously selected element
        if (selElem == overElem) {  // if mouse is over the previously selected element
            return; // does not need to update the selection border
        }
        selElem.style.border = origBorder;  // set border to the stored value
        selElem = null;
    }

    if (overElem && overElem.tagName.toLowerCase () != "body" && overElem.tagName.toLowerCase () != "html") {
        selElem = overElem; // stores the selected element
        origBorder = overElem.style.border; // stores the border settings of the selected element
        overElem.style.border = "3px solid red";    // draws selection border
    }

 }

 Window.addEventListener("touchmove", OnTouchMove (event))