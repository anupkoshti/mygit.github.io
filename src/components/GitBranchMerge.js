const GitBranchMerge = () => {
  return (
    <div>
      <ol>
        <li>git branch : will list your branches</li>
        <li>
          git checkout : switch to another branch and check it out into your
          working directory
        </li>
        <li>
          git merge : will merge the specified branch's history into the current
          branch
        </li>
        <li>git log : show all the commits in the current branch's history</li>
      </ol>
    </div>
  );
};

export default GitBranchMerge;
