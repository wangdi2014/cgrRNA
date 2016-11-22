
for (i = 0; i < $job.inputs.table.length; i++) {
if(i === 0) {
table_path = '"' + $job.inputs.table[i].path
filename = '"' + $job.inputs.table[i].path.split("/").reverse()[0]
case_id = '"' + $job.inputs.table[i].metadata.case_id
sample_id = '"' + $job.inputs.table[i].metadata.sample_id
sample_type = '"' + $job.inputs.table[i].metadata.sample_type
}
else {
table_path = table_path + '", "' + $job.inputs.table[i].path
filename = filename + '", "' + $job.inputs.table[i].path.split("/").reverse()[0]
case_id = case_id + '", "' + $job.inputs.table[i].metadata.case_id;
sample_id = sample_id + '", "' + $job.inputs.table[i].metadata.sample_id;
sample_type = sample_type + '", "' + $job.inputs.table[i].metadata.sample_type;
}}

'# get args \n\
args_table = data_frame(path = c('+table_path+'"), \
filename = c('+filename+'"), \
case_id = c('+case_id+'"), \
sample_id = c('+sample_id+'"), \
sample_type = c('+sample_type+'"))';
