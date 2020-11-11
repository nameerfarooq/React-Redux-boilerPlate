import React from 'react'
import {connect} from 'react-redux'
import {set_data} from '../../store/action'


class Home extends React.Component{
  render(){
    console.log("props===>",this.props)
    var new_user = {name:"syed daniyak",email:"smdaniyal321@gmail.com"}
    return(

      <div>
        <h1>REDUX</h1>
        <button onClick={()=>this.props.set_data(new_user)} >set data</button>
        
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
    users : state
})

const mapDispatchToProps = (dispatch)=>({
  set_data : (data)=>dispatch(set_data(data))
  
})


export default connect(mapStateToProps,mapDispatchToProps)(Home);
