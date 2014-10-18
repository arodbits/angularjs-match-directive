/*Author: Anthony Rodriguez
https://github.com/anthony2727
Project: Match directive
2014
MTI LICENCE
*/

// Creating yourMainModule module
var app = angular.module('yourMainModule', []);
// Adding it to your main module
// var app = angular.module('yourMainModule');	


// Match directive
/*
Match directive will be using the $watch function to listen to any model mutation (changes to the model), 
comparing the values of field "A" and the second field "B" (See example), if the values matches, 
then the watchExpression will return true, passing the result to the listener function. Note that the listener
will be called ONLY if the current value of watchExpression is not equal to the call of the privious watchExpression.
 
In our example, match will be an attribute contained in the "B" element. 
The value passed to match references to the model "A" deffined before.
*/
app.directive('match', function(){
	return {
		require : 'ngModel',
		restrict : 'A', // This means: Attribute
		scope : {
			match : "="
		},
		link : function(scope, element, attr, ctrl){

			var watchExpression = function(){
				// Both fields are blank.
				var blank = angular.isUndefined(scope.match) && angular.isUndefined(ctrl.$modelValue);
				//-Defining the validity--
				// True when the form is initially blank.
				// True when the values are equal
				// Treu when the value of the models are different and the value of confirmPassword == ""
				// Otherwise it's not valid and the match $error will be thrown
				return (blank) || ctrl.$modelValue == scope.match || ctrl.$modelValue != scope.match && (ctrl.$modelValue=="");
			};
			// Listener is called ONLY when the value of the current watchExpression and the previous call 
			// to watchExpression are not equal.

			var listener = function(itMatch){
				ctrl.$setValidity('match', itMatch);
			};

			scope.$watch(watchExpression, listener);
		}
	};
});