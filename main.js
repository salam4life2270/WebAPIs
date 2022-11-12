
function validateForm() {
    return(
        validateInput("fname")
        && validateInput("lname")
        && validateInput("eaddress")
        && validateInput("cname")
        && validateInput("message")
    )
}
  
function validateInput(name) {
    let y = document.forms["myForm"][name].value;
    if (y == "") {
      alert("Mandatory fields(*) cannot be left blank!");
      return false;
    }
    return true;
 }
  








   








  /**let file = "http://127.0.0.1:5500/index1.html"

  fetch (file)
  .then(x => x.text())
  .then(y => document.getElementById("welcome").innerHTML = y);