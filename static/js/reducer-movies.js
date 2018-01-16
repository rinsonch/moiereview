export default function(){
    $.ajax({
            url: this.props.url + ".json/",
            datatype: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data})
                //alert("hello world");
                console.log(this.state.shown)
                console.log("---------------", data);
            }.bind(this)
        })
    return data
}
