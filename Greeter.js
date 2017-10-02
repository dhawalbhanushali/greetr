(function (global, $) {
	var Greeter = function(fullname, language) {
		return new Greeter.init(fullname, language);
	}

	var languages = ['en', 'hi'];

	var greetings = {
		'en' : 'Hello',
		'hi' : 'Namaste'
	}

	var formalGreetings = {
		'en' : 'Welcome',
		'hi' : 'Aapka swagat hai'
	}

	Greeter.init = function(fullname, language) {
		this.fullname = fullname || '';
		this.language = language || 'en';
	}

	Greeter.init.prototype = {

		validate : function() {
			if (languages.indexOf(this.language) === -1) {
				throw "Invalid Language";
			} else {
				return true;
			}
		},

		greeting : function() {
			return greetings[this.language] + ' ' + this.fullname;
		},

		formalGreeting : function() {
			return formalGreetings[this.language] + ' ' + this.fullname;
		},

		greet : function(formal) {
			if (this.validate()) {
				if (formal) {
					return this.formalGreeting();
				} else {
					return this.greeting();
				}
			}
		},

		setLang : function(language) {
			if (this.validate()) {
				this.language = language;
			}
			return this;
		},

		setText : function (selector, formal) {
			if (!$) {
				throw 'jQuery not present';
			}

			if (!selector) {
				throw 'Selector not present';
			}

			$(selector).text(this.greet(formal));

			return this;
		}
	};

	global.Greeter = global.g$ = Greeter;
})(typeof window !== 'undefined' ? window : this, $);