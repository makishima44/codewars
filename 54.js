function bmi(weight, height) {
    const bmiAnswer = weight / Math.pow(height, 2);
    if(bmiAnswer <= 18.5) {
      return "Underweight";
    } else if(bmiAnswer <= 25.0) {
      return "Normal";
    } else if(bmiAnswer <= 30.0) {
      return "Overweight";
    } else if(bmiAnswer > 30 ) {
      return "Obese"
    }
  }


  console.log(bmi(80, 1.80))