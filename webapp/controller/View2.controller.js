sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("pro3.project3.controller.View2", {
            onInit: function () {

            },
            onPress : function(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView1");
            }
        });
    });
