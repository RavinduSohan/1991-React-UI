import React, { useState } from 'react';
import NoticeModal from '../noticemodal/noticemodal.js';
import './noticepanel.css';

const NoticePanel = () => {
  const [notices, setNotices] = useState([
   
    { id: 1, title: 'Maintenance Alert', message: 'Train maintenance on track 4 at 3 PM', fullMessage: 'Full details about the maintenance.' },
    { id: 2, title: 'New Schedule', message: 'Updated schedules are now available', fullMessage: 'Check the new schedule for all routes.' },
  ]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [newNotice, setNewNotice] = useState({ title: '', message: '', fullMessage: '' });

 
  const postNotice = () => {
    setNotices([...notices, { ...newNotice, id: notices.length + 1 }]);
    setNewNotice({ title: '', message: '', fullMessage: '' });
  };

  
  const deleteNotice = (id) => {
    setNotices(notices.filter(notice => notice.id !== id));
  };

  
  const viewNotice = (notice) => {
    setSelectedNotice(notice);
  };

  return (
    <div className="notice-panel">
      <h2>Notices</h2>
      <div className="post-notice">
        <input 
          type="text" 
          placeholder="Notice Title" 
          value={newNotice.title} 
          onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })} 
        />
        <textarea 
          placeholder="Notice Message" 
          value={newNotice.message} 
          onChange={(e) => setNewNotice({ ...newNotice, message: e.target.value })}
        />
        <textarea 
          placeholder="Full Notice Details" 
          value={newNotice.fullMessage} 
          onChange={(e) => setNewNotice({ ...newNotice, fullMessage: e.target.value })}
        />
        <button onClick={postNotice}>Post Notice</button>
      </div>
      
      <div className="notice-list">
        {notices.map((notice) => (
          <div key={notice.id} className="notice-preview">
            <h3>{notice.title}</h3>
            <p>{notice.message}</p>
            <button onClick={() => viewNotice(notice)}>View Full Notice</button>
            <button onClick={() => deleteNotice(notice.id)}>Delete</button>
          </div>
        ))}
      </div>

      
      {selectedNotice && (
        <NoticeModal 
          notice={selectedNotice} 
          onClose={() => setSelectedNotice(null)} 
        />
      )}
    </div>
  );
};

export default NoticePanel;