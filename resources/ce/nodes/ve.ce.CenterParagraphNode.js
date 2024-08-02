/*!
 * VisualEditor ContentEditable CenterParagraphNode class.
 *
 * @copyright 2024 NicheWork, LLC
 * @license GPL-3-or-greater
 */

/**
 * ContentEditable center paragraph node.
 *
 * @class
 * @extends ve.ce.ContentBranchNode
 * @constructor
 * @param {ve.dm.CenterParagraphNode} model Model to observe
 * @param {Object} [config] Configuration options
 */
ve.ce.CenterParagraphNode = function () {
	ve.ce.CenterParagraphNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ce.CenterParagraphNode, ve.ce.ContentBranchNode );

/* Static Properties */

ve.ce.CenterParagraphNode.static.name = 'CenterParagraph';
ve.ce.CenterParagraphNode.static.tagName = 'div';

/* Methods */

/**
 * @inheritdoc
 */
ve.ce.CenterParagraphNode.prototype.initialize = function () {
	ve.ce.CenterParagraphNode.super.prototype.initialize.call( this );

	this.$element.addClass( 've-ce-centerparagraph' );
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CenterParagraphNode );
