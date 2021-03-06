

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 const { CognitoIdentityServiceProvider } = require("aws-sdk");
 const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
 const USER_POOL_ID = "ap-south-1_xTBWRHJoG";
 const stripe = require("stripe")("sk_test_51J6sA8SI2jhom7ITYJDxSf8rhxs1UKQpy27RVziEvVkGhwlsBfqdyJFUkgv7K6qoAAfNvpXK0K5uIyJHHc7U0NHJ00ZE10yJZb");
 
 const getUserEmail = async (event) => {
   const params = {
     UserPoolId: USER_POOL_ID,
     Username: event.identity.claims.username
   };
   const user = await cognitoIdentityServiceProvider.adminGetUser(params).promise();
   const { Value: email } = user.UserAttributes.find((attr) => {
     if (attr.Name === "email") {
       return attr.Value;
     }
   });
   return email;
 };
 
 /*
  * Get the total price of the order
  * Charge the customer
  */
 exports.handler = async (event) => {
   try {
     const { id, cart, total, address, token } = event.arguments.input;
     const { username } = event.identity.claims;
     const email = await getUserEmail(event);
 
     await stripe.charges.create({
       amount: total * 100,
       currency: "inr",
       source: token,
       description: `bookstore Order ${new Date()} by ${username} with ${email}`
     });
     return { id, cart, total, address, username, email };
   } catch (err) {
     throw new Error(err);
   }
 };
 