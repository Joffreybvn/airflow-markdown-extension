"""
Download Airflow javascript files related to ReactFlow / Graph view,
and store it into 'airflow_markdown_extension/js/airflow.
"""

import os
import shutil
from logging import getLogger
import requests

logger = getLogger(__name__)

remote_path = (
    "https://raw.githubusercontent.com/apache/airflow/main/airflow/www/static/js"
)
local_path = "./airflow_markdown_extension/js/airflow"

file_paths = [
    "/api/index.ts",
    "/components/Graph/Edge.tsx",
    "/components/NewTable/searchParams.ts",
    "/components/Time.tsx",
    "/components/Tooltip.tsx",
    "/context/containerRef.tsx",
    "/context/timezone.tsx",
    "/dag/InstanceTooltip.tsx",
    "/dag/StatusBox.tsx",
    "/dag/TaskName.tsx",
    "/dag/useFilters.tsx",
    "/dag/useSelection.ts",
    "/datetime_utils.js",
    "/dag/details/graph/DagNode.tsx",
    "/dag/details/graph/DatasetNode.tsx",
    "/dag/details/graph/index.tsx",
    "/dag/details/graph/Node.tsx",
    "/dag/details/graph/utils.ts",
    "/index.d.ts",
    "/theme.ts",
    "/types/api-generated.ts",
    "/types/index.ts",
    "/utils/graph.ts",
    "/utils/index.ts",
    "/utils/URLSearchParamWrapper.ts",
    "/utils/useOffsetTop.ts",
]

shutil.rmtree(local_path, ignore_errors=True)

for file_path in file_paths:
    logger.info(f"Pulling '{file_path}'")

    remote_file: str = remote_path + file_path
    local_file: str = local_path + file_path

    response = requests.get(url=remote_file)
    if response.status_code != 200:
        logger.warning(f"'{file_path}' does not exist on Github, file skipped.")
        continue

    os.makedirs(os.path.dirname(local_file), exist_ok=True)
    with open(local_file, "wb") as file:
        file.write(response.content)
