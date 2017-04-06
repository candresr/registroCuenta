Ext.define('EjemploExtJSCRUD.view.contacto.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.contactogrid',
 
    requires: ['Ext.toolbar.Paging'],
 
    iconCls: 'icon-grid',
 
    title: 'Registro Cuenta',
    store: 'Contactos',
 
    columns: [{
        header: "Tipo Id",
        width: 170,
        flex:1,
        dataIndex: 'id'
    },{
        header: "Numero",
        width: 160,
        flex:1,
        dataIndex: 'numero'
    },{
        header: "Banco",
        width: 170,
        flex:1,
        dataIndex: 'banco'
    },{
        header: "Numero Cuenta",
        width: 170,
        flex:1,
        dataIndex: 'cuenta'
    },{
        header: "Tipo Cuenta",
        width: 170,
        flex:1,
        dataIndex: 'tipo'
    }],
 
    initComponent: function() {
    	this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                text: 'Agregar',
                action: 'agregar'
            },{
                iconCls: 'icon-delete',
                text: 'Descargar Archivo',
                action: 'descargar'
            }]
        }];
     
        this.callParent(arguments);
    }
});