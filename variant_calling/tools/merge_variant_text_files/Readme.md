VarDict Merge Variant Text files
================

### base command

``` sh

cat sample_A_1_variants.txt sample_A_2_variants.txt > sample_A_merged_variants.txt
```

### i/o

#### inputs

``` r
inputs = list(
  
input(id = "variant_text_files", label = "variant_text_files", description = "variant_text_files", type = "File...", separate = FALSE, position=1)

)
```

#### arguments

``` r
arguments = CCBList(
CommandLineBinding(position = 201, prefix = ">", valueFrom = list('{return $job.inputs.variant_text_files[0].metadata.sample_id + "_vardict_variants_merged.txt"}'))
)
```

#### outputs

``` r
outputs = list(

output(id = "merged_variants", label = "merged_variants", 
description = "merged_variants", type = "File",
inheritMetadataFrom = "#variant_text_files", metadata = list(from_tool = "merge_variant_text_files"),
glob = Expression(engine = "#cwl-js-engine", 
script = '"*.txt"'))
)
```

### portability

#### docker

`cgrlab/vardictjava:latest`

<https://hub.docker.com/r/cgrlab/vardictjava/>

#### tool definition

``` r
tool <- Tool(
id = "merge-variant-text-files", 
label = "merge variant text files",
hints = requirements(docker(pull = "cgrlab/vardictjava:latest"), cpu(1), mem(1000)),

baseCommand = "cat",

inputs = inputs,
  
arguments = arguments,
  
outputs = outputs)
```

#### cwl file

``` r
write(tool$toJSON(pretty = TRUE), "../apps/merge_variant_text_files.json")
```

#### push app to cloud platform

``` r
project$app_add("merge_variant_text_files", tool)
```
