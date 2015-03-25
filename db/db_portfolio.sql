-- phpMyAdmin SQL Dump
-- version 2.8.0.1
-- http://www.phpmyadmin.net
-- 
-- Host: custsql-ipg100.eigbox.net
-- Generation Time: Mar 25, 2015 at 12:09 PM
-- Server version: 5.5.40
-- PHP Version: 4.4.9
-- 
-- Database: 'db_portfolio'
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table 'tbl_builtwith'
-- 

CREATE TABLE tbl_builtwith (
  builtwith_id tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  builtwith_tool varchar(50) NOT NULL,
  PRIMARY KEY (builtwith_id)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- 
-- Dumping data for table 'tbl_builtwith'
-- 

INSERT INTO tbl_builtwith VALUES (1, 'Amazium');
INSERT INTO tbl_builtwith VALUES (2, 'Foundation');
INSERT INTO tbl_builtwith VALUES (3, 'Bootstrap');
INSERT INTO tbl_builtwith VALUES (4, 'Wordpress');
INSERT INTO tbl_builtwith VALUES (5, 'Drupal');
INSERT INTO tbl_builtwith VALUES (6, 'AJAX');
INSERT INTO tbl_builtwith VALUES (7, 'Codeigniter');
INSERT INTO tbl_builtwith VALUES (8, 'HTML5');
INSERT INTO tbl_builtwith VALUES (9, 'CSS3');
INSERT INTO tbl_builtwith VALUES (10, 'Javascript');
INSERT INTO tbl_builtwith VALUES (11, 'skrollr');
INSERT INTO tbl_builtwith VALUES (12, 'Greensock');

-- --------------------------------------------------------

-- 
-- Table structure for table 'tbl_l_projects_builtwith'
-- 

CREATE TABLE tbl_l_projects_builtwith (
  projects_builtwith_id smallint(4) unsigned NOT NULL AUTO_INCREMENT,
  projects_id tinyint(6) NOT NULL,
  builtwith_id tinyint(6) NOT NULL,
  PRIMARY KEY (projects_builtwith_id)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- 
-- Dumping data for table 'tbl_l_projects_builtwith'
-- 

INSERT INTO tbl_l_projects_builtwith VALUES (1, 1, 2);
INSERT INTO tbl_l_projects_builtwith VALUES (2, 1, 6);
INSERT INTO tbl_l_projects_builtwith VALUES (3, 1, 8);
INSERT INTO tbl_l_projects_builtwith VALUES (4, 1, 9);
INSERT INTO tbl_l_projects_builtwith VALUES (5, 1, 10);
INSERT INTO tbl_l_projects_builtwith VALUES (6, 4, 3);
INSERT INTO tbl_l_projects_builtwith VALUES (7, 4, 8);
INSERT INTO tbl_l_projects_builtwith VALUES (8, 4, 9);
INSERT INTO tbl_l_projects_builtwith VALUES (9, 4, 10);
INSERT INTO tbl_l_projects_builtwith VALUES (10, 4, 12);

-- --------------------------------------------------------

-- 
-- Table structure for table 'tbl_projects'
-- 

CREATE TABLE tbl_projects (
  projects_id tinyint(3) NOT NULL AUTO_INCREMENT,
  projects_title varchar(50) NOT NULL,
  projects_shortname varchar(50) NOT NULL,
  projects_icon varchar(50) NOT NULL DEFAULT 'icon.svg',
  projects_comp varchar(50) NOT NULL,
  projects_headline text NOT NULL,
  projects_link varchar(75) NOT NULL,
  projects_design text NOT NULL,
  projects_dev text NOT NULL,
  PRIMARY KEY (projects_id)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- 
-- Dumping data for table 'tbl_projects'
-- 

INSERT INTO tbl_projects VALUES (1, 'Beardbrand', 'beardbrand', 'icon_beardbrand.svg', 'comp_beardbrand.png', 'Beardbrand is a great company based out of Portland specializing in selling boutique beard and men''s hygeine products. They''ve got a great brand identity already, but I thought I could rejig the website a bit.', 'http://www.ryanmchale.ca/portfolio/beardbrand', 'One of my favourite pieces of Beardbrand''s fantastic existing brand identity is a version of their logo I''ve only seen on their Youtube page. I decided to carry its stylistic elements over throughout the rest of the design, opting for lots of blues and whites with boxy elements.', 'I had quite a few interesting challenges on this project. I set myself a few goals, the largest of which was to push myself and to try and implement AJAX filtering and live searching. It was quite a task, and despite some initial struggling with PHP''s json_encode functionality, I ultimately got things working by structuring my JSON object manually in my PHP. It was a great way to learn JSON structure the hard way, but next time I''m really looking forward to figuring out a smarter way to do things.');
INSERT INTO tbl_projects VALUES (2, 'Big Lonely', 'biglonely', 'icon_biglonely.svg', 'comp_biglonely.png', 'I met the drummer for this great local indie band called Big Lonely over the summer. They needed a site and I need portfolio pieces, so I kept promising to build them a website when I had time. Luckily, our profs this year gave me an opportunity.', 'http://www.ryanmchale.ca/portfolio/biglonely', 'This was a great group project to have been a part of, and all credit for the design really has to go to Alifie Hijazi and Xavier Madamba-Pekcham, who I was fortunate enough to work with on this. They handled the visuals while I tackled the Javascript implementation.', 'Greensock and CSS3 transitions and animations were used to give a great dynamic quality to the initial design. The spinning record and the way it dips down into the sleeve upon changing songs was something I felt quite proud of once I figured it out.');
INSERT INTO tbl_projects VALUES (3, 'Back To The Future', 'thinkmcfly', 'icon_bttf.svg', 'comp_bttf.png', 'Okay, so, it''s almost 25-ish years since the release of the first Back to the Future movie, right? Let''s pretend they''re rereleasing the movie in theatres, and I''ve been hired with sacks and sacks of money to rebrand the film for a modern audience. Want to see how I did?', 'http://www.ryanmchale.ca/portfolio/thinkmcfly', 'I wanted to try and design a site similar to what you see for most major action blockbusters these days. I wanted grungy worn in textures, as though you''re looking up close at the side of the Dolorean after it''s had a rough few years. I wanted to pull in the reds and yellows and blues from the traditional branding but in a more muted and subtle way. And I really wanted to make the Dolorean the center piece, presenting it as the badass piece of pop culture history it is.', 'This project was great fun to do, and some of the challenges I was quite happy with myself for tackling included the countdown to the film''s hypothetical release date (currently in the past, so it''s slightly broken now) as well as coding my video player controls to allow for scrubbing of both the volume slider and the duration bar.');
INSERT INTO tbl_projects VALUES (4, 'M-Core Electrical', 'mcore', 'icon_mcore.svg', 'comp_mcore.png', 'When most people think of Bootcamp, they think of the army, or of spoiled teenagers being yelled at by a drill instructor. In IDP, Bootcamp is a frenzied zero-notice 3 day group assignment for a real world client. Who needed sleep anyway?', 'http://www.ryanmchale.ca/portfolio/mcore', 'This was a great group project to have been a part of. Working with Jamie Melnyk-Perrin, Chris Robins, Pat Monette, and Robert Paton is something I would jump at again in a heart beat. The design here was largely influenced by the existing logo we were provided. Many of our colour choices came out of it and we endeavored to compliment the relative simplicity of the logo with a slightly more complex and dynamic site, showcasing a lot of motion and visual agility.', 'A lot of the technical work on this site involved utilizing Greensock to slide the viewer around the page and detect where they are currently in order to highlight the appropriate menu item, as well as using Javascript methods to detect client height and width so that things would remain centered vertically and horizontally upon browser resize.');
INSERT INTO tbl_projects VALUES (5, 'RezGuide', 'rezguide', 'icon_rezguide.svg', 'comp_rezguide.png', 'I had the extreme good fortune this year of being hired on as part of Natalia Aguill&oacute;n''s fantastic RezGuide project via the Reactr program. It''s still a work in progress but it''s been an amazing learning experience so far.', '', 'I really can''t speak enough about how much I love the design. The initial work done the previous year by Walter Gramajo was finessed this year and integrated into the broader Fanshawe brand strategy by Sam Garcia. Though my only experience on the project has largely been the back end, I really cannot speak highly enough of the great work done by my partners on this project.', 'Working with the extremely talented David Krent on the back end of this project has been fantastically instructive. I was able to learn quite a lot about Codeigniter and how database interaction functions on a higher complexity project. My contributions currently are working on a notification system for the app as well as implementing the CMS functionality.');
