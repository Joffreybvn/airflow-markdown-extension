
javascript:
	@echo "\n1/3 Downloading Airflow static javascript files..."
	python ./scripts/load_airflow_graph_javascript.py
	@echo "\n2/3 Applying patches..."
	./scripts/apply_airflow_patches.sh
	@echo "\n3/3 Compiling javascript and CSS libraries..."
	npm run build

pypi:
	hatch build
	hatch publish

npm:
	npm pack
	npm publish

demo:
	@echo "Visit: http://localhost:8000/"
	cd ./demo && python -m http.server

patch:
	git format-patch -2 HEAD
	git checkout patches ./airflow_markdown_extension/js/patches/0001-replace-api-call-by-local-data.patch
	git checkout patches ./airflow_markdown_extension/js/patches/0002-correctly-display-graph.patch

lint:
	ruff format
