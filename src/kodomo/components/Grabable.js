export default function GrabableComponent({
    isGrabbing = false,
    canGrab = true,
    grabAction = "move"
} = {}) {
    this.isGrabbing = isGrabbing || false;
    this.canGrab = canGrab || true;
    this.grabAction = "move";

    return this;
}

GrabableComponent.prototype.name = "grabbable";
GrabableComponent.prototype.icon = "hand-paper";
GrabableComponent.prototype.displayName = "Grabbable";
GrabableComponent.prototype.description =
    "Makes the entity grabable by the user";
