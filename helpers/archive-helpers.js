var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(func) {

  fs.readFile(exports.paths.list, 'utf8', function (err, urls) {
    if (err) {
      return func(err);
    } else {
      return func(urls.split('\n'));
    }
  });
};

exports.isUrlInList = function() {
// Take a filepath and a URL
// calls read list on file path
// return a boolean if the URL is in the list

};

exports.addUrlToList = function(url) {
  fs.writeFile(__dirname, '../archives/sites.txt', 'utf8', url, function(err, data) {
    if (err) {
      return err;
    } else {
      console.log('SAVE YO FILE!');
    }
  });
// Takes a URL and a filepath
// Calls isURLInList
// If isURLInList returns false, then we write the URL to the list.   
};

exports.isUrlArchived = function() {
//takes a storage file and a URL
// Iterates through the storage file to see if URL is archived
// returns boolean
};

exports.downloadUrls = function() {
//Takes a storage file and checks to see if URL is Archived
// if true then return the URL and send it to the client
};
