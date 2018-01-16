/**
 * Created by sayone on 8/1/18.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery';

class App2 extends React.Component {

    constructor(props)
    {
        super(props);
    }

componentDidMount(){
        document.addEventListener('disp',function(e){
            this.clear();
        }.bind(this),false)
    }
    render()
    {
        return(
            <div>
                <h1>Hello world</h1>
            </div>
            )
    }
}



function getin() {

        var ev=document.createEvent('Event');
        ev.initEvent('disp',true,true);
    //alert("hello");
        document.dispatchEvent(ev);
    //alert("hello");


//    document.getElementById('movies').innerHTML = "";


}


ReactDOM.render(<App2/>,document.getElementById('movies'))
