cgrRNA Fusions Module
================

-   [File naming conventions](#file-naming-conventions)
-   [EricScript](#ericscript)
-   [STAR-Fusion with alignment](#star-fusion-with-alignment)
-   [STAR-Fusion by itself](#star-fusion-by-itself)
-   [fastq\_decompress\_and\_merge](#fastq_decompress_and_merge)

File naming conventions
-----------------------

All fusion output files follow the same naming schema which is the concatenation of the Sample ID, Fusion tool name, and then file extension.

e.g. SA01234\_chimerascan\_output.bedpe, SA01234\_ericscript\_output.txt

All files will be tab delimited.

EricScript
----------

![workflow\_graph.png](workflows/ericscript/workflow_graph.png)

STAR-Fusion with alignment
--------------------------

![](workflows/star_fusion/star_fusion_with_alignment.png)

STAR-Fusion by itself
---------------------

![](workflows/star_fusion/star_fusion_post_alignment.png)

fastq\_decompress\_and\_merge
-----------------------------

![](workflows/fastq_decompress_and_merge/fastq_decompress_and_merge.png)
