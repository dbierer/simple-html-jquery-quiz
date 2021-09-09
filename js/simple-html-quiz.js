/*!
* Simple HTML jQuery Quiz
* Copyright 2013-2021 unlikelysource.com
* Licensed under MIT (https://github.com/dbierer/simple-html-jquery-quiz/blob/master/LICENSE.md)
*/
function show_one(id)
{
    // change this according to your max # questions
    var key=0;
    // hide everything
    $.each(quiz.questions, function (x, val) {
        key = '#q' + x;
        $(key).hide();
    });
    // show id selected
    key = '#q' + id;
    $(key).show();
    console.log(key);
    $('#response').html('Select or fill in answer and hit "Submit"');
}
function answer_me_radio(id)
{
    key = 'q' + id;
    ckey = 'r' + id;
    user = $("input[name='" + ckey + "']:checked").val()
    answer = quiz.response[id][user];
    $('#response').html('');
    $('#response').html(answer);
}
function answer_me_checkbox(id)
{
    key = 'q' + id;
    ckey = 'r' + id;
    out = '';
    $("input[name='" + ckey + "']:checked").each(function (elem) {
        num = $(this).val();
        out += num + ' ' + quiz.response[id][num] + '<br />';
        console.log(num);
    });
    $('#response').html('');
    $('#response').html(out);
}
function answer_me_text(id)
{
    out = '';
    key = 'q' + id;
    ckey = 'r' + id;
    $("input[name='" + ckey + "']").each(function (elem) { user_ans = $(this).val(); });
    sys_ans = quiz.response[id];
    ok = $.inArray(user_ans, sys_ans);
    if (ok >= 0) {
        out = 'Correct!';
    } else {
        out = 'Wrong answer<br />';
        out += 'Correct answer(s):<br />';
        $.each(sys_ans, function(index, value) { out += value + '<br />'; });
    }
    $('#response').html('');
    $('#response').html(out);
    console.log(user_ans, sys_ans);
}
function build_quiz(quiz)
{
    chooser = '';
    display = '';
    total = 0;
    $.each(quiz.questions, function(key1, val1) {
        chooser += '<a class="' + quiz.choose_class + '" onclick="show_one(' + key1 + ')">' + val1.title + '</a>' + "\n";
        display += '<div class="' + quiz.div_class + '" id="q' + key1 + '">' + "\n";
        display += '<h1>' + val1.title + '</h1>' + "\n";
        display += '<p>' + val1.question + '</p>' + "\n";
        display += '<hr />' + "\n";
        $.each(val1.answers, function(key2, val2) {
            display += '<br />';
            display += '<input type="' + val1.type + '" name="r' + key1 + '" value="' + key2 + '" />';
            display += '&nbsp;' + val2 + "\n";
        });
        display += '<br />';
        display += '<button onclick="answer_me_' + val1.type + '(' + key1 + ')">Submit</button>' + "\n";
        display += '&nbsp;&nbsp;';
        next_key = key1 * 1 + 1;
        display += '<button onclick="show_one(' + next_key + ')">Next</button>' + "\n";
        display += '</div>' + "\n";
        total++;
    });
    $('#question_chooser').html(chooser);
    $('#question_display').html(display);
}
