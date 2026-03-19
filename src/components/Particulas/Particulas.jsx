import { useEffect, useRef } from "react"
import "/src/styles/Particulas.css"

function Particulas() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles = []
    const count = 30
    const STEP_TIME = 1000

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div")
      el.className = "pixel-particle"

      container.appendChild(el)

      particles.push({ el })
    }

    const interval = setInterval(() => {
      particles.forEach(p => {

        // 50% probabilidad de aparecer o desaparecer
        const visible = Math.random() > 0.5

        if (visible) {
          const x = Math.random() * 100
          const y = Math.random() * 100

          p.el.style.left = `${x}%`
          p.el.style.top = `${y}%`
          p.el.style.opacity = 0.3
        } else {
          p.el.style.opacity = 0
        }

      })
    }, STEP_TIME)

    return () => {
      clearInterval(interval)
      particles.forEach(p => p.el.remove())
    }

  }, [])

  return <div ref={containerRef} className="pixel-particles-container" />
}

export default Particulas