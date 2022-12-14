import BaseRole from './abstract_role';



export default abstract class Warrior extends BaseRole {
    constructor() {
        super();
        this._health = 200;
    }
    abstract swordAttack(target: BaseRole): void; // 50 damage
    abstract shieldDefend(target: BaseRole): void;
}