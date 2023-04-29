import React from "react"

class Person extends React.Component{
    constructor(){
      super()
      this.state={
        count : 0
      }
    }
    componentDidMount(){
        setInterval(() => this.setState({count:this.state.count+1}),1000)
    }
    componentWillUnmount(){

    }
    
render(){

// const Person =()=>{
    return(
        <div className="samer">
             <span>{this.state.count}</span>
            <h1>Bacha Islem</h1>
            <h2>Menzel tmim monji slim</h2>
            <img src="https://scontent.ftun14-1.fna.fbcdn.net/v/t1.6435-9/124188856_1793523534146154_7451819969855609269_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=MRymIwXuiKEAX_bNR9S&_nc_ht=scontent.ftun14-1.fna&oh=00_AfCwl1mhcp7wv8KWvTAnNCD_iFKh7nvK3iqbNqIv9GKOrQ&oe=6474AADD" width={('500px')}></img>

             <h3>go my code full stack js</h3>
        </div>
    )
}
}
export default Person