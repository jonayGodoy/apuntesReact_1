"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    render: function() {
        return (
            <form>
                <Input
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.props.onChange}
                    value={this.props.author.firstName}/>
                <Input
                    name="lastName"
                    placeholder="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}/>

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = AuthorForm;