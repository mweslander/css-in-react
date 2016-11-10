import React, { Component } from 'react'
import Radium from 'radium'
import { styles } from './styles'

@Radium
class LikeButton extends Component {
  render () {
    const { likes } = this.props
    return (
      <button style={[
        styles.btn,
        styles.btn.btn_primary
      ]}>
        Like <span style={[
          styles.btn.badge,
          styles.btn.btn_primary.badge
        ]}>{likes}</span>
      </button>
    )
  }
}

export default LikeButton
