var lightWidget = (function (){

      var TEMPLATE = `<div class = 'wrapper'>

        <div class = 'buttons'>
           <button class= 'on_off_btn' type = 'button'>On/Off</button>
           <button class = 'swtch_orntn' type = 'button'>vert/horizontal</button>
       </div>

        <div class = 'light'>
              <div class = 'red'></div>
              <div class = 'yellow'></div>
              <div class = 'green'></div>
        </div>

  </div>`;

function Constructor (rootElement) {
     this._root = document.querySelector(rootElement);
     this.createLightwidget();
     this.addEvents();

}

   Constructor.prototype.createLightwidget = function () {
      var newTemplate = this.TEMPLATE;
      this._root.InnerHTML = newTemplate;
   };

   Constructor.prototype.addEvents = function (){

        this.onOffBtn = this._root.querySelector('on_off_btn'),
        this.switchColorBtn = this._root.querySelector('swtch_color');

                  onOffBtn.addEventListener('click', function (){
                           console.log("You've just pressed the onOff button");

                  });

                  switchColorBtn.addEventListener('click', function (){
                           console.log("You've clicked switcher button");

                  });

         };

   return Constructor;
})();
