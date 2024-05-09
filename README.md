
## Setup

```shell
mkdir airflow-graph
cd airflow-graph
npm i typescript --save-dev
npx tsc --init
```

## Developing

```shell
# Rebuild each time something changes
npx tsc -w

# Build
npx tsc
```


./api/index.ts
./components/Graph/Edge.tsx
./components/NewTable/searchParams.ts
./components/Time.tsx
./components/Tooltip.tsx
./context/containerRef.tsx
./context/timezone.tsx
./dag/InstanceTooltip.tsx
./dag/StatusBox.tsx
./dag/TaskName.tsx
./dag/useFilters.tsx
./dag/useSelection.ts
./datetime_utils.js
./graph/DagNode.tsx
./graph/DatasetNode.tsx
./graph/index.tsx
./graph/Node.tsx
./graph/utils.ts
./index.d.ts
./theme.ts
./types/api-generated.ts
./types/index.ts
./utils/graph.ts
./utils/index.ts
./utils/URLSearchParamWrapper.ts
./utils/useOffsetTop.ts