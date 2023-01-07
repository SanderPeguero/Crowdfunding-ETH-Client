import { useState, useEffect } from "react"
import { DisplayCampaigns } from "../components"
import { useStateContext } from '../context'

const home = () => {
    const [isLoading, setisLoading] = useState(false)
    const [campaigns, setcampaigns] = useState([])

    const { address, contract, getCampaigns } = useStateContext()

    const fetchCampaigns = async () => {
        setisLoading(true)
        const data = await getCampaigns()
        setcampaigns(data)
        setisLoading(false)
    }

    useEffect(() => {
        if(contract) fetchCampaigns()
    }, [address, contract]);

    return(
        <DisplayCampaigns
            title="All Campaigns"
            isLoading={isLoading}
            campaigns={campaigns}
        />
    )

}

export default home