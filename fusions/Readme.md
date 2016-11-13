cgrRNA Fusions Module
================

-   [File naming conventions](#file-naming-conventions)
-   [EricScript](#ericscript)
-   [STAR Fusion](#star-fusion)
    -   [Workflow Graphs](#workflow-graphs)
        -   [STAR-Fusion with alignment](#star-fusion-with-alignment)
        -   [STAR-Fusion Only](#star-fusion-only)
    -   [CTAT Database](#ctat-database)
-   [fastq\_decompress\_and\_merge](#fastq_decompress_and_merge)

File naming conventions
-----------------------

All fusion output files follow the same naming schema which is the concatenation of the Sample ID, Fusion tool name, and then file extension.

e.g. SA01234\_chimerascan\_output.bedpe, SA01234\_ericscript\_output.txt

All files will be tab delimited.

EricScript
----------

![workflow\_graph.png](workflows/ericscript/workflow_graph.png)

STAR Fusion
===========

Workflow Graphs
---------------

### STAR-Fusion with alignment

![](workflows/star_fusion/star_fusion_with_alignment.png)

Example of a workflow withing a wofklow.

### STAR-Fusion Only

![](workflows/star_fusion/star_fusion_post_alignment.png)

CTAT Database
-------------

Download the CTAT database from

<https://data.broadinstitute.org/Trinity/CTAT_RESOURCE_LIB/>

The GRch37 version can also be found in the cgrRNA SBG project (restricted access)

GRCh37\_gencode\_v19\_CTAT\_lib\_July272016.tar.gz

<https://igor.sbgenomics.com/u/dave/cgrrna/files/5827c8c1e4b0a15a0466c1ba/>

GRCh37\_gencode\_v19\_CTAT\_lib.tar.gz

<https://igor.sbgenomics.com/u/dave/cgrrna/files/5827db26e4b0a15a0466c1c6/>

fastq\_decompress\_and\_merge
=============================

![](workflows/fastq_decompress_and_merge/fastq_decompress_and_merge.png)
