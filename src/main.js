$ = jQuery = require('jquery');
var React = require('react');

var Home = require('./components/homePage');
var Authors = require('./components/author/authorPage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

(function(win){
    "use strict";
    var App = React.createClass({
        render: function(){
            var Child;

            var pages = [];
            pages[''] = Home;
            pages['about'] = About;
            pages['authors'] = Authors;

            Child = pages[this.props.route];

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