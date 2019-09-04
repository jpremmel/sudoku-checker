# _Sudoku Checker_

#### _An application to test whether a sudoku puzzle was properly solved, 4 Sept 2019_

#### By _**Anita Kemp and Jacqueline Remmel**_

## Specifications

| Behavior | Input | Output |
| -------- | :---------: | :---------: |
|Any input includes any integers other than 1-9, the puzzle fails|"10" "!"|Fails|
|Checking whether integers 1-9 exist in a row of numbers|1,2,3,4,5,6,7,8,9| Passes|
|Checking that no integers between 1-9 in a row are repeated|1,2,2,3,4,5,6,7,8,9| Fails|
|Constructs a column out of integers at a particular index in the rows and makes sure it passes previous two specs|All integers at index 0: 1,2,3,4,5,6,7,8,9|Passes|

## Setup/Installation Requirements

* _Clone this repository and navigate to the project directory._
* _Run the command "npm install"_
* _Run the command "npm run build"_
* _Navigate to the "dist" folder and open the "index.html" file in a browser._

## Technologies Used

_JavaScript, jQuery, CSS, Bootstrap, HTML_

### License

*Open-source*

Copyright (c) 2019 **_Anita Kemp and Jacqueline Remmel_**
