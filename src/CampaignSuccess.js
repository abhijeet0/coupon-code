import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CampaignSuccess.css';

const CampaignSuccess = () => {
  const [programName, setProgramName] = useState('');
  const [autoUpdate, setAutoUpdate] = useState(false);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [redemptionLimit, setRedemptionLimit] = useState(1);
  const [codeCount, setCodeCount] = useState(1);
  const [charset, setCharset] = useState('Alphanumeric');
  const [codeLength, setCodeLength] = useState(10);
  const [pattern, setPattern] = useState('#');
  const [prefix, setPrefix] = useState('');
  const [postfix, setPostfix] = useState('');
  const [customCharset, setCustomCharset] = useState('');
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryHierarchy, setNewCategoryHierarchy] = useState(0);

  // State to hold displayed characters based on charset selection
  const [displayCharacters, setDisplayCharacters] = useState('');

  const navigate = useNavigate();

  // Function to handle charset change
  const handleCharsetChange = (e) => {
    const selectedCharset = e.target.value;
    setCharset(selectedCharset);

    // Update displayed characters based on selected charset
    switch (selectedCharset) {
      case 'Alphanumeric':
        setDisplayCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
        break;
      case 'Alphabetic':
        setDisplayCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
        break;
      case 'Alphabetic Lowercase':
        setDisplayCharacters('abcdefghijklmnopqrstuvwxyz');
        break;
      case 'Alphabetic Uppercase':
        setDisplayCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        break;
      case 'Numbers':
        setDisplayCharacters('0123456789');
        break;
      case 'Custom':
        setDisplayCharacters(customCharset); // Show custom characters, if available
        break;
      default:
        setDisplayCharacters('');
        break;
    }
  };

  const handleCustomCharsetChange = (e) => {
    setCustomCharset(e.target.value);
    if (charset === 'Custom') {
      setDisplayCharacters(e.target.value);
    }
  };

  const handleCreateCategory = () => {
    setShowCreateCategory(true);
  };

  const handleSaveCategory = () => {
    console.log('New category created:', {
      name: newCategoryName,
      hierarchy: newCategoryHierarchy,
    });
    setShowCreateCategory(false);
    setNewCategoryName('');
    setNewCategoryHierarchy(0);
  };

  const handleCancelCategory = () => {
    setShowCreateCategory(false);
    setNewCategoryName('');
    setNewCategoryHierarchy(0);
  };

  const handleNextStep = () => {
    console.log('Next step triggered with:', {
      programName,
      autoUpdate,
      category,
      description,
      redemptionLimit,
      codeCount,
      charset,
      customCharset,
      codeLength,
      pattern,
      prefix,
      postfix,
    });

    navigate('/timeframe');
  };

  return (
    <div className="campaign-success-container">
      {showCreateCategory && (
        <div className="create-category-overlay">
          <div className="create-category-container">
            <h2>Create New Category</h2>
            <div className="form-group">
              <label>Category Name</label>
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Enter new category name"
              />
            </div>
            <div className="form-group">
              <label>Hierarchy</label>
              <input
                type="number"
                value={newCategoryHierarchy}
                onChange={(e) => setNewCategoryHierarchy(e.target.value)}
                placeholder="Enter hierarchy level"
                min="0"
              />
            </div>
            <div className="button-group">
              <button type="button" onClick={handleCancelCategory}>Cancel</button>
              <button type="button" onClick={handleSaveCategory}>Save</button>
            </div>
          </div>
        </div>
      )}

      <h1>Create Your Campaign</h1>

      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
            placeholder="Enter program name"
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={autoUpdate}
              onChange={() => setAutoUpdate(!autoUpdate)}
            />
            Auto Update
          </label>
          <div className="auto-update-box">
            <i className="bi bi-exclamation-circle help-icon"></i>
            <p>
              Auto update option will create a campaign that can be enhanced by new vouchers after the time of creation.
              This functionality is useful in case you publish multiple vouchers among customers and you want to ensure the number of available codes.
            </p>
          </div>
        </div>

        <div className="form-group">
          <label>Profile</label>
          <div className="category-container">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>Select a category</option>
              <option value="found">FOUND (3)</option>
              <option value="recent">RECENT (0)</option>
              <option value="selected">SELECTED (0)</option>
            </select>
            <button type="button" className="create-category-button" onClick={handleCreateCategory}>+</button>
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength="150"
            placeholder="Description (0 / 150)"
          />
        </div>

        <div className="form-group">
          <label>Code Redemption Limit</label>
          <select
            value={redemptionLimit}
            onChange={(e) => setRedemptionLimit(e.target.value)}
          >
            <option value="1">1</option>
            <option value="unlimited">Unlimited</option>
          </select>
        </div>

        <div className="form-group">
          <label>Code Count</label>
          <input
            type="number"
            value={codeCount}
            onChange={(e) => setCodeCount(e.target.value)}
            min="1"
          />
        </div>

        <div className="form-group charset-group">
  <div className="charset-selector">
    <label>Charset</label>
    <select
      value={charset}
      onChange={handleCharsetChange} // Use the custom handler
    >
      <option value="Alphanumeric">Alphanumeric</option>
      <option value="Alphabetic">Alphabetic</option>
      <option value="Alphabetic Lowercase">Alphabetic Lowercase</option>
      <option value="Alphabetic Uppercase">Alphabetic Uppercase</option>
      <option value="Numbers">Numbers</option>
      <option value="Custom">Custom</option>
    </select>

    {charset === 'Custom' && (
      <div>
        <label>Enter Custom Charset</label>
        <input
          type="text"
          value={customCharset}
          onChange={handleCustomCharsetChange}
          placeholder="Enter custom character set"
        />
      </div>
    )}
  </div>

  {/* Display the selected charset characters inline */}
  {displayCharacters && (
    <div className="selected-charset-characters">
      <label>Selected Charset Characters: </label>
      <span>{displayCharacters}</span>
    </div>
  )}
</div>


        <div className="form-group">
          <label>Code Length</label>
          <input
            type="number"
            value={codeLength}
            onChange={(e) => setCodeLength(e.target.value)}
            min="1"
          />
        </div>

        <div className="form-group">
          <label>Pattern</label>
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="#"
          />
        </div>

        <div className="form-group">
          <label>Prefix</label>
          <input
            type="text"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            placeholder="Enter prefix"
            
          />
        </div>

        <div className="form-group">
          <label>Postfix</label>
          <input
            type="text"
            value={postfix}
            onChange={(e) => setPostfix(e.target.value)}
            placeholder="Enter postfix"
          />
          <button type="button" onClick={handleNextStep}>Next</button>
        </div>

        
      </form>
    </div>
  );
};

export default CampaignSuccess;
