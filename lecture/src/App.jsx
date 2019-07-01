
// RULE 1: ALWAYS import React ( and component )
import React, {Component} from 'react';

const v = "THIS IS MY VARIABLE!!"

const greeting = () => {
  return (
    <div>
      <p>This is my component</p>
    </div>
  )
}


const array = [
  {
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Original_Doge_meme.jpg/300px-Original_Doge_meme.jpg',
    title: 'BEST MEME 2019 with DOGS!!!'
  },
  {
    imgSrc: 'https://i.ytimg.com/vi/G8KpPw303PY/hqdefault.jpg',
    title: 'NEW CATS VIDEOS'
  },
  {
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Original_Doge_meme.jpg/300px-Original_Doge_meme.jpg',
    title: 'BEST MEME 2019 with DOGS!!!'
  },
]

let x = [1,2,'hello', 23.435,5]


// RULE 2 make class ______ and IT MUST extend component
class App extends Component {

  constructor(props) {
    super(props)
  }

  videos = (url, title) => {
    return (
      <div>
        <img className="image" src={url}/>
        <h2> {title} </h2>
      </div>
    )
  }

  // RULE 4: Your class MUST have a render function()
  render() {

    // for i of x

    // RULE 5: MUST RETURN BACK JSX
    return (
      <div className="MYMEMES">
        { bla() }
        { array.map( (val) => {
            return this.videos(val.imgSrc, val.title);
          })
        }
      </div>
    );
  }
}

// RULE 3: ALWAYS!!! export your component
export default App;
