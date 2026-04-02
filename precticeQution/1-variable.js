const accountId = 90887473;
let Email = "suhanichouhan34789@gmai.com";
var acountPaasward ="67945";
acountCity = "Bhopal";
let accountState;

//accountId = 9087; // not allowed


Email = "XYZ90@gmail.com";
acountPaasward = "0000";
acountCity = "jaipur";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(acountPaasward);

console.table([accountId,Email, acountPaasward,acountCity,accountState]);