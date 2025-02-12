# Candidate-Search
Deployed Link: https://candidate-search-github-jacobus.netlify.app/

![Image](https://github.com/user-attachments/assets/a0425f79-65ab-47c7-96d4-b881b9abbc83)

## Description

This is a candidate search application that calls the GitHub API and renders data in the browser. The user is brought tot eh Candidate Search page on launch, and is presented with a GitHub user that they can choose to "Add" to the Saved Candidates page, or "Reject" that candidate, which will remove them from the current search and present a new candidate automatically. The Saved Candidates page will save any candidates that have been "Added", and save those candidate options in local storage so the list will persist if the browser is refreshed or closed.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install this application you must download the repository's files. Which can be done by selecting the green [<>Code] button, and selecting the "Download Zip" option. This will automatically download the files into a zip folder that can be accessed in your "Downloads" folder. Move that zip folder to the location you have or will have a git repository linked. Once the zip folder is in it's desired location, you can open the folder in your source code editor. The files and their contents should display. Before starting the application, be sure to install the necessary packages. This can be done with npm install. As a double check, there should be npm i react, react-dom, react-icons, react-router-dom, typescript, eslint, and vite. Once the package is installed, the application is ready for further use.

## Usage

The user is taken to the candidate search page, and then is presented with a
GitHub user's profile. Selected if you want to "Add" or "Reject" the potential candidate. 
If "Rejected" the user will be removed, and a new potential candidate will be displayed.
If "Added" the candidate will be removed, and moved to the Saved Candidates page. The user will still be on the Search Candidates page, and a new potential candidate will be displayed.

## License

This project is licensed under the [MIT](https://img.shields.io/badge/License-MIT-yellow.svg) license.

## Contributors

Jacobus-Berghoefer

## Tests

Verify GitHub Repository is connected after zip folder download by checking 'git status'.
Verify vite is installed
Verify all packages are installed
Add a candidate
Reject a candidate
Select Saved Candidates
Select Search Candidates
Refresh the browser, and view added candidates on the saved candidates page
Close the browser, and view added candidates on the saved candidates page

## Questions

If you have any questions, feel free to reach out:

- GitHub: [Jacobus-Berghoefer](https://github.com/Jacobus-Berghoefer)
- Email: [jacobus.berghoefer@gmail.com](mailto:jacobus.berghoefer@gmail.com)