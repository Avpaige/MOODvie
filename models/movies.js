'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
  title: DataTypes.STRING,
  rating: DataTypes.STRING,
  genre: DataTypes.STRING,
  total_rating: DataTypes.NUMERIC,
  total_raters: DataTypes.NUMERIC,
  avg_rating: DataTypes.DECIMAL,
  watch_myself: DataTypes.BOOLEAN,
  watch_boo: DataTypes.BOOLEAN, 
  watch_fam: DataTypes.BOOLEAN,
  watch_squad: DataTypes.BOOLEAN,
  watch_nosey: DataTypes.BOOLEAN,
  laugh_inappropiate: DataTypes.BOOLEAN,
  laugh_wholesome: DataTypes.BOOLEAN,
  laugh_bad_movie: DataTypes.BOOLEAN,
  laugh_in_general: DataTypes.BOOLEAN,
  cry_rough_day: DataTypes.BOOLEAN,
  cry_dumped: DataTypes.BOOLEAN,
  cry_cry: DataTypes.BOOLEAN,
  cry_leave_alone: DataTypes.BOOLEAN,
  amp_kick_ass: DataTypes.BOOLEAN,
  amp_system: DataTypes.BOOLEAN,
  amp_blow_up: DataTypes.BOOLEAN,
  amp_revenge: DataTypes.BOOLEAN,
  think_learn: DataTypes.BOOLEAN,
  think_true_story: DataTypes.BOOLEAN,
  think_challenge: DataTypes.BOOLEAN,
  think_small_talk: DataTypes.BOOLEAN,
  emotion_action: DataTypes.BOOLEAN,
  emotion_tears: DataTypes.BOOLEAN,
  emotion_learn: DataTypes.BOOLEAN,
  emotion_drama: DataTypes.BOOLEAN,
  sleep_sweet_dreams: DataTypes.BOOLEAN,
  sleep_weird_dreams: DataTypes.BOOLEAN,
  sleep_scary_dreams: DataTypes.BOOLEAN,
  sleep_surpise_me: DataTypes.BOOLEAN,
  scare_ghosts: DataTypes.BOOLEAN,
  scare_monsters: DataTypes.BOOLEAN,
  scare_irl_creep: DataTypes.BOOLEAN,
  scare_whatever: DataTypes.BOOLEAN
  }, {});
  movies.associate = function(models) {
    // associations can be defined here
  };
  return movies;
};


