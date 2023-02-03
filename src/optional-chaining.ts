type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}
 let customer = getCustomer(1);
//  Optional property access operator ถ้าไม่ใช้ จะเป็นแบบนี้ -> if (customer !== null && customer !== undefined)
console.log(customer?.birthday?.getFullYear());




// ถ้าไม่ใช้ จะเป็นแบบนี้ -> if (customers !== null && customers !== undefined) ต้องเช็คก่อนจะเข้า ถึง values ของ arrays ได้ 
                        // customers[0]
// customers?.[0] //  Optional element access operator

// Optional call 
let log: any = null;
log('a'); // undefined