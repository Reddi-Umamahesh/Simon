
let sequence = [];
let user = [];
let i=0;
let boxes = document.querySelectorAll('.box');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let body = document.querySelector('body');
let outer = document.querySelector('.outerbox');
let score = 0;
let h = document.querySelector('#h3');
body.addEventListener('keydown',()=>{
    if(sequence.length==0){
        h3.innerText = `Level ${score+1}`;
        h.innerHTML = '';
        let a = randomcol()
        console.log(a)
        for(let j of boxes){
            if(j.id == a){
                blink(j);
                break;
            }
        }
        sequence.push(a);
        score++;
    }
});

for(let b of boxes){
    b.addEventListener('click',() => {
        if(sequence.length!=0){
            if(b.id == sequence[i]){
                console.log("correct");
                i++;     
                console.log("clicked");
                click(b);
                checklen();
            }else{
                i=0;
                console.log("wrong");
                sequence.splice(0,sequence.length);
                console.log(sequence);
                wrong(body);
                wrong(h1);
                wrong(h3);
                wrong(h);
                wrong(outer);
                
                h3.innerHTML = `<b>GAME OVER!<b> your score was:${score-1}`;
                h.innerHTML = 'Press any key to restart';
                score =0;
            }
        }
        
    });
}

let checklen = () =>{
    if(i==sequence.length){
        h3.innerText = `Level ${score+1}`;
        h.innerHTML = '';
        console.log("next level");
        let a = randomcol();
        sequence.push(a);

        for(let j of boxes){
            if(j.id == a){
                blink(j);
                break;
            }
        }
        score++;
        console.log(sequence);
        i=0;
    }
}
let click = (ele) =>{
    ele.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    setTimeout(() => {
        ele.style.boxShadow = '0 4px 8px rgba(0,0,0,0.8)';
    },100);
}
let blink = (ele) => {
    let col = ele.style.backgroundColor;
    ele.style.backgroundColor = 'white';
    setTimeout(function() {
        ele.style.backgroundColor = col;
    },300);
}
let wrong = (ele) => {
    let col = ele.style.backgroundColor;
    ele.style.backgroundColor = 'red';
    setTimeout(function() {
        ele.style.backgroundColor = col;
    },300);
}
let randomcol = () => { return Math.floor((Math.random()*4)+1); }

