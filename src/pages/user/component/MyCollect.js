import React, {Component} from 'react'
import AccordionHeader  from '../../../components2/AccordionHeader'
import CollectItem from './CollectionItem'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      guestData: props.guestData || []
    }
  }
  
  changeCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    let {openPop, closePop, setLoginCb } = this.props
    let {guestData} = this.state
    console.log(guestData, 'mucollec');
    let {collapsed} = this.state
    return (

      <div closeName="my-accordion">
        <AccordionHeader
          name={'我的收藏'}
          changeCollapse={this.changeCollapse}
          collapsed={collapsed}
          iconName={'icon-shoucang1'}
        />
  
        <div className={collapsed ? 'accor-content hidden-style' : 'accor-content'}>
          <div className='collection-item-time'>11月23日</div><div className='xian'></div>
          {
  
            guestData && guestData[0] && guestData[0].data.map((item, index) => (
            <CollectItem
              key={index}
              data={item}
  
              openPop={openPop}
              closePop={closePop}
              setLoginCb={setLoginCb}
              hasPop={true}
            />
            ))
          }
          <div><div className='collection-item-time'>11月24日</div><div className='xian'></div></div>
          {
    
            guestData && guestData[1] && guestData[1].data.map((item, index) => (
            <CollectItem
              key={index}
              data={item}
      
              openPop={openPop}
              closePop={closePop}
              setLoginCb={setLoginCb}
              hasPop={true}
            />
            ))
          }
        </div>
      </div>
    )
  }
}