import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Timeframe.css';

const Timeframe = () => {
  const [startsOnDate, setStartsOnDate] = useState('');
  const [startsOnTime, setStartsOnTime] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [expiresOnDate, setExpiresOnDate] = useState('');
  const [expiresOnTime, setExpiresOnTime] = useState('');
  const [timeLimitations, setTimeLimitations] = useState('');
  const [duration, setDuration] = useState(24); // Duration state
  const [unit, setUnit] = useState('hour'); // Unit state
  const [isTimeLimitChecked, setIsTimeLimitChecked] = useState(false); // Checkbox state
  const [activePicker, setActivePicker] = useState(null);
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (!startsOnDate || !startsOnTime || !expiresOnDate || !expiresOnTime) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Timeframe Data:', {
      startsOnDate,
      startsOnTime,
      creationDate,
      expiresOnDate,
      expiresOnTime,
      timeLimitations,
      duration,
      unit,
    });

    navigate('/discount-value');
  };

  const togglePicker = (picker) => {
    setActivePicker(activePicker === picker ? null : picker);
  };

  return (
    <div className="timeframe-container">
      <h1>Timeframe</h1>

      <div className="form-container">
        <form>
          <div className="form-group">
            <label>Starts On</label>
          </div>

          {/* Single box for both Creation and Specific Date */}
          <div className="form-group single-box">
            <div className="option-group">
              <label onClick={() => togglePicker('creation')}>Creation</label>
              <label onClick={() => togglePicker('specification')}>Specific Date</label>
            </div>

            {/* Show the Specific Date picker */}
            {activePicker === 'specification' && (
              <div className="date-time-picker">
                <div className="input-with-icon">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  <input
                    type="date"
                    value={startsOnDate}
                    onChange={(e) => setStartsOnDate(e.target.value)}
                    placeholder="Choose a specific date"
                    // required
                  />
                </div>
                <input
                  type="time"
                  value={startsOnTime}
                  onChange={(e) => setStartsOnTime(e.target.value)}
                  placeholder="Choose time"
                  // required
                />
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Expires On</label>
          </div>

          {/* Grouping Expiration Options */}
          <div className="form-group single-box">
            <div className="option-group">
              <label onClick={() => togglePicker('creation')}>Never</label>
              <label onClick={() => togglePicker('specification1')}>On Specific Date</label>
            </div>

            {activePicker === 'specification1' && (
              <div className="date-time-picker">
                <div className="input-with-icon">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  <input
                    type="date"
                    value={expiresOnDate}
                    onChange={(e) => setExpiresOnDate(e.target.value)}
                    placeholder="Choose a date (Asia/Istanbul)"
                    // required
                  />
                </div>
                <input
                  type="time"
                  value={expiresOnTime}
                  onChange={(e) => setExpiresOnTime(e.target.value)}
                  placeholder="Choose time (Asia/Istanbul)"
                  // required
                />
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Time limitations</label>
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  checked={isTimeLimitChecked}
                  onChange={(e) => setIsTimeLimitChecked(e.target.checked)}
                />
                <span>Keep valid for a specific amount of time after publishing</span>
              </label>

              {isTimeLimitChecked && (
                <div className="time-limitations-group">
                  <label>Active after publishing for</label>
                  <div className="duration-unit-group">
                    <input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      placeholder="Enter duration"
                      className="duration-input"
                    />
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="unit-select"
                    >
                      <option value="hour">Hour(s)</option>
                      <option value="day">Day(s)</option>
                      <option value="week">Month(s)</option>
                      <option value="week">Year(s)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button type="button" onClick={handleNextStep}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Timeframe;
