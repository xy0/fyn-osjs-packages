/*!
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2016, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */
(function(Application, GUI, Dialogs, Utils, API, VFS) {
  'use strict';

  /////////////////////////////////////////////////////////////////////////////
  // APPLICATION
  /////////////////////////////////////////////////////////////////////////////

  function IFrameApplicationJSONEditor(args, metadata) {
    Application.apply(this, ['IFrameApplicationJSONEditor', args, metadata, {
      src: 'app/index.html',
      title: metadata.name,
      icon: metadata.icon,
      width: 640,
      height: 480,
      allow_resize: true,
      allow_restore: true,
      allow_maximize: true
    }]);
  }

  //   // If you send `message` it gets caught by the custom defined event
  // this.postMessage({message: 'something', bar: 'baz'});

  // // But not this. It will get caught by the global one
  // this.postMessage({zazz: 'jazz'});



  IFrameApplicationJSONEditor.prototype = Object.create(Application.prototype);




    // To check messages from iframe
  IFrameApplicationJSONEditor.prototype.onPostMessage = function(message, ev) {
    console.warn(message);


    VFS.read("home:///asdf.txt", function(err, res) {
      alert("eep");
      if ( err ) {
        alert(err);
        return;
      }

      alert(res); // The file data
    }, {/* options */});


    // app._api(methodName, methodArgs, function(error, result) { // or `this._app`
    //   if ( error ) {
    //     alert('An error occured: ' + error);
    //     return;
    //   }

    //   // Or else do something with 'result'
    //   // In this example it should return {foo: bar}
    //   alert(result.foo);
    // });

    
  }


  /////////////////////////////////////////////////////////////////////////////
  // EXPORTS
  /////////////////////////////////////////////////////////////////////////////

  OSjs.Applications = OSjs.Applications || {};
  OSjs.Applications.IFrameApplicationJSONEditor = OSjs.Applications.IFrameApplicationJSONEditor || {};
  OSjs.Applications.IFrameApplicationJSONEditor.Class = Object.seal(IFrameApplicationJSONEditor);

})(OSjs.Helpers.IFrameApplication, OSjs.GUI, OSjs.Dialogs, OSjs.Utils, OSjs.API, OSjs.VFS);
