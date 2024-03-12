# Frontend Mentor - Dictionary web app solution

This is a solution to the [Dictionary web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Project Details](#project-details)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/jyotiogennavar/dictonary-app)
- Live Site URL: [Add live site URL here](https://dictonary-app-lovat.vercel.app/)

## Project Details
Word Finder is a React-based web application designed to help users find definitions of words. It allows users to search for words and retrieves detailed information about those words, including their phonetics, meanings, and examples of usage.

### Features
- User-friendly interface for searching words
- Display of detailed word information including phonetics and meanings
- Theme toggle functionality (light and dark mode)
- Font selection feature for better readability

### Component Structure

The project is structured using various React components, each responsible for specific functionalities:

**App Component**: The main component responsible for rendering the application. It manages the theme state and provides the ThemeProvider and FontProvider contexts to its children.

**Header Component**: Renders the header section of the application. It includes the application logo, font switcher, and theme toggle switch.

**Results Component**: Displays the search results containing detailed information about the searched word. It includes the search input field and handles fetching data from the API.

**Search Component**: Renders the search input field and handles user input for searching words.

**FontSwitcher Component**: Allows users to switch between different font options for better readability.

**ToggleSwitch Component**: Renders a toggle switch for theme switching.

### API Used
The project utilizes the DictionaryAPI to fetch word data based on user searches. The API provides comprehensive information about words, including their phonetics, meanings, and examples of usage.

- API Endpoint: https://api.dictionaryapi.dev/api/v2/entries/en/{searchTerm}
- HTTP Method: GET
- Parameters: searchTerm (the word to be searched)


### Libraries/Frameworks Used

- React: Used for building the user interface and managing application state.
- Styled Components: Used for styling React components with dynamic props and themes.
- Framer Motion: Used for creating smooth animations, particularly for the toggle switch component.
- Lucide-React: Provides icons for the application interface, such as the moon icon for the dark mode toggle.

### Theme and Styling
The application supports both light and dark themes for better user experience. Theme switching is achieved using the ThemeProvider context provided by the styled-components library. The theme colors are defined in a separate constants file and dynamically applied to styled components based on the selected theme.

### Font Selection
To enhance readability and user experience, the application allows users to select different font options. The selected font is managed through the FontProvider context and applied to styled components dynamically.

### Future Improvements
Implement user authentication to save user preferences such as selected theme and font.
Enhance error handling for API requests to provide more informative feedback to users.
Implement pagination for search results to handle large datasets more efficiently.
Add support for additional languages and dictionaries.

## What I learned

In this project I learned 
- How to fetch data from an API
- How to use Context API to implement Theme and Font switch

