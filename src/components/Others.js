import React from 'react';
import './Others.css'


const HouseCapt = () => {
    return (<div className='Job'>
        <h1>House Captain</h1>
        <h2>Tembusu College, NUS</h2>
        <p>Aug 2019 - Jan 2021</p>
        <p>Managed and Coordinated a commitee of 12, which plans and executes weekly events for over 130 residents.</p>
    </div>
        
    )
}

const TA = () => {
    return (<div className='Job'>
        <h1>Teaching Assistant</h1>
        <h2>Tembusu College, NUS</h2>
        <p>Jan 2022 - Current</p>
        <p>Managed and Coordinated a committee of 12, which plans and executes weekly events for over 130 residents.</p>
    </div>
        
    )
}

const Bless = () => {
    return (<div className='Job'>
        <h1>Community Group Leader</h1>
        <h2>Bringing Love to Every Single Soul (BLESS)</h2>
        <p>Apr 2019 - Jan 2021</p>
        <p>Organised weekly volunteering reading sessions to under-privileged children aged 3-9.</p>
        <p>Improved Reading Curriculum with a Managing Committee</p>
    </div>
        
    )
}

const Others = () => {
    return (<div className="Others">
    <div className="Top">
      <h1>Leadership</h1>
    </div>
    <HouseCapt />
    <TA />
    <div className="Top">
      <h1>Volunteering</h1>
      </div>
    <Bless />
    </div>
    )
};

export default Others;
