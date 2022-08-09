const debounce = (func, timeout = 500) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}

export default function controlScroll() {
    let scrollUp = false
    let yPositions = [0, 925, 1850, 2775]

    window.onscroll = (e) => {
        scrollUp = this.oldScroll > this.scrollY
        console.log('scrollUp: ', scrollUp)
        this.oldScroll = this.scrollY

        if (!scrollUp) {
            let targetYPosition = 0

            if (this.scrollY % 925 !== 0) {
                console.log('here!')
                debounce(() => {
                    console.log('inside debounce')
                    for (const position of yPositions) {
                        if (this.scrollY < position) {
                            console.log('Deepest')
                            const scrollOptions = {
                                top: position,
                                left: 0,
                                behavior: 'auto',
                            }
                            window.scroll(scrollOptions)
                        }
                        continue
                    }

                }, 200)()
            }

        }
        console.log('yPosition: ', this.scrollY)
    }

}
