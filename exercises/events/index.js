// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.data = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if(this.data[eventName]){
      this.data[eventName].push(callback);
    }
    else {
      this.data[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if(this.data[eventName]) {
      for (const cb of this.data[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.data[eventName];
  }
}

module.exports = Events;
