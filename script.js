let input = document.getElementById("text-input");
let check = document.getElementById("check-btn");
check.addEventListener('click',()=>{
    let Input = input.value;
    let NewInput = Input.toLowerCase().replace(/[^a-z0-9]/gi,'');
    if(NewInput == "")
    {
        alert("Please input a value");
        return;
    }
    let len = NewInput.length;
    let isPalindrome = 1;
    for(let i = 0; i< len; i++)
    {
        if(NewInput[i] != NewInput[len -1 -i])
        {
            isPalindrome = 0;
            break;
        }
    }
 
    if(isPalindrome)
    {
        document.querySelector(".result").innerHTML = `${Input} is a palindrome`;
    }
    else{
        document.querySelector(".result").innerHTML = `${Input} is not a palindrome`;
    }
})