
graph:
	python ./scripts/load_airflow_graph_javascript.py

graph-demo:
	cd ./mkdocs_airflow_graph/js && python -m http.server