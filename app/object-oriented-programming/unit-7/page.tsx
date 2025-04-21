import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { Callout } from "@/components/ui/callout";
import { TableOfContents } from "@/components/table-of-content";

export default function UnitPage() {
    return (
        <div className="flex flex-col-reverse lg:flex-row">
            <div className="space-y-8 w-5/6">
                <div className="inset-0 -z-10 w-5/6 bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-gray-950 dark:[background:radial-gradient(#1f2937_1px,transparent_1px)]">
                    <div className="relative">

                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`}><Home className="h-4 w-4" /></BreadcrumbLink>
                                    <ChevronRight className="h-4 w-4" />
                                    <BreadcrumbLink href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/object-oriented-programming`}>Object-Oriented Programming</BreadcrumbLink>
                                    <ChevronRight className="h-4 w-4" />
                                    <BreadcrumbPage>Unit 7</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">Unit 7: Debugging / Error Handling, Data Structures and Data Search</h1>
                                <p className="text-md text-muted-foreground">This unit focused on debugging, error handling, and the use of data structures in Python, emphasizing their role in organizing data and implementing efficient search techniques for high-quality code development.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4" id="discussion">
                    <h2 className="text-xl font-bold mb-2">Discussion</h2>

                    <div className="space-y-4" id="data-structures">
                        <h3 className="text-lg font-bold mb-2">How Data Structures Support Object-Oriented Development</h3>
                        <p className="text-md text-muted-foreground w-5/6 mb-4">Data structures are fundamental to object-oriented development as they provide efficient ways to organize, store, and manipulate data within objects. They enhance modularity, reusability, and scalability, which are core principles of object-oriented programming (OOP). Below are three examples of data structures and their roles in OOP:</p>
                    </div>

                    <div className="space-y-4" id="lists">
                        <h3 className="text-lg font-bold mb-2">Lists</h3>
                        <p className="text-md text-muted-foreground w-5/6 mb-4">Lists are dynamic arrays that store ordered collections of elements. In OOP, lists are often used to manage collections of objects or attributes. For example, in a <span className="text-primary">Library</span> class, a list can store <span className="text-primary">Book</span> objects, enabling operations like adding, removing, or searching for books. Lists support iteration and indexing, making them versatile for managing object collections.</p>

                        <p>Example:</p>
                        <CodeBlock className="w-5/6" code={`class Library:
    def __init__(self):
        self.books = []  # List to store Book objects

    def add_book(self, book):
        self.books.append(book)

    def find_book(self, title):
        for book in self.books:
            if book.title == title:
                return book
        return None`} />
                    </div>

                    <div className="space-y-4" id="dictionaries">
                        <h3 className="text-lg font-bold mb-2">Dictionaries</h3>
                        <p className="text-md text-muted-foreground w-5/6 mb-4">Dictionaries store key-value pairs, providing fast lookup and retrieval. In OOP, dictionaries are useful for mapping relationships between objects or storing attributes. For instance, in a <span className="text-primary">Car</span> class, a dictionary can store car properties like <span className="text-primary">make</span>, <span className="text-primary">model</span>, and <span className="text-primary">year</span>, allowing easy access and updates.</p>

                        <p>Example:</p>
                        <CodeBlock className="w-5/6" code={`class Car:
    def __init__(self, make, model, year):
        self.properties = {"make": make, "model": model, "year": year}

    def update_property(self, key, value):
        if key in self.properties:
            self.properties[key] = value

    def display_properties(self):
        for key, value in self.properties.items():
            print(f"{key}: {value}")`} />

                    </div>

                    <div className="space-y-4" id="sets">
                        <h3 className="text-lg font-bold mb-2" >Sets</h3>
                        <p className="text-md text-muted-foreground w-5/6 mb-4">Sets store unique, unordered elements and are ideal for managing collections where duplicates are not allowed. In OOP, sets can be used to represent relationships or enforce uniqueness. For example, in a <span className="text-primary">Student</span> class, a set can store unique <span className="text-primary">Course</span> objects that the student is enrolled in.</p>

                        <p>Example:</p>
                        <CodeBlock className="w-5/6" code={`class Student:
    def __init__(self, name):
        self.name = name
        self.courses = set()  # Set to store unique Course objects

    def enroll(self, course):
        self.courses.add(course)

    def display_courses(self):
        for course in self.courses:
            print(course)`} />
                    </div>

                    <div className="flex flex-col gap-4 mt-4" id="references">
                        <h4 className="text-lg font-bold w-5/6">References</h4>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground w-5/6">
                                Python Software Foundation. (2023). Python Documentation. Retrieved from <a className="text-primary" href="https://docs.python.org/3/tutorial/datastructures.html" target="_blank">https://docs.python.org/3/tutorial/datastructures.html</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <hr className="my-4 w-5/6" />

                <div className="space-y-4" id="practical-activity">
                    <h2 className="text-xl font-bold mb-2">Practical Activity</h2>

                    <Callout className="w-5/6">
                        <p>
                            Create a nested dictionary of data on cars within a Car class. Extend the program to work with the dictionary by calling the following methods: <span className="text-primary">items()</span>, <span className="text-primary">keys()</span>, <span className="text-primary">values()</span>.</p>
                    </Callout>

                    <p className="text-md text-muted-foreground w-5/6">
                        You can find the code <a className="text-primary" href="https://github.com/ImraanMeyer/u7-practical-activities/blob/main/car.py" target="_blank">here</a>.
                    </p>

                    <CodeBlock className="w-5/6" code={`class Car:
    """A class to represent car data using a nested dictionary."""
    def __init__(self):
        # Nested dictionary to store car data
        self.car_data = {
            "car1": {"make": "Toyota", "model": "Corolla", "year": 2020},
            "car2": {"make": "Honda", "model": "Civic", "year": 2019},
            "car3": {"make": "Ford", "model": "Mustang", "year": 2021},
            "car4": {"make": "Hyundai", "model": "i20", "year": 2015},
        }

    def display_items(self):
        """Display key-value pairs in the nested dictionary."""
        print("Items (key-value pairs):")
        for key, value in self.car_data.items():
            print(f"{key}: {value}")

    def display_keys(self):
        """Display keys in the nested dictionary."""
        print("Keys:")
        for key in self.car_data.keys():
            print(key)

    def display_values(self):
        """Display values in the nested dictionary."""
        print("Values:")
        for value in self.car_data.values():
            print(value)
            

if __name__ == "__main__":
    # Create an instance of the Car class
    car_instance = Car()
    
    # Display items, keys, and values
    car_instance.display_items()
    print()  # For better readability
    car_instance.display_keys()
    print()  # For better readability
    car_instance.display_values()

# Output:
# Items (key-value pairs):
# car1: {'make': 'Toyota', 'model': 'Corolla', 'year': 2020}
# car2: {'make': 'Honda', 'model': 'Civic', 'year': 2019}
# car3: {'make': 'Ford', 'model': 'Mustang', 'year': 2021}
# car4: {'make': 'Hyundai', 'model': 'i20', 'year': 2015}

# Keys:
# car1
# car2
# car3
# car4

# Values:
# {'make': 'Toyota', 'model': 'Corolla', 'year': 2020}
# {'make': 'Honda', 'model': 'Civic', 'year': 2019}
# {'make': 'Ford', 'model': 'Mustang', 'year': 2021}
# {'make': 'Hyundai', 'model': 'i20', 'year': 2015}`} />


                    <div className="p-4">
                        <p className="text-md text-muted-foreground w-5/6 mb-4">
                            The <span className="text-primary">car_data</span> dictionary stores car information, where each key (e.g., <span className="text-primary">"car1"</span>) maps to another dictionary containing details like <span className="text-primary">make</span>, <span className="text-primary">model</span>, and <span className="text-primary">year</span>.
                        </p>

                        <p className="text-md text-muted-foreground w-5/6">
                            <span className="text-primary">display_items()</span>: Uses the <span className="text-primary">items()</span> method to iterate over key-value pairs in the dictionary.
                        </p>

                        <p className="text-md text-muted-foreground w-5/6">
                            <span className="text-primary">display_keys()</span>: Uses the <span className="text-primary">keys()</span> method to iterate over the keys in the dictionary.
                        </p>

                        <p className="text-md text-muted-foreground w-5/6">
                            <span className="text-primary">display_values()</span>: Uses the <span className="text-primary">values()</span> method to iterate over the values in the dictionary.</p>

                        <p className="text-md text-muted-foreground w-5/6 my-4">When the program is run, it displays:</p>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground w-5/6">All key-value pairs in the dictionary.</li>
                            <li className="text-md text-muted-foreground w-5/6">All keys in the dictionary.</li>
                            <li className="text-md text-muted-foreground w-5/6">All values in the dictionary.</li>
                        </ul>
                    </div>

                </div>
            </div>

            <TableOfContents items={[
                { id: 'discussion', title: 'Discussion', level: 'h2' },
                { id: 'data-structures', title: 'Data Structures', level: 'h3' },
                { id: 'lists', title: 'Lists', level: 'h3' },
                { id: 'dictionaries', title: 'Dictionaries', level: 'h3' },
                { id: 'sets', title: 'Sets', level: 'h3' },
                { id: 'references', title: 'References', level: 'h3' },
                { id: 'practical-activity', title: 'Practical Activity', level: 'h2' }
            ]} />
        </div>
    );
}