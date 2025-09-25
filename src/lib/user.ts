export class User {
  public id: string;
  public balance = 0;

  constructor(id: string) {
    this.id = id;
  }

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

  serialize() {
    return {
      id: this.id,
      balance: this.balance
    }
  }
}