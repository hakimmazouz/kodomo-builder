export default function SittableComponent() {
    this.canSitOn = true;
    return this;
}

SittableComponent.prototype.name = "sittable";
SittableComponent.prototype.displayName = "Sittable";
SittableComponent.prototype.icon = "chair";
SittableComponent.prototype.description =
    "Enables the entity to be sat on by characters.";
