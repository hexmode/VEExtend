/*!
 * VisualEditor DataModel InverseAnnotation class.
 *
 * @copyright 2011-2020 VisualEditor Team and others; see http://ve.mit-license.org
 */

/**
 * DataModel inverse annotation.
 *
 * Represents `<b>` and `<strong>` tags.
 *
 * @class
 * @extends ve.dm.TextStyleAnnotation
 * @constructor
 * @param {Object} element
 */
ve.dm.InverseAnnotation = function () {
	// Parent constructor
	ve.dm.InverseAnnotation.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.dm.InverseAnnotation, ve.dm.TextStyleAnnotation );

/* Static Properties */

ve.dm.InverseAnnotation.static.name = 'textStyle/inverse';

ve.dm.InverseAnnotation.static.matchTagNames = [ 'span' ];
ve.dm.InverseAnnotation.static.matchFunction = function ( domElement ) {
	return domElement.classList.contains( 've-ce-inverseAnnotation' );
};

ve.dm.InverseAnnotation.static.toDomElements = function ( _dataElement, doc ) {
	var element = doc.createElement( 'span' );

	element.classList.add( 've-ce-inverseAnnotation' );
	return [ element ];
};
ve.dm.InverseAnnotation.static.description = OO.ui.deferMsg( 'visualeditor-annotationbutton-inverse-tooltip' );

/* Registration */

ve.dm.modelRegistry.register( ve.dm.InverseAnnotation );
