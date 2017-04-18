cgrRNA Pipeline
================

-   [Introduction](#introduction)
-   [Alignment and QC](#alignment-and-qc)
    -   [STAR Alignment Workflows](#star-alignment-workflows)
-   [Fusions](#fusions)
    -   [Data harmonization](#data-harmonization)
        -   [File naming conventions](#file-naming-conventions)
    -   [Fusion Finders](#fusion-finders)
        -   [Chimerascan](#chimerascan)
        -   [EricScript](#ericscript)
        -   [Mapsplice](#mapsplice)
        -   [Fusion Catcher](#fusion-catcher)
        -   [STAR Fusion](#star-fusion)
    -   [Summary and Utility Apps](#summary-and-utility-apps)
        -   [Multi-Fusion Tool Output Collector](#multi-fusion-tool-output-collector)
        -   [Fusion Output Archiver](#fusion-output-archiver)
        -   [Fastq Decompress and Merge](#fastq-decompress-and-merge)
        -   [Combine EricScript Fusion Lists](#combine-ericscript-fusion-lists)
-   [RNA Variant Calling](#rna-variant-calling)
    -   [VarDict for RNA](#vardict-for-rna)
-   [miRNA](#mirna)
    -   [Alignment and QC for miRNA Analysis](#alignment-and-qc-for-mirna-analysis)

Introduction
============

This project represents the current pre-release and actively developed comprehensive RNA-seq analysis pipeline used at the Cancer Genomics Research Laboratory. It is a work in progress. The goal is to document the tools and workflows that our analysts currently use, make them portable and share with the community.

Modules (i.e. workflow collections) include *Alignment and QC*, *Differential Expression*, *Fusions (with concordance to WGS data)*, *miRNA*, and *RNA Variant Calling*.

Tools will be described in the common workflow language and have have associated docker images hosted in the cgrlab docker registry. CWL and Docker are not a requirement to run any of the workflows. Portability will demonstrated by using several framework/executors depending on the environment. Potential options include Rabix, Toil, SevenBridges, SnakeMake...etc.

Alignment and QC
================

STAR Alignment Workflows
------------------------

<https://igor.sbgenomics.com/u/dave/cgrrna/apps/#dave/cgrrna/star-rna-seq-alignment-with-dedup/>

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/star-rna-seq-alignment-with-dedup/1.png" target="_blank"><img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/star-rna-seq-alignment-with-dedup/1.png"/></a>

Fusions
=======

Data harmonization
------------------

### File naming conventions

All fusion output files follow the same naming schema which is the concatenation of the Sample ID, Fusion tool name, and then file extension.

e.g. SA01234\_chimerascan\_output.bedpe, SA01234\_ericscript\_output.txt

All files will be tab delimited.

Fusion Finders
--------------

### Chimerascan

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/fusion-transcript-detection-chimerascan-ID-CsR/1.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/fusion-transcript-detection-chimerascan-ID-CsR/1.png"/> </a>

### EricScript

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/ericscript-wf/1.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/ericscript-wf/1.png"/> </a>

### Mapsplice

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/mapsplice2-1/1.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/mapsplice2-1/1.png"/> </a>

Make sure the gtf file has a "gene\_biotype" field.

In house tests on merged fastqs took 3.5 days on HPC with 8 cores and 1 day on HPC with 20 cores. The same files took just under 2 days on AWS with 16 cores.

### Fusion Catcher

### STAR Fusion

#### Workflow Graphs

##### STAR-Fusion with alignment

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/star-fusion-with-alignment/13.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/star-fusion-with-alignment/13.png"/> </a>

Example of a workflow withing a wofklow.

##### STAR-Fusion Only

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/star-fusion/5.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/star-fusion/5.png"/> </a>

#### CTAT Database

Download the CTAT database from

<https://data.broadinstitute.org/Trinity/CTAT_RESOURCE_LIB/>

The GRch37 version can also be found in the cgrRNA SBG project (restricted access)

GRCh37\_gencode\_v19\_CTAT\_lib\_July272016.tar.gz

<https://igor.sbgenomics.com/u/dave/cgrrna/files/5827c8c1e4b0a15a0466c1ba/>

GRCh37\_gencode\_v19\_CTAT\_lib.tar.gz

<https://igor.sbgenomics.com/u/dave/cgrrna/files/5827db26e4b0a15a0466c1c6/>

Summary and Utility Apps
------------------------

### Multi-Fusion Tool Output Collector

Written with Pandas and other python libraries.

### Fusion Output Archiver

<https://igor.sbgenomics.com/u/dave/cgrrna/apps/#dave/cgrrna/fusion-output-archiver-wf>

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/fusion-output-archiver-wf/5.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/fusion-output-archiver-wf/5.png"/> </a>

### Fastq Decompress and Merge

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/fastq-decompress-and-merge/1.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/fastq-decompress-and-merge/1.png"/> </a>

### Combine EricScript Fusion Lists

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/combine-eric-script-filtered-fusions/1.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/combine-eric-script-filtered-fusions/1.png"/> </a>

RNA Variant Calling
===================

VarDict for RNA
---------------

Variant caller with ability to call indels and snv from RNA-seq reads.

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/vardict-rna/38.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/vardict-rna/38.png"/> </a>

miRNA
=====

Alignment and QC for miRNA Analysis
-----------------------------------

This workflow uses cutadapt to remove adapters and trim low quality bases. The trimmed fastq is sent to 1) FASTQC for sequence QC reports. 2) STAR for general alignment information. 3) miRDeep2 for mapping and miRNA identification and prediction.

To use, copy the miRNA Analysis WF app and all the files in this project to a new project.

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/mirna-analysis-wf-BATCH/0.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/mirna-analysis-wf-BATCH/0.png"/> </a>
