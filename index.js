
const form = document.getElementById("inputForm");
// Create the form Items
const name = form.elements["name"];
const email = form.elements["email"];
const zip = form.elements["zip"];
const country = form.elements["country"];
const password = form.elements["password"];

const userData = [];

// Construct the output div
const outputdiv = document.getElementById("outputContainer");
const ulcreated = document.createElement("ul");
ulcreated.setAttribute("id", "outputli");
outputdiv.appendChild(ulcreated);

//upon submission, incorporate the validate event handler that follows:
form.addEventListener("submit", validate);

// The big validation function.
function validate(evt) {
    const nameVal = validateName();
    if (nameVal === false) {
        evt.returnValue = false;
        return false;
    }else{
        userData.push(name.value);
    }

    const emailVal = validateEmail();
    if (emailVal === false) {
        evt.returnValue = false;
        return false;
    }else{
        userData.push(email.value);
    }

    const zipVal = validateZip();
    if (zipVal === false) {
        evt.returnValue = false;
        return false;
    }else{
        userData.push(zip.value);
    }

    const countryVal = validateCountry();
    if (countryVal === false) {
        evt.returnValue = false;
        return false;
    }else{
        userData.push(country.value);
    }

    const passwordVal = validatePassword();
    if (passwordVal === false) {
        evt.returnValue = false;
        return false;
    }else{
        userData.push("Password: ...that's a secret.");
    }

    alert(`Name: ${nameVal}
        Email: ${emailVal}
        Country: ${countryVal}
        Zip Code: ${zipVal}
        Password: ...that's a secret.`);
    
        const liparent = document.getElementById("outputli");
        for (let i = 0; i < userData.length; i++) {
            let item = userData[i];
            liparent.appendChild(document.createElement("li")). textContent = item;
        };    
    return true;
}

// Name Validation
function validateName() {
    if (name.value === "") {
      alert("Please provide a name.");
      name.focus();
      return false;
    }
    return name.value;
  }

// Email validation.
function validateEmail() {
    let emailVal = email.value;
    // I added a check to make sure the name exists!
    // Note that this could also be solved via adding
    // the "required" attribute to the HTML, but the
    // focus of this activity is DOM events.
    if (emailVal === "") {
        alert("Please provide an email.");
        email.focus();
        return false;
      }
    const atpos = emailVal.indexOf("@");
    const dotpos = emailVal.lastIndexOf(".");
  
    if (atpos < 1) {
      alert(
        "Your email must include an @ symbol, which must not be at the beginning of the email."
      );
      email.focus();
      return false;
    }
  
    if (dotpos - atpos < 2) {
      alert(
        "Invalid structure: @.\nYou must include a domain name after the @ symbol."
      );
      email.focus();
      return false;
    }
    return emailVal;
  }
  
// Zip Code Validation
function validateZip() {
    if (zip.value === "") {
      alert("Please provide a zip code.");
      zip.focus();
      return false;
    }
  
    if (zip.value.length !== 5 || isNaN(Number(zip.value))) {
      alert("Zip codes must be in the format #####.");
      zip.focus();
      return false;
    }
    return zip.value;
  }
  
// Country Validation
function validateCountry() {
    if (country.value === "") {
      alert("Please provide a country.");
      country.focus();
      return false;
    }
    return country.value;
  }  

// Password Validation
function validatePassword() {
    if (password.value === "") {
      alert("Please provide a password.");
      password.focus();
      return false;
    }
    return password.value;
  }


//-----------------------------------------------------------------------



    
