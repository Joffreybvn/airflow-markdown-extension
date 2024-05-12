from typing import TYPE_CHECKING

from airflow_markdown_extension.utils import generate_random_string

if TYPE_CHECKING:
    import markdown


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
