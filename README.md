# Plinko

- A fun little game I created to help random;y choose what to do given 5 outcomes. This game was inspired by online wheel picker apps but with a fun plinko twist!

- Users can press play and watch the ball drop between the pegs until it reaches one of the baskets at the bottom that'll pop up the results in front of them. A collapsable section will prompt users to input their desired outcomes in a textarea that will then show a list of each outcome to correlate to the numbers in the basket (currently only limited to 5 baskets). 

- This was a fun project I wanted to try out on my own, mainly to try out CSS animation. I just wanted to see if I could properly animate the ball dropping from peg to peg. Once I was able to create that, I got pretty invested in making the app more enjoyable to use. While in it's current state that ball drop looks fine, I feel that it could be smoother, but I ultimately chose to take the extra time to polish and complete the app instead of optimizing the animation.

- Future improvesments I would like to implement include expanding the board size dynamically. Currently I have the board hardcoded for each of the rows I wanted to render. As I learn more about react I want to see if I can render the rows dynamically so I can choose how many outcomes I want and expand/shrink the board as necessary. I also want to improve the function for the game so that users can choose from which peg they want to drop it from at the top. Currently the game only drops it from the middle but plinko traditionally allows us to drop from anywhere at the top. Additionally, it would be fun to have weighted results or a way to drop multiple balls at once to vary the way we get to our outcomes.

- Try it out <a href="https://playplinko.netlify.app/">here!</a>