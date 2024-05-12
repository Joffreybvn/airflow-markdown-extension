import markdown

from airflow_markdown_extension.fences import fence_airflow_dag_format


def markdown_format(source_string: str) -> str:
    return markdown.markdown(
        source_string,
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


class TestFenceAirflowDagFormat:
    def test_format_airflow_dag_fence(self):
        markdown_source = """
        ```airflowdag
        Hello World
        ```
        """

        assert (
            markdown_format(markdown_source)
            == """        <div id="rf74a"></div>
        <script type="module">window.AirflowGraph("rf74a");</script>"""
        )
