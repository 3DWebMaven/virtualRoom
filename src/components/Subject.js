import Accordion from "react-bootstrap/Accordion"

const Subject = ({ title, data, contentRefs }) => {
  return (
    <div id={title} className={"subject-container"} ref={(el) => (contentRefs.current[title] = el)}>
      <div className="subject-title">{title}</div>
      <div className="subject-content">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          {data?.map((item, index) => (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>
                <p className="item-title">{item?.title}</p>
              </Accordion.Header>
              <Accordion.Body>{item?.content ? <p className="item-content">{item?.content}</p> : <div className="no-data">NO CONTENT</div>}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default Subject
