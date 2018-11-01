/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2018-10-25T19:44:44-05:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: application.js
 * @Last modified by:   matthale
 * @Last modified time: 2018-10-25T19:45:19-05:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api'
});
