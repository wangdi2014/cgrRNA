
#cgrRNA

This project represents the current pre-release and actively developed comprehensive RNA-seq analysis pipeline used at the Cancer Genomics Research Laboratory. It is a work in progress. The goal is to document the tools and workflows that our analysts currently use, make them portable and share with the community.
  
  * Modules Included
  * Alignment and QC
  * Differential Expression
  * Fusions (with concordance to WGS data)
  * miRNA
  * RNA Variant Calling

Tools will be described in the common workflow language and have have associated docker images hosted in the cgrlab docker registry. CWL and Docker are not a requirement to run any of the workflows.
Portability will demonstrated by using several framework/executors depending on the environment. Potential options include Rabix, Toil, SevenBridges, SnakeMake...etc.
