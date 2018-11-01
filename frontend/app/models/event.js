/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2018-10-25T19:41:04-05:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: event.js
 * @Last modified by:   matthale
 * @Last modified time: 2018-10-25T19:47:10-05:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import DS from 'ember-data';

export default DS.Model.extend({
  eventtype: DS.attr('string'),
  requestor: DS.attr('string'),
  timestamp: DS.attr('date'),
  userid: DS.attr('number'),
  img: DS.attr('string', { defaultValue: 'img/event-icon.jpg'}),
  link: DS.attr('string', { defaultValue: 'index'})
});
