// Literal (exact, specific)
type Quantity = 50 | 100; // ใช้ type aliases ให้มาทำให้มีประโยชน์มากขึ้น
// let quantity: 50 | 100  = 50; สามารถกำหนดให้ได้แค่ 50  หรือ 100
let quantity: Quantity = 100; // เหมือนบรรทัดที่ 3 แต่ใช้ type aliases

let dcsdc: Quantity = 50;

type Metric = 'cm' | 'inch';

let daddd: Metric = 'cm';

