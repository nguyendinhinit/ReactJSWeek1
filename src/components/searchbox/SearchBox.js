import React, {useState} from 'react';

const SearchBox = (props) => {
    const [searchTerm, setSearchTerm] = useState();

    const handleChange = evt => {
        setSearchTerm(evt.target.value)
    }
    let [result, setResult] = useState([
        {
            userId: null,
            id: null,
            title: null,
            body: null
        }
    ]);

    const findPost = () => {
        setResult = props.listpost.filter(p => p.title === searchTerm);
        console.log(setResult);
    }
    return (
        <div className="search-box">
            <input type="text" name={"searchTerm"} placeholder={"typing something in here..."} onChange={handleChange}
                   onKeyDown={e => {
                       if (e.code === "Enter") {
                           props.onSubmit && props.onSubmit(searchTerm)
                           findPost();
                           console.log(searchTerm)
                       }
                   }
                   }/>
        </div>
    );
};

export default SearchBox;
