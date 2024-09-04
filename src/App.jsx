import LeftSidebar from './components/LeftSidebar'
import './App.css'
import RightSidebar from './components/RightSidebar'
import MainBody from './components/MainBody'

function App() {

  return (
    <div className='main-container'>
     <LeftSidebar/>
     <div className='body-right'>
      
      <div className='body-right-main'>
     <MainBody/>
      </div>

      <div>
     <RightSidebar/>

      </div>
     </div>
     </div>
  )
}

export default App
