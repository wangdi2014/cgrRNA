VarDict RNA
================

Variant caller with ability to call indels and snv from RNA-seq reads.

### base command

``` sh

/opt/VarDictJava/build/install/VarDict/bin/VarDict \
-th [number of threads]

VarDict -th 4 \ 
-G hs37d5.fa \ 
-N {Samp}_spiked_UC3_RNA \ 
-b "StarAligned_RDSQ_Recal_Final.bam|Core_DNA_Normal_Merged.bam" \ 
-C -c 1 -S 2 -E 3 target_regions/10a.bed
```

### i/o

#### inputs

``` r
inputs = list(
  
input(id = "threads", label = "threads", description = "threads", type = "int", prefix = "-th"),
  
input(id = "print header", label = "print header", description = "print header", type = enum("print_header", c("Yes", "No"))),

input(id = "reference", label = "reference", description = "reference", type = "File", prefix = "-G", secondaryFiles = list(".fai")),
  
input(id = "bam", label = "bam", description = "BAM file(s)", type = "File...", secondaryFiles = list(".bai"), prefix = "-b"),
  
input(id = "region to target", label = "region", description = "A optional single region to target chr7:55270300-55270348:EGFR", type = "string", prefix = "-R"),
  
input(id = "downsample", label = "downsample", description = "downsample - blank is 0", type = "float", prefix = "-Z"),
  
input(id = "strand bias", label = "strand bias", description = "strand bias", type = "int", prefix = "-B"),
  
input(id = "filter reads hexical", label = "filter reads hexical", description = "use 0 to turn off, filter 2nd alignments and duplicates 0x500", type = "string", prefix = "-F"),

input(id = "allele_frequency", label = "allele_frequency", description = "allele frequency", type = "float", prefix = "-f"),
  
input(id = "local_realignment", label = "local realignment", description = "0 - no , 1 - yes", type = "int", prefix = "-k"),
  
input(id = "min_number_of_variance_reads", label = "min_number_of_variance_reads", description = "default is 2", type = "int", prefix = "-r"),
  
input(id = "lowest_freq_normal_sample", label = "lowest_freq_normal_sample", description = "The lowest frequency in normal sample allowed for a putative mutation - Default to 0.05", type = "float", prefix = "-V"),
  
input(id = "bed", label = "bed", description = "optional bed file to target", type = "File", separate=FALSE, position = 101)
  
)
```

#### arguments

``` r
arguments = CCBList(
CommandLineBinding(position = 0, prefix = "-N", valueFrom = list('$job.inputs.bam[0].metadata.sample_id')),
CommandLineBinding(position = 201, prefix = ">", valueFrom = list('{return $job.inputs.bam[0].metadata.sample_id + "_vardict_variants.txt"}'))
)
```

#### outputs

``` r
outputs = list(

output(id = "variants_text", label = "variants_text", 
description = "variants in text output", type = "File",
inheritMetadataFrom = "#bam", metadata = list(from_tool = "VarDict_RNA"),
glob = Expression(engine = "#cwl-js-engine",
script = '"*.txt"')),
  
output(id = "vcf", label = "vcf", 
description = "vcf", type = "File",
inheritMetadataFrom = "#bam", metadata = list(from_tool = "VarDict_RNA"),
glob = Expression(engine = "#cwl-js-engine",
script = '"*.vcf"'))
  
)
```

### portability

#### docker

`cgrlab/vardictjava:latest`

<https://hub.docker.com/r/cgrlab/vardictjava/>

#### tool definition

``` r
tool <- Tool(
id = "vardict_rna", 
label = "VarDict RNA",
hints = requirements(docker(pull = "cgrlab/vardictjava:latest"), cpu(1), mem(1000)),

baseCommand = "/opt/VarDictJava/build/install/VarDict/bin/VarDict -c 1 -S 2 -E 3",

inputs = inputs,
  
arguments = arguments,
  
outputs = outputs)
```

#### cwl file

``` r
write(tool$toJSON(pretty = TRUE), "vardict_rna.cwl.json")
```

#### push app to cloud platform

``` r
project$app_add("vardict_rna", tool)
```

#### notes

``` r
require(tidyverse)

bed = read_tsv("~/hg19_StandardChr_FullLength_3column_BED.bed", col_names=c("chr","start","stop"))%>% 
mutate(segments = round(as.numeric(stop)/5e6)) %>% 
mutate(segments = if_else(chr=="chrM", 1, segments)) %>% 
group_by(chr, start, stop) %>% 
do({

temp = .
temp = temp %>% 
mutate(seg_length = stop / segments)

temp_return = data_frame(
new_start = seq(temp$start[1], temp$stop[1], temp$seg_length[1]),
new_stop_pre = seq(temp$seg_length[1], temp$stop[1], temp$seg_length[1]),
seg_number = seq(1, length(new_start), 1)) %>% 
mutate(new_stop = new_stop_pre + 250) %>% 
mutate(new_stop = if_else(seg_number == length(new_start), new_stop_pre, new_stop))

return(temp_return)
}) %>% 
ungroup() %>% 
group_by(chr, new_start, new_stop) %>% 
do({
  
temp = .
temp_tsv = temp %>% 
ungroup() %>% 
mutate(new_start_char = as.character(round(new_start))) %>% 
mutate(new_stop_char = as.character(round(new_stop))) %>% 
select(chr, new_start_char, new_stop_char) %>%
write_tsv(., paste0("bed_files/", temp$chr[1], "_", temp$seg_number, ".bed"), col_names=FALSE)

project$upload(paste0("bed_files/", .$chr[1], "_", .$seg_number, ".bed"), metadata=list(
experimental_strategy = "VarDict"
), overwrite=TRUE)

return(.)
  
}) %>% 
mutate(stop_diff = new_stop - new_stop_pre)
```
