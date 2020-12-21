function validate() {
  var title = document.f1.title.value;
  var fname = document.f1.fname.value;
  var lname = document.f1.lname.value;
  var position = document.f1.position.value;
  var email = document.f1.email.value;
  var company = document.f1.company.value;
  var business = document.f1.business.value;
  var street = document.f1.street.value;
  var add = document.f1.add.value;
  var zip = document.f1.zip.value;
  var place = document.f1.place.value;
  var country = document.f1.country.value;
  var code = document.f1.code.value;
  var number = document.f1.number.value;
 
  var status = false;
  if (title == "Title") {
    document.getElementById("error3").innerHTML = "Please enter title";
    status = false;
  } else {
    document.getElementById("error3").innerHTML = "";
    status = true;
  }
  if (position == "Position") {
    document.getElementById("error4").innerHTML = "Please enter position";
    status = false;
  } else {
    document.getElementById("error4").innerHTML = "";
    status = true;
  }

  if (fname.length < 3) {
    document.getElementById("error1").innerHTML = "Please enter firstName";
    status = false;
  } else {
    document.getElementById("error1").innerHTML = "";
    status = true;
  }
  if (lname.length < 3) {
    document.getElementById("error2").innerHTML = "Please enter surname";
    status = false;
  } else {
    document.getElementById("error2").innerHTML = "";
  }

  if (company.value != "") {
    document.getElementById("error5").innerHTML = "Please enter company";
    status = false;
  } else {
    document.getElementById("error5").innerHTML = "";
    status = true;
  }

  if (company.value != "") {
    document.getElementById("error6").innerHTML = "Please enter business arena";
  } else {
    document.getElementById("error6").innerHTML = "";
    status = true;
  }

  if (street.value != "") {
    document.getElementById("error7").innerHTML = "Please enter street + nr";
    status = false;
  } else {
    document.getElementById("error7").innerHTML = "";
    status = true;
  }
  if (add.value != "" && add.length < 10) {
    document.getElementById("error8").innerHTML =
      "Please enter additional information, which contains 10-30 letters";
    status = false;
  } else {
    document.getElementById("error8").innerHTML = "";
    status = true;
  }

  if (zip.value != "" && zip.length < 4) {
    document.getElementById("error9").innerHTML =
      "Please enter Zip code, which contains 4-6 letters";
    status = false;
  } else {
    document.getElementById("error9").innerHTML = "";
    status = true;
  }
  if (place == "Place") {
    document.getElementById("error10").innerHTML = "Please enter place";
    status = false;
  } else {
    document.getElementById("error10").innerHTML = "";
    status = true;
  }

  if (country == "Country") {
    document.getElementById("error11").innerHTML = "Please enter country";
    status = false;
  } else {
    document.getElementById("error11").innerHTML = "";
    status = true;
  }

  if (code.length < 3) {
    document.getElementById("error12").innerHTML = "Please enter code +";
    status = false;
  } else {
    document.getElementById("error12").innerHTML = "";
    status = true;
  }
  if (number.length != 6) {
    document.getElementById("error13").innerHTML =
      "Please enter phone number, which contains 6 symbols";
    status = false;
  } else {
    document.getElementById("error13").innerHTML = "";
    status = true;
  }
 
  var first = email.indexOf("@");
  var second = email.lastIndexOf(".");
  if (first < 1 || second < first + 2 || second + 2 >= email.length) {
    document.getElementById("error14").innerHTML =
      "Please enter validate email";
    return false;
  }
//  ამ ნაწილში პრობლემაა, არ მუშაობს, არც კონსოლში გამოაქვს ამ ეტაპზე არაფერი
//  var box=document.getElementById("box").value;
//   console.log("check if statement", box.checked);
//   if(box.checked == false)
//   {
//     console.log("1");
//     document.getElementById("error15").innerHTML ="Please check box";
//   status = false;
//   }
//  else {
//     document.getElementById("error15").innerHTML = "";
//     status = true;
//   }
  return status;
}
