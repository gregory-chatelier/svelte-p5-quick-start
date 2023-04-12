# Svelte-P5 Quick Start

This is a starter project for creating Svelte apps with P5.js sketches. It provides a basic setup with two-way bindings between the Svelte app and the P5 sketch.

## Purpose

The purpose of this project is to provide a quick and easy way to get started with building Svelte apps with P5.js sketches. It provides a basic setup with two-way bindings between the app and the sketch, and can be easily customized to fit your specific needs.

## Installation

To use this starter project, simply clone the repository and install the dependencies:

```bash
git clone https://github.com/gregory-chatelier/svelte-p5-quick-start.git
cd svelte-p5-quick-start
npm install
```

Start the development server: 

```bash
npm run dev
```

Open your browser and navigate to you localhost to see the running app.

Enjoy!

## Usage

This starter project provides a basic Svelte component, Sketch.svelte, that loads a P5JS sketch and allows two-way bindings of data between the Svelte app and the sketch.

When you run the `npm run build` command, Svelte will compile your components and generate a standalone `app.js` file, which will contain all the compiled JavaScript code necessary to run your app. Additionally, for each `.ts` file that contains a P5.js sketch, Svelte will compile it into a separate `.js` file, which will contain the compiled JavaScript code for that sketch.

These JavaScript files can then be used in your HTML file to run your app. When you include the `app.js` file, it will load all the necessary components, allowing you to use them in your app.

## Examples

The `src/sketches` directory contains some example sketches that demonstrate how to use P5.js in Svelte apps. You can use these examples as a starting point for your own sketches.

## Writing P5.js Scripts

When writing multiple P5.js scripts for an HTML page you have to use instance mode. You can still access P5 global functions from the instance mode methods.

You can also write your P5.js scripts in TypeScript. The P5.js typings are included with the starter project, so you can use them to get type checking and auto-completion in your IDE.

## License

This starter project is licensed under the MIT License. Feel free to use it for your own projects!