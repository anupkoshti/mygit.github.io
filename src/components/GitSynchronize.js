const GitSynchronize = () => {
  return (
    <div class='sync'>
      
      <ol>
        <li>
          git remote {'ltadd&gt &lturl&gt'} : Create a new connection to a
          remote repo
        </li>
        <li>git fetch : get all changes from the origin (no merge)</li>
        <li>git pull : get all the latest changes from the origin and merge</li>
        <li>
          git push : is used to upload your local repository changes to the
          origin remote repo
        </li>
      </ol>
    </div>
  );
};

export default GitSynchronize;
