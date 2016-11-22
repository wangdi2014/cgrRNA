'#!/bin/bash \n\
tar -xvf '+$job.inputs.ericscript_database_archive.path+' \n\
/opt/EricScript/ericscript.pl -db ./ericscript_db_homosapiens_ensembl73 \
-o ./es_output \
-p '+$job.inputs.threads+' \
'+$job.inputs.fastq_pair[0].path+' '+$job.inputs.fastq_pair[1].path+' \n\
# copy results to main dir and prepend sample_id \n\
cp es_output/MyEric.results.total.tsv ./'+$job.inputs.fastq_pair[0].metadata.sample_id+'_es_total.tsv \n\
cp es_output/MyEric.results.filtered.tsv ./'+$job.inputs.fastq_pair[0].metadata.sample_id+'_es_filtered.tsv \n\
cp es_output/MyEric.Summary.RData ./'+$job.inputs.fastq_pair[0].metadata.sample_id+'_summary.RData \
\
';
