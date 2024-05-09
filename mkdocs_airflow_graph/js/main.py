import os

import requests

remote_path = "https://raw.githubusercontent.com/apache/airflow/main/airflow/www/static/js"
local_path = "./airflow2"

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
    "/utils/useOffsetTop.ts"
]

for file_path in file_paths:
    print(f"Pulling '{file_path}'")

    url: str = remote_path + file_path
    destination: str = local_path + file_path
    os.makedirs(os.path.dirname(destination), exist_ok=True)

    response = requests.get(url)
    if response.status_code != 200:
        raise Exception(f"'{file_path}' does not exists in Github")

    with open(destination, "wb") as file:
        file.write(response.content)
