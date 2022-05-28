var leftTimeToCompany = 46

// if(leftTimeToCompany >= 60){
//   console.log('走路去公司')
// }else if(leftTimeToCompany > 30 && leftTimeToCompany < 60){
//   console.log('骑车')
// }else{
//   console.log('打车')
// }
switch (true) {
  case leftTimeToCompany >= 60:
    console.log('走路去公司')
    break;
  case leftTimeToCompany > 30 && leftTimeToCompany < 60:
    console.log('骑车')
    break;
  default:
    console.log('打车')
}

