// // CustomizedAccordionsPublication

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
// import MuiAccordionSummary, {
//     AccordionSummaryProps,
//     accordionSummaryClasses,
// } from '@mui/material/AccordionSummary';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import image3 from '/report/3.png';
// import installImage from '/report/install.png';
// import PDFIqtisadi from '/report/İqtisadi_Tədqiqatlar.pdf';

// const Accordion = styled((props: AccordionProps) => (
//     <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//     border: `1px solid ${theme.palette.divider}`,

//     '&::before': {
//         display: 'none',
//     },
// }));

// const AccordionSummary = styled((props: AccordionSummaryProps) => (
//     <MuiAccordionSummary
//         expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: "white" }} />}
//         {...props}
//     />
// ))(({ theme }) => ({
//     backgroundColor: '#050412',
//     padding: theme.spacing(1),
//     color: 'white',
//     flexDirection: 'row',
//     [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
//     {
//         transform: 'rotate(90deg)',
//     },
//     [`& .${accordionSummaryClasses.content}`]: {
//         marginLeft: theme.spacing(1),
//     },
//     ...theme.applyStyles('dark', {
//         backgroundColor: 'rgba(255, 255, 255, .05)',
//     }),
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//     padding: theme.spacing(2),
//     borderTop: '1px solid white',
// }));

// export default function CustomizedAccordionsPublication() {
//     const [expanded, setExpanded] = React.useState<string | false>('');

//     const handleChange =
//         (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
//             setExpanded(newExpanded ? panel : false);
//         };

//     return (
//         <div className='h-[120vh] bg-[#050412]'>
//             <div className="px-4 lg:px-8 xl:px-10 py-6 flex justify-end items-center">
//                 <div className="max-w-2xl">
//                     <div className="mb-8">
//                         <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center md:text-left">
//                             Hesabatlar
//                         </h1>
//                     </div>

//                     {/* Filter Buttons */}
//                     <div className="flex flex-wrap gap-2 mb-8">
//                         {['Sektor', 'Tarix', 'Müəllif', 'Açıq Giriş', 'Məhdud Giriş'].map((btn) => (
//                             <button
//                                 key={btn}
//                                 className="bg-[#212330] hover:bg-[#373641] text-white px-3 py-2 rounded 
//                          text-sm md:text-base transition-colors duration-200 flex items-center"
//                             >
//                                 {btn}
//                             </button>
//                         ))}
//                     </div>

//                     {/* Accordions */}
//                     <div className="space-y-4">
//                         {[
//                             {
//                                 id: 'panel1', title: 'İqtisadi', content: 'Müasir data analitika metodları və rəqəmsal texnologiyalar əsasında milli iqtisadiyyata dair açıq və sistemli məlumat mühitini formalaşdırmaqdır. Portal, məlumatların vahid platformada toplanmasını, vizuallaşdırılmasını və analitik imkanların genişləndirilməsini təmin edərək, iqtisadi proseslərin daha dərin və dəqiq anlaşılmasına töhfə verəcək.'
//                             },
//                             { id: 'panel2', title: 'Maliyyə', content: 'Lorem ipsum...' },
//                             { id: 'panel3', title: 'Elmi', content: 'Lorem ipsum...' },
//                         ].map((item) => (
//                             <Accordion
//                                 key={item.id}
//                                 expanded={expanded === item.id}
//                                 onChange={handleChange(item.id)}
//                             >
//                                 <AccordionSummary aria-controls={`${item.id}-content`} id={`${item.id}-header`}>
//                                     <Typography component="span" className="text-base md:text-lg">
//                                         {item.title}
//                                     </Typography>
//                                 </AccordionSummary>

//                                 <AccordionDetails className="bg-[#050412] text-white">
//                                     <div className="flex justify-end mb-4">
//                                         <a
//                                             href={PDFIqtisadi}
//                                             download
//                                             className="p-2 hover:bg-gray-800 rounded transition-colors"
//                                             aria-label="Download PDF"
//                                         >
//                                             <img
//                                                 className="w-6 h-6 md:w-8 md:h-8"
//                                                 src={installImage}
//                                                 alt="Download"
//                                             />
//                                         </a>
//                                     </div>

//                                     <div className="mb-6">
//                                         <img
//                                             src={image3}
//                                             alt="Report"
//                                             className="w-full h-auto rounded-lg shadow-lg max-w-2xl mx-auto"
//                                         />
//                                     </div>

//                                     <Typography className="text-sm md:text-base leading-relaxed">
//                                         {item.content}
//                                     </Typography>
//                                 </AccordionDetails>
//                             </Accordion>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



import { Link } from 'react-router-dom';
import IconAccordion from "/report/IconAccordion.png"

export default function CustomizedAccordionsPublication() {

    return (
        <div className='bg-[#050412]'>
            <div className="px-4 lg:px-8 xl:px-10 py-6 flex justify-end items-center">
                <div className="w-[830px]">
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center md:text-left">
                            Hesabatlar
                        </h1>
                    </div>

                    {/* Filter Buttons */}
                    {/* <div className="flex flex-wrap gap-2 mb-8">
                        {['Sektor', 'Tarix', 'Müəllif', 'Açıq Giriş', 'Məhdud Giriş'].map((btn) => (
                            <button
                                key={btn}
                                className="bg-[#212330] hover:bg-[#373641] text-white px-3 py-2 rounded 
                         text-sm md:text-base transition-colors duration-200 flex items-center"
                            >
                                {btn}
                            </button>
                        ))}
                    </div> */}

                    {/* Accordions */}
                    <div className="text-white">
                        <Link to={"/academic_publications/economic_publication"}>
                            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5'  style={{ borderColor: '#373641' }}>
                                <div>
                                    <h1>İqtisadi</h1>
                                </div>
                                <div>
                                    <img className='w-7' src={IconAccordion} alt="IconAccordion" />
                                </div>
                            </div>
                        </Link>
                        <Link to={"/academic_publications/financial_publication"}>
                            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5'  style={{ borderColor: '#373641' }}>
                                <div>
                                    <h1>Maliyyə</h1>
                                </div>
                                <div>
                                    <img className='w-7' src={IconAccordion} alt="IconAccordion" />
                                </div>
                            </div>
                        </Link>
                        <Link to={"/academic_publications/science_publication"}>
                            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5'  style={{ borderColor: '#373641' }}>
                                <div>
                                    <h1>Elmi</h1>
                                </div>
                                <div>
                                    <img className='w-7' src={IconAccordion} alt="IconAccordion" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
}