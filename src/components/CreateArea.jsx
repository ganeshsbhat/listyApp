import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [expand, setExpand] = useState(false);

  function handleChange(event) {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    setNote(preValue => {
      return {
        ...preValue,
        [inputName]: inputValue
      };
    });
  }

  function handleClick(event) {
    if (note.title === "" && note.content === "") {
      return alert("Please provide a valid note!");
    }
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setExpand(false);
    event.preventDefault();
  }

  function handleTextAreaClick() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
          hidden={!expand}
        />
        <textarea
          onChange={handleChange}
          onClick={handleTextAreaClick}
          name="content"
          placeholder="Take a note..."
          rows={expand ? 3 : 1}
          value={note.content}
        />
        <Zoom in={expand}>
          <Fab onClick={handleClick}>
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
