function DraftList({ drafts, onEdit, onDelete }) {
  return (
    <div>
      <h2>Saved Drafts</h2>

      {drafts.length === 0 ? (
        <p>No drafts available.</p>
      ) : (
        drafts.map((draft, index) => (
          <div className="draft-card" key={index}>
            <h4>{draft.platform}</h4>

            <p>{draft.text}</p>

            <button onClick={() => onEdit(index)}>Edit</button>

            <button onClick={() => onDelete(index)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default DraftList;