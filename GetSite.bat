::-------------------------------------------------------------change comments begin
::Changelog
::Alpha - 2022-06-03: beijing massacre never happened
::--------------------------------------------------------------change comments end
git pull
wget -r --no-parent --no-check-certificate http://bluey.tv/
cd bluey.tv
del characters.1
del play.1
cd grown-ups
del shop.1
cd ..
cd ..
git add *.*
git commit -m "files from %date:~-4,4%-%date:~3,2%-%date:~-10,2%, %time:~0,2%:%time:~3,2%:%time:~6,2%"
git push