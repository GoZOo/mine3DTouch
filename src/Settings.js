var Level = function( dimensions, mines ) {

	this.dimensions = vec3.assign( vec3.create(), dimensions );
	this.mines = mines;

};

var Settings = {

	levels : {

		easy : new Level( 5, 10 ),
		medium : new Level( 7, 40 ),
		hard : new Level( 10, 99 ),
		custom : new Level( 10, 99 )

	},

	currentLevel : null,
	mode : 'classic', // [ 'classic', 'sweep' ]

	animations : false,
	recenter : false,

	changed : false,
	changedSize : false,

	setFromMenu : function() {

		this.currentLevel = Menu.level;
		this.mode = Menu.mode;

		this.animations = Menu.animations;
		this.recenter = Menu.recenter;

		this.changed = this.changedSize = false;

	}

};
