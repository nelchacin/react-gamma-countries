import './CountriesList.css'
import { Link } from "react-router-dom"

const CountriesList = (props) => {
const {country} = props


    return(
        
                country && country.map((country)=>{
                    return(
                        <div className="col-5 countries" key={country._id}>
                            <div className="list-group">
                                <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action" key={country._id}>
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} /> <br />
                                    {country.name.common}
                                </Link>
                            </div>
                        </div>

                            )
                })
                
        
    )
}

export default CountriesList