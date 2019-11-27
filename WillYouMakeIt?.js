const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let total= fuelLeft*mpg;
  if(total >= distanceToPump){
  return true
  }else{
  return false}
};
