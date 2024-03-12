import React from "react";

function SearchBox() {
  return (
    <div className="search-box-container">
      <form
        className="search-box-form"
        action="https://www.booking.com/hotel/pl/cracow-central-guest-rooms.html#availability_target"
        method="GET"
      >
        <div className="search-box-section">
          <div className="date-picker-container">
            <span className="calendar-icon" aria-hidden="true">
              {/* Calendar icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {/* ... (SVG path for calendar icon) */}
              </svg>
            </span>
            <button
              type="button"
              data-testid="date-display-field-start"
              className="date-display-button"
            >
              <span className="date-display-text">Tue 11 Jun</span>
            </button>
            <span className="date-range-separator"> — </span>
            <button
              type="button"
              data-testid="date-display-field-end"
              className="date-display-button"
            >
              <span className="date-display-text">Wed 12 Jun</span>
            </button>
          </div>
        </div>
        <div className="search-box-section">
          <div className="occupancy-config-container" tabIndex="-1">
            <button
              data-testid="occupancy-config"
              aria-controls=":r26:"
              aria-expanded="false"
              type="button"
              className="occupancy-config-button"
            >
              <span className="occupancy-config-text">
                <span className="person-icon" aria-hidden="true">
                  {/* Person icon SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    {/* ... (SVG path for person icon) */}
                  </svg>
                </span>
                2 adults · 0 children · 1 room
              </span>
              <span className="search-icon" aria-hidden="true">
                {/* Search icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  {/* ... (SVG path for search icon) */}
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="search-box-section">
          <button
            type="submit"
            className="change-search-button"
          >
            <span className="change-search-text">Change search</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
