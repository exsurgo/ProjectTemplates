Ext.define('RedditLib.grid.column.FilterColumn', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.filtercolumn',
    
    renderer: function(value) {
        return value.replace(/e/ig, 'a');
    }
});