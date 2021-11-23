# Morse code translator

The timeframe allowed to complete this project was one day.

[Check out the live demo here!](https://jasenscode.github.io/morse-translator/)

![Translator screenshot](https://github.com/jasenscode/morse-translator/blob/master/images/screenshot.JPG?raw=true)
____________
### Technologies

- HTML5
- Sass
- JavaScript
_____
### About

The aim of this project was to build a fully functioning English to Morse Code translator using a test driven development (TDD) approach. 

We were only given a little over half a day to do this, which at first felt quite stressful due to the time pressures and also developing using TDD, which I hadn't done before.

I started by writing pseudo code to outline what tests I would need to do starting from basics, such as translating one letter or number, and building on that to translate a full word and so on. The tests can be seen in the morse-translator.test.js file.

After this, I wrote down each step in the required logic for the actual function to translate the input, which was fairly simple. 

It involved firstly splitting each word into an array of single character strings using the array.split() method. I then used the array.map() method to iterate and compare each character to the relevant key in an object containing the relevant morse translation. Finally I used to array.join() method to join characters into words before dispalying this to the user.

Admittedly at the start I struggled with how to work with a TDD approach but by the end of the project, I understood more the requirements of a TDD approach and also how useful it would be on any project, especially larger ones.

