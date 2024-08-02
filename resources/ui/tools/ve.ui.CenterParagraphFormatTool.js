/**
 * Center tool.
 */
ve.ui.CenterParagraphFormatTool = function () {
	ve.ui.CenterParagraphFormatTool.super.apply( this, arguments );
};

OO.inheritClass( ve.ui.CenterParagraphFormatTool, ve.ui.FormatTool );

ve.ui.CenterParagraphFormatTool.static.name = 'CenterParagraph';
ve.ui.CenterParagraphFormatTool.static.group = 'format';
ve.ui.CenterParagraphFormatTool.static.title =
	OO.ui.deferMsg( 'veextend-centerparagraph-tooltip' );
ve.ui.CenterParagraphFormatTool.static.format = {
	type: 'CenterParagraph', // refers to the custom element
	attributes: { nodeType: 'center' }
};
ve.ui.CenterParagraphFormatTool.static.commandName = 'CenterParagraph';

ve.ui.toolFactory.register( ve.ui.CenterParagraphFormatTool );
