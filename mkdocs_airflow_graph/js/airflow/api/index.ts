import camelcaseKeys from "camelcase-keys";

interface Props {
  dagIds?: string[];
  enabled?: boolean;
}

function useDatasets({ dagIds, enabled = true }: Props) {
  return camelcaseKeys({
      "data": {
        "datasets": [],
        "total_entries": 209
      }},
      { deep: true }
  )
}

function useGraphData() {
  return camelcaseKeys({
      "data": {
          "arrange": "LR",
          "edges": [
              {
                  "source_id": "get_failed_jobs",
                  "target_id": "process_failed_airflow_jobs_response"
              },
              {
                  "source_id": "process_failed_airflow_jobs_response",
                  "target_id": "export_failed_incident_to_table"
              }
          ],
          "nodes": {
              "children": [
                  {
                      "id": "export_failed_incident_to_table",
                      "value": {
                          "label": "export_failed_incident_to_table",
                          "labelStyle": "fill:#000;",
                          "rx": 5,
                          "ry": 5,
                          "style": "fill:#cdaaed;"
                      }
                  },
                  {
                      "id": "get_failed_jobs",
                      "value": {
                          "label": "get_failed_jobs",
                          "labelStyle": "fill:#000;",
                          "rx": 5,
                          "ry": 5,
                          "style": "fill:#cdaaed;"
                      }
                  },
                  {
                      "id": "process_failed_airflow_jobs_response",
                      "value": {
                          "label": "process_failed_airflow_jobs_response",
                          "labelStyle": "fill:#000;",
                          "rx": 5,
                          "ry": 5,
                          "style": "fill:#ffefeb;"
                      }
                  }
              ],
              "id": null,
              "value": {
                  "clusterLabelPos": "top",
                  "isMapped": false,
                  "label": null,
                  "labelStyle": "fill:#000;",
                  "rx": 5,
                  "ry": 5,
                  "style": "fill:CornflowerBlue",
                  "tooltip": ""
              }
          },
      }},
      { deep: true }
  )
}

function useGridData() {
  return camelcaseKeys({
      "data": {
          "dag_runs": [
              {
                  "conf": null,
                  "conf_is_json": false,
                  "data_interval_end": "2024-05-08T07:30:00+00:00",
                  "data_interval_start": "2024-05-07T07:30:00+00:00",
                  "end_date": "2024-05-08T13:04:16.530041+00:00",
                  "execution_date": "2024-05-07T07:30:00+00:00",
                  "external_trigger": false,
                  "last_scheduling_decision": "2024-05-08T13:04:16.525360+00:00",
                  "note": null,
                  "queued_at": "2024-05-08T15:04:10.828274+00:00",
                  "run_id": "scheduled__2024-05-07T07:30:00+00:00",
                  "run_type": "scheduled",
                  "start_date": "2024-05-08T13:04:10.857523+00:00",
                  "state": "success"
              }
          ],
          "groups": {
              "children": [
                  {
                      "extra_links": [],
                      "has_outlet_datasets": false,
                      "id": "get_failed_jobs",
                      "instances": [
                          {
                              "end_date": "2024-05-08T13:04:12.684367+00:00",
                              "note": null,
                              "queued_dttm": "2024-05-08T13:04:10.952821+00:00",
                              "run_id": "scheduled__2024-05-07T07:30:00+00:00",
                              "start_date": "2024-05-08T13:04:12.007853+00:00",
                              "state": "success",
                              "task_id": "get_failed_jobs",
                              "try_number": 1
                          }
                      ],
                      "is_mapped": false,
                      "label": "get_failed_jobs",
                      "operator": "SQLExecuteQueryOperator",
                      "trigger_rule": "all_success"
                  },
                  {
                      "extra_links": [],
                      "has_outlet_datasets": false,
                      "id": "process_failed_airflow_jobs_response",
                      "instances": [
                          {
                              "end_date": "2024-05-08T13:04:14.517385+00:00",
                              "note": null,
                              "queued_dttm": "2024-05-08T13:04:12.944023+00:00",
                              "run_id": "scheduled__2024-05-07T07:30:00+00:00",
                              "start_date": "2024-05-08T13:04:14.011514+00:00",
                              "state": "success",
                              "task_id": "process_failed_airflow_jobs_response",
                              "try_number": 1
                          }
                      ],
                      "is_mapped": false,
                      "label": "process_failed_airflow_jobs_response",
                      "operator": "PythonOperator",
                      "trigger_rule": "all_success"
                  },
                  {
                      "extra_links": [],
                      "has_outlet_datasets": false,
                      "id": "export_failed_incident_to_table",
                      "instances": [
                          {
                              "end_date": "2024-05-08T13:04:16.398751+00:00",
                              "note": null,
                              "queued_dttm": "2024-05-08T13:04:14.733901+00:00",
                              "run_id": "scheduled__2024-05-07T07:30:00+00:00",
                              "start_date": "2024-05-08T13:04:15.803538+00:00",
                              "state": "success",
                              "task_id": "export_failed_incident_to_table",
                              "try_number": 1
                          }
                      ],
                      "is_mapped": false,
                      "label": "export_failed_incident_to_table",
                      "operator": "SQLExecuteQueryOperator",
                      "trigger_rule": "all_done"
                  }
              ],
              "id": null,
              "instances": [],
              "label": null
          },
          "ordering": [
              "data_interval_end",
              "execution_date"
          ]
      }},
      { deep: true }
  )
}

export {
  useDatasets,
  useGraphData,
  useGridData,
};