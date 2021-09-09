# Single HTML Page Quiz
Define an interactive quiz using a single HTML page.

This project lets you define a quiz with a single HTML page.
Look at `index.html` for examples of how to configure your quiz.

Features:
* Multiple choice single answer
* Multiple choice multiple answer
* Fill in the blank

## Add Questions and Answers
Copy the prototype `index.html` file along with `js/simple-html-quiz.js` into your project folder.
Look for the `<script>` tag that defines `var quiz = { xxx }`
Use `JSON` syntax to add questions in the order desired.

### Multiple Choice Single Answer Questions
HTML _radio_ buttons are used for this type of question.
Here's an example of how a multiple choice single answer button question might appear:
```
<script>
var quiz = {
    "choose_class" : "list-group-item list-group-item-action list-group-item-light p-3",
    "div_class" : "container-fluid",
    "questions" : {
        1 : {
            "title" : "Question 1",
            "type"  : "radio",
            "question"  : "What is the meaning of life, the universe and everything?",
            "answers" : {
                1 : "0",
                2 : "1",
                3 : "99",
                4 : "42"
            }
        },
    // etc.
    }
}
</script>

```

### Multiple Choice Multiple Answer Questions
HTML _checkbox_ fields are used for this type of question.
Here's an example of how a multiple choice multiple answer button question might appear:
```
<script>
var quiz = {
    "choose_class" : "list-group-item list-group-item-action list-group-item-light p-3",
    "div_class" : "container-fluid",
    "questions" : {
        // some questions not shown
        1 : { /* not shown */ },
        2 : {
            "title" : "Question 2",
            "type"  : "checkbox",
            "question"  : "Which are examples of animals? (choose 2)",
            "answers" : {
                1 : "Flower",
                2 : "House",
                3 : "Dog",
                4 : "Cat",
                5 : "None of the Above"
            }
        },
    // etc.
    }
}
</script>

```

### Fill-in-the-blank Questions
HTML _text_ fields are used for this type of question.
Here's an example of how a fill-in-the-blank question might appear:
```
<script>
var quiz = {
    "choose_class" : "list-group-item list-group-item-action list-group-item-light p-3",
    "div_class" : "container-fluid",
    "questions" : {
        // some questions not shown
        1 : { /* not shown */ },
        2 : { /* not shown */ },
        3 : {
            "title" : "Question 3",
            "type"  : "text",
            "question"  : "What is the capital of Thailand?",
            "answers" : { "answer" : "" }
        }

    // etc.
    }
}
</script>

```

## Adding Answers

Look at prototype `index.html` for examples of how to configure your quiz.

