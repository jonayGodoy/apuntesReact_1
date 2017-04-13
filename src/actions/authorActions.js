"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function(author){
        //Hey dispatcher, go tell all the stores that an author was just created
        Dispatcher.dispatch({
            actionType: function(_authors){
                _authors.push(AuthorApi.saveAuthor(author));
            }
        });
    }
};

module.exports = AuthorActions;