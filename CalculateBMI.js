function bmi(weight, height) {
  Bmi = (weight/height**2));
  if (Bmi <= 18.5){
    return "Underweight"}
  else if (Bmi <= 25.0){
    return "Normal"}
  else if (Bmi <= 30.0){
    return "Overweight"}
  else if (Bmi > 30.0){
    return ("Obese")};

}
