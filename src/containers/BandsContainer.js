import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => {console.log(band); return (<li>key={id}>{band.name}</li> )})

  render() {
    return(
      <div>
        BandsContainer
        < BandInput addBand={this.props.addBand} />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })
const mapDispatchToProps = (dispatch) => ({
  addBand: (band) => (dispatch({
    type: "ADD_BAND",
    band: {name: band}
  }))
})
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
