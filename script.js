function solve(v)
{
    var val=document.getElementById('res');
    val.value+=v;
}
function clr()
{

    var resElement = document.getElementById('res');
    var currentValue = resElement.value;
    resElement.value = currentValue.slice(0, -1);
    
}
function allClear()
{
    var ac=document.getElementById('res');
    ac.value='';
}
function ans()
{
    var v1=document.getElementById('res');
    var v2=eval(v1.value);
    v1.value=v2;

}

