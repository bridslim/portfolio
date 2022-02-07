import './WorkExperience.css'

const Job1 = () => {
    return (<div className='Job1'>
        <h2>Role</h2>
        <h1>Company</h1>
        <p>Duration</p>
        <p>Point</p>
        <p>Point</p>
        <p>Point</p>
    </div>
        
    )
}
const Job2 = () => {
    return (<div className='Job2'>
        <h2>Statisical Analyst, Part-Time</h2>
        <h1>Midland Metals Overseas Pte Ltd</h1>
        <p>Feb 2021 - Dec 2021</p>
        <p>Midland Metals is a company that ....</p>
        <p>- Used Statistical and Data Analytics tools (Python, R) to analyse data and build models.</p>
        <p>- Handled projects to optimise manufacturing and business decisions.</p>
        <p>- Experience in Time Series Analysis Forecasting, Correlation, Optimization.</p>
    </div>
        
    )
}
const Job3 = () => {
    return (<div className='Job3'>
        <h2>Data Analytics Intern</h2>
        <h1>Mama's Choice Singapore</h1>
        <p>Nov 2020 - Jan 2021</p>
        <p>Mama's Choice is an e-commerce which provides safe and natural products for pregnant women and babies.</p>
        <p>- Untilised Google Analytics to analyse business data, and provided data-driven insights for better performance.</p>
        <p>- Creation of Reports and Dashboards for company's e-commerce performance.</p>
        <p>- Optimised workflow processes within operations.</p>
    </div>
        
    )
}

const Job4 = () => {
    return (<div className='Job4'>
        <h2>Role</h2>
        <h1>Company</h1>
        <p>Duration</p>
        <p>Point</p>
        <p>Point</p>
        <p>Point</p>
    </div>
        
    )
}

const WorkExperience = () => {
    return (<div className="WorkExperience">
    <div className="Top">
      <h1>Work Experience</h1>
    </div>
    <div className="Bottom">
        <Job1 />
        <Job2 />
        <Job3 />
        <Job4 />
    </div>
    </div>
    )
};

export default WorkExperience;
