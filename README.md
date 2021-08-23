# II Openathon Custom Open Cloud

- [II Openathon Custom Open Cloud](#ii-openathon-custom-open-cloud)
  - [What we are going to do](#what-we-are-going-to-do)
  - [Openathon Labs](#openathon-labs)
  - [Prerequisites](#prerequisites)

![II Openathon Custom Open Cloud](https://github.com/Albarian/openathonFY19/raw/master/resources/images/IIopenathon_customopencloud.png "II Openathon Custom Open Cloud")

You are welcome to a new **Openathon** edition organized for the **Accenture Technology Custom Open Cloud community** where, once again, we will have the opportunity to discover, in a practical way, the possibilities offered by the different architectures and leading frameworks in the market.

As you already knows, this time we will learn to develop a **FrontEnd web application** using **React**. We will also use some of the recommended best practices such as routing, asynchronous REST API access, reusable components and state management.

React’s strongest capability is the creation of web interfaces based on _reusable_ components. Therefore, we are going to create and reuse our own components while learning how to manage their life cycle, the management of props and the JSX syntax while exercising our knowledge of JavaScript (ES6).

## What we are going to do

We will learn how to develop a web application using React, playing with **props**, **JSX**, **Virtual DOM**, **components**, routing, REST API consumption, components reuse… and applying some of the recommended good practices like **Single responsibility principle**, **Isolation**, **functional programming** and **prototypal inheritance**.

The web application will consist on a Main and two detail pages:

![Web Sitemap](resources/images/web-sitemap.png "Web Sitemap")

The main page of the application will have this structure:

![Web Homepage](resources/images/web-home.png "WEeb Homepage")

The main page is a modularized page that takes advantage of many reusable components, whose hierarchy can be seen in the following picture:

![Web Components in use](resources/images/web-components.png "Web Components in use")

To provide data to the page we will also use a mocked REST API endpoint emulating the [Accenture site](https://www.accenture.com/us-en/company) data services:

![Components and API](resources/images/web-api.png "Components and API")

## Openathon Labs

This edition of the Openathon is divided in the following labs:

| Lab                                | Title                                   |
| ---------------------------------- | --------------------------------------- |
| [Lab 00](/labs/lab-00)             | JavaScript and React                    |
| [Lab 01](/labs/lab-01)             | Starting a New React Project            |
| [Lab 02](/labs/lab-02)             | React Fundamentals                      |
| [Lab 03](/labs/lab-03)             | Fetching Data in your React Application |
| [Lab 04](/labs/lab-04)             | Using React Router                      |
| [Lab 05](/labs/lab-05)             | Completing your App Home Page           |
| [Lab 06](/labs/lab-06)             | Using Nested Routes                     |
| [Lab 07](/labs/lab-07)             | Form Components in React                |
| [Lab 08](/labs/lab-08)\*           | Integrating Axios Library               |
| [Lab 09](/labs/lab-09)\*           | Persisting data in your JSON Server     |
| [Lab 10](/labs/lab-10)\*           | Context and useRef                      |
| [Lab Testing](/labs/lab-testing)\* | React Unit Testing                      |

\* Optional Labs for further learning

## Prerequisites

1. Install **Visual Studio Code** for your operating system:

   **Visual Studio Code** is a source code editor with support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring.

   [Click here](https://code.visualstudio.com/) to download and install

2. Install **Node.js** for your operating system:

   You’ll need to have Node >= 10.16 and npm >= 5.6 on your machine.

   **Node.js** is a free, open source server environment that runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.) using the JavaScript runtime built on Chrome's V8 JavaScript engine.

   [Click here](https://nodejs.org/en/download/) to download and install the LTS version.

   This installation will also install **npm**, the package manager for Node.js and the world's largest software registry.

3. Install **json-server**

   Open your terminal or command prompt and run:

   ```sh
   npm install json-server -g
   ```

   **JSON Server** is a Node module that can be used to create demo REST web services in a few minutes using a JSON file to provide sample data. We will configure it later.

   [Click here](https://github.com/typicode/json-server) to know more.

4. Download and install **React Developer Tools**

   **React Developer Tools** is a Chrome DevTools extension for the open-source React JavaScript library. It allows you to inspect the React component hierarchies in the Chrome Developer Tools.

   [Click here](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) to download and install.

[Next >](labs/lab-00)
