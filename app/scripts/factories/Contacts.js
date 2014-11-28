'use strict';

angular
  .module('contactApp')
.factory('Contacts', function() {
    var Contacts = {};
    Contacts = [ 
      {
        name: "Tina Benko",
        contact_no: "991988980",
        address: "NASA Scientist,abc,aaaa",
        contactId:"1"
      },
      {
        name: "Asmita",
        contact_no: "991988980",
        address: "NASA Scientist,abc,aaaa",
        contactId: "2"
      }
    ];
    return Contacts;
});
    