# Markdown to HTML Converter

A JavaScript-based Markdown to HTML Converter that transforms basic Markdown syntax into HTML elements and displays the output in real time.

This project allows users to write Markdown text and instantly see:
- The generated HTML code
- The rendered HTML preview

The application uses JavaScript regular expressions and DOM manipulation to convert Markdown syntax into HTML.

## Features

The converter supports the following Markdown elements:

- Headings
  - `# Heading 1` → `<h1>`
  - `## Heading 2` → `<h2>`
  - `### Heading 3` → `<h3>`

- Bold text
  - `**bold text**`
  - `__bold text__`

- Italic text
  - `*italic text*`
  - `_italic text_`

- Images
  - `![alt-text](image-source)`

- Links
  - `[link text](URL)`

- Blockquotes
  - `> quote text`

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Regular Expressions
- DOM Manipulation

## How It Works

1. The user enters Markdown text into the input area.
2. JavaScript reads the input using the `input` event listener.
3. The `convertMarkdown()` function processes the Markdown syntax using regular expressions.
4. The converted HTML code is displayed.
5. The generated HTML is rendered in the preview section.

## How to Run

1. Clone this repository
2. Open `index.html` in your browser
3. Enter Markdown text and view the converted HTML output

## Author

**Sangam Aishwarya**

GitHub: [sangam-aishwarya](https://github.com/sangam-aishwarya)
