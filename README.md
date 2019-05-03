# Notes App

A web app for viewing and search my notes stored in Dropbox on any device.

## Technology

- React
- React Router
- Web Workers

## Aims

- The app should consume a folder in Dropbox (storing credentials in local storage).
- Searching throughout the folder structure should be possible through the use of #tags and a general fuzzy search.
- An open document should be scanned and keywords searched for, and linked to if related information is found.
- Search and scanning text should be done asynchronously using web workers to prevent slowing down the UI.

## Performance Budget

| Metric              | Value    |
|---------------------|----------|
| JS Bundle           | < 250kb  |
| CSS Bundle          | < 100kb  |
| Time to first byte  | < 50ms   |
| Time to interactive | < 2000ms |
|---------------------|----------|

