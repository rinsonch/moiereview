/**
 * Created by sayone on 3/1/18.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery';
const logo = require('./images/icon-contact-map.png');
const phone=require('./images/icon-contact-phone.png');
const message=require('./images/icon-contact-message.png');




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
            shown: false, currentPage: 1,totalpages:'',
      todosPerPage: 3,selected:false,param:[],select:'select',selected:'',nameofdata:[],year:'year'
        }
    }

    handleClick(param,e) {

    var prevnum=this.state.currentPage
    document.getElementById(Number(prevnum)).className = "page-number";
    document.getElementById(Number(param)).className = "page-number current";
    var page=param
        $.ajax({
            url: "/movielist/?page="+page+"&format=json",
            datatype: 'json',
            cache: false,
            data:{'year':this.state.year,'category':this.state.select},
            success: function (data) {
                this.setState({nameofdata:data.results,currentPage:Number(param)})
            }.bind(this)
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
       var page=this.state.currentPage
        $.ajax({
            url: "/movielist/?page=1&format=json",
            datatype: 'json',
            cache: false,
            data:{'year':'year','category':'select'},
            success: function (data) {
                this.setState({nameofdata:data.results,totalpages:data.count,year:'year',select:'select',currentPage:1})

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
    var selection=event.target.value.toString()
        $.ajax({
            url: "/movielist/?page=1&format=json",
            datatype: 'json',
            cache: false,
            data:{year:this.state.year,category:selection},
            success: function (data) {
                this.setState({nameofdata:data.results,totalpages:data.count,select:selection,currentPage:1})

            }.bind(this)
        })


}
    hidereview(){
    this.setState({shown:true,selected:false})
    history.pushState({},"","#/moviereviews/")
}
    year(event){
    var yearselected=event.target.value.toString()
    var categoryselection=this.state.select

            $.ajax({
            url: "movielist/?page=1&format=json",
            datatype: 'text/plain',
            cache: false,
            data: {'year': yearselected, 'category': categoryselection},
            success: function (data) {

                this.setState({select: categoryselection, year: yearselected, nameofdata:data.results,totalpages:data.count, ajax: true, currentPage: 1})
            }.bind(this)
        })
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
    const totalitemlenth=this.state.totalpages
    const pageNumbers=[]
    var todosPerPage=this.state.todosPerPage
    for (let i = 1; i <= Math.ceil( totalitemlenth/ todosPerPage); i++) {
                pageNumbers.push(i);
            }
    var movieNodes=this.state.nameofdata.map(function(movie){
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




        var renderPageNumbers = pageNumbers.map(function(number){

      return (

							<span><a key={number} id={number}  class="page-number current"   onClick={this.handleClick.bind(this,number)} className="page-number"> {number}  </a> </span>

      )
        }.bind(this))

        const states = this.state.shown
        const value=this.state.selected
        if (states) {
            return(
                <div class="container" id="moviereview">
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
							<select name="#" id="year" value={this.state.year} onChange={this.year.bind(this)}>
                                <option value="year">select</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
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
                <main class="main-content" id="moviereviewdetails">
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

class Contact extends React.Component{
    constructor(props) {
    super(props)
        this.showContactForm=this.showContactForm.bind(this)
        this.submit=this.submit.bind(this)
        this.state={showcontactform:false,name:'',message:'',email:'',website:''}
}
showContactForm(){
        this.setState({showcontactform:true})
    }
    componentDidMount(){
        document.addEventListener('displaycontact', function (e) {
        this.showContactForm()
        }.bind(this), false)
    }

submit(){
    var name=this.state.name
    var email=this.state.email
    var message=this.state.message
    var website=this.state.website
    if((!(/\S+@\S+\.\S+/.test(email.toString())))&&(name===""||message==="")){
        alert("Enter full details")
    }
    else if(!(/\S+@\S+\.\S+/.test(email.toString()))){
        alert("Enter valid  email")
    }
    else {
        if (name === "" || email === "" || message === "") {
            alert("please enter the required fields")
        }
        else {
             this.setState({name: '', email: '', message: '', website: ''})
            $.ajax({

                url: "/" + "mail/",
                datatype: 'text/plain',
                data: {'name': name, 'email': email, 'message': message, 'website': website},
                cache: false,
                success: function (data) {
                    alert(data)

                }.bind(this),
                error: function (error) {
                }
            })
        }
    }

}
    render(){
        if(this.state.showcontactform) {
            return(<div id="contact">
                <main class="main-content">
				<div class="container">
					<div class="page">
					<div class="content">
							<div class="row">
								<div class="col-md-4">
									<h2>Contact</h2>
									<ul class="contact-detail">
										<li>
											<img src={logo} alt="#"/>
											<address><span>Company name. INC</span> <br/>550 Avenue Street, New york</address>
										</li>
										<li>
											<img src={phone} alt=""/>
											<a href="tel:1590912831">+1 590 912 831</a>
										</li>
										<li>
											<img src={message} alt=""/>
											<a href="mailto:contact@companyname.com">contact@companyname.com</a>
										</li>
									</ul>
									<div class="contact-form">
                                        <form >
										<input type="text" class="name" placeholder="name..." onChange={e=>this.setState({name:e.target.value})} value={this.state.name} required/>
										<input type="email" class="email" placeholder="email..." onChange={e=>this.setState({email:e.target.value})} value={this.state.email} required/>
										<input type="text" class="website" placeholder="website..." onChange={e=>this.setState({website:e.target.value})} value={this.state.website}/>
										<textarea class="message" placeholder="message..." onChange={e=>this.setState({message:e.target.value})} value={this.state.message} required></textarea>
										<input type="button"  value="Send Message" onClick={this.submit}/>
                                        </form>
									</div>
								</div>
								<div class="col-md-7 col-md-offset-1">
									<div class="map"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

            </div>)
        }
        else{
            return(<div></div>)
        }
    }
}

function getin() {
        document.getElementById("home").className = "menu-item";
        document.getElementById("contactform").className = "menu-item";
    if(document.getElementById("homecontent")){
        document.getElementById("homecontent").style.display = "none";}
    if(document.getElementById("maincontent")){
        document.getElementById("maincontent").style.display = "none";}
    if(document.getElementById("moviereview")) {
        document.getElementById("moviereview").style.display = "block";}
        history.pushState({},"","#/moviereviews")
    if(document.getElementById("contact")) {
        document.getElementById("contact").style.display = "none"; }
        document.getElementById("review").className = "menu-item current-menu-item";
        var ev=document.createEvent('Event');
        ev.initEvent('disp',true,true);
        document.dispatchEvent(ev);
}
function contact(){
    document.getElementById("home").className = "menu-item";
    if(document.getElementById("homecontent")) {
        document.getElementById("homecontent").style.display = "none";
    }
    if(document.getElementById("maincontent")) {
        document.getElementById("maincontent").style.display = "none";
    }
    if(document.getElementById("moviereviewdetails")) {
        document.getElementById("moviereviewdetails").style.display = "none";
    }
    if(document.getElementById("moviereview")) {
        document.getElementById("moviereview").style.display = "none";
    }
     if(document.getElementById("contact")) {
        document.getElementById("contact").style.display = "block";
    }

    document.getElementById("review").className = "menu-item ";
    document.getElementById("contactform").className = "menu-item current-menu-item";
    var contactevent=document.createEvent('Event');
    history.pushState({},"","/#contact")
    contactevent.initEvent('displaycontact',true,true);
    document.dispatchEvent(contactevent)
}


ReactDOM.render(<div><App2/><App1></App1><Contact/></div>,
    document.getElementById('movies'))
