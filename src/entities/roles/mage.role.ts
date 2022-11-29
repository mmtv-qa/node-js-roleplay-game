import BaseRole from './base_role';



class Mage extends BaseRole {

    constructor() {
        super();
        this.setHealth(200);
    }

    fireball(target: BaseRole): void {
        this.attack(target, 30);
    }
}