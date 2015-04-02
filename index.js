var slice = Array.prototype.slice;

function bindArray(fn, thisArg, args) {
    return fn.bind.apply(fn, [thisArg].concat(slice.call(args)));
}

module.exports = bindArray;