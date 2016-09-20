NAME=slides
THEME=night

reveal:
	pandoc -t revealjs ${NAME}.md variables.yaml -s -i -V theme=${THEME} \
	    --template=template-revealjs.html --no-highlight -o ${NAME}.html

beamer:
	pandoc -t beamer ${NAME}.md --latex-engine=xelatex -i -V theme=${THEME} -o ${NAME}.pdf

slidy:
	pandoc -t slidy ${NAME}.md -s -i -o ${NAME}-slidy.html

sfive:
	pandoc -t s5 ${NAME}.md -s -i -o ${NAME}-s5.html

dz:
	pandoc -t dzslides ${NAME}.md -s -i -o ${NAME}-dz.html

project:
	- mkdir -p ${PROJECT}
	- cp slides.md.template style-override.css template-revealjs.html Makefile variables.yaml ${PROJECT}


