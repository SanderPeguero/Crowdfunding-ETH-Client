import { useState, useEffect } from "react"

import { DisplayCampaigns } from '../components'
import { useStateContext } from '../context'

const profile = () => {
    const [isLoading, setisLoading] = useState(false)
    const [campaigns, setcampaigns] = useState([])

    const { address, contract, getUserCampaigns } = useStateContext()

    const fetchCampaign = async () => {
        setisLoading(true)
        const data = await getUserCampaigns()
        setcampaigns(data)
        setisLoading(false)
    }

    useEffect(() => {
        if(contract) fetchCampaign()
    }, [address, contract])

    return(
        <DisplayCampaigns
            title="All Campaigns"
            isLoading={isLoading}
            campaigns={campaigns}
        />
    )
}

export default profile