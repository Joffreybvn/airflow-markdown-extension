import markdown
from airflow_markdown_extension.fences import fence_airflow_dag_format

markdown_source = """
# Hello World
```airflowdag
from airflow import DAG, Dataset
from airflow.decorators import task
from datetime import datetime

with DAG(
    dag_id="hello_world_dag",
    schedule=[Dataset("s3://dataset/example.csv")],
    start_date=datetime(2022, 1, 1),
    catchup=False,
):

    @task
    def print_hello():
        print("Hello")

    @task
    def print_world():
        print("World")

    hello = print_hello()
    world = print_world()

    hello >> world
```
"""

html = markdown.markdown(
    markdown_source,
    extensions=["pymdownx.superfences"],
    extension_configs={
        "pymdownx.superfences": {
            "custom_fences": [
                {
                    "name": "airflowdag",
                    "class": "airflowdag",
                    "format": fence_airflow_dag_format,
                }
            ]
        }
    },
)

print(html)
