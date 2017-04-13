"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');
var _ = require('lodash');

var AuthorActions = {
    createAuthor: function(author){
        //Hey dispatcher, go tell all the stores that an author was just created
        Dispatcher.dispatch({
            actionType: function(_authors){
                _authors.push(AuthorApi.saveAuthor(author));
            }
        });
    },
    updateAuthor: function(author){
        Dispatcher.dispatch({
            actionType: function(_authors){
                var existingAuthor = _.find(_authors, {id: author.id});
                var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
                _authors.splice(existingAuthorIndex, 1, author);
            }
        });
    }
};

module.exports = AuthorActions;