function Sum(a:number, b?:number):number
{
    return b?a+b:a;
}

console.log(Sum(10));
console.log(Sum(10,20));