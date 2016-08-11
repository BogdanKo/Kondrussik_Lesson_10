
var LightWidget = (function () {

    function Constructor (rootElement){

    var e = new Event('MouseEvents');

    this._rootElement = document.querySelector(rootElement),
    this._btnAdd = this.rootElement.querySelector(.'on_off_btn');
    this._btn_swtch = this.rootElement.querySelector(.'swtch_orntn');
    this._swtch_color = this.rootElement.querySelector(.'swtch_color');


    Constructor.prototype._handleEvent = function (){



             this._rootElement.addEventListener('click', function (e){

                  if (e.target.classList.contains('')){


                  };

                  if (e.target.classList.contains('on_off_btn')) {


                  };

                  if (e.target.classList.contains('swtch_color')){



                  };

             });

      };


             Constructor.prototype.switchOnOff = function () {



          };

             Constructor.prototype.switchOrientation = function () {


          };

            Constructor.prototype.switchColor = function () {


          };



     return Constructor;

})
