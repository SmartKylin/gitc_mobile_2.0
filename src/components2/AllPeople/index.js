import React, {Component} from 'react'

import ExpertGroup from '../ExpertGroup'
import PresidentGroup from '../PresidentGroup'
import './index.scss'

export default class extends Component {

  render () {
    return (<div>
         <PresidentGroup />
         <ExpertGroup/>
      </div>
    )
  }
}