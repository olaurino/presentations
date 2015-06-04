NAME=slides

reveal:
	pandoc -t revealjs ${NAME}.txt -s -i -V theme=night -o ${NAME}.html

beamer:
	pandoc -t beamer ${NAME}.txt -i -o ${NAME}.pdf

slidy:
	pandoc -t slidy ${NAME}.txt -s -i -o ${NAME}-slidy.html

s5:
	pandoc -t s5 ${NAME}.txt -s -i -o ${NAME}-s5.html

