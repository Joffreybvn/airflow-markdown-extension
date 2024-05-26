import camelcaseKeys from "camelcase-keys";

interface useDatasetsParams {
  dataset_data: any;
}

function useDatasets({ dataset_data }: useDatasetsParams) {
  return camelcaseKeys(
      {"data": dataset_data},
      { deep: true }
  )
}

interface UseGraphDataParams {
  graph_data: any;
}

function useGraphData({ graph_data }: UseGraphDataParams) {
  return camelcaseKeys(
      {"data": graph_data},
      { deep: true }
  )
}

interface UseGridDataParams {
  grid_data: any;
}

function useGridData({ grid_data }: UseGridDataParams) {
  return camelcaseKeys(
      {"data": grid_data},
      { deep: true }
  )
}

export {
  useDatasets,
  useGraphData,
  useGridData,
};