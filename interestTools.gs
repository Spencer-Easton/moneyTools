/**
 * Calculate simple interest
 *
 * @param {number} principal principal
 * @param {number} rate the interest rate is decimle
 * @param {number} length periods to calculate 
 * @return total calculated ammount
 * @customfunction
 */
function simpleInterest(principal,rate,length) {
   return principal + (rate*principal)*length;
}

/**
 * Calculate compound interest
 *
 * @param {number} principal principal
 * @param {number} rate the interest rate is decimle
 * @param {number} length years to calculate 
 * @return total calculated ammount
 * @customfunction
 */
function compundInterestYearly(principal,rate,length) {
   return principal * Math.pow((1+rate), length);
  Math.p
}

/**
 * Calculate compound interest
 *
 * @param {number} principal principal
 * @param {number} rate the interest rate is decimle
 * @param {number} periods periods to calculate 
 * @param {number} length years to calculate 
  * @return total calculated ammount
 * @customfunction
 */
function compundInterest(principal,rate,periods,length) {
   return principal * Math.pow((1+(rate/periods)), length*periods);
}



/**
 * Calculate APY
 *
 * @param {number} APR
 * @param {number} periods the number of periods 
  * @return APY
 * @customfunction
 */
function APY(APR,periods) {
  return Math.pow((1+(APR/periods)), periods) - 1;
  
}

/**
 * Get Principal
 *
 * @param {number} finalAmount expected amount
 * @param {number} APR APR
 * @param {number} periods the number of compunding periods per year
 * @param {number} years the number of years
  * @return APY
 * @customfunction
 */
function getCompoundPrincipal(finalAmount,APR,periods,years) {
  return  finalAmount /  Math.pow((1+(APR/periods)), periods*years);  
}


/**
 * Calculate Continous interest principal
 *
 * @param {number} finalAmount expected amount
 * @param {number} rate the interest rate is decimle
 * @param {number} length years to calculate 
  * @return total calculated ammount
 * @customfunction
 */
function getContinousPrincipal(finalAmount,rate,length) {
  return finalAmount /  Math.pow(Math.E, rate*length);
  
}

/**
 * Calculate Continous interest
 *
 * @param {number} principal principal
 * @param {number} rate the interest rate is decimle
 * @param {number} length years to calculate 
  * @return total calculated ammount
 * @customfunction
 */
function continousInterest(principal,rate,length) {
  return principal *  Math.pow(Math.E, rate*length);
  
}

/**
 * Calculate balance in interest bearing savings account
 *
 * @param {number} PMT monthly
 * @param {number} APR the rate in decimle
 * @param {number} periods number if paymets per year
 * @param {number} years number of years
  * @return account balance
 * @customfunction
 */
function savingsPlanFormula (PMT,APR,periods,years){

  return PMT * ( (Math.pow((1+(APR/periods)),periods * years) -1) /(APR/periods));

}

/**
 * Calculate future dollar value
 *
 * @param {number} AMT starting amount
 * @param {number} inflation the rate of inflation in decimle
 * @param {number} years number of years
  * @return the future dollar amount
 * @customfunction
 */
function futurePurchasingPower(AMT,inflation,years){
   return AMT / Math.pow((1+inflation),years)
}


function t(){
 Logger.log(Math.pow(2, 3))
}