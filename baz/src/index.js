
import bar from "@packages/bar";
import foo from "@packages/foo";
/**
 * @param {number} n
 * @returns {number}
 */
export function baz(n) {
    bar.hello.hello(1);
    foo.foo(1);
    return n+1;
}




