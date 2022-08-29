let tableCell=document.getElementsByClassName("text-center")
let buttonElement=document.getElementById('button')
let turn=1
let flag=0
let lastModifiedCell=tableCell[0]

for(let i=0;i<tableCell.length;i++){
    tableCell[i].ondblclick=function(){
        if(flag==0){
            if(tableCell[i]==lastModifiedCell){
                lastModifiedCell.innerHTML=''
                tableCell[i].style.backgroundColor='black'
                turn=turn-1    
            }
        }
    }
    tableCell[i].onclick=function(){
        if(flag==0){
            if(tableCell[i].innerHTML==''){
                if(turn%2==0){
                    tableCell[i].innerHTML='O'
                    tableCell[i].style.color='blue'
                }
                else{
                    tableCell[i].innerHTML='X'
                    tableCell[i].style.color='red'
                }

                turn=turn+1 
                lastModifiedCell=tableCell[i]
            }
            if(checkCondition()==true){
                let a = document.createElement("h2")
                a.setAttribute("id", "winner");
                a.setAttribute("class","mt-3")
                a.textContent=tableCell[i].innerHTML+" won"
                a.style.textAlign="center"
                if(tableCell[i].innerHTML=='X'){
                    a.style.color="red"
                }
                else{
                    a.style.color="blue"
                }
                document.getElementsByClassName('center')[1].appendChild(a)
                flag=1
            }
        }
    }
}


buttonElement.onclick=function(){
    for(let i=0;i<tableCell.length;i++){
        tableCell[i].innerHTML=''
        tableCell[i].style.backgroundColor='black'
    }
    turn=1
    flag=0
    let winnerMsg=document.getElementById('winner')
    if(winnerMsg!=null){
        document.getElementsByClassName('center')[1].removeChild(winnerMsg)
    }
}

function checkCondition(){
    if((tableCell[0].innerHTML=='X' && tableCell[1].innerHTML=='X' && tableCell[2].innerHTML=='X') ||
    (tableCell[0].innerHTML=='O' && tableCell[1].innerHTML=='O' && tableCell[2].innerHTML=='O')||
    (tableCell[3].innerHTML=='X' && tableCell[4].innerHTML=='X' && tableCell[5].innerHTML=='X')||
    (tableCell[3].innerHTML=='O' && tableCell[4].innerHTML=='O' && tableCell[5].innerHTML=='O')||
    (tableCell[6].innerHTML=='X' && tableCell[7].innerHTML=='X' && tableCell[8].innerHTML=='X')||
    (tableCell[6].innerHTML=='O' && tableCell[7].innerHTML=='O' && tableCell[8].innerHTML=='O')||
    (tableCell[0].innerHTML=='X' && tableCell[3].innerHTML=='X' && tableCell[6].innerHTML=='X')||
    (tableCell[0].innerHTML=='O' && tableCell[3].innerHTML=='O' && tableCell[6].innerHTML=='O')||
    (tableCell[1].innerHTML=='X' && tableCell[4].innerHTML=='X' && tableCell[7].innerHTML=='X')||
    (tableCell[1].innerHTML=='O' && tableCell[4].innerHTML=='O' && tableCell[7].innerHTML=='O')||
    (tableCell[2].innerHTML=='X' && tableCell[5].innerHTML=='X' && tableCell[8].innerHTML=='X')||
    (tableCell[2].innerHTML=='X' && tableCell[5].innerHTML=='X' && tableCell[8].innerHTML=='X')||
    (tableCell[0].innerHTML=='X' && tableCell[4].innerHTML=='X' && tableCell[8].innerHTML=='X')||
    (tableCell[0].innerHTML=='O' && tableCell[4].innerHTML=='O' && tableCell[8].innerHTML=='O')||
    (tableCell[2].innerHTML=='O' && tableCell[4].innerHTML=='O' && tableCell[6].innerHTML=='O')||
    (tableCell[2].innerHTML=='X' && tableCell[4].innerHTML=='X' && tableCell[6].innerHTML=='X')){
        return true
    }
    return false
}
