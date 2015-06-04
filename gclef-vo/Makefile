NAME=slides
#THEME=warsaw

reveal:
	pandoc -t revealjs ${NAME}.txt -s -i -V theme=${THEME} \
	   --include-in-header=style-override.css -o ${NAME}.html

beamer:
	pandoc -t beamer ${NAME}.txt -i -V theme=${THEME} -o ${NAME}.pdf

slidy:
	pandoc -t slidy ${NAME}.txt -s -i -o ${NAME}-slidy.html

sfive:
	pandoc -t s5 ${NAME}.txt -s -i -o ${NAME}-s5.html

dz:
	pandoc -t dzslides ${NAME}.txt -s -i -o ${NAME}-dz.html

