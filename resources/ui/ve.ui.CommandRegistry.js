ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'CenterParagraph', 'format', 'convert',
		{
			args: [ 'CenterParagraph', { nodeType: 'center' } ],
			supportedSelections: [ 'linear' ]
		}
	)
);
