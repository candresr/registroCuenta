Ext.define('EjemploExtJSCRUD.view.Viewport', {
	extend: 'Ext.Viewport',
	layout: 'fit',

	
	requires: ['EjemploExtJSCRUD.view.contacto.Grid',
			   'EjemploExtJSCRUD.view.contacto.Formulario' 
	],

	initComponent: function() {
		var me = this;
	
		Ext.apply(me, {
			items: [{
				xtype : 'contactogrid'
			}]
		});
	
		me.callParent(arguments);
	}
});