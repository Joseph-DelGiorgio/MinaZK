The contract allows users to mint new tokens, transfer them to other users, and check their balance.

import { Field, SmartContract, state, State, method, input } from 'snarkyjs';

export class Token extends SmartContract {
  @state(Field) totalSupply = State<Field>();
  @state(Field) balances = State<{[key: string]: Field}>();

  init(@input(Field) initialSupply: Field) {
    super.init();
    this.totalSupply.set(initialSupply);
    this.balances.set(sender(), initialSupply);
  }

  @method mint(@input(Field) amount: Field) {
    const senderBalance = this.balances.get(sender());
    const newSupply = this.totalSupply.get().add(amount);
    const newBalance = senderBalance.add(amount);
    this.totalSupply.set(newSupply);
    this.balances.set(sender(), newBalance);
  }

  @method transfer(@input(Field) amount: Field, @input(Field) recipient: string) {
    const senderBalance = this.balances.get(sender());
    const recipientBalance = this.balances.get(recipient);
    if (senderBalance.lt(amount)) {
      throw new Error('Insufficient balance');
    }
    const newSenderBalance = senderBalance.sub(amount);
    const newRecipientBalance = recipientBalance.add(amount);
    this.balances.set(sender(), newSenderBalance);
    this.balances.set(recipient, newRecipientBalance);
  }

  @method balanceOf(@input(string) account: string): Field {
    return this.balances.get(account);
  }
}
