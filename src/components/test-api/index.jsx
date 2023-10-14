import { useState, useEffect } from 'react';
import styles from './style.module.css'

const TestApi = () => {
    const [teamData, setTeamData] = useState([])
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '63de056b50msh1a5987bea474eb0p1b2e35jsnaf4f0d24d734',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };

        fetch(url,options)
        .then((res)=>res.json())
        .then((res)=>{
            setTeamData(res.data);
            setIsLoad(false)
        })
    },[])

    return (
        <div className={styles.main_testApi}>
            <h3>Команды</h3>
            {isLoad && <div>Loading...</div>}
            {teamData.map((el)=>{
                return(
                    <div key={el.id} className={styles.teamElem}>
                        {el.id}.{el.full_name}-{el.city}
                        <img
                        src='https://e7.pngegg.com/pngimages/119/413/png-clipart-waste-container-garbage-in-garbage-out-waste-collection-waste-collector-silver-trash-recycling-waste-containment.png'
                        style={{width:'15px',height:'15px'}}
                        onClick={()=>{
                            setTeamData(
                                teamData.filter((filterElement)=>el.id !=filterElement.id)
                            )
                        }}
                        />
                        
                    </div>
                )
            })}
        </div>
    )
}

export default TestApi;