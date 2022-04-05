// Geg Eliment

let cal_arr =[];

function getval(val) {
    cal_arr.push(val);
    document.querySelector('.top-monitor').innerHTML = cal_arr.join('');
    document.querySelector('.bt-monitor').innerHTML= 0 ;
}

function allclear() {
    
    cal_arr=[];
    document.querySelector('.top-monitor').innerHTML = 0;
    document.querySelector('.bt-monitor').innerHTML= 0 ;

}


let back = () =>{
    cal_arr.pop();
    document.querySelector('.top-monitor').innerHTML = cal_arr.join('');

}


function result() {
    let cal = cal_arr.join('');
    document.querySelector('.bt-monitor').innerHTML= eval(cal) ;
}