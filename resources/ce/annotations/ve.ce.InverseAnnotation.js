/*!
 * VisualEditor ContentEditable InverseAnnotation class.
 *
 * @copyright 2024 NicheWork, LLC
 * @license GPL-3-or-later
 */

/**
 * ContentEditable Inverse annotation.
 *
 * @class
 * @extends ve.ce.TextStyleAnnotation
 * @constructor
 * @param {ve.dm.InverseAnnotation} model Model to observe
 * @param {ve.ce.ContentBranchNode} [parentNode] Node rendering this annotation
 * @param {Object} [config] Configuration options
 */
ve.ce.InverseAnnotation = function () {
	// Parent constructor
	ve.ce.InverseAnnotation.super.apply( this, arguments );

	// DOM changes
	this.$element.addClass( 've-ce-inverseAnnotation' );
};

/* Inheritance */

OO.inheritClass( ve.ce.InverseAnnotation, ve.ce.TextStyleAnnotation );

/* Static Properties */

ve.ce.InverseAnnotation.static.name = 'textStyle/inverse';

ve.ce.InverseAnnotation.static.tagName = 'span';

/* Methods */

/**
 * @inheritdoc
 */
ve.ce.InverseAnnotation.prototype.initialize = function () {
	ve.ce.InverseAnnotation.super.prototype.initialize.call( this );

	this.$element.addClass( 've-ce-inverseAnnotation' );
};

/* Registration */

ve.ce.annotationFactory.register( ve.ce.InverseAnnotation );
