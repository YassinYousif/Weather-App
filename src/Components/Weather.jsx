const Weather = ({ data, setResultShown }) => {

    console.log(data)

    return (
        <div className="flex flex-col justify-between my-20 items-center w-full h-full px-8">
            <div>
                <div className="text-3xl font-bold text-center flex flex-col items-center">
                    <h2>The Weather in <span>{data.location.name}</span> is</h2>
                    <br />
                    <h1 className="flex text-4xl font-extrabold text-blue-950 -mt-8">{data.current.condition.text}</h1>
                    <img src={data.current.condition.icon} alt={data.current.condition.text} />
                </div>
                
            </div>
            <div className="flex items-center justify-between gap-28 text-2xl font-semibold">
                <div className="flex flex-col gap-8 items-center">    
                    <div>
                        <h3>
                            Temp °C <span className="font-extrabold text-[26px] text-blue-950">{data.current.temp_c}</span>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            Temp °F <span className="font-extrabold text-[26px] text-blue-950">{data.current.temp_f}</span>
                        </h3>
                    </div>
                </div>
                <div className="flex flex-col gap-8 items-center">    
                    <div>
                        <h3>
                            Wind Kph <span className="font-extrabold text-[26px] text-blue-950">{data.current.wind_kph}</span>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            Wind Mph <span className="font-extrabold text-[26px] text-blue-950">{data.current.wind_mph}</span>
                        </h3>
                    </div>
                </div>
            </div>
            <div>
                <button className="py-3 px-8 rounded-full bg-transparent border font-medium" onClick={() => setResultShown(prev => !prev)}>Go back</button>
            </div>
        </div>
    );
}
 
export default Weather;