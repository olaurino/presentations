# Sherpa

## {.left}

![Chandra X-Ray Observatory, July 1999](../images/chandra.png)

## Sherpa Features {.left}

<div class="container">
<div class="left">
![Fitting a Spectrum](../images/fit.gif)
</div>

<div class="right">
Fit **N-D** data sets in the Poisson/Gaussian regime, on **Linux** and
**OS X**
</div>
</div>

## Sherpa Features {.left}

<div class="container">
<div class="left">
![A Python Function User Model](../images/user_model.png)
</div>

<div class="right">
Build complex **model expressions**, including instrument response
and your own **Python functions**
</div>
</div>

## Sherpa Features {.left}

<div class="container">
<div class="left">
![2D Projection of the Parameter Space](../images/proj.png)
</div>

<div class="right">
Calculate **confidence levels** and **visualize parameter space**
</div>
</div>

## Sherpa Features {.left}

<div class="container">
<div class="left">
![Comparison of Optimization Methods](../images/optimizations.png)
</div>

<div class="right">
Choose a **robust optimization method** for the fit:

| Levenberg-Marquardt
| Nelder-Mead Simplex
| Differential Evolution

</div>
</div>

## Sherpa Features {.left}

<div class="container">
<div class="left">
![MCMC vs 2D Projection](../images/mcmc.png)
</div>

<div class="right">
Perform **Bayesian analysis** using the **Markov Chain Monte Carlo**
</div>
</div>

## Sherpa Features {.left}

<div class="container">
<div class="left">
![Awesome Custom Analysis](../images/triangle.png)
</div>

<div class="right">
Use **Python** to create complex analysis tasks and **extend** the built-in
functionality.
</div>
</div>

## Sherpa: from CIAO to Standalone

![**C**handra **I**nteractive **A**nalysis of **O**bservations](../images/CiaoVersions.svg){ .smaller }

# How the Landscape has changed

## Software Development

![](../images/development-paradigms.svg)

## Software Development

![](../images/trunk-fork.svg)

## New Tools {.left}

<div class="container">
<div class="left">
![**Distributed Version Control**\
git, GitHub, GitLab,\
Mercurial, BitBucket](../images/DistributedVC.png)
</div>

<div class="right">
**Automated Quality Assurance**

Continuous Integration\
[Travis CI](https://travis-ci.org) & Co.

Coverage Analysis\
[Coveralls](https://coveralls.io/) & Co.

Static Code Analysis\
[Code Climate](https://codeclimate.com/) & Co.

</div>
</div>

## New Tools {.left}

![Tool-Assisted Lightweight **Code Reviews**](../images/CodeReview.png)

## New Tools
<div class="container">

<div class="left">
![**Packaging** and **Portability**](../images/anaconda.png){.contrast}
</div>

<div class="right">
![**Automation** and **Reproducibility**](../images/docker-vagrant.png){.contrast}
</div>

</div>
## Astronomical Software Development {.left}

. . .

![](../images/sc.png){#sc .contrast}

. . .

![](../images/astropy-logo.png){#astropy .contrast}

. . .

![](../images/ipynb.png){#ipynb .contrast}

. . .

![](../images/mybinder.org.PNG){#beaker}

# Modernizing Sherpa

## Challenges

**UI** vs **API** design and documentation

Some users prefer:

``` bash
load_data '3c273.pi'
fit
```
```
IOError: [Errno 2] No such file or directory: '3c273.pi'
```

## Challenges

Other Users (and all Developers) prefer:

``` python
from sherpa.astro.ui.utils import Session
s = Session()
s.load_data(input)
s.fit()
```

```
...
/soft/ciao-4.8/lib/python2.7/site-packages/sherpa/utils/__init__.pyc in is_binary_file(filename)
   1132     1024 bytes of the file.
   1133     """
-> 1134     fd = open(filename, 'r')
   1135     lines = fd.readlines(1024)
   1136     fd.close()

IOError: [Errno 2] No such file or directory: '3c273.pi'

```

## Challenges

<div id="filler"></div>

. . .

<div class="jigsaw" id="portability"><span>Portability</span></div>

. . .

<div class="jigsaw" id="performance"><span>Performance</span></div>

. . .

<div class="jigsaw" id="style"><span>Coding Style (**PEP8**)</span></div>

. . .

<div class="jigsaw" id="dependencies"><span>Open-ended Dependencies</span></div>

. . .

<div class="jigsaw" id="python"><span>Python 2 **and** 3</span></div>

. . .

<div class="jigsaw" id="ciao"><span>CIAO vs Standalone</span></div>

## Challenges

<div id="scale">
  <div class="scale" id="infrastructure">Infrastructure</div>
  <div class="scale" id="vs">**vs**</div>
  <div class="scale" id="science">Science</div>
</div>

## A New Ecosystem

![](../images/eco.svg){ .white .smaller }

## Projects using Sherpa {.left}

![](../images/projects.svg){ .white .smaller }

## Multiwavelength Analysis with Sherpa

![](../images/paper_title.png)

![](../images/paper_plots.png)

# The Future

## {.left}

<div class="pulsing">**$\Longrightarrow$ Your code and science here
$\Longleftarrow$**</div>

. . .

>* Migrate **documentation to sphinx**

>* Integrated **docker pipeline**

>* On demand **Sherpa** cloud notebooks: move Sherpa to the Data!

>* Sherpa as a **pathfinder** for Chandra software projects

>* Sherpa at AAS Grapevine


## Try it yourself

<img src='http://www.unitag.io/qreator/generate?crs=xnjFkEn%252FP85fCPDXJ%252FXXKg5g6yQi7H4qzUlRVUntU035Re8CX7iHj071HbqF%252BCfYW0fkByoDtlWAYEP%252FkF2dipjP8Ux69VtYkusoonlKTAkgSRnmfwEzhpz3ulb%252BfgcH8xxrpOTbfLtqZS7YE5Pf9g%253D%253D&crd=fhOysE0g3Bah%252BuqXA7NPQ2hQjEAiS2h4b8VE2JfNhdcqoK%252BqjCjqLostNlNtSQNURtEj7atgx1dPamhMnhLY4w%253D%253D' alt='QR Code'/>

[http://cxc.cfa.harvard.edu/contrib/sherpa/](http://cxc.cfa.harvard.edu/contrib/sherpa/)

[https://github.com/sherpa/sherpa](https://github.com/sherpa/sherpa)

[![Binder](http://mybinder.org/badge.svg)](http://mybinder.org:/repo/olaurino/sherpa-standalone-notebooks)
