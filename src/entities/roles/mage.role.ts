import BaseRole from "./abstract_role";


export default abstract class Mage extends BaseRole {
    constructor() {
        super();
        this.setHealth(100)
    }
    abstract fireballAttack(target: BaseRole): void; // 100 damage
    abstract enchant(target: BaseRole): void;
}