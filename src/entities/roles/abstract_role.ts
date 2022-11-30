import Effect from "../effects/base_effect";


export default abstract class BaseRole {
   private health: number;
   private isAlive: boolean = true;
   private effects: Effect[] = [];

    protected attack(target: BaseRole, damage: number): void {
        if (target === this) {
            throw new Error('Cannot attack self');
        }
        if (damage < 0) {
            throw new Error('Damage cannot be negative');
        }
        target.takeDamage(damage);
    }

    protected setHealth(health: number): void {
        this.health = health;
    }

    takeDamage(damage: number): void {
        this.health = this.health - damage >= 0 ? this.health - damage : 0;
        this.isAlive = this.health > 0;
    }

    setEffect(effect: Effect): void {
        if (this.effects.includes(effect)) {
            this.deleteEffect(effect);
        }
        this.effects.push(effect);
    }

    deleteEffect(effect: Effect): void {
        this.effects = this.effects.filter((e) => e !== effect);
    }
}
