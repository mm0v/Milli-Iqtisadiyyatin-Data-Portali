import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BackgroundVideo from '@/components/bg-video/BackgroundVideo';
import { Trans, useTranslation } from 'react-i18next';

const Login = () => {
    const { t } = useTranslation()
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

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
            <div className="flex items-center justify-end min-h-screen p-4">
                <Card className="w-full max-w-lg bg-[#070618] text-white">
                    <div className="ml-4 w-8 bg-blue-400 rounded-2xl p-1">
                        <Link to={"/"}>
                            <ArrowBackIcon className="text-white" />
                        </Link>
                    </div>
                    <CardHeader className="space-y-1 text-center">
                        <CardTitle className="text-2xl">{t('login')}</CardTitle>
                        <p className="text-sm"> <Trans i18nKey="auth.login.subTitle" components={{ 1: <Link to="/register" className="hover:underline text-blue-600" /> }} /></p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">{t('auth.login.userName')}</Label>
                            <Input id="email" type="email" className='h-12 border-2' />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">{t('auth.login.password')}</Label>
                            <div className="relative">
                                <Input id="password" type={showPassword ? "text" : "password"} className="h-12 border-2 pr-10" />
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                                </button>
                                <Link to={'/forgot-password'} className='float-end py-2 hover:underline' style={{ fontSize: '14px' }} > {t('auth.login.forgotPass')} </Link>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="remember"
                                checked={rememberMe}
                                onCheckedChange={(checked) => {
                                    setRememberMe(checked as boolean);
                                }}
                            />
                            <Label
                                htmlFor="remember"
                                className="text-sm font-normal cursor-pointer"
                            >
                                {t('auth.login.remember')}
                            </Label>
                        </div>

                        <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                            {t('login')}
                        </Button>

                        <div className="relative my-4 flex items-center">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="px-2 text-sm text-white">{t('auth.login.orContinue')}</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <Button variant="outline" className="w-full mt-4 h-12 border-gray-300 cursor-pointer text-black" >
                            <img
                                src="https://www.google.com/favicon.ico"
                                alt="Google"
                                className="w-6 h-6 mr-2"
                            />
                            {t('auth.login.continue')}
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Login;