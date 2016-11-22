require(jsonlite); require(purrr); require(dplyr); require(tidyr); require(stringr); require(readr);

source("get_args.R")

merged_table = args_table %>% 
group_by(path, filename, case_id, sample_id, sample_type) %>% 
do({
temp = read_tsv(.$path)
return(temp)
}) %>% 
ungroup() %>%
select(-path)

write_csv(merged_table, "EricScript_filtered_fusions_merged.csv")

stream_out(merged_table, file("EricScript_filtered_fusions_merged.json"))
