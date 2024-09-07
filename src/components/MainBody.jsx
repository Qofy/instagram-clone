import '../styles/main-body.css'
import img from '../assets/profile.JPG'
import antwi from '../assets/antwi.jpeg'
import bedu from '../assets/bedu.JPG'
import ockily from '../assets/ockily.JPG'
import ohemaa from '../assets/ohemaa.jpg'
import alex from '../assets/alex.JPG'

import { ChevronLeft,ChevronRight, Heart,MessageCircle,Send,Bookmark,Smile} from 'lucide-react'

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
  sign: '...',
  post: antwi,
  like: <Heart />,
  comment: <MessageCircle />,
  share: <Send />,
  save: <Bookmark />,
  likeNum: '1.2k likes',
  discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  commentNum: 'view all 1.2k comments',
  addComment: 'Add a comment...',
},

{
  imgs: bedu,
  name: '_khelPencilArt',
  postTime: '.9h',
  sign: '...',
  post: bedu,
  like: <Heart />,
  comment: <MessageCircle />,
  share: <Send />,
  save: <Bookmark />,
  likeNum: '1.2k likes',
  discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  commentNum: 'view all 1.2k comments',
  addComment: 'Add a comment...',
},

{
  imgs: ockily,
  name: '_khelPencilArt',
  postTime: '9h',
  sign: '...',
  post: ockily,
  like: <Heart />,
  comment: <MessageCircle />,
  share: <Send />,
  save: <Bookmark />,
  likeNum: '1.2k likes',
  discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  commentNum: 'view all 1.2k comments',
  addComment: 'Add a comment...',
}


]

function MainBody() {
 const storyBodyContent = storyBody.map((story, index) =>{
  return(
    <div className="story-body" key={index}>
      <div className="story-body-img">
        <img className='story-image' src={story.img} alt="" />
      </div>
      <div className="story-body-name">
        <p>{story.name}</p>
      </div>
    </div>
  )
 })

const contentBodyContent = contentBody.map((content, index) => {
  return (
    <div className="content-body" key={index}>
      <div className="content-body-header">
        <div className="name-img">
          <img className='profile-img' src={content.imgs} alt="" />
          <p>{content.name}</p>
          <p>
          &bull;{content.postTime}
          </p>
        </div>
        <div className="sign">
          {content.sign}
          </div>
      </div>

      <div className="content-body-post">
        <img className='post-img' src={content.post} alt="" />
        </div>

        <div className="post-conetent">
          <div className="icons">
            <div className="left-icon">
            {content.like}
            {content.comment}
            {content.share}
            </div>
            <div>
              {content.save}
            </div>
          </div>

            <div className="likes">
              {content.likeNum}
            </div>
            <div className="discription">
              <p>{content.discription}</p>
              </div>
              <div className="comment-num">
                <p>{content.commentNum}</p>
                </div>
                  <p className='add-comment'>{content.addComment}
                  <Smile/>
                  </p>

          </div>

    </div>
  )
})

  return (
   <div className="main-body">
    <div className="header">
      <p>For you</p>
      <p className='ff'>Following</p>
    </div>
    <hr />

    <div className="story-content">
    {storyBodyContent}
    </div>
<div className='body-content'>
    {contentBodyContent}
    </div>
    
    </div>
  );
}

export default MainBody;