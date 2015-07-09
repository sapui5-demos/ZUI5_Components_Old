// define a new (simple) UIComponent
jQuery.sap.declare("sap.training.products.Component");

// new Component
sap.ui.core.UIComponent.extend("sap.training.products.Component", {

	metadata: {
		name: "products",
		version: "0.1.0",
		includes: [],
		dependencies: {
			libs: ["sap.ui.commons"],
			components: []
		},

		rootView: "sap.training.products.view.Products",

		config: {
			resourceBundle: "i18n/messageBundle.properties",
			serviceConfig: {
				name: "DemoService",
				serviceUrl: "/destinations/ODATA_ORG/V2/OData/OData.svc/"
			}
		}

	},

	init: function() {

		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		var mConfig = this.getMetadata().getConfig();

		var sServiceUrl = mConfig.serviceConfig.serviceUrl;

		// Create and set domain model to the component
		var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl);
		this.setModel(oModel);

		// Always use absolute paths relative to our own component
		// (relative paths will fail if running in the Fiori Launchpad)
		var oRootPath = jQuery.sap.getModulePath("sap.training.products");

		// Set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: [oRootPath, mConfig.resourceBundle].join("/")
		});
		this.setModel(i18nModel, "i18n");

	}

});