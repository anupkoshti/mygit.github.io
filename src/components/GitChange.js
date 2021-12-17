const GitChange = () => {
  return (
    <div class='change'>

      <ol>
        <li>git status : list new or modified files not yet commited</li>
        <li>git diff : lists down changes and conflicts</li>
        <li>git add [file ] : stages the file, ready for the commit</li>
        <li>git reset [file ] : unstages file, keeping the file changes</li>
        <li>
          git commit -m "descriptive message" : commit all stages files to
          versioned history
        </li>
      </ol>
    </div>
  );
};

export default GitChange;
