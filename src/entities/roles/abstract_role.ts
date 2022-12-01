import Effect from "../effects/base_effect";


export default abstract class BaseRole {
   protected _health: number;
   private _isAlive: boolean = true;
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

    get health(): number {
        return this._health;
    }

    get isAlive(): boolean {
        return this._isAlive;
    }

    takeDamage(damage: number): void {
        this._health = this.health - damage >= 0 ? this.health - damage : 0;
        this._isAlive = this.health > 0;
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
