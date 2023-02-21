import { Field, SmartContract, State } from 'snarkyjs';
export declare class IncrementSecret extends SmartContract {
    x: State<Field>;
    initState(salt: Field, firstSecret: Field): void;
    incrementSecret(salt: Field, secret: Field): void;
}
