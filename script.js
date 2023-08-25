function checkDiscountEligibility() {
    // Get user input values
    var age = parseInt(document.getElementById("ageInput").value);
    var membershipStatus = document.getElementById("membershipInput").value.toLowerCase();
  
    // Check eligibility based on age and membership status
    if (age >= 60 || membershipStatus === "yes/no") {
      document.getElementById("result").innerText = "Congratulations! You are eligible for a discount.";
    } else {
      document.getElementById("result").innerText = "Sorry! You are not eligible for a discount.";
    }
  }
  