## Names:
Michael Sun

## GH Pages:
Expose: https://mwsun2165.github.io/cse110-lab5/expose.html

Explore: https://mwsun2165.github.io/cse110-lab5/explore.html

## Explore Pt. 3
1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, I would not consider a unit test sufficient for testing this feature; unit tests are more tailored towards testing a single unit of code (e.g. a function). Sending messages involves many moving parts, so I would need a more complex testing setup for this.

2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, as I'd only be testing a specific piece of logic which is exactly what unit tests are designed for. The code in the app for this part is likely a single function that doesn't involve a database interaction (like question 1). For example, I could write a unit tests that feeds 0, -1, 79, 80, and 81 characters and checks for the right output.