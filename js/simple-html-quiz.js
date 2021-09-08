/*!
* Simple HTML jQuery Quiz
* Copyright 2013-2021 unlikelysource.com
* Licensed under MIT (https://github.com/dbierer/simple-html-jquery-quiz/blob/master/LICENSE.md)
*/
function show_one(id)
{
    // change this according to your max # questions
    var max=20;
    var key=0;
    // hide everything
    for (x = 1; x <= max; x++) {
        key = '#q' + x;
        $(key).hide();
    }
    // show id selected
    key = '#q' + id;
    $(key).show();
    console.log(key);
    $('#response').html('Select answer and hit "Submit"');
}
function answer_me_radio(id)
{
    key = 'q' + id;
    ckey = 'r' + id;
    user = $("input[name='" + ckey + "']:checked").val()
    answer = response[key][user];
    console.log(user,answer);
    $('#response').html('');
    $('#response').html(answer);
}
function answer_me_check(id)
{
    key = 'q' + id;
    ckey = 'r' + id;
    out = '';
    $("input[name='" + ckey + "']:checked").each(function (elem) {
        num = $(this).val();
        out += num + ' ' + response[key][num] + '<br />';
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
    sys_ans = response[key];
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
