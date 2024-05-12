
javascript:
	python ./scripts/load_airflow_graph_javascript.py

graph:
	@echo "\n1/3 Downloading Airflow static javascript files..."
	python ./scripts/load_airflow_graph_javascript.py
	@echo "\n2/3 Applying patches..."
	./scripts/apply_airflow_patches.sh
	@echo "\n3/3 Compiling javascript and CSS libraries..."
	npm run build

graph-demo:
	@echo "Visit: http://localhost:8000/demo.html"
	python -m http.server

patch:
	git checkout patches ./airflow_markdown_extension/js/patches/0001-replace-api-call-by-local-data.patch
	git checkout patches ./airflow_markdown_extension/js/patches/0002-correctly-display-graph.patch

lint:
	ruff format

git-patch:
	git format-patch -2 HEAD
