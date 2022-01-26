const markdown = `# Rust Learning Notes
[The Rust Book](https://doc.rust-lang.org/book/)

## Syntax
- comments are made like this: // this is a comment in Rust
- semi-colons are mandatory

## Variables and Mutability
### Variables
- bind a value to a variable with the let keyword:
~~~Rust
let x = 5;
~~~
- variables are immutable by default, their value can't be re-assigned later
- to make a variable mutable, use the mut keyword:
~~~Rust
let mut x = 5;
~~~

### Constants
- bind a value to a constant with the const keyword:
~~~Rust
const c = 299792458;
~~~
- constants are always immutable, their value is not allowed to change
- must append their type when declaring, i.e.
~~~Rust
const THREE_HOURS_IN_SECONDS: u32 = 60 * 6 * 3;
~~~
- you can't use the mut keyword with constants
- convention is to use uppercase names for constants
- valid for the entire time the program runs, within the scope they were declared in
`;

export default markdown;
