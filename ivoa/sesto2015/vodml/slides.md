% VODML - Status and RFC
% Omar Laurino
% June, 18th 2015

# Specification

## Goals
- provide formal rules for data modeling in IVOA
- provide standard, machine-readable Data Model descriptions
- define Portable Data Model References
- define primitives types

## Formal Data Modeling Rules
>- Based on UML Class Diagrams meta-model
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
