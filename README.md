# Bind-Array

Utility function for binding an array of arguments to a function. Same as `apply` but without invoking the function.

## Usage

```javascript
    var bindArray = require("bind-array");

    function foo(a, b, c, d, e) {
        console.log(this, a, b, c, d, e)
    }

    var bound = bindArray(foo, "this arg", [1, 2, 3, 4, 5]);
    bound(); // prints "this arg", 1, 2, 3, 4, 5
}
```

## API

`bindArray(fn:function, thisArg:any, args:array or args:arguments) : function`