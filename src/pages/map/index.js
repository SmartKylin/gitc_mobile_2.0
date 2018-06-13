import React, {Component} from 'react'
import ChildBackground from 'containers/child_container'
import './index.scss'
import {getListImgs} from '../../services/getListNews'
import Title from "../../components2/Title/index";

const getImg = num => require(`../../images/floor_${num}.jpg`)


export default class Map extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      imgSize: 100,
      addColor: '#fff',
      imgPop: 'none',
      imgAry: [],
      index: 5
    }
  }
  
  async componentWillMount() {
    document.title = "场馆地图"
    let imgAry = await getListImgs(67).then(res => res.json())
    // console.log(imgAry.data);
    await this.setState({
      imgAry: imgAry.data
    })
  }
  
  addClick(e) {
    e.stopPropagation()
    if (this.state.imgSize >= 240) {
      return false
    } else {
      this.setState({
        imgSize: this.state.imgSize + 50
      })
    }
  }
  
  cutClick(e) {
    e.stopPropagation()
    if (this.state.imgSize <= 100) {
      
      return false
    } else {
      this.setState({
        imgSize: this.state.imgSize - 50
      })
    }
  }
  
  openImg() {
    this.setState({
      imgPop: 'block'
    })
  }
  
  closeImg() {
    this.setState({
      imgPop: 'none'
    })
  }
  changeMapImg = ind => {
    this.setState({
      index: ind
    })
  }
  render() {
    let {imgSize, imgPop, imgAry, index }= this.state
    return (
      <ChildBackground>
        {
          imgAry.length
          ? (
            <div>
              <div className="map-box">
                <div className="map-img-box">
                  <Title Title={imgAry[index].content} style={{width:'325px',paddingLeft:'27px'}}/>
                  <img src={imgAry[index].img} alt="" className="map-img" onClick={this.openImg.bind(this)}/>
                </div>
    
                <div className="map-btn" >
                  {
                    
                    imgAry.map((item, ind) => (
                      <div key={ind} className={index == ind ? 'btn' : ''} onClick={() => this.changeMapImg(ind)}>{imgAry[ind].title}</div>
                    ))
                  }
                </div>
              </div>
              <div className="img-pop" style={{display: imgPop}} onClick={this.closeImg.bind(this)}>
                <div className="img-container">
                  <img
                    // src={getImg(add)}
                    src={imgAry[index].img}
                    className="map-img img-size"
                    style={{width: `${imgSize}%`, height: `${imgSize}%`}}
                  />
                </div>
                <div className="map-scal">
                  <div className="btn-link" onClick={this.addClick.bind(this)}
                       style={{background: imgSize >= '250' ? '#ccc' : "#fff"}}>+
                  </div>
                  <div className="divbottom" onClick={this.cutClick.bind(this)}
                       style={{background: imgSize <= '100' ? '#ccc' : "#fff"}}>-
                  </div>
                </div>
              </div>
            </div>
          )
          : null
        }
      </ChildBackground>
    )
  }
}

