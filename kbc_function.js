function question(){
    question_list=["1.How many continents are there?",             
                   "2.What is the capital of India?",            
                   "3.NG mei kaun se course padhaya jaata hai?"]                
    return question_list
}
ques=question()

function option(){
    option_list=[
        // pehle question ke liye options
        ["1.Four", "2.Nine", "3.Seven", "4.Eight"],
        // second question ke liye options
        ["1.Chandigarh", "2.Bhopal", "3.Chennai", "4.Delhi"],
        // third question ke liye options
        ["1.Software Engineering", "2.Counseling", "3.Tourism", "4.Agriculture"]
    ]
    return option_list
}
opt=option()

function solution(){
    solution_list=[3,4,1]
    return solution_list
}
solu=solution()

function answer(){
    answer_list=[
        ["(4),eight","(3),seven"],
        ["(1),Chandigarh","(4),Delhi"],
        ["(1),software engineering","(2),counseling"]
    ]
    return answer_list
}
ans=answer()

console.log("*****welcome to the KBC*****")
let n=require("readline-sync");``

var i=0
var sum=0
var count=0
while (i<ques.length){
    console.log(ques[i])
    var j=0;
    var a=i;
    while(j<opt[i].length){
        var k=(opt[a][j])
        console.log(j+1,k)
        j++
    }
    var lifeline=n.question("if u want 5050 lifeline yes or no:-");
    if(lifeline=="yes"){
        console.log("5050 lifeline")
        if(count<1){
            console.log(ans[a])
            var answer_1=n.questionInt("enter your answer1:-")
            if(answer_1===solu[i]){
                sum=sum+10000
                console.log("congratulation your answer is correct,you won",sum,"Rs")
                count++
            }else{
                console.log("sorry your answer is wrong,you will not play,you won",sum,"Rs")
                count++
                break
            }
        }else{
            console.log("you can't use lifeline")
            var answer_2=n.questionInt("enter your answer2:-")
            if(answer_2===solu[i]){
                sum=sum+10000
                console.log("congratulation your answer is correct,you won",sum,"Rs")
            }else{
                console.log("sorry your answer is wrong,you will not play,you won",sum,"Rs")
                break
            }
        }
    }else{
        var answer_3=n.questionInt("enter your answer3:-")
        if(answer_3===solu[i]){
            sum=sum+10000
            console.log("congratulation your answer is correct,you won",sum,"Rs")
        }else{
            console.log("sorry your answer is wrong,you will not play,you won",sum,"Rs")
            break
        }
    }
    i++
}
console.log("***thanks for being the part of KBC game***")
console.log("your efforts are good,You can try next time")
console.log("you win",sum,"Rs")


