let startBtn = document.getElementById('startQuiz');
let container = document.getElementById
('container');
let correctAnswers = 0;

function deleteChild(){
    let child = container.lastElementChild;
    while(child){
        container.removeChild(child);
        child = container.lastElementChild;
    }
}
function Timer1(){
    let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            question2();
        }
        if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}
function Timer2(){
     let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            question3();
        }
        else if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}
function Timer3(){
    let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            question4();
        }
        else if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}
function Timer4(){
     let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            question5();
        }
        else if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}
function Timer5(){
     let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            question6();
        }
        else if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}
function Timer6(){
    let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            question7();
        }
        else if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}
function Timer7(){
     let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            question8();
        }
        else if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}
function Timer8(){
     let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            question9();
        }
        else if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}
function Timer9(){
    let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            question10();
        }
        else if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}
function Timer10(){
     let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            question11();
        }
        else if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}
function Timer11(){
     let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            question12();
        }
        else if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}
function Timer12(){
     let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            question13();
        }
        else if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}
function Timer13(){
     let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            question14();
        }
        else if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}
function Timer14(){
     let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            question15();
        }
        else if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}
function Timer15(){
     let timer = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Time Left';
    span.classList.add('text');
    container.appendChild(span);

        container.appendChild(timer);
    timer.value = 0;
    timer.max = 15;
    timer.id = 'progressBar';

    let timeLeft = 15;
    let downloadTimer = setInterval(function(){
        if(timeLeft == 0){
            container.removeChild(timer);
            gameResults();
        }
        else if(timeLeft <= 5){
            timer.style.color = 'red';
        }
        else if(timeLeft > 5){
            timer.style.color = '#00FF00';
        }
        timer.value = 15 - timeLeft;
        timeLeft -= 1;
        timer.innerHTML = `${timeLeft}`;
    }, 1000)
}   

startQuiz.addEventListener('click', ()=>{
    question1();
    startQuiz.style.display = 'none';
    container.style.display = '';
})
function question1(){
        let div = document.createElement('div');
        div.id = 'q1';
        div.className = 'q1';
        div.textContent = '1. Which of the below is the abbreviation of CSS ?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer1();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• Cascade sheets style'
        button2.textContent = '• Color and style sheets'
        button3.textContent = '• Cascading style sheets'
        button4.textContent = '• Coded Style Sheet'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    
    button1.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question2();
    }, 2650);

    

    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question2();
    }, 2650);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'green';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question2();
        correctAnswers++;
    }, 1100);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    setTimeout(() => {
        question2();
    }, 2650);
})

}


function question3(){
        deleteChild();
        // container.removeChild(container.firstElementChild);
        let div = document.createElement('div');
        div.id = 'q3';
        div.className = 'q3';
        div.textContent = '3. Which of the below CSS properties is used to change the background color of CSS ?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer3();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• bg color'
        button2.textContent = '• color-background'
        button3.textContent = '• background-color'
        button4.textContent = '• color'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    button1.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question4();
    }, 2650);
    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question4();
    }, 2650);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'green';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question4();
        correctAnswers++;
    }, 1100);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button2.style.pointerEvents = 'none';
    setTimeout(() => {
        question4();
    }, 2650);
})
}
       
function question4(){
        deleteChild();
        let div = document.createElement('div');
        div.id = 'q4';
        div.className = 'q4';
        div.textContent = '4. Which of the below CSS class is used to change the text color of CSS ?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer4();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• background-color'
        button2.textContent = '• color'
        button3.textContent = '• color-background'
        button4.textContent = '• None of the above'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    button1.style.backgroundColor = 'red';
    button2.style.backgroundColor = 'green';
    button2.style.color = '#ffffff';
    button2.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question5();
    }, 2650);
    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'green';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question5();
        correctAnswers++;
    }, 1100);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'red';
    button2.style.backgroundColor = 'green';
    button2.style.color = '#ffffff';
    button2.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question5();
    }, 2650);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'red';
    button2.style.backgroundColor = 'green';
    button2.style.color = '#ffffff';
    button2.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    setTimeout(() => {
        question5();
    }, 2650);
})
}
function question5(){
        deleteChild();
        let div = document.createElement('div');
        div.id = 'q5';
        div.className = 'q5';
        div.textContent = '5. Which of the below is the correct syntax to put a line over text in CSS?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer5();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• text-decoration: line'
        button2.textContent = '• text-decoration: none'
        button3.textContent = '• text-decoration: overline'
        button4.textContent = '• text-decoration: underline'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    button1.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question6();
    }, 2650);
    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question6();
    }, 2650);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'green';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question6();
        correctAnswers++;
    }, 1100);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    setTimeout(() => {
        question6();
    }, 2650);
})
}
function question6(){
        deleteChild();
        let div = document.createElement('div');
        div.id = 'q6';
        div.className = 'q6';
        div.textContent = '6. Which below property of CSS is used to set the indentation of the first line in a block of text ?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer6();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• text-indent property'
        button2.textContent = '• text-underlne-property'
        button3.textContent = '• text-decoration none'
        button4.textContent = '• text-overflow property'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    button1.style.backgroundColor = 'green';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question7();
        correctAnswers++;
    }, 1100);
    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question7();
    }, 2650);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question7();
    }, 2650);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    setTimeout(() => {
        question7();
    }, 2650);
})
}
function question7(){
        deleteChild();
        let div = document.createElement('div');
        div.id = 'q7';
        div.className = 'q7';
        div.textContent = '7. Which of the below CSS properties represent the order of flex items in the grid container ?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer7();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• order'
        button2.textContent = '• overflow'
        button3.textContent = '• float'
        button4.textContent = '• all of the above'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    button1.style.backgroundColor = 'green';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question8();
        correctAnswers++;
    }, 1100);
    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question8();
    }, 2650);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question8();
    }, 2650);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    setTimeout(() => {
        question8();
    }, 2650);
})
}
function question8(){
        deleteChild();
        let div = document.createElement('div');
        div.id = 'q8';
        div.className = 'q8';
        div.textContent = '8. How do we set the default width of the font in CSS ?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer8();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• font-stretch'
        button2.textContent = '• font-weight'
        button3.textContent = '• text-transform'
        button4.textContent = '• font-variant'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    button1.style.backgroundColor = 'green';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question9();
        correctAnswers++;
    }, 1100);
    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question9();
    }, 2650);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question9();
    }, 2650);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    setTimeout(() => {
        question9();
    }, 2650);
})
}

function question9(){
        deleteChild();
        let div = document.createElement('div');
        div.id = 'q9';
        div.className = 'q9';
        div.textContent = '9. Which element is used to represent the transparency of an element in CSS ?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer9();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• Hover'
        button2.textContent = '• Opacity'
        button3.textContent = '• Transparent'
        button4.textContent = '• Overlay'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    button1.style.backgroundColor = 'red';
    button2.style.backgroundColor = 'green';
    button2.style.color = '#ffffff';
    button2.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question10();
    }, 2650);
    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'green';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question10();
        correctAnswers++;
    }, 1100);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'red';
    button2.style.backgroundColor = 'green';
    button2.style.color = '#ffffff';
    button2.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question10();
    }, 2650);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'red';
    button2.style.backgroundColor = 'green';
    button2.style.color = '#ffffff';
    button2.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    setTimeout(() => {
        question10();
    }, 2650);
})
}

function question10(){
        deleteChild();
        let div = document.createElement('div');
        div.id = 'q10';
        div.className = 'q10';
        div.textContent = '10. Which of the below CSS property is used to add a stroke in the text ?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer10();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• text-stroke'
        button2.textContent = '• text-transform'
        button3.textContent = '• text-decoration'
        button4.textContent = '• None of the above'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    button1.style.backgroundColor = 'green';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question11();
        correctAnswers++;
    }, 1100);
    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question11();
    }, 2650);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question11();
    }, 2650);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    setTimeout(() => {
        question11();
    }, 2650);
})
}

function question11(){
        deleteChild();
        let div = document.createElement('div');
        div.id = 'q11';
        div.className = 'q11';
        div.textContent = '11. Which property in CSS is responsible for setting the difference between two lines ?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer11();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• min-height property'
        button2.textContent = '• max-height property'
        button3.textContent = '• line-height property'
        button4.textContent = '• None of the above'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    button1.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question12();
    }, 2650);
    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question12();
    }, 2650);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'green';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question12();
        correctAnswers++;
    }, 1100);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    setTimeout(() => {
        question12();
    }, 2650);
})
}

function question12(){
        deleteChild();
        let div = document.createElement('div');
        div.id = 'q12';
        div.className = 'q12';
        div.textContent = '12. Which of the below the property is used to overflow the text in CSS?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer12();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• text-shadow'
        button2.textContent = '• text-stroke'
        button3.textContent = '• text-overflow'
        button4.textContent = '• text-decoration'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    button1.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question13();
    }, 2650);
    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question13();
    }, 2650);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'green';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question13();
        correctAnswers++;
    }, 1100);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'red';
    button3.style.backgroundColor = 'green';
    button3.style.color = '#ffffff';
    button3.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    setTimeout(() => {
        question13();
    }, 2650);
})
}

function question13(){
        deleteChild();
        let div = document.createElement('div');
        div.id = 'q13';
        div.className = 'q13';
        div.textContent = '13. Which below function in CSS is used to perform the calculation ?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer13();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• cal() function'
        button2.textContent = '• calculator() function'
        button3.textContent = '• calculate() function'
        button4.textContent = '• calc() function'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    button1.style.backgroundColor = 'red';
    button4.style.backgroundColor = 'green';
    button4.style.color = '#ffffff';
    button4.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question14();
    }, 2650);
    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'red';
    button4.style.backgroundColor = 'green';
    button4.style.color = '#ffffff';
    button4.textContent += ' ➡ Correct';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question14();
    }, 2650);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'red';
    button4.style.backgroundColor = 'green';
    button4.style.color = '#ffffff';
    button4.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question14();
    }, 2650);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'green';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    setTimeout(() => {
        question14();
        correctAnswers++;
    }, 1100);
})
}

function question14(){
        deleteChild();
        let div = document.createElement('div');
        div.id = 'q14';
        div.className = 'q14';
        div.textContent = '14. Which of the below CSS property is used to set the origin of the background image in bootstraps ?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer14();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• background-image'
        button2.textContent = '• background-origin'
        button3.textContent = '• background-size'
        button4.textContent = '• background-fix'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    button1.style.backgroundColor = 'red';
    button2.style.backgroundColor = 'green';
    button2.style.color = '#ffffff';
    button2.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question15();
    }, 2650);
    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'green';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question15();
        correctAnswers++;
    }, 1100);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'red';
    button2.style.backgroundColor = 'green';
    button2.style.color = '#ffffff';
    button2.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question15();
    }, 2650);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'red';
    button2.style.backgroundColor = 'green';
    button2.style.color = '#ffffff';
    button2.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    setTimeout(() => {
        question15();
    }, 2650);
})
}

function question15(){
    
        deleteChild();
        let div = document.createElement('div');
        div.id = 'q15';
        div.className = 'q15';
        div.textContent = '15. Which below CSS property best describes how an image or video fits into a container?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer15();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• object-fit'
        button2.textContent = '• object-move'
        button3.textContent = '• position-hide'
        button4.textContent = '• All of the above'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    button1.style.backgroundColor = 'green';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        correctAnswers++;
        gameResults();
    }, 1100);
    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        gameResults();
    }, 2650);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        gameResults();
    }, 2650);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'green';
    button1.style.color = '#ffffff';
    button1.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    setTimeout(() => {
        gameResults();
    }, 2650);
})
}

function question2(){
        deleteChild();
        let div = document.createElement('div');
        div.id = 'q4';
        div.className = 'q4';
        div.textContent = '2. Which of the following is the correct syntax to add the external stylesheet in CSS?';
        container.appendChild(div);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.className = 'a1';
        div2.className = 'a2';
        div3.className = 'a3';
        div4.className = 'a4';
        Timer2();
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        let button3 = document.createElement('button');
        let button4 = document.createElement('button');
        button1.setAttribute('id','a1');
        button2.setAttribute('id','a2');
        button3.setAttribute('id','a3');
        button4.setAttribute('id','a4');

        div1.appendChild(button1);
        div2.appendChild(button2);
        div3.appendChild(button3);
        div4.appendChild(button4);
        button1.textContent = '• <style src = quiz.css>'
        button2.textContent = '• <style src = "quiz.css">'
        button3.textContent = '• <stylesheet> quiz.css </stylesheet>'
        button4.textContent = '• <link rel="stylesheet" type="quiz/css" href="quiz.css">'
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);

    button1.addEventListener('click',()=>{
    button1.style.backgroundColor = 'red';
    button4.style.backgroundColor = 'green';
    button4.style.color = '#ffffff';
    button4.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question3();
    }, 2650);
    })
button2.addEventListener('click',()=>{
    button2.style.backgroundColor = 'red';
    button4.style.backgroundColor = 'green';
    button4.style.color = '#ffffff';
    button4.textContent += ' ➡ Correct';
    button1.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question3();
    }, 2650);
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor = 'red';
    button4.style.backgroundColor = 'green';
    button4.style.color = '#ffffff';
    button4.textContent += ' ➡ Correct';
    button2.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    button4.style.pointerEvents = 'none';
    setTimeout(() => {
        question3();
    }, 2650);
})
button4.addEventListener('click',()=>{
    button4.style.backgroundColor = 'green';
    button2.style.pointerEvents = 'none';
    button3.style.pointerEvents = 'none';
    button1.style.pointerEvents = 'none';
    setTimeout(() => {
        question3();
        correctAnswers++;
    }, 1100);
})
}

function gameResults(){
    deleteChild();

    let tryAgainBtn = document.createElement('button');
tryAgainBtn.id='Tryagain';
tryAgainBtn.textContent = 'Try again';
container.appendChild(tryAgainBtn);

tryAgainBtn.addEventListener('click',()=>{
    document.location.reload();
    question1();
})

    let div = document.createElement('div');
    div.id='endscreen';
    div.className = 'endscreen';
    div.textContent = `Your score is: ${correctAnswers} out of 15`;
    if(correctAnswers <= 5){
        div.textContent += '. You should learn more!'
    }
    
    else if(correctAnswers > 5 && correctAnswers <= 10){
        div.textContent += '. You did great!'
    }
    else if(correctAnswers > 10 && correctAnswers < 15){
        div.textContent += '. You did awesome!'
    }
    else if(correctAnswers == 15){
        div.textContent += '. You did PERFECT. You are CSS master!'
    }
    container.appendChild(div);
}



