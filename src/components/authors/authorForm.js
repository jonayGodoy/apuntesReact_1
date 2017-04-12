"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    PropTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function() {
        return (
            <form>
                <Input
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.props.onChange}
                    value={this.props.author.firstName}
                    error={this.props.errors.firstName}
                />
                <Input
                    name="lastName"
                    placeholder="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName}
                />

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = AuthorForm;