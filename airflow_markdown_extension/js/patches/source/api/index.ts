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
      "dag_runs": [],
      "groups": {
        "children": [
          {
            "extra_links": [],
            "has_outlet_datasets": false,
            "id": "check_confluent_kafka",
            "instances": [],
            "is_mapped": false,
            "label": "check_confluent_kafka",
            "operator": "PythonOperator",
            "trigger_rule": "all_success"
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
    }
},
  { deep: true }
  )
}

export {
  useDatasets,
  useGraphData,
  useGridData,
};
