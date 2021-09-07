# Single HTML Page Quiz
Define an interactive quiz using a single HTML page.

This project lets you define a quiz with a single HTML page.
Look at `index.html` for examples of how to configure your quiz.

Features:
* Multiple choice single answer
* Multiple choice multiple answer
* Fill in the blank

## Add Questions
To add questions, simply create a `<div>` tag with an `id` attribute of `q1`, `q2`, etc.
Inside the div tag you can put any HTML you want.

Input tags supported:
* `radio`
* `checkbox`
* `text`

Make sure that the `onclick=""` attribute to the `submit` button for each question does the following:
* Uses the correct function
  * Use `answer_me_radio` for `radio` buttons
  * Use `answer_me_check` for `checkbox`
  * Use `answer_me_text` for `text` inputs
* Make sure you send the correct `id` value for that question.

So, for example, if it's question 3, and it's a set of checkboxes, program the `submit` button like this:
```
<br /><button onclick="answer_me_check(3)">Submit</button>
```


## Add Answers
To add answers, go to the script block `<!-- Answers -->` and start adding to `var response = [`.
In the `index.html` file you'll find examples of all three types of questions and answers.


