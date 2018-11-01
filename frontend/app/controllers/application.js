/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2018-08-30T19:27:28-05:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: application.js
 * @Last modified by:   matthale
 * @Last modified time: 2018-10-25T19:57:26-05:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import Ember from 'ember';

export default Ember.Controller.extend({
  showMenu: '',
  actions: {
    toggleMenu(){
      if (this.get('showMenu')){
        this.set('showMenu', '');
      }
      else{
        this.set('showMenu', 'active');
      }

    },
    logout(){
      this.get('auth').logout();
    },
    activateIFTTT(){
      var data = {
        eventtype: 'dashboard_on',
        timestamp: Date.now().toString(),
        userid: this.get('auth.userid')
      };

      Ember.$.ajax({
        url:'/api/activateifttt',
        type:"POST",
        data: JSON.stringify(data),
        contentType:"application/json",
        dataType:"json",
        success: function(response){
          console.log('Attempting to turn ifttt on. Response from server is: ');
          console.log(response);
        }
      });
    },
    createNew(){
      var newevent = this.store.createRecord('event', {
        eventtype: 2,
        requestor: '1.1.1.1',
        timestamp: new Date(),
        userid: 1,
      });
      newevent.save();
    }
  }
});
