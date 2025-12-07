function Modal({ headerText, show, onClose, children }) {
  if (!show) {
    return null;
  }
  return (
    <>
      <div className="modal-background" onClick={onClose}></div>
      <div className={`modal-wrapper ${show ? "active" : ""}`}>
        <div className="modal-header">
          <h3>{headerText}</h3>
          <span onClick={onClose}>&#10060;</span>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
}

export default Modal;
