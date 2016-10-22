# Scope

Implement Mapping Document from a Data Provider Viewpoint

User Story **#1**

> As a **Data Provider**, given a set of standardized data models, I want to
**input a human readable description** of the instances to be served and get
a **VOTable/JSON/* template** I can use in my DAL service.

. . .

> Create the instance description **by hand**, **statically**, **without knowing
much about the mapping document**.

# Scope

User Story **#2**

> As a **Data Provider** I want to **dynamically create instances** of data
models with scripts that **interface with a database**, **configuration files**,
etc.

# A possible solution: Jovial

A **Domain Specific Language** implemented in **Groovy**.

. . .

Implements **Current** mapping proposal, **Alternative** mapping proposal and,
since yesterday's discussion, **JSON** and **YAML** mappings.

. . .

**IDE support** (code completion, errors) is possible but not straightforward.

. . .

Can be **embedded** in **Java** and **Groovy** applications.

# Example Model (DatasetDM)

![](../images/observation.png)

# Example Input

```
model(vodmlURL: "http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/ds/DatasetMetadata-1.0.vo-dml.xml")
model(vodmlURL: "http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/STC2/prototype/STCPrototype-2.0.vo-dml.xml")
model(vodmlURL: "http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/characterization/Characterization.vo-dml.xml")
model(vodmlURL: "http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/ivoa/IVOA.vo-dml.xml")

object(id: "ACME", type: "ds:party.Organization") {
    value(role: "name", value: "ACME edu")
    value(role: "address", value: "565 N Clinton Drive, Milwaukee, WI")
    value(role: "phone", value: "555-012-3456")
    value(role: "email", value: "helpdesk@acme.org")
    value(role: "logo", value: "http://acme.org/stunning.png")
}

table() {
  object(type: "ds:experiment.Observation") {
      column(role: "observationID", value: "OBSID")
      collection(role: "obsConfig") {
          object() {
              column(role: "bandpass", value: "BANDPASS")
              column(role: "datasource", value: "DATASOURCE")
              collection(role: "facility") {
                  object() {
                      reference(role: "party", value: "ACME")
                  }
              }
          }
      }
  }
}

```

# VOTable Output

```
<?xml version="1.0" encoding="UTF-8"?><VOTABLE xmlns="http://www.ivoa.net/xml/VOTable/v1.3_vodmlAlt" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <RESOURCE id="globals">
    <MODEL name="ds" url="http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/ds/DatasetMetadata-1.0.vo-dml.xml"/>
    <MODEL name="stc" url="http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/STC2/prototype/STCPrototype-2.0.vo-dml.xml"/>
    <MODEL name="Characterization Data Model ala VO-URP" url="http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/characterization/Characterization.vo-dml.xml"/>
    <MODEL name="ivoa" url="http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/ivoa/IVOA.vo-dml.xml"/>
  </RESOURCE>
  <RESOURCE id="standalone">
    <INSTANCE type="ds:party.Organization" id="ACME">
      <VALUE type="ivoa:string" role="ds:party.Party.name">ACME edu</VALUE>
      <VALUE type="ivoa:string" role="ds:party.Organization.address">565 N Clinton Drive, Milwaukee, WI</VALUE>
      <VALUE type="ivoa:string" role="ds:party.Organization.phone">555-012-3456</VALUE>
      <VALUE type="ivoa:string" role="ds:party.Organization.email">helpdesk@acme.org</VALUE>
      <VALUE type="ivoa:anyURI" role="ds:party.Organization.logo">http://acme.org/stunning.png</VALUE>
    </INSTANCE>
  </RESOURCE>
  <RESOURCE id="tables">
    <TEMPLATE type="ds:experiment.Observation" id="">
      <SLOT role="ds:experiment.Observation.obsConfig">
        <COLLECTION>
          <INSTANCE type="ds:experiment.ObsConfig" id="">
            <SLOT role="ds:experiment.ObsConfig.facility">
              <COLLECTION>
                <INSTANCE type="ds:experiment.Facility" id="">
                  <REFERENCE role="ds:party.Role.party">ACME</REFERENCE>
                </INSTANCE>
              </COLLECTION>
            </SLOT>
            <SLOT role="ds:experiment.ObsConfig.bandpass">
              <COLUMN pk="" fk="">BANDPASS</COLUMN>
            </SLOT>
            <SLOT role="ds:experiment.ObsConfig.datasource">
              <COLUMN pk="" fk="">DATASOURCE</COLUMN>
            </SLOT>
          </INSTANCE>
        </COLLECTION>
      </SLOT>
      <SLOT role="ds:experiment.Observation.observationID">
        <COLUMN pk="" fk="">OBSID</COLUMN>
      </SLOT>
    </TEMPLATE>
  </RESOURCE>
</VOTABLE>
```

# JSON Output

```
{
    "votable": {
        "models": {
            "ds": {
                "url": "http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/ds/DatasetMetadata-1.0.vo-dml.xml"
            },
            "stc": {
                "url": "http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/STC2/prototype/STCPrototype-2.0.vo-dml.xml"
            },
            "Characterization Data Model ala VO-URP": {
                "url": "http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/characterization/Characterization.vo-dml.xml"
            },
            "ivoa": {
                "url": "http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/ivoa/IVOA.vo-dml.xml"
            }
        },
        "standalone": {
            "ds:party.Organization": {
                "id": "ACME",
                "name": "ACME edu",
                "address": "565 N Clinton Drive, Milwaukee, WI",
                "phone": "555-012-3456",
                "email": "helpdesk@acme.org",
                "logo": "http://acme.org/stunning.png"
            }
        },
        "tables": {
            "ds:experiment.Observation": {
                "obsConfig": [
                    {
                        "facility": [
                            {
                                "references": {
                                    "party": "ACME"
                                }
                            }
                        ],
                        "columns": {
                            "bandpass": {
                                "ref": "BANDPASS"
                            },
                            "datasource": {
                                "ref": "DATASOURCE"
                            }
                        }
                    }
                ],
                "columns": {
                    "observationID": {
                        "ref": "OBSID"
                    }
                }
            }
        }
    }
}
```

# YAML Output

``` yaml
votable:
  models:
  - {name: ds, url: 'http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/ds/DatasetMetadata-1.0.vo-dml.xml'}
  - {name: stc, url: 'http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/STC2/prototype/STCPrototype-2.0.vo-dml.xml'}
  - {name: Characterization Data Model ala VO-URP, url: 'http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/characterization/Characterization.vo-dml.xml'}
  - {name: ivoa, url: 'http://volute.g-vo.org/svn/trunk/projects/dm/vo-dml/models/ivoa/IVOA.vo-dml.xml'}
  standalone:
  - &id001 {type: 'ds:party.Organization', id: ACME, name: ACME edu, address: '565
      N Clinton Drive, Milwaukee, WI', phone: 555-012-3456, email: helpdesk@acme.org,
    logo: 'http://acme.org/stunning.png'}
  tables:
  - type: ds:experiment.Observation
    obsConfig:
    - type: ds:experiment.ObsConfig
      facility:
      - type: ds:experiment.Facility
        party: *id001
      columns:
        bandpass: {ref: BANDPASS, pk: null, fk: null}
        datasource: {ref: DATASOURCE, pk: null, fk: null}
    columns:
      observationID: {ref: OBSID, pk: null, fk: null}
```

# Challenges
Current syntax (**`VODML`** Element in **`GROUP`**, **`FIELDref`**, **`PARAM`**) is:

|    **complicated**
|    **distracting**
|    hardly understandable for **multi-table scenarios**

. . .

How to **compare** different implementations?

# Lessons learned

Single Flat Table:

|    rather **simple** to implement
|    **reasonable** mapping with all syntaxes

# Lessons learned

Advanced *Multi-Table* mappings (e.g. **Provenance**)

|    Most **Complex** Part of the Mapping
|    Current Syntax **Explodes**

. . .

How Relevant is it?

|    **ProvenanceDM** Relational Tables
|    SourceDM, Cross Matches, **Open-Ended luminosities**
|    Any use case where **one standalone table doesn't cut it**.

# Lessons learned

VO-DML/Mapping value should be evident

|    Data Model, Instances, and Serialization(s) are **totally independent**
|    Instances can be serialized in **different formats/syntaxes**

. . .

*Alternative* syntax is appealing as it isolates semantics from data.
Evidently **more expressive** and compact in advanced **multi-table** cases.

. . .

*Alternative* mapping also allows **instances** to be *copied and pasted*, i.e.
they **don't contain information about their role**.

# Jovial

Modeling

|    Model by **GUI**
|    Model by **DSL**
|    Model by **Java/Groovy** programs.

# Jovial

Instantiations/Mappings

Domain Specific Language abstracts user from specification details

|    Specific drivers for different output formats.
|    Faithful semantic representation.

[](https://github.com/olaurino/jovial)

# Jovial

Potential usages

|    Data Model abstraction in DAL services
|    Cross-Format Point-and-Click GUIs
|    Try out different serialization formats

# Lessons learned

Working as a **team** actually works!

My appreciation to **Laurent**, **Tom**, **Gerard**.
