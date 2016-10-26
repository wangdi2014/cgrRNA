{
  "sbg:id": "vardict_rna",
  "id": "#vardict_rna",
  "inputs": [
    {
      "type": ["null", "int"],
      "label": "threads",
      "description": "threads",
      "streamable": false,
      "default": "",
      "id": "#threads",
      "inputBinding": {
        "position": 0,
        "prefix": "-th",
        "separate": true,
        "sbg:cmdInclude": true
      },
      "required": false
    },
    {
      "type": [
        "null",
        {
          "name": "print_header",
          "symbols": ["Yes", "No"],
          "type": "enum"
        }
      ],
      "label": "print header",
      "description": "print header",
      "streamable": false,
      "default": "",
      "id": "#print_header",
      "required": false
    },
    {
      "type": ["null", "File"],
      "label": "reference",
      "description": "reference",
      "streamable": false,
      "default": "",
      "id": "#reference",
      "inputBinding": {
        "secondaryFiles": [
          ".fai"
        ],
        "position": 0,
        "prefix": "-G",
        "separate": true,
        "sbg:cmdInclude": true
      },
      "required": false
    },
    {
      "type": [
        "null",
        {
          "items": "File",
          "type": "array"
        }
      ],
      "label": "bam",
      "description": "BAM file(s)",
      "streamable": false,
      "default": "",
      "id": "#bam",
      "inputBinding": {
        "secondaryFiles": [
          ".bai"
        ],
        "position": 0,
        "prefix": "-b",
        "separate": true,
        "sbg:cmdInclude": true
      },
      "required": false
    },
    {
      "type": ["null", "string"],
      "label": "region",
      "description": "A optional single region to target chr7:55270300-55270348:EGFR",
      "streamable": false,
      "default": "",
      "id": "#region_to_target",
      "inputBinding": {
        "position": 0,
        "prefix": "-R",
        "separate": true,
        "sbg:cmdInclude": true
      },
      "required": false
    },
    {
      "type": ["null", "float"],
      "label": "downsample",
      "description": "downsample - blank is 0",
      "streamable": false,
      "default": "",
      "id": "#downsample",
      "inputBinding": {
        "position": 0,
        "prefix": "-Z",
        "separate": true,
        "sbg:cmdInclude": true
      },
      "required": false
    },
    {
      "type": ["null", "int"],
      "label": "strand bias",
      "description": "strand bias",
      "streamable": false,
      "default": "",
      "id": "#strand_bias",
      "inputBinding": {
        "position": 0,
        "prefix": "-B",
        "separate": true,
        "sbg:cmdInclude": true
      },
      "required": false
    },
    {
      "type": ["null", "string"],
      "label": "filter reads hexical",
      "description": "use 0 to turn off, filter 2nd alignments and duplicates 0x500",
      "streamable": false,
      "default": "",
      "id": "#filter_reads_hexical",
      "inputBinding": {
        "position": 0,
        "prefix": "-F",
        "separate": true,
        "sbg:cmdInclude": true
      },
      "required": false
    },
    {
      "type": ["null", "float"],
      "label": "allele_frequency",
      "description": "allele frequency",
      "streamable": false,
      "default": "",
      "id": "#allele_frequency",
      "inputBinding": {
        "position": 0,
        "prefix": "-f",
        "separate": true,
        "sbg:cmdInclude": true
      },
      "required": false
    },
    {
      "type": ["null", "int"],
      "label": "local realignment",
      "description": "0 - no , 1 - yes",
      "streamable": false,
      "default": "",
      "id": "#local_realignment",
      "inputBinding": {
        "position": 0,
        "prefix": "-k",
        "separate": true,
        "sbg:cmdInclude": true
      },
      "required": false
    },
    {
      "type": ["null", "int"],
      "label": "min_number_of_variance_reads",
      "description": "default is 2",
      "streamable": false,
      "default": "",
      "id": "#min_number_of_variance_reads",
      "inputBinding": {
        "position": 0,
        "prefix": "-r",
        "separate": true,
        "sbg:cmdInclude": true
      },
      "required": false
    },
    {
      "type": ["null", "float"],
      "label": "lowest_freq_normal_sample",
      "description": "The lowest frequency in normal sample allowed for a putative mutation - Default to 0.05",
      "streamable": false,
      "default": "",
      "id": "#lowest_freq_normal_sample",
      "inputBinding": {
        "position": 0,
        "prefix": "-V",
        "separate": true,
        "sbg:cmdInclude": true
      },
      "required": false
    },
    {
      "type": ["null", "File"],
      "label": "bed",
      "description": "optional bed file to target",
      "streamable": false,
      "default": "",
      "id": "#bed",
      "inputBinding": {
        "position": 101,
        "separate": false,
        "sbg:cmdInclude": true
      },
      "required": false
    }
  ],
  "outputs": [
    {
      "type": ["null", "File"],
      "label": "variants_text",
      "description": "variants in text output",
      "streamable": false,
      "default": "",
      "id": "#variants_text",
      "outputBinding": {
        "glob": {
          "engine": "#cwl-js-engine",
          "script": "\"*.txt\"",
          "class": "Expression"
        },
        "sbg:inheritMetadataFrom": "#bam",
        "sbg:metadata": {
          "from_tool": "VarDict_RNA"
        }
      }
    },
    {
      "type": ["null", "File"],
      "label": "vcf",
      "description": "vcf",
      "streamable": false,
      "default": "",
      "id": "#vcf",
      "outputBinding": {
        "glob": {
          "engine": "#cwl-js-engine",
          "script": "\"*.vcf\"",
          "class": "Expression"
        },
        "sbg:inheritMetadataFrom": "#bam",
        "sbg:metadata": {
          "from_tool": "VarDict_RNA"
        }
      }
    }
  ],
  "requirements": [],
  "hints": [
    {
      "class": "DockerRequirement",
      "dockerPull": "cgrlab/vardictjava:latest"
    },
    {
      "class": "sbg:CPURequirement",
      "value": 1
    },
    {
      "class": "sbg:MemRequirement",
      "value": 1000
    }
  ],
  "label": "VarDict RNA",
  "class": "CommandLineTool",
  "baseCommand": [
    "/opt/VarDictJava/build/install/VarDict/bin/VarDict -c 1 -S 2 -E 3"
  ],
  "arguments": [
    {
      "position": 0,
      "prefix": "-N",
      "separate": true,
      "valueFrom": {
        "engine": "#cwl-js-engine",
        "script": "$job.inputs.bam[0].metadata.sample_id",
        "class": "Expression"
      }
    },
    {
      "position": 201,
      "prefix": ">",
      "separate": true,
      "valueFrom": {
        "engine": "#cwl-js-engine",
        "script": "{return $job.inputs.bam[0].metadata.sample_id + \"_vardict_variants.txt\"}",
        "class": "Expression"
      }
    }
  ]
}
