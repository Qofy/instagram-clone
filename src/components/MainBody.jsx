import '../styles/main-body.css'
import img from '../assets/profile.JPG'
import antwi from '../assets/antwi.jpeg'
import bedu from '../assets/bedu.JPG'
import ockily from '../assets/ockily.JPG'
import ohemaa from '../assets/ohemaa.jpg'
import alex from '../assets/alex.JPG'

import { ChevronLeft,ChevronRight, Heart,MessageCircle,Send,Bookmark} from 'lucide-react'

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

const contentBody = [{
  imgs: antwi,
  name: '_khelPencilArt',
  postTime: '9h',
  post: antwi,
  like: <Heart />,
  comment: <MessageCircle />,
  share: <Send />,
  save: <Bookmark />,
}]

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
  });

  const content = contentBody.map((content, index) => {
    return (
      <div className="content-container" key={index}>
        <div className="sub-content">
        <div className="content-head">
          <img src={content.imgs} alt="img" className='content-img' />
          <div className="content-name">
          <p>{content.name}</p>
          <p>&#8226;{content.postTime}</p>
        </div>
        </div>
      
        <div className="content-post">
          <img src={content.post} alt="post" className='item-post'/>
        </div>
        <div className="content-icons">
          <div className="content-icons-left">
            <div className="content-icons-left-left">
              <div className="content-icons-left-left-left">
                {content.like}
              </div>
              <div className="content-icons-left-left-right">
                {content.comment}
              </div>
            </div>
            <div className="content-icons-left-right">
              {content.share}
            </div>
          </div>
          <div className="content-icons-right">
            {content.save}
          </div>
        </div>
        </div>
      </div>
    );
  });

  return (
    <div className="body">
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

      <div className="content">
        {content}
      </div>
    </div>
  );
}

export default MainBody;