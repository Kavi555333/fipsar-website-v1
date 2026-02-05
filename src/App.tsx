
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutUs from './components/Aboutus/AboutUs'

// import AiService from './components/AiService'


import {Routes, Route} from 'react-router-dom'
// import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import { ScrollToTop } from './components/ScrollToTop'
// import { AiMachine } from './components/services/AiMachine'
// import { DataEngineering } from './components/services/DataEngineering'
// import { Business } from './components/services/Business'
// import { DataGovernance } from './components/services/DataGovernance'
import ManagedServices from './components/services/ManagedServices/ManagedServices'
import Solutions from './components/Solutions/Solutions'
import InsightsSection from './components/insights/InsightsSection'
import GoestoTop from './components/GoestoTop'
import Industry from './components/industry/Industry'
import Careers from './components/Careers/Careers'
import Partnership from './components/Partnership/Partnership'
import Contact from './components/Contact/Contact'
// import { Salesforce } from './components/services/Salesforce'
// import Servicepage from './components/services/ServiceMain/Servicepage'

// import { BusinessNew } from './components/services/BusinessNew'

// import { DigitalTransNew } from './components/services/DigitalTransNew'
import DemoDataEngineer from './components/services/DemoDataEngineer'
import DemoBusinessInt from './components/services/DemoBusinessInt'
import DemoAiMachine from './components/services/DemoAiMachine'
import Demosalesforce from './components/services/Demosalesforce'
import DemoDataGovernance from './components/services/DemoDataGovernance'
import Demodigital from './components/services/Demodigital'
// import ServicesSection from './components/Home/ModelsHome'
import { SerivceSection } from './components/services/SerivceSection'

// import ServiceHero from './components/services/ServiceMain/ServiceHero'
// import { DataEngineeringNew } from './components/services/DataEngineeringNew'
// import { DigitalTrans } from './components/services/DigitalTrans'
// import { AiMachineNew } from './components/services/AiMachineNew'
// import { SalesforceNew } from './components/services/SalesforceNew'
// import { DatagovernaceNew } from './components/services/DatagovernaceNew'
// import { NewBusiness } from './components/services/NewBusiness'
// import { BusinessNew } from './components/services/BusinessNew'
// import { BusinessNew } from './components/services/BusinessNew'

function App() {
 

  return (
    <>

  
 
    <GoestoTop/>
    <Header/>
      <Routes>
       
        <Route path='/' element ={<Home/>}/>
        {/* <Route path='/' element ={<Home/>}/> */}
        <Route path='/aboutus' element ={<AboutUs/>}/>
        <Route path='/service/aimachine' element ={<DemoAiMachine/>}/>
        {/* <Route path='/service/dataengineering' element ={<DataEngineering/>}/> */}
        {/* <Route path='/service/businessIntelligence' element ={<BusinessNew/>}/> */}
        <Route path='/service/businessIntelligence' element ={<DemoBusinessInt/>}/>
        <Route path='/service/governance' element ={<DemoDataGovernance/>}/>
        <Route path='/service/managedservice' element ={<ManagedServices/>}/>
        <Route path='/service/salesforce' element ={<Demosalesforce />}/>
        <Route path='/service/dataengineering' element ={<DemoDataEngineer />}/>
        <Route path='/solutions' element ={<Solutions/>}/>
        <Route path='/insights' element ={<InsightsSection/>}/>
        {/* <Route path='/industry' element ={<Industry/>}/> */}
        <Route path='/industry' element ={<Industry/>}/>
        <Route path='/service/digitaltransformation' element ={<Demodigital/>}/>
        <Route path='/career' element ={<Careers/>}/>
        <Route path='/partners' element ={<Partnership/>}/>
        <Route path='/contact' element ={<Contact/>}/>
        <Route path='/service' element ={<SerivceSection/>}/>
      </Routes>
      <ScrollToTop position="right"/>
    <Footer/>
 


    </>
  )
}

export default App
