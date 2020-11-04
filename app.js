//Purpose: Returns sum.
function add(a,b)
{
    return a+b;
}

//Purpose: Returns difference.
function subtract(a,b)
{
    return a-b;
}

//Purpose: Returns product.
function multiply(a,b)
{
    return a*b;
}

//Purpose: Returns quotient.
function divide(a,b)
{
    return a/b;
}

//Purpose: Calculates the equation and returns the answer.
function operate(op, a, b)
{
    a=parseFloat(a);
    b=parseFloat(b);

    let ans;

    if(op=="+")
        ans=add(a,b);
    else if(op=="-")
        ans=subtract(a,b);
    else if(op=="x")
        ans=multiply(a,b);
    else
        ans=divide(a,b);

    return Number(ans.toFixed(4));

}