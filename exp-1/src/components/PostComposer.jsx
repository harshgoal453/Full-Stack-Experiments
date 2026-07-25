import { useState, useEffect } from "react";
import DraftList from "./DraftList";
import { validatePost, limits } from "./Validation";

function PostComposer() {
  const [platform, setPlatform] = useState("Twitter");
  const [text, setText] = useState("");
  const [drafts, setDrafts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("drafts")) || [];
    setDrafts(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("drafts", JSON.stringify(drafts));
  }, [drafts]);

  const validation = validatePost(platform, text);

  const saveDraft = () => {
    if (!validation.valid) return;

    const draft = { platform, text };

    if (editIndex !== null) {
      const updated = [...drafts];
      updated[editIndex] = draft;
      setDrafts(updated);
      setEditIndex(null);
    } else {
      setDrafts([...drafts, draft]);
    }

    setText("");
  };

  const editDraft = (index) => {
    setPlatform(drafts[index].platform);
    setText(drafts[index].text);
    setEditIndex(index);
  };

  const deleteDraft = (index) => {
    setDrafts(drafts.filter((_, i) => i !== index));
  };

  return (
    <div className="container">

      <h1>Post Composer</h1>

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option>Twitter</option>
        <option>LinkedIn</option>
        <option>Instagram</option>
      </select>

      <textarea
        rows="6"
        placeholder="Write your post..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>
        Characters: {text.length}/{limits[platform]}
      </p>

      <p
        style={{
          color: validation.valid ? "green" : "red",
        }}
      >
        {validation.message}
      </p>

      <button onClick={saveDraft}>
        {editIndex !== null ? "Update Draft" : "Save Draft"}
      </button>

      <DraftList
        drafts={drafts}
        onEdit={editDraft}
        onDelete={deleteDraft}
      />
    </div>
  );
}

export default PostComposer;