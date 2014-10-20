#Angularjs-Match-Directive

>By: Anthony Rodriguez. Visit: [Capitalofcode.com](http://www.capitalofcode.com)

A custom match directive to validate whether two fields are equal or not. Useful for password matching, usernames, and more.

##EXAMPLE
==========================

1. Add the arMatch module to your app. That way the *match* directive will be available throughout your application.

```javascript
   var yourApp = angular.module('yourAppMainModule',['arMatch']);
```
2. Insert the **match** directive attribute into the element you want to match with, for our case it is: *confirmPassword*.

 > **match="password"** refers to the model propiety *password* declared before, on the password element and it's the element we want to match against.

```html
<input name="password" ng-model="password" type="password"/>

<input match="password" name="confirmPassword" ng-model="confirmPassword" type="password" />
```
3. Now you can show a custom message.
```html
<div ng-show="registerForm.confirmPassword.$error.match">
	 Sorry but the passwords don't match!
</div>
```

