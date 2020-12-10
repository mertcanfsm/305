class AtahanTrain extends Animator {
    constructor() {
        super();
        this.author = 'Atahan ATA'
        this.desc = 'Moving train with animation.'
        let x0 = "translate(0)", x1 = "translateY(300px)", r0 = "rotate(90deg)", r1 = "rotate(-45deg)", x2 = "translateX(300px)"
        this.anim = { transform: [x0, r0, x1, x2, r1, x0] }
        this.elt = document.createElement('img')
        this.elt.src = "https://js.cx/clipart/train.gif"
        this.elt.style = "text-align: center"
        this.time = 6000
    }
    update() {

    }
}