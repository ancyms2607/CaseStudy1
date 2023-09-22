let prime=[89,2,67,90,3,89,5,89]

function test_prime(n)
{

  if (n===1)
  {
    return ("It is not a prime Number");
  }
  else if(n === 2)
  {
    return ("It is a prime");
  }
  else
  {
    for(var i = 2; i < n; i++)
    {
      if(n % x === 0)
      {
        return ("It is not a prime number");
      }
    }
    return ("It is a prime Number");  
  }
}
console.log(prime[0]);

console.log(test_prime(prime[0]));