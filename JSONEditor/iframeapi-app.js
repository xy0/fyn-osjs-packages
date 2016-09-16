  // If you send `message` it gets caught by the custom defined event
  this.postMessage({message: 'something', bar: 'baz'});

  // But not this. It will get caught by the global one
  this.postMessage({zazz: 'jazz'});

  // To check messages from iframe
  ApplicationFooBar.prototype.onPostMessage = function(message, ev) {
    console.warn(message.cool); // === "Awesome"
};