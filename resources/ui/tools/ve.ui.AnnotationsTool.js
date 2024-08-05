/*!
 * VEExtend UserInterface InverseAnnotationTool class.
 *
 * @copyright 2024 NicheWork, LLC
 * @license GPL-3-or-later
 */

/**
 * UserInterface inverse tool.
 *
 * @class
 * @extends ve.ui.AnnotationTool
 * @constructor
 * @param {OO.ui.ToolGroup} toolGroup
 * @param {Object} [config] Configuration options
 */
ve.ui.InverseAnnotationTool = function () {
	ve.ui.InverseAnnotationTool.super.apply( this, arguments );
};
OO.inheritClass( ve.ui.InverseAnnotationTool, ve.ui.AnnotationTool );
ve.ui.InverseAnnotationTool.static.name = 'inverse';
ve.ui.InverseAnnotationTool.static.group = 'textStyle';
ve.ui.InverseAnnotationTool.static.icon = 'inverse';
ve.ui.InverseAnnotationTool.static.title =
	OO.ui.deferMsg( 'veextend-annotationbutton-inverse-tooltip' );
ve.ui.InverseAnnotationTool.static.annotation = { name: 'textStyle/inverse' };
ve.ui.InverseAnnotationTool.static.commandName = 'inverse';
ve.ui.toolFactory.register( ve.ui.InverseAnnotationTool );
