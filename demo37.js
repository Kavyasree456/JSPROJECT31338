let n= parseInt(prompt("Enter Input",0))
let digit=0
let sum=0
let temp=n
while(n!=0)
{
    digit =parseInt(n%10)
    sum=sum+Math.pow(digit,3)
    n=parseInt(n/10)
}
if(sum==temp)
{
    document.writeln(`${temp} is  an amstrong number`)
}
else{
    document.writeln(`${temp} is not an amstrong number`)
}
