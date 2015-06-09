NAME=slides
THEME=night

reveal:
	pandoc -t revealjs ${NAME}.md variables.yaml -s -i -V theme=${THEME} \
	    --template=template-revealjs.html -o ${NAME}.html

beamer:
	pandoc -t beamer ${NAME}.txt --latex-engine=xelatex -i -V theme=${THEME} -o ${NAME}.pdf

slidy:
	pandoc -t slidy ${NAME}.txt -s -i -o ${NAME}-slidy.html

sfive:
	pandoc -t s5 ${NAME}.txt -s -i -o ${NAME}-s5.html

dz:
	pandoc -t dzslides ${NAME}.txt -s -i -o ${NAME}-dz.html

project:
	- mkdir -p ${PROJECT}
	- cp * ${PROJECT}
	- cp -r ../reveal.js ${PROJECT}


