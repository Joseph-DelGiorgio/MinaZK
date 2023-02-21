import { Field, SmartContract, State } from 'snarkyjs';
export declare class Square extends SmartContract {
    num: State<Field>;
    init(): void;
    update(square: Field): void;
}
