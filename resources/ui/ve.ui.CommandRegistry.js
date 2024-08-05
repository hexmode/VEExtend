ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'CenterParagraph', 'format', 'convert',
		{
			args: [ 'CenterParagraph', { nodeType: 'center' } ],
			supportedSelections: [ 'linear' ]
		}
	)
);

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'inverse', 'annotation', 'toggle',
		{ args: [ 'textStyle/inverse' ], supportedSelections: [ 'linear', 'table' ] }
	)
);

if ( ve.ui.wikitextCommandRegistry ) {
	ve.ui.wikitextCommandRegistry.register(
		new ve.ui.Command(
			'inverse', 'mwWikitext', 'toggleWrapSelection',
			{
				args: [ '<span class="ve-ce-inverseAnnotation">', '</span>', OO.ui.deferMsg( 'veextend-annotationbutton-inverse-tooltip' ) ],
				supportedSelections: [ 'linear' ]
			}
		)
	);
}
