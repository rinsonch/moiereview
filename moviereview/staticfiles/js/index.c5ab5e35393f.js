/**
 * Created by sayone on 3/1/18.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery';


function get(id){
        var id=id
        var event=document.createEvent('Event');
        event.initEvent('display',true,true,{id:id});
        event.data=id;
        document.dispatchEvent(event);


    }
class App1 extends React.Component{

    constructor(props) {
    super(props);
        this.closeModal=this.closeModal.bind(this)
  this.state={
       data:[],name:null,show:'none',category:null
    }
}
    showModal(x){
        this.setState({name:x})
    }
    closeModal(){
        this.setState({show:'none'})
    }

     loadFromServer(x)
    {
        $.ajax({
            url: this.props.url+"/"+x,
            datatype: 'json',
            cache: false,
            success: function(data) {
                var number =data.category.toString()
                var output=[]
                var categry=" "
                for (var i = 0, len = number.length; i < len; i += 1) {
    output.push(+number.charAt(i));
}
                for(var i=0;i<output.length;i++) {

                        if (output[i] == 1) {
                            categry += "Action "
                        }
                        else if (number[i] == 2) {
                            categry += "Adventure "
                        }
                        else if (number[i] == 3) {
                            categry += "Comedy "
                        }
                        else if (number[i] == 4){
                            categry += "Thriller "
                        }
                    }
                this.setState({data: data,show:'block',category:categry})
            }.bind(this)
        })
    }

    componentDidMount(){
        document.addEventListener('display',function(e){
            var x= e.data
            this.showModal(x)
            this.closeModal()
            this.loadFromServer(x)
        }.bind(this),false)
    }


    render(){

        var style={display:this.state.show,
                      position: 'fixed',
                      top: '15%',
                      left: '20%',
                      width: '60%',
                      height: '80%',
                      padding: '16px',
                      border: '3px solid orange',
                      borderRadius:'15px',
                      background: 'white',
                      zIndex: '1002',
                      overflow: 'auto'}
        var btnstyle={position:'relative',top:'0px',float:'right',background:'grey'}
        var close
        return(
            <div style={style}>
                <button className="btn-btn-default" style={btnstyle} onClick={this.closeModal}>X</button>
                <h1>{this.state.data.title}</h1>
                <img width="400" height="200" src={this.state.data.image}/>
                <h2>Director-{this.state.data.directors}</h2>
                <h3>Rating-{this.state.data.rating}</h3>
                <h3>Category-{this.state.category}</h3>
                <h4>Writers-{this.state.data.writers}</h4>
                <h4>Starring ::{this.state.data.stars}</h4>
                <h4>Review-{this.state.data.review}</h4>
                <h5>Date:{this.state.data.date}</h5>

            </div>
            )
    }

  }

ReactDOM.render(<App1 url='/api/movies' ></App1>,
    document.getElementById('react'))
