I Identified the following code smells:

- Repeated Code
  - Used extract function to create updateCounter() function that could be called instead of those three constantly repeated lines of code.
- Comments
  - Comments everywhere made the code difficult to read. Also used extract function on the background color calculator and explained what it did in the name of the function so the comments weren't necessary.
  - Removed most of the comments for clarity
- Mysterious Name
  - Constants, c, bI, bD, bR, ctr were not very clear. Renamed Variables to counter, incrementButton, decrementButton etc. Made the code easier to read due to clarity
- Speculative Generality
  - Generalized constants a, b, h were created, but only really used once. Inlined the string values into the HTML. Lessened the lines of code and again, got rid of mysteriously named constants that would take time to understand.
  - setup() and start() were unecessary and messed with the scope of count when creating updateCounter(). Inlined functions setup() and start().
