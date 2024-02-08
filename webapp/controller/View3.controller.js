sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("pro3.project3.controller.View3", {
            onInit: function () {
                //let oModel=new sap.ui.model.json.JSONMODEL("../model/det.json");
                //this.getView().setModel();

            },
            onPress : function(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView1");
            }
        });
    });
