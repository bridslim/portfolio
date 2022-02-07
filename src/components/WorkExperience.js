import './WorkExperience.css'

const Job1 = () => {
    return (<div className='Job'>
        <h2>Product and Operations Intern</h2>
        <h1>Digital Church Office, Roman Catholic Archdiocese of Singapore</h1>
        <p>Jan 2022 - Current</p>
        <p>Point</p>
        <p>Point</p>
        <p>Point</p>
    </div>
        
    )
}
const Job2 = () => {
    return (<div className='Job'>
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
    return (<div className='Job'>
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
    return (<div className='Job'>
        <h2>Relief Teacher, Teaching Intern</h2>
        <h1>Ministry of Education</h1>
        <p>Jan 2018 - June 2018</p>
        <p>St. Gabriel's Secondary School, Victoria Junior College, specialising in Mathematics and Physics.</p>
        <p>- Taught tutorials and labs sessions as a substitute for teachers, created answer sheets.</p>
        <p>- Engaged in department meetings, oversaw Co-Curricular Activities (CCA)</p>
    </div>
        
    )
}

const WorkExperience = () => {
    return (<div className="WorkExperience">
    <div className="Top">
      <h1>Work Experience</h1>
    </div>
        <Job1 />
        <Job2 />
        <Job3 />
        <Job4 />
    </div>
    )
};

export default WorkExperience;
