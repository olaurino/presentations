% VODML - Status update 
% Omar Laurino
% June, 18 2015

# Specification

## Goals
>- provide formal rules for data modeling in IVOA
- provide standard, machine-readable Data Model descriptions
- define Portable Data Model References

. . .

>- define primitives types (IVOA model)

## Some benefits
From the Data Model WG charter:

>[The WG] provide[s] a **framework
for the description of metadata** attached to observed or simulated data.

. . .

>[...] focuses
on **logical relationships between these metadata**,
examines how an astronomer wants to retrieve, process and interpret astronomical data,
and **provides an architecture** to handle them.

. . .

>[...] What is defined in this WG can then be **re-used**
in the protocols defined **by the DAL WG or in VO aware applications**.

## Formal Data Modeling Rules
>- Based on UML Class Diagram meta-model
- Relational Model, server-friendly
- Object Model, client-friendly

## Data Model descriptions

```xml
<dataType>
 <vodml-id>source.SkyCoordinate</vodml-id>
 <name>SkyCoordinate</name>
 <description>...</description>
 <attribute>
   <vodml-id>source.SkyCoordinate.longitude</vodml-id>
   <name>longitude</name>
   <description>...</description>
   <datatype>
     <vodml-ref>ivoa:quantity.RealQuantity</vodml-ref>
   </datatype>
   <multiplicity>1</multiplicity>
 </attribute>
...
```

## Portable Data Model references
`src:source.SkyCoordinate.longitude`

*points to*

```
 <attribute>
   <vodml-id>source.SkyCoordinate.longitude</vodml-id>
   <name>longitude</name>
   <description>...</description>
   <datatype>
     <vodml-ref>ivoa:quantity.RealQuantity</vodml-ref>
   </datatype>
   <multiplicity>1</multiplicity>
 </attribute>
```

. . .

Can be used in VOTable (pending VOTable discussion)

```
<VODML>
  <ROLE>src:source.SkyCoordinate.longitude</ROLE>
</VODML>
```

## Meta-Model

## Updates
>- Normative part is basically unchanged since Heidelberg:
   - `utype` -> `vodml-ref`
- Informative sections improved before Banff.
- Nothing major changed since Banff.
    - Few minor *To Be Discussed* addressed.
- Implementation feedback is good: only one issue identified.
- Working on more XMI translation scripts.

. . .

Document seems stable. Should be ready for Proposed Recommendation
pending few TBDs.

## To Be Discussed
>- Few minor TBDs left in the document:
    - prefix: globally unique or defined in serialization?
    - SKOSConcept/RDF/Enumeration
	- subsets issues from implementation feedback
- One TODO:
    - reformat a figure 

# Discussion items

## Model Prefix
- Have them globally unique (e.g. `stc2`, `char`, `spec`)
- Define them dynamically (a la XML namespace)

Consensus seems to be that they are globally unique. Can we confirm this?

. . .

Should models (and prefixes) be registered?

## Enumerations vs Vocabularies

>- Enumerations:
    - integral part of the model
    - a change requires an update of the model
    - clients can rely on prior knowledge

. . .

>- Vocabularies:
    - can be extended without updating the model
    - clients cannot *completely* rely on prior knowledge
    - VODML supports SKOS concepts, which are more flexible
        - e.g. relationships among concepts

. . .

VODML supports both Enumerations and SKOS concepts. The alternative
is dropping enumerations in favor of *simple* vocabularies.




