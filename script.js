//Q)What is the purpose of trim function in Javascript()
//Q) Promise Calls A Function Within Itself
//Q) How do we make the checkBox click and Submit the values
function validate()
{
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const checkBox = document.getElementById("checkbox").value;

    //This is used to check the name of the function
    if(name.trim() === '')
    {
       showError("Name cannot be Empty")
       return false;

    }
     
    //This will trim the email address value
    if(email.trim() === '')
    {
        showError("Email Address Cannot Be Empty")
        return false;
    }

    //Check if phone is empty or not
    if(phone.trim() === " " || isNaN(phone) || phone.length!=11 )
    {
        showError("Enter a valid phone number of 11 digit");
        return false;
    }

    //Checking if subject is equal to 0 or not
    if(subject === '0')
    {
        showError("Please provide your expertise");
        return false;
    }

    if(password.trim() === '' || password.length!=8 )
    {
        showError("Enter a password that is 8 characters long")
        return false;
    }

    if(password != confirmPassword)
    {
        showError("The password values do not match")
        return false;
    }

    if(checkBox === " ")
    {
        showError("Please agree with terms and conditions")
        return false;
    }

    function showError(message)
    {
      const errorElement = document.getElementById("demo");
      errorElement.style.color = "red";
      errorElement.style.textAlign="center"
      errorElement.textContent = message;
      
    }
}


//This is a Test Function

// function validate1()
// {
//     // const Name = document.getElementById("name").value;

//     const Name = document.getElementById("name").value;
//     //This is used to check the name of function
//     if(Name.length < 5)
//     {
//         showError("Name is too short");
//         return false;
//     }

//     function showError(message)
//     {
//        const Error = document.getElementById("demo");
//        Error.style.color = "red";
//        Error.style.textAlign = "center";
//        Error.textContent = message;
//     }
// }