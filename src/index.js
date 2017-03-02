'use strict';
const React = require('react');
const Preview = require('./Preview');
const { fetchFilms } = require('./api');
const icon = require('./icon.png');
const keyword = 'trakt';

const fn = ({term, display, actions}) => {
  let match = term.match(/trakt\s+(.+)/);
  match = match || term.match(/(.+)\s+trakt/);
  if (match) {
    const q = match[1];
    fetchFilms(q).then(items => {
      if (!items) {
        return;
      }
      const results = items.map(item => ({
        icon,
        id: item[item.type].ids.trakt,
        title: `${item[item.type].title} (${item[item.type].year})`,
        clipboard: `http://trakt.tv/${item.type}s/${item[item.type].ids.slug}/`,
        onSelect: () => actions.open(`http://trakt.tv/${item.type}s/${item[item.type].ids.slug}/`),
        getPreview: () => <Preview key={item[item.type].ids.imdb} id={item[item.type].ids.imdb} />
      }));
      display(results);
    });
  }
};

module.exports = {
  name: 'Search on trakt.tv...',
  fn, icon, keyword,
};
