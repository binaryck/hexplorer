import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [domain, setDomain] = useState<string>("");
  const handleSearch = () => {
    //Add util isDomainValid
    //if (isDomainValid(domain)) {
    const isBitmap = domain.includes(".bitmap");
    const path = isBitmap
      ? `/bitmap/${domain.split(".")[0]}`
      : `/content/${domain}`;
    navigate(path);
    /*} else {
      alert("Please enter a valid domain or bitmap.");
    }*/
  };

  return (
    <div className="App">
      <div className="background-grid" />
      <header className="App-header">
        <h1 className="title">Web3 Explorer</h1>
        <input
          className="ipfs-input"
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter domain or bitmap..."
        />
        <button className="pixel-button" onClick={handleSearch}>
          GO
        </button>
      </header>
    </div>
  );
};

export default HomePage;
