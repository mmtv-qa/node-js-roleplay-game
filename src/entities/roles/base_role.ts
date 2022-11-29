export default class BaseRole {
   private health: number;

    protected attack(target: BaseRole, damage: number): void {
        target.takeDamage(damage);
    }

    protected setHealth(health: number): void {
        this.health = health;
    }

    takeDamage(damage: number): void {
        this.health -= damage;
    }
}
