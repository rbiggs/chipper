Chipper
=======

A CSS grid system for tablets using the flex box model.

##Features
Chipper is built using CSS flex box components. Because of how Browsers render flex boxes, the grids may not always be pixel perfect.

Chipper allows you to create grids as rows of columns. The basic components are `.grid` and `.col`. Put `.grid` on a div. Then add divs with the class `.col` to create columns. Chipper has the following flex classes to control the widths of columns in relation to each other in a grid:

    .flex-1
    .flex-2
    .flex-3
    .flex-4
    .flex-5
    .flex-6
    .flex-7
    .flex-8
    .flex-9
    .flex-10

    &lt;div class='grid'&gt;
      &lt;div class='flex-5'&gt;&lt;/div&gt;
      &lt;div class='flex-5'&gt;&lt;/div&gt;
    &lt;/div&gt;

This allows you to create grids with up to 10 columns. A single div with a class of `.flex-10` will stretch to fill the width of the grid. Whereas two columns of `.flex-5` will splite the available space between them. The value of all the columns in a grid should add up to 10. If the value is greater, the columns will be push off to the right. You can change this behavior by add the class `.wrap` to the grid itself. This will allow any columns that exceed the value of ten to wrap to the next row.

##Columns with Gutters

You can separate you columns with gutters. Chipper has two gutter widths: five pixels and ten pixels. You can always define a class to create your own gutter value. 

To create a grid of columns with gutters, put one of these classes on the grid div:

    .gutter-5
    .gutter-10

##Fixed Width Columns

You can create a column with a fixed with mixed with others that are dynamic. You would just need to add an id or class to the column, then define a width and set its flex value to "none".

##Building 

Chipper uses Gruntjs to build. This is a Node package, so you'll first need to have [Node installed](http://http://nodejs.org). After installing Nodejs, or if you already have it installed, on Mac OS X use the terminal to cd to the directory. On Windows you can use the Windows command prompt to do this. Once you are in the folder, run the following command in your terminal: 
    npm install -g grunt-cli

On Mac OS X, you'll need to run the command with **sudo** to avoid installation errors: 

    sudo npm install -g grunt-cli

Enter your password when it requests. After you should see a number of Nodejs modules being installed in a folder called **node\_modules**. You do not need **node\_modules** in your final project. The node modules are there to enable the build process with Gruntjs.

Now that you have the node modules install, you can just type `grunt` in the terminal and hit return/enter. This will kick off the build process, which will produce the following files in the folder:

    chipper.css
    chipper.min.css
    grids.html

If your development stack supports LESS, you can grab the LESS files in the **src** folder to use directly.

##Watch Files

If you want to make changes to chipper.less, you can run the following command to "watch" the files. After making changes and saving, it will regenerate the CSS. Just reload the html document to see the changes.

    // Watch LESS files and regenerate 
    // them when changes occur:
    grunt watch

###Note

You do not need Nodejs to use Chippers. Nodejs is only used to build  Chipper from the source files.