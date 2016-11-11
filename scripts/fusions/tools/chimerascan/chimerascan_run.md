Chimerascan Tool
================

Utility to create a maf from json that is compatible with hotspot3d

### base command

``` sh

tar -xvzf index.tar.gz && \
python /opt/chimerascan/chimerascan/chimerascan_run.py \
--bowtie-path /opt/bowtie-1.1.2  ./  \
reads1.fastq reads2.fastq  chimeras_out \
--processors 6

python /opt/chimerascan/chimerascan/chimerascan_run.py --quals illumina --library-type fr-firststrand ./ --filter-false-pos /sbgenomics/Projects/11eb1a82-1bf7-4df7-b8d3-dd53e1567bd5/_1_hg19_bodymap_false_positive_chimeras.txt --bowtie-path /opt/bowtie-1.1.2 /sbgenomics/Projects/11eb1a82-1bf7-4df7-b8d3-dd53e1567bd5/SC080539_AACAACCA_L00R1_001.fastq /sbgenomics/Projects/11eb1a82-1bf7-4df7-b8d3-dd53e1567bd5/SC080539_AACAACCA_L00R2_001.fastq chimeras_out --processors 8
```

### i/o

#### inputs

``` r
inputs = list(
  
input(id = "reads", label = "reads", description = "paired end reads", type = "File..."),
  
input(id = "index", label = "index", description = "chimerascan index", type = "File...", stageInput = "link")

)
```

#### arguments

``` r
arguments = CCBList(
CommandLineBinding(position = 1, valueFrom = list('"./"')),
CommandLineBinding(position = 101, valueFrom = list('"&& ls -lR"'))
)
```

#### outputs

``` r
outputs = list(

output(id = "std_out", label = "std_out", 
description = "standard output", type = "File",
metadata = list(from_tool = "chimerascan_run"),
glob = '"std.out"')
  
)
```

### portability

#### docker

The docker conatiner is

`cgrlab/chimerascan:latest`

<https://hub.docker.com/r/cgrlab/chimerascan/>

#### tool definition

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

#### cwl file

``` r
write(tool$toJSON(pretty = TRUE), "../apps/chimerascan_run.json")
```

#### push app to cloud platform

``` r
project$app_add("chimerascan_run", tool)
```
