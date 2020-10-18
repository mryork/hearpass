// THE ACCESSIBILITY PART OF THE PROJECT
/*
document.getElementById("phone-container").style.width = window.screen.width;
document.getElementById("phone-container").style.height = (window.screen.height)/2;

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