class Account {
  constructor(acctNum, acctHolder, address, balance) {
    this.acctNum = acctNum;
    this.acctHolder = acctHolder;
    this.address = address;
    this.balance = balance;
  }
  getBalance() {
    console.log(this.balance);
  }
  withdraw(amount) {
    this.amount = amount;
    console.log(this.balance - amount);
  }
  deposit(amount) {
    this.amount = amount;
    console.log(this.balance + amount);
  }
}
//Add interest accumulated amount to balance
class Savings extends Account {
  constructor(acctNum, acctHolder, address, balance, interest) {
    super(acctNum, acctHolder, address, balance);
    this.interest = interest;
  }
  accumulateInterest() {
    return `The account balance with interest included is ${
      this.balance * this.interest
    }.`;
  }
}
const acct1 = new Account(12345, "Brian", "somewhere", 1000);
const save = new Savings(12345, "Brian", "somewhere", 1000, 100);
// //Savings.accumulateInterest();
console.log(save.accumulateInterest());
acct1.getBalance();

class Checking extends Account {
  constructor(acctNum, acctHolder, address, balance, minBalance) {
    super(acctNum, acctHolder, address, balance);
    this.minBalance = minBalance;
  }
  checkMinBalance() {
    if (this.balance < this.minBalance) {
      return `You are below the minimum balance.`;
    }
  }
}

const check = new Checking(1235, "brian", "somewhere", 30, 500);
console.log(check.checkMinBalance());

