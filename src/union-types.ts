function kgToLPs(weight: number | string): number{
    //   Narrowing
    if (typeof weight === 'number')
      return weight * 2.2;
    else 
      return parseInt(weight) * 2.2;
    
}

kgToLPs(10);
kgToLPs('10kg');
console.log("aaa", kgToLPs(10));
