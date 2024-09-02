import '../styles/right-sidebar.css'
import img from '../assets/profile.JPG' 

const firstCompo = [{
  name: 'safo_pencil_art',
  userName: 'Safo Pencil',
  change: 'Switch'
}]

function RightSidebar() {
  const firstCompoItem = firstCompo.map((item, index) => {
    return (
      <div className='first-compo' key={index}>
        <div className='first-compo-img'>
        <img src={img} alt="profile" />
        </div>
          <div className='name-titles'>
          <h3>{item.name}</h3>
          <p>{item.userName}</p>
          </div>
        <div className='first-compo-change'>
          <p>{item.change}</p>
        </div>
      </div>
    )
  })
  return (
    <div className='right-sidebar'>
      <div>{firstCompoItem}</div>
    
    </div>
  )
}

export default RightSidebar