import React, { useState } from 'react'
import './Search.css';
// import jasonData from `/TemplateData.json`
function Searchbar() {




    const [value, setValue] = useState();
    const [data, setData] = useState([]);

    const onChange = async (e) => {
        try {
            setValue(e.target.value);
            // const response = fetch(`https://jsonplaceholder.typicode.com/posts`)

            const response = fetch(`http://localhost/8000/product/display`)
            const data = await response.json();
            setData(data)


        } catch (err) {
            alert(`error in fetching`, err)
        }
    }
    return (

        <div className="search">
            <div>

                <input type="text" onChange={onChange} value={value} />
                <button>search</button>
            </div>
           
            <div className="template-container">
                {
                    value &&

                    data.filter(item => item.title.startsWith(value) && item.title !== value).slice(0, 5).map(item =>
                        <div key={item.id} onClick={(e) => setValue(item.title)}>
                            {item.title}<hr />



                        </div>)
                }
            </div>
        </div>

    )
}

export default Searchbar