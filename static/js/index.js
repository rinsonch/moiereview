/**
 * Created by sayone on 3/1/18.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery';

//import { withRouter } from 'react-router-dom'


function get(id){
        var id=id
        var event=document.createEvent('Event');
        event.initEvent('display',true,true,{id:id});
        event.data=id;
        document.dispatchEvent(event);


    }

//function getin() {
//    document.getElementById("home").className = "menu-item";
//    document.getElementById("review").className = "menu-item current-menu-item";
//    document.getElementById("home").style.display = "none";
//        var ev=document.createEvent('Event');
//        ev.initEvent('disp',true,true);
//
//
//        document.dispatchEvent(ev);
//}

class App1 extends React.Component{

    constructor(props) {
    super(props);
        this.closeModal=this.closeModal.bind(this)
  this.state={
       data:[],show:'none',category:null
    }
}

    closeModal(){

        this.setState({show:'none'})
        document.getElementById("homecontent").style.display = "block";
         history.pushState({},"","/")
    }

     loadFromServer(idofmovie)
    {
        $.ajax({
            url:"/api/movies/"+idofmovie,
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
                data.categry=categry
                document.getElementById("homecontent").style.display = "none";
                this.setState({data: data,show:'block',category:categry})
                history.pushState({},"","#home/reviews/"+data.id)
            }.bind(this)
        })
    }

    componentDidMount(){
        document.addEventListener('display',function(e){
            var idofmovie= e.data
            this.closeModal()
            this.loadFromServer(idofmovie)
        }.bind(this),false)
    }

    render(){

        var style={display:this.state.show}
        return(
            <main class="main-content" id="maincontent" style={style}>
				<div class="container">
					<div class="page">
						<div class="breadcrumbs">
							<a onClick={this.closeModal}>Home</a>
							<span>{this.state.data.title}</span>
						</div>

						<div class="content">
							<div class="row">
								<div class="col-md-6">
									<figure class="movie-poster"><div class="page1"><img src={this.state.data.image} alt="#"/></div></figure>
								</div>
								<div class="col-md-6">
									<h2 class="movie-title">{this.state.data.title}</h2>
									<div class="movie-summary">
                                    <p>{this.state.data.description}</p>
									</div>
									<ul class="movie-meta">
										<li><strong>Rating:</strong>
											<div  ><span ><strong >{this.state.data.rating}.00</strong> out of 5</span></div>
										</li>
										<li><strong>Length:</strong> {this.state.data.length}</li>
										<li><strong>Premiere:</strong> {this.state.data.date}</li>
										<li><strong>Category:</strong> {this.state.data.categry}</li>
									</ul>

									<ul class="starring">
										<li><strong>Directors:</strong>{this.state.data.directors}</li>
										<li><strong>Writers:</strong> {this.state.data.writers}</li>
										<li><strong>Stars:</strong>{this.state.data.stars}</li>
									</ul>
								</div>
							</div>
							<div class="entry-content">
								<p>{this.state.data.review}</p>
							</div>
						</div>
					</div>
				</div>
			</main>

            )
    }

  }
class App2 extends React.Component
{

    constructor(props)
    {
        super(props);

        this.hide=this.hide.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            shown: false,data: [], currentPage: 1,datacopy:[],
      todosPerPage: 4,selected:false,param:[],select:'select',selected:'',displayeddata:[],idsofdata:[],datatobedisplayed:[]
        }


    }

    handleClick(param,e) {
    var prevnum=this.state.currentPage
    document.getElementById(Number(prevnum)).className = "page-number";
    document.getElementById(Number(param)).className = "page-number current";

    this.setState({
      currentPage: Number(param)
    })

  }

    showModal()
    {
        this.setState({shown: 'true' })
    }

    create(param,e)
    {
        var movieid= param
        $.ajax({
            url: "/api/movies/"+movieid+".json/",
            datatype: 'json',
            cache: false,
            success: function (data) {
                var number =data.category.toString()
               var output=[]
                var categry=""
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
        data.categry=categry
 this.setState({
            selected:true,shown:false,param:data
        })
                history.pushState({},"","#/moviereviews/"+data.id)
            }.bind(this)
        })

    }
    loadFromServer()
    {
        $.ajax({
            url: "/api/movies.json/",
            datatype: 'json',
            cache: false,
            success: function (data) {
                var i
                var idsofdata=[]
                for (i in data) {
                if ((!!data[i] && typeof(data[i]) == "object")) {
                        idsofdata.push(data[i].id)
                }
                i++
            }
                this.setState({data: data,datacopy:data,displayeddata:data,select:'select',date:'select',idsofdata:idsofdata})
            }.bind(this)
        })
    }

    hide(){
     document.getElementById("home").className = "menu-item current-menu-item";
     document.getElementById("review").className = "menu-item";
     document.getElementById("homecontent").style.display = "block";
     history.pushState({},"","/")
     this.setState({shown:false,selected:false})

}
    change(event){

    var sel=event.target.value.toString()
    var dataas=this.state.datacopy
    var sentdata=[]
    var i={}
    var j={}
    var k={}
    for (i in dataas) {
        if ((!!dataas[i] && typeof(dataas[i])=="object")) {
            k=dataas[i].date.slice(0,4).toString()
            for(j in dataas[i].category){

                if(dataas[i].category[j]==sel || k==sel){

                    sentdata.push(dataas[i])
                    break
                }
            }

            i++
        }
    }
    var prev=this.state.select.toString()
    this.state.select=sel
    if(sel=='1'||sel=='2'||sel=='3'||sel=='4') {
        this.setState({data: sentdata,displayeddata:sentdata,date:'select', select: event.target.value, currentPage: 1})
    }
    else{

        this.setState({data: this.state.datacopy,displayeddata:dataas,date:'select',select:this.state.select, currentPage: 1})
    }

}
    hidereview(){
    this.setState({shown:true,selected:false})
    history.pushState({},"","#/moviereviews/")
}
    year(event){
        var val=event.target.value.toString()
        var dataas=this.state.displayeddata
        var sentdata=[]
        var index={}
        if(val=='2013'||val=='2017'||val=='2018') {
            for (index in dataas) {
                if ((!!dataas[index] && typeof(dataas[index]) == "object")) {
                    if (val == dataas[index].date.slice(0, 4).toString()) {
                        sentdata.push(dataas[index])
                    }
                }
                index++
            }
            this.setState({date:event.target.value,data:sentdata,currentPage:1})
        }
    else{
            this.setState({date:val,data:dataas,currentPage:1})
        }
}

    componentDidMount()
    {
        document.addEventListener('disp', function (e) {
            this.showModal()
            this.loadFromServer()


        }.bind(this), false)
    }
    componentWillUpdate(){
    let l=this.state.currentPage
    if(document.getElementById(Number(l))) {
        document.getElementById(Number(l)).className = "page-number";
    }
}
    componentDidUpdate(){
    let l=this.state.currentPage
    if(document.getElementById(Number(l))) {
        document.getElementById(Number(l)).className = "page-number current";
    }

}

    render()
    {
        var dataas=this.state.datacopy
        var sentdata=[]
        var index={}
        var j={}
        var k={}
        var v

            for (index in dataas) {
                if ((!!dataas[index] && typeof(dataas[index]) == "object")) {
                  var yearval = dataas[index].date.slice(0, 4).toString()
                        sentdata.push(yearval)
                    }
                index++
                }
   var uniqueyear = sentdata.filter((v, index, a) => a.indexOf(v) === index);
            const { data, currentPage, todosPerPage } = this.state;
            const indexOfLastPage = currentPage * todosPerPage;
            const indexOfFirstPage = indexOfLastPage - todosPerPage;
            const currentTodos = data.slice(indexOfFirstPage, indexOfLastPage);
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(data.length / todosPerPage); i++) {
                pageNumbers.push(i);
            }

if(currentTodos){
    var movieNodes=currentTodos.map(function(movie){

    return(
        <div class="movie" key={movie.id}>
            <figure class="movie-poster">
                <img src={movie.image} alt={movie.title}/>
            </figure>
            <div class="movie-title">
                <a  onClick={this.create.bind(this, movie.id)}>{movie.title}</a>
            </div>
            <p>{movie.description}</p>
        </div>
        )}.bind(this)
    )
    }
    else{
        var movieNodes=function(){
            return(<div><h1>No Movies</h1></div>)
        }
    }
        var years=uniqueyear.map(function(year){
            return(
<option value={year}>{year}</option>
                )
        })


        var renderPageNumbers = pageNumbers.map(function(number){

      return (

							<span><a key={number} id={number}  class="page-number current"   onClick={this.handleClick.bind(this,number)} className="page-number"> {number}  </a> </span>

      )
        }.bind(this))

        const states = this.state.shown
        const value=this.state.selected
        if (states) {
            return(
                <div class="container">
					<div class="page">
						<div class="breadcrumbs">
							<a onClick={this.hide}>Home</a>
							<span>Movie Review</span>
						</div>

						<div class="filters">
							<select name="#" id="cat"  value={this.state.select} onChange={this.change.bind(this)}>
                                <option value="select">Select</option>
								<option value="1">Action</option>
								<option value="4">Thriller</option>
								<option value="3">Comedy</option>
								<option value="2">Adventure</option>
							</select>
							<select name="#" id="year" value={this.state.date} onChange={this.year.bind(this)}>
                                <option value="select">Select year</option>
                            {years}
							</select>
						</div>
                        <div class="movie-list">
                        {movieNodes}
                        <div class="pagination">{renderPageNumbers}</div>
                            </div>

					</div>
				</div>
                )
        }

        else if(value){
            return(
                <main class="main-content">
				<div class="container">
					<div class="page">
						<div class="breadcrumbs">
							<a onClick={this.hide}>Home</a>
							<a onClick={this.hidereview.bind(this)}>Movie Review</a>
							<span>{this.state.param.title}</span>
						</div>

						<div class="content">
							<div class="row">
								<div class="col-md-6">
									<figure class="movie-poster"><div class="page1"><img src={this.state.param.image} alt="#"/></div></figure>
								</div>
								<div class="col-md-6">
									<h2 class="movie-title">{this.state.param.title}</h2>
									<div class="movie-summary">
                                    <p>{this.state.param.description}</p>
									</div>
									<ul class="movie-meta">
										<li><strong>Rating:</strong>
											<div   title="Rated 3.00 out of 5"><span ><strong >{this.state.param.rating}.00</strong> out of 5</span></div>
										</li>
										<li><strong>Length:</strong> {this.state.param.length}</li>
										<li><strong>Premiere:</strong> {this.state.param.date}</li>
										<li><strong>Category:</strong> {this.state.param.categry}</li>
									</ul>
									<ul class="starring">
										<li><strong>Directors:</strong>{this.state.param.directors}</li>
										<li><strong>Writers:</strong> {this.state.param.writers}</li>
										<li><strong>Stars:</strong>{this.state.param.stars}</li>
									</ul>
								</div>
							</div>
							<div class="entry-content">
								<p>{this.state.param.review}</p>
							</div>
						</div>
					</div>
				</div>
			</main>
            )
        }
            else{
            return(<div></div>)
        }
    }
}



function getin() {
 document.getElementById("home").className = "menu-item";
 document.getElementById("homecontent").style.display = "none";
     document.getElementById("maincontent").style.display = "none";
    history.pushState({},"","#/moviereviews")
     document.getElementById("review").className = "menu-item current-menu-item";
        var ev=document.createEvent('Event');
        ev.initEvent('disp',true,true);
        document.dispatchEvent(ev);
}


ReactDOM.render(<div><App2/><App1></App1></div>,
    document.getElementById('movies'))
