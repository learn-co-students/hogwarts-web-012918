import React from 'react'
import HogDetail from './Hogdetail'
import squeel from '../audio/wreee.mp3'
class HogTile extends React.Component {

  state = {
    detail: false,
    hidden: false
  }

  displayHogDetail = () => {
    return <HogDetail porker={this.props.porker}/>
  }

  showDetail = (e) => {
    e.target.tagName !== "BUTTON" ? this.setState({detail: !this.state.detail}) : null
  }

  image = () => {
    return (<img className="hog-images" onMouseOver={this.changeToGif} src={require("../hog-imgs/" + this.props.porker.name.toLowerCase().split(" ").join("_") + ".jpg")} alt={this.props.porker.name}/>)
  }

  changeToGif = (e) => {
    e.target.src = "https://i.giphy.com/media/rdma0nDFZMR32/giphy.webp"
    let audio = new Audio(squeel)
    setInterval(function() {audio.play()}, 1000)
  }

  // changeBack = (e) => {
  //   console.log(this.props.porker.name)
  //   e.target.src = `../hog-imgs/${this.props.porker.name.toLowerCase().split(" ").join("_")}.jpg`
  //   console.log(e.target.src)
  // }

  hide = (e) => {
    if (e.target.tagName === "BUTTON") {
      this.setState({
        hidden: !this.state.hidden
      })
      e.target.parentNode.parentNode.style.display = "none"
    }
  }

  render() {
    return (
      <div className="ui four wide column">
        <div className="ui blue card" onClick={this.showDetail}>
          <div className="content">
            <h3 className="description">{this.props.porker.name}</h3>
            {(this.state.detail) ? this.displayHogDetail() : this.image()}
            <br/><br/>
            <button className="ui primary button" onClick={this.hide}>Hide Me</button>
          </div>
        </div>
      </div>
    )
  }
}

export default HogTile
