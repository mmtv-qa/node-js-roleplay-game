import BaseRole from "./abstract_role";


export default abstract class Thief extends BaseRole {
    constructor() {
        super();
        this.setHealth(100)
    }
    abstract daggerAttack(target: BaseRole): void; // 25 damage
    abstract escape(target: BaseRole): void;
}