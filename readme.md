# PassCheck
## About
PassCheck is a Javascript library used to check the strength of passwords.

The checking function analyzes a password and outputs the results of
that analysis which include:
* Lowercase letters
* Uppercase letters
* Numerals
* Special characters
* Length
* Commonality (whether the password appears in the top 1000 password list)

## Tests
The `test.html` and `tests.js` files are not necessary for the operation of
PassCheck and are only included as unit tests. These run with QUnit.

## Documentation
### PassCheck.check
`PassCheck.check(String)` will check a string password. This will throw an error
if the input is not a string.

The return value will be an object in this format:
```
{
  lower: 10,
  upper: 0,
  num: 0,
  special: 2,
  length: 12,
  common: false
}
```
Each of the `lower`, `upper`, `num`, `special` properties shows how many
characters in the password are of each type. The `length` property shows the
length of the password. The `common` property is a boolean which will show
whether or not the password entered is within the top 1000 password list, which
contains over 90% of all entered passwords.
