#Angularjs-Match-Directive

>By: Anthony Rodriguez. 

A custom match directive to validate whether two fields are equal or not. Useful for password matching, usernames, and more.
[DEMO](http://codepen.io/anthonyrod4/pen/mBoGH)

##INSTALLATION

If you'd like to use bower, you can install armatch using:
> bower install armatch --save

Then, include the downloaded dependency in your main app file.
```html
	<script src="armatch.js"></script>
```

##EXAMPLE

**Add the arMatch module to your Main App Module. That way the *match* directive will be available throughout your application**

```javascript
   var yourApp = angular.module('yourAppMainModule',['arMatch']);
```
**Insert the _match_ directive attribute into the element you want to match with, for our case it is: _confirmPassword_**

 > **match="password"** refers to the model propiety *password* declared before, on the password element and it's the element we want to match against.

```html
<input name="password" ng-model="password" type="password"/>

<input match="password" name="confirmPassword" ng-model="confirmPassword" type="password" />
```
**Now you can show a custom message**

```html
<div ng-show="registerForm.confirmPassword.$error.match">
	 Sorry but the passwords don't match!
</div>
```
Watch [DEMO on CODEPEN](http://codepen.io/anthonyrod4/pen/mBoGH)
