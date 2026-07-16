let passwordAttempts = 0;

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    clearErrors();

    let valid = true;

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const department = document.getElementById("department").value;
    const description = document.getElementById("description").value.trim();

    const gender = document.querySelector('input[name="gender"]:checked');

    const services = document.querySelectorAll('input[name="service"]:checked');

    const namePattern = /^[A-Za-z]+$/;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(firstName==""){

        document.getElementById("firstNameError").innerHTML="First Name is required";
        valid=false;

    }
    else if(!namePattern.test(firstName)){

        document.getElementById("firstNameError").innerHTML="Alphabets only";
        valid=false;
    }

    if(lastName==""){

        document.getElementById("lastNameError").innerHTML="Last Name is required";
        valid=false;

    }
    else if(!namePattern.test(lastName)){

        document.getElementById("lastNameError").innerHTML="Alphabets only";
        valid=false;
    }

    if(email==""){

        document.getElementById("emailError").innerHTML="Email is required";
        valid=false;

    }
    else if(!emailPattern.test(email)){

        document.getElementById("emailError").innerHTML="Invalid Email";
        valid=false;
    }

    if(password==""){

        document.getElementById("passwordError").innerHTML="Password is required";
        valid=false;
    }

    if(confirmPassword==""){

        document.getElementById("confirmPasswordError").innerHTML="Confirm Password required";
        valid=false;
    }

    if(password!==confirmPassword){

        passwordAttempts++;

        document.getElementById("confirmPasswordError").innerHTML="Password does not match";

        valid=false;

        if(passwordAttempts>=3){

            alert("You have exceeded the maximum password attempts.");

            document.getElementById("password").disabled=true;
            document.getElementById("confirmPassword").disabled=true;
        }

    }

    if(!gender){

        document.getElementById("genderError").innerHTML="Select Gender";
        valid=false;
    }

    if(services.length==0){

        document.getElementById("serviceError").innerHTML="Select at least one service";
        valid=false;
    }

    if(department==""){

        document.getElementById("departmentError").innerHTML="Select Department";
        valid=false;
    }

    if(description.length<20){

        document.getElementById("descriptionError").innerHTML="Minimum 20 characters required";
        valid=false;
    }

    if(valid){

        document.getElementById("successMessage").innerHTML=
        "Appointment Registration Completed Successfully!";

        form.reset();

        passwordAttempts=0;
    }

});

function clearErrors(){

    const errors=document.querySelectorAll(".error");

    errors.forEach(function(error){

        error.innerHTML="";
    });

    document.getElementById("successMessage").innerHTML="";
}