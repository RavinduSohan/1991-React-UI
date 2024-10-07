import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';


const Timeline = () => {
    return (
        <div className="timeline-container">
      <VerticalTimeline layout={'2-columns'} lineColor="#ddd">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '30px', height: '30px' }} 
          contentStyle={{ padding: '10px', fontSize: '12px' }} 
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} 
           position="right"
        >
          <h3 className="vertical-timeline-element-title" style={{ fontSize: '14px', margin: '5px 0' }}>Station 1</h3> 
          <p style={{ fontSize: '12px' }}>Arrived at 10:00 AM</p> 
        </VerticalTimelineElement>
  
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '30px', height: '30px' }} 
          contentStyle={{ padding: '10px', fontSize: '12px' }} 
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} 
          position="left"
        >
          <h3 className="vertical-timeline-element-title" style={{ fontSize: '14px', margin: '5px 0' }}>Station 2</h3> 
          <p style={{ fontSize: '12px' }}>Arrived at 11:00 AM</p> 
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '30px', height: '30px' }} 
          contentStyle={{ padding: '10px', fontSize: '12px' }} 
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} 
          position="right"
        >
          <h3 className="vertical-timeline-element-title" style={{ fontSize: '14px', margin: '5px 0' }}>Station 3</h3> 
          <p style={{ fontSize: '12px' }}>Arrived at 12:00 PM</p> 
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '30px', height: '30px' }}
        contentStyle={{ padding: '10px', fontSize: '12px' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        position="left"
        >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '14px', margin: '5px 0' }}>Station 4</h3>
        <p style={{ fontSize: '12px' }}>Arrived at 1:00 PM</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '30px', height: '30px' }}
        contentStyle={{ padding: '10px', fontSize: '12px' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        position="right"
        >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '14px', margin: '5px 0' }}>Station 5</h3>
        <p style={{ fontSize: '12px' }}>Arrived at 2:00 PM</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '30px', height: '30px' }}
        contentStyle={{ padding: '10px', fontSize: '12px' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        position="left"
        >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '14px', margin: '5px 0' }}>Station 6</h3>
        <p style={{ fontSize: '12px' }}>Arrived at 3:00 PM</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '30px', height: '30px' }}
        contentStyle={{ padding: '10px', fontSize: '12px' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        position="right"
        >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '14px', margin: '5px 0' }}>Station 7</h3>
        <p style={{ fontSize: '12px' }}>Arrived at 4:00 PM</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '30px', height: '30px' }}
        contentStyle={{ padding: '10px', fontSize: '12px' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        position="left"
        >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '14px', margin: '5px 0' }}>Station 8</h3>
        <p style={{ fontSize: '12px' }}>Arrived at 5:00 PM</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '30px', height: '30px' }}
        contentStyle={{ padding: '10px', fontSize: '12px' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        position="right"
        >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '14px', margin: '5px 0' }}>Station 9</h3>
        <p style={{ fontSize: '12px' }}>Arrived at 6:00 PM</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 - Present"
        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff', width: '30px', height: '30px' }}
        contentStyle={{ padding: '10px', fontSize: '12px' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        position="left"
        >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '14px', margin: '5px 0' }}>Station 10</h3>
        <p style={{ fontSize: '12px' }}>Arrived at 7:00 PM</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '30px', height: '30px' }}
        contentStyle={{ padding: '10px', fontSize: '12px' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        position="right"
        >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '14px', margin: '5px 0' }}>Station 11</h3>
        <p style={{ fontSize: '12px' }}>Arrived at 8:00 PM</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '30px', height: '30px' }}
        contentStyle={{ padding: '10px', fontSize: '12px' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        position="left"
        >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '14px', margin: '5px 0' }}>Station 12</h3>
        <p style={{ fontSize: '12px' }}>Arrived at 9:00 PM</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '30px', height: '30px' }}
        contentStyle={{ padding: '10px', fontSize: '12px' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        position="right"
        >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '14px', margin: '5px 0' }}>Station 13</h3>
        <p style={{ fontSize: '12px' }}>Arrived at 10:00 PM</p>
        </VerticalTimelineElement>


        


      </VerticalTimeline>
      </div>
    );
  };

export default Timeline;
