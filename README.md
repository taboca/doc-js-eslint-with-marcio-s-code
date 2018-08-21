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

* [Using camel case]()
