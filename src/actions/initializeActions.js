"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');

var InitializeActions = {
    initApp: function(){
        Dispatcher.dispatch({
            actionType: function(_authors){
                for(let author of  AuthorApi.getAllAuthors()){
                    _authors.push(author);
                }
            }
        });
    }
};

module.exports = InitializeActions;