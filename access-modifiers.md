# Access Modifiers in TypeScript OOP

In TypeScript, access modifiers are used to control how you access class properties.

### Types of Access Modifiers

1.  `public` properties and methods can be accessed from anywhere.

2.  `private` properties and methods can only be accessed inside the
    class where where you delcare it.

3.  `protected` properties and methods can be accessed inside the class
    and its child classes who inherits them, but you can't access from outside the class.

4.  `readonly` properties can be assigned a value when they are declared.
    and after that you can't change it's value.

### Example

``` typescript
class User {
  public name: string;
  private password: string;
  protected role: string;
  readonly id: number;
  constructor(name: string, password: string, role: string, id: number) {
    this.name = name;
    this.password = password;
    this.role = role;
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }
}

class Admin extends User {
  getRole(): string {
    return this.role; // accessible because role is a protected property
  }
}

const user = new User("John", "12345", "user", 1);

console.log(user.name); // Works
// console.log(user.password); // Error: private
// console.log(user.role); // Error: protected
// user.id = 2; // Error: readonly
```

### When should you use them?

Use `public` when a property or method needs to be accessible from
outside the class.

Use `private` to keep implementation details inside the class, and
`protected` when child classes also need access.

Use `readonly` when a value should be set once and should not be changeable.
