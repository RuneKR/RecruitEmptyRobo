Implement and write automatic tests for as many of the commands as possible. We do not expect you to finish everything.

Please commit often to make it easier for us to understanding your reasoning behind the code.

Use test driven development if you are a more senior developer. Skip tests if you are junior.

# Task
Create a program where you can interact with the CLI and use commands given in this assignement to navigate a bus around a grid. 
The bus is not allowed to leave the grid. 

# Grid
Top left corner have coordinates 0,0. The grid spans from 0:9 in both x and y direction. 

# Orientation
The orientation of the bus can be NORTH, WEST, EAST, SOUTH.

# Commands
No error handling is expected for commands that are not included in this assignment.

## PLACE
Initial placement of the bus. Takes arguments x y and orientation. The bus is not allowed to be placed outside of the grid.

## MOVE
Moves the bus 1 in the direction of the orientation if it is within the limitations of the grid.

## LEFT
Rotate the bus to the left

## RIGHT
Rotate the bus to the right

## REPORT
Console log x, y and orientation of the bus