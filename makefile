
graph:
	@echo "\n1/3 Downloading Airflow static javascript files..."
	python ./scripts/load_airflow_graph_javascript.py
	@echo "\n2/3 Applying patches..."
	./scripts/apply_airflow_patches.sh
	@echo "\n3/3 Compiling javascript and CSS libraries..."
	npm run build

graph-demo:
	@echo "Visit: http://localhost:8000/demo.html"
	cd ./mkdocs_airflow_graph/js && python -m http.server
