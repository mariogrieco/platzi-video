import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Media from './Media.js'

import './Playlist.css'

class Playlist extends Component {
  constructor () {
    super()
  }

  render () {
    const playlist = this.props.data.categories[0].playlist
    console.log(playlist)

    return (
      <div>
        {
          playlist.map((item) => {
            return (
              <Media 
                {...item}
                key={item.id}
                // image={item.image}
                // type={item.type}
              />
            )
          })
        }
      </div>
    )
  }
}

Playlist.propTypes = {
  data: PropTypes.shape({
    categories: PropTypes.array
  })
}

export default Playlist
