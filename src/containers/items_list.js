/**
 * Created by charan reddy on 5/31/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectItem} from '../actions/display';
require('../style.css');
class ItemsList extends Component{
  renderIt(){
      return this.props.items.map((item)=>{
          return(
<div className="button">
    <button onClick={()=>this.props.selectItem(item)}>{item.name}</button>
</div>
          )
      })
  }
    render(){
        return(
            <ul>
                {this.renderIt()}
            </ul>
        )
    }
}
function mapStateToProps(state){
    return {
        items: state.items
    }
}
function matchDispatchToProps(disp) {
    return bindActionCreators({selectItem:selectItem},disp)

}

export default connect(mapStateToProps,matchDispatchToProps)(ItemsList);

