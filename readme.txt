todo

Part I
The first part of this exercise was designed to walk you through several common
scenarios and procedures which you will probably encounter in your day to day
development workflow with git. Follow These steps closely.

1. Add an index.html file with an <h1> heading - The Ball Game.

2. Initialize a local repo and make the initial commit. ⇩
3. Add a <div class="ball">100</div>. ⇩

4. Link a styles.css file and set the page’s background color to black and the
heading’s text color to white. ⇩
5. Style the <div> to be a circle with a width & height of 100px and some initial
background color.




6. Add a main.js file with a click event handler - onBallClick() , which is
activated when the <div> is clicked and prints a message to the console.
7. Commit the changes to the CSS file only (not the script file). ⇩
8. We forgot to center the ball horizontally in the page. Add margins to accomplish
this and use the commit amend option to redo the last commit. ⇩
9. Commit the new JavaScript file and the changes to the HTML. ⇩
10.Change onBallClick() to increment the ball’s width & height by 50px and
display the updated diameter inside the ball. Remove the console.log(). ⇩
11. Add more styling rules: center the text inside the div, set the font size to 22px and
the font weight to bold. ⇩
12.Travel through the snapshots in your repository and see how its features were
gradually added. Use the diff editor to see the additions and changes to your
files. Don’t forget to checkout the main branch again when you are done!
13.Limit the ball size diameter to 400px. If the diameter grows beyond 400px, reset it
to 100px. Add a 1 second transition to make the ball change size smoothly. ⇩
14.Undo the last commit and split it into two separate commits. The first one should
only include the changes to the JavaScript ⇩ and the second should only include
the changes to the CSS ⇩.
15.Add a my-notes.txt file and a .gitignore file to the project. Include the
my-notes.txt file in the .gitignore file and add any other files which may have