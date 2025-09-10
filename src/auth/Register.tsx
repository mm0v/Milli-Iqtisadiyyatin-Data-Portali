import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import CustomPhoneInput from "@/components/PhoneInput";
import { Link } from "react-router-dom";
import FileUpload from "@/components/FileUpload";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BackgroundVideo from "@/components/bg-video/BackgroundVideo";
import { Trans, useTranslation } from "react-i18next";

const Register = () => {
    const { t } = useTranslation()
    const [showPassword, setShowPassword] = useState(false);
    const handleFileChange = (file: File | null) => {
        if (file) {
            console.log('Selected file:', file);
            // Here you can upload the file to your server or process it
        }
    };
    return (
        <div>
            <div>
                <div className="video-background">
                    <BackgroundVideo videoSrc="./signIn/bg-video-signIn.mp4" />
                </div>
                {/* <div className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                    style={{ top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#050412' }}>
                </div> */}
            </div>
            <div className="flex justify-end items-center min-h-screen p-4">
                <Card className="w-full max-w-lg text-white bg-[#070618]">
                    <div className="flex">
                        <div className="ml-4 bg-blue-400 rounded-2xl p-1">
                            <Link to={"/"}>
                                <ArrowBackIcon className="text-white" />
                            </Link>
                        </div>
                        {/* bg-transparent */}
                        <div className="w-full">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl pr-10">{t('register')}</CardTitle>
                            </CardHeader>
                        </div>
                    </div>
                    <CardContent>
                        <form>
                            <div className="flex flex-col md:flex-row mb-4 gap-2">
                                <div className="space-y-2 w-full md:w-1/2">
                                    <Label className="text-white" htmlFor="firstName">{t('auth.register.name')}</Label>
                                    <Input id="firstName" className="h-12" />
                                </div>
                                <div className="space-y-2 w-full md:w-1/2">
                                    <Label className="text-white" htmlFor="lastName">{t('auth.register.surname')}</Label>
                                    <Input id="lastName" className="h-12" />
                                </div>
                            </div>

                            <div className="space-y-2 mb-4">
                                <Label className="text-white" htmlFor="email">{t('auth.register.eMail')}</Label>
                                <Input id="email" type="email" className="h-12" />
                            </div>

                            <div className="space-y-2 mb-4">
                                <Label className="text-white" htmlFor="password">{t('auth.password')}</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"} className="h-12"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={18} className="text-white" /> : <Eye className="text-white" size={18} />}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500">
                                    {t('auth.alert')}
                                </p>
                                <Label className="text-white" htmlFor="password">{t('auth.confirmPass')}</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"} className="h-12"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={18} className="text-white" /> : <Eye className="text-white" size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row">
                                <div className=" space-y-2 mb-6 w-full lg:w-9/12">
                                    <Label htmlFor="phone"><p className="text-white">{t('auth.number')}</p></Label>
                                    <CustomPhoneInput />
                                    <Label className="text-white" htmlFor="workplace">{t('auth.workPlace')}</Label>
                                    <Input id="workplace" className="h-12" />
                                </div>
                                <div className="w-full lg:w-3/12 text-white">
                                    <FileUpload
                                        onFileChange={handleFileChange}
                                        acceptedFormats={['image/jpeg', 'image/png']}
                                    />
                                </div>
                            </div>


                            <div className="flex items-start space-x-2 mb-6 mt-4">
                                <div>
                                    <Checkbox id="terms" />
                                </div>
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none text-white"
                                    >
                                        <Trans i18nKey="auth.policy"
                                            components={{
                                                1: <a href="/terms" className="text-blue-600 hover:underline" />,
                                                3: <a href="/privacy" className="text-blue-600 hover:underline" />
                                            }} />
                                    </label>
                                </div>
                            </div>

                            <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                                {t('register')}
                            </Button>

                            <div className="text-center mt-4">
                                <Trans i18nKey="auth.register.haveAccount"
                                    components={{
                                        1: <Link to="/login" className="hover:underline text-blue-500" />
                                    }} />

                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Register;