# Basic
The solution is pretty standard.
Everything is divided in folders.
Under api/ you'll find the client that creates the request and handle them
Under utils/ you'll find the file for data management and the fixtures file
I am using 3 POM's with the functions so it just has to be invoked in the test file
Strong Points:
- The Data is dinamic
- It's pretty segmented so is easier to read
- Has enough assertions to check that everything is working properly
  
Enhancements to be done:
- A Better way to navigate to the last page of the categories
- The only test could be separated in several functions or different tests

To Execute:
- Switch to the proper Branch "Qbika"
- Do the npm install - update
- Be sure to have Playwright installed if not do npm install playwright
- If wanted you could use npm run test to run the available test
