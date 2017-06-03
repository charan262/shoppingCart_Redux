/**
 * Created by charan reddy on 6/1/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
require('../style.css');
class CurrentItem extends Component{
    cartEle(){

        return this.props.currentItems

    }
    render(){
        return(
                <ul>
                  <h3>TOTAL : $ {this.cartEle()}</h3>
                </ul>
        )
    }
}
function mapStateToProps(state) {
    return{
        currentItems:state.currentItem
    }

}
export default connect(mapStateToProps)(CurrentItem);
