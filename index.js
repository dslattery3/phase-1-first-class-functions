function receivesAFunction(callback) {
    return callback();
}
function returnsANamedFunction() {
    return function aNamedFunction() {
        console.log('Hi');
    }
}
function returnsAnAnonymousFunction(){
    return function () {
        console.log('Hi');
    }
}