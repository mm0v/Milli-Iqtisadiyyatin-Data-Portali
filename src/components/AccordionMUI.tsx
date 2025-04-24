import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Meqsed from '/about/meqsed.png';
import Missya from '/about/missya.png';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: `transparent`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled(({ expanded, ...props }: AccordionSummaryProps & { expanded: boolean }) => (
    <MuiAccordionSummary
        expandIcon={expanded ?
            <RemoveIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: "#ffffff" }} /> :
            <AddIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: "#ffffff" }} />}
        {...props}
    />
))(({ theme }) => ({
    justifyContent: "space-between",
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
        transform: 'none',
    },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles?.('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4),
    },
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div className="flex justify-end px-4 sm:px-6 md:px-20 h-[94vh] py-8">
            <div className="w-full max-w-[820px]">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expanded={expanded === 'panel1'}
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography sx={{
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.32rem' },
                            fontWeight: "700",
                            color: "#8994D7",
                            lineHeight: 1.2
                        }} component="span">
                            Biz Kimik?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-white' sx={{ fontSize: { xs: '0.895rem' } }}>
                            Milli İqtisadiyyatın Data Portalı, Dördüncü Sənaye İnqilabının Təhlili və Koordinasiya Mərkəzi (4SİM)
                            tərəfindən yaradılan innovativ məlumat platformasıdır. Portalın məqsədi Azərbaycan iqtisadiyyatı
                            üzrə açıq, etibarlı və real vaxt rejimində yenilənən məlumatları vahid məkanda cəmləşdirmək,
                            analitik imkanları genişləndirmək və qərarvermə proseslərini dəstəkləməkdir.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expanded={expanded === 'panel2'}
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                    >
                        <Typography sx={{
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.32rem' },
                            fontWeight: "700",
                            color: "#8994D7",
                            lineHeight: 1.2
                        }} component="span">
                            Məqsəd
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="flex justify-center mb-4">
                            <img className='w-full max-w-[400px]' src={Meqsed} alt="Meqsed" />
                        </div>
                        <Typography className='text-white' sx={{ fontSize: { xs: '0.895rem' } }}>
                            Milli İqtisadiyyatın Data Portalı Azərbaycan iqtisadiyyatına dair məlumatların
                            şəffaflığını və əlçatanlığını artıraraq dövlət qurumlarını, biznesləri, investorları
                            və tədqiqatçıları etibarlı məlumatlarla təmin etməyi hədəfləyir. Portal vasitəsilə iqtisadi
                            trendləri izləmək, data əsaslı qərarlar vermək və effektiv siyasət formalaşdırmaq mümkün olacaq.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expanded={expanded === 'panel3'}
                        aria-controls="panel3d-content"
                        id="panel3d-header"
                    >
                        <Typography sx={{
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.32rem' },
                            fontWeight: "700",
                            color: "#8994D7",
                            lineHeight: 1.2
                        }} component="span">
                            Missiya
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="flex justify-center mb-4">
                            <img className='w-full max-w-[400px]' src={Missya} alt="Missya" />
                        </div>
                        <Typography className='text-white' sx={{ fontSize: { xs: '0.895rem' } }}>
                            Müasir data analitika metodları və rəqəmsal texnologiyalar əsasında milli
                            iqtisadiyyata dair açıq və sistemli məlumat mühitini formalaşdırmaqdır. Portal, məlumatların
                            vahid platformada toplanmasını, vizuallaşdırılmasını və analitik imkanların genişləndirilməsini
                            təmin edərək, iqtisadi proseslərin daha dərin və dəqiq anlaşılmasına töhfə verəcək.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}