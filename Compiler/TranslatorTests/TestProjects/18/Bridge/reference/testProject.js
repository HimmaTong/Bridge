    Bridge.define("Options3", {
        $literal: true,
        ctors: {
            ctor: function () {
                var $this = {};
                $this.$getType = function () { return Options3; };
                (function (){
                    this.id = null;
                }).call($this);
                return $this;
            }
        }
    });
