import { Typography } from "@mui/material";
import MainBox from "../../components/boxs/MainBox";
import MainCard from "../../components/cards/MainCard";
import MainTable from "../../components/tables/MainTable";
import useTranslation from "../../utils/i18n/translations";
import { ACTIVE_LOAN, ACTIVE_LOAN_REQUESTED, REMAINING_LOAN } from "../../utils/constants";

const DashboardBox = (props) => {
    const { type } = props;
    const i18n = useTranslation();


    const generateSecondCard = ()=>{
        switch(type)
        {
            case ACTIVE_LOAN:
                return (
                    <MainTable />
                )
            break;
            case ACTIVE_LOAN_REQUESTED:

            break;
            case REMAINING_LOAN:

            break;
        }
    }

    return (
        <MainBox>
            <MainCard height="100px">
                Total active
            </MainCard>
            <Typography variant="h5">{i18n["total"]} : Lancar</Typography>
            <Typography variant="h5">{i18n["member.since"]} : Lancar</Typography>
            <MainCard>
                {
                    generateSecondCard()
                }
            </MainCard>
        </MainBox>
    );
}

export default DashboardBox;