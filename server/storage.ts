import { type Concept, type InsertConcept } from "@shared/schema";

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
