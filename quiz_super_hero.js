let count = 0;

function check() {
    const answ1 = document.getElementById('answer_1');
    const answ2 = document.getElementById('answer_2');
    const answ3 = document.getElementById('answer_3');
    const answ4 = document.getElementById('answer_4');
    const answ5 = document.getElementById('answer_5');
    let right = 0;
    let tmp = 0;

    if (answ1.value == 'indigo'){
        tmp++;
    }
    if (answ2.value == 'red'){
        tmp++;
    }
    if (answ3.value == 'blue'){
        tmp++;
    }
    if (answ4.value == 'yellow'){
        tmp++;
    }
    if (answ5.value == 'green'){
        tmp++;
    }

    if (tmp == 5){
        right++;
    }

    const quas2 = document.getElementById('quastion2');
    if (quas2.value.toLowerCase() == 'камень души' || quas2.value.toLowerCase() == 'души') {
        right++;
    }

    const quas3 = document.getElementById('quastion3_3');
    if (quas3.checked) {
        right++;
    }

    const quas4 = document.getElementById('quastion4_1');
    if (quas4.checked) {
        right++;
    }

    const quas5 = document.getElementById('quastion5_3');
    if (quas5.checked) {
        right++;
    }

    if (count == 2) {
        secretAlert();
        count++;
    } else if (count < 3){
        if (right == 5) {
            count++;
            goodAlert();
        } else if (right == 0) {
            badAlert();
        } else {
            infoAlert(right);
        }
    }

    document.getElementById('doneDiv').style.marginBottom = '30px';
    document.getElementById('results').style.display = 'block';
    document.getElementById('rightAnsw').innerText = 'Вы ответили правильно на: ' + right + ' вопрос(-а, -ов)';
    document.getElementById('falseAnsw').innerText = 'Вы ответили неправильно на: ' + (5 - right) + ' вопрос(-а, -ов)';
    document.getElementById('allAnsw').innerText = 'Всего 5 вопросов';
}