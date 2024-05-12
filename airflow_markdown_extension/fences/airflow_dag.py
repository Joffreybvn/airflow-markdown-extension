from __future__ import annotations
from typing import TYPE_CHECKING

import flask
from airflow import Dataset
from airflow.api_connexion.schemas.dataset_schema import dataset_collection_schema, DatasetCollection
from airflow.datasets import DatasetAll
from airflow.models import DAG, DagBag
from airflow.models.dataset import DatasetModel
from airflow.utils.dag_edges import dag_edges
from airflow.utils.task_group import task_group_to_dict
from jinja2.utils import htmlsafe_json_dumps

from airflow_markdown_extension.utils import generate_random_string

if TYPE_CHECKING:
    import markdown


class DagParser:
    """Parse the first DAG loaded in a given folder and return its corresponding DAG, DatasetModel and Run objects."""

    @staticmethod
    def _parse_dag(folder: str) -> DAG:
        """Parse and return the first dag loaded in a dag folder."""
        dag_bag = DagBag(
            dag_folder=folder,
            include_examples=False
        )
        return list(dag_bag.dags.values())[0]

    @staticmethod
    def _get_datasets(dag: DAG) -> list[DatasetModel]:
        """Get the datasets related to a dag."""
        trigger = dag.dataset_triggers
        if trigger is not None:
            if isinstance(trigger, Dataset):
                return [DatasetModel.from_public(trigger)]
            elif isinstance(trigger, DatasetAll):
                return [
                    DatasetModel.from_public(dataset)
                    for dataset in trigger.objects
                ]
            else:
                raise NotImplemented(
                    f"Cannot extract Dataset data from '{type(trigger)}' object."
                )

    @classmethod
    def parse(cls, dag_folder: str) -> tuple[DAG, list[DatasetModel]]:
        dag = cls._parse_dag(folder=dag_folder)
        datasets = cls._get_datasets(dag=dag)
        return dag, datasets


# Source: https://github.com/apache/airflow/blob/main/airflow/www/views.py#L3174
def make_graph_data(dag: DAG) -> str:
    """Generate the JSON graph data from a given Airflow DAG."""
    nodes = task_group_to_dict(dag.task_group)
    edges = dag_edges(dag)

    data = {
        "arrange": dag.orientation,
        "nodes": nodes,
        "edges": edges,
    }
    return htmlsafe_json_dumps(
        obj=data,
        separators=(",", ":"),
        dumps=flask.json.dumps
    )


def make_dataset_data(datasets: list[DatasetModel]) -> str:
    """Generate the JSON dataset data from a given Airflow Dataset."""
    return dataset_collection_schema.dump(
        DatasetCollection(
            datasets=datasets,
            total_entries=len(datasets)
        )
    )


def fence_airflow_dag_format(
    source: str,
    language: str,
    css_class: str,
    options: dict,
    md: markdown.core.Markdown,
    **kwargs,
) -> str:
    """Format fence into a JSON representation of an Airflow DAG."""

    div_id: str = generate_random_string()
    html_graph = f"""
        <div id="{div_id}"></div>
        <script type="module">window.AirflowGraph("{div_id}");</script>
        """
    return html_graph