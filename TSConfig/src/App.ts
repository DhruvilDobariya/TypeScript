function Sum(a:number, b:number,s:number)
{
    let c = 10;
    if(a == b)
    {
        return 2*a;
    }
    else
    {
        switch(a)
        {
            case 1:
                console.log(b+1);
            case 2: 
                console.log(b+2);
        }
    }
}