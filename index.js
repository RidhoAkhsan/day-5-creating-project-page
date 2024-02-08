function contactForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("emial").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let text = document.getElementById("text-area").value;

  if (name == "") {
    return alert("Please Fill This Box!");
  } else if (email == "") {
    return alert("Please Fill This Box!");
  } else if (phone == "") {
    return alert("Please Fill This Box!");
  } else if (subject == "") {
    return alert("Please Fill This Box!");
  } else if (text == "") {
    return alert("Please Fill This Box!");
  } else {
    alert("Thank You For Contacting Us!");
  }

  const emailReceiver = "akhsanridho23@gmail.com";

  const a = document.createElement("a");

  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Name:${name},Email:${email},Phone:${phone},Message:${text}`;
  a.target = "_blank";
  a.click();

  let data = {
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    text: text,
  };
  console.log(data);
}
