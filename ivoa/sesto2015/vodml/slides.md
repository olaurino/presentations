% VODML - Status and start of RFC process
% Omar Laurino
% June, 18th 2015

# Specification

## Goals
- provide formal rules for data modeling in IVOA
- provide standard, machine-readable Data Model descriptions
- define Portable Data Model References

. . .

- define primitives types (IVOA model)

## Some benefits
From the Data Model WG charter:

>[...] provide[s] a **framework
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
<primitiveType>
 <vodml-id>quantity/Unit</vodml-id>
 <name>Unit</name>
 <description>
 Must conform to definition of unit in VOUnit spec.
 </description>
 <extends>
 <utype>ivoa:string</utype>
 </extends>
</primitiveType>

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
```
<VODML>
  <ROLE>src:source.SkyCoordinate.longitude</ROLE>
</VODML>
```

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

## Meta-Model

## Updates
- Nothing changed since Banff.
- Normative part is basically unchanged since Heidelberg:
   - `utype` -> `vodml-ref`
- Informative sections improved before Banff.
- Implementation feedback is good.
- Working on more XMI translation scripts.

. . .

Document seems stable. Few minor TBD left

## To Be Defined
- Few minor TBDs left in the document:
    - detailed list of authors
    - check statement: *all VODML elements are from UML 2.4.1*
    - prefix: globally unique or defined in serialization?
    - SKOSConcept concrete notation
    - Constraint XML description (leave it for future version? PDL?)
    - HTML documentation MAY or SHOULD be created?
    - Suggestion on DM definitions.
    - Other notable absences?
    - Concrete reference to `IVOA` model. 
- One TODO:
    - reformat a figure 

# Discussion items

## Model Prefix
- Have them globally unique (e.g. `stc2`, `char`, `spec`)
- Define them dynamically (a la XML namespace)

Consensus seems to be that they are globally unique.

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
:w



