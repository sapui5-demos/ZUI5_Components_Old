jQuery.sap.require("sap.ui.commons.Button");
jQuery.sap.declare("sap.training.button.Component");

// new Component
sap.ui.core.UIComponent.extend("sap.training.button.Component", {

	metadata: {
		properties: {
			text: { type:"string" }
		}
	}
});

sap.training.button.Component.prototype.createContent = function() {
	this.oButton = new sap.ui.commons.Button(this.createId("btn"));
	return this.oButton;
};

/*
 * Overrides setText method of the component to set this text in the button
 */
sap.training.button.Component.prototype.setText = function(sText) {
	this.oButton.setText(sText);
	this.setProperty("text", sText);
	return this;
};
