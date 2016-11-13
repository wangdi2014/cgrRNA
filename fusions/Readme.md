cgrRNA Fusions Module
================

-   [Data harmonization](#data-harmonization)
    -   [File naming conventions](#file-naming-conventions)
-   [Fusion Finders](#fusion-finders)
    -   [1. Chimerascan](#chimerascan)
    -   [2. EricScript](#ericscript)
    -   [3. Mapsplice](#mapsplice)
    -   [4. Fusion Catcher](#fusion-catcher)
    -   [5. STAR Fusion](#star-fusion)
-   [Summary and Utility Apps](#summary-and-utility-apps)
    -   [Multi-Fusion Tool Output Collector](#multi-fusion-tool-output-collector)
    -   [Fusion Archive Creator](#fusion-archive-creator)
    -   [Fastq Decompress and Merge](#fastq-decompress-and-merge)
    -   [Combine EricScript Fusion Lists](#combine-ericscript-fusion-lists)

Data harmonization
==================

File naming conventions
-----------------------

All fusion output files follow the same naming schema which is the concatenation of the Sample ID, Fusion tool name, and then file extension.

e.g. SA01234\_chimerascan\_output.bedpe, SA01234\_ericscript\_output.txt

All files will be tab delimited.

Fusion Finders
==============

1. Chimerascan
--------------

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/ericscript-wf/1.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/ericscript-wf/1.png"/> </a>

2. EricScript
-------------

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/ericscript-wf/1.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/ericscript-wf/1.png"/> </a>

3. Mapsplice
------------

4. Fusion Catcher
-----------------

5. STAR Fusion
--------------

### Workflow Graphs

#### STAR-Fusion with alignment

![](workflows/star_fusion/star_fusion_with_alignment.png)

Example of a workflow withing a wofklow.

#### STAR-Fusion Only

![](workflows/star_fusion/star_fusion_post_alignment.png)

### CTAT Database

Download the CTAT database from

<https://data.broadinstitute.org/Trinity/CTAT_RESOURCE_LIB/>

The GRch37 version can also be found in the cgrRNA SBG project (restricted access)

GRCh37\_gencode\_v19\_CTAT\_lib\_July272016.tar.gz

<https://igor.sbgenomics.com/u/dave/cgrrna/files/5827c8c1e4b0a15a0466c1ba/>

GRCh37\_gencode\_v19\_CTAT\_lib.tar.gz

<https://igor.sbgenomics.com/u/dave/cgrrna/files/5827db26e4b0a15a0466c1c6/>

Summary and Utility Apps
========================

Multi-Fusion Tool Output Collector
----------------------------------

Written with Pandas and other python libraries.

Fusion Archive Creator
----------------------

Fastq Decompress and Merge
--------------------------

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/ericscript-wf/1.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/ericscript-wf/1.png"/> </a>

Combine EricScript Fusion Lists
-------------------------------

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/combine-eric-script-filtered-fusions/1.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/combine-eric-script-filtered-fusions/1.png"/> </a>
