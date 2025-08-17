import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CustomPhoneInput from "@/components/PhoneInput";
import { Link } from "react-router-dom";
import FileUpload from "@/components/FileUpload";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BackgroundVideo from "@/components/bg-video/BackgroundVideo";
import { Trans, useTranslation } from "react-i18next";

const ConfirmDetails = () => {
    const { t } = useTranslation()

    const handleFileChange = (file: File | null) => {
        if (file) {
            console.log('Selected file:', file);
        }
    };
    return (
        <div>
            <div>
                <div className="video-background">
                    <BackgroundVideo videoSrc="./signIn/bg-video-signIn.mp4" />
                </div>
            </div>
            <div className="flex justify-end items-center min-h-screen p-4">
                <Card className="w-full max-w-lg text-white bg-[#070618]">
                    <div className="flex items-stretch">
                        <div className="ml-4 bg-blue-400 rounded-full p-2 flex items-center  h-10">
                            <Link to={"/login"}>
                                <ArrowBackIcon className="text-white" />
                            </Link>
                        </div>
                        <div className="w-full">
                            <CardHeader className="text-center">
                                <h1 style={{ fontSize: "24px" }}>{t('auth.details.title')}</h1>
                                <p>{t('auth.details.subTitle')}</p>
                            </CardHeader>
                        </div>
                    </div>
                    <CardContent>
                        <form className="grid gap-2">
                            <div className="space-y-2 w-full">
                                <Label className="text-white" htmlFor="firstName">{t('auth.workPlace')}</Label>
                                <Input id="firstName" className="h-12" />
                            </div>

                            <div className="flex flex-col lg:flex-row gap-4 pt-2">
                                <div className="space-y-1 mb-6 w-full lg:w-9/12 grid gap-2">
                                    <Label htmlFor="phone"><p className="text-white">{t('auth.number')}</p></Label>
                                    <CustomPhoneInput />
                                    <Label className="text-white" htmlFor="date">{t('auth.date')}</Label>
                                    <Input id="date" type="date" className="h-12" />
                                </div>
                                <div className="w-full lg:w-3/12 text-white">
                                    <FileUpload
                                        onFileChange={handleFileChange}
                                        acceptedFormats={['image/jpeg', 'image/png']}
                                    />
                                </div>
                            </div>


                            <div className="flex items-start space-x-2 mb-6">
                                <div>
                                    <Checkbox className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
                                </div>
                                <div className="grid gap-1.5 leading-none">
                                    <label htmlFor="terms" className="text-sm font-medium leading-none text-white" >
                                        <Trans i18nKey="auth.policy"
                                            components={{
                                                1: <a href="/terms" className="text-blue-600 hover:underline" />,
                                                3: <a href="/privacy" className="text-blue-600 hover:underline" />
                                            }} />
                                    </label>
                                </div>
                            </div>

                            <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                                {t('auth.details.complete')}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ConfirmDetails;