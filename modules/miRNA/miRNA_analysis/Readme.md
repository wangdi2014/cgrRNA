cgrRNA miRNA wf
================

This workflow uses cutadapt to remove adapters and trim low quality bases. The trimmed fastq is sent to 1) FASTQC for sequence QC reports. 2) STAR for general alignment information. 3) miRDeep2 for mapping and miRNA identification and prediction.

To use, copy the miRNA Analysis WF app and all the files in this project to a new project.

<a href="https://brood.sbgenomics.com/static/dave/cgrrna/mirna-analysis-wf-BATCH/0.png" target="_blank"> <img width="1200" border="0" align="center"src="https://brood.sbgenomics.com/static/dave/cgrrna/mirna-analysis-wf-BATCH/0.png"/> </a>
