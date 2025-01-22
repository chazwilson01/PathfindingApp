# Pathfinding Visualizer

## Overview

Pathfinding Visualizer is a web application built with React.js that demonstrates the functionality of popular pathfinding algorithms, including Dijkstra's Algorithm and A\*. It provides an interactive and visual way to understand how these algorithms work to find the shortest path between two points in a grid.

## Features

- **Interactive Grid**: Create walls, set a start point, and set an end point.
- **Algorithm Visualization**: Watch step-by-step animations of Dijkstra's Algorithm and A\* in action.
- **Reset Functionality**: Easily reset the grid to start a new visualization.

## Technologies Used

- **React.js**: Frontend framework for building the user interface.
- **CSS**: Styling for the grid and UI elements.

## Installation

Follow these steps to run the application locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/pathfinding-visualizer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pathfinding-visualizer
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## How to Use

1. **Set Start and End Points**:

   - Drag and move the start and end node.

2. **Add Walls**:

   - Click and drag your mouse over cells to create walls that block the path.

3. **Choose an Algorithm**:

   - Select either Dijkstra's Algorithm or A\* from the control panel.

4. **Visualize**:

   - Click the "Visualize" button to watch the algorithm find the shortest path.

5. **Reset**:

   - Click the "Clear Board" button to clear the grid and start over.

## Algorithms Explained

### Dijkstra's Algorithm

Dijkstra's Algorithm guarantees the shortest path by exploring all possible paths systematically, assigning a cost to each cell, and updating the cost as it traverses the grid.

### A\* Algorithm

A\* is a heuristic-based algorithm that combines the cost-so-far (like Dijkstra's) with an estimated cost to the goal, making it faster and more efficient in many cases.

## Future Improvements

- Add more algorithms like BFS and DFS.
- Support weighted grids.
- Mobile responsiveness.
- Save and load grid configurations.

## Acknowledgements

- Inspired by similar pathfinding visualizer projects.
- Special thanks to freeCodeCamp and other online resources for algorithm explanations.

## Contact

Feel free to reach out with feedback or questions:

- **Email**: [wilsonc98@uww.edu](mailto\:wilsonc98@uww.edu)
- **GitHub**: chazwilson01

