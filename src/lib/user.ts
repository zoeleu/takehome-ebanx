export class User {
  public balance = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      throw new Error('Insufficient funds');
    }
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }

  transfer(amount: number, recipient: User) {
    this.withdraw(amount);
    recipient.deposit(amount);
  }
}