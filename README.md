# intro

The following is a piece of junk code I usually write. Then I end up using ESLint with the Airbnb style set of rules on it. And punished myself to fix all the inconsistencies.

## Eslint result

My initial code

```

class _Promise {
  constructor(user_exec_function) {
    user_exec_function( (data) => { this.resolveMethod(data) } );
    this.endUserThenFunction = null;
  }

  resolveMethod(data) {
    console.log(this.endUserThenFunction);
    this.endUserThenFunction(data);
  }

  then(endPassedThenFunction) {
    this.endUserThenFunction = endPassedThenFunction;
  }
}

function myTest() {
  return new _Promise(
     callBackForCallingThen => {
        setTimeout( ()=> {
            callBackForCallingThen("data")
        },3000);
     }
  );
}

myTest().then(data => {
  console.log('Result is ' + data);
});

```

The initial eslint test output:

```

   1:16  error    Block must not be padded by blank lines                                              padded-blocks
   3:14  error    Unexpected space before function parentheses                                         space-before-function-paren
   3:16  error    Identifier 'user_exec_function' is not in camel case                                 camelcase
   4:23  error    There should be no spaces inside this paren                                          space-in-parens
   4:61  error    Missing semicolon                                                                    semi
   4:64  error    There should be no spaces inside this paren                                          space-in-parens
   9:5   warning  Unexpected console statement                                                         no-console
  20:1   error    Expected indentation of 4 spaces but found 5                                         indent
  20:6   error    Expected parentheses around arrow function argument having a body with curly braces  arrow-parens
  21:1   error    Expected indentation of 6 spaces but found 8                                         indent
  21:19  error    There should be no spaces inside this paren                                          space-in-parens
  21:22  error    Missing space before =>                                                              arrow-spacing
  22:1   error    Expected indentation of 8 spaces but found 12                                        indent
  22:36  error    Strings must use singlequote                                                         quotes
  22:43  error    Missing semicolon                                                                    semi
  23:1   error    Expected indentation of 6 spaces but found 8                                         indent
  23:10  error    A space is required after ','                                                        comma-spacing
  24:1   error    Expected indentation of 4 spaces but found 5                                         indent
  24:7   error    Missing trailing comma                                                               comma-dangle
  28:15  error    Expected parentheses around arrow function argument having a body with curly braces  arrow-parens
  29:3   warning  Unexpected console statement                                                         no-console
  29:15  error    Unexpected string concatenation                                                      prefer-template

✖ 22 problems (20 errors, 2 warnings)
  19 errors and 0 warnings potentially fixable with the `--fix` option.

```

## Block must not be padded by blank lines

* [Removing blank line after the beginning of the block](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/95d1f4fc564cf4541efc5d2e86c50c0ede590a6d)

## Unexpected space before function parentheses  

* [Removing space before the function parenthesis](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/7cbfea26a1d8c7423256d3d66665414b5bf24846)

## Identifier 'user_exec_function' is not in camel case

* [Using camel case](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/da0acdb22b46a459b4fc5a2cf7ff0ec790bcc99f)

## There should be no spaces inside this paren

* [Removing spaces within the parenthesis of function call](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/8f5fa71662869e2e74ce7a026cbfa8a7e1d245cc)

## Missing semicolon

* [Adding semicolon within the code block for the arrow function passed as argument to the user function](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/63fe215f137c73a51f5509ea11bab5db2cbd5c57)

## Expected indentation of 4 spaces but found 5

* [Fixing Identation](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/89ee58f0ca27b02f9fdf5a57c0659c5721727221)

## Expected parentheses around arrow function argument having a body with curly braces

* [Inserting parenthesis to the argument](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/6c9b2dd8c12dda2a28b02ff201b3e9a10e921fea)

## space-in-parens again

* [No spaces](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/2a34de7cacd553eea9aa2237e1d903ee4995edea)

## There should be space before =>

* [arrow-spacing now ok](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/177be95555a9f9bf9ab0d8adb2fea6147de13145)

## Strings must use single quote

* [Fixing quotes](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/646959ce076790bdf0d5d90ab32ac26480db3b56)

## Adding semi colon

* [Missing semicolon](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/59f6fc95ef637e1679269cfadd71026a3b047ad7)

## Space after comma

* [A space is required after ','](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/e808c3042cfb7070fce6b1bd06f8696d457bc4d0)
´
## Fixing function to become condensed

* [Removing the necessity to the trailing comma](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/2ae69dbe739ffc4d6549e8445a75e630c419bd1c) but this is interesting one because, really, if a function could have more arguments, better is to keep a trailing cooma so that its better visualization in the git, always a new line

## Parenthesis to the argument of the arrow function

* [Fixing parentheis](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/647964a9a748ecf40b721284783807754e87c762)

## template

* [Unexpected string concatenation](https://github.com/taboca/doc-js-eslint-with-marcio-s-code/commit/faa6209bbe0f3d35a044003158d72cd9c01e1530)

## Code after

```
class _Promise {
  constructor(userExecutor) {
    userExecutor((data) => { this.resolveMethod(data); });
    this.endUserThenFunction = null;
  }

  resolveMethod(data) {
    console.log(this.endUserThenFunction);
    this.endUserThenFunction(data);
  }

  then(endPassedThenFunction) {
    this.endUserThenFunction = endPassedThenFunction;
  }
}

function myTest() {
  return new _Promise((callBackForCallingThen) => {
    setTimeout(() => {
      callBackForCallingThen('data');
    }, 3000);
  });
}

myTest().then((data = 'default') => {
  console.log(`Result is ${data}`);
});

```

## myPromise instead of _Promise

Also fixed _Promise since the Airbnb rule didn´t catch it.


```
class myPromise {
  constructor(userExecutor) {
    userExecutor((data) => { this.resolveMethod(data); });
    this.endUserThenFunction = null;
  }

  resolveMethod(data) {
    console.log(this.endUserThenFunction);
    this.endUserThenFunction(data);
  }

  then(endPassedThenFunction) {
    this.endUserThenFunction = endPassedThenFunction;
  }
}

function myTest() {
  return new myPromise((callBackForCallingThen) => {
    setTimeout(() => {
      callBackForCallingThen('data');
    }, 3000);
  });
}

myTest().then((data = 'default') => {
  console.log(`Result is ${data}`);
});

```
