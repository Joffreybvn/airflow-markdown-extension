import markdown
from airflow_markdown_extension.fences import fence_airflow_dag_format

markdown_source = """
# Hello World
```airflowdag
from airflow.decorators import dag, task
from datetime import datetime

@dag(schedule_interval='@daily', start_date=datetime(2022, 1, 1), catchup=False)
def hello_world_dag():
    @task
    def some_example():
        print("Hello")

    @task
    def print_world():
        print("World")

    hello = some_example()
    world = print_world()

    hello >> world

dag = hello_world_dag()
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
