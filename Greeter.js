(function (global, $) {

	/**
	 * This will be called by the application using the library
	 * @param {String} fullname
	 * @param {String} language
	 * @return {Object} Returns instance of Greeter.init function constructor
	 */
	var Greeter = function(fullname, language) {
		return new Greeter.init(fullname, language);
	}

	/**
	 * List of valid and accepted languages
	 * @type {Array}
	 */
	var languages = ['en', 'hi'];

	/**
	 * Default text for regular greeting based on language
	 * @type {Object}
	 */
	var greetings = {
		'en' : 'Hello',
		'hi' : 'Namaste'
	}

	/**
	 * Default text for formal greeting based on language
	 * @type {Object}
	 */
	var formalGreetings = {
		'en' : 'Welcome',
		'hi' : 'Aapka swagat hai'
	}

	/**
	 * Sets default name & language
	 * @param  {String} fullname
	 * @param  {String} language
	 */
	Greeter.init = function(fullname, language) {
		if (this.validate(language)) {
			this.fullname = fullname || '';
			this.language = language || 'en';
		}
	}

	Greeter.init.prototype = {

		/**
		 * Validates if the user has put a valid language
		 * @return {Boolean or Error}
		 */
		validate : function(language) {
			if (languages.indexOf(language || this.language) === -1) {
				throw "Invalid Language";
			} else {
				return true;
			}
		},

		/**
		 * Returns regular greeting message 
		 * @return {String} 
		 */
		greeting : function() {
			return greetings[this.language] + ' ' + this.fullname;
		},

		/**
		 * Returns formal greeting message
		 * @return {String}
		 */
		formalGreeting : function() {
			return formalGreetings[this.language] + ' ' + this.fullname;
		},

		/**
		 * Returns final greeting message 
		 * @param  {boolean} formal If true then formal message else regular
		 * @return {String}
		 */
		greet : function(formal) {
			if (this.validate()) {
				if (formal) {
					return this.formalGreeting();
				} else {
					return this.greeting();
				}
			}
		},

		/**
		 * Sets the language based on input
		 * @param {String} language
		 */
		setLang : function(language) {
			if (this.validate()) {
				this.language = language;
			}
			return this;
		},

		/**
		 * Sets text based on the language input
		 * @param {String} selector CSS selector that will be target to set text
		 * @param {Boolean} formal
		 * @return {Object} Scope will be return in order to make it eligible for chaining
		 */
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

	/**
	 * Expose to the global scope
	 * @type {Object}
	 */
	global.Greeter = global.g$ = Greeter;
})(typeof window !== 'undefined' ? window : this, $);