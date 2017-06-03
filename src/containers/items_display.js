/**
 * Created by charan reddy on 5/31/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions/addToCart';
import {bindActionCreators} from 'redux';



class ItemsDisplay extends Component{
    buttonIt(){
    const currentItem=this.props.display;
    return <button onClick={()=>this.props.addToCart(currentItem)}>Add to Cart</button>
    }
    render()
        {
            if (!this.props.display) {
                return (<div>Select an item...</div>);
            }
        return(
            <div>
                <h3>Device Name :{this.props.display.name}</h3>
                <h3>Device Id   :  {this.props.display.id}</h3>
                <h3>Device Make :{this.props.display.make}</h3>
                <img src={this.props.display.image} alt="No Network" />
                <h3>Device Price :${this.props.display.price}</h3>
                {this.buttonIt()}

            </div>
        )
    }

}
function mapStateToProps(state){
    return{
        display:state.activeItem,
    }
}
function matchDispatchToProps(disp) {
    return bindActionCreators({addToCart:addToCart},disp)

}
export default connect(mapStateToProps,matchDispatchToProps)(ItemsDisplay);