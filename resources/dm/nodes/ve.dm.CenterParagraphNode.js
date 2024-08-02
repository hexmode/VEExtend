/*!
 * VisualEditor DataModel CenterParagraphNode class.
 *
 * @copyright 2024 NicheWork, LLC
 * @license GPL-3-or-Greater
 */

/**
 * DataModel center paragraph node.
 *
 * @class
 * @extends ve.dm.ContentBranchNode
 *
 * @constructor
 * @param {Object} [element] Reference to element in linear model
 * @param {ve.dm.Node[]} [children]
 */

ve.dm.CenterParagraphNode = function () {
	// Parent constructor
	ve.dm.CenterParagraphNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.dm.CenterParagraphNode, ve.dm.ContentBranchNode );

/* Static Properties */

ve.dm.CenterParagraphNode.static.name = 'CenterParagraph';

// Only match divs with "ve-ce-centerparagraph"
ve.dm.CenterParagraphNode.static.matchTagNames = [ 'div' ];
ve.dm.CenterParagraphNode.static.matchFunction = function ( domElement ) {
	return domElement.classList.contains( 've-ce-centerparagraph' );
};

ve.dm.CenterParagraphNode.static.toDataElement = function () {
	return { type: this.name, attributes: { nodeType: 'center' } };
};

ve.dm.CenterParagraphNode.static.toDomElements = function ( _dataElement, doc ) {
	var element = doc.createElement( 'div' );

	element.classList.add( 've-ce-centerparagraph' );
	return [ element ];
};

ve.dm.modelRegistry.register( ve.dm.CenterParagraphNode );
