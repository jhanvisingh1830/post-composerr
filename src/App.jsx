import { useState } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState("");
  const [platform, setPlatform] = useState("Twitter");

  const maxCharacters =
    platform === "Twitter" ? 280 : 3000;

  const characterCount = post.length;

  const isExceeded = characterCount > maxCharacters;

  return (
    <div className="page">
      <div className="container">

        <h1>Post Composer</h1>

        <p className="subtitle">
          Create and validate your social media post
        </p>

        <label>Select Platform</label>

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="Twitter">Twitter</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>

        <label>Write Your Post</label>

        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="Write your post here..."
        />

        <div className="counter">
          <span>Character Count</span>
          <span className={isExceeded ? "danger" : ""}>
            {characterCount} / {maxCharacters}
          </span>
        </div>

        {isExceeded && (
          <div className="error">
            Error: {platform} posts cannot exceed{" "}
            {maxCharacters} characters.
          </div>
        )}

        <button disabled={isExceeded || characterCount === 0}>
          Post
        </button>

      </div>
    </div>
  );
}

export default App;