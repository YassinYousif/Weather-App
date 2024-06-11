import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const SearchInput = ({ setResultShown, setIsLoading, isLoading, setData, setErr }) => {

    const [term, setTerm] = useState('');
    const apiKey = "62a259994b5c4343bb9112157241106";

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!term) return;

        setIsLoading(true);

        fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${term}&aqi=no`)
            .then((res) => {
                setIsLoading(false);
                return res.json();
            })
            .then((data) => {
                setData(data)
                setResultShown(prev => !prev)
            })
            .catch(err => {
                console.error(err)
                setResultShown(prev => !prev)
            })
    }



    return (
        <div className="w-full h-full flex items-center">
            <form className="w-full h-full" onSubmit={handleSubmit}>
                <div className="w-full h-full flex items-center">
                    {isLoading ? 
                        <ClipLoader
                            color="#172554"
                            size={30}
                            className="absolute ml-4 text-lg"
                        />
                    :
                        <i className="fa-solid fa-magnifying-glass absolute ml-6 cursor-pointer text-lg" onClick={handleSubmit}></i>
                    }
                    <input 
                        type="text"
                        className="w-full h-full px-16 rounded-[20px] text-lg font-semibold focus:outline-none"
                        placeholder="Enter a specific area.."
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        autoFocus
                    />
                </div>
            </form>
        </div>
    );
}
 
export default SearchInput;