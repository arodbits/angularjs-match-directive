Angularjs-Match-Directive
==========================

This is a custom match directive to validate whether two fields are equal or not. Useful for password match, usernames, and more.

IMPLEMENTATION
==========================
```
<input name="password" ng-model="password" type="password"/>

<input name="confirmPassword" ng-model="confirmPassword" type="password" match="password"/>

<div ng-show="registerForm.confirmPassword.$error.match">
	 The passwords don't match!
</div>
```

