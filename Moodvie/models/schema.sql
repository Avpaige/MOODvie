DROP DATABASE IF EXISTS moodviedb;
CREATE DATABASE moodviedb;

USE moodviedb;

CREATE TABLE movies
(
	title varchar(255) NOT NULL,
	rating varchar(10) NOT NULL,
    genre varchar(100) NOT NULL,
    total_rating NUMERIC (5) DEFAULT 0,
    total_raters NUMERIC (30) DEFAULT 0,
    avg_rating DECIMAL(5.10) DEFAULT 0,
    watch_myself BOOLEAN DEFAULT false,
	watch_boo BOOLEAN DEFAULT false,    
    watch_fam BOOLEAN DEFAULT false,
    watch_squad BOOLEAN DEFAULT false,
    watch_nosey BOOLEAN DEFAULT false,
    laugh_inappropiate BOOLEAN DEFAULT false,
    laugh_wholesome	BOOLEAN DEFAULT false,
    laugh_bad_movie BOOLEAN DEFAULT false,
    laugh_in_general BOOLEAN DEFAULT false,
    cry_rough_day BOOLEAN DEFAULT false,
    cry_dumped BOOLEAN DEFAULT false,
    cry_cry BOOLEAN DEFAULT false,
    cry_leave_alone BOOLEAN DEFAULT false,
    amp_kick_ass BOOLEAN DEFAULT false,
    amp_system BOOLEAN DEFAULT false,
    amp_blow_up BOOLEAN DEFAULT false,
    amp_revenge BOOLEAN DEFAULT false,
    think_learn BOOLEAN DEFAULT false,
    think_true_story BOOLEAN DEFAULT false,
    think_challenge BOOLEAN DEFAULT false,
    think_small_talk BOOLEAN DEFAULT false,
    emotion_action BOOLEAN DEFAULT false,
    emotion_tears BOOLEAN DEFAULT false,
    emotion_learn BOOLEAN DEFAULT false,
    emotion_drama BOOLEAN DEFAULT false,
    sleep_sweet_dreams BOOLEAN DEFAULT false,
    sleep_weird_dreams BOOLEAN DEFAULT false,
    sleep_scary_dreams BOOLEAN DEFAULT false,
    sleep_surpise_me BOOLEAN DEFAULT false,
    scare_ghosts BOOLEAN DEFAULT false,	
    scare_monsters	BOOLEAN DEFAULT false,
    scare_irl_creep BOOLEAN DEFAULT false,
    scare_whatever BOOLEAN DEFAULT false,
    id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);

CREATE TABLE genres
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
    genre varchar(100) NOT NULL,
	PRIMARY KEY (id)
);
