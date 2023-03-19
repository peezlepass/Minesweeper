# Welcome to a simple Minesweeper game!

## Installation

You can install it by doing all the work with cloning the repository to your local machine => npm install and then =>  npm start, but who am I kidding, you probably won't go through all that trouble, so here is a <a href="https://peezlepass.com/minesweeper">deployed version for you </a>.

This repository is frontend only, without the database, score table, or authentication. I actually have a more complex repo that includes all these features, which you can find <a href="https://github.com/bad-black-neko/final-project">here</a>. However, I understand that users can be hesitant to register, and without registering, there's no way to display the score table. So, to simplify things, this version only includes the game itself. Just you and the game. Win or lose. It's that simple.

<img width="1428" alt="beginning" src="https://user-images.githubusercontent.com/104982744/226172693-dbcea12a-e51d-40fd-9c55-099d696feb45.png">

## How to Play

<li>Click on a tile to reveal what is underneath it. If it is a bomb, the game is over. To restart - click on the emoji.</li>
<p align="center">
  <img width="640" alt="restart" src="https://user-images.githubusercontent.com/104982744/226172604-48027d47-7a94-4408-8ad4-25722fe84f19.gif">
</p>
<li>If the tile is not a bomb, it will display a number indicating how many bombs are adjacent to it.</li>
<li>Use this information to deduce the location of bombs and mark them with a flag by right-clicking on the tile.</li>
<p align="center">
  <img width="640" alt="flags" src="https://user-images.githubusercontent.com/104982744/226173337-370f733a-eeb5-4b43-945e-fae553a388fd.gif">
</p>
<li>Once you opened all not bombs cell - the clock will stop meaning that you won the game.</li>
<p align="center">
  <img width="640" alt="win" src="https://user-images.githubusercontent.com/104982744/226172605-cfcc1f36-68b8-474f-98b6-f68a954941d8.gif">
</p>

## Features

<li>Two levels of difficulty: Beginner and Expert.</li>
<li>Timer to keep track of your progress.</li>
<li>Emojies for fun.</li>
<li>The Queen itself - recursion! for opening empty cells.</li>
<li>Deployment - l would literally built a personalised monument to anyone who can deploy, so fuck yeah! It’s a cool feature I am incredibly proud of. Probably it took me longer than a recursion lol.</li>
