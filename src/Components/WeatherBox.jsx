import { useState } from "react";
import SearchInput from "./SearchInput";
import NotFound from "./NotFound";
import Weather from "./Weather";

const WeatherBox = () => {

    const [resultShown, setResultShown] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    return (
        <div className={`w-[530px] ${(resultShown) ? "h-[700px]" : "h-[75px]"} bg-white rounded-[20px] transition-all flex flex-col items-center mt-20`}>
            {resultShown ? 
                (data.error) ? <NotFound setResultShown={setResultShown} /> : <Weather data={data} setResultShown={setResultShown} />
            :
                <SearchInput 
                    setResultShown={setResultShown}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                    setData={setData}
                />
            }
        </div>
    );
}
 
export default WeatherBox;