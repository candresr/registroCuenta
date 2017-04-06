Ext.define('EjemploExtJSCRUD.store.Contactos', {
    extend: 'Ext.data.Store',
    model: 'EjemploExtJSCRUD.model.Contacto',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
    
    proxy: {
        type: 'ajax',
        url: 'EnvData',
        /*api: {
            descargar: 'EnvData'
        },*/
        reader: {
            type: 'json',
            root: 'contactos',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'contactos'
        }
    }
});