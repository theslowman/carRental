SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE `users` (
  `id`              INT(10) UNSIGNED                     NOT NULL,
  `username`        VARCHAR(50) COLLATE utf8_unicode_ci  NOT NULL,
  `password_digest` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
  `email`           VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
  `timezone`        VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
  `carId`           VARCHAR(100) COLLATE utf8_unicode_ci
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_unicode_ci;

CREATE TABLE `cars` (
  `id`          INT(10) UNSIGNED                       NOT NULL,
  `brand`       VARCHAR(50) COLLATE utf8_unicode_ci    NOT NULL,
  `model`       VARCHAR(50) COLLATE utf8_unicode_ci    NOT NULL,
  `description` VARCHAR(10000) COLLATE utf8_unicode_ci NOT NULL,
  `img`         VARCHAR(100) COLLATE utf8_unicode_ci   NOT NULL
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_unicode_ci;

CREATE TABLE `rental` (
  `carId`  INT(10) COLLATE utf8_unicode_ci     NOT NULL,
  `after`  VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
  `before` VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
  `user`   VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_unicode_ci;


ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
  MODIFY `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 15;


INSERT INTO cars (id, brand, model, description, img) VALUES (1, 'BMW', '3', 'The BMW 3 Series is a compact executive car manufactured by the German automaker BMW since May 1975. It is the successor to the 02 Series and has been produced in six different generations.
The first generation of the 3 Series was only available as a 2-door sedan, however the model range has since expanded to include a 4-door sedan, 2-door convertible, 2-door coupe, 5-door station wagon, 5-door hatchback (Gran Turismo) and 3-door hatchback body styles. Since 2013, the coupe and convertible models have been marketed as the 4 Series, therefore the 3 Series range no longer includes these body styles.
The 3 Series is BMW''s best-selling model, accounting for around 30% of the BMW brand''s annual total sales (excluding motorbikes).1 The BMW 3 Series has won numerous awards throughout its history.
The M version of the 3 series, M3, debuted with the E30 M3 in 1986', 'bmw3.png');
INSERT INTO cars (id, brand, model, description, img) VALUES (2, 'BMW', '3 touring',
                                                              'For those who think the current 3-Series is as good as it gets, hold steady: heres one with more space, more practicality yet, it seems, no less of the magic that makes the four-door such a stormer. It also answers a rare gripe that some have about the saloon  that its rear end looks too similar to before. Not so with the Touring, whose revised tail dials back some of the old ones rakishness for a more upmarket and upstanding profile. Its now every inch the junior 5-Series.',
                                                              'bmw3-kombi.png');
INSERT INTO cars (id, brand, model, description, img) VALUES (3, 'BMW', '5', 'The BMW 5 Series is an executive car manufactured by BMW since 1972. It is the successor to the New Class Sedans and is currently in its seventh generation.
Initially, the 5 Series was only available in a sedan body style. The wagon/estate body style (called "Touring") was added in 1991 and the 5-door fastback (called "Gran Turismo") was produced from 2009 to 2017.
The first generation of 5 Series was powered by naturally aspirated inline-4 and straight-6 petrol engines. Following generations have been powered by inline-4, straight-6, V8 and V10 engines with both natural aspiration and turbocharging. Since 1982, diesel engines have been included in the 5 Series range.
The 5 Series is BMW''s second best-selling model after the 3 Series.1 On January 29, 2008, the 5 millionth 5 Series was manufactured, a 530d Saloon in Carbon Black Metallic.2
BMW''s three-digit model naming convention began with the first 5 Series,3 thus the 5 Series was BMW''s first model line to use "Series" in the name.
Since the E28, all generations of 5 Series have included an M version, called the BMW M5.', 'bmw5.png');
INSERT INTO cars (id, brand, model, description, img) VALUES (4, 'BMW', '5 touring', 'Its BMWs biggest estate. As big as almost anyone elses. But as well see its also a 5 Series.
Estate bit first. The stretched roof leads to an integral spoiler. As with most BMW wagons, you can open the rear windscreen while leaving the main boot closed, which is handy for just chucking in or retrieving light items. The load bay is long and wide. For the estate, self-levelling air suspension is standard at the rear.
Its a 5 Series. The new one is very refined, great to drive and high-tech.
The engine range at launch is all from BMWs B-series modular family: four-cylinders in petrol and diesel, called 530i and 520d, and six-cylinders in petrol or diesel, the 540i and 530d.The 530d is optionally xDrive 4WD, while the 540i is always xDrive in the UK.',
                                                              'bmw5-kombi.png');
INSERT INTO cars (id, brand, model, description, img) VALUES (5, 'BMW', '7', 'A hugely important car for BMW, is this all-new 7-Series. BMW reckons its big-limo buyers run a mile from anything radical-looking (and it would know: remember the Bangle-era car?), which is why the big 7 looks, well, pretty much identical to the old one. Its beneath the bodywork where things get properly interesting…
The highlight is the bodyshell. BMW made use of techniques and production methods devised for the i3 and i8 to trim 40kg from the 7s chassis, which incorporates bits of carbon fibre (some as long as a normal-sized bloke is tall) for added stiffness, strength and lightness. All told, the new 7 is some 130kg lighter than the old car. A net 200 if you factor in all the added kit, which weighs 70kg by itself. ',
                                                              'bmw7.png');
INSERT INTO cars (id, brand, model, description, img) VALUES (6, 'Mercedes', 'S', 'Very basically, a two-door, four-seat version of the all-conquering Mercedes S-Class  formerly known as the CL  that competes with the Bentley Continental GT and Aston Martin DB11. A big, soft GT-car designed to do big distances without throwing out your lower back. An S-Class you drive, rather than get driven in. We like it very much indeed.
Our favourite luxury saloon was recently updated with new tech, engines and so-on, and now the Coupe that shares its underpinnings has been given most of the same upgrades. Besides a set of OLED taillights and a ‘Panamerica grille (as seen on other, newer AMGs) for the AMG S63 and V12-engined S65, there are no real aesthetic changes. None that youll notice, anyway, which ought to keep owners of the outgoing model (and incredibly similar-looking E-Class Coupe) reasonably happy. The same is true of the interior  the steering wheel and screens are new, but theyre nothing we havent seen in other Mercs, or radically different from what was there before. If youre familiar with the current E- or S-Class saloon, youll be right at home here.
Most of the changes are under the skin. So the ‘base S500 has been replaced by the S560, which gets a new 4.0-litre turbocharged V8 engine thats more powerful and, thanks to cylinder-deactivation, more economical than the 4.7-litre engine it succeeds. And of course theres the latest in semi-autonomous driver assistance tech, including the newest version of Mercs adaptive cruise control that can slow the S for roundabouts, tolls and upcoming junctions.',
                                                              'mercedes-coupe.png');
INSERT INTO cars (id, brand, model, description, img) VALUES (7, 'Mercedes', 'C', 'Once upon a time, the Mercedes C-Class Coupe was just a swoopier two-door version of the saloon and didn''t really have a character of its own. The latest model is something else, though. While it uses the same mechanical package as its sensible sister car, the coupe wears a far more adventurous suit of clothes and bears a close resemblance to the flagship Mercedes S-Class Coupe.
The C-Class Coupe is a direct rival for the Audi A5 and BMW 4 Series coupes, along with the Lexus RC. It offers a wide range of engine choices that stretches from a mild-hybrid 1.5-litre petrol that keeps a keen eye on economy (the C200), to a 2.0-litre petrol (the C300) and the 3.0-litre, twin-turbocharged six-cylinder in the Mercedes-AMG C43 4MATIC, which uses Mercedes'' four-wheel-drive system. No petrol C-Class Coupe is lacking performance, and the same is true of the C220d diesel, which boasts claimed fuel economy of 61.4mpg.',
                                                              'mercedesc.png');
INSERT INTO cars (id, brand, model, description, img) VALUES (8, 'Mercedes', 'C touring', 'The new Mercedes C-Class Estate is a practical family car thats comfortable and relaxing to drive. It comes with lots of high-tech features as standard, too, and you can also get it as a conventional saloon, a stylish coupe and a drop-top cabriolet if you dont need the estates big boot.
To help it stay competitive with the likes of the BMW 3 Series Touring and the Audi A4 Avant, the C-Class Estate was updated in 2018 with some redesigned bumpers and a pair of new engines.
It also now gets a slick-looking infotainment system as standard with a 10.25-inch screen that replaces the old cars 8.4-inch display. If this still doesnt sound big enough, you can also get a 12.3-inch screen instead of conventional analogue dials that help the C-Class Estate look almost as futuristic inside as the high-tech Audi A4 Avant.
It isnt just the Mercedes equipment that impresses: its cabin also comes with plenty of solid-feeling and posh-looking materials. You can choose from glossy black plastics, brushed aluminium and unpolished wood across the range, but (rather disappointingly) real-leather seats costs extra on all models.',
                                                              'mercedesc-kombi.png');
INSERT INTO cars (id, brand, model, description, img) VALUES (9, 'Mercedes', 'E', 'A potential headache for new Mercedes-Benz S-Class Coupe owners who are realising right about now that they just spent £50,000 more than they needed to. Less than a year after the saloon went on sale, the E-Class range has multiplied like a wet Gremlin with the Estate, AMG E63 (saloon and estate), jacked-up All-Terrain, Coupe and Convertible all either on sale, or arriving in the next few months. Here we have the Coupe  the hardest to justify, but the easiest to fall in love with.
The product of an almost 50-year history that stretches back to 1968 and the wonderfully named ‘Stroke Eight Coupe, its Mercedes doing what it does best  luxury, space, technology and style. Sure, theres a selfish element to choosing a coupe, but Merc has tried to ease that descision by making this new car 123mm longer and 74mm wider, with a 68mm wider track front and rear than its predecessor. That means 74mm more legroom in the back and better purchase on the road. Just make sure your parallel parking is up to scratch.',
                                                              'mercedese.png');
INSERT INTO cars (id, brand, model, description, img) VALUES (10, 'Mercedes', 'E touring',
                                                              'The new Mercedes E-Class Estate. A mighty fine, well-engineered thing based, predictably, on the new E-Class saloon  sharing its engines, interior, drivetrain and technologies. Its not the boxy old thing it once was, either. Merc has opted to sacrifice a few litres of luggage space for a CLS-style roofline, and the result are, we think, rather good-looking. The one we desperately want to recommend is the E350d, with its 254hp, 457lb ft and 51.4mpg (the V6 is carried over largely unchanged from the old E-Class, well see a new straight-six from the same modular family as the four in next years facelifted S-Class), but were struggling because the four-cylinder is just so good. Mercedess old 2.1-litre four-cylinder saw service in everything from the Sprinter to the S-Class, and it wasnt half rattly. This new 2.0-litre is certainly among the best four-cylinder diesels out there. Quiet, brisk (7.7 to 62mph, 146mph) and happy enough to rev, it doesnt fundamentally cheapen the E-Class experience either, which is a real achievement.',
                                                              'mercedese-kombi.png');
