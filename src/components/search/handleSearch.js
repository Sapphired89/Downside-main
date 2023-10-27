import React, { useState } from 'react';
import '../search/Search.css'

function HandleSearch() {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
      if (searchTerm) {
        const searchUrl = `https://www.startpage.com/do/search?q=${encodeURIComponent(searchTerm)}`;
        window.location.href = searchUrl;
      }
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission
        handleSearch();
      }
    };

    return (
            <div className="container">
                <div className="Widget weight-override" style={{ color: 'rgb(255, 255, 255)', fontFamily: 'Segoe UI', fontSize: '78px', fontWeight: 700 }}>
                    <form className="Search">
                        <input placeholder="المعرفة قوة" tabIndex="1" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={handleKeyPress}/>
                    </form>
                </div>
            </div>
        
    );
}
export default HandleSearch;