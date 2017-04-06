Ext.define('EjemploExtJSCRUD.view.contacto.Formulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.contactoform',
 
    requires: ['Ext.form.Panel','Ext.form.field.Text'],
 
    title : 'Editar/Crear Registro',
    layout: 'fit',
    autoShow: true,
    width: 280,
     
    iconCls: 'icon-user',
  
 
    initComponent: function() {
        this.items = [{
        	xtype: 'form',
            padding: '5 5 0 5',
            border: false,
            style: 'background-color: #fff;',
                 
            fieldDefaults: {
            	anchor: '100%',
                labelAlign: 'left',
                allowBlank: false,
                combineErrors: true,
                msgTarget: 'side'
            },
            items: [{
            	xtype: 'combobox',
                name: 'id',
                fieldLabel: 'Tipo id',
                store: ['Cedula de Ciudadania', 'Cedula de Extranjeria', 'Tarjeta de identidad', 'NIT '] 	
            },{
                xtype: 'textfield',
                name: 'numero',
                fieldLabel: 'Numero'
            },{
                xtype: 'combobox',
                name: 'banco',
                fieldLabel: 'Banco',
                store: ['Banco de Bogota', 'Bancolombia', 'Davivienda', 'Banco Popular','Caja Social']
            },{
                xtype: 'textfield',
                name: 'cuenta',
                fieldLabel: 'Numero Cuenta'
            },{
                xtype: 'combobox',
                name: 'tipo',
                fieldLabel: 'Tipo Cuenta',
                store: ['Cuenta Ahorros', 'Cuenta Corriente', 'Credito', 'Banco Popular','Tarjeta de credito']
            }]
        }];
         
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id: 'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                text: 'Guardar',
                action: 'guardar'
            },{
                iconCls: 'icon-reset',
                text: 'Cancelar',
                scope: this,
                handler: this.close
            }]
        }];
 
        this.callParent(arguments);
    }
});