import React from 'react';
import './noticemodal.css';

const NoticeModal = ({ notice, onClose }) => {
  return (
    <div className="notice-modal">
      <div className="modal-content">
        <h2>{notice.title}</h2>
        <p>{notice.fullMessage}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default NoticeModal;