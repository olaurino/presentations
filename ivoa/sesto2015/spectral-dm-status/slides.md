% Spectral DM 2.0 reference implementations
% Omar Laurino
% June 14, 2015

## SpecLib (Java)
>- Defines a generic meta-model for old-style UTYPEs-based models
- Models are implemented as Java Interfaces
- Tries to cope with "misleading" GROUPs
- Implements Spectral 2.0. Other implementations are planned
- [Available on GitHub](https://github.com/ChandraCXC/speclib)

## GAVO serializations
>- Flash/Heros observed spectra
- Theoretical spectra
- Use `spec2` prefix
- Different interpretation of `GROUP`s
    - Ambiguity in the spec?

## Interoperability Demo (SpecList)
>1. Load URL (GAVO) using SpecLib
2. List available metadata
3. Plot data
4. Use metadata information to annotate the plot
 
[Available on GitHub](https://github.com/ChandraCXC/speclist)
and [deployed on a free cloud hosting site](http://speclist-ivoa.rhcloud.com/)

. . .

Accuracy of reconstruction was evaluated by visually inspecting the serialization header and the Demo output.

. . .

Small implementation issues left to be resolved off-line.

## Interoperability Demo (SpecList)
<iframe height="550px" width="800px" src="http://speclist-ivoa.rhcloud.com/"></iframe>

## Issues
>- `UTYPE` Prefix: 'spec' or 'spec2' + `GROUP`s
- media-type
- AOB (e.g. Use Cases)

. . .

Our proposal:

- Release 2.0 as is.
- UTYPE prefix: do not change. Model version can be inferred anyway.
- media-type: include it in a 2.1 version along with any errata/clarifications (e.g. `GROUP`s).
- AOB: A 3.0 version will be required anyway for harmonization with Cube DM.

# Resources

## Spectral DM 2.0 PR
<iframe height="550px" width="800px" src="http://docs.google.com/gview?url=http://ivoa.net/documents/SpectralDM/20150528/PR-SpectralDM-2.0-20150528.pdf&embedded=true"></iframe>

## Spectral DM 2.0 RFC
<iframe height="550px" width="800px" src="http://wiki.ivoa.net/bin/view/IVOA/Spectral2RFC"></iframe>

