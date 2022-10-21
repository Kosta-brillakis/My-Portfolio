import "./Modal.css"

/**
 * 
 * @param {string} title - string: title of modal
 * @param {string}  description - string: description of the modal
 * @param {string} string: image of the modal
 * @param {string} url - string: url of the modal
 * @returns {component} creates a new modal
 */

function Modal({onClick, title, description, image, url}) {
  return (
    <div className="modal-container">
        <div className="modal-content">
            <h2>{title}</h2>
            <button onClick={onClick}className="btn align-right">
                X
            </button>
            <img className="span2" src={image} alt={title} />
            <p className="span2">{description}</p>
            <a href={url} target="blank" rel="nonreferrer">
                <button className="btn">Visit Site</button>
            </a>
        </div>
    </div>
  )
}

export default Modal