// define a new (simple) UIComponent
jQuery.sap.declare("sap.training.products_with_descriptor.Component");

// new Component
sap.ui.core.UIComponent.extend("sap.training.products_with_descriptor.Component", {

	metadata: {

		manifest: "json"

	},

	init: function() {

		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

        /*   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //   Available as of version 1.30:
        //   If a model is entered in sap.ui5/models in the manifest.json file, SAPUI5 creates the model automatically
        //   and the coding for model creation inside the app can be removed.
        */   
        
        
		//  getting complete manifest from Component metadata
		//	var mAppData = this.getMetadata().getManifest();

		// ... or getting a namespace
		var mAppData = this.getMetadata().getManifestEntry("sap.app");

		var sServiceUrl = mAppData.dataSources.DemoService.uri;

		// Create and set domain model to the component
		var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl);
		this.setModel(oModel);

		// Always use absolute paths relative to our own component
		// (relative paths will fail if running in the Fiori Launchpad)
		var oRootPath = jQuery.sap.getModulePath("sap.training.products_with_descriptor");

		// Set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: oRootPath + "/" + mAppData.i18n
		});
		this.setModel(i18nModel, "i18n");

	}

});