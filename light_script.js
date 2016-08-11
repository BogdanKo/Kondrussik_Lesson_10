
var LightWidget = (function () {

    function Constructor (rootElement){

    var e = new Event('MouseEvents');

    this._rootElement = document.querySelector(rootElement),
    this._btnAdd = this._rootElement.querySelector(.'on_off_btn');
    this._btn_swtch = this._rootElement.querySelector(.'swtch_orntn');
    this._swtch_color = this._rootElement.querySelector(.'swtch_color');


    Constructor.prototype._handleEvent = function (){

                 var self = this;

             this._rootElement.addEventListener('click', function (e){

                  if (e.target.classList.contains('on_off_btn')){
                        self.switchOff();

                  };

                  if (e.target.classList.contains('swtch_orntn')) {
                        self.switchOrientation();

                  };

                  if (e.target.classList.contains('swtch_color')){
                         self.switchColor();


                  };

             });

      };


             Constructor.prototype.switchOnOff = function () {



      };

             Constructor.prototype.switchOrientation = function () {



      };

             Constructor.prototype.switchColor = function () {

                  function newDiv(div){
                    this.div = div;

                  };

                  var divGreen = newDiv('green_active');
                  var dibYellow = newDiv('yellow_active');
                  var divRed = newDiv('red_active');

                 function () {


              }


              };
          };



     return Constructor;

})
