const makeChange = (c) => {
  // your name here const QUARTER = 25;
    const DIME = 10;
    const NICKEL = 5;
    const PENNY = 1;

    // Calculate the number of each coin needed
    const quarters = Math.floor(amount / QUARTER);
    amount %= QUARTER;

    const dimes = Math.floor(amount / DIME);
    amount %= DIME;

    const nickels = Math.floor(amount / NICKEL);
    amount %= NICKEL;

    const pennies = amount;

    // Create and return the result object
    return {
        q: quarters,
        d: dimes,
        n: nickels,
        p: pennies
    };
};

Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
