function submitFeedback(){
    const username = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const job = document.getElementById("job").value;
    const designation = document.getElementById("designation").value;
    const productType = document.getElementById("productType").value;
    const feedback = document.getElementById("feedbackText").value;
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userInfo').style.display = 'block';
    alert('Thank you for your valuable feedback')
}

function submitProductFeedback(){
    const productExperience = document.getElementById("experienceText").value;
    const productType = document.getElementById("productType").value;
    document.getElementById("userProductChoice").innerHTML = productType;
    document.getElementById("userProductExp").innerHTML = productExperience;
    document.getElementById("userExp").style.display = "block";
    document.getElementById("userExpFeedback").style.display = "none";
    alert("Thank you for submitting your product experience")
}

const submitButton = document.getElementById("submitBtn");
submitButton.onclick = submitFeedback;

const userExpBtn = document.getElementById("userExpBtn");
userExpBtn.onclick = submitProductFeedback;

document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        submitProductFeedback();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });