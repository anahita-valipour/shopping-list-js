# 🛒 shopping-list-js

A responsive shopping list built with **HTML, CSS, and Vanilla JavaScript**. Add, edit, search, and delete items, and manage their purchase status.

## Description

`shopping-list-js` is a practice project focused on DOM manipulation, events, and translating requirements into application logic.

The interface uses Persian text, a right-to-left layout, and the IRANYekanX font. It adapts to desktop and mobile screens.

## Features

### Adding items

- Add new items to the end of the list
- Reject empty or whitespace-only input
- Display feedback messages
- Automatically clear the input after adding an item

### Editing items

- Edit an item using its dedicated Edit button
- Load the current name into the input field
- Save the updated name without creating a new item
- Handle Edit button clicks through event delegation

### Removing items

- Delete individual items using their Delete buttons
- Handle Delete button clicks through event delegation
- Support dynamically created items

### Searching items

- Filter the list while typing in the search field
- Show items whose names contain the search text
- Hide unrelated items
- Show all items when the search field is cleared

### Purchase status

- Toggle items between bought and not bought
- Strike through the name of a purchased item
- Update the purchase status button text

### Item counters

- Display the total number of items
- Display the number of purchased items
- Display the number of remaining items

## Design

- Responsive layout for desktop and mobile
- Persian interface with right-to-left support
- IRANYekanX typography
- Pencil and trash icons for Edit and Delete buttons
- Small visual markers beside item names
- Styled search field with a search icon
- Hover effects and keyboard focus styles
- Reduced motion support

## Technologies

- HTML5
- CSS3 — Flexbox, Grid, media queries, and pseudo-elements
- Vanilla JavaScript — DOM manipulation, events, and event delegation

No frameworks or JavaScript libraries are used.

## Live Demo

[View the live project](https://anahita-valipour.github.io/shopping-list-js/)

## Preview

| Mobile View | Desktop View |
| :---: | :---: |
| ![Mobile preview](./screenshots/mobile.gif) | ![Desktop preview](./screenshots/desktop.gif) |

## How to Run

Clone the repository:

```bash
git clone https://github.com/anahita-valipour/shopping-list-js.git
```

Open `index.html` in your browser, or run the project using the Live Server extension in VS Code.

No build step or package installation is required.

## Project Structure

```text
shopping-list-js/
├── index.html
├── style.css
├── script.js
├── fonts/
│   ├── IRANYekanX-Regular.woff2
│   └── IRANYekanX-Bold.woff2
├── screenshots/
│   ├── mobile.gif
│   └── desktop.gif
└── README.md
```

## Learning Goals

This project was built to practice:

- Creating, updating, and removing DOM elements
- Handling user interactions
- Using event delegation for dynamically created buttons
- Managing editing and purchase states
- Validating user input
- Filtering items with string methods
- Using data attributes through `dataset`
- Building responsive interfaces
- Breaking requirements into smaller logical steps

## Author

**Anahita Valipour**

[GitHub](https://github.com/anahita-valipour)

## Project Purpose

Created for learning and portfolio practice.