Chimerascan Tool
================

-   [Description](#description)
    -   [base command](#base-command)
    -   [Container](#container)
-   [Ports](#ports)
    -   [Inputs](#inputs)
    -   [Arguments](#arguments)
    -   [Outputs](#outputs)
-   [Tool Definition](#tool-definition)
-   [cwl file](#cwl-file)
-   [Push app to cloud platform](#push-app-to-cloud-platform)

Description
===========

### base command

``` sh

tar -xvzf index.tar.gz && \
python /opt/chimerascan/chimerascan/chimerascan_run.py \
--bowtie-path /opt/bowtie-1.1.2  ./  \
reads1.fastq reads2.fastq  chimeras_out \
--processors 6

python /opt/chimerascan/chimerascan/chimerascan_run.py --quals illumina --library-type fr-firststrand ./ --filter-false-pos /sbgenomics/Projects/11eb1a82-1bf7-4df7-b8d3-dd53e1567bd5/_1_hg19_bodymap_false_positive_chimeras.txt --bowtie-path /opt/bowtie-1.1.2 /sbgenomics/Projects/11eb1a82-1bf7-4df7-b8d3-dd53e1567bd5/SC080539_AACAACCA_L00R1_001.fastq /sbgenomics/Projects/11eb1a82-1bf7-4df7-b8d3-dd53e1567bd5/SC080539_AACAACCA_L00R2_001.fastq chimeras_out --processors 8
```

Container
---------

The docker conatiner is

`cgrlab/chimerascan:latest`

<https://hub.docker.com/r/cgrlab/chimerascan/>

Ports
=====

Inputs
------

``` r
inputs = list(
  
input(id = "reads", label = "reads", description = "paired end reads", type = "File..."),
  
input(id = "index", label = "index", description = "chimerascan index", type = "File...", stageInput = "link")

)
```

Arguments
---------

``` r
arguments = CCBList(
CommandLineBinding(position = 1, valueFrom = list('"./"')),
CommandLineBinding(position = 101, valueFrom = list('"&& ls -lR"'))
)
```

Outputs
-------

``` r
outputs = list(

output(id = "std_out", label = "std_out", 
description = "standard output", type = "File",
metadata = list(from_tool = "chimerascan_run"),
glob = '"std.out"')
  
)
```

Tool Definition
===============

``` r
tool <- Tool(
id = "chimerascan_run", 
label = "Chimerascan Run",
hints = requirements(docker(pull = "cgrlab/chimerascan:latest"), cpu(1), mem(1000)),

baseCommand = "python /opt/chimerascan/chimaeracan/chimera_scan_run.py",

stdout = "std.out",

inputs = inputs,
  
arguments = arguments,
  
outputs = outputs)
```

cwl file
========

``` r
write(tool$toJSON(pretty = TRUE), "cwl.json")
```

Push app to cloud platform
==========================

``` r
project$app_add("chimerascan_run", tool)
```
