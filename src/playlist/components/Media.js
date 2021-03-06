import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Media.css'

class Media extends Component {
  // ES7 STATE as GETinitialState
  state = {
    author: 'INITIAL STATE'
  }

  // constructor (props) {
    // super(props)
    // this.state = {
      // author: props.author
    // }
  // }

  // Best binding for event handlers ES7
  handleClick = (event) => {
    // console.log(this.props.title)
    this.setState({
      author: 'New Title'
    })
  }

  render () {
    // Inline Styles
    //  const styles = {
    //      container: { 
    //        fontSize: 14,
    //        backgroundColor: 'white',
    //        color: '#44546b',
    //        cursor: 'pointer',
    //        width: 260,
    //        border: '1px solid red'
    //      }
    //    }
    // 
    return (
      <div className='Media' onClick={this.handleClick}>
        <div className='Media-cover'>
          <img 
            className='Media-image'
            src={this.props.cover}
            alt=""
            width={260}
            height="160"
          />
          <h3 className='Media-title'>
            {this.props.title}
          </h3>
          <p className='Media-author'>
            {this.props.author}
          </p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media