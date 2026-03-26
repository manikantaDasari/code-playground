import { type Concept, type InsertConcept } from "./schema";

export interface IStorage {
  getConcepts(): Promise<Concept[]>;
  getConcept(id: string): Promise<Concept | undefined>;
  createConcept(concept: InsertConcept): Promise<Concept>;
}

export class MemStorage implements IStorage {
  private concepts: Map<string, Concept>;

  constructor() {
    this.concepts = new Map();
    this.initializeData();
  }

  private initializeData() {
    const defaultConcepts: Concept[] = [
      {
        id: "variables",
        title: "Variables - Declaration and Assignment",
        description: "Learn how to declare and assign values to variables in both languages",
        difficulty: "beginner",
        icon: "fas fa-cube",
        iconColor: "bg-blue-100",
        examples: {
          javascript: {
            language: "javascript",
            code: `// Variable declaration in JavaScript
// Variables can be declared using var, let, or const

// Using let for variables that can change
let userName = "Alice";           // String variable
let userAge = 25;                 // Number variable
let isActive = true;              // Boolean variable

// Using const for constants (cannot be reassigned)
const PI = 3.14159;              // Mathematical constant
const APP_NAME = "CodePlayground"; // Application name

// Variables can be reassigned (except const)
userName = "Bob";                 // Reassigning the variable
userAge = userAge + 1;           // Incrementing the age

// Dynamic typing - variables can hold different types
let dynamicVar = "Hello";        // String
dynamicVar = 42;                 // Now it's a number
dynamicVar = false;              // Now it's a boolean

console.log(userName, userAge, isActive);`,
            comments: [
              "let and const have block scope",
              "var has function scope (legacy)",
              "Dynamic typing allows type changes",
              "Semicolons are optional but recommended"
            ]
          },
          python: {
            language: "python",
            code: `# Variable declaration in Python
# Python uses dynamic typing and simple assignment

# Variable assignment (no declaration keyword needed)
user_name = "Alice"           # String variable
user_age = 25                 # Integer variable
is_active = True              # Boolean variable (note capital T/F)

# Constants by convention (uppercase, but not enforced)
PI = 3.14159                  # Mathematical constant
APP_NAME = "CodePlayground"   # Application name

# Variables can be reassigned
user_name = "Bob"             # Reassigning the variable
user_age = user_age + 1       # Incrementing the age

# Dynamic typing - variables can hold different types
dynamic_var = "Hello"         # String
dynamic_var = 42              # Now it's an integer
dynamic_var = False           # Now it's a boolean

print(user_name, user_age, is_active)`,
            comments: [
              "No declaration keywords needed",
              "snake_case naming convention",
              "Boolean values are True and False (capitalized)",
              "No semicolons required"
            ]
          }
        },
        comparison: {
          javascript: [
            "Explicit declaration keywords (<strong>let</strong>, <strong>const</strong>)",
            "camelCase naming convention",
            "Semicolons for statement termination",
            "Block-scoped variables with let/const"
          ],
          python: [
            "Simple assignment without keywords",
            "snake_case naming convention", 
            "Indentation for code blocks",
            "More readable and concise syntax"
          ]
        }
      },
      {
        id: "functions",
        title: "Functions - Definition and Calling",
        description: "Understand how to create and use functions in JavaScript and Python",
        difficulty: "beginner",
        icon: "fas fa-code",
        iconColor: "bg-green-100",
        examples: {
          javascript: {
            language: "javascript",
            code: `// Function declaration in JavaScript
// Multiple ways to define functions

// Function Declaration
function greetUser(name) {
    return "Hello, " + name + "!";
}

// Function Expression
const addNumbers = function(a, b) {
    return a + b;
};

// Arrow Function (ES6+)
const multiplyNumbers = (x, y) => {
    return x * y;
};

// Arrow function with implicit return
const squareNumber = num => num * num;

// Function with default parameters
function createMessage(text = "Default message", urgent = false) {
    return urgent ? text.toUpperCase() : text;
}

// Calling functions
console.log(greetUser("Alice"));
console.log(addNumbers(5, 3));
console.log(multiplyNumbers(4, 6));
console.log(squareNumber(7));
console.log(createMessage("Hello", true));`,
            comments: [
              "Multiple syntax options for functions",
              "Arrow functions provide concise syntax",
              "Default parameters supported",
              "Functions are first-class objects"
            ]
          },
          python: {
            language: "python",
            code: `# Function definition in Python
# Uses def keyword for all functions

# Basic function definition
def greet_user(name):
    return f"Hello, {name}!"

# Function with multiple parameters
def add_numbers(a, b):
    return a + b

# Function with default parameters
def create_message(text="Default message", urgent=False):
    return text.upper() if urgent else text

# Function with multiple return values
def get_user_info():
    name = "Alice"
    age = 25
    return name, age  # Returns tuple

# Function with *args and **kwargs
def flexible_function(*args, **kwargs):
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")
    return len(args) + len(kwargs)

# Calling functions
print(greet_user("Alice"))
print(add_numbers(5, 3))
print(create_message("Hello", True))
name, age = get_user_info()  # Tuple unpacking
print(f"{name} is {age} years old")`,
            comments: [
              "def keyword for all function definitions",
              "f-strings for string formatting",
              "Multiple return values using tuples",
              "*args and **kwargs for flexible parameters"
            ]
          }
        },
        comparison: {
          javascript: [
            "Multiple function syntax options",
            "Arrow functions for concise code",
            "Hoisting with function declarations",
            "this binding varies by syntax"
          ],
          python: [
            "Single <strong>def</strong> keyword syntax",
            "Clear and readable function definitions",
            "Tuple unpacking for multiple returns",
            "Flexible parameter handling with *args/**kwargs"
          ]
        }
      },
      {
        id: "conditionals",
        title: "Conditional Statements - If/Else Logic",
        description: "Master conditional logic and decision-making in both languages",
        difficulty: "beginner",
        icon: "fas fa-code-branch",
        iconColor: "bg-purple-100",
        examples: {
          javascript: {
            language: "javascript",
            code: `// Conditional statements in JavaScript
// if, else if, else structure

let score = 85;
let grade;

// Basic if-else statement
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// Ternary operator (conditional operator)
let status = score >= 60 ? "Pass" : "Fail";

// Switch statement
let day = "Monday";
let message;

switch (day) {
    case "Monday":
        message = "Start of the week";
        break;
    case "Friday":
        message = "TGIF!";
        break;
    case "Saturday":
    case "Sunday":
        message = "Weekend!";
        break;
    default:
        message = "Regular day";
}

// Logical operators
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Can drive");
} else {
    console.log("Cannot drive");
}

console.log(\`Grade: \${grade}, Status: \${status}\`);`,
            comments: [
              "Curly braces required for blocks",
              "Ternary operator for concise conditionals",
              "Switch statement with break statements",
              "Logical operators: &&, ||, !"
            ]
          },
          python: {
            language: "python",
            code: `# Conditional statements in Python
# if, elif, else structure

score = 85

# Basic if-elif-else statement
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

# Conditional expression (ternary equivalent)
status = "Pass" if score >= 60 else "Fail"

# Multiple conditions
age = 25
has_license = True

if age >= 18 and has_license:
    print("Can drive")
else:
    print("Cannot drive")

# Checking membership
valid_grades = ["A", "B", "C", "D", "F"]
if grade in valid_grades:
    print(f"Valid grade: {grade}")

# Checking for None/empty values
user_input = ""
if not user_input:
    print("No input provided")

# Match statement (Python 3.10+)
day = "Monday"
match day:
    case "Monday":
        message = "Start of the week"
    case "Friday":
        message = "TGIF!"
    case "Saturday" | "Sunday":
        message = "Weekend!"
    case _:
        message = "Regular day"

print(f"Grade: {grade}, Status: {status}")`,
            comments: [
              "Indentation defines code blocks",
              "elif instead of else if",
              "Conditional expressions for simple cases",
              "Match statement for pattern matching (3.10+)"
            ]
          }
        },
        comparison: {
          javascript: [
            "Curly braces <strong>{}</strong> define code blocks",
            "Switch statement with break clauses",
            "Ternary operator <strong>condition ? true : false</strong>",
            "Logical operators: <strong>&&</strong>, <strong>||</strong>, <strong>!</strong>"
          ],
          python: [
            "Indentation defines code blocks",
            "<strong>elif</strong> instead of else if",
            "Conditional expressions: <strong>value if condition else other</strong>",
            "Logical operators: <strong>and</strong>, <strong>or</strong>, <strong>not</strong>"
          ]
        }
      },
      {
        id: "loops",
        title: "Loops - Iteration and Control Flow",
        description: "Learn different loop types and iteration patterns",
        difficulty: "beginner",
        icon: "fas fa-sync-alt",
        iconColor: "bg-orange-100",
        examples: {
          javascript: {
            language: "javascript",
            code: `// Loops in JavaScript
// for, while, do-while, for...in, for...of

// Traditional for loop
console.log("Traditional for loop:");
for (let i = 0; i < 5; i++) {
    console.log(\`Count: \${i}\`);
}

// While loop
console.log("\\nWhile loop:");
let count = 0;
while (count < 3) {
    console.log(\`While count: \${count}\`);
    count++;
}

// Do-while loop (executes at least once)
console.log("\\nDo-while loop:");
let num = 0;
do {
    console.log(\`Do-while: \${num}\`);
    num++;
} while (num < 2);

// for...in loop (iterates over object properties)
console.log("\\nfor...in loop:");
const person = { name: "Alice", age: 25, city: "NYC" };
for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

// for...of loop (iterates over iterable values)
console.log("\\nfor...of loop:");
const fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(\`Fruit: \${fruit}\`);
}

// Array methods for iteration
console.log("\\nArray methods:");
fruits.forEach((fruit, index) => {
    console.log(\`\${index}: \${fruit}\`);
});

// Break and continue
console.log("\\nBreak and continue:");
for (let i = 0; i < 10; i++) {
    if (i === 3) continue; // Skip 3
    if (i === 7) break;    // Stop at 7
    console.log(i);
}`,
            comments: [
              "Multiple loop types available",
              "for...in for object properties",
              "for...of for iterable values",
              "Array methods like forEach for functional style"
            ]
          },
          python: {
            language: "python",
            code: `# Loops in Python
# for, while loops with range and iterables

# for loop with range
print("For loop with range:")
for i in range(5):
    print(f"Count: {i}")

# for loop with range (start, stop, step)
print("\\nFor loop with range(start, stop, step):")
for i in range(2, 10, 2):  # Even numbers from 2 to 8
    print(f"Even number: {i}")

# While loop
print("\\nWhile loop:")
count = 0
while count < 3:
    print(f"While count: {count}")
    count += 1

# for loop with lists
print("\\nFor loop with list:")
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"Fruit: {fruit}")

# for loop with enumerate (index and value)
print("\\nFor loop with enumerate:")
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# for loop with dictionary
print("\\nFor loop with dictionary:")
person = {"name": "Alice", "age": 25, "city": "NYC"}
for key, value in person.items():
    print(f"{key}: {value}")

# List comprehension (Pythonic way)
print("\\nList comprehension:")
squares = [x**2 for x in range(5)]
print(f"Squares: {squares}")

# Break and continue
print("\\nBreak and continue:")
for i in range(10):
    if i == 3:
        continue  # Skip 3
    if i == 7:
        break     # Stop at 7
    print(i)`,
            comments: [
              "for loops work with any iterable",
              "range() function for numeric sequences",
              "enumerate() for index and value pairs",
              "List comprehensions for concise iteration"
            ]
          }
        },
        comparison: {
          javascript: [
            "Traditional C-style <strong>for</strong> loops",
            "<strong>for...in</strong> for object properties",
            "<strong>for...of</strong> for iterable values",
            "Array methods like <strong>forEach</strong>, <strong>map</strong>, <strong>filter</strong>"
          ],
          python: [
            "<strong>for</strong> loops work with any iterable",
            "<strong>range()</strong> function for numeric sequences",
            "<strong>enumerate()</strong> for index-value pairs",
            "List comprehensions for concise iteration"
          ]
        }
      },
      {
        id: "arrays",
        title: "Arrays and Lists - Data Collections",
        description: "Work with ordered collections of data in both languages",
        difficulty: "beginner",
        icon: "fas fa-list",
        iconColor: "bg-red-100",
        examples: {
          javascript: {
            language: "javascript",
            code: `// Arrays in JavaScript
// Dynamic arrays with various methods

// Array creation
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true, null];

// Array methods - Adding elements
fruits.push("grape");           // Add to end
fruits.unshift("mango");        // Add to beginning
console.log("After adding:", fruits);

// Array methods - Removing elements
let lastFruit = fruits.pop();   // Remove from end
let firstFruit = fruits.shift(); // Remove from beginning
console.log(\`Removed: \${firstFruit}, \${lastFruit}\`);

// Array methods - Finding elements
let index = fruits.indexOf("banana");
let found = fruits.includes("apple");
console.log(\`Banana index: \${index}, Has apple: \${found}\`);

// Array methods - Transforming
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
let longFruits = fruits.filter(fruit => fruit.length > 5);
let totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);

console.log("Upper case:", upperFruits);
console.log("Long fruits:", longFruits);
console.log("Total length:", totalLength);

// Array destructuring
let [first, second, ...rest] = fruits;
console.log(\`First: \${first}, Second: \${second}, Rest: \${rest}\`);

// Spread operator
let moreFruits = [...fruits, "kiwi", "pear"];
console.log("More fruits:", moreFruits);

// Sorting
let sortedNumbers = [...numbers].sort((a, b) => b - a); // Descending
console.log("Sorted desc:", sortedNumbers);`,
            comments: [
              "Dynamic arrays that can grow/shrink",
              "Rich set of built-in methods",
              "Functional methods: map, filter, reduce",
              "Destructuring and spread operator"
            ]
          },
          python: {
            language: "python",
            code: `# Lists in Python
# Dynamic arrays with various methods

# List creation
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, True, None]

# List methods - Adding elements
fruits.append("grape")          # Add to end
fruits.insert(0, "mango")       # Insert at index
print("After adding:", fruits)

# List methods - Removing elements
last_fruit = fruits.pop()       # Remove from end
first_fruit = fruits.pop(0)     # Remove from beginning
fruits.remove("banana")         # Remove by value
print(f"Removed: {first_fruit}, {last_fruit}")

# List methods - Finding elements
index = fruits.index("apple") if "apple" in fruits else -1
has_orange = "orange" in fruits
print(f"Apple index: {index}, Has orange: {has_orange}")

# List comprehensions (Pythonic transformations)
upper_fruits = [fruit.upper() for fruit in fruits]
long_fruits = [fruit for fruit in fruits if len(fruit) > 5]
total_length = sum(len(fruit) for fruit in fruits)

print("Upper case:", upper_fruits)
print("Long fruits:", long_fruits)
print("Total length:", total_length)

# List unpacking (destructuring)
first, second, *rest = fruits
print(f"First: {first}, Second: {second}, Rest: {rest}")

# List concatenation and repetition
more_fruits = fruits + ["kiwi", "pear"]
repeated = ["x"] * 3
print("More fruits:", more_fruits)
print("Repeated:", repeated)

# Sorting
sorted_numbers = sorted(numbers, reverse=True)  # Descending
print("Sorted desc:", sorted_numbers)

# Slicing
print("First 3:", fruits[:3])
print("Last 2:", fruits[-2:])
print("Every other:", fruits[::2])`,
            comments: [
              "Dynamic lists that can grow/shrink",
              "List comprehensions for transformations",
              "Slicing for accessing subsequences",
              "Unpacking and concatenation operators"
            ]
          }
        },
        comparison: {
          javascript: [
            "Called <strong>arrays</strong>, zero-indexed",
            "Methods like <strong>push</strong>, <strong>pop</strong>, <strong>shift</strong>, <strong>unshift</strong>",
            "Functional methods: <strong>map</strong>, <strong>filter</strong>, <strong>reduce</strong>",
            "Destructuring with <strong>[a, b, ...rest]</strong>"
          ],
          python: [
            "Called <strong>lists</strong>, zero-indexed",
            "Methods like <strong>append</strong>, <strong>pop</strong>, <strong>insert</strong>, <strong>remove</strong>",
            "List comprehensions: <strong>[expr for item in list]</strong>",
            "Powerful slicing: <strong>list[start:end:step]</strong>"
          ]
        }
      },
      {
        id: "objects",
        title: "Objects and Dictionaries - Key-Value Pairs",
        description: "Understand object-oriented and dictionary data structures",
        difficulty: "intermediate",
        icon: "fas fa-database",
        iconColor: "bg-indigo-100",
        examples: {
          javascript: {
            language: "javascript",
            code: `// Objects in JavaScript
// Key-value pairs with dynamic properties

// Object creation
let person = {
    name: "Alice",
    age: 25,
    city: "New York",
    hobbies: ["reading", "coding", "hiking"]
};

// Accessing properties
console.log("Name:", person.name);        // Dot notation
console.log("Age:", person["age"]);       // Bracket notation

// Adding/modifying properties
person.email = "alice@example.com";       // Add new property
person.age = 26;                          // Modify existing
person["country"] = "USA";                // Bracket notation

// Object methods
let calculator = {
    result: 0,
    add: function(num) {
        this.result += num;
        return this;
    },
    multiply(num) {                       // ES6 shorthand
        this.result *= num;
        return this;
    },
    getValue: () => {                     // Arrow function (no 'this')
        return "Current result";
    }
};

// Method chaining
calculator.add(5).multiply(3);
console.log("Calculator result:", calculator.result);

// Object destructuring
let { name, age, city } = person;
console.log(\`\${name} is \${age} years old, lives in \${city}\`);

// Object methods
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// Spread operator with objects
let updatedPerson = { ...person, age: 27, profession: "Developer" };
console.log("Updated:", updatedPerson);

// Nested objects
let company = {
    name: "TechCorp",
    address: {
        street: "123 Main St",
        city: "Boston",
        state: "MA"
    },
    employees: [person, updatedPerson]
};`,
            comments: [
              "Dynamic property addition/deletion",
              "Multiple ways to access properties",
              "Methods with 'this' binding",
              "Object destructuring and spread operator"
            ]
          },
          python: {
            language: "python",
            code: `# Dictionaries in Python
# Key-value pairs with dynamic keys

# Dictionary creation
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York",
    "hobbies": ["reading", "coding", "hiking"]
}

# Accessing values
print("Name:", person["name"])            # Bracket notation
print("Age:", person.get("age"))          # get() method (safe)
print("Country:", person.get("country", "Unknown"))  # Default value

# Adding/modifying values
person["email"] = "alice@example.com"     # Add new key
person["age"] = 26                        # Modify existing
person.update({"country": "USA", "profession": "Developer"})

# Dictionary methods
print("Keys:", list(person.keys()))
print("Values:", list(person.values()))
print("Items:", list(person.items()))

# Dictionary comprehension
squares = {x: x**2 for x in range(1, 6)}
print("Squares:", squares)

# Iterating over dictionary
print("\\nPerson details:")
for key, value in person.items():
    print(f"{key}: {value}")

# Nested dictionaries
company = {
    "name": "TechCorp",
    "address": {
        "street": "123 Main St",
        "city": "Boston",
        "state": "MA"
    },
    "employees": [person, {"name": "Bob", "age": 30}]
}

# Safe nested access
street = company.get("address", {}).get("street", "No address")
print("Street:", street)

# Dictionary unpacking
def create_user(**kwargs):
    return {"id": 1, **kwargs}

new_user = create_user(**person)
print("New user:", new_user["name"])

# Removing items
email = person.pop("email", None)         # Remove and return
person.popitem()                          # Remove last item
del person["hobbies"]                     # Delete specific key`,
            comments: [
              "Keys must be immutable (strings, numbers, tuples)",
              "get() method for safe access with defaults",
              "Dictionary comprehensions for creating dicts",
              "Unpacking with ** operator"
            ]
          }
        },
        comparison: {
          javascript: [
            "Called <strong>objects</strong>, properties can be any string",
            "Dot notation: <strong>obj.prop</strong> and bracket: <strong>obj['prop']</strong>",
            "Methods with <strong>this</strong> binding",
            "Object destructuring: <strong>{a, b} = obj</strong>"
          ],
          python: [
            "Called <strong>dictionaries</strong>, keys must be immutable",
            "Bracket notation: <strong>dict['key']</strong> or <strong>dict.get('key')</strong>",
            "Dictionary comprehensions: <strong>{k: v for k, v in items}</strong>",
            "Unpacking with <strong>**dict</strong> operator"
          ]
        }
      },
      {
        id: "classes",
        title: "Classes - Object-Oriented Programming",
        description: "Learn object-oriented programming concepts in both languages",
        difficulty: "intermediate",
        icon: "fas fa-shapes",
        iconColor: "bg-teal-100",
        examples: {
          javascript: {
            language: "javascript",
            code: `// Classes in JavaScript (ES6+)
// Object-oriented programming with classes

// Basic class definition
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = Math.random().toString(36);
    }

    // Instance method
    greet() {
        return \`Hello, I'm \${this.name} and I'm \${this.age} years old\`;
    }

    // Getter
    get info() {
        return \`\${this.name} (\${this.age})\`;
    }

    // Setter
    set age(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        }
    }

    get age() {
        return this._age;
    }

    // Static method
    static createChild(name) {
        return new Person(name, 0);
    }
}

// Creating instances
let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

console.log(person1.greet());
console.log("Info:", person1.info);

// Inheritance
class Student extends Person {
    constructor(name, age, school) {
        super(name, age);           // Call parent constructor
        this.school = school;
        this.grades = [];
    }

    // Override parent method
    greet() {
        return super.greet() + \` and I study at \${this.school}\`;
    }

    // New method
    addGrade(grade) {
        this.grades.push(grade);
    }

    get gpa() {
        if (this.grades.length === 0) return 0;
        return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
    }
}

// Using inheritance
let student = new Student("Charlie", 20, "MIT");
student.addGrade(95);
student.addGrade(87);
student.addGrade(92);

console.log(student.greet());
console.log("GPA:", student.gpa);

// Static method usage
let baby = Person.createChild("Baby");
console.log("Baby:", baby.info);`,
            comments: [
              "ES6+ class syntax with constructor",
              "Getters and setters for property access",
              "Static methods belong to class, not instances",
              "Inheritance with extends and super keywords"
            ]
          },
          python: {
            language: "python",
            code: `# Classes in Python
# Object-oriented programming with classes

# Basic class definition
class Person:
    # Class variable (shared by all instances)
    species = "Homo sapiens"
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.id = id(self)  # Unique identifier
    
    # Instance method
    def greet(self):
        return f"Hello, I'm {self.name} and I'm {self.age} years old"
    
    # Property with getter
    @property
    def info(self):
        return f"{self.name} ({self.age})"
    
    # Property with setter
    @property
    def age(self):
        return self._age
    
    @age.setter
    def age(self, new_age):
        if new_age >= 0:
            self._age = new_age
        else:
            raise ValueError("Age cannot be negative")
    
    # Static method
    @staticmethod
    def create_child(name):
        return Person(name, 0)
    
    # Class method
    @classmethod
    def get_species(cls):
        return cls.species
    
    # String representation
    def __str__(self):
        return self.info

# Creating instances
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

print(person1.greet())
print("Info:", person1.info)

# Inheritance
class Student(Person):
    def __init__(self, name, age, school):
        super().__init__(name, age)  # Call parent constructor
        self.school = school
        self.grades = []
    
    # Override parent method
    def greet(self):
        return super().greet() + f" and I study at {self.school}"
    
    # New method
    def add_grade(self, grade):
        self.grades.append(grade)
    
    @property
    def gpa(self):
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades)

# Using inheritance
student = Student("Charlie", 20, "MIT")
student.add_grade(95)
student.add_grade(87)
student.add_grade(92)

print(student.greet())
print(f"GPA: {student.gpa:.2f}")

# Static and class method usage
baby = Person.create_child("Baby")
print("Baby:", baby)
print("Species:", Person.get_species())`,
            comments: [
              "__init__ method as constructor",
              "@property decorator for getters/setters",
              "Class variables shared by all instances",
              "Multiple inheritance and method resolution order"
            ]
          }
        },
        comparison: {
          javascript: [
            "<strong>class</strong> keyword with <strong>constructor</strong> method",
            "Getters/setters with <strong>get</strong>/<strong>set</strong> keywords",
            "Inheritance with <strong>extends</strong> and <strong>super()</strong>",
            "Static methods with <strong>static</strong> keyword"
          ],
          python: [
            "<strong>class</strong> keyword with <strong>__init__</strong> method",
            "<strong>@property</strong> decorator for getters/setters",
            "Inheritance with class parameters and <strong>super()</strong>",
            "<strong>@staticmethod</strong> and <strong>@classmethod</strong> decorators"
          ]
        }
      },
      {
        id: "modules",
        title: "Modules - Code Organization",
        description: "Learn how to organize and import code across files",
        difficulty: "intermediate",
        icon: "fas fa-puzzle-piece",
        iconColor: "bg-pink-100",
        examples: {
          javascript: {
            language: "javascript",
            code: `// Modules in JavaScript (ES6+)
// Organizing code across files

// === math-utils.js ===
// Named exports
export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export const PI = 3.14159;

// Default export
export default function subtract(a, b) {
    return a - b;
}

// === calculator.js ===
// Class export
export class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(num) {
        this.result += num;
        return this;
    }
    
    getResult() {
        return this.result;
    }
}

// === main.js ===
// Importing modules

// Default import
import subtract from './math-utils.js';

// Named imports
import { add, multiply, PI } from './math-utils.js';

// Import all as namespace
import * as MathUtils from './math-utils.js';

// Import with alias
import { Calculator as Calc } from './calculator.js';

// Dynamic import (ES2020)
async function loadModule() {
    const { add } = await import('./math-utils.js');
    return add(5, 3);
}

// Using imports
console.log("Add:", add(5, 3));
console.log("Multiply:", multiply(4, 6));
console.log("Subtract:", subtract(10, 4));
console.log("PI:", PI);

// Using namespace import
console.log("Namespace add:", MathUtils.add(2, 3));
console.log("Namespace PI:", MathUtils.PI);

// Using aliased import
const calc = new Calc();
console.log("Calculator:", calc.add(10).add(5).getResult());

// Dynamic import usage
loadModule().then(result => {
    console.log("Dynamic import result:", result);
});`,
            comments: [
              "ES6 module system with import/export",
              "Named exports and default exports",
              "Namespace imports with * as",
              "Dynamic imports for code splitting"
            ]
          },
          python: {
            language: "python",
            code: `# Modules in Python
# Organizing code across files

# === math_utils.py ===
# Module with functions and constants
def add(a, b):
    """Add two numbers."""
    return a + b

def multiply(a, b):
    """Multiply two numbers."""
    return a * b

PI = 3.14159

def _internal_function():
    """Private function (convention)."""
    return "This is internal"

# === calculator.py ===
# Module with class
class Calculator:
    """A simple calculator class."""
    
    def __init__(self):
        self.result = 0
    
    def add(self, num):
        self.result += num
        return self
    
    def get_result(self):
        return self.result

# === main.py ===
# Importing modules

# Import entire module
import math_utils

# Import specific functions
from math_utils import add, multiply, PI

# Import with alias
from calculator import Calculator as Calc
import math_utils as mu

# Import all (not recommended in production)
# from math_utils import *

# Using imports
print("Add:", add(5, 3))
print("Multiply:", multiply(4, 6))
print("PI:", PI)

# Using module namespace
print("Module add:", math_utils.add(2, 3))
print("Alias add:", mu.add(7, 8))

# Using aliased class
calc = Calc()
print("Calculator:", calc.add(10).add(5).get_result())

# Built-in modules
import os
import datetime
from collections import defaultdict

print("Current directory:", os.getcwd())
print("Current time:", datetime.datetime.now())

# Package structure
# myproject/
#   __init__.py
#   utils/
#     __init__.py
#     math_utils.py
#     string_utils.py

# Importing from packages
# from myproject.utils import math_utils
# from myproject.utils.string_utils import capitalize

# Conditional imports
try:
    import numpy as np
    HAS_NUMPY = True
except ImportError:
    HAS_NUMPY = False
    print("NumPy not available")`,
            comments: [
              "Import entire modules or specific items",
              "Module namespaces prevent naming conflicts",
              "Packages organize related modules",
              "Conditional imports for optional dependencies"
            ]
          }
        },
        comparison: {
          javascript: [
            "<strong>import</strong>/<strong>export</strong> syntax (ES6+)",
            "Default exports and named exports",
            "Dynamic imports with <strong>import()</strong> function",
            "File-based modules with .js extension"
          ],
          python: [
            "<strong>import</strong> and <strong>from...import</strong> syntax",
            "Module namespaces and aliasing with <strong>as</strong>",
            "Packages with <strong>__init__.py</strong> files",
            "Conditional imports for optional dependencies"
          ]
        }
      },
      {
        id: "higher-order-functions",
        title: "Higher Order Functions - Functions as First-Class Citizens",
        description: "Learn functions that accept or return other functions",
        difficulty: "intermediate",
        icon: "fas fa-layer-group",
        iconColor: "bg-purple-100",
        examples: {
          javascript: {
            language: "javascript",
            code: `// Higher Order Functions in JavaScript
// Functions that accept or return other functions

// Function that returns a function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 5:", double(5));     // 10
console.log("Triple 4:", triple(4));     // 12

// Function that accepts a function as parameter
function processArray(arr, callback) {
    const result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const squared = processArray(numbers, x => x * x);
console.log("Squared:", squared);        // [1, 4, 9, 16, 25]

// Built-in higher order functions
const values = [1, 2, 3, 4, 5, 6];

// map - transform each element
const doubled = values.map(x => x * 2);
console.log("Doubled:", doubled);        // [2, 4, 6, 8, 10, 12]

// filter - select elements that match condition
const evens = values.filter(x => x % 2 === 0);
console.log("Evens:", evens);            // [2, 4, 6]

// reduce - combine all elements into single value
const sum = values.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);                // 21

// find - get first element that matches
const found = values.find(x => x > 3);
console.log("First > 3:", found);        // 4

// some/every - test conditions
const hasEven = values.some(x => x % 2 === 0);
const allPositive = values.every(x => x > 0);
console.log("Has even:", hasEven);       // true
console.log("All positive:", allPositive); // true

// Function composition
const addOne = x => x + 1;
const square = x => x * x;

const compose = (f, g) => x => f(g(x));
const addOneAndSquare = compose(square, addOne);

console.log("Compose result:", addOneAndSquare(3)); // 16

// Currying
function curry(func) {
    return function(a) {
        return function(b) {
            return func(a, b);
        };
    };
}

const add = (a, b) => a + b;
const curriedAdd = curry(add);
const addFive = curriedAdd(5);

console.log("Curried result:", addFive(3)); // 8

// Practical example: Event handling
function createEventHandler(eventType, callback) {
    return function(element) {
        element.addEventListener(eventType, callback);
    };
}

const clickHandler = createEventHandler('click', () => {
    console.log('Button clicked!');
});

// Usage: clickHandler(buttonElement);`,
            comments: [
              "Functions are first-class citizens",
              "Can be passed as arguments and returned",
              "Built-in methods like map, filter, reduce",
              "Enables functional programming patterns"
            ]
          },
          python: {
            language: "python",
            code: `# Higher Order Functions in Python
# Functions that accept or return other functions

# Function that returns a function
def create_multiplier(factor):
    def multiplier(number):
        return number * factor
    return multiplier

double = create_multiplier(2)
triple = create_multiplier(3)

print("Double 5:", double(5))     # 10
print("Triple 4:", triple(4))     # 12

# Function that accepts a function as parameter
def process_list(lst, callback):
    result = []
    for item in lst:
        result.append(callback(item))
    return result

numbers = [1, 2, 3, 4, 5]
squared = process_list(numbers, lambda x: x * x)
print("Squared:", squared)        # [1, 4, 9, 16, 25]

# Built-in higher order functions
values = [1, 2, 3, 4, 5, 6]

# map - transform each element
doubled = list(map(lambda x: x * 2, values))
print("Doubled:", doubled)        # [2, 4, 6, 8, 10, 12]

# filter - select elements that match condition
evens = list(filter(lambda x: x % 2 == 0, values))
print("Evens:", evens)            # [2, 4, 6]

# reduce - combine all elements into single value
from functools import reduce
sum_result = reduce(lambda acc, curr: acc + curr, values, 0)
print("Sum:", sum_result)         # 21

# List comprehensions (Pythonic alternative)
doubled_comp = [x * 2 for x in values]
evens_comp = [x for x in values if x % 2 == 0]
print("Doubled (comp):", doubled_comp)
print("Evens (comp):", evens_comp)

# any/all - test conditions
has_even = any(x % 2 == 0 for x in values)
all_positive = all(x > 0 for x in values)
print("Has even:", has_even)      # True
print("All positive:", all_positive) # True

# Function composition
def add_one(x):
    return x + 1

def square(x):
    return x * x

def compose(f, g):
    return lambda x: f(g(x))

add_one_and_square = compose(square, add_one)
print("Compose result:", add_one_and_square(3)) # 16

# Decorator (special type of higher order function)
def timer_decorator(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer_decorator
def slow_function():
    import time
    time.sleep(0.1)
    return "Done"

# Partial application
from functools import partial

def multiply(x, y):
    return x * y

double_func = partial(multiply, 2)
print("Partial result:", double_func(5)) # 10

# Using sorted with custom key function
words = ["python", "java", "c", "javascript"]
by_length = sorted(words, key=len)
by_last_char = sorted(words, key=lambda word: word[-1])

print("By length:", by_length)
print("By last char:", by_last_char)`,
            comments: [
              "Functions are first-class objects",
              "Decorators provide elegant higher-order patterns",
              "functools module for advanced operations",
              "List comprehensions often replace map/filter"
            ]
          }
        },
        comparison: {
          javascript: [
            "Built-in methods: <strong>map</strong>, <strong>filter</strong>, <strong>reduce</strong>",
            "Arrow functions make callbacks concise",
            "Function composition and currying patterns",
            "Event handling uses higher-order functions"
          ],
          python: [
            "Built-in functions: <strong>map</strong>, <strong>filter</strong>, <strong>reduce</strong>",
            "<strong>Decorators</strong> provide powerful patterns",
            "<strong>functools</strong> module for advanced operations",
            "List comprehensions often preferred over map/filter"
          ]
        }
      },
      {
        id: "closures",
        title: "Closures - Lexical Scope and Data Privacy",
        description: "Understand how inner functions access outer function variables",
        difficulty: "intermediate",
        icon: "fas fa-lock",
        iconColor: "bg-rose-100",
        examples: {
          javascript: {
            language: "javascript",
            code: `// Closures in JavaScript
// Inner functions have access to outer function variables

// Basic closure example
function outerFunction(x) {
    // This is the outer function's scope
    
    function innerFunction(y) {
        // Inner function has access to outer function's parameters
        return x + y;
    }
    
    return innerFunction;
}

const addFive = outerFunction(5);
console.log("Closure result:", addFive(3)); // 8

// Data privacy with closures
function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log("Counter:", counter.increment()); // 1
console.log("Counter:", counter.increment()); // 2
console.log("Count:", counter.getCount());    // 2
// console.log(counter.count); // undefined - private!

// Module pattern using closures
const calculatorModule = (function() {
    let result = 0; // Private state
    
    return {
        add: function(x) {
            result += x;
            return this;
        },
        multiply: function(x) {
            result *= x;
            return this;
        },
        getResult: function() {
            return result;
        },
        reset: function() {
            result = 0;
            return this;
        }
    };
})();

calculatorModule.add(5).multiply(2);
console.log("Module result:", calculatorModule.getResult()); // 10

// Function factory using closures
function createValidator(pattern) {
    return function(input) {
        return pattern.test(input);
    };
}

const emailValidator = createValidator(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/);
const phoneValidator = createValidator(/^\\d{3}-\\d{3}-\\d{4}$/);

console.log("Email valid:", emailValidator("test@example.com")); // true
console.log("Phone valid:", phoneValidator("123-456-7890"));     // true

// Closure in loops (common pitfall and solution)
console.log("\\n=== Loop Closure Example ===");

// Problem: var creates function scope
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("var i:", i); // Prints 3, 3, 3
    }, 100);
}

// Solution 1: let creates block scope
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log("let j:", j); // Prints 0, 1, 2
    }, 200);
}

// Solution 2: IIFE (Immediately Invoked Function Expression)
for (var k = 0; k < 3; k++) {
    (function(index) {
        setTimeout(function() {
            console.log("IIFE k:", index); // Prints 0, 1, 2
        }, 300);
    })(k);
}

// Practical example: Event handlers with closures
function setupButtons() {
    const buttons = ['Button 1', 'Button 2', 'Button 3'];
    const handlers = [];
    
    for (let i = 0; i < buttons.length; i++) {
        handlers.push(function() {
            console.log(\`\${buttons[i]} clicked!\`);
        });
    }
    
    return handlers;
}

const buttonHandlers = setupButtons();
buttonHandlers[0](); // "Button 1 clicked!"
buttonHandlers[1](); // "Button 2 clicked!"

// Memory considerations
function createHeavyClosure() {
    const heavyData = new Array(1000000).fill('data');
    
    return function() {
        // This closure keeps heavyData in memory
        return heavyData.length;
    };
}

// Be careful: closures can prevent garbage collection`,
            comments: [
              "Inner functions access outer scope variables",
              "Creates private variables and methods",
              "Enables module pattern and factories",
              "Can cause memory leaks if not careful"
            ]
          },
          python: {
            language: "python",
            code: `# Closures in Python
# Inner functions have access to outer function variables

# Basic closure example
def outer_function(x):
    # This is the outer function's scope
    
    def inner_function(y):
        # Inner function has access to outer function's parameters
        return x + y
    
    return inner_function

add_five = outer_function(5)
print("Closure result:", add_five(3))  # 8

# Data privacy with closures
def create_counter():
    count = 0  # "Private" variable (by convention)
    
    def increment():
        nonlocal count
        count += 1
        return count
    
    def decrement():
        nonlocal count
        count -= 1
        return count
    
    def get_count():
        return count
    
    return {
        'increment': increment,
        'decrement': decrement,
        'get_count': get_count
    }

counter = create_counter()
print("Counter:", counter['increment']())  # 1
print("Counter:", counter['increment']())  # 2
print("Count:", counter['get_count']())    # 2

# Class-based approach (more Pythonic)
class Counter:
    def __init__(self):
        self._count = 0  # Private by convention
    
    def increment(self):
        self._count += 1
        return self._count
    
    def decrement(self):
        self._count -= 1
        return self._count
    
    @property
    def count(self):
        return self._count

counter_obj = Counter()
print("Class counter:", counter_obj.increment())  # 1

# Function factory using closures
def create_validator(pattern):
    import re
    compiled_pattern = re.compile(pattern)
    
    def validator(input_str):
        return bool(compiled_pattern.match(input_str))
    
    return validator

email_validator = create_validator(r'^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$')
phone_validator = create_validator(r'^\\d{3}-\\d{3}-\\d{4}$')

print("Email valid:", email_validator("test@example.com"))  # True
print("Phone valid:", phone_validator("123-456-7890"))     # True

# Decorator using closures
def memoize(func):
    cache = {}
    
    def wrapper(*args):
        if args in cache:
            print(f"Cache hit for {args}")
            return cache[args]
        
        result = func(*args)
        cache[args] = result
        print(f"Computed and cached {args}")
        return result
    
    return wrapper

@memoize
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print("Fibonacci 10:", fibonacci(10))
print("Fibonacci 10 again:", fibonacci(10))  # Uses cache

# Late binding in loops (similar to JavaScript issue)
functions = []
for i in range(3):
    # This captures the variable i, not its value
    functions.append(lambda: i)

print("\\n=== Loop Closure Example ===")
for func in functions:
    print("Late binding:", func())  # Prints 2, 2, 2

# Solution: capture the value
functions_fixed = []
for i in range(3):
    # Use default parameter to capture current value
    functions_fixed.append(lambda x=i: x)

for func in functions_fixed:
    print("Fixed binding:", func())  # Prints 0, 1, 2

# Practical example: Configuration factory
def create_config_loader(base_path):
    import json
    import os
    
    def load_config(filename):
        full_path = os.path.join(base_path, filename)
        try:
            with open(full_path, 'r') as file:
                return json.load(file)
        except FileNotFoundError:
            return {"error": f"Config file {filename} not found"}
    
    return load_config

# Usage
config_loader = create_config_loader("/etc/myapp/")
# app_config = config_loader("app.json")

# Closure with state machine
def create_state_machine(initial_state):
    state = initial_state
    
    def transition(new_state):
        nonlocal state
        old_state = state
        state = new_state
        print(f"State changed: {old_state} -> {new_state}")
        return state
    
    def get_state():
        return state
    
    return transition, get_state

change_state, current_state = create_state_machine("idle")
print("Current:", current_state())  # idle
change_state("running")            # State changed: idle -> running
print("Current:", current_state())  # running`,
            comments: [
              "nonlocal keyword for modifying outer scope",
              "Classes often preferred over closure patterns",
              "Decorators are powerful closure applications",
              "Late binding can cause similar issues to JavaScript"
            ]
          }
        },
        comparison: {
          javascript: [
            "Natural closure support with lexical scoping",
            "IIFE pattern for immediate execution",
            "Module pattern using closures",
            "var vs let/const scoping differences"
          ],
          python: [
            "<strong>nonlocal</strong> keyword for outer scope modification",
            "Classes often preferred over closure patterns",
            "Decorators provide elegant closure applications",
            "Late binding issues similar to JavaScript"
          ]
        }
      },
      {
        id: "asynchronous",
        title: "Asynchronous Programming - Promises and Async/Await",
        description: "Handle asynchronous operations and non-blocking code execution",
        difficulty: "advanced",
        icon: "fas fa-clock",
        iconColor: "bg-blue-200",
        examples: {
          javascript: {
            language: "javascript",
            code: `// Asynchronous Programming in JavaScript
// Promises, async/await, and handling asynchronous operations

// Callback Hell Example (old way)
console.log("=== Callback Example ===");
function fetchUserData(userId, callback) {
    setTimeout(() => {
        callback(null, { id: userId, name: "Alice" });
    }, 1000);
}

fetchUserData(1, (error, user) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("User data:", user);
    }
});

// Promise-based approach
console.log("\\n=== Promise Example ===");
function fetchUserPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: "Bob" });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, 1000);
    });
}

fetchUserPromise(2)
    .then(user => {
        console.log("Promise user:", user);
        return fetchUserPromise(3); // Chain another promise
    })
    .then(anotherUser => {
        console.log("Another user:", anotherUser);
    })
    .catch(error => {
        console.error("Promise error:", error.message);
    });

// Async/Await (modern approach)
console.log("\\n=== Async/Await Example ===");
async function getUserData(userId) {
    try {
        const user = await fetchUserPromise(userId);
        console.log("Async user:", user);
        return user;
    } catch (error) {
        console.error("Async error:", error.message);
        throw error;
    }
}

// Calling async function
getUserData(4);

// Multiple async operations
async function fetchMultipleUsers() {
    try {
        // Sequential execution
        console.log("\\n=== Sequential Execution ===");
        const user1 = await fetchUserPromise(5);
        const user2 = await fetchUserPromise(6);
        console.log("Sequential users:", [user1, user2]);
        
        // Parallel execution
        console.log("\\n=== Parallel Execution ===");
        const [user3, user4] = await Promise.all([
            fetchUserPromise(7),
            fetchUserPromise(8)
        ]);
        console.log("Parallel users:", [user3, user4]);
        
        // Promise.allSettled - wait for all, regardless of success/failure
        const results = await Promise.allSettled([
            fetchUserPromise(9),
            fetchUserPromise(-1), // This will reject
            fetchUserPromise(10)
        ]);
        
        console.log("All settled results:");
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(\`Result \${index}: SUCCESS -\`, result.value);
            } else {
                console.log(\`Result \${index}: FAILED -\`, result.reason.message);
            }
        });
        
    } catch (error) {
        console.error("Multiple users error:", error.message);
    }
}

fetchMultipleUsers();

// Fetch API example (real-world async)
async function fetchFromAPI() {
    try {
        console.log("\\n=== Fetch API Example ===");
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const data = await response.json();
        console.log("API data:", data.title);
        return data;
    } catch (error) {
        console.error("Fetch error:", error.message);
    }
}

fetchFromAPI();

// Promise creation and chaining
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demonstrateDelay() {
    console.log("\\n=== Delay Example ===");
    console.log("Starting delay...");
    await delay(2000);
    console.log("Delay completed!");
}

demonstrateDelay();

// Error handling in async functions
async function errorHandlingExample() {
    try {
        await fetchUserPromise(-1); // This will reject
    } catch (error) {
        console.log("Caught error:", error.message);
    } finally {
        console.log("Cleanup code runs here");
    }
}

errorHandlingExample();

// Race condition example
async function raceExample() {
    console.log("\\n=== Race Example ===");
    
    const fast = delay(1000).then(() => "Fast result");
    const slow = delay(3000).then(() => "Slow result");
    
    try {
        const winner = await Promise.race([fast, slow]);
        console.log("Race winner:", winner);
    } catch (error) {
        console.error("Race error:", error);
    }
}

raceExample();`,
            comments: [
              "Promises solve callback hell problem",
              "async/await provides synchronous-like syntax",
              "Promise.all for parallel execution",
              "Error handling with try/catch in async functions"
            ]
          },
          python: {
            language: "python",
            code: `# Asynchronous Programming in Python
# asyncio, async/await, and handling asynchronous operations

import asyncio
import aiohttp
import time

# Basic async function
async def fetch_user_data(user_id):
    """Simulate async database call"""
    await asyncio.sleep(1)  # Simulate delay
    if user_id > 0:
        return {"id": user_id, "name": f"User_{user_id}"}
    else:
        raise ValueError("Invalid user ID")

# Running async function
async def basic_example():
    print("=== Basic Async Example ===")
    try:
        user = await fetch_user_data(1)
        print("Async user:", user)
    except ValueError as e:
        print("Error:", e)

# Multiple async operations
async def multiple_operations():
    print("\\n=== Sequential vs Parallel ===")
    
    # Sequential execution
    start_time = time.time()
    user1 = await fetch_user_data(1)
    user2 = await fetch_user_data(2)
    sequential_time = time.time() - start_time
    print(f"Sequential: {sequential_time:.2f}s - {[user1, user2]}")
    
    # Parallel execution with asyncio.gather
    start_time = time.time()
    user3, user4 = await asyncio.gather(
        fetch_user_data(3),
        fetch_user_data(4)
    )
    parallel_time = time.time() - start_time
    print(f"Parallel: {parallel_time:.2f}s - {[user3, user4]}")

# Error handling in async
async def error_handling_example():
    print("\\n=== Error Handling ===")
    
    tasks = [
        fetch_user_data(5),
        fetch_user_data(-1),  # This will raise an error
        fetch_user_data(6)
    ]
    
    # Using asyncio.gather with return_exceptions=True
    results = await asyncio.gather(*tasks, return_exceptions=True)
    
    for i, result in enumerate(results):
        if isinstance(result, Exception):
            print(f"Task {i}: ERROR - {result}")
        else:
            print(f"Task {i}: SUCCESS - {result}")

# HTTP requests with aiohttp
async def fetch_from_api():
    print("\\n=== HTTP Request Example ===")
    
    async with aiohttp.ClientSession() as session:
        try:
            async with session.get('https://jsonplaceholder.typicode.com/posts/1') as response:
                if response.status == 200:
                    data = await response.json()
                    print("API data:", data['title'])
                    return data
                else:
                    print(f"HTTP Error: {response.status}")
        except aiohttp.ClientError as e:
            print(f"Request error: {e}")
        except Exception as e:
            print(f"Unexpected error: {e}")

# Async context manager
class AsyncDatabaseConnection:
    async def __aenter__(self):
        print("Opening database connection...")
        await asyncio.sleep(0.1)  # Simulate connection time
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        print("Closing database connection...")
        await asyncio.sleep(0.1)  # Simulate cleanup time
    
    async def query(self, sql):
        print(f"Executing: {sql}")
        await asyncio.sleep(0.5)  # Simulate query time
        return [{"id": 1, "name": "Alice"}]

async def database_example():
    print("\\n=== Async Context Manager ===")
    
    async with AsyncDatabaseConnection() as db:
        results = await db.query("SELECT * FROM users")
        print("Query results:", results)

# Async generator
async def async_number_generator(n):
    for i in range(n):
        await asyncio.sleep(0.1)  # Simulate async work
        yield i

async def generator_example():
    print("\\n=== Async Generator ===")
    
    async for number in async_number_generator(5):
        print(f"Generated: {number}")

# Task creation and management
async def task_management():
    print("\\n=== Task Management ===")
    
    # Create tasks
    task1 = asyncio.create_task(fetch_user_data(7))
    task2 = asyncio.create_task(fetch_user_data(8))
    
    print("Tasks created, doing other work...")
    await asyncio.sleep(0.5)
    
    # Wait for tasks to complete
    user7 = await task1
    user8 = await task2
    
    print("Task results:", [user7, user8])

# Timeout handling
async def timeout_example():
    print("\\n=== Timeout Example ===")
    
    try:
        # This will timeout after 0.5 seconds
        result = await asyncio.wait_for(
            fetch_user_data(9), 
            timeout=0.5
        )
        print("Result:", result)
    except asyncio.TimeoutError:
        print("Operation timed out!")

# Running all examples
async def main():
    await basic_example()
    await multiple_operations()
    await error_handling_example()
    
    # Note: aiohttp might not be available in all environments
    try:
        await fetch_from_api()
    except ImportError:
        print("aiohttp not available, skipping HTTP example")
    
    await database_example()
    await generator_example()
    await task_management()
    await timeout_example()

# Run the main function
if __name__ == "__main__":
    asyncio.run(main())

# Synchronous wrapper for running async code
def run_async_example():
    """Helper function to run async code from sync context"""
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try:
        loop.run_until_complete(basic_example())
    finally:
        loop.close()

print("\\n=== Running Async Examples ===")
print("Use: asyncio.run(main()) to run all examples")`,
            comments: [
              "asyncio module for asynchronous programming",
              "async/await syntax similar to JavaScript",
              "asyncio.gather for concurrent execution",
              "Async context managers with __aenter__/__aexit__"
            ]
          }
        },
        comparison: {
          javascript: [
            "Built-in <strong>Promise</strong> and <strong>async/await</strong>",
            "<strong>Promise.all()</strong> for parallel execution",
            "Fetch API for HTTP requests",
            "Event loop handles asynchronous operations"
          ],
          python: [
            "<strong>asyncio</strong> module for async programming",
            "<strong>asyncio.gather()</strong> for concurrent execution",
            "<strong>aiohttp</strong> for async HTTP requests",
            "Explicit event loop management"
          ]
        }
      },
      {
        id: "destructuring",
        title: "Destructuring - Extracting Values from Data Structures",
        description: "Learn to unpack arrays and objects into distinct variables",
        difficulty: "intermediate",
        icon: "fas fa-expand-arrows-alt",
        iconColor: "bg-teal-100",
        examples: {
          javascript: {
            language: "javascript",
            code: `// Destructuring in JavaScript
// Extract values from arrays and objects into variables

// Array Destructuring
console.log("=== Array Destructuring ===");
const fruits = ["apple", "banana", "orange", "grape"];

// Basic destructuring
const [first, second] = fruits;
console.log("First two:", first, second); // apple banana

// Skipping elements
const [, , third] = fruits;
console.log("Third:", third); // orange

// Rest operator
const [head, ...tail] = fruits;
console.log("Head:", head);     // apple
console.log("Tail:", tail);     // ["banana", "orange", "grape"]

// Default values
const [a, b, c, d, e = "default"] = fruits;
console.log("With default:", e); // default

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log("Swapped:", x, y); // 2 1

// Object Destructuring
console.log("\\n=== Object Destructuring ===");
const person = {
    name: "Alice",
    age: 25,
    city: "New York",
    hobbies: ["reading", "coding"]
};

// Basic destructuring
const { name, age } = person;
console.log("Name and age:", name, age);

// Renaming variables
const { name: fullName, city: location } = person;
console.log("Renamed:", fullName, location);

// Default values
const { country = "USA", profession = "Developer" } = person;
console.log("With defaults:", country, profession);

// Nested destructuring
const user = {
    id: 1,
    profile: {
        name: "Bob",
        contact: {
            email: "bob@example.com",
            phone: "123-456-7890"
        }
    }
};

const { 
    profile: { 
        name: userName, 
        contact: { email } 
    } 
} = user;
console.log("Nested:", userName, email);

// Function Parameter Destructuring
console.log("\\n=== Function Parameter Destructuring ===");

// Array parameters
function processCoordinates([x, y, z = 0]) {
    console.log(\`Coordinates: x=\${x}, y=\${y}, z=\${z}\`);
}

processCoordinates([10, 20]);      // z defaults to 0
processCoordinates([5, 15, 25]);   // z is 25

// Object parameters
function createUser({ name, email, age = 18 }) {
    return {
        id: Math.random(),
        name,
        email,
        age,
        createdAt: new Date()
    };
}

const newUser = createUser({
    name: "Charlie",
    email: "charlie@example.com"
});
console.log("New user:", newUser);

// Destructuring in loops
console.log("\\n=== Destructuring in Loops ===");
const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "moderator" }
];

for (const { name, role } of users) {
    console.log(\`\${name} is a \${role}\`);
}

// Array of arrays
const coordinates = [[1, 2], [3, 4], [5, 6]];
for (const [x, y] of coordinates) {
    console.log(\`Point: (\${x}, \${y})\`);
}

// Destructuring return values
function getStats() {
    return {
        min: 1,
        max: 100,
        average: 50,
        count: 10
    };
}

const { min, max, average } = getStats();
console.log("Stats:", { min, max, average });

// Array from function
function getRange() {
    return [0, 100];
}

const [minVal, maxVal] = getRange();
console.log("Range:", minVal, "to", maxVal);

// Computed property names
const key = "dynamicKey";
const { [key]: dynamicValue = "defaultValue" } = { someOtherKey: "value" };
console.log("Dynamic:", dynamicValue); // defaultValue

// Mixed destructuring
const data = {
    title: "JavaScript Concepts",
    tags: ["programming", "web", "frontend"],
    meta: {
        author: "Developer",
        date: "2024"
    }
};

const {
    title,
    tags: [primaryTag, ...otherTags],
    meta: { author }
} = data;

console.log("Mixed destructuring:");
console.log("Title:", title);
console.log("Primary tag:", primaryTag);
console.log("Other tags:", otherTags);
console.log("Author:", author);`,
            comments: [
              "Works with arrays and objects",
              "Supports default values and renaming",
              "Rest operator for collecting remaining items",
              "Great for function parameters and return values"
            ]
          },
          python: {
            language: "python",
            code: `# Destructuring (Unpacking) in Python
# Extract values from sequences and mappings

# Tuple/List Unpacking
print("=== Sequence Unpacking ===")
fruits = ["apple", "banana", "orange", "grape"]

# Basic unpacking
first, second = fruits[:2]
print("First two:", first, second)  # apple banana

# Extended unpacking with *
head, *tail = fruits
print("Head:", head)      # apple
print("Tail:", tail)      # ['banana', 'orange', 'grape']

# Middle unpacking
first, *middle, last = fruits
print("First:", first)    # apple
print("Middle:", middle)  # ['banana', 'orange']
print("Last:", last)      # grape

# Swapping variables
x, y = 1, 2
x, y = y, x
print("Swapped:", x, y)   # 2 1

# Multiple assignment
a, b, c = 1, 2, 3
print("Multiple:", a, b, c)

# Unpacking with different types
person_data = ("Alice", 25, "New York")
name, age, city = person_data
print("Person:", name, age, city)

# Dictionary Unpacking (Python 3.5+)
print("\\n=== Dictionary Unpacking ===")
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Unpacking keys (order matters in Python 3.7+)
name, age, city = person.values()
print("Values:", name, age, city)

# Dictionary unpacking in function calls
def create_user(name, age, city):
    return f"User: {name}, {age} years old, from {city}"

user_info = create_user(**person)
print("User info:", user_info)

# Merging dictionaries
defaults = {"theme": "light", "notifications": True}
user_prefs = {"theme": "dark", "language": "en"}
merged = {**defaults, **user_prefs}
print("Merged:", merged)

# Function Parameter Unpacking
print("\\n=== Function Parameter Unpacking ===")

def process_coordinates(x, y, z=0):
    print(f"Coordinates: x={x}, y={y}, z={z}")

coords = [10, 20]
process_coordinates(*coords)  # Unpacks list

coords_3d = [5, 15, 25]
process_coordinates(*coords_3d)

# Keyword argument unpacking
def create_profile(**kwargs):
    return {
        "id": 123,
        "created_at": "2024-01-01",
        **kwargs
    }

profile_data = {
    "name": "Bob",
    "email": "bob@example.com",
    "age": 30
}
profile = create_profile(**profile_data)
print("Profile:", profile)

# Unpacking in loops
print("\\n=== Unpacking in Loops ===")
users = [
    ("Alice", "admin"),
    ("Bob", "user"), 
    ("Charlie", "moderator")
]

for name, role in users:
    print(f"{name} is a {role}")

# Enumerate with unpacking
items = ["apple", "banana", "orange"]
for index, item in enumerate(items):
    print(f"{index}: {item}")

# Dictionary items unpacking
person_dict = {"name": "Alice", "age": 25, "city": "NYC"}
for key, value in person_dict.items():
    print(f"{key}: {value}")

# Nested unpacking
nested_data = [
    ("user1", {"name": "Alice", "age": 25}),
    ("user2", {"name": "Bob", "age": 30})
]

for user_id, user_data in nested_data:
    name = user_data["name"]
    age = user_data["age"]
    print(f"{user_id}: {name} ({age})")

# Named tuples (structured unpacking)
from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
Color = namedtuple("Color", ["r", "g", "b"])

point = Point(10, 20)
color = Color(255, 128, 0)

# Unpacking named tuples
x, y = point
r, g, b = color
print("Point:", x, y)
print("Color:", r, g, b)

# Return multiple values
def get_stats():
    return 1, 100, 50.5, 10  # Returns tuple

min_val, max_val, avg, count = get_stats()
print("Stats:", min_val, max_val, avg, count)

# Underscore for unused values
def get_name_and_details():
    return "Alice", 25, "Engineer", "New York"

name, age, _, city = get_name_and_details()  # Ignore profession
print("Selective:", name, age, city)

# Zip unpacking
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
cities = ["NYC", "LA", "Chicago"]

for name, age, city in zip(names, ages, cities):
    print(f"{name}, {age}, {city}")

# Star expressions in assignments
numbers = [1, 2, 3, 4, 5]
first, *middle, last = numbers
print("Star unpacking:", first, middle, last)

# Practical example: parsing data
def parse_config_line(line):
    # Format: "key=value # comment"
    parts = line.split('#')[0].strip().split('=')
    if len(parts) == 2:
        key, value = parts
        return key.strip(), value.strip()
    return None, None

config_line = "database_url=localhost:5432 # Database connection"
key, value = parse_config_line(config_line)
print("Config:", key, "->", value)`,
            comments: [
              "Uses * for extended unpacking",
              "** for dictionary unpacking in function calls",
              "Works with any iterable sequence",
              "Named tuples provide structured unpacking"
            ]
          }
        },
        comparison: {
          javascript: [
            "Works with <strong>arrays</strong> and <strong>objects</strong>",
            "Rest operator <strong>...</strong> for remaining items",
            "Default values and variable renaming",
            "Nested destructuring support"
          ],
          python: [
            "Works with any <strong>iterable</strong> sequence",
            "<strong>*</strong> and <strong>**</strong> for unpacking",
            "Named tuples for structured data",
            "Dictionary unpacking with ** operator"
          ]
        }
      }
    ];

    defaultConcepts.forEach(concept => {
      this.concepts.set(concept.id, concept);
    });
  }

  async getConcepts(): Promise<Concept[]> {
    return Array.from(this.concepts.values());
  }

  async getConcept(id: string): Promise<Concept | undefined> {
    return this.concepts.get(id);
  }

  async createConcept(concept: InsertConcept): Promise<Concept> {
    const id = `concept_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const newConcept: Concept = { ...concept, id };
    this.concepts.set(id, newConcept);
    return newConcept;
  }
}

export const storage = new MemStorage();
