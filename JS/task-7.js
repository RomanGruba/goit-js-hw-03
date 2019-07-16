// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод отвечающий за добавление суммы к балансу
//    * Создает объект транзакции и вызывает addTransaction
//    */
//   deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Создает объект транзакции и вызывает addTransaction
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод добавляющий транзацию в свойство transactions
//    * Принимает объект трназкции
//    */
//   addTransaction(transaction) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };

//==========================================================================================================================

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

const account = {
  balance: 0,
  transactions: [],
  deposit(amount) {
    this.balance += amount;
    this.addTransaction({
      id: this.transactions.length + 1,
      type: Transaction.DEPOSIT,
      amount
    });
  },
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.addTransaction({
        id: this.transactions.length + 1,
        type: Transaction.WITHDRAW,
        amount
      });
      return null;
    }
    alert("Cнятие такой суммы не возможно, недостаточно средств");
  },
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        return this.transactions[i];
      }
     return 'Такая транзакция не найдена';
    }
  },
  getTransactionTotal(type) {
    let sum = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type) {
        sum += this.transactions[i].amount;
      }
    }
    return sum;
  }
};

