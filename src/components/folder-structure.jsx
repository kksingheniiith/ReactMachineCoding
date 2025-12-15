import { useEffect, useState } from "react";
const FOLDER = {
  root: {
    name: "root",
    type: "folder",
    parent: null,
  },
  folder1: {
    name: "folder1",
    type: "folder",
    parent: "root",
  },
  folder2: {
    name: "folder2",
    type: "folder",
    parent: "root",
  },
  folder3: {
    name: "folder3",
    type: "folder",
    parent: "folder1",
  },
  file1: {
    name: "file1",
    type: "file",
    parent: "folder1",
  },
  file3: {
    name: "file3",
    type: "file",
    parent: "folder2",
  },
};

function FolderStructure() {
  const [currentParent, setCurrentParent] = useState(null);
  const [foldersToShow, setFoldersToShow] = useState([]);
  const [parentChain, setParentChain] = useState([]);

  useEffect(() => {
    const foldersToShow = Object.keys(FOLDER).filter(
      (key) => FOLDER[key].parent === currentParent
    );
    setFoldersToShow(foldersToShow);

    setParentChain(getParentChain(currentParent))
  }, [currentParent]);

  const clickedOnItem = (folderKey) => {
    setCurrentParent(folderKey);
  };

  const clickedOnParent = (element) => {
    const folderKey = element.target.getAttribute("data-folder-key");
    if (folderKey) {
      setCurrentParent(folderKey);
    }
  }

  const getParentChain = (folderKey) => {
    const chain = [];

    while (folderKey !== null) {
        chain.push(folderKey);
        folderKey = FOLDER[folderKey].parent;
    }

    return chain.reverse();
  };

  return (
    <div className="wrapper">
      <div className="folder-structure">
        {
            parentChain.map((folderName, index) => {
                return <span className="folder-link" key={folderName} onClick={() => clickedOnItem(folderName)}>{folderName} <span>{index < parentChain.length - 1 ? " > " : ""}</span></span>
            })
        }
      </div>
      <div className="folder-items" onClick={clickedOnParent}>
        {foldersToShow.map((folderKey) => {
          const folder = FOLDER[folderKey];
          return (
            <div
              key={folderKey}
              className={`${folder.type}-item`}
              data-folder-key={folderKey}
            >
              {folder.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FolderStructure;
