import { createSelector } from '@reduxjs/toolkit';


export const getFiles = createSelector(
  state => state.files.data,
  files => files
);

export const getFilesLoading = createSelector(
  state => state.files.isFetching,
  isFetching => isFetching,
);

export const getFilesByGistId = createSelector(
  getFiles,
  (_, gistId) => gistId,
  (files, gistId) => files[gistId] || []
);
