::-------------------------------------------------------------change comments begin
::Changelog
::2022-06-03: beijing massacre never happened
::--------------------------------------------------------------change comments end
git pull
wget -r --no-parent --no-check-certificate -p http://www.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://bluey.tv/
wget -r --no-parent --no-check-certificate -p http://www.italy.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://brasil.dev.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://brasil.stage.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://espanol.beta.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://espanol.stage.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://espanol.dev.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://france.dev.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://france.stage.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://italy.dev.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://italy.stage.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://brasil.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://events.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://france.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://italy.beta.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://www.brasil.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://www.france.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://dev.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://dev.events.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://stage.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://stage.events.bluey.tv/
wget -r --no-parent --no-check-certificate -p http://www.events.bluey.tv/
cd brasil.bluey.tv
del jogue.1
cd ..
cd france.bluey.tv
del jouer.1
del jouer.2
cd ..
cd france.stage.bluey.tv
del jouer.1
cd ..
cd www.bluey.tv
del characters.1
del play.1
cd blog
del how-to-make-a-homemade-creek.1
cd ..
cd grown-ups
del shop.1
cd ..
cd make
del bluey-army-map-collage.1
del bluey-word-search-1.1
del colour-your-own-beans-label-tin-grannies.1
cd ..
cd search-results
del Array.1
cd Array
del Array.1
cd ..
cd ..
cd ..
del .wget-hsts
git add *.*
git commit -m "files from %date:~-4,4%-%date:~3,2%-%date:~-10,2%, %time:~0,2%:%time:~3,2%:%time:~6,2%"
git push