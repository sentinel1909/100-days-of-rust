const markdown = `# Rust Learning Notes
[The Rust Book](https://doc.rust-lang.org/book/)

## Data Types
- computers represent data in the binary format
- the Rust language gives us data types to abstract away the need to think about representing the data in our problems in a binary format
- Rust is a statically typed language, meaning it must know the types of all data at compile time
- two core data types: scalar and compound

### Scalar Data Types
- integer, double, floating point, boolean, string and character

### Compound Data Types
- tuples and arrays

## Syntax
- comments are made like this:
~~~Rust
// This is a comment in Rust.
~~~
- semi-colons are mandatory

## Variables, Constants, Mutability, and Shadowing

- bind a value to a variable with the let keyword:
~~~Rust
let x = 5;
~~~
- variables are immutable by default, their value can't be re-assigned later
- to make a variable mutable, use the mut keyword:
~~~Rust
let mut x = 5;
~~~
- variables can be shadowed, allowing re-use of the same name, which allows for transformations of a variable value
~~~Rust
let x = 10;
let x = x + 5;      // shadow the variable named x and add 5 to it's value
~~~

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
