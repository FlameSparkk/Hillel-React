import React, { useEffect } from 'react';
import './GistFiles.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useParams, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Container } from "semantic-ui-react";
import { fetchFiles } from "../redux/slices/filesSlice";
import DimmerLoader from "../../dz4/blog-v2/components/DimmerLoader";
import { getSelectedGistById } from "../redux/selectors/gists";
import { getFilesByGistId, getFilesLoading } from "../redux/selectors/files";

function GistFiles() {
  const { gistId } = useParams();
  const selectedGists = useSelector(state => getSelectedGistById(state, gistId));
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedGists) {
      dispatch(fetchFiles({files: selectedGists.files, gistId}))
    }
  }, [gistId, selectedGists]);

  const files = useSelector(state => getFilesByGistId(state, gistId));
  const loading = useSelector(getFilesLoading);
  if (!selectedGists) {
    return <Redirect to='/gists' />
  }
  return (
    <Container>
      <DimmerLoader active={loading} />
      <div className="gist-title">
        {selectedGists.owner.login}
      </div>
      {files.map(file =>
       <div className='code-block'>
         <div className="code-block-title">
           {file.filename}
         </div>
         <SyntaxHighlighter language={file.language && file.language.toLowerCase()} style={dark}>
           {file.fileContent}
         </SyntaxHighlighter>
       </div>
      )}
    </Container>
  );
}

export default GistFiles;
