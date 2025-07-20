import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";
import { Callout } from "@/components/ui/callout";
import { TableOfContents } from "@/components/table-of-content";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/table";

export default function UnitPage() {
    return (
        <div className="flex flex-col-reverse lg:flex-row">
            <div className="space-y-8 w-5/6">
                <div className="inset-0 -z-10 w-5/6 bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-gray-950 dark:[background:radial-gradient(#1f2937_1px,transparent_1px)]">
                    <div className="relative">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/`}
                                    >
                                        <Home className="h-4 w-4" />
                                    </BreadcrumbLink>
                                    <ChevronRight className="h-4 w-4" />
                                    <BreadcrumbLink
                                        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""
                                            }/secure-software-development`}
                                    >
                                        Secure Software Development
                                    </BreadcrumbLink>
                                    <ChevronRight className="h-4 w-4" />
                                    <BreadcrumbPage>Unit 6</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">
                                    Unit 6: Using Linters to Support Python Testing
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 w-5/6">
                    <div id="q1">
                        <h2 className="text-xl font-bold mb-2">Question 1</h2>

                        <Callout>
                            <Collapsible>
                                <div className="flex items-center gap-3">
                                    <p className="text-md text-muted-foreground">Run</p>
                                    <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent bg-background">
                                        <span className="font-mono text-primary">styleLint.py</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </CollapsibleTrigger>
                                </div>
                                <CollapsibleContent className="py-4 mt-4">
                                    <CodeBlock
                                        language="python"
                                        code={`

# CODE SOURCE: SOFTWARE ARCHITECTURE WITH PYTHON 

def factorial(n):
""" Return factorial of n """
if n == 0:
return 1
else:
return n*factorial(n-1)`}
                                    />
                                </CollapsibleContent>
                            </Collapsible>

                            <ul className="list-disc pl-6 mt-4">
                                <li className="text-md text-muted-foreground">
                                    What happens when the code is run?
                                </li>
                                <li className="text-md text-muted-foreground">
                                    Can you modify this code for a more favourable outcome?
                                </li>
                                <li className="text-md text-muted-foreground">
                                    What amendments have you made to the code?
                                </li>
                            </ul>
                        </Callout>

                        <div id="q1-answers">
                            <h4 className="text-md text-muted-foreground mt-4 mb-4" id="q1-1">
                                1. What happens when the code is run?
                            </h4>
                            <p className="text-md text-muted-foreground">
                                When you run the current code, an IndentationError will occur
                                because:
                            </p>
                            <ul className="list-disc pl-6 mt-4">
                                <li className="text-md text-muted-foreground">
                                    The docstring is not properly indented
                                </li>
                                <li className="text-md text-muted-foreground">
                                    The if and else blocks are not properly indented
                                </li>
                                <li className="text-md text-muted-foreground">
                                    There are no colons after the if and else statements
                                </li>
                            </ul>

                            <h4 className="text-md text-muted-foreground mt-4 mb-4" id="q1-2">
                                2. Modified code for a more favorable outcome:
                            </h4>
                            <CodeBlock
                                language="python"
                                code={`
def factorial(n):
    """Return factorial of n"""
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

# Test the function
print(factorial(5))  # Example usage`}
                            />
                        </div>

                        <h4 className="text-md text-muted-foreground mt-4 mb-4" id="q1-3">
                            3. What amendments have you made to the code?
                        </h4>
                        <ul className="list-disc pl-6 mt-4">
                            <li className="text-md text-muted-foreground">
                                Added proper indentation to the docstring, if and else blocks,
                                and colons after the if and else statements
                            </li>
                            <li className="text-md text-muted-foreground">
                                Added spaces around operators (
                                <span className="font-mono text-primary">*</span> and{" "}
                                <span className="font-mono text-primary">-</span>) for better
                                readability
                            </li>
                            <li className="text-md text-muted-foreground">
                                Added a test case to the code
                            </li>
                        </ul>
                    </div>

                    <br />
                    <hr />
                    <br />

                    <div id="q2">
                        <h2 className="text-xl font-bold mb-2">Question 2</h2>
                        <Callout>
                            <Collapsible>
                                <p className="text-md text-muted-foreground font-mono mb-4">
                                    pip install pylint
                                </p>
                                <div className="flex items-center gap-3">
                                    <p className="text-md text-muted-foreground">
                                        Run <span className="font-mono text-primary">pylint</span>{" "}
                                        on
                                    </p>
                                    <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent bg-background">
                                        <span className="font-mono text-primary">
                                            pylintTest.py
                                        </span>
                                        <ChevronDown className="h-4 w-4" />
                                    </CollapsibleTrigger>
                                </div>
                                <CollapsibleContent className="py-4 mt-4">
                                    <CodeBlock
                                        language="python"
                                        code={`

    # SOURCE OF CODE: https://docs.pylint.org/en/1.6.0/tutorial.html

    import string
        
    shift = 3
    choice = raw_input("would you like to encode or decode?")
    word = (raw_input("Please enter text"))
    letters = string.ascii_letters + string.punctuation + string.digits
    encoded = ''
    if choice == "encode":
        for letter in word:
        if letter == ' ':
            encoded = encoded + ' '
        else:
            x = letters.index(letter) + shift
            encoded=encoded + letters[x]
        if choice == "decode":
            for letter in word:
            if letter == ' ':
                encoded = encoded + ' '
            else:
                x = letters.index(letter) - shift
                encoded = encoded + letters[x]
    
    print encoded`}
                                    />
                                </CollapsibleContent>
                            </Collapsible>

                            <p className="text-md text-muted-foreground mb-4">
                                Review each of the code errors returned. Can you correct each of
                                the errors identified by pylint?
                            </p>

                            <p className="text-md text-muted-foreground">
                                Before correcting the code errors, save the pylintTest.py file
                                with a new name (it will be needed again in the next question).
                            </p>
                        </Callout>

                        <h4 className="text-md text-muted-foreground mt-4 mb-4" id="q2-1">
                            Python 3 Modernization
                        </h4>

                        <ul className="list-disc pl-6 mt-4">
                            <li className="text-md text-muted-foreground">
                                Replaced{" "}
                                <span className="font-mono text-primary">raw_input</span> with{" "}
                                <span className="font-mono text-primary">input()</span>.
                            </li>
                            <li className="text-md text-muted-foreground">
                                Added parentheses to{" "}
                                <span className="font-mono text-primary">print()</span>.
                            </li>
                        </ul>

                        <h4 className="text-md text-muted-foreground mt-4 mb-4" id="q2-2">
                            Code Structure Improvements
                        </h4>

                        <ul className="list-disc pl-6 mt-4">
                            <li className="text-md text-muted-foreground">
                                Encapsulated logic in a{" "}
                                <span className="font-mono text-primary">main()</span> function
                                for better modularity.
                            </li>
                            <li className="text-md text-muted-foreground">
                                Used{" "}
                                <span className="font-mono text-primary">
                                    if __name__ == "__main__":
                                </span>{" "}
                                to allow script reusability.
                            </li>
                            <li className="text-md text-muted-foreground">
                                Fixed indentation and spacing for PEP 8 compliance.
                            </li>
                        </ul>

                        <h4 className="text-md text-muted-foreground mt-4 mb-4" id="q2-3">
                            Pylint Convention Adherence
                        </h4>

                        <ul className="list-disc pl-6 mt-4">
                            <li className="text-md text-muted-foreground">
                                Added docstrings for module and functions.
                            </li>
                            <li className="text-md text-muted-foreground">
                                Renamed <span className="font-mono text-primary">shift</span> to{" "}
                                <span className="font-mono text-primary">SHIFT</span> (constants
                                should be uppercase).
                            </li>
                            <li className="text-md text-muted-foreground">
                                Corrected logical flow by separating encode and decode into
                                distinct blocks using{" "}
                                <span className="font-mono text-primary">if-elif</span>.
                            </li>
                        </ul>

                        <Collapsible>
                            <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent bg-background">
                                <span>Refactored code</span>
                                <ChevronDown className="h-4 w-4" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="py-4 mt-4">
                                <CodeBlock
                                    language="python"
                                    code={`
"""
Caesar Cipher Encoder/Decoder
Module: pylintTest_refactored.py
Refactored to comply with PEP 8 and Pylint standards.
"""

import string

SHIFT = 3  # Constant for shift value

def caesar_cipher(text: str, operation: str) -> str:
    """
    Encodes or decodes text using a Caesar cipher.

    Args:
        text (str): Input text to process.
        operation (str): 'encode' or 'decode'.

    Returns:
        str: Processed text.
    """
    letters = string.ascii_letters + string.punctuation + string.digits
    result = []

    for letter in text:
        if letter == ' ':
            result.append(' ')
        else:
            try:
                index = letters.index(letter)
                new_index = index + SHIFT if operation == "encode" else index - SHIFT
                result.append(letters[new_index % len(letters)])
            except ValueError:
                result.append(letter)  # Preserve characters not in letters

    return ''.join(result)

def main() -> None:
    """Handles user interaction and executes cipher operations."""
    choice = input("Would you like to encode or decode? ").strip().lower()
    text = input("Please enter text: ")

    if choice in ("encode", "decode"):
        processed_text = caesar_cipher(text, choice)
        print(f"Result: {processed_text}")
    else:
        print("Invalid choice. Please enter 'encode' or 'decode'.")

if __name__ == "__main__":
    main()`}
                                />
                            </CollapsibleContent>
                        </Collapsible>
                    </div>

                    <br />
                    <hr />
                    <br />

                    <div id="q3">
                        <h2 className="text-xl font-bold mb-2">Question 3</h2>
                        <Callout>
                            <p className="text-md text-muted-foreground font-mono mb-2">
                                pip install flake8
                            </p>
                            <p className="text-md text-muted-foreground">
                                Run <span className="font-mono text-primary">flake8</span> on{" "}
                                <span className="font-mono text-primary">pylintTest.py</span>
                            </p>
                            <p className="text-md text-muted-foreground">
                                Review the errors returned. In what way does this error message
                                differ from the error message returned by pylint?
                            </p>
                            <p className="text-md text-muted-foreground mt-4">
                                Run <span className="font-mono text-primary">flake8</span> on{" "}
                                <span className="font-mono text-primary">metricTest.py</span>.
                                Can you correct each of the errors returned by flake8? What
                                amendments have you made to the code?
                            </p>
                        </Callout>

                        <h4 className="text-md text-muted-foreground mt-4 mb-4" id="q3-1">
                            Changes applied to{" "}
                            <span className="font-mono text-primary">metricTest.py</span>
                        </h4>

                        <p className="text-md mt-4">Syntax & Operators</p>
                        <ul className="list-disc pl-6 mt-4">
                            <li className="text-md text-muted-foreground">
                                Replaced en dash (
                                <span className="font-mono text-primary">–</span>) with hyphen (
                                <span className="font-mono text-primary">-</span>) in line 20.
                            </li>
                        </ul>

                        <p className="text-md mt-4">Whitespace</p>
                        <ul className="list-disc pl-6 mt-4">
                            <li className="text-md text-muted-foreground">
                                Added spaces after commas (e.g.,{" "}
                                <span className="font-mono text-primary">x, y</span>).
                            </li>
                            <li className="text-md text-muted-foreground">
                                Added spaces around operators (e.g.,{" "}
                                <span className="font-mono text-primary">{"delta <= 30"}</span>
                                ).
                            </li>
                        </ul>

                        <p className="text-md mt-4">Indentation</p>
                        <ul className="list-disc pl-6 mt-4">
                            <li className="text-md text-muted-foreground">
                                Fixed to 4 spaces per level.
                            </li>
                        </ul>

                        <p className="text-md mt-4">Blank Lines</p>
                        <ul className="list-disc pl-6 mt-4">
                            <li className="text-md text-muted-foreground">
                                Added 2 blank lines around functions/classes.
                            </li>
                        </ul>

                        <p className="text-md mt-4">Line Length</p>
                        <ul className="list-disc pl-6 mt-4">
                            <li className="text-md text-muted-foreground">
                                Broke long lines using parentheses (PEP 8 line continuation).
                            </li>
                        </ul>

                        <p className="text-md mt-4">Docstrings</p>
                        <ul className="list-disc pl-6 mt-4">
                            <li className="text-md text-muted-foreground">
                                Rewrote to imperative mood (e.g.,{" "}
                                <span className="font-mono text-primary">
                                    """Return sum..."""
                                </span>
                                ).
                            </li>
                        </ul>

                        <p className="text-md mt-4">Class Improvements</p>
                        <ul className="list-disc pl-6 mt-4">
                            <li className="text-md text-muted-foreground">
                                Used <span className="font-mono text-primary">super()</span> in{" "}
                                <span className="font-mono text-primary">D.__init__</span> for
                                proper inheritance.
                            </li>
                            <li className="text-md text-muted-foreground">
                                Simplified conditional logic (e.g.,{" "}
                                <span className="font-mono text-primary">
                                    {"return x - y if x > y else x + y"}
                                </span>
                                ).
                            </li>
                        </ul>

                        <Collapsible>
                            <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent bg-background">
                                <span>Refactored code</span>
                                <ChevronDown className="h-4 w-4" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="py-4 mt-4">
                                <CodeBlock
                                    language="python"
                                    code={`
"""
Metric example - Module used as a testbed for static checkers.
This is a mix of functions and classes for demonstration purposes.
"""

import random


def fn(x, y):
    """Return the sum of two numbers."""
    return x + y


def find_optimal_route_to_my_office_from_home(
        start_time,
        expected_time,
        favorite_route='SBS1K',
        favorite_option='bus'):
    """Determine optimal route based on time difference."""
    delta = (expected_time - start_time).total_seconds() / 60.0

    if delta <= 30:
        return 'car'
    elif 30 < delta < 45:
        return ('car', 'metro')
    elif 45 < delta < 60:
        return ('bus:335E', 'bus:connector')
    elif delta > 80:
        return random.choice(('bus:330', 'bus:331',
                            ':'.join((favorite_option, favorite_route))))
    elif delta > 90:
        return ':'.join((favorite_option, favorite_route))
    return None


class C:
    """A class demonstrating basic inheritance."""

    def __init__(self, x, y):
        self.x = x
        self.y = y

    def f(self):
        """Pass-through method."""
        pass

    def g(self, x, y):
        """Return sum based on comparison."""
        if self.x > x:
            return self.x + self.y
        return x + self.y


class D(C):
    """Subclass of C with overridden methods."""

    def __init__(self, x):
        super().__init__(x, 0)

    def f(self, x, y):
        """Return difference or sum based on comparison."""
        return x - y if x > y else x + y

    def g(self, y):
        """Return sum or difference based on comparison."""
        return self.x + y if self.x > y else y - self.x`}
                                />
                            </CollapsibleContent>
                        </Collapsible>
                    </div>

                    <br />
                    <hr />
                    <br />

                    <div id="q4">
                        <h2 className="text-xl font-bold mb-2">Question 4</h2>
                        <Callout>
                            <Collapsible>
                                <p className="text-md text-muted-foreground font-mono mb-4">
                                    pip install mccabe
                                </p>
                                <div className="flex items-center gap-3">
                                    <p className="text-md text-muted-foreground">
                                        Run <span className="font-mono text-primary">mccabe</span>{" "}
                                        on
                                    </p>
                                    <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent bg-background">
                                        <span className="font-mono text-primary">sums.py</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </CollapsibleTrigger>
                                    <p className="text-md text-muted-foreground">
                                        What is the result?
                                    </p>
                                </div>
                                <CollapsibleContent className="py-4 mt-4">
                                    <CodeBlock
                                        language="python"
                                        code={`

# SOURCE OF CODE: https://realpython.com/python-testing/

def test_sum():
    assert sum([1, 2, 3]) == 6, "Should be 6"

if __name__ == "__main__":
    test_sum()
    print("Everything passed")`}
                                    />
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible className="mt-4">
                                <div className="flex items-center gap-3">
                                    <p className="text-md text-muted-foreground">
                                        Run <span className="font-mono text-primary">mccabe</span>{" "}
                                        on
                                    </p>
                                    <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent bg-background">
                                        <span className="font-mono text-primary">sums2.py</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </CollapsibleTrigger>
                                    <p className="text-md text-muted-foreground">
                                        What is the result?
                                    </p>
                                </div>
                                <CollapsibleContent className="py-4 mt-4">
                                    <CodeBlock
                                        language="python"
                                        code={`

# SOURCE OF CODE: https://realpython.com/python-testing/

def test_sum():
    assert sum([1, 2, 3]) == 6, "Should be 6"

def test_sum_tuple():
    assert sum((1, 2, 2)) == 6, "Should be 6"

if __name__ == "__main__":
    test_sum()
    test_sum_tuple()
    print("Everything passed")`}
                                    />
                                </CollapsibleContent>
                            </Collapsible>

                            <p className="text-md text-muted-foreground mb-4">
                                What are the contributors to the cyclomatic complexity in each
                                piece of code?
                            </p>
                        </Callout>

                        <p className="text-md text-muted-foreground mt-4 mb-4" id="q4-1">
                            <span className="font-mono text-primary">mccabe</span> result for{" "}
                            <span className="font-mono text-primary">sums.py</span>
                        </p>
                        <CodeBlock
                            language="python"
                            code={`
4:0: 'test_sum' 1
If 7 2  `}
                        />
                        <ul className="list-disc pl-6 mt-4">
                            <li className="text-md text-muted-foreground">
                                <span className="font-mono text-primary">test_sum</span>{" "}
                                function: Cyclomatic complexity ={" "}
                                <span className="font-mono text-primary">1</span> (linear
                                control flow).
                            </li>
                            <li className="text-md text-muted-foreground">
                                Global scope{" "}
                                <span className="font-mono text-primary">
                                    (if __name__ block)
                                </span>
                                : Complexity = <span className="font-mono text-primary">2</span>{" "}
                                (due to the if branch).
                            </li>
                        </ul>

                        <p className="text-md text-muted-foreground mb-4 mt-4" id="q4-2">
                            <span className="font-mono text-primary">mccabe</span> result for{" "}
                            <span className="font-mono text-primary">sums2.py</span>
                        </p>
                        <CodeBlock
                            language="python"
                            code={`
4:0: 'test_sum' 1
7:0: 'test_sum_tuple' 1
If 10 2`}
                        />
                        <ul className="list-disc pl-6 mt-4">
                            <li className="text-md text-muted-foreground">
                                <span className="font-mono text-primary">test_sum</span>{" "}
                                function: Complexity ={" "}
                                <span className="font-mono text-primary">1</span> (linear
                                assert).
                            </li>
                            <li className="text-md text-muted-foreground">
                                <span className="font-mono text-primary">test_sum_tuple</span>{" "}
                                function: Complexity ={" "}
                                <span className="font-mono text-primary">1</span> (linear
                                assert).
                            </li>
                            <li className="text-md text-muted-foreground">
                                Global scope{" "}
                                <span className="font-mono text-primary">
                                    (if __name__ block)
                                </span>
                                : Complexity = <span className="font-mono text-primary">2</span>{" "}
                                (due to the if branch).
                            </li>
                        </ul>

                        <p className="text-md text-muted-foreground mt-4 mb-4" id="q4-3">
                            What is the cyclomatic complexity of the code?
                        </p>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>File</TableHead>
                                    <TableHead>Component</TableHead>
                                    <TableHead>Complexity</TableHead>
                                    <TableHead>Contributors</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>sums.py</TableCell>
                                    <TableCell>test_sum</TableCell>
                                    <TableCell>1</TableCell>
                                    <TableCell>No branches (single assert)</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>sums.py</TableCell>
                                    <TableCell>Global if __name__</TableCell>
                                    <TableCell>2</TableCell>
                                    <TableCell>Branch for script vs. module execution</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>sums2.py</TableCell>
                                    <TableCell>test_sum</TableCell>
                                    <TableCell>1</TableCell>
                                    <TableCell>No branches (single assert)</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>sums2.py</TableCell>
                                    <TableCell>test_sum_tuple</TableCell>
                                    <TableCell>1</TableCell>
                                    <TableCell>No branches (single assert)</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>sums2.py</TableCell>
                                    <TableCell>Global if __name__</TableCell>
                                    <TableCell>2</TableCell>
                                    <TableCell>Branch for script vs. module execution</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
            <TableOfContents
                items={[
                    {
                        id: "q1",
                        title: "Question 1",
                        level: "h2",
                    },
                    {
                        id: "q1-1",
                        title: "What happens when the code is run?",
                        level: "h4",
                    },
                    {
                        id: "q1-2",
                        title: "Modified code for a more favorable outcome",
                        level: "h4",
                    },
                    {
                        id: "q1-3",
                        title: "What amendments have you made to the code?",
                        level: "h4",
                    },
                    {
                        id: "q2",
                        title: "Question 2",
                        level: "h2",
                    },
                    {
                        id: "q2-1",
                        title: "Python 3 Modernization",
                        level: "h4",
                    },
                    {
                        id: "q2-2",
                        title: "Code Structure Improvements",
                        level: "h4",
                    },
                    {
                        id: "q2-3",
                        title: "Pylint Convention Adherence",
                        level: "h4",
                    },
                    {
                        id: "q3",
                        title: "Question 3",
                        level: "h2",
                    },
                    {
                        id: "q3-1",
                        title: "Changes applied to metricTest.py",
                        level: "h4",
                    },
                    {
                        id: "q4",
                        title: "Question 4",
                        level: "h2",
                    },
                    {
                        id: "q4-1",
                        title: "mccabe Result for sums.py",
                        level: "h4",
                    },
                    {
                        id: "q4-2",
                        title: "mccabe Result for sums2.py",
                        level: "h4",
                    },
                    {
                        id: "q4-3",
                        title: "What are the contributors to the cyclomatic complexity in each piece of code?",
                        level: "h4",
                    },
                ]}
            />
        </div>
    );
}
