// Riggin some famo.us deps
famous.core.famous;


Engine = famous.core.Engine;
Surface = famous.core.Surface;


/*======================================
=            Splash & Login            =
======================================*/

// Still getting my feet wet with Famous, until then,
// here is a concept

Meteor.startup(function() {
	var mainContext = Engine.createContext();

	var splash = new Surface({
		properties: {
			backgroundColor: "#gag",
			//Image via NPR: http://www.npr.org/2014/01/29/266757131/welcome-to-oil-country-a-modern-day-gold-rush-in-north-dakota
			backgroundImage: "url('http://www.npr.org/assets/multimedia/2014/01/ND/horseheads_dusk.gif')",
			backgroundSize: "cover"
		}
	});

	mainContext.add(splash);
});

/*-----  End of Splash & Login  ------*/
