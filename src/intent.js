var Rx = require('rx');

var Keys = require('./keys');


//tracks the last "1" changes
var intentSubject = new Rx.ReplaySubject(1);

module.exports = {
  subject: intentSubject,

  add: function (text) {
    intentSubject.onNext({
      key: Keys.TODO_ADD,
      text: text,
    });
  },

  del: function (id) {
    intentSubject.onNext({
      key: Keys.TODO_DELETE,
      id: id,
    });
  },

  edit: function (id, text) {
    intentSubject.onNext({
      key: Keys.TODO_EDIT,
      id: id,
      text: text,
    });
  },

  complete: function (id) {
    intentSubject.onNext({
      key: Keys.TODO_COMPLETE,
      id: id,
    });
  },

  completeAll: function () {
    intentSubject.onNext({
      key: Keys.TODOS_COMPLETE_ALL,
    });
  },

  clearCompleted: function () {
    intentSubject.onNext({
      key: Keys.TODOS_CLEAR_COMPLETED,
    });
  },
};
