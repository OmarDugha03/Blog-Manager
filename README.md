# Blog Manager

A beautiful and responsive Web page app build using Nextjs Typescript and Tailwind CSS.

## How to use it?

Simply go to the official website [click here](https://blog-manager-i864.vercel.app/). Afterward, sign up for free and try the primer version; no credit card is needed. From there, you can import and export your libraries. In essence, envision Blog Manager as a blueprint that illustrates the artistry of frontend proficiency. Though not yet functional, it underscores the intricate craftsmanship required to craft captivating, intuitive user interfaces. Engage in the visualization of its potential – a frontend marvel that transforms theoretical enjoyment into tangible reality through the craft of conceptual design.

## Please note that

**Blog Manager Manager, in its conceptual form, is a canvas that paints a picture of frontend mastery. While not a functioning app, it highlights the depth of frontend skills in creating engaging, user-friendly interfaces. Immerse yourself in the visualization of what could be – a frontend masterpiece that brings the theoretical joy of reading to life through the art of conceptual design.**

## How I developed this app ?

### First My tech stack for this project

I used the most modern web technologies such as Next js 13 , it used for React applications. Also I used TypeScript e for adding static typing to JavaScript which Enhance code quality and maintainability through static typing. And for the Styling I used Tailwind css for rapidly building custom designs.Instead of writing custom CSS, developers can use predefined classes to style their HTML elements and for that you do not need to leave your html file and go to another file to add styles which make developing process easer than ever !.

> what about UI libraries ?

For this part I have [HeadlessUI](https://headlessui.com/) but why ? beacuse I want a library that provides unstyled, fully accessible UI components that you can easily customize to fit the design of your application and I found all of these points in HeadlessUI .

> What about utils.ts ?

It is a utility function for combining class names from the clsx library and tailwind-merge.
The final result returned by the cn function is a unified set of class names that have been combined using clsx and merged using tailwind-merge. This set of classes can then be applied to HTML elements to style them according to the defined styles in your project, including both custom and Tailwind CSS styles.

> Project Structure :

- components folder : contain ui folder and the remaining components . ui folder is only for reusable components across the whole app.
- lib : for utility functions .
- public : this directory is a special directory that allows you to serve static assets, such as images, fonts, and other files, directly to the client without going through the server. Anything you place in the public directory is served at the root level of your application.
- src : this directory is a conventional directory where you organize your source code .
- app : this folder is a game changer , because of a lot of reasons and features , one of the features of the App Router is the built-in Metadata API, which is used as an SEO tool to optimize websites for search engines. This API provides a range of SEO settings, including the Open Graph protocol, to enhance the visibility of websites to search engines. Other features of the App Router include server actions, nested routes & layouts, and advanced features like server actions, data revalidation, parallel routes, and route interception.

I highly recommend to checkout the official website from [here](https://nextjs.org/).
