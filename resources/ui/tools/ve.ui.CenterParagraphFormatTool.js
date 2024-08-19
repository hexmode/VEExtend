/**
 * VEExtend's example CenterParagraph tool.
 *
 * @class
 * @extends vu.ui.FormatTool
 * @constructor
 * @param {OO.ui.ToolGroup} toolGroup
 * @param {Object} {config} Configuration options
 */
ve.ui.CenterParagraphFormatTool = function () {
	ve.ui.CenterParagraphFormatTool.super.apply( this, arguments );
};

OO.inheritClass( ve.ui.CenterParagraphFormatTool, ve.ui.FormatTool );

ve.ui.CenterParagraphFormatTool.static.name = 'centerparagraph';
ve.ui.CenterParagraphFormatTool.static.group = 'format';
ve.ui.CenterParagraphFormatTool.static.title =
	OO.ui.deferMsg( 'veextend-formatdropdown-format-centerparagraph' );
ve.ui.CenterParagraphFormatTool.static.format = { type: 'centerparagraph' };
ve.ui.CenterParagraphFormatTool.static.commandName = 'centerparagraph';

ve.ui.toolFactory.register( ve.ui.CenterParagraphFormatTool );
