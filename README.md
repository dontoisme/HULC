# HULC
Hogan's Ultimage Oil Calculator

## Goals
The goals of the HULC are to webify a tool that my Grandpa has been using for years in his work. It's fairly simple, but when the price of oil went above $99 a barrel his tool became useless. My family has made several attempts at this tool, and its kind of becoming a "hello world" for our family. This is my take on is using the tools that I like (Meteor, Atmosphere, SASS) and an attempt to learn a new one (FamousJS).

# App structure
- A simple splash page with a prompt to login.
- Once logged in can start to edit the details for a calcuation.
    + Create new Company (most likely used the first time.
    + Create new Operator
    + Create new Field with Details
    + Calculation
    + Calculation Results (Save or Print)
        * Visualization + Table Data

A company can have many operators, can work on many fields. We aren't caculating on a per well basis. Phew. Each calculation should be saved for the Field at the time it is run, and can be [Future] compared to other calculations.

# Todo
- [ ] Splash page with Login
- [ ] Set up Collections for:
    - [ ] Company
    - [ ] Operator
    - [ ] Field
    - [ ] Results
- [ ] Page to create new:
    - [ ] Company (Part of initial login) create a company.
    - [ ] Operator
    - [ ] Field
    - [ ] Calculation
- [ ] Page to list/view:
    - [ ] Company (make this part of the account)
    - [ ] Operators
    - [ ] Fields
    - [ ] Results
- [ ] Calculate Results and have proper output.
    - [ ] Save as PDF or print




