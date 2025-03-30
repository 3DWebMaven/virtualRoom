import { useEffect, useRef, useState } from "react"
import Subject from "./Subject"
import data from "./data.json"
import "./faq.css"

const Faq = () => {
  const [selectedId, setSelectedId] = useState(Object.keys(data)?.[0])
  const isScrolling = useRef(false);
  const contentRefs = useRef({})
  const categoryListRef = useRef(null)

  useEffect(() => {
    const contentContainer = document.querySelector(".fag-subjects")
    if (!contentContainer) return

    const handleScroll = () => {
      const containerTop = contentContainer.getBoundingClientRect().top
      const contentElements = Object.values(contentRefs.current)

      if (isScrolling.current) return

      for (let i = contentElements.length - 1; i >= 0; i--) {
        const element = contentElements[i]
        const elementTop = element?.getBoundingClientRect().top - containerTop

        if (elementTop <= 100) {
          // 100px buffer from top
          const categoryId = element.id
          if (selectedId !== categoryId) {
            setSelectedId(categoryId)

            // Scroll the category list if needed
            const categoryItem = document.querySelector(`.faq-category[data-id="${categoryId}"]`)
            if (categoryItem && categoryListRef.current) {
              const listRect = categoryListRef.current.getBoundingClientRect()
              const itemRect = categoryItem.getBoundingClientRect()

              if (itemRect.top < listRect.top || itemRect.bottom > listRect.bottom) {
                categoryItem.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest"
                })
              }
            }
          }
          break
        }
      }
    }

    contentContainer.addEventListener("scroll", handleScroll)
    return () => contentContainer.removeEventListener("scroll", handleScroll)
  }, [selectedId])

  return (
    <div className="faq-container">
      <div className="faq-categories">
        {Object?.keys(data)?.map((item, index) => (
          <div
            className={`faq-category ${selectedId === item ? "category-selected" : ""}`}
            key={`key-${index}`}
            data-id={item}
            onClick={() => {
              setSelectedId(item)
              isScrolling.current = true
              setTimeout(() => isScrolling.current = false, 300)
            }}>
            <a href={`#${item}`}>{item}</a>
          </div>
        ))}
      </div>
      <div className="fag-subjects">
        {Object.entries(data).map(([key, value]) => (
          <Subject title={key} data={value} key={key} contentRefs={contentRefs} />
        ))}
      </div>
    </div>
  )
}

export default Faq
