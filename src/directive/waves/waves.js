import './waves.css'

const context = '@@wavesContext'

function handleClick(el, binding) {
    function handle(e) {
        const customOpts = Object.assign({}, binding.value)
        const opts = Object.assign({
            ele: el, // 波纹作用元素
            type: 'hit', // hit 点击位置扩散 center中心点扩展
            color: 'rgba(169, 169, 179, 1)' // 波纹颜色
        },
            customOpts
        )
        const target = opts.ele
        if (target) {
            console.log(window.getComputedStyle(target).display)
            if(window.getComputedStyle(target).display === 'inline-block') {
                target.style.verticalAlign = 'bottom'
            }
            target.style.position = 'relative'
            target.style.overflow = 'hidden'
            const rect = target.getBoundingClientRect()
            let ripple = target.querySelector('.waves-ripple')
            if (!ripple) {
                ripple = document.createElement('span')
                ripple.className = 'waves-ripple'
                ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px'
                target.appendChild(ripple)
            } else {
                ripple.className = 'waves-ripple'
            }
            switch (opts.type) {
                case 'center':
                    ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px'
                    ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px'
                    break
                default:
                    ripple.style.top =
                        (e.pageY - rect.top - ripple.offsetHeight / 2 - document.documentElement.scrollTop ||
                            document.body.scrollTop) + 'px'
                    ripple.style.left =
                        (e.pageX - rect.left - ripple.offsetWidth / 2 - document.documentElement.scrollLeft ||
                            document.body.scrollLeft) + 'px'
            }
            ripple.style.backgroundColor = opts.color
            ripple.className = 'waves-ripple z-active'
            return false
        }
    }

    if (!el[context]) {
        el[context] = {
            removeHandle: handle
        }
    } else {
        el[context].removeHandle = handle
    }

    return handle
}

export default {
    bind(el, binding) {
        el.addEventListener('mousedown', handleClick(el, binding), false)
    },
    update(el, binding) {
        el.removeEventListener('mousedown', el[context].removeHandle, false)
        el.addEventListener('mousedown', handleClick(el, binding), false)
    },
    unbind(el) {
        el.removeEventListener('mousedown', el[context].removeHandle, false)
        el[context] = null
        delete el[context]
    }
}

