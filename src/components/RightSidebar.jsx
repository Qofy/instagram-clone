import '../styles/right-sidebar.css'
import img from '../assets/profile.JPG'
import antwi from '../assets/antwi.jpeg'
import bedu from '../assets/bedu.JPG'
import ockily from '../assets/ockily.JPG'
import ohemaa from '../assets/ohemaa.jpg'
import alex from '../assets/alex.JPG'

let firstCompo = [{
  name: 'safo_pencil_art',
  userName: 'Safo Pencil',
  change: 'Switch',
  img: 'ohemaa',
}]

const secondCompo = [{
  name: 'antwi-richmond',
  mesg: 'Followed by king and 10 others',
  change: 'Follow',
  img: antwi,
},

{
  name: 'alender_owu_su',
  mesg: 'Followed by kofi and 12 others',
  change: 'Follow',
  img: alex,
},

{
  name: 'iam_bedu',
  mesg: 'Followed by yaw_beko and 10 others',
  change: 'Follow',
  img: bedu,
},

{
  name: 'ockily_fy_lix',
  mesg: 'Followed by criss_wjite and 13 others',
  change: 'Follow',
  img: ockily,
},

{
  name: 'ohemaa_fio_beauty',
  mesg: 'Followed by christo and 12 others',
  change: 'Follow',
  img: ohemaa,
}
]

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

  const secondCompoItem = secondCompo.map((item, index) => {
    return (
      <div className='second-compo' key={index}>
        <div className='second-compo-img'>
        <img src={item.img} alt="profile" />
        </div>
          <div className='name-titles'>
          <h3>{item.name}</h3>
          <p>{item.mesg}</p>
          </div>
        <div className='second-compo-change'>
          <p>{item.change}</p>
        </div>
      </div>
    )
  })
  return (
    <div className='right-sidebar'>
      <div>{firstCompoItem}</div>
      <h3 className='sugest'>Suggested for you <span>See All</span></h3>
      <div className='scnd-compo'>{secondCompoItem}</div>


      <footer>
      © by Safo Kofi Agyekum. Please never claim it as your own project.
    </footer> 
    </div>
  )
}
export default RightSidebar