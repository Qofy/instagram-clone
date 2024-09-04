import '../styles/main-body.css'
import img from '../assets/profile.JPG'
import antwi from '../assets/antwi.jpeg'
import bedu from '../assets/bedu.JPG'
import ockily from '../assets/ockily.JPG'
import ohemaa from '../assets/ohemaa.jpg'
import alex from '../assets/alex.JPG'

import { ChevronLeft,ChevronRight } from 'lucide-react'

const storyBody = [{
  img: img ,
  name: 'Kofi',
},

{
  img: bedu ,
  name: 'Bedu',
},

{
  img: antwi ,
  name: 'Antwi',
},

{
  img: ockily ,
  name: 'Ockily',
},
{
  img: antwi ,
  name: 'Gyan',
},
{
  img: ockily ,
  name: 'Gyan',
},
{
  img: alex ,
  name: 'Alex',
},
{
  img: ohemaa ,
  name: 'Gyan',
},
{
  img: antwi ,
  name: 'Gyan',
},
{
  img: antwi ,
  name: 'Gyan',
},
{
  img: antwi ,
  name: 'Gyan',
},
{
  img: antwi ,
  name: 'Gyan',
}
]

function MainBody() {
  const story = storyBody.map((story, index) => {
    return (
      < div className="story-content" key={index}>
        
          <img className='story-img' src={story.img} alt="img" />

        <div className='p-name'>
        <p className="story-name">{story.name}</p>
        </div>
      </div>
    )
  })
    return (
        < div className="body">
          <div className="c1">
            <p className="for-you">For you</p>
            <p className='following'>Following</p>
            </div>
            <hr className='horizontal-row'/>

              <ChevronLeft className='chevron-left'/>
              <div className="story-container">
        {story}
        </div>
        <ChevronRight className='chevron-right'/>
            
        </div>
    );
}

export default MainBody;