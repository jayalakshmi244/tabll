sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/m/MessageBox","sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("pro3.project3.controller.View1", {
            onInit: function () {

            },
            ondblclick : function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView3");
            },
                /*var uname = this.getView().byId("input-b");
                var paswd = this.getView().byId("input-c");
                 var uvalue = uname.value;
                 var pvalue = paswd.value;
                 if(uvalue === pvalue){
                    MessageBox.success("login success");
                 } else{
                    MessageBox.error("login failed");
                 }*/
            
            onPress : function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2");
            }
            

            
        });
    });
