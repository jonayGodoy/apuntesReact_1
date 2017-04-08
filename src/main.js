

$ = jQuery = require('jquery');
var React = require('react');

var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

(function(win){
    "use strict";
    var App = React.createClass({
        render: function(){
            var Child;

            if(this.props.route === 'about'){
                Child = About;
            }else{
                Child = Home;
            }

            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );
        }
    });


    function render(){
        var route = win.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }

    win.addEventListener('haschange', render);
    render();

}(window));